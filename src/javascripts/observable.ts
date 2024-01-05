const observables = document.querySelectorAll(".observable");

setTimeout(
  () =>
    observables.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting) entry.target.classList.add("observed");
          // else entry.target.classList.remove("observed");
        },
        { threshold: 1 }
      );

      observer.observe(item);
    }),
  1000
);
