const navToggle = document.querySelector("[data-nav-toggle]");
const topbar = document.querySelector(".topbar");
const navLinks = document.querySelectorAll(".topbar__nav a");
const progressFill = document.querySelector("[data-progress]");
const revealItems = document.querySelectorAll("[data-reveal]");
const compareBlocks = document.querySelectorAll("[data-compare]");
const copyButtons = document.querySelectorAll("[data-copy]");
const toast = document.querySelector("[data-toast]");
const yearSlot = document.querySelector("[data-year]");

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}

if (navToggle && topbar) {
  navToggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const updateProgress = () => {
  if (!progressFill) {
    return;
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressFill.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
};

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

compareBlocks.forEach((block) => {
  const range = block.querySelector(".compare__range");

  if (!range) {
    return;
  }

  const syncSplit = () => {
    block.style.setProperty("--split", `${range.value}%`);
  };

  syncSplit();
  range.addEventListener("input", syncSplit);
});

let toastTimer;

const showToast = (message) => {
  if (!toast) {
    return;
  }

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
};

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      showToast(`Copied: ${value}`);
    } catch {
      showToast("Copy failed. Update this button after launch.");
    }
  });
});
