module.exports = [{
name: "rob",
code: `$if[$getGlobalUserVar[knife;$mentioned[1]]==var]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];$random[1;750]];$authorID]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$mentioned[1]];$random[1;750]];$mentioned[1]]
$setUserVar[xp;$sub[$getUserVar[xp;$authorID];$random[10;75];$authorID];$guildID]
$setUserVar[xp;$sum[$getUserVar[xp;$mentioned[1]];$random[10;75]];$mentioned[1];$guildID]
$setGlobalUserVar[knife;yok;$mentioned[1]]
$channelSendMessage[$channelID;
{color:$getServerVar[hex]}
{thumbnail:$userAvatar[$authorID]}
{title:Opps, $username! }
{description:
୨ ┈・┈・✧・┈・┈ ୧
<:dot:797157264678060082> ꒰꒰ <a:bonk:817209813419163709> $username.. you failed to rob $username[$mentioned[1]], they protected themselves with knife and took your **__<a:strawwy:861057831712980992> $random[1;750] stawwies__** and **__<:exp_heart:843229991491469342> $random[10;75] lovsu!!__** (｡╯︵╰｡) 
‧ ˚₊  ✦  ‧ —  — — — ✦ ‧ — —  ‧ ୧ ‧ ˚₊}
{footer:🍓 -$random[1;750] stawwy lost ┆ 💖 -$random[10;75] lovsu lost}]
$endif
$if[$getGlobalUserVar[knife;$mentioned[1]]==yok]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[1;750]];$authorID]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$mentioned[1]];$random[1;750]];$mentioned[1]]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[10;75];$authorID];$guildID]
$setUserVar[xp;$sub[$getUserVar[xp;$mentioned[1]];$random[10;75]];$mentioned[1];$guildID]
$channelSendMessage[$channelID;
{color:$getServerVar[hex]}
{thumbnail:$userAvatar[$authorID]}
{title:$username robbed $username[$mentioned[1]] :0}
{description:
୨ ┈・┈・✧・┈・┈ ୧
<:dot:797157264678060082> ꒰꒰ <a:bonk:817209813419163709> $username has robbed $username[$mentioned[1]] and took **__<a:strawwy:861057831712980992> $random[1;750] stawwies__** and **__<:exp_heart:843229991491469342> $random[10;75] lovsu!!__** (ノ^∇^)
‧ ˚₊  ✦  ‧ —  — — — ✦ ‧ — —  ‧ ୧ ‧ ˚₊}
{footer:🍓 +$random[1;750] stawwy ┆ 💖+$random[10;75] lovsu}]
$endif

$globalCooldown[10m;You can rob someone again in %time%, no need to be in rush right? :3]
$onlyIf[$getGlobalUserVar[pocket;$authorID]>=750; <a:dp_star6:835142297125519420> **Your pocket needs to contain at least __<a:strawwy:861057831712980992> 750 stawwies__ to rob someone^^**]
$onlyIf[$getUserVar[xp;$authorID]>=75;<a:dp_star6:835142297125519420> You need at least __**<:exp_heart:843229991491469342> 75 lovsu**__ to rob someone ]
$onlyIf[$getUserVar[xp;$mentioned[1]]>=25;<a:dp_star6:835142297125519420> They need at least __**<:exp_heart:843229991491469342> 25 lovsu**__]
$onlyIf[$getGlobalUserVar[pocket;$mentioned[1]]>=750;<a:dp_star6:835142297125519420> Their pocket needs to contain at least __<a:strawwy:861057831712980992> 750 stawwies__]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**<a:mnrubs:817219196953952267> umm you can't rob discord bots**]
$onlyIf[$mentioned[1]!=$authorID;**<a:mnrubs:817219196953952267> oi what :D**]
$onlyIf[$mentioned[1]!=;**<a:mnrubs:817219196953952267> you need to mention someone to rob? mhm **]`
},
{
name: "steal",
code: `
$if[$getGlobalUserVar[padlock;$mentioned[1]]==var]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];$random[1500;5000]];$authorID]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$mentioned[1]];$random[1500;5000]];$mentioned[1]]
$setGlobalUserVar[padlock;yok;$mentioned[1]]
$setGlobalUserVar[gun;yok;$authorID]
$channelSendMessage[$channelID;
{color:$getServerVar[hex]}
{thumbnail:$userAvatar[$authorID]}
{title:Opps, $username! }
{description:
୨ ┈・┈・✧・┈・┈ ୧
<:dot:797157264678060082> ꒰꒰ <a:bonk:817209813419163709> $username.. you failed to steal $username[$mentioned[1]]'s moneybox, they protected themselves with padlock and took your **__<a:strawwy:861057831712980992> $random[1500;5000] stawwies on moneybox__** (｡╯︵╰｡) 
‧ ˚₊  ✦  ‧ —  — — — ✦ ‧ — —  ‧ ୧ ‧ ˚₊}
{footer:🍓 -$random[1500;5000] stawwy lost}]
$endif
$if[$getGlobalUserVar[padlock;$mentioned[1]]==yok]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[1500;5000]];$authorID]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$mentioned[1]];$random[1500;5000]];$mentioned[1]]
$setGlobalUserVar[gun;yok;$authorID]
$channelSendMessage[$channelID;
{color:$getServerVar[hex]}
{thumbnail:$userAvatar[$authorID]}
{title:$username robbed $username[$mentioned[1]] :0}
{description:
୨ ┈・┈・✧・┈・┈ ୧
<:dot:797157264678060082> ꒰꒰ <a:bonk:817209813419163709> $username.. you stole $username[$mentioned[1]]'s moneybox, and y-you took **__<a:strawwy:861057831712980992> $random[1500;5000] stawwies on their moneybox__** (ノ^∇^)
‧ ˚₊  ✦  ‧ —  — — — ✦ ‧ — —  ‧ ୧ ‧ ˚₊}
{footer:🍓 +$random[1500;5000] stawwy}]
$endif

$globalCooldown[20m;You can steal someone again in %time%, no need to be in rush right? :3]
$onlyIf[$getGlobalUserVar[moneybox;$authorID]>=1500; <a:dp_star6:835142297125519420> **Your moneybox needs to contain at least __<a:strawwy:861057831712980992> 1500 stawwies__ to steal someone's moneybox^^**]
$onlyIf[$getGlobalUserVar[moneybox;$mentioned[1]]>=1500;<a:dp_star6:835142297125519420> Their moneybox needs to contain at least __<a:strawwy:861057831712980992> 750 stawwies__]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**<a:mnrubs:817219196953952267> umm you can't rob discord bots**]
$onlyIf[$mentioned[1]!=$authorID;**<a:mnrubs:817219196953952267> oi what :D**]
$onlyIf[$mentioned[1]!=;**<a:mnrubs:817219196953952267> you need to mention someone to steal? mhm**]
$onlyIf[$getGlobalUserVar[gun;$authorID]==yok;<a:dp_star6:835142297125519420> "Gun is missing", you also need a bag for steal, so yah dun forget]
$onlyIf[$getGlobalUserVar[bag;$authorID]==yok;<a:dp_star6:835142297125519420> "Bag is missing", you also need a gun for steal, so yah dun forget]`

}]