document.addEventListener("click", (e) => {
  const isAccordionItem = e.target.matches("accordion__title");
  if (!isAccordionItem && e.target.closest("accordion__item") != null) return;

  let currentItem;
  if (isAccordionItem) {
    currentItem = e.target.closest("accordion__item");
    currentItem.classList.toggle("open");
  }

  document.querySelectorAll("accordion__item.open").forEach((item) => {
    if (item === currentItem) return;
    item.classList.remove("open");
  });
});
