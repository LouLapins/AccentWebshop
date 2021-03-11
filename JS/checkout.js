$(function() {

    renderInfoSection();
});

function renderInfoSection() {

    let contactForm = $("<form>")
        .attr("id", "contactForm")
        .hide()
        .fadeIn(1000)
        .appendTo($("#information"))

    $("<h2>")
        .html("Contact Information")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "email")
        .attr("placeholder", "Email Address")
        .attr("id", "email")
        .attr("name", "email")
        .appendTo(contactForm)

    let newsLetter = $("<div>")
        .addClass("checkBox")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "checkbox")
        .appendTo(newsLetter)

    $("<label>")
        .attr("id", "checkBoxLabel")
        .html("Subscribe to newsletter")
        .appendTo(newsLetter)

    $("<h2>")
        .html("Shipping Address")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "text")
        .attr("placeholder", "First Name")
        .attr("id", "fName")
        .attr("name", "fName")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Last Name")
        .attr("id", "lName")
        .attr("name", "lName")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Street Name, Street Number")
        .attr("id", "adrStreet")
        .attr("name", "adrStreet")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "number")
        .attr("placeholder", "Postal Code")
        .attr("id", "adrPCode")
        .attr("name", "adrPCode")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "text")
        .attr("placeholder", "City / Town")
        .attr("id", "adrCity")
        .attr("name", "adrCity")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Country / Region")
        .attr("id", "adrCountry")
        .attr("name", "adrCountry")
        .appendTo(contactForm)

    $("<input>")
        .attr("type", "tel")
        .attr("placeholder", "Mobile Phone Number")
        .attr("id", "adrPhone")
        .attr("name", "adrPhone")
        .appendTo(contactForm)

    //SUBMIT CONTACT FORM
    $("<button>")
        .addClass("continueBtn")
        .attr("id", "btnToShipping")
        .html("Continue to shipping")
        .appendTo(contactForm)

    $(document).ready(function() {
        $("#btnToShipping")
            .on("click", function() {
                validateInfoForm();
            });
    });

    $("<hr>")
        .appendTo($("#information"))
}

function renderShippingSection() {

    let shippingSection = $("#shipping")
        .html("")

    let radioForm = $("<form>")
        .attr("id", "radioForm")
        .hide()
        .fadeIn(1000)
        .appendTo(shippingSection)

    $("<h2>")
        .html("Shipping Method")
        .appendTo(radioForm)

    let radioContainer = $("<div>")
        .attr("id", "radioContainer")
        .appendTo(radioForm)

    let postNord = { price: 59, text: ' PostNord,', id: 'postNord' }
    let DHL = { price: 159, text: ' Express DHL,', id: 'DHL' }

    let radioButtons = [postNord, DHL]

    for (let i = 0; i < radioButtons.length; i++) {

        $("<input>")
            .attr("type", "radio")
            .attr("name", "shipping")
            .attr("value", radioButtons[i].price)
            .appendTo(radioContainer)

        $("<label>")
            .attr("id", radioButtons[i].id)
            .html("Shipping:" + radioButtons[i].text + " " + radioButtons[i].price + " SEK" + "<br>")
            .appendTo(radioContainer)
    }

    //SUBMIT RADIO FORM
    $("<button>")
        .addClass("continueBtn")
        .attr("id", "btnToPayment")
        .html("Continue to payment")
        .appendTo(radioForm)

    $(document).ready(function() {
        $("#btnToPayment")
            .on("click", function() {
                validateRadioForm();
            });
    });

    let aTag = $("<a>")
        .attr("href", "#information")
        .appendTo(shippingSection)

    $("<button>")
        .addClass("returnBtn")
        .html("&lt; Return to information")
        .on("click", function() {
            $("#contactForm")
                .removeClass("checked");

            $("#contactForm input")
                .attr("readonly", false)
        })
        .appendTo(aTag)

    $("<hr>")
        .appendTo(shippingSection)
}

function renderPaymentSection() {
    let paymentSection = $("#payment");
    paymentSection.html("")

    let infoBox = $("<div>")
        .attr("id", "paymentInfoBox")
        .hide()
        .fadeIn(1000)
        .appendTo(paymentSection)

    $("<h2>")
        .html("Payment")
        .appendTo(infoBox)

    $("<p>")
        .html("All transactions are secure and encrypted.")
        .appendTo(infoBox)

    $("<p>")
        .html("After clicking “Review Order”, you will be redirected to Nets Payment to complete your purchase securely.")
        .appendTo(infoBox)

    $("<img>")
        .attr("src", "../IMG/mastercard-icon.png")
        .attr("alt", "Mastercard Icon")
        .appendTo(infoBox)

    let aTag = $("<a>")
        .attr("href", "#shipping")
        .appendTo(paymentSection)

    $("<button>")
        .addClass("returnBtn")
        .html("&lt; Return to shipping")
        .on("click", function() {
            $("#radioForm")
                .removeClass("checked");

            $(':radio:not(:checked)').attr('disabled', false);
            renderPaymentSection()
        })
        .appendTo(aTag)

    //REVIEW ORDER
    $("<button>")
        .addClass("continueBtn")
        .attr("id", "btnReviewOrder")
        .html("Review Order")
        .on("click", function() {
            console.log("klick");
            $("#payment").addClass("checked")

            renderReviewSection();
            renderOrderInfo();
            renderCartSummary();

            window.location.href = "#review";
        })
        .appendTo(paymentSection)

    $("<p>")
        .html("You won't be charged yet!")
        .appendTo(paymentSection)

    $("<hr>")
        .appendTo(paymentSection)
}

function renderReviewSection() {

    let reviewSection = $("#review")

    $("#review")
        .html("");

    $("<h2>")
        .html("Review Order")
        .appendTo(reviewSection)

    $("<div>")
        .attr("id", "checkoutOrderInfo")
        .appendTo(reviewSection)

    $("<div>")
        .attr("id", "checkoutTotal")
        .appendTo(reviewSection)

    $("<button>")
        .attr("id", "completeBtn")
        .addClass("continueBtn")
        .html("COMPLETE ORDER")
        .on("click", function() {
            window.setTimeout(completeOrder, 2000)

            $("body").addClass("loading");

            $(".loadingBar").slideToggle();
            $(".loadingBar").css({
                display: "block"
            });
        })
        .appendTo(reviewSection)

    $("<hr>")
        .appendTo(reviewSection)
}

function setOrderInfo() {

    let email = $("#email").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let street = $("#adrStreet").val();
    let postal = $("#adrPCode").val();
    let city = $("#adrCity").val();
    let country = $("#adrCountry").val();
    let phone = $("#adrPhone").val();
    let shipping = parseInt($("[name='shipping']:checked").val());
    let date = new Date().toUTCString();
    let orderNumber = 1 + Math.floor(Math.random() * 1000000);

    let order = new CustomerInfo(email, fName, lName, street, postal, city, country, phone, shipping, date, orderNumber);

    orderInfo = [];
    orderInfo.push(order);
    setToLocalStorage();
}

function renderOrderInfo() {
    setOrderInfo();

    let orderSummary = $("#checkoutOrderInfo")
        .html("")
        .hide()
        .fadeIn(1000);

    for (let i = 0; i < orderInfo.length; i++) {

        $("<h4>")
            .html("Order Details")
            .appendTo(orderSummary);

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
            .html("Order Number: " + orderInfo[i].orderNumber)
            .appendTo(orderSummary);
    }

    $("<hr>")
        .appendTo(orderSummary);

    $("<p>")
        .appendTo(orderSummary)
        .html("Payment: Nets Payment");

    $("<button>")
        .attr("id", "changeBtn")
        .html("Change")
        .on("click", function() {

            $("#contactForm")
                .removeClass("checked");

            $("#contactForm input")
                .attr("readonly", false)

            $("#radioForm")
                .removeClass("checked");

            $(':radio:not(:checked)').attr('disabled', false);
            renderPaymentSection()

            $("#payment")
                .removeClass("checked")

            window.location.href = "#information";
        })
        .appendTo(orderSummary)
}

function renderCartSummary() {

    let cartSummary = $("#checkoutTotal")
        .html("")
        .hide()
        .fadeIn(1000);

    $("<h4>")
        .html("Your Products")
        .appendTo(cartSummary);

    let productDivContainer = $("<div>")
        .attr("id", "productDivContainer")
        .appendTo(cartSummary)

    //ADD IMAGES TO ORDER REVIEW
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

    //ADD COST + GRAND TOTAL TO ORDER REVIEW
    for (let i = 0; i < orderInfo.length; i++) {

        $("<p>")
            .appendTo(cartSummary)
            .html("Subtotal " + calculateTotal() + " SEK");

        if (calculateTotal() < 5000) {
            $("<p>")
                .appendTo(cartSummary)
                .html("Shipping " + orderInfo[i].shipping + " SEK");
        } else {
            $("<p>")
                .appendTo(cartSummary)
                .html("Shipping FREE!");
        }

        $("<hr>")
            .appendTo(cartSummary);
        if (calculateTotal() < 5000) {
            $("<p>")
                .appendTo(cartSummary)
                .addClass("total")
                .html("Total " + (calculateTotal() + parseInt(orderInfo[i].shipping)) + " SEK");
        } else {
            $("<p>")
                .appendTo(cartSummary)
                .addClass("total")
                .html("Total " + calculateTotal() + " SEK");
        }
    }

    $("<p>")
        .appendTo(cartSummary)
        .html("Need to add more products?");

    $("<button>")
        .appendTo(cartSummary)
        .html("Back to cart")
        .on("click", function() {
            window.location.href = "../HTML/cart.html";
        });
}

function validateInfoForm() {
    $("#contactForm").validate({
        rules: {
            email: 'required',
            fName: 'required',
            lName: 'required',
            adrStreet: 'required',
            adrPCode: 'required',
            adrCity: 'required',
            adrPhone: 'required',
            adrCountry: 'required'
        },

        submitHandler: function() {
            $("#contactForm")
                .addClass("checked")

            $("#contactForm input")
                .attr("readonly", true)

            renderShippingSection();
        }
    });
    window.location.href = "#shipping";
}

function validateRadioForm() {
    $("#radioForm").validate({
        rules: {
            shipping: "required",
        },
        messages: {
            shipping: "Please select shipping method"
        },

        submitHandler: function() {
            $("#radioForm")
                .addClass("checked")

            $(':radio:not(:checked)').attr('disabled', true);
            renderPaymentSection()
        }
    });
    window.location.href = "#payment";
}

function completeOrder() {
    window.location.href = "../HTML/confirmation.html";
}