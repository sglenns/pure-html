const dialogs = document.querySelectorAll("dialog");

for (const dialog of dialogs) {
  if (dialog.previousElementSibling?.tagName !== "BUTTON") {
    continue;
  }
  const showButton = dialog.previousElementSibling;
  const closeButton = dialog.querySelector("button");
  console.log({ showButton, closeButton });
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  closeButton?.addEventListener("click", () => {
    dialog.close();
  });
}
