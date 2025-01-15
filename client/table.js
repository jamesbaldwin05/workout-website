// Once DOM content loaded the tables are populated
document.addEventListener("DOMContentLoaded", buildTables);

// Function to fill tables
function buildTables() {

    // Fetch the JSON data from the API
    fetch("http://localhost:3000/api/exercises")

        // Parse data
        .then(response => response.json())

        // Populate table
        .then(data => {
            // Select the body of the table to fill
            let tableBody = document.querySelector("#exerciseTable tbody");

            // For each JSON object create a row and fill it with the data
            data.forEach(item => {
                let row = document.createElement("tr");
                
                let name = document.createElement("td");
                name.textContent = item.name;
                row.appendChild(name);

                let muscle = document.createElement("td");
                muscle.textContent = item.muscle;
                row.appendChild(muscle);

                let difficulty = document.createElement("td");
                difficulty.textContent = item.difficulty;
                row.appendChild(difficulty);

                let equipment = document.createElement("td");
                equipment.textContent = item.equipment;
                row.appendChild(equipment);

                let imageHead = document.createElement("td");
                let image = document.createElement("img");
                image.src = item.image;
                imageHead.appendChild(image);
                row.appendChild(imageHead);

                // Row added to table once filled
                tableBody.appendChild(row);
            });
        })

        .catch((err) =>
            console.error("There was an issue fetching the data: ", err)
        );


    // Same as above for the second table
    fetch("http://localhost:3000/api/userexercises")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#userExerciseTable tbody");

            data.forEach(item => {
                let row = document.createElement("tr");
                
                let name = document.createElement("td");
                name.textContent = item.name;
                row.appendChild(name);

                let muscle = document.createElement("td");
                muscle.textContent = item.muscle;
                row.appendChild(muscle);

                let difficulty = document.createElement("td");
                difficulty.textContent = item.difficulty;
                row.appendChild(difficulty);

                let equipment = document.createElement("td");
                equipment.textContent = item.equipment;
                row.appendChild(equipment);

                let imageHead = document.createElement("td");
                let image = document.createElement("img");
                image.src = item.image;
                imageHead.appendChild(image);
                row.appendChild(imageHead);
                tableBody.appendChild(row);
            });
        })
        .catch((err) =>
            console.error("There was an issue fetching the data: ", err)
        );

}