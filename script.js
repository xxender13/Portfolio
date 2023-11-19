function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


const themeStylesheets = document.querySelectorAll('link[rel="stylesheet"]');


function switchStylesheet(sheet) {
  themeStylesheets.forEach(link => {
    link.href = sheet; 
  });
}

// Get toggle button
const themeToggleBtn = document.getElementById('themeToggle');
const themeToggleIcon = document.getElementById('themeToggle2');

// Add click event handler
themeToggleBtn.addEventListener('click', () => {

  // Toggle <body> class 
  document.body.classList.toggle('dark-theme');

  // Store theme choice in localStorage
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  // Change stylesheet based on mode
  const sheet = isDark ? 'style2.css' : 'style.css';
  switchStylesheet(sheet);
  
});

// On load, check localStorage and apply theme
const isDark = localStorage.getItem('darkMode') === 'enabled';
if(isDark) {
  document.body.classList.add('dark-theme');
  switchStylesheet('style2.css');
}