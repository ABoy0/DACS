document.addEventListener("DOMContentLoaded", function () {
    let cartCount = document.getElementById("cart-count");
    let buttons = document.querySelectorAll(".menu-item button");

    let count = 0;

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            count++;
            cartCount.textContent = count;

            // Hiệu ứng sản phẩm bay vào giỏ hàng
            let productImage = this.parentElement.querySelector("img");
            let flyingImage = productImage.cloneNode(true);
            let cart = document.getElementById("cart");

            flyingImage.style.position = "fixed";
            flyingImage.style.width = "70px";
            flyingImage.style.height = "70px";
            flyingImage.style.zIndex = "1000";
            flyingImage.style.transition = "all 1s ease-in-out";

            let rect = productImage.getBoundingClientRect();
            flyingImage.style.left = rect.left + "px";
            flyingImage.style.top = rect.top + "px";
            
            document.body.appendChild(flyingImage);

            let cartRect = cart.getBoundingClientRect();
            setTimeout(() => {
                flyingImage.style.left = cartRect.left + "px";
                flyingImage.style.top = cartRect.top + "px";
                flyingImage.style.opacity = "0";
            }, 100);

            setTimeout(() => {
                document.body.removeChild(flyingImage);
            }, 1000);
        });
    });
});
