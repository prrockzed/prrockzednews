"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl home">
            The{" "}
            <span className="underline decoration-6 decoration-blue-400">
              prrockzed
            </span>{" "}
            News
          </h1>
        </Link>

        <div>
          <ul id="navbar" className="space-x-4">
            <li className="border-solid border-2 rounded-md">
              <a href="/signup">Signup</a>
            </li>
            <li className="border-solid border-2 rounded-md">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
