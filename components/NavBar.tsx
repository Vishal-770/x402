"use client";

import React from "react";
import { ConnectButton } from "thirdweb/react";
import client from "@/app/client";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-amber-200">
      <h1 className="text-lg font-semibold text-gray-900">My Website</h1>

      <ConnectButton
        client={client}
        theme="light"
        connectModal={{ size: "compact" }}
      />
    </nav>
  );
};

export default NavBar;
