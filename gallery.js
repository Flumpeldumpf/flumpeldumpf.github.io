function openModal(src) {
    console.log("Modal open triggered with", src);
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modalImg.src = src;
    modal.classList.add("show");
    document.addEventListener("keydown", handleKeyDown);

    modal.addEventListener("click", handleBackgroundClick);

    modalImg.addEventListener("touchstart", handleTouchStart, { passive: true });
    modalImg.addEventListener("touchend", handleTouchEnd);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.classList.remove("show");
    document.removeEventListener("keydown", handleKeyDown);
    modal.removeEventListener("click", handleBackgroundClick);

    modalImg.removeEventListener("touchstart", handleTouchStart);
    modalImg.removeEventListener("touchend", handleTouchEnd);
}

function handleKeyDown(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

function handleBackgroundClick(event) {
    if (event.target.id === "imageModal") {
        closeModal();
    }
}

let startY = 0;

function handleTouchStart(event) {
    if (event.touches.length === 1) {
        startY = event.touches[0].clientY;
    }
}

function handleTouchEnd(event) {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - startY;

    // Swipe down threshold
    if (deltaY > 100) {
        closeModal();
    }
}
