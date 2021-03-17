$(function() {
    renderProducts();
    renderProductInfo();

    $("#mainProducts")
        .hide()
        .fadeIn(1000)
});

function renderProducts() {
    $.each(myProducts, (i, product) => {

        let divTag = $("<div>")
            .addClass("eachProduct")
            .appendTo($("#productsContainer"))

        $("<img>")
            .addClass("productImage")
            .attr("src", product.image)
            .attr("alt", product.name + " perfume bottle")
            .attr("id", product.id)
            .on("click", { product: product }, function() {

                $("<div>")
                    .addClass("myModal")
                    .appendTo($("#mainProducts"));

                $("body")
                    .addClass("lockScreen");

                let productInfoBox = $("<div>")
                    .addClass("productInfoBox")
                    .hide()
                    .fadeIn(300)
                    .appendTo($("#mainProducts"))

                $("<img>")
                    .addClass("infoBoxImage")
                    .attr("src", product.image)
                    .attr("alt", product.name + " perfume bottle")
                    .attr("id", product.id)
                    .appendTo(productInfoBox);

                let details = $("<div>")
                    .addClass("detailsContainer")
                    .appendTo(productInfoBox)

                $("<h3>")
                    .html(product.name)
                    .appendTo(details);

                $("<h4>")
                    .html(product.price + " SEK")
                    .appendTo(details);

                $("<button>")
                    .addClass("addToCartBtn")
                    .html("ADD TO CART")
                    .on("click", { product: product }, function() {
                        let foundProduct = false;

                        for (let i = 0; i < cart.length; i++) {
                            if (cart[i].product.id === product.id) {
                                foundProduct = true;
                                cart[i].quantity++;
                            }
                        }

                        if (foundProduct === false) {
                            let addedItem = new CartItem(product, 1);
                            cart.push(addedItem);
                        }

                        //MAIN.JS
                        setToLocalStorage();

                        //NAVBAR.JS
                        cartNumbers();
                    })
                    .appendTo(details)

                $("<p>")
                    .html(product.details)
                    .appendTo(details)

                $("<h5>")
                    .html("Volume")
                    .appendTo(details)

                $("<p>")
                    .html("350ml")
                    .appendTo(details)

                $("<h5>")
                    .html("Ingredients")
                    .appendTo(details)

                $("<p>")
                    .html("Duis, Aute irure, Dolor in, Reprehenderit, In Voluptate, Velit Esse Cillum, Dolore Eu Fugiat, Nulla, Pariatur, Excepteur, Sint Occaecat, Cupidatat (non proident), Sunt In Culpa, Qui Officia Deserunt, Mollit, Anim Id Est, Laborum.")
                    .appendTo(details)

                $("<h5>")
                    .addClass("backToShopBtn")
                    .html("&#8592" + " <u>Back to shop</u>")
                    .on("click", function() {
                        $(".productInfoBox")
                            .fadeOut(300, function() {
                                $(".myModal")
                                    .remove()

                                $("body")
                                    .removeClass("lockScreen")

                                $(".productInfoBox")
                                    .remove()
                            });
                    })
                    .appendTo(details)

                $("<span>")
                    .addClass("crossMark")
                    .html("&#10005")
                    .on("click", function() {
                        $(".productInfoBox")
                            .fadeOut(300, function() {
                                $(".myModal")
                                    .remove()

                                $("body")
                                    .removeClass("lockScreen")

                                $(".productInfoBox")
                                    .remove()
                            });
                    })
                    .appendTo(details)

            })
            .appendTo(divTag);

        let descDiv = $("<div>")
            .addClass("descDiv")
            .appendTo(divTag);

        $("<p>")
            .html(product.name + "<br>" + product.price + " SEK")
            .appendTo(descDiv);

        $("<button>")
            .addClass("addCartBtn")
            .attr("type", "button")
            .html("<i class='fas fa-cart-plus'></i>")
            .on("click", { product: product }, function() {

                let foundProduct = false;

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.id) {
                        foundProduct = true;
                        cart[i].quantity++;
                    }
                }

                if (foundProduct === false) {
                    let addedItem = new CartItem(product, 1);
                    cart.push(addedItem);
                }

                //MAIN.JS
                setToLocalStorage();

                //NAVBAR.JS
                cartNumbers();
            })
            .appendTo(descDiv);
    });

    $("<div>")
        .attr("id", "cartBtnContainer")
        .appendTo("#productsContainer")

    $("<button>")
        .attr("id", "goCartBtn")
        .html("<i class='fas fa-shopping-cart'></i> " + "Go to Shopping Cart")
        .on("click", function() {
            window.location.href = "HTML/cart.html";
        })
        .appendTo("#cartBtnContainer")
}

function renderProductInfo() {

}