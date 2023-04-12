const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el: Element) => observer.observe(el as HTMLElement));
