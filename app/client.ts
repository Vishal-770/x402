import { createThirdwebClient } from "thirdweb";

// Client-side usage should only include the public clientId to avoid leaking secrets.
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID!,
});

export default client;
