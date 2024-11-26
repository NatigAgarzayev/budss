export const cookieModal = () => {
    const cookieModal = document.querySelector('.cookie__modal'),
        closeBtn = document.querySelector('.cookie__close'),
        acceptBtn = document.querySelector('.cookie__btn-accept'),
        declineBtn = document.querySelector('.cookie__btn-decline');

    setTimeout(() => {
        cookieModal.classList.add('active');
    }, 500)

    closeBtn.addEventListener('click', () => {
        cookieModal.classList.remove('active');
    })
    acceptBtn.addEventListener('click', () => {
        cookieModal.classList.remove('active');
    })
    declineBtn.addEventListener('click', () => {
        cookieModal.classList.remove('active');
    })
}