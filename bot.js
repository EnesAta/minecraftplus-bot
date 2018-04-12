const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = 'mc+';
bot.on('ready', () => {
  bot.user.setStatus("STREAMING"); // Aynı zamanda STREAMING: YAYINDA: WATCHING: İZLİYOR: DND: RAHATSIZ ETMEYİN GİBİ TERİMLERDE VARDIR
  bot.user.setActivity('mc+yardım - MinecraftPlusTR - ', { type: "STREAMING"});  // Aynı zamanda STREAMING: YAYINDA: WATCHING: İZLİYOR: DND: RAHATSIZ ETMEYİN GİBİ TERİMLERDE VARDIR
});
bot.on('ready', () => {
  console.log(`Bot ${bot.user.tag} adı ile giriş yaptı!`);
});

bot.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(`**${bot.ping}** pong`);
  }
  if (msg.content === prefix + 'yardım') {
      const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("Moderatör Komutları", `${prefix}ban = Kişiyi sunucudan banlar`)
      .setDescription(`${bot.user.username} Komut Yardımı`)
      .setFooter("Created By Bobzillaa#9427")
      .setTimestamp()
      const embed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription("@Minecraft Plus#9832 botunun yardım komutlarını özelden gönderdim :postbox:")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter("Yapımcı: Bobzillaa#9427")
      .setTimestamp()
      msg.channel.send(embed2).then(msg.author.send(embed));
      const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("Moderatör Komutları", `${prefix}uyar = Kişiyi kurallara uymadığı için uyarır`)
      .setDescription(`${bot.user.username} Komut Yardımı`)
      .setFooter("mc+uyar= Komutunun Bilgisi")
      .setTimestamp()
      msg.channel.send(embed);}

  if (msg.content === prefix + 'sunucubilgi') {
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .addField("Sunucu Sahibi", msg.guild.owner)
      .addField("Toplam Üye Sayısı", msg.guild.members.size)
      .addField("Oluşturulma Tarihi", msg.guild.createdAt)
      msg.channel.send(embed)
  }
});
      /* Prefix (mc+) giremeden sohbete girilen mesaja botun cevapları */
bot.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('of')) msg.reply('Of deme ah de!');
  if (msg.content.toLowerCase().includes('ah')) msg.reply('Ah deme oh de!');
  if (msg.content.toLowerCase().includes('oh')) msg.reply('Oh deme püf de!');
  if (msg.content.toLowerCase().includes('püf')) msg.reply('Püf deme of de!');
  if (msg.content.toLowerCase().includes('günaydın')) msg.reply('sana da günaydın');
  if (msg.content.toLowerCase().includes('herkese günaydın')) msg.reply('günaydın :)');
  if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply('sana da iyi geceler');
  if (msg.content.toLowerCase().includes('sa')) msg.reply('as');
  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('sana da iyi akşamlar');
  if (msg.content.toLowerCase().includes('selamın aleyküm')) msg.reply('aleyküm selam');
  if (msg.content.toLowerCase().includes('güle güle')) msg.reply('sana da güle güle');
});

bot.login('NDMxMTE3MzAzODIwNTgyOTEz.Da-huw.zJrdxjtFc-L1yf6thbaEdTBgxKM');