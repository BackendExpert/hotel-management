import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminBookingChart = () => {
  // Generate last 7 days labels
  const labels = ["Yesterday", "1 day ago", "2 days ago", "3 days ago", "4 days ago", "5 days ago", "6 days ago"];

  // Sample data (e.g., number of bookings per day)
  const data = {
    labels,
    datasets: [
      {
        label: "Bookings",
        data: [20, 25, 18, 22, 30, 28, 35], // Example data
        backgroundColor: [
          "#59bdff",  
          "#4cdd94",  
          "#fdbf6a",  
          "#ff7e60",  
          "#59bdff", 
          "#4cdd94",  
          "#fdbf6a",  
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Hotel Bookings - Last 7 Days" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Last 7 Days Bookings</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AdminBookingChart;
