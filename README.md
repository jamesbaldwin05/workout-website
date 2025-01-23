# assignment1
 First assignment for Programming (Black)

Created entirely by myself, unless stated otherwise in a comment at the top of the file, except any files in client/assests/dist or client/assests/img

---

# API Documentation

## GET /api/exercises

**Description**: Retrieve a list of exercises included already within the app

**Request**: None required

**Response**:
* 200 (OK): Retrieve a list of exercises included already within the app in JSON format
```json
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

* 400 (Not found): If the file is missing, the following message is returned
```text
404 not found. The requested resource was not found
```

---

## GET /api/userexercises

**Description**: Retrieve a list of exercises added by the user. The JSON below is an example, the actual objects depend on what they add

**Response**:
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

---

