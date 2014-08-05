var myArray = [

  {"login": "lapty",
  "avatar_url": "https://avatars.githubusercontent.com/u/8241367?v=2",
  "name": "Charles Nguyen",
  "location": "Charleston, SC",
  "email": "charles.qh.nguyen@gmail.com",
  "public_repos": 9,
  "followers": 7,
  "following": 16,
  "funfact":  "pretty cool dude"},

  {"login": "ansleyjones",
  "avatar_url": "https://avatars.githubusercontent.com/u/8247044?v=2",
  "name": "Ansley Jones",
  "location": "N/A",
  "email": "N/A",
  "public_repos": 6,
  "followers": 8,
  "following": 9,
  "funfact":  "array manipulating genius"},

  {"login": "SamTay",
  "avatar_url": "https://avatars.githubusercontent.com/u/7246591?v=2",
  "name": "Sam Tay",
  "location": "Charleston, SC",
  "email": "sam.chong.tay@gmail.com",
  "public_repos": 5,
  "followers": 1,
  "following": 2,
  "funfact":  "worse climber than Charles"},

  {  "login": "crotten",
  "avatar_url": "https://avatars.githubusercontent.com/u/8238886?v=2",
  "name": "Chris Otten",
  "location": "N/A",
  "email": "N/A",
  "public_repos": 6,
  "followers": 9,
  "following": 40,
  "funfact":  "6'4\""},

  {"login": "Mathdrquinn",
  "avatar_url": "https://avatars.githubusercontent.com/u/6947446?v=2",
  "name": "Brendan Quinn",
  "location": "United States",
  "email": "quinn.197@gmail.com",
  "public_repos": 8,
  "followers": 6,
  "following": 4,
  "funfact":  "eats a shitton of clementines and hates uploading his picture on github"}
  ];




var template = function(arrayName, $target) {
  var beginString = "";
  for (i = 0; i < myArray.length; i++) {

    beginString += "<div class=\"info\">"
    + "<img src=\"" + myArray[i].avatar_url + "\">"
    + "<h2>" + myArray[i].name + "</h2>"
    + "<h3>" + myArray[i].login+ "</h3>"
    + "<ul>"
    + "<li>" + "E-mail: " + myArray[i].email + "</li>"
    + "<li>" + "Location: " + myArray[i].location + "</li>"
    + "<li>" + "Followers: " + myArray[i].followers + "</li>"
    + "<li>" + "Following: " + myArray[i].following + "</li>"
    + "<li>" + "Public Repositories: " + myArray[i].public_repos + "</li>"
    + "<li>" + "Fun Fact: " + myArray[i].funfact + "</li>"
    + "</ul>"
    + "</div>";
  }

  $target.append(beginString);
}

  template(myArray, $(".profile"));
