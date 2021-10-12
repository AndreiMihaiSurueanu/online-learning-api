const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const courses = [
    {
        categoryId: "1",
        categoryName: "Marketing",
        totalCourses: "17",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "2",
        categoryName: "UX Design",
        totalCourses: "25",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "3",
        categoryName: "Photography",
        totalCourses: "13",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "4",
        categoryName: "Business",
        totalCourses: "20",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "5",
        categoryName: "Marketing",
        totalCourses: "17",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "6",
        categoryName: "UX Design",
        totalCourses: "25",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "7",
        categoryName: "Photography",
        totalCourses: "13",
        image: "http://tny.im/q5J"
    },
    {
        categoryId: "8",
        categoryName: "Business",
        totalCourses: "20",
        image: "http://tny.im/q5J"
    },
]

app.get('/courses', (req, res) => {
    res.json(courses);
})

app.get('/', (req, res) => {
    res.send("Home endpoint for the Online Learning Android App API");
})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})