var friendsData = require("../data/friends.js");
var express = require("express");
var app = express();
var path = require("path");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  

  app.post("/api/friends", function(req, res) {
   
    var userInput = req.body;
    var userResponse = userInput.class;
    for (i = 0; i < friendsData.length; i++){
      if(friendsData[i].class === userResponse){
        matchName = friendsData[i].name;
      }
    }
    friendsData.push(userInput);
      res.json(friendsData);
    
  });
};