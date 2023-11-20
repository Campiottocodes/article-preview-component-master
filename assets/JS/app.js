const containertest = document.querySelector('.triangle');
const active = document.getElementById('active');
const button = document.getElementById('shr-btn-1');

button.addEventListener("click", function () {
    if (active.classList.contains('hide')) {
        active.classList.remove('hide');
        containertest.classList.remove('hide');
    } else {
        active.classList.add('hide');
        containertest.classList.add('hide');
    }
});





