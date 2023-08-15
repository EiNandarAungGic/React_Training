import React from "react";

export default function Contact(props) {
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = "ONLINE";
  }

  return (
    <div class="bg-white relative rounded-lg shadow-md">
      {badgeText && (
        <div className="absolute bg-white text-black border border-solid border-green-500 inline m-2 px-2">
          {badgeText}
        </div>
      )}
      <div class="p-4 mt-3">
        <div class="h-auto">
          <img
            src={props.image}
            alt="Plants"
            class="object-cover w-1/3 h-auto rounded-lg"
          />
        </div>
        <h2 class="text-lg font-semibold mt-4">{props.name}</h2>
        <p class="text-gray-600 mt-2">
          <span>
            {props.price} • {props.origin}
          </span>
        </p>
      </div>
    </div>
  );
}
