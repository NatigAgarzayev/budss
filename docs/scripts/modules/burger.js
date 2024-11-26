export const burger = () => {
    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.burger__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        if(burger.classList.contains('active')) {
            menu.classList.add('active');
            document.body.style.overflow = 'hidden'
        } else {
            menu.classList.remove('active');
            document.body.style.overflow = 'auto'
        }
    })
}