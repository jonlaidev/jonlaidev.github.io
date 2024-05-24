// javascript_modal_elements
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("close");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

// open_modal
openModalButton.addEventListener("click", () => {
    modal.style.display = "block"; // make_modal_visible
    overlay.style.display = "block"; // make_overlay_visible
});

// close_modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"; // hide_modal
    overlay.style.display = "none"; // hide_overlay
});

// close_modal_by_clicking_on_overlay
overlay.addEventListener("click", () => {
    closeModalButton.click(); // use_same_logic_as_closing
});