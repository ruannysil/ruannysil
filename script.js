const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.classList.remove('fa-eye');
        showBtn.classList.add('fa-eye-slash');
    }else {
        pass_field.type = "password";
        showBtn.classList.remove('fa-eye-slash');
        showBtn.classList.add('fa-eye');
    }
});

function mudarImagem () {
    const images = [
        'url("images/02.jpg")',
        'url("images/03.jpg")',
        'url("images/04.webp")',
        'url("images/05.jpg")',
        'url("images/06.jpg")',
        'url("images/07.jpg")',
        'url("images/08.jfif")',
        'url("images/09.jfif")',
        'url("images/10.jpg")',
        'url("images/11.jpeg")',
        'url("images/12.jpg")',
        'url("images/13.jpg")',
        'url("images/14.jpeg")',
        'url("images/15.jpg")',
    ];
    const bg = images[Math.floor(Math.random() * 
    images.length)];
    document.body.style.backgroundImage = bg;
}
    setInterval(mudarImagem, 6000)