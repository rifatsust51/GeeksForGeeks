 const placeholders = [
    "Search Algorithms...",
    "Find DSA Topics...",
    "Explore Web Development...",
    "Learn Data Science...",
    "Discover New Tutorials..."
  ];

  let index = 0;
  function changePlaceholder() {
    document.getElementById("myInput").setAttribute("placeholder", placeholders[index]);
    index = (index + 1) % placeholders.length;  
  }

  setInterval(changePlaceholder, 2000); // Changes placeholder every 2 seconds

  document.addEventListener('DOMContentLoaded', function () {
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const list = document.getElementById('list');

    // Scroll left
    scrollLeftButton.addEventListener('click', () => {
        list.scrollBy({
            left: -200, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });

    // Scroll right
    scrollRightButton.addEventListener('click', () => {
        list.scrollBy({
            left: 200, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });
});

  