const db = require("../db");

const Destinations = {};

Destinations.retrieveFavByUserId = (userId, cb) => {
  // console.log("userId", userId);
  return db("favorite_destinations")
    .where({ user_id: userId })
    .then(destination_id => {
      const arr = destination_id.map(el => {
        return el.destination_id;
      });
      db("countries")
        .whereIn("country_id", arr)
        // db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then(countries => {
          // console.log("country", countries);
          cb(countries);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

Destinations.retrieveVisitedByUserId = (userId, cb) => {
  // console.log("userId", userId);
  return db("visited_destinations")
    .where({ user_id: userId })
    .then(destination_id => {
      const arr = destination_id.map(el => {
        return el.destination_id;
      });
      db("countries")
        .whereIn("country_id", arr)
        // db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then(countries => {
          // console.log("country", countries);
          cb(countries);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

Destinations.addFavByUserId = (userId, country) => {
  // console.log("userId", userId);
  return db("countries")
    .where({ country: country }).select('country_id')
    .then(country => {
      console.log('countryId', country)
      db("favorite_destinations")
        .where({
          destination_id: country[0].country_id, 
          user_id: userId
        })
        .then((rows) => {
          if (rows.length === 0) {
            //no matching records
            console.log('no matching record') 
            return db("favorite_destinations")
            .insert({'user_id': userId, 'destination_id': country[0].country_id})
          } else {
            console.log('record already exists')
          }
        })
        .catch((err) => {
          console.error(err)
        })
      
    })
    .catch(err => console.error(err));
};

Destinations.addVisitedByUserId = (userId, country) => {
  // console.log("userId", userId);
  return db("countries")
    .where({ country: country }).select('country_id')
    .then(country => {
      console.log('countryId', country)
      return db("visited_destinations")
        .where({
          destination_id: country[0].country_id, 
          user_id: userId
        })
        .then((rows) => {
          if (rows.length === 0) {
            //no matching recoreds
            return db("visited_destinations")
            .insert({'user_id': userId, 'destination_id': country[0].country_id})
          } else {
            console.log('record already exists')
          }
        })
        .catch((err) => {
          console.error(err)
        })
      
    })
    .catch(err => console.error(err));
};
module.exports = Destinations;
