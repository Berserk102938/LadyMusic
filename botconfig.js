module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODgyMDU3ODE5NDQzMDQwMjc2.YS12Ww.fzJ_Cmz98ONXSIKVs8XKiqQkA_c", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "882057819443040276", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "kQ4bKCixxsaieCYIu8QU75MUWhfHH5LU", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 882057819443040276, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
 Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
  },
  

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9fd291e92bfe43559901ef54354f8987", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "0cc961c7cafd46d0a4f08601ea2438ad", //Spotify Client Secret
  },
};
