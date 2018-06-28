const axios = require("axios");

module.exports = {
  // query Google API for points of interest for a particular country or city
  getPointsOfInterest: (location, cb) => {
    const locationWords = location.split(" ");
    if (locationWords.length > 1) {
      locationWords.forEach((word, index) => {
        if (word === "&") {
          locationWords[index] = "and";
        }
      });
      location = locationWords.join("+");
      console.log("querying this location:", location);
    }
    console.log('wtf is process env', process.env.GOOGLEPLACES_API_KEY);
    let queryStr = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}+points+of+interest&language=en&key=${process.env.GOOGLEPLACES_API_KEY}`;
    axios.get(queryStr).then(data => cb(null, data.data.results));
  }
};
