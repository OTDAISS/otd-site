import stripe
from fastapi import FastAPI, Body
from fastapi.responses import JSONResponse

# Set your secret key from the Stripe Dashboard
stripe.api_key = "sk_test_your_secret_key" 

@app.post("/api/create-checkout-session")
async def create_checkout_session(data: dict = Body(...)):
    try:
        # Create a new Checkout Session for the specific Price ID
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': data['priceId'],
                    'quantity': 1,
                },
            ],
            mode='subscription' if 'mo' in data['priceId'] else 'payment',
            success_url='https://oceantidedrop.net/success',
            cancel_url='https://oceantidedrop.net/pricing',
        )
        return {"url": checkout_session.url}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
