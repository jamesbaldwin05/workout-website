# assignment1
 First assignment for Programming (Black).

Created entirely by myself, unless stated otherwise in a comment at the top of the file, except any files in client/assests/dist or client/assests/img.

---

# API Documentation

## GET /api/exercises

**Description**: Retrieve a list of exercises included already within the app.

**Request**: None required.

**Response**:
* 200 (OK): Returns a HTML file displaying the app.
```html
[
    {
        "name":"Bench Press",
        "muscle":"Chest",
        "difficulty":"Medium",
        "equipment":"Barbell",
        "image":"assets/img/benchpress.jpg"
    },
    {
        "name":"Squat",
        "muscle":"Legs",
        "difficulty":"Hard",
        "equipment":"Barbell",
        "image":"assets/img/squat.jpg"
    },
    {
        "name":"Sit Up",
        "muscle":"Core",
        "difficulty":"Easy",
        "equipment":"None",
        "image":"assets/img/situp.jpg"
    },
    {
        "name":"Lateral Raise",
        "muscle":"Shoulders",
        "difficulty":"Medium",
        "equipment":"Dumbbell",
        "image":"assets/img/lateralraise.jpg"
    },
    {
        "name":"Push Up",
        "muscle":"Chest",
        "difficulty":"Easy",
        "equipment":"None",
        "image":"assets/img/pushup.jpg"
    }
]
```

* 400 (Not found): If the file is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---

## GET /api/userexercises

**Description**: Retrieve a list of exercises added by users. The JSON below is an example, the actual objects depend on what they add.

**Request**: None required.

**Response**:
* 200 (OK): Retrieve a list of exercises added by users in JSON format.
```json
[
  {
    "name": "Chest Press",
    "muscle": "Chest",
    "difficulty": "Medium",
    "equipment": "Machine",
    "image": ""
  },
  {
    "name": "Bicep Curl",
    "muscle": "Arms",
    "difficulty": "Easy",
    "equipment": "Dumbbell",
    "image": ""
  }
]
```

* 400 (Not found): If the file is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---

## GET /api/comments

**Description**: Retrieve a list of comments added by users. The JSON below is an example, the actual objects depend on what they add.

**Request**: None required.

**Response**:
* 200 (OK): Retrieve a list of comments added by users in JSON format.
```json
[
  {
    "name": "Kevin",
    "comment": "First comment!"
  },
  {
    "name": "Sarah",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus pulvinar lectus. Integer sit amet justo sit amet ex rutrum."
  }
]
```

* 400 (Not found): If the file is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---

## GET /home

**Description**: The homepage of the app. Returns a HTML file with a table displaying the included exercises, a table displaying the user added exercises and a button to add a new exercise. The comment section is also at the bottom of this page with a box to add a new comment.

**Request**: None required.

**Response**:
* 200 (OK): Sends the index.html file to display the webpage.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ...
</html>
```

* 400 (Not found): If the file is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---

## POST /new-exercise

**Description**: Allows users to add a new exercise to the user exercise table. This route is called once the form to do so is submitted (accessed by clicking the "New Exercise" button on /home), the new exercise is then added and the user is redirected back to /home.

**Request**: Name (input), Muscle (dropdown), Difficulty (dropdown), Equipment (dropdown), Image (input, url). All these are in a form and are collected when the submit button is pressed.

**Response**:
* 303 (Redirect): The form data is collected and appended to a JSON file. The user is redirected to /home
```
User will be redirected back to /home, where they will see their exercise added to the user exercise table.
```

* 400 (Not found): If the file the exercises are appended to is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---

## POST /comment

**Description**: Allows users to add a new comment to the comment section. This route is called once the form to do so is submitted (accessed by filling in the form at the bottom of /home), the new comment is then added and the user is redirected back to /home.

**Request**: Name (input), Comment (input). All these are in a form and are collected when the submit button is pressed.

**Response**:
* 303 (Redirect): The form data is collected and appended to a JSON file. The user is redirected to /home
```
User will be redirected back to /home, where they will see their comment added to the comment section.
```

* 400 (Not found): If the file the comments are appended to is missing, the following message is returned.
```text
404 not found. The requested resource was not found
```

---