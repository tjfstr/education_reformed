const express       = require('express');


//App Config///
app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Get landing page//
app.get('/', (req, res) => {
    res.render('index');
});

//Start Server
app.listen(process.env.PORT || 8000, () => {
    console.log('Education Reformed is live!')
});