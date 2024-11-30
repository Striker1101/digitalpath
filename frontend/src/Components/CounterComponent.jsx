import React, { useState, useEffect } from "react";

function CounterComponent({ defaultCount, defaultDuration = 2.5 }) {
  const [count, setCount] = useState(0);
  const target = defaultCount;
  const duration = defaultDuration; // Duration in seconds

  // Reference to the element you want to observe
  const counterRef = React.useRef(null);

  useEffect(() => {
    // IntersectionObserver callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the counting when the element is in view
          const stepTime = (duration * 1000) / target; // Calculate how often to increment
          const interval = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount < target) {
                return prevCount + 1;
              } else {
                clearInterval(interval);
                return target;
              }
            });
          }, stepTime);

          return () => clearInterval(interval); // Cleanup interval on unmount
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Observe the element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, duration]);

  return (
    <div ref={counterRef}>
      <div>{count}</div>
    </div>
  );
}

export default CounterComponent;
