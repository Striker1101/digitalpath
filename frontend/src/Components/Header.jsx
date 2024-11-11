import React from "react";

export default function Header({ title, lineColor = "black", description }) {
  return (
    <div className="header-container flex items-center justify-between my-5 px-4">
      {/* Title on the left */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-orange-500">
        {title}
      </h2>

      {/* Line in the middle */}
      <div
        className="flex-shrink-0 mx-6"
        style={{
          width: "4px",
          height: "60px",
          backgroundColor: lineColor,
        }}
      />

      {/* Description on the right */}
      {description && (
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
          {description}
        </p>
      )}
    </div>
  );
}
