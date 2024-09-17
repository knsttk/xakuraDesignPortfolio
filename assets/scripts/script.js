document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Функция для показа/скрытия кнопки в зависимости от прокрутки
    window.onscroll = function() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollToTopBtn.style.right = "50px"; // Плавно выезжает на экран
        } else {
            scrollToTopBtn.style.right = "-70px"; // Плавно уезжает за правый край
        }
    };

    // Функция для прокрутки страницы наверх при нажатии
    scrollToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth' // Плавная прокрутка
        });
    }
}
const burgerIcon = document.getElementById('burgerIcon');
    const menu = document.getElementById('menu');

    // Обработчик клика по иконке бургер-меню
    burgerIcon.onclick = function() {
        menu.classList.toggle('active');
        burgerIcon.classList.toggle('open'); // Переключаем класс для показа/скрытия меню
    };