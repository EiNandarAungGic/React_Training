import React from "react";

export default function Header() {
  return (
    <nav class="bg-green-800 p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-white font-semibold text-lg">Indoor Plant Shop</div>
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
