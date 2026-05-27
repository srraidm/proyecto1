const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        updateButtonText();
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        updateButtonText();
    }
}

function updateButtonText() {
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = 'Modo Oscuro 🌙';
    } else {
        themeToggleBtn.textContent = 'Modo Claro ☀️';
    }
}

function toggleTheme() {
    body.classList.toggle('light-mode');
    
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    updateButtonText();
}

themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', applyTheme);

applyTheme();
