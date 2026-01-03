document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("span");

    content.style.display =
      content.style.display === "block" ? "none" : "block";
    icon.textContent = icon.textContent === "+" ? "−" : "+";
  });
});

const counters = document.querySelectorAll(".counter");
let started = false;

window.addEventListener("scroll", () => {
  if (started) return;
  const stats = document.querySelector(".stats");
  if (stats.getBoundingClientRect().top < window.innerHeight) {
    started = true;
    counters.forEach(counter => {
      let count = 0;
      const target = +counter.dataset.target;
      const interval = setInterval(() => {
        count++;
        counter.textContent = count + "%";
        if (count === target) clearInterval(interval);
      }, 20);
    });
  }
});
