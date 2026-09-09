let cart_count = 0;


/* Mobile Menu */

const menu_button = document.getElementById("menu_button");
const nav_menu = document.getElementById("nav_menu");


menu_button.addEventListener("click", function () {

    nav_menu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

const nav_links = document.querySelectorAll(".nav-menu a");


nav_links.forEach(function (nav_link) {

    nav_link.addEventListener("click", function () {

        nav_menu.classList.remove("active");

    });

});


/* Search */

const search_button = document.getElementById("search_button");
const search_container = document.getElementById("search_container");
const search_input = document.getElementById("search_input");


search_button.addEventListener("click", function () {

    search_container.classList.toggle("active");

    if (search_container.classList.contains("active")) {

        search_input.focus();

    }

});


/* Product Search */

search_input.addEventListener("input", function () {

    const search_value =
        search_input.value.toLowerCase().trim();

    const product_cards =
        document.querySelectorAll(".product-card");


    product_cards.forEach(function (product_card) {

        const product_name =
            product_card
                .querySelector("h3")
                .textContent
                .toLowerCase();


        if (product_name.includes(search_value)) {

            product_card.style.display = "";

        } else {

            product_card.style.display = "none";

        }

    });

});


/* Add to Cart */

const add_buttons =
    document.querySelectorAll(".add-button");

const cart_count_element =
    document.getElementById("cart_count");

const cart_message =
    document.getElementById("cart_message");


add_buttons.forEach(function (add_button) {

    add_button.addEventListener("click", function () {

        cart_count++;

        cart_count_element.textContent = cart_count;


        const product_name =
            add_button.getAttribute("data-name");


        cart_message.textContent =
            product_name + " added to cart ✓";


        cart_message.classList.add("show");


        setTimeout(function () {

            cart_message.classList.remove("show");

        }, 2500);

    });

});


/* Wishlist */

const wishlist_buttons =
    document.querySelectorAll(".wishlist-button");


wishlist_buttons.forEach(function (wishlist_button) {

    wishlist_button.addEventListener("click", function () {

        wishlist_button.classList.toggle("liked");


        if (
            wishlist_button.classList.contains("liked")
        ) {

            wishlist_button.textContent = "♥";

        } else {

            wishlist_button.textContent = "♡";

        }

    });

});


/* Product Filter */

const filter_buttons =
    document.querySelectorAll(".filter-button");

const product_cards =
    document.querySelectorAll(".product-card");


filter_buttons.forEach(function (filter_button) {

    filter_button.addEventListener("click", function () {

        filter_buttons.forEach(function (button) {

            button.classList.remove("active");

        });


        filter_button.classList.add("active");


        const selected_category =
            filter_button.getAttribute("data-category");


        product_cards.forEach(function (product_card) {

            const product_category =
                product_card.getAttribute("data-category");


            if (
                selected_category === "all" ||
                selected_category === product_category
            ) {

                product_card.style.display = "";

            } else {

                product_card.style.display = "none";

            }

        });

    });

});


/* Newsletter */

const newsletter_form =
    document.getElementById("newsletter_form");

const email_input =
    document.getElementById("email_input");


newsletter_form.addEventListener("submit", function (event) {

    event.preventDefault();


    const email_value =
        email_input.value.trim();


    if (email_value !== "") {

        cart_message.textContent =
            "Thank you for subscribing ✓";


        cart_message.classList.add("show");


        email_input.value = "";


        setTimeout(function () {

            cart_message.classList.remove("show");

        }, 2500);

    }

});


/* Cart Button */

const cart_button =
    document.getElementById("cart_button");


cart_button.addEventListener("click", function () {

    if (cart_count === 0) {

        cart_message.textContent =
            "Your cart is empty.";

    } else {

        cart_message.textContent =
            "You have " + cart_count + " item(s) in your cart.";

    }


    cart_message.classList.add("show");


    setTimeout(function () {

        cart_message.classList.remove("show");

    }, 2500);

});