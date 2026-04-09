export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const body = await request.json();
    const { amount } = body;

    if (!amount) {
      return new Response(
        JSON.stringify({ error: "Missing amount" }),
        { status: 400 }
      );
    }

    const stripe = require("stripe")(env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
