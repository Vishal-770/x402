import { createThirdwebClient } from "thirdweb";
import { facilitator, settlePayment } from "thirdweb/x402";
import { sepolia } from "thirdweb/chains";

const client = createThirdwebClient({
  secretKey:
    "aZ-XNYnB7aT-KkgpKZN9U0dVKChaDzmGVJ4REp0qud7PwHvWPfeZhBkLPLcBKvEMDfvpC5cVzqc2usQ0SWPQqA",
});
const thirdwebX402Facilitator = facilitator({
  client,
  serverWalletAddress: "0x0CfB00Dc12f550D47A511Bb98B9fAE1D1240dcbA",
});

export async function GET(request: Request) {
  const paymentData = request.headers.get("x-payment");

  const url = new URL(request.url);
  const resourceUrl = url.origin + url.pathname;

  const result = await settlePayment({
    resourceUrl,
    method: "GET",
    paymentData,
    payTo: "0x0CfB00Dc12f550D47A511Bb98B9fAE1D1240dcbA",
    network: sepolia,
    price: {
      amount: "10000",
      asset: {
        address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      },
    },
    facilitator: thirdwebX402Facilitator,
  });

  if (result.status === 200) {
    return Response.json({ data: "premium content" });
  } else {
    return Response.json(result.responseBody, {
      status: result.status,
      headers: result.responseHeaders,
    });
  }
}
