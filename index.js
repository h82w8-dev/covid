const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello dude! "welcome to bot, ${msg.from.first_name}"`)
})
