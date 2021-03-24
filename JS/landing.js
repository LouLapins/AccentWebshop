$(function() {

    $("#mainLanding")
        .hide()
        .fadeIn(1000)

    $("#shopNowBtn")
        .on("click", function() {
            window.location.href = "https://loulapins.github.io/AccentWebshop/HTML/products.html";
        });
});