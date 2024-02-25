window.addEventListener("load", () => {});

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".parallax");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade");
        } else {
          entry.target.classList.remove("fade");
        }
      });
    },
    {
      root: null,
      rootMargin: "-80% 0px -20%",
      threshold: 0,
    }
  );
  targets.forEach((target) => {
    observer.observe(target);
  });
});
