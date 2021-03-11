$(function() {

    renderOrderSummary();

    $("#shopBtn")
        .on("click", function() {

            window.location.href = "../HTML/products.html";
        });
});

function renderOrderSummary() {

    let orderSummary = $("#orderSummary");

    for (let i = 0; i < orderInfo.length; i++) {

        orderSummary.html("");

        $("<h4>")
            .html("Your Order Details")
            .appendTo(orderSummary);

        $("<hr>")
            .appendTo(orderSummary)

        let pContainer =  $("<div>")
            .addClass("pContainer")
            .appendTo(orderSummary)

        $("<p>")
            .html("Name: " + orderInfo[i].fName + " " + orderInfo[i].lName)
            .appendTo(pContainer);

        $("<p>")
            .html("Email: " + orderInfo[i].email)
            .appendTo(pContainer);

        $("<p>").html("Phone: " + orderInfo[i].phone)
            .appendTo(pContainer);

        $("<p>")
            .html("Address: " + orderInfo[i].street + ", " + orderInfo[i].postal + " " + orderInfo[i].city + ", " + orderInfo[i].country)
            .appendTo(pContainer);

        $("<hr>")
            .appendTo(orderSummary);

        $("<p>")
            .attr("id", "orderNumber")
            .html("Order Number: " + orderInfo[i].orderNumber)
            .appendTo(orderSummary);

        if (calculateTotal() < 5000) {
            $("<p>")
                .html("Shipping: " + orderInfo[i].shipping + " SEK")
                .appendTo(orderSummary);
        } else {
            $("<p>")
                .html("Shipping: FREE!")
                .appendTo(orderSummary)
        }

        $("<p>")
            .html(orderInfo[i].date)
            .appendTo(orderSummary);

        $("<p>")
            .appendTo(orderSummary)
            .html("Nets Payment");
    }

    $("<hr>")
        .appendTo(orderSummary);

    $("<h4>")
        .html("Your Products")
        .appendTo(orderSummary);

    let productDivContainer = $("<div>")
        .attr("id", "productDivContainer")
        .appendTo(orderSummary)

    //ADD IMAGES TO ORDER SUMMARY
    for (let i = 0; i < cart.length; i++) {

        let productDiv = $("<div>")
            .addClass("productDiv")
            .appendTo(productDivContainer);

        $("<img>")
            .attr("src", cart[i].product.image)
            .attr("alt", cart[i].product.name + " perfume bottle")
            .appendTo(productDiv);

        $("<p>")
            .html(cart[i].product.name + "<br>" + cart[i].product.price + " SEK " + "<br>" + cart[i].quantity + "pc(s)")
            .appendTo(productDiv);
    }

    //ADD COST + GRAND TOTAL TO ORDER SUMMARY
    for (let i = 0; i < orderInfo.length; i++) {

        $("<hr>")
            .appendTo(orderSummary);

        if (calculateTotal() < 5000) {
            $("<h4>")
                .appendTo(orderSummary)
                .addClass("total")
                .html("Total Cost: " + (calculateTotal() + parseInt(orderInfo[i].shipping)) + " SEK");
        } else {
            $("<h4>")
                .appendTo(orderSummary)
                .addClass("total")
                .html("Total " + calculateTotal() + " SEK");
        }
    }

    $("<p>")
        .html("(VAT included)")
        .appendTo(orderSummary)

    localStorage.clear();
    cartNumbers();
}