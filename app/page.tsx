"use client";

import { useFetchWithPayment } from "thirdweb/react";
import { useState } from "react";
import client from "./client";
import { Button } from "@/components/ui/button";

type ApiResponse = object;

export default function MyComponent() {
  const { fetchWithPayment, isPending } = useFetchWithPayment(client);

  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleApiCall = async () => {
    setError(null);

    try {
      const response = await fetchWithPayment("/api", {
        method: "GET",
      }) as ApiResponse | null;

      setData(response);
      console.log(response);
    } catch (err) {
      console.error(err);
      setError("Payment or API request failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
      <Button onClick={handleApiCall} disabled={isPending}>
        {isPending ? "Loading..." : "Make Paid API Call"}
      </Button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {data && (
        <pre className="mt-4 p-3 bg-gray-100 rounded text-sm max-w-xl overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
