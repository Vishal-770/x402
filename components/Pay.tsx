import { useFetchWithPayment } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({ clientId: "your-client-id" });

function MyComponent() {
  const { fetchWithPayment, isPending } = useFetchWithPayment(client);

  const handleApiCall = async () => {
    // Handle wallet connection, funding, and payment errors automatically
    // Response is parsed as JSON by default
    const data = await fetchWithPayment(
      "https://api.example.com/paid-endpoint"
    );
    console.log(data);
  };

  return (
    <button onClick={handleApiCall} disabled={isPending}>
      {isPending ? "Loading..." : "Make Paid API Call"}
    </button>
  );
}
export default MyComponent;
