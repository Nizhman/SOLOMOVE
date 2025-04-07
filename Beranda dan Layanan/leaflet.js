const kategoriButton = document.getElementById('kategoriButton');
const kategoriMenu = document.getElementById('kategoriMenu');

// Toggle visibility on button click
kategoriButton.addEventListener('click', () => {
  kategoriMenu.classList.toggle('hidden');
});

// Close the menu if clicking outside
document.addEventListener('click', (event) => {
  if (!kategoriButton.contains(event.target) && !kategoriMenu.contains(event.target)) {
    kategoriMenu.classList.add('hidden');
  }
});