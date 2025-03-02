document.addEventListener("DOMContentLoaded", function () {
    // Current Date
    document.getElementById("currentDate").innerText = new Date().toDateString();

    // Task Completion 
    let taskCount = 6;
    const taskCountL = document.getElementById("taskCount");
    const activityLogRight = document.getElementById("activityLog");

    let completedCount = parseInt(document.getElementById("completedCount").textContent);

    //Discover section
    const discoverSection = document.getElementById("discoverSection");
    discoverSection.addEventListener("click", function() {
        window.location.href = "blogs.html";
    });

    document.querySelectorAll(".complete-btn").forEach(button => {
        button.addEventListener("click", function () {
            if (!this.disabled) {
                this.disabled = true;
                this.classList.add("opacity-50", "cursor-not-allowed");
                taskCount--;
                taskCountL.innerText = taskCount;

               
                const taskTitle = this.closest(".bg-gray-50").querySelector("h2").textContent;

                
                const timestamp = new Date().toLocaleTimeString();

               
                const logEntry = document.createElement("p");
                logEntry.textContent = `You completed ${taskTitle} at ${timestamp}`;
                logEntry.classList.add("text-gray-600", "text-lg", "mt-1","bg-gray-100" ); 
                activityLogRight.appendChild(logEntry);

               
                completedCount++;
                document.getElementById("completedCount").textContent = completedCount;

                // Alert 
                setTimeout(() => {
                    alert("✅ Board updated successfully!");
                }, 100); 
            }
        });
    });

    // Change Background Color 
    const bgButton = document.querySelector(".rounded-full.w-8.h-8");
    if (bgButton) {
        bgButton.addEventListener("click", function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    // Clear Activity Log
    document.getElementById("clearHistory").addEventListener("click", function() {
        activityLogRight.innerHTML = ""; 
    });
});