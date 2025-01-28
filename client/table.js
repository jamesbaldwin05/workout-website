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
            let table = document.getElementById("exerciseTable");

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
                table.appendChild(row);
            });
        })

        .catch((err) =>
            console.error("There was an issue fetching the data: ", err)
        );


    // Same as above for the second table
    fetch("http://localhost:3000/api/userexercises")
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("userExerciseTable");

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

                table.appendChild(row);
            });
        })
        .catch((err) =>
            console.error("There was an issue fetching the data: ", err)
        );

}

// ALL CODE BELOW TAKEN FROM W3SCHOOLS, https://www.w3schools.com/howto/howto_js_sort_table.asp. 
// I added a table parameter and the if statement to pick based on said parameter tableNo since I have two tables

function sortTable(n, tableNo) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    if (tableNo == 1) {
        table = document.getElementById("exerciseTable");
    }else if (tableNo ==2) {
        table = document.getElementById("userExerciseTable");
    }
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }