document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn chặn nhảy trang
        dropdownMenu.classList.toggle("show");
    });

    // Đóng menu khi nhấn ra ngoài
    document.addEventListener("click", function (e) {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
