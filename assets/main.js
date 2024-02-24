window.addEventListener("load", () => {});

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("section.flyer");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("fix");
        } else {
          entry.target.classList.remove("fix");
        }
        // observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -100%",
      threshold: 0,
    }
  );

  observer.observe(target);
});
