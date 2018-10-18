const friendData = require("../data/friends")

function match(newFriend, all){
  const cols = all[0].scores.length;
  let indexBestMatch = -1;
  let bestDiff = 100000;
  for(let i = 0; i < all.length; i++){
    let currentDiff = 0;
    for (let j = 0; j < cols; j++) {
      currentDiff += Math.pow(newFriend.scores[j] - all[i].scores[j], 2)
    }
    
    if (currentDiff < bestDiff) {
      bestDiff = currentDiff;
      indexBestMatch = i;
    };
  }
  return all[indexBestMatch];
}

function notInDB(newFriend, all) {
  for (let i = 0; i < all.length; i++){
    if (newFriend.name.toLowerCase() == all[i].name.toLowerCase()){
      return false;
    }
  }
  return true;
}


module.exports = function(app) {
  app.get("/api/friends", function(req, res){
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res){
    const incoming = req.body;
    console.log("incoming data:\n---------\n ", incoming);
    if (notInDB(incoming, friendData)) {
      res.json(match(incoming, friendData));  
      friendData.push(incoming);
    } 
    console.log("updated data: \n-------\n", friendData);
  });
}