document.addEventListener("DOMContentLoaded", buildTables)

function buildTables() {
    fetch("http://localhost:3000/exercises")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#exerciseTable tbody")

            data.forEach(item => {
                let row = document.createElement("tr")
                
                let name = document.createElement("td")
                name.textContent = item.name
                row.appendChild(name)

                let muscle = document.createElement("td")
                muscle.textContent = item.muscle
                row.appendChild(muscle)

                let difficulty = document.createElement("td")
                difficulty.textContent = item.difficulty
                row.appendChild(difficulty)

                let equipment = document.createElement("td")
                equipment.textContent = item.equipment
                row.appendChild(equipment)

                let imageHead = document.createElement("td")
                let image = document.createElement("img")
                image.src = item.image
                imageHead.appendChild(image)
                row.appendChild(imageHead)
                tableBody.appendChild(row)
            })
        })

    fetch("http://localhost:3000/userexercises")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#userExerciseTable tbody")

            data.forEach(item => {
                let row = document.createElement("tr")
                
                let name = document.createElement("td")
                name.textContent = item.name
                row.appendChild(name)

                let muscle = document.createElement("td")
                muscle.textContent = item.muscle
                row.appendChild(muscle)

                let difficulty = document.createElement("td")
                difficulty.textContent = item.difficulty
                row.appendChild(difficulty)

                let equipment = document.createElement("td")
                equipment.textContent = item.equipment
                row.appendChild(equipment)

                let imageHead = document.createElement("td")
                let image = document.createElement("img")
                image.src = item.image
                imageHead.appendChild(image)
                row.appendChild(imageHead)
                tableBody.appendChild(row)
            })
        })
}