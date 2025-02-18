// Create web server
// 1. Create express app
// 2. Define port
// 3. Define routes
// 4. Listen on port
// 5. Create a comments array
// 6. Define routes for comments
// 7. Create a comment object
// 8. Create a comment
// 9. Read all comments
// 10. Read a comment
// 11. Update a comment
// 12. Delete a comment
// 13. Listen on port
// 14. Test the API
// 15. Refactor the code

// 1. Create express app
const express = require('express');
const app = express();
app.use(express.json());

// 2. Define port
const port = 3000;

// 3. Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the comments app!');
});

// 5. Create a comments array
let comments = [
    { id: 1, author: 'John', text: 'Hello, world!' },
    { id: 2, author: 'Jane', text: 'Hi, there!' }
];

// 6. Define routes for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// 7. Create a comment object
function createComment(req) {
    return {
        id: comments.length + 1,
