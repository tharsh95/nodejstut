import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
if(message.author.bot) return
message.reply({
    content:"Hey from bot"
})
});
client.login(
  "MTE5NTczODYzODQwNzk3NTAyMg.GmvZ1v.4DsBiciKhrhe98px7OFB9zbyzgNcZrneNONJ3A"
);
