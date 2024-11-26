export const headerTab = () => {
    const tabs = document.querySelectorAll('.tabs-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}