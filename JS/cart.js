$(function() {
    renderCart();

    $("#mainCart")
        .hide()
        .fadeIn(1000)
});

function renderCart() {

    setToLocalStorage();
    getFromLocalStorage();

    $(".tableContainer")
        .remove();

    let main = $("#mainCart")

    $("<div>")
        .addClass("tableContainer")
        .appendTo(main);

    $("<table>")
        .appendTo(".tableContainer");

    let tableHeads = $("<tr>")
        .appendTo("table");

    $("<th>")
        .html("<u>Product</u>")
        .appendTo(tableHeads);

    $("<th>")
        .html("<u>Price</u>")
        .appendTo(tableHeads);

    $("<th>")
        .html("<u>Quantity</u>")
        .appendTo(tableHeads);

    $("<th>")
        .html("<u>Total</u>")
        .appendTo(tableHeads);

    //CHECK IF SHOPPINGCART IS EMPTY
    if (cart.length === 0) {
        $("<h1>")
            .addClass("errorMsg")
            .html("Your shopping cart is empty!")
            .appendTo(main)

        $("<h1>")
            .addClass("errorMsg")
            .html("&#8592" + " <u>Go get some stuff!</u>")
            .on("click", function() {

                window.location.href = "HTML/products.html"
            })
            .appendTo(main)

        return
    }

    $.each(cart, (i, product) => {

        let tableRow = $("<tr>")
            .appendTo("table")

        let dropDownRow = $("<tr>")
            .addClass("phoneRow")
            .appendTo("table")

        let productTd = $("<td>")
            .addClass("productTd")
            .appendTo(tableRow);

        let productContainer = $("<div>")
            .addClass("productContainer")
            .appendTo(productTd)

        //Product decrease button
        $("<button>")
            .attr("type", "button")
            .addClass("qtyBtn")
            .html("&#8722")
            .on("click", function() {

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.product.id) {
                        cart[i].quantity--;

                        if (cart[i].quantity === 0) {
                            cart.splice([i], 1);
                        }
                        renderCart();
                    }
                }
            })
            .appendTo(productContainer);

        //Product container
        let productSpan = $("<span>")
            .addClass("productSpan")
            .appendTo(productContainer)

        //Product image
        $("<img>")
            .attr("src", product.product.image)
            .attr("alt", product.product.name + " perfume bottle")
            .appendTo(productSpan)

        //Product Name
        $("<p>")
            .html(product.product.name)
            .appendTo(productSpan)

        //Remove button
        $("<button>")
            .attr("type", "button")
            .html("Remove")
            .on("click", function() {

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.product.id) {
                        cart.splice([i], 1);
                        renderCart();
                    }
                }
            })
            .appendTo(productSpan)

        //Product increase button
        $("<button>")
            .attr("type", "button")
            .addClass("qtyBtn")
            .html("&#43;")
            .on("click", function() {
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.product.id) {
                        product.quantity++;
                        renderCart();
                    }
                }
            })
            .appendTo(productContainer);

        $("<td>")
            .addClass("phoneDescription")
            .html(product.product.name + "<br>" + "(x" + product.quantity + ")")
            .appendTo(tableRow);

        $("<td>")
            .addClass("ghostTd")
            .appendTo(tableRow)

        $("<td>")
            .addClass("tdPrice")
            .html(product.product.price + " SEK")
            .appendTo(tableRow)

        $("<td>")
            .addClass("tdQty")
            .html(product.quantity + "pc")
            .appendTo(tableRow)

        $("<td>")
            .addClass("tdTotal")
            .html(product.product.price * product.quantity + " SEK")
            .appendTo(tableRow)

        let phoneTd1 = $("<td>")
            .appendTo(dropDownRow)

        $("<button>")
            .attr("type", "button")
            .attr("id", "phoneRemoveBtn")
            .html("Remove")
            .on("click", function() {

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.product.id) {
                        cart.splice([i], 1);
                        renderCart();
                    }
                }
            })
            .appendTo(phoneTd1);

        $("<td>")
            .html("quantity:")
            .appendTo(dropDownRow)

        let phoneInputTd = $("<td>")
            .appendTo(dropDownRow)

        let qtyInput = $("<input>")
            .attr("type", "number")
            .appendTo(phoneInputTd)

        let phoneTd4 = $("<td>")
            .appendTo(dropDownRow)

        //Update input:number
        $("<button>")
            .attr("type", "button")
            .addClass("phoneUpdateBtn")
            .html("Update")
            .on("click", function() {

                for (let i = 0; i < cart.length; i++) {

                    if (cart[i].product.id === product.product.id) {
                        if (qtyInput.val() === null) {
                            alert("enter valid number")
                        }
                        cart[i].quantity = parseInt(qtyInput.val());

                        renderCart();

                    }
                }
            })
            .appendTo(phoneTd4);
    });

    //Footer Card
    let summary = $("<div>")
        .addClass("tableSum")
        .appendTo(".tableContainer");

    //Hidden Phone button
    $("<button>")
        .attr("id", "editBtn")
        .attr("type", "button")
        .html("<i class='far fa-edit'></i>" + " Edit Cart")
        .on("click", function() {
            $(".phoneRow").toggle();
        })
        .appendTo(summary);

    $("<span>")
        .html("<b>Subtotal:</b> " + calculateTotal() + " SEK")
        .appendTo(summary);

    $("<span>")
        .html("<i>shipping & taxes calculated at checkout</i>")
        .appendTo(summary);

    $("<hr>")
        .appendTo(summary)

    //Link to checkoutpage
    $("<button>")
        .attr("type", "button")
        .attr("id", "checkoutBtn")
        .html("CHECKOUT")
        .on("click", function() {
            window.location.href = "HTML/checkout.html";
        })
        .appendTo(summary)

    $("<p>")
        .html("need something else?")
        .appendTo(summary)

    //Link to products page
    $("<button>")
        .attr("type", "button")
        .attr("id", "shopBtn")
        .html("Continue Shopping")
        .on("click", function() {
            window.location.href = "HTML/products.html";
        })
        .appendTo(summary)
}