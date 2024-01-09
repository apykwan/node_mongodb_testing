const mongoose = require('mongoose');

let mongoDBUri;
if (process.env.NODE_ENV === 'test') {
  mongoDBUri = process.env.MONGODBURI_TEST;
} else {
  mongoDBUri = process.env.MONGODBURI;
}

async function connect() {
  try {
    await mongoose.connect(mongoDBUri);
  } catch (error) {
    console.error(error);
    console.log("Error connecting to mongoDB");
  }
}

module.exports = connect;