import { createThirdwebClient } from "thirdweb";

// Server-only client with secretKey for secure operations like x402 payments.
const serverClient = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY!,
});

export default serverClient;
