const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`Duble Krallar Linkler`, client.user.avatarURL())
        .setDescription(`<a:kral2:740243285376761916> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=730061947176878131&scope=bot&permissions=8) \n <a:yldz:752666455337861250> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/e2sJDWM)`)
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };