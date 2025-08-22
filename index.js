const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

const channel = "1408095039154028705"; // channel id

client.on("messageCreate", async msg => {
  if (msg.author.bot) return;

  if (channel.includes(msg.channel.id)) {
    try {
      await msg.react("<:owner:1408425230845612112>");
      console.log("Message Reacted");
    } catch (error) {
      console.error("Error while reaction: " + error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
client.on("clientReady", async () => {
  console.log("Logged in with " + client.user.tag);
});
