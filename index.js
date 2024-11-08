const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
// bot.on("message", (option) => {
//   console.log("Message", option);

//   bot.sendMessage(option.chat.id,"hello,I am a bot.I am here tot help you with your queries.");
// });
bot.onText(/\/joke/, async (option) => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const setup = response.data.setup;
  const punchline = response.data.punchline;

  bot.sendMessage(option.chat.id, setup + " , " + punchline);
});
