$(function() {
    renderNavbar();
    cartNumbers();
});

function renderNavbar() {
    $(".hamburgerBtn")
        .on("click", function() {
            $(".myUl").slideToggle();
            $(".myUl").css({
                display: "flex"
            })
            $("main").fadeToggle()
        });

    //HYPERLINK SHOPPINGCARTBUTTON -> CART
    $(".shoppingCartBtn", )
        .on("click", function() {
            window.location.href = "../AccentWebshop/HTML/cart.html";
        });

    //HYPERLINK LOGOTYPE -> HOME
    $(".logotype")
        .on("click", function() {
            window.location.href = "../AccentWebshop/index.html";
            console.log("klick");
        });
}

function cartNumbers() {

    getFromLocalStorage();

    let itemsInCart = 0;

    for (let i = 0; i < cart.length; i++) {
        itemsInCart += cart[i].quantity;
    }

    $("#counterContainer")
        .html(itemsInCart);
}