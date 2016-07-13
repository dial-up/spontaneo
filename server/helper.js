var express = require('express');
var server = require('../server.js')
var fs = require('fs');

var getIdeaList = function(callback) {

  // fs.readFile(__dirname + '/data.json', 'UTF-8', function(err, data) {
  //   if (err) {
  //     console.log('Get Idea Threw Error: ', err);
  //   }
  //   callback(JSON.parse(data));
  // })
  return callback(ideas);
};

var generateRandomIdea = function (object, category, callback) {
  console.log(object, category)
  if (category === 'Random!') {
    var categories = Object.keys(object);
    var randomCategory = categories[Math.floor(Math.random() * Object.keys(object).length)];
    var randomEvent = Math.floor(Math.random() * object[randomCategory].length);
    callback(object[randomCategory][randomEvent]);
  }
  else {
    var len = object[category].length;
    var random = Math.floor(Math.random() * len);
    callback(object[category][random]);
  }
};

// Look into separating the nouns from the verbs for search purposes

var ideas = {
  "Little Gifts": [
    {
      display: "Buy some flowers",
      yelpSearch: "florist",
      wikiSearch: "flowers"
    },
    {
      display: "Give a relaxing massage",
      yelpSearch: "Massage",
      wikiSearch: "Massage"
    },
    {
      display: "Get a nice bottle of wine",
      yelpSearch: "Wine Shop",
      wikiSearch: "Wine"
    },
    {
      display: "Grab some fancy chocolate",
      yelpSearch: "Chocolate",
      wikiSearch: "Chocolate"
    }
  ],
  "Fun Activities": [
    { display: "Have a picnic",
      yelpSearch: "park",
      wikiSearch: "Picnic"
    },
    { display: "Visit a local museum",
      yelpSearch: "Museum",
      wikiSearch: "Museum"
    },
    { display: "Tour a local garden",
      yelpSearch: "garden",
      wikiSearch: "garden"
    },
    { display: "Play minigolf",
      yelpSearch: "Miniature Golf",
      wikiSearch: "Miniature Golf"
    },
    { display: "Go bowling",
      yelpSearch: "Bowling",
      wikiSearch: "Bowling"
    },
    { display: "See local live music",
      yelpSearch: "concert",
      wikiSearch: "concert"
    },
    { display: "Go to a comedy club",
      yelpSearch: "Stand-up Comedy",
      wikiSearch: "Stand-up Comedy"
    },
    { display: "Take a hike",
      yelpSearch: "Hike",
      wikiSearch: "Hiking"
    },
    { display: "Get a nightcap at a local bar",
      yelpSearch: "cocktail bar",
      wikiSearch: "Nightcap_(beverage)"
    },
    { display: "Make dinner together",
      yelpSearch: "grocery store",
      wikiSearch: "cooking"
    },
    { display: "Go see a movie",
      yelpSearch: "movies",
      wikiSearch: "film"
    }
  ],
  "Quick Trips": [
    { display: "Escape... go camping!",
      yelpSearch: "Camping",
      wikiSearch: "Camping"
    },
    { display: "Go wine tasting",
      yelpSearch: "Wine Tasting",
      wikiSearch: "Wine Tasting"
    },
    { display: "Take a scenic drive",
      yelpSearch: "Scenic Drive",
      wikiSearch: "Sunday drive"
    },
    { display: "Visit a national/state park",
      yelpSearch: "National Park",
      wikiSearch: "National Park"
    }
  ],
  "What to Eat": [
    { display: "Chinese Food",
      yelpSearch: "Chinese food",
      wikiSearch: "Chinese cuisine"
    },
    { display: "Indian Food",
      yelpSearch: "Indian food",
      wikiSearch: "Indian cuisine"
    },
    { display: "Thai Food",
      yelpSearch: "Thai food",
      wikiSearch: "Thai cuisine"
    },
    { display: "Italian Food",
      yelpSearch: "Italian food",
      wikiSearch: "Italian cuisine"
    },
    { display: "Mexican Food",
      yelpSearch: "Mexican food",
      wikiSearch: "Mexican cuisine"
    },
    { display: "Greek Food",
      yelpSearch: "Greek food",
      wikiSearch: "Greek cuisine"
    },
    { display: "Cuban Food",
      yelpSearch: "Cuban food",
      wikiSearch: "Cuban cuisine"
    },
    { display: "French Food",
      yelpSearch: "French food",
      wikiSearch: "French cuisine"
    },
    { display: "German Food",
      yelpSearch: "German food",
      wikiSearch: "German cuisine"
    },
    { display: "Tapas",
      yelpSearch: "Tapas food",
      wikiSearch: "Tapas cuisine"
    },
    { display: "Burgers",
      yelpSearch: "hamburger",
      wikiSearch: "hamburger"
    },
    { display: "Pizza",
      yelpSearch: "Pizza",
      wikiSearch: "Pizza"
    }
  ]
}





module.exports = {
  getIdeaList: getIdeaList,
  generateRandomIdea: generateRandomIdea
}
