// To The Top
topButton = document.getElementById("top");

topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
};