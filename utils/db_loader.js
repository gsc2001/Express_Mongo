const mongoose = require('mongoose');
const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MONGO DB Connected ...');
    } catch (err) {
        // if error connecting to mongodb
        console.error(err.message);

        // end the process
        process.exit(1);
    }
};

module.exports = connectDB;
