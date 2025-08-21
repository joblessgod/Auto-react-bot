const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});
const channels = ["FIRST_CHANNEL_ID", "SECOND_CHANNEL_ID"];

client.on("messageCreate", async msg => {
  if (msg.author.bot) return;

  if (channels.includes(msg.channel.id)) {
    try {
      await msg.react("PASTE YOUR EMOJI ID HERE"); //example: <:0_:1288609400528834570>
      console.log(`Reacted to message ${msg.id} with emoji in channel`);
    } catch (error) {
      console.error("Error while reactiong: " + error);
    }
  }
});

console.log(`Logging in...`);
client.login(process.env.DISCORD_TOKEN);
client.on("clientReady", function () {
  client.user.setActivity({
    name: "Dev by JobLessGod",
    type: ActivityType.Custom,
  });
  console.log(`Logged in as ${client.user.tag}!`);
});
