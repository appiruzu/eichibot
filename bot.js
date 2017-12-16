const config = require("./config.json")

var prefix = "!";
var command1 = "quote";
var command2 = "compliment";
var command3 = "8ball"
var quotes = config.quotes;
var compliments = config.compliments;
var sayings = config.sayings;

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

var cleverbot = require("cleverbot.io"),
bot = new cleverbot("tACNbMvKazd8QKP1", "ExcfYvGAyY5iRAcaBe2kunCW5w5Vzmj7");

//Quote function goes here

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};
il.add(randomQuote, []);

il.run();

console.log(randomQuote());

var Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("message", (message) => {
  if (message.content.startsWith(prefix + command1)) {
    message.channel.sendMessage(randomQuote());
  }
});

//Compliment function goes below here!

function randomCompliment() {
	return compliments[Math.floor(Math.random() * compliments.length)];
};
il.add(randomCompliment, []);

il.run();

console.log(randomCompliment());

bot.on("message", (message) => {
  if (message.content.startsWith(prefix + command2)) {
    message.channel.sendMessage(randomCompliment());
  }
});

//8ball Function.

function eightball() {
	return sayings[Math.floor(Math.random() * sayings.length)];
};
il.add(eightball, []);

il.run();

console.log(eightball());

bot.on("message", (message) => {
  if (message.content.startsWith(prefix + command3)) {
    message.channel.sendMessage(eightball());
  }
});

// Message functions.

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (message.content.startsWith("!i love you")) {
    message.channel.send('I love you too, '+ message.author.username +'... ♪');
  }

  if (command === "goodnight") {
    message.channel.send("Ah, you're leaving me? I suppose that can't be helped... sweet dreams, "+ message.author.username +" ♪");
  } 

  if (command === "bye") {
    message.channel.send("See you later, "+ message.author.username +" ♪");
  } 

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage);
  }

  if (command === "christmas") {
    message.channel.send({
      file: "christmas.jpg"
    })
  }
  
  if (command === "hello") {
    message.channel.send('Hello, '+ message.author.username +' ♪');
  }
});

//Web app stuff idkkkkkk

const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

 // pings server every 15 minutes to prevent dynos from sleeping
 setInterval(() => {
  http.get('http://your-app-name.herokuapp.com');
}, 900000);

// aaaaaaaaaaaaaaaaa!!!!!!

bot.login(config.token);
