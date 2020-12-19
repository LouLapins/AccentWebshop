let bag = [];

$(function() {

    $( ".hamburgerButton" ).click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        console.log(("klick"));
        });

renderCart();

});

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}

function renderCart() {

    getBag();

    $(".tableContainer")
    .remove();

    $("<div>")
    .addClass("tableContainer")
    .appendTo($("main"));

    $("<table>")
    .appendTo(".tableContainer");

    let tableHeads = $("<tr>")
    .appendTo("table");

    $("<th>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>price</u>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>Qty</u>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>Total</u>")
    .appendTo("tr");

    $.each(bag, (i, product) => {

        let tableRow = $("<tr>")
        .appendTo("table")

        let productContainer = $("<div>")
        .addClass("productContainer")
        .appendTo(tableRow)

        $("<button>").appendTo(productContainer)
             .attr("type", "button")
             .addClass("qtyBtn")
             .html("&#8722")
             .on("click", function() {
     
             for (let i = 0; i < bag.length; i++) { // Looping bag, if clicked object id is found in bag -> decrease quantity of that product
     
                 if (bag[i].id === product.id) {
                     bag[i].quantity--;
                     if (bag[i].quantity === 0) { // If the quantity of the product becomes 0 -> splice that product from array
                         bag.splice([i], 1);
                     }
                     saveBag();
                     renderCart();
                 }
             }
         });

        $("<span>")
        .addClass("productSpan")
        .appendTo(productContainer)

        $("<img>")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .appendTo(".productSpan")

        $("<p>")
        .html(product.name)
        .appendTo(".productSpan")
     
         $("<button>").appendTo(productContainer)
             .attr("type", "button")
             .addClass("qtyBtn")
             .html("&#43;")
             .on("click", function() {
                 for (let i = 0; i < bag.length; i++) {
                     if (bag[i].id === product.id) {
                         product.quantity++;
                         saveBag();
                         renderCart();
                     }
                 }
             });

             $("<button>").appendTo(".productSpan")
             .attr("type", "button")
             .html("Remove")
             .on("click", function() {
         
                 for (let i = 0; i < bag.length; i++) {
                     if (bag[i].id === product.id) {
                         bag.splice([i], 1);
                         saveBag();
                         renderCart();
                     }
                 }
             });
     

        $("<td>")
        .html(product.price + "kr")
        .appendTo(tableRow)

        $("<td>")
        .html(product.quantity + "pc")
        .appendTo(tableRow)

        $("<td>")
        .html(product.price * product.quantity + "kr")
        .appendTo(tableRow)    

    });

    $("<div>")
    .addClass("tableSum")
    .appendTo(".tableContainer")

    $("<p>")
    .appendTo(".tableSum")
    .html("<b>subtotal:</b> " + calculateTotal() + "kr");

    $("<p>")
    .appendTo(".tableSum")
    .html("shipping & taxes calculated at checkout");

    $("<button>")
    .attr("type", "button")
    .html("CHECKOUT")
    .on("click", function(){
        window.location.href = "../HTML/checkout.html";
    })
    .appendTo(".tableSum")

    $("<button>")
    .attr("type", "button")
    .html("Continue Shopping")
    .on("click", function(){
        window.location.href = "../HTML/products.html";
    })
    .appendTo(".tableSum")

}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total = total + (bag[i].quantity * bag[i].price);

    }
    return total;

};