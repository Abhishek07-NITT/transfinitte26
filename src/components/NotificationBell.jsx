import React, { useState, useEffect, useRef, useMemo } from "react";
import { Bell, ChevronDown, CheckCheck, Clock } from "lucide-react";
import { fetchCalendarNotifications } from "../services/calendarService";

const CURSOR_KEY = "notifications_cursor";
const SYNC_EVENT = "notifications_cursor_updated";
const INITIAL_LIMIT = 4;

function formatRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  if (diff < 0) return "Just now";
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function NotificationBell({ feed: propFeed }) {
  const [feed, setFeed] = useState(propFeed || []);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(INITIAL_LIMIT);
  const containerRef = useRef(null);

  // Fetch Google Calendar notifications on mount (if configured)
  useEffect(() => {
    if (!propFeed) {
      fetchCalendarNotifications().then((loadedFeed) => {
        if (Array.isArray(loadedFeed)) {
          setFeed(loadedFeed);
        }
      });
    }
  }, [propFeed]);

  // Sort feed descending by createdAt (latest first)
  const sortedFeed = useMemo(() => {
    return [...feed].sort((a, b) => b.createdAt - a.createdAt);
  }, [feed]);

  // Read stored high-water mark cursor from localStorage
  const [cursor, setCursor] = useState(() => {
    const raw = localStorage.getItem(CURSOR_KEY);
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  });

  // Keep instances (e.g. mobile & desktop headers) in sync
  useEffect(() => {
    const handleSync = () => {
      const raw = localStorage.getItem(CURSOR_KEY);
      const parsed = Number(raw);
      if (Number.isFinite(parsed)) {
        setCursor(parsed);
      }
    };

    window.addEventListener(SYNC_EVENT, handleSync);
    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener(SYNC_EVENT, handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, []);

  // Calculate unread count (strictly newer than stored cursor)
  const unreadCount = useMemo(() => {
    return sortedFeed.filter((item) => item.createdAt > cursor).length;
  }, [sortedFeed, cursor]);

  // Sliced feed for 4 messages initial display
  const visibleNotifications = useMemo(() => {
    return sortedFeed.slice(0, visibleLimit);
  }, [sortedFeed, visibleLimit]);

  const hasMore = visibleLimit < sortedFeed.length;

  // Mark all notifications present in feed up to latest as seen
  const markFeedAsSeen = () => {
    if (sortedFeed.length === 0) return;
    const latestItemTimestamp = sortedFeed[0].createdAt;
    const targetTimestamp = Math.max(latestItemTimestamp, Date.now());

    setCursor(targetTimestamp);
    localStorage.setItem(CURSOR_KEY, String(targetTimestamp));
    window.dispatchEvent(new Event(SYNC_EVENT));
  };

  const handleToggle = () => {
    const willOpen = !isOpen;
    if (willOpen) {
      markFeedAsSeen();
    }
    setIsOpen(willOpen);
  };

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSeeMore = () => {
    setVisibleLimit((prev) => prev + INITIAL_LIMIT);
  };

  return (
    <div className="relative inline-flex items-center" ref={containerRef}>
      {/* Bell Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Notifications"
        aria-expanded={isOpen}
        className="relative p-2 rounded-full text-[#1D1D1F] dark:text-offwhite hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none"
      >
        <Bell className="w-5 h-5 transition-transform duration-200 hover:scale-105" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white leading-none shadow-sm font-spacemono">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Popover Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-2xl bg-white/95 dark:bg-[#0B0B0C]/95 backdrop-blur-xl border border-[#1D1D1F]/10 dark:border-[#EDEDED26] shadow-2xl z-[100] overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#1D1D1F]/10 dark:border-[#EDEDED26] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <h3 className="font-spacegrotesk font-semibold text-sm text-[#1D1D1F] dark:text-white uppercase tracking-wider">
                Notifications
              </h3>
              <span className="text-[11px] font-spacemono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F]/70 dark:text-offwhite/70">
                {sortedFeed.length}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-spacemono text-green-600 dark:text-green-400">
              <CheckCheck className="w-3.5 h-3.5" />
              <span>All read</span>
            </div>
          </div>

          {/* Feed List */}
          <div className="max-h-[380px] overflow-y-auto divide-y divide-[#1D1D1F]/5 dark:divide-[#EDEDED15] scrollbar-thin">
            {visibleNotifications.length === 0 ? (
              <div className="p-8 text-center text-xs font-spacemono text-zinc-500">
                No notifications to display.
              </div>
            ) : (
              visibleNotifications.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors duration-150"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-spacegrotesk font-medium text-xs text-[#1D1D1F] dark:text-offwhite leading-snug">
                      {item.title}
                    </h4>
                    <span className="flex items-center gap-1 text-[10px] font-spacemono text-[#1D1D1F]/50 dark:text-offwhite/50 shrink-0">
                      <Clock className="w-3 h-3 opacity-70" />
                      {formatRelativeTime(item.createdAt)}
                    </span>
                  </div>
                  {item.message && (
                    <p className="mt-1 text-xs text-[#1D1D1F]/70 dark:text-offwhite/70 font-spacemono leading-relaxed">
                      {item.message}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer: See More Button */}
          {hasMore && (
            <div className="p-2.5 border-t border-[#1D1D1F]/10 dark:border-[#EDEDED26] bg-black/[0.02] dark:bg-white/[0.02] text-center">
              <button
                type="button"
                onClick={handleSeeMore}
                className="w-full py-1.5 px-3 rounded-lg text-xs font-spacemono font-semibold text-[#1D1D1F] dark:text-offwhite hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                <span>See More ({sortedFeed.length - visibleLimit} remaining)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
