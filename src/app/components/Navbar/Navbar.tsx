"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import { useAuth } from "../../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { Nav } from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-4 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="/"
            className="flex items-center mb-2 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-4xl font-black leading-none text-gray-900 select-none">
              The{"  "}
              <span className="text-indigo-600 underline">prrockzed</span>
              {"  "}news
            </span>
          </a>
          {/* <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
            </nav> */}
        </div>

        {user ? (
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="/login"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Login
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign up
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
