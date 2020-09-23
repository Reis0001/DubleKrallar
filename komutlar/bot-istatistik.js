


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.addField("__**Bot Verileri**__", `<a:ayarlar1:751520036149264454> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:ayarlar1:751520036149264454> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:ayarlar1:751520036149264454> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:ayarlar1:751520036149264454> **Bot Sahibi**  <@594545506756067328 \n **SezgıиBeч#0001
#** \n\n <a:ayarlar1:751520036149264454>\ **Bot Geliştiricisi**  <@594545506756067328 \n **SezgıиBeч#0001** \n`)
.addField("__**Sürümler**__", `<a:ayarlar1:751520036149264454> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:ayarlar1:751520036149264454> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:ayarlar1:751520036149264454> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:ayarlar1:751520036149264454> " +client.voice.connections.size + " Sunucu", true)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}