import "@fontsource-variable/roboto";

import "@/scripts/dialog";

import "@/styles/index.css";

document.getElementById("open-dialog-btn")?.addEventListener("click", () => {
  (document.getElementById("dialog-demo") as HTMLDialogElement)?.showModal();
});
