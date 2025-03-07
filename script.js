document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Prikazivanje menija
    } else {
        menu.style.display = 'none'; // Sakrivanje menija
    }
});

document.getElementById('menuOverlay').addEventListener('click', function() {
    this.style.display = 'none'; // Sakrivanje menija
});