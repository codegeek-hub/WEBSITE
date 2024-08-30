// script.js
document.addEventListener('DOMContentLoaded', function() {
    var stripe = Stripe('your_publishable_key');
    var purchaseButton = document.getElementById('purchase-btn');

    purchaseButton.addEventListener('click', function() {
        // Create a checkout session on your server
        fetch('/create-checkout-session', {
            method: 'POST',
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(session) {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function(result) {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    });
});