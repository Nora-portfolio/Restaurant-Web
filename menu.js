document.addEventListener('mousemove', function(event) {
    const sidebar = document.getElementById('sidebar');
    if (event.clientX > window.innerWidth - 130) {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-200px';
    }
});
