 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Duble Krallar Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:ayarlar1:751520036149264454> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:ayarlar1:751520036149264454> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Bot'u Sunucunuza Davet Edersiniz\n <a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:ayarlar1:751520036149264454> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}