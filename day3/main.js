  var directions = input.split("");
  var houseCount = 1;
  var houses = ["(0,0)"];
  var x=0;
  var y=0;
  var robox=0;
  var roboy=0;
  _.each(directions, function(dir,idx){
    if(idx%2===0){
      switch (dir) {
        case "^":
          y++;
          break;
        case "v":
          y--;
          break;
        case "<":
          x--;
          break;
        case ">":
          x++;
          break;
      }
      var house = "(" + x + "," + y + ")";
      if(_.indexOf(houses,house)===-1){
        houses.push(house);
        houseCount++;
      }
    }
    else{
      switch (dir) {
        case "^":
          roboy++;
          break;
        case "v":
          roboy--;
          break;
        case "<":
          robox--;
          break;
        case ">":
          robox++;
          break;
      }
      var robohouse = "(" + robox + "," + roboy + ")";
      if(_.indexOf(houses,robohouse)===-1){

        houses.push(robohouse);
        houseCount++;
      }
    }
  });

  document.body.innerHTML=("Santa and RoboSanta visit " + houseCount + " houses.");
