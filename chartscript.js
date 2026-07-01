async function loadProgress() {
    const res = await fetch("/api/workouts");
    const data = await res.json();

    const container = document.getElementById("workout-history");
    container.innerHTML = "";

    data.forEach(workout => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${workout.date}</h3>
            <p>${workout.exercise}</p>
            <p>${workout.sets} x ${workout.reps} @ ${workout.weight} lbs</p>
        `;
        container.appendChild(div);
    });
}

loadProgress();

const ctx = document.getElementById("progressChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Workouts Completed",
            data: [1, 0, 1, 1, 0, 1, 0],
            borderColor: "#3b82f6", 
            backgroundColor: "rgba(59, 130, 246, 0.15)", 
            pointBackgroundColor: "#3b82f6",
            pointBorderColor: "#ffffff",
            pointHoverBackgroundColor: "#1d4ed8",
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#ffffff"
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(255, 255, 255, 0.15)",
                    borderColor: "#ffffff"
                },
                ticks: {
                    color: "#ffffff"
                }
            },
            y: {
                grid: {
                    color: "rgba(255, 255, 255, 0.15)",
                    borderColor: "#ffffff"
                },
                ticks: {
                    color: "#ffffff"
                }
            }
        }
    }
});