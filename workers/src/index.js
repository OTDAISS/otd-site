`js
export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const { amount, currency = "usd" } = await request.json();

    const stripeRes = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${env.STRIPESECRETKEY},
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        amount: amount.toString(),
        currency,
        "automaticpaymentmethods[enabled]": "true"
      })
    });

    const data = await stripeRes.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
`
