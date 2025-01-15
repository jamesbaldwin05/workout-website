# assignment1
 First assignment for Programming (Black)

Created entirely by myself, unless stated otherwise in a comment at the top of the file, except any files in client/assests/dist or client/assests/img

# API Documentation

## GET /api/exercises

**Description**: Retrieve a list of exercises included already within the app

**Response**:
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
        "name":"Sqaut",
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
        "equipment":"Dumbell",
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