"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import "./Header.css";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { Nav } from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
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
          {user ? (
            <ul id="navbar" className="space-x-4">
              <li className="border-solid border-2 rounded-md">
                <Nav.Link
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </Nav.Link>
              </li>
            </ul>
          ) : (
            <>
              <ul id="navbar" className="space-x-4">
                <li className="border-solid border-2 rounded-md">
                  <a href="/signup">Signup</a>
                </li>
                <li className="border-solid border-2 rounded-md">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
