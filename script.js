// JavaScript for Day Tracking and Dynamic Interaction

// Function to highlight the current day
document.addEventListener("DOMContentLoaded", function () {
    let currentDay = 1; // Change this to track the current day dynamically
    let totalDays = 5;

    const daySections = document.querySelectorAll(".day");
    const daysList = document.querySelector("#day-1").parentElement; // The parent element of all days

    // Highlight the current day
    function highlightCurrentDay() {
        daySections.forEach((section, index) => {
            if (index + 1 === currentDay) {
                section.style.border = "2px solid #007bff";
                section.style.backgroundColor = "#f0f8ff";
            } else {
                section.style.border = "2px solid #ddd";
                section.style.backgroundColor = "#fff";
            }
        });
    }

    // Function to navigate through days
    function navigateDays() {
        document.getElementById("next-day-btn").addEventListener("click", function () {
            if (currentDay < totalDays) {
                currentDay++;
                highlightCurrentDay();
            }
        });

        document.getElementById("prev-day-btn").addEventListener("click", function () {
            if (currentDay > 1) {
                currentDay--;
                highlightCurrentDay();
            }
        });
    }

    // Event listener for dynamic day highlighting and navigation
    navigateDays();
    highlightCurrentDay();
});
