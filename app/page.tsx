"use client";
import { useFetchWithPayment } from "thirdweb/react";

import client from "./client";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const { fetchWithPayment, isPending } = useFetchWithPayment(client);

  const handleApiCall = async () => {
    // Handle wallet connection, funding, and payment errors automatically
    // Response is parsed as JSON by default
    const data = await fetchWithPayment("/api");
    console.log(data);
  };

  return (
    <div className="flex items-center h-[80vh] justify-center ">
      <Button onClick={handleApiCall} disabled={isPending}>
        {isPending ? "Loading..." : "Make Paid API Call"}
      </Button>
    </div>
  );
}
