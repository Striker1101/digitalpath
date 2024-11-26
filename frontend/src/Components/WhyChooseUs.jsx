import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { useMediaQuery } from "react-responsive"; // Import react-responsive

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "A history of successful projects with measurable results.",
    },
    {
      title: "Customized Solutions",
      description: "Tailored solutions to meet your unique business needs.",
    },
    {
      title: "Expert Team",
      description: "A highly skilled team with industry-leading expertise.",
    },
    {
      title: "Data-Driven Solutions",
      description: "Making decisions backed by data and analytics.",
    },
    {
      title: "Transparent Reporting",
      description: "Clear, accessible reports for tracking progress.",
    },
    {
      title: "Affordable Pricing Plans",
      description: "Flexible pricing to fit your budget.",
    },
  ];

  // Use media queries to change column count based on screen size
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile screens
  const columnCount = isMobile ? 1 : 3; // 1 column on mobile, 3 columns on larger screens

  const rowHeight = 250; // Fixed height for each row
  const columnWidth = 300; // Fixed width for each column
  const totalRows = Math.ceil(reasons.length / columnCount); // Total rows based on reasons count and column count
  const gridHeight = isMobile
    ? totalRows * rowHeight + 20 // Adjust grid height dynamically on mobile
    : 900; // Fixed height for larger screens

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= reasons.length) return null; // Don't render empty cells

    const reason = reasons[index];

    return (
      <div
        style={style}
        className="p-4 flex flex-col justify-between bg-white border rounded-lg shadow-md text-center"
      >
        <h4 className="text-xl font-bold text-gray-800">{reason.title}</h4>
        <p className="text-sm text-gray-600 mt-2">{reason.description}</p>
        <a
          href="/#contact-us"
          className="mt-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-secondary transition"
        >
          Contact Us
        </a>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center py-10 min-h-screen">
      <Grid
        columnCount={columnCount} // Dynamically set the column count
        rowCount={totalRows} // Adjust the row count based on column count
        columnWidth={columnWidth}
        rowHeight={rowHeight}
        width={isMobile ? columnWidth + 40 : 900} // Adjust grid width for mobile screens
        height={gridHeight} // Dynamically adjust height for mobile screens
        className="gap-4"
      >
        {Cell}
      </Grid>
    </div>
  );
}
