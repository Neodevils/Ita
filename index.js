const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
  token: "Nzg0ODY1NzI4MzIyMzM4ODE2.X8vhKw.3sHQpxCIpi-PGJ4jjzDyPLd_B0U",
  prefix: ["$getServerVar[prefix]","k."], 
  mobile: false, 
  fetchInvites: true
});
const buttons = require('discord-buttons')
buttons(bot.client)

bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onMessageUpdate();
bot.onMessage({ 
    respondToBots: false, 
    guildOnly: true
});
bot.musicStartCommand({ 
channel: "795473337697697837",
code: `` 
})
bot.musicEndCommand({ //Command
channel: "795473337697697837", //Channel where the logs are going
code: `` //Code
})
bot.readyCommand({
  channel: '', //Gerek yok
  code: `$log[Neo-sama and Mica-san, $username[$clientID] is ready to serve you]` //Mesaj
});
bot.loadCommands('./commands/');
bot.status({
   text:'k.invite', 
   type:'WATCHING', 
   status:'dnd', 
   time: 5
});
bot.variables({
  hex: 'A67C70',
  prefix: 'k.',
  şarkı: '',
  afks: "", //AFK sebebi.
  afk: "hayır", //kişi afk mı değil mi? AFK olduğu zaman evete dönüşür.
  afkss:"", //zaman $dateStamp $parseDate ve $math kullanılan
  afkmm:"0", //toplam etiket $sum - $sub artma azalm :bahsetme: emojili olan
  afkc: "0", //bunu berat yaptı bilmemek
  afkkk:"0", //toplam kişi $sum - $sub artma azalma
  afkaa:"No one has mentioned :3" //son etiketleyen kişi tagi $userTag
});
bot.variables({
  role1: '',
  price1: '0',
  role2: '',
  price2: '0',
  role3: '',
  price3: '0',
  role4: '',
  price4: '0',
  role5: '',
  price5: '0',
  role6: '',
  price6: '0',
  role7: '',
  price7: '0',
  role8: '',
  price8: '0',
  role9: '',
  price9: '0',
  role10: '',
  price10: '0'
});
bot.variables({
  snipe_msg: '',
  snipe_author: '',
  snipe_channel: '',
  snipe_date: '',
  msgEditorID: 'undefined',
  esnipeOldMsg: 'undefined'
});
bot.variables({
custombg: "/images?q=tbn:ANd9GcQz8TueHUgVNroUgCgN5d35oo5Kg_LuFN6CHToIXL4pPSK-AL8FXgjEyBUcJlg97sMcrqg&usqp=CAU",

xp: "0",
 
level: "0",
 
req: "250",

levelmsg: "\n**˚｡<a:dp_star6:835142297125519420> level ๑‿︵‿୨\`🌸\`୧‿︵‿๑ up <a:dp_star6:835142297125519420>｡˚**\n <a:pas10:835152237042729040> your level's {level} now!\n <:exp_heart:843229991491469342> congratulations, <@{user.id}>! you levelled up with being active.\nThat’s {level} pats for you. Keep to being active for more pats! ✿｡˚\n╰╮୨<a:dp_star6:835142297125519420>୧˚｡ * ︶꒷꒦\`🍯\` <a:pas10:835152237042729040> \`🍯\` ˚੭",
 
lvlchannel: "",

lvlblacklisted: "",

level3: "",

level5: "",

level10: "",

level20: "",

level30: "",

level40: "",

level50: "", 
    
level60: "",

level70: "",
 
level80: "",
   
level90: "",
    
level100: "",
})
bot.variables({
  good: '0',
  evil: '0'
});
bot.variables({
  muted: '',
  aotd: '',
  wot: '',
  qotd: '',
  owner: '',
  mod: '',
  admin: '',
  trainee: '',
  warns: '0',
  autorole: '',
  reason: '0',
  modlogs: '0',
  messagelogs: '0'
});
bot.variables({
  guess_the_number_channel: '',
  winning_number: '',
  gtntries: '0',
  gtn: 'false',
  gtnwins: '0',
  gtnattempts: '0',
  gtnstatus: 'No ongoing game.',
  n1: '',
  n2: ''
});
bot.variables({
  command: '',
  sure: '',
  kanal: '',
  mesaj: '',
  ccmd: '',
  cdes: '',
  ticketchannel: '',
  giveaway: 'undefined',
  giveawayr: '',
  vent: '',
  tdchannel: '',
  tdplayer: '',
  timee: ''
});
bot.variables({
  pocket: '0',
  moneybox: '0',
  spiteful: '0',
  DailyChest: '0',
  lucky: '0', 
  pole: "0", 
  case: "yok", 
  monitor: "yok", 
  phone: "yok",
  multi_stawwy: "yok",
  multi_lovsu: "yok", 
  starter: "yok"
});
//good-market
bot.variables({
  multi_good: "yok"
});
//evil-market
bot.variables({
    eye: "yok", 
    poison: "yok", 
    bag: "yok", 
    gun: "yok", 
    knife: "yok",
    multi_evil: "yok", 
    joker: "yok",
    hackerlik: "yok",
    padlock: "yok"
})

//REMNINDER
bot.command({
	name: 'remind',
	code: `
  $sendDM[$authorID;{title:Reminder!}{description:<a:dp_star6:835142297125519420> I had to remind __*$messageSlice[1]*__ to you! The time has come!}{color:$getServerVar[hex]}]
  $wait[$noMentionMessage[1]]
  $setTimeout[$noMentionMessage[1];
  userID: $authorID 
  message: $messageSlice[1]]
  $channelSendMessage[$channelID;{title:Successfully Done. . .}
  {description:<a:dp_star6:835142297125519420> Now, I will remind $messageSlice[1] to you, $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];d; day;-1];m; minute;-1];s; second;-1];h; hour;-1]  later. . .}
  {color:$getServerVar[hex]};no]
  $onlyIf[$checkContains[$toLowercase[$noMentionMessage[1];s;m;h;d;ms]]==true;{description:**Umm...** Can you enter a time? 
  Example. . . "$getServerVar[prefix]remind 10s I have to vote Kaeru"
\`1 hour⁀➷1h,
1 minute⁀➷1m,
1 day⁀➷1d,
1 second⁀➷1s\`}{color:$getServerVar[hex]}]`
});
bot.timeoutCommand({
	code: `$sendDM[$authorID;{title:Reminder!}{description:<a:dp_star6:835142297125519420> I had to remind __*$timeoutData[message]*__ to you! The time has come!}{color:$getServerVar[hex]}]`
});
//REMNINDER

//BAN EVET veya HAYIR
bot.awaitedCommand({
  name: 'yes',
  code: `
  $clearReactions[$channelID;$message[1];<a:enabled:861074153880944680>]
  $clearReactions[$channelID;$message[1];<a:disabled:861074181865078784>]
  $editMessage[$message[1];
  {description:**$username[$findMember[$message[1]]] is banned from the server! Well. . . <a:dp_star6:835142297125519420>**
    Banned by : <@$authorID> <a:pas10:835152237042729040> 
  }{color:ff8b7d} $ban[$findMember[$message[1]]]
  $onlyIf[$hasPerms[$authorID;ban]!=false;{description: You don't have \`BAN\` permission.}{color:$getServerVar[hex]}]
  `
});
bot.awaitedCommand({
  name: 'no',
  code: `
  $clearReactions[$channelID;$message[1];<a:enabled:861074153880944680>]
  $clearReactions[$channelID;$message[1];<a:disabled:861074181865078784>]
  $editMessage[$message[1];
  {description:**𖤐 So we forgave you. Be careful from moddies $username[$findMember[$message[1]]] <a:dp_star6:835142297125519420>**}{color:$getServerVar[hex]}]
  $onlyIf[$hasPerms[$authorID;ban]!=false;{**You don't have \`BAN\` permission₊˚**}{color:$getServerVar[hex]}]
  `
});
//BAN EVET VEYA HAYIR
bot.command({
  name: '$alwaysExecute',
  code: `

$if[$getUserVar[xp]>$getUserVar[req]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[req;$multi[$getUserVar[req;$authorID];2]]

$onlyIf[$isBot[$authorID]==false;]


$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$onlyIf[$isBot[$authorID]==false;]
$else
$setUserVar[xp;$sum[$getUserVar[xp];$random[1;10]]]
$onlyIf[$isBot[$authorID]==false;]
$endif
$cooldown[7s;]
$onlyIf[$checkContains[$getServerVar[lvlblacklisted];$channelID]==false;]

$suppressErrors
$onlyIf[$isBot[$authorID]==false;]

$if[$roleExists[$getServerVar[level3]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level3]]==3false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level3]]
$onlyIf[$hasRole[$authorID;$getServerVar[level3]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif

$if[$roleExists[$getServerVar[level5]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level5]]==5false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level5]]
$onlyIf[$hasRole[$authorID;$getServerVar[level5]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif
 
$if[$roleExists[$getServerVar[level10]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level10]]==10false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level10]]
$onlyIf[$hasRole[$authorID;$getServerVar[level10]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif
 
$if[$roleExists[$getServerVar[level20]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level20]]==20false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level20]]
$onlyIf[$hasRole[$authorID;$getServerVar[level20]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif
 
$if[$roleExists[$getServerVar[level30]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level30]]==30false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level30]]
$onlyIf[$hasRole[$authorID;$getServerVar[level30]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif 
 
$if[$roleExists[$getServerVar[level40]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level40]]==40false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level40]]
$onlyIf[$hasRole[$authorID;$getServerVar[level40]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif
 
$if[$roleExists[$getServerVar[level50]]$checkUserPerms[$botID;manageroles]==truetrue]
$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level50]]==50false]
$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]
$giveRole[$authorID;$getServerVar[level50]]
$onlyIf[$hasRole[$authorID;$getServerVar[level50]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]

$endif
 
$if[$roleExists[$getServerVar[level60]]$checkUserPerms[$botID;manageroles]==truetrue]

$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level60]]==60false]

$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]

$giveRole[$authorID;$getServerVar[level60]]

$onlyIf[$hasRole[$authorID;$getServerVar[level60]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else
$onlyIf[$isBot[$authorID]==false;]




$endif

$if[$roleExists[$getServerVar[level20]]$checkUserPerms[$botID;manageroles]==truetrue]

$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level70]]==70false]

$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]

$giveRole[$authorID;$getServerVar[level70]]

$onlyIf[$hasRole[$authorID;$getServerVar[level70]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else

$onlyIf[$isBot[$authorID]==false;]



$endif

$if[$roleExists[$getServerVar[level80]]$checkUserPerms[$botID;manageroles]==truetrue]

$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level80]]==80false]

$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]

$giveRole[$authorID;$getServerVar[level80]]

$onlyIf[$hasRole[$authorID;$getServerVar[level80]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else

$onlyIf[$isBot[$authorID]==false;]



$endif

$if[$roleExists[$getServerVar[level90]]$checkUserPerms[$botID;manageroles]==truetrue]

$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level90]]==90false]

$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]

$giveRole[$authorID;$getServerVar[level90]]

$onlyIf[$hasRole[$authorID;$getServerVar[level90]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else

$onlyIf[$isBot[$authorID]==false;]



$endif

$if[$roleExists[$getServerVar[level100]]$checkUserPerms[$botID;manageroles]==truetrue]

$if[$getUserVar[level]$hasRole[$authorID;$getServerVar[level100]]==100false]

$channelSendMessage[$replaceText[$replaceText[%$checkCondition[$getServerVar[lvlchannel]==]%;%true%;$channelID;1];%false%;$getServerVar[lvlchannel];1];$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[levelmsg];{username};$username;-1];{level};$sum[$getUserVar[level];1];-1];{mention};<@$authorID>;-1];{user.id};$authorID;-1]]

$giveRole[$authorID;$getServerVar[level100]]

$onlyIf[$hasRole[$authorID;$getServerVar[level100]]==false;]
$onlyIf[$isBot[$authorID]==false;]
$else

$onlyIf[$isBot[$authorID]==false;]



$endif

$suppressErrors
$onlyIf[$isBot[$authorID]==false;]
 `
});
bot.deletedCommand({
  channel: '$channelID',

  code: `$setChannelVar[snipe_msg;$message]

$setChannelVar[snipe_author;$authorID]

$setChannelVar[snipe_channel;$channelID]

$setChannelVar[snipe_date;$day $month $year - $hour:$minute]
$onlyForServers[$guildID;]`
});
bot.awaitedCommand({
  name: 'Truth',
  code: `$color[FFD58D]
$onlyIf[$channelID==$getServerVar[tdchannel];]
$title[Okay $username. You have chosen Truth...]
$description[Ehem... $randomText[What is the most embarrassing thing you’ve ever done?;Who are you crushing on right now?;How many people have you kissed or slept with?;What is the most childish thing you’ve done over the age of 13?;Tell me a time you were rejected, and describe it in detail for at least five minutes!;Tell me something you don’t like about me.;What is something illegal you’ve done?;What is the meanest thing you’ve ever done to somebody?;What is the grossest thing you’ve overheard someone do?;Have you ever peed yourself as an adult or teenager?;Have you ever stolen something from your parents or another person?;Who is one person you wish was still in your life?;Who is a person you don’t like but pretend to?;When was a time you felt really embarrassed for somebody else?;Do you think you’re uglier or better looking than most people you know?;Have you ever catfished anybody? If so, what happened? If not, have you wanted to?;What is the silliest thing you’re genuinely scared of?;Have you ever been pulled over by the cops?;Do you believe in ghosts?;At what age did you stop sleeping with a light on?;What is a really gross habit you have and never wanted anybody to find out?;What is something you did a long time ago that you still regret today?;What is the naughtiest thing you’ve ever done?;Have you ever heard your parents sleeping together?;Have you ever been catfished <lure (someone) into a relationship by means of a fictional online persona.> before? What happened and how did you find out?;Describe your grossest kiss and why it was so nasty!;Have you ever hacked into someone’s social media to read their messages?;Have you ever been in a police car, and if so, why?;Have you ever creeped on or stalked somebody on social media?;What is something your best friend or significant other does that you really hate?;If you had to hook up with one family member, who would it be?;Tell me about a time you fake-cried, or only pretended to be regretful in order to get out of trouble.;Who do you think is the most unattractive of all your friends?;What is the biggest lie you’ve ever told, and who did you tell it to?;If you had to go out on a date with one person of the same s*x, who would it be?]]`
});
bot.awaitedCommand({
  name: 'Dare',
  code: `$color[FF5E5E]
$onlyIf[$channelID==$getServerVar[tdchannel];]
$title[Okay $username. You have chosen Dare... 3:)]
$description[Hmm... $randomText[We dare you to send to a person in here <a:strawwy:861057831712980992> 5,000!;Shave your arms and send us a pic.;Message someone you haven’t talked to in at least 1 year on Facebook or Instagram and take a screenshot and send it to us.;Record yourself singing a song for 15 secs and send it to here in 2 mins!;Text your crush and ask them out on an e-date and send screenshot to us.;Pick the third number on your contacts list and message them a silly poem, and show it to us^^;Cut a piece of your hair and show it to us with peace sign.;Ask a neighbor if they have fifty cents and record voice XD;Send us a screenshot of your messages with the last person besides -the person asked- you texted.;Brush your teeth with peanut butter or any food that can be rub on the tooth and send us a pic.;Send us a screenshot of your selfies gallery.;Shave a part of your body you wouldn’t usually shave and send it to us.;Pretend to be a cat for 30 secs in Voice Chat.;ChAt WiTh aN aCcEnT fOr ThE rEst of tHe gaMe lIke a CaT, meow.]]`
});
bot.command({
  name: '$alwaysExecute',
  code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/]
`
});
bot.updateCommand({
  channel: '$channelID',

  code: `$setChannelVar[msgEditorID;$authorID]

$setChannelVar[esnipeOldMsg;$oldMessage]
$onlyForServers[$guildID;]`
});
bot.command({
  name: '<@784865728322338816>',
  code: `$title[Kaeru is here!]
$description[<a:ep_arrow3:817209839255420949> **Hello $username!

My Prefix is ꒰ $getServerVar[prefix] ꒱

You can type ꒰ $getServerVar[prefix]help ꒱ for commands**

<a:0_flower1:817391078810320916> **__Want to add me to your server?__**
<:dash5:817209872990076982> [Click here ✦ ࣪ ˖](https://discord.com/oauth2/authorize?client_id=784865728322338816&scope=bot%20applications.commands&permissions=2147483647) <a:0_heartpixel:817391060774682666>

<a:0_flower2:817391074556510269> **__Want to join official server?__**
<:dash5:817209872990076982> [Click here ✦ ࣪ ˖](https://discord.gg/EWz43tWqbb) <a:0_heartpixel:817391060774682666>]
$addTimestamp
$thumbnail[$authorAvatar]
$color[$getServerVar[hex]]`,
  nonPrefixed: true
});

bot.awaitedCommand({
  name: 'tsp2',

  code: `

**<a:dp_star6:835142297125519420> Setup ticket is complete**

$setServerVar[ticketchannel;$message]

$onlyIf[$channelExists[$message]==true;<a:dp_star6:835142297125519420> Provided Category Doesn't Exist{delete:10s}]

$onlyIf[$isNumber[$message]==true;<a:dp_star6:835142297125519420> Please provide Category ID{delete:10s}]`
});

bot.awaitedCommand({
  name: 'shop1',
  code: `
  $editMessage[$message[1];{author:୨ Role Shopsu!! ෆ:$userAvatar[$clientID]}
  {color:$getServerVar[hex]}
  {thumbnail:$serverIcon}
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop. Yaay! <a:beee:846943809220640778>*
**__<a:dp_star6:835142297125519420> | How to buy roles?__**
You can buy roles with example \`$getServerVar[prefix]buy-1\`. Easy right? I know, I know hhh}
$If[$getServerVar[role1]!=]
 {field:1꒱꒱ $role[$getServerVar[role1];name]:
> Role ⸼ ۫  ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role1]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price1]] lovsu}
$endIf

$If[$getServerVar[role2]!=]
{field:2꒱꒱ $role[$getServerVar[role2];name]:
> Role ⸼ ۫ ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role2]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price2]] lovsu}
$endIf

$If[$getServerVar[role3]!=]
{field:3꒱꒱ $role[$getServerVar[role3];name]:
> Role ⸼ ۫ ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role3]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price3]] lovsu}
$endIf

$If[$getServerVar[role4]!=]
{field:4꒱꒱ $role[$getServerVar[role4];name]:
> Role ⸼ ۫ ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role4]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price4]] lovsu}
$endIf

$If[$getServerVar[role5]!=]
{field:5꒱꒱ $role[$getServerVar[role5];name]:
> Role ⸼ ۫ ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role5]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price5]] lovsu}
$endIf
{footer:$userTag OwO:$authorAvatar}
{timestamp}]`
});
bot.awaitedCommand({
  name: 'shop2',
  code: `$editMessage[$message[1];{author:୨ Role Shopsu!! ෆ:$userAvatar[$clientID]}
  {color:$getServerVar[hex]}
  {thumbnail:$serverIcon}
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop. Yaay! <a:beee:846943809220640778>*
**__<a:dp_star6:835142297125519420> | How to buy roles?__**
You can buy roles with a example \`$getServerVar[prefix]buy-5\`. Easy right? I know, I know hhh}

$If[$getServerVar[role6]!=]
 {field:6꒱꒱ $role[$getServerVar[role6];name]:
> Role ⸼ ۫  ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role6]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price6]] lovsu!}
$endIf
$If[$getServerVar[role7]!=]
 {field:7꒱꒱ $role[$getServerVar[role7];name]:
> Role ⸼ ۫  ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role7]>
> Price ⸼ ۫ ꒰:  <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price7]] lovsu!}
$endIf
$If[$getServerVar[role8]!=]
 {field:8꒱꒱ $role[$getServerVar[role8];name]:
> Role ⸼ ۫  ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role8]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price8]] lovsu!}
$endIf
$If[$getServerVar[role9]!=]
 {field:9꒱꒱ $role[$getServerVar[role9];name]:
> Role ⸼ ۫  ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role9]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price9]] lovsu!}
$endIf
$If[$getServerVar[role10]!=]
 {field:10꒱꒱ $role[$getServerVar[role10];name]:
> Role ⸼ ۫  ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role10]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price10]] lovsu!}
$endIf

{footer:$userTag OwO:$authorAvatar}
{timestamp}]`
});
 