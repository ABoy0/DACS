document.addEventListener("DOMContentLoaded", function () {
    // Xử lý dropdown menu
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Xử lý cuộn đến danh mục khi nhấn vào mục menu
    // Xử lý cuộn đến danh mục khi nhấn vào mục menu
document.querySelectorAll(".dropdown-menu li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let targetText = this.textContent.toUpperCase().trim();
        let targetSections = document.querySelectorAll("h2");

        let targetSection = Array.from(targetSections).find(
            h2 => h2.textContent.toUpperCase().trim() === targetText
        );

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            event.stopImmediatePropagation();
        } else {
            console.error("Không tìm thấy danh mục:", targetText);
        }
    });
});

    // Xử lý nút "Đặt món ngay" -> Cuộn đến danh mục đầu tiên
    let btnDatMon = document.querySelector(".btn-primary");
    let danhMucMonAn = document.querySelector("h2");

    if (btnDatMon && danhMucMonAn) {
        btnDatMon.addEventListener("click", function (event) {
            event.preventDefault();
            danhMucMonAn.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // Xử lý sự kiện click cho nút "XEM THÊM"
    let viewMoreButtons = document.querySelectorAll(".view-more");

    viewMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation(); // Chặn sự kiện lan ra ngoài

            let targetText = this.getAttribute("data-target").toUpperCase().trim();
            let targetSections = document.querySelectorAll("h2");

            let targetSection = Array.from(targetSections).find(
                h2 => h2.textContent.toUpperCase().trim() === targetText
            );

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                event.stopImmediatePropagation();
            } else {
                console.error("Không tìm thấy danh mục:", targetText);
            }
        });
    });

    // Xử lý slider trượt menu
    let sliders = document.querySelectorAll(".menu-wrapper");

    sliders.forEach(slider => {
        let nextBtn = slider.querySelector(".next");
        let prevBtn = slider.querySelector(".prev");
        let menuItems = slider.querySelector(".menu-items");

        let itemWidth = menuItems.querySelector(".menu-item").offsetWidth;
        let scrollAmount = itemWidth * 3;

        nextBtn.addEventListener("click", function () {
            menuItems.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", function () {
            menuItems.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    });
});
