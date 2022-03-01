module.exports = {
  name: "serverinfo",
  aliases: ['sinfo','server'],
  code:`
$color[$getServerVar[hex]]
$author[₊˚✿ 𝗦𝗲𝗿𝘃𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻₊˚✿੭;$serverIcon]
$description[$thumbnail[$serverIcon]
$addField[。⨯ Invite Link𓂃੭
◃───────────▹;
<:dash6:817209859686400000> $getServerInvite]
$addField[。⨯ Server Boost𓂃੭
๑‿︵‿୨\`🍷\`୧‿︵‿๑;<:NitroBoost:849937943397531689> $serverBoostCount Boost - Level $guild[$guildID;boostlevel;yes]
$addField[。⨯ Creation Date𓂃੭
๑‿︵‿୨\`🍓\`୧‿︵‿๑;<:blue_10:817210292236451890> $guild[$guildID;created] 
<:ribbon:797165741375881226> ($guild[$guildID;timestamp] ago)]
$addField[。⨯ Members Count𓂃੭
๑‿︵‿୨\`🌸\`୧‿︵‿๑;
<:members:849943112582823946>   $membersCount[$guildID;all;no] Member's,, $botCount Bot's
<:online:849942524453978123> $membersCount[$guildID;online] online
<:away:849942352558292992> $membersCount[$guildID;Idle] afk
<:dnd:849942689989656597> $membersCount[$guildID;dnd] dnd
<:offline:849942623599067196> $membersCount[$guildID;offline] offline]
$addField[。⨯ Emote Counts𓂃੭
๑‿︵‿୨\`🍯\`୧‿︵‿๑;<:stan_neo:826480396827885648> $emojiCount Emotes]
$addField[。⨯ Channel Count𓂃੭
๑‿︵‿୨\`🐻\`୧‿︵‿๑;
<:empty:849943501184958534> $channelCount[category] categories
<:channel:849942768980721664> $channelCount[text] text channels
<:VoiceChannel:849942825147301968> $channelCount[voice] voice channels]
$addField[。⨯ Roles Count𓂃੭
๑‿︵‿୨\`🍓\`୧‿︵‿๑;<:stars:843223804447686696> $roleCount Roles]
$addField[。⨯ Server Region𓂃੭
๑‿︵‿୨\`🌸\`୧‿︵‿๑;
<:dot:797157264678060082> $serverRegion]
$addField[。⨯ Server Name𓂃੭
๑‿︵‿୨\`🍯\`୧‿︵‿๑;
<:strawberry:843222396424945694> **\`$serverName[$guildID]\`** <:strawberry:843222396424945694> ]
$addField[。⨯ Owner𓂃੭
๑‿︵‿୨\`🐻\`୧‿︵‿๑;
<:owner:850015675745304607> <@$ownerID>]]
$footer[Requested by $username ﹆;$authorAvatar] $addTimestamp`
}