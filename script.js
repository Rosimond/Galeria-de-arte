console.log("Cargando página");
document.querySelectorAll('.portrait-gallery img').forEach(portrait =>
    {
        portrait.onclick =() =>
        {
            document.querySelector('.popup-img').style.display = 'block';
            document.querySelector('.popup-img img').src = portrait.getAttribute('src');
        }
    });

    document.querySelector('.popup-img span').onclick = () =>
    {
        document.querySelector('.popup-img').style.display = 'none';
    }