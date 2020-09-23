const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
if (!message.author.id == "594545506756067328") return message.reply('Bu Sahibimin Kodu')
let fynx = db.fetch(`fynx.botbakim`)
if(fynx) {
message.channel.send(`Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`fynx.botbakim`)
};

if(!fynx) {
message.channel.send(`Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`fynx.botbakim`, 'aktif')
}};

exports.config = {
name: "bakim",
aliases: []
}
