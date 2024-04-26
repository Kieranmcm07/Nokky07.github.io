// Function to handle search action
function performSearch() {
  var searchTerm = document.getElementById('mysearch').value.toLowerCase();
  var buttons = document.querySelectorAll('.games a');

  // Loop through all game buttons
  buttons.forEach(function (button) {
    var gameName = button.id.replace('-', ' ').toLowerCase();
    var gameButton = button.querySelector('button');

    // If the search term is empty, show all buttons; otherwise, show only matching buttons
    if (searchTerm === '' || gameName.includes(searchTerm)) {
      gameButton.style.display = 'inline-block';
      gameButton.classList.remove('fade-out');
    } else {
      gameButton.style.display = 'none';
      gameButton.classList.add('fade-out');
    }
  });
}

// Function to clear search input
function clearSearch() {
  document.getElementById('mysearch').value = '';
  performSearch(); // Clearing the search input should also update the displayed buttons
}