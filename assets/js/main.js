let asideMenuButton = document.getElementById('aside-menu-button');
let asideSection = document.getElementById('asidesection');
let lgHide = document.querySelectorAll('.lg-hide'); 
let dashboardContentWidth = document.getElementById('dashboardcontentwidth');
let icon = asideMenuButton.querySelector('.aside-menu-icon');

asideMenuButton.addEventListener('click', function() {
    // Toggle classes for asideSection and dashboardContentWidth
    asideSection.classList.toggle("asideMenu-smallwidth");
    dashboardContentWidth.classList.toggle("dashboard-content-width");

    // Loop through the NodeList and toggle 'lg-hide-menu' on each element
    lgHide.forEach(function(item) {
        item.classList.toggle("lg-hide-menu");
    });
    // if (icon.classList.contains('icon-back-to-icons-aside')) {
    //     icon.classList.remove('icon-back-to-icons-aside');
    //     icon.classList.add('icon-full-aside'); 
    // } else {
    //     icon.classList.remove('icon-full-aside');
    //     icon.classList.add('icon-back-to-icons-aside');
    // }
});