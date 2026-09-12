import React from "react";
import { Link } from "react-router-dom";
import { GoodieCard, goodies } from "./GoodiesMerch";

const MerchPage = () => (
  <main className="min-h-screen bg-[#F3F6FA] px-4 py-6 text-[#1D1D1F] transition-colors duration-300 dark:bg-black dark:text-[#EDEDED] sm:px-8 lg:px-12 lg:py-10">
    <div className="mx-auto max-w-6xl">
      <header className="flex items-center justify-between border-b border-[#E1E6EB] pb-6 dark:border-[#454545]">
        <Link
          to="/"
          className="font-spacemono text-xs uppercase text-[#6B6B6B] transition-colors hover:text-[#1D1D1F] dark:text-[#A1A1A1] dark:hover:text-white"
        >
          ← Back to Transfinitte
        </Link>
        <span className="font-spacemono text-xs text-[#6B6B6B] dark:text-[#A1A1A1]">
          TF26 / SHOP
        </span>
      </header>

      <section className="py-16 sm:py-24">
        <p className="font-spacemono text-xs uppercase tracking-[0.18em] text-[#6B6B6B] dark:text-[#A1A1A1]">
          Limited edition drop
        </p>
        <h1 className="mt-4 max-w-3xl font-spacegrotesk text-5xl font-normal leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Carry the Transfinitte energy.
        </h1>
        <p className="mt-6 max-w-xl font-spacemono text-sm leading-7 text-[#6B6B6B] dark:text-[#A1A1A1]">
          Pick up official event merch and goodies while stocks last. Reserve
          your favourites with the Technical Council at the event.
        </p>
      </section>

      <section aria-label="Available merchandise" className="grid gap-5 md:grid-cols-3">
        {goodies.map((item) => (
          <div key={item.name} className="flex flex-col gap-4">
            <GoodieCard item={item} />
            <a
              href={`mailto:technicalcouncil@pragyan.org?subject=Merch%20reservation%20-%20${encodeURIComponent(item.name)}`}
              className="rounded-[3px] border border-[#1D1D1F] px-4 py-3 text-center font-spacemono text-xs uppercase transition-colors hover:bg-[#1D1D1F] hover:text-white dark:border-[#EDEDED] dark:hover:bg-[#EDEDED] dark:hover:text-black"
            >
              Reserve this item ↗
            </a>
          </div>
        ))}
      </section>

      <p className="mt-12 border-t border-[#E1E6EB] pt-6 font-spacemono text-xs leading-6 text-[#6B6B6B] dark:border-[#454545] dark:text-[#A1A1A1]">
        Quantities are limited. Availability and payment will be confirmed by
        the event team.
      </p>
    </div>
  </main>
);

export default MerchPage;
