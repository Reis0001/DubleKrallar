const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:emoji_50:753975225686687774> **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<a:emoji_50:753975225686687774>  **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:emoji_21:740255326477221979> **${args[0]}** **Adet Mesajı Sildim** <a:yldz:752666455337861250>`)
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};