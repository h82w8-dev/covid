const TelegramBot = require('node-telegram-bot-api')
const covidService = require('covid')
const formatCountryMsg = require('country')

const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello dude! "welcome to bot, ${msg.from.first_name}"`)
})

bot.startPolling(ctx => ctx.reply(`
Welcome to Covid-19 bot
You need to send a name of country where you need get COVID data
`));

bot.help(ctx => ctx.reply(`
Example:
Russia
Ukraine
China
`));

bot.hears(/.*/, async ctx => {
    const {data} = await covidService.getByCountry(ctx.message.text);
    
    if(data && data.results === 0){
      return ctx.reply('Country not found. Try another');
    }
  
    return ctx.replyWithMarkdown(formatCountryMsg(data.response[0]))
  });
