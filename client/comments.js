// Once DOM content loaded the comments section is populated
document.addEventListener("DOMContentLoaded", buildComments);

// Function to fill comments section
function buildComments() {

    // Fetch the JSON data from the API
    fetch("http://localhost:3000/api/comments")

        // Parse data
        .then(response => response.json())

        // Populate comments
        .then(data => {
            let comments = document.getElementById("commentSection");

            data.forEach(item => {
                const border = document.createElement("div");
                // These bootstrap classes were added by generative AI (see styles.css for info)
                border.classList.add("postComment", "border", "p-3", "rounded", "mb-3",  "bg-light"); 

                const userMeta = document.createElement("div");
                userMeta.classList.add("userMeta");

                const userName = document.createElement("h5");
                // These bootstrap classes were added by generative AI (see styles.css for info)
                userName.classList.add("m-0", "userName");
                userName.textContent = item.name;

                userMeta.appendChild(userName);

                const commentMeta = document.createElement("div");
                // These bootstrap classes were added by generative AI (see styles.css for info)
                commentMeta.classList.add("mt-2");

                const commentText = document.createElement("p");
                // These bootstrap classes were added by generative AI (see styles.css for info)
                commentText.classList.add("m-0");
                commentText.textContent = item.comment;

                commentMeta.appendChild(commentText);

                border.appendChild(userMeta);
                border.appendChild(commentMeta);
                comments.appendChild(border);
            });
        })

        .catch((err) =>
            console.error("There was an issue fetching the data: ", err)
        );
}