let fs = require('fs');
let https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Html is super duper </h1>", function (error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("it works");
    }
});
let dogUrl = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
https.get(dogUrl, function (responce) {
    responce.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});