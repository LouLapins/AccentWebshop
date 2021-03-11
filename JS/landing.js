$(function() {

    $("#mainLanding")
        .hide()
        .fadeIn(1000)

    $("#shopNowBtn")
        .on("click", function() {
            window.location.href = "HTML/products.html";
        });
});