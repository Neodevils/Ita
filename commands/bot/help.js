module.exports = {
name: "help",
code: `
$djsEval[(async () => {
const Discord = require('discord.js')
const leaf = require("leaf-utils");

let embed4 = new Discord.MessageEmbed()
.setTitle('🜲𓂃Welcome︱Manager Tab')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m a n a g e r₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what \`managers\` can use!*')
.addField('﹠Main','csicon, csname, nuke, gtn, disablegtn, guess-number, add-cmd, cmd-list, del-cmd')
.addField('﹠Level System','set-bg, set-lvl, set-lvlchannel, set-blacklistchnl, set-unblacklistchnl, lvl-reset, set-lvlrole, lroles')
.addField('﹠Set Commands','set-owner, set-admin, set-mod, set-trainee, set-mute, set-qotd, set-aotd, set-gwdealer, set-td, set-embed, set-prefix')
.setFooter('General﹕Economy﹕Bot﹕╭・Manager﹕Music﹕Moderation')
.setColor('#FFB7B2')

let embed6 = new Discord.MessageEmbed()
.setTitle('ฅ𓂃Welcome︱Moderation Tab')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m o d e r a t i o n₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what modsies have permission to use commands (>︿< )*')
.addField('ꗃSecruity','warn, warnings, unwarn, ban, kick, mute, vmute, tempmute, unban, unmute, vunmute')
.addField('ꗃCustom','ad, drama, lng, mod, nsfw, racism, spam, swear')
.addField('ꗃRole','give-role, take-role, role-create, role-delete, role-info, role(information), trole')
.addField('ꗃOthers','audit-logs, emadd, emdel, purge, qotd, setnick, slowdown, wyr, wot')
.setFooter('General﹕Economy﹕Bot﹕Manager﹕Music﹕╭・Moderation')
.setColor('#C7CEEA')

let embed2 = new Discord.MessageEmbed()
.setTitle('⛀𓂃Welcome︱Economy Tab')
.setFooter('General﹕╭・Economy﹕Bot﹕Manager﹕Music﹕Moderation')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ e c o n o m y₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can get currency!*')
.addField('❞General','daily, open-daily, give, deposit, withdraw, balance, lovsu, profile, lb-evil/good/stawwy/love')
.addField('❞Shop','storage, good-shop, evil-shop, ~~deep-web~~(soon)')
.addField('❞Currency', 'fish, gamble, bake, sleep, stars, read, pray, alms, good, crime, crush, evil, hack, sabotage, cyber')
.addField('————— Avaliable for now! —————', 'lucky, spiteful')
.setColor('#FFDAC1')

let embed1 = new Discord.MessageEmbed()
.setTitle('୨୧𓂃Welcome︱General Tab')
.setFooter('╭・General﹕Economy﹕Bot﹕Manager﹕Music﹕Moderation')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ g e n e r a l₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can use commands for yourself & server!*')
.addField('❝Other','channel-search, avatar, remind, poll, afk, snipe, esnipe, quote, ticket, serverinfo, userinfo')
.addField('❝Fun','aki, wiki, watch, poll, color, rps, td, say, fakemsg')
.setColor('#E2F0CB')

let embed3 = new Discord.MessageEmbed()
.setTitle('᱖𓂃Welcome︱My Tab')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ b o t₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can get info about me!*')
.addField('﹫for_me','botinfo, help, invite, ping')
.addField('▬▬ι═══════ﺤfor developer▬▬ι═══════ﺤ','eval, exec, reboot, cbicon, cbname')
.setFooter('General﹕Economy﹕╭・Bot﹕Manager﹕Music﹕Moderation')
.setColor('#B5EAD7')

let embed5 = new Discord.MessageEmbed()
.setTitle('♯𓂃Welcome︱Music Tab')
.setDescription('˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m u s i c₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what can be used for listening to music, ~~still  on beta~~. . . ♪～(´ε｀　)*')
.addField('♪Functions', 'play, spotify, stop, resume, pause, skip, loop, seek, np, queue, volume')
.addField('♪Extra','join, leave, nightcore, (more commands coming soon...)')
.setFooter('General﹕Economy﹕Bot﹕Manager﹕╭・Music﹕Moderation')
.setColor('#FFFFFF')

let pages = [embed1, embed2, embed3, embed4, embed5, embed6] 

leaf.buttonpages(client, message, pages, {
  firstEmoji: '⏪',
  backEmoji: '◀️', 
  delEmoji: '🗑️', 
  forwardEmoji: '▶️', 
  lastEmoji: '⏩',
  
  btncolor: 'green', 
  delcolor: 'red',
  skipcolor: 'blurple', 
   
  skipBtn: true,
})

})()]`
}
