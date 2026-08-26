import React, { useEffect } from 'react';

// CounterStats Component
const CounterStats = ({ stats }) => {

  useEffect(() => {
    // Counter animation using Intersection Observer to trigger animation when in view
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counting');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-count');
            let count = 0;
            const speed = target / 300; // control speed by adjusting this value

            const updateCount = () => {
              if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
            // Stop observing after animation starts
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.1 }); // Adjust threshold as needed

      counters.forEach(counter => {
        observer.observe(counter);
      });
    };

    animateCounters();
  }, [stats]);

  return (
    <section id="counter-stats" className="flex items-center w-full justify-around">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="stats flex flex-col justify-center items-center text-center text-2xl gap-4">
              <div className="text-[#A0A0A0] mb-4">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  width="75px"
                />
              </div>
              <div className="counting text-white font-mono text-[5rem]" data-count={stat.count}>0</div>
              <h5 className="text-[#A0A0A0] text-[2rem] leading-[1.25] font-mono mt-2">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStats;
