document.addEventListener('DOMContentLoaded', function() {
    // Initialize Stripe with your publishable key
    var stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
    var purchaseButton = document.getElementById('purchase-btn');

    purchaseButton.addEventListener('click', function() {
        // When the button is clicked, create a checkout session
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