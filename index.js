const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1215801789:AAE5PO677rnyolaKf5Gr0EtaY1v4hSQgfQU'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello dude! "welcome to bot, ${msg.from.first_name}"`)
})