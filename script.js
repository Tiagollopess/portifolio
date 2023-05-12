const chk = document.getElementById('chk');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
document.body.classList.add('dark');
} else {
document.body.classList.add('light');
}

chk.checked = currentTheme === 'dark';

chk.addEventListener('change', () => {
if (chk.checked) {
document.body.classList.add('dark');
document.body.classList.remove('light');
localStorage.setItem('theme', 'dark');
} else {
document.body.classList.add('light');
document.body.classList.remove('dark');
localStorage.setItem('theme', 'light');
}
});

