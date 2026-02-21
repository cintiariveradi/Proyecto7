import Stripe from "stripe";

export const createCheckoutSession = async (req, res) => {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ message: "Falta STRIPE_SECRET_KEY en .env" });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Debes enviar items en el body" });
    }

    const line_items = items.map((it) => {
      const name = it.name || it.title || "Producto";
      const price = Number(it.price);
      const quantity = Number(it.quantity ?? 1);

      if (!price || price <= 0) throw new Error("Precio inválido en items");
      if (!quantity || quantity <= 0) throw new Error("Cantidad inválida en items");

      return {
        price_data: {
        currency: "clp",
        product_data: { name },
        unit_amount: Math.round(price),
        },
        quantity,
      };
    });

    const frontend = process.env.FRONTEND_URL || "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${frontend}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontend}/checkout/cancel`,
      metadata: { userId: req.userId },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: "Error creando sesión Stripe", error: error.message });
  }
};