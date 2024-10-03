const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel', {
    // useNewUrlParser: true,  // remove this
    // useUnifiedTopology: true // and this
})
.then(() => console.log('mongodb is connected'))
.catch(err => console.error(err));
