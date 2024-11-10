import React from "react";

export default function Header({ title, lineColor = "black", description }) {
  return (
    <div className="header-container flex items-center justify-between my-12 mx-6">
      {/* Title on the left */}
      <h2 className="text-3xl font-semibold text-left text-orange-500 flex-shrink-0">
        {title}
      </h2>

      {/* Line in the middle */}
      <div
        className="flex-shrink-0 mx-6"
        style={{
          width: "4px", // Thicker vertical line
          height: "40px", // Vertical line height
          backgroundColor: lineColor,
        }}
      />

      {/* Description on the right */}
      {description && (
        <p className="text-gray-600 text-right text-lg max-w-md">
          {description}
        </p>
      )}
    </div>
  );
}
