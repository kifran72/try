let app = require('./app');
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`started on port: ${port}`);
});