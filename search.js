// MIT License

// Copyright (c) 2024 Nokky07

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Function to handle search action
function performSearch() {
  var searchTerm = document.getElementById('mysearch').value.toLowerCase();
  var buttons = document.querySelectorAll('.games a');
  var gameFound = false; // Flag to track if a game is found

  // Loop through all game buttons
  buttons.forEach(function(button) {
    var gameName = button.id.replace('-', ' ').toLowerCase();
    var gameButton = button.querySelector('button');

    // If the search term is empty, show all buttons; otherwise, show only matching buttons
    if (searchTerm === '' || gameName.includes(searchTerm)) {
      gameButton.style.display = 'inline-block';
      gameButton.classList.remove('fade-out');
      gameFound = true; // Set gameFound flag to true if a matching game is found
    } else {
      gameButton.style.display = 'none';
      gameButton.classList.add('fade-out');
    }
  });

  // If no matching game is found, display the "Game Not Found! :(" message
  document.getElementById('notFoundMessage').style.display = gameFound ? 'none' : 'block';
}

// Function to clear search input
function clearSearch() {
  document.getElementById('mysearch').value = '';
  performSearch(); // Clearing the search input should also update the displayed buttons
}