// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById('expose');
  const hornSelect = document.getElementById('horn-select');

  // Function to change the image selected
  function changeImage() {
    const airHorn = expose.children[1];
    if(hornSelect.selectedOptions[0] == hornSelect.options[1]) {
      airHorn.src = "assets/images/air-horn.svg";
    }
    if(hornSelect.selectedOptions[0] == hornSelect.options[2]) {
      airHorn.src = "assets/images/car-horn.svg";
    }
    if(hornSelect.selectedOptions[0] == hornSelect.options[3]) {
      airHorn.src = "assets/images/party-horn.svg";
    }
  }
  // Event Listener to change the image
  hornSelect.addEventListener('change', changeImage);
};