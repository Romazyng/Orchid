import { useEffect } from "react";

const useFadeIn = (duration = "1s") => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
      // Приведение к HTMLElement
      const el = element as HTMLElement;
      el.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
    });

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, [duration]);
};

export default useFadeIn;
