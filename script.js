function openModal() {
   var overlay = document.getElementById('overlay');
    var isOpen = overlay.style.display === 'flex';

    // Toggle the display of the overlay and modal
    overlay.style.display = isOpen ? 'none' : 'flex';
}

function closeModal() {
    // Hide the overlay and modal
    document.getElementById('overlay').style.display = 'none';

}

// Prevent click events on the modal content from closing the modal
function stopPropagation(event) {
    event.stopPropagation();
}
