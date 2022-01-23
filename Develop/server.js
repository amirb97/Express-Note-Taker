const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes =  require('./routes/apiRoutes');
const htmlRoutes =  require('./routes/htmlRoutes');

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Sets up api and hmtl routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>  {
    console.log(`Now listening on port ${PORT}`);
})
