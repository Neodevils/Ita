module.exports = {
    name:"buy",
    bkz:["buying something on market lol idk why did I type that tho"],
    code:`
    $if[$checkCondition[$message[1]==spiteful]$checkCondition[$message[1]==lucky]$checkCondition[$message[1]==joker]$checkCondition[$message[1]==multiple-evil]$checkCondition[$message[1]==eye]$checkCondition[$message[1]==bag]$checkCondition[$message[1]==gun]$checkCondition[$message[1]==poison]$checkCondition[$message[1]==knife]$checkCondition[$message[1]==padlock]$checkCondition[$message[1]==multiple-lovsu]$checkCondition[$message[1]==multiple-stawwy]$checkCondition[$message[1]==lucky]$checkCondition[$message[1]==spiteful]$checkCondition[$message[1]==phone]$checkCondition[$message[1]==monitor]$checkCondition[$message[1]==case]$checkCondition[$message[1]==fishing-pole]==falsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalsefalse]
  <a:dp_star6:835142297125519420> **The item you wanted..? Uhh, I don't have an item named \`$message[1]\`. . .**
    $endif
$if[$message[1]==spiteful]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];1000];$authorID]

$setGlobalUserVar[spiteful;$sum[$getGlobalUserVar[spiteful;$authorID];1];$authorID]

<a:dp_star6:835142297125519420> *buying the chest*

$editIn[3s;<a:pas10:835152237042729040> **chest claimed!**;{thumbnail:$userAvatar[$authorID]}

{color:$getServerVar[hex]}

{title:<a:spiteful:843468902314541076> spiteful chest <a:spiteful:843468902314541076>}

{description: — you bought a spiteful chest for <a:strawwy:861057831712980992> 1,000 stawwies!

> **<a:pas10:835152237042729040> open it and see what you find!**

> <a:unlem_kaeru:864997251932094514> **__just be warned!__ It could be spiteful, goodluck ehehe**}



{footer:Usage︰ $getServerVar[prefix]open-spiteful}]

$onlyIf[$getGlobalUserVar[pocket;$authorID]>999;Need <a:strawwy:861057831712980992> 1,000 in your pocket to buy it, try withrawing stawwies on your moneybox hhh]
$endif

$if[$message[1]==lucky]
$thumbnail[$userAvatar[$authorID]]
$color[$getServerVar[hex]]
$title[<:lucky:843466529031192606> Lucky Chest <:lucky:843466529031192606>]
$description[**。You bought a lucky chest for <a:strawwy:861057831712980992> 250 strawwies!**
> open it and press your luck for a chance to get the <a:strawwy:861057831712980992> 5,000 lucky pot, good luck! ヾ(＾-＾)ノ
]
$footer[Usage:$getServerVar[prefix]open-lucky]

$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];250];$authorID]


$setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky;$authorID];1];$authorID]

$onlyIf[$getGlobalUserVar[pocket;$authorID]>250;{description:**Need atleast <a:strawwy:861057831712980992> 250 stawwies in your pocket**}{color:$getServerVar[hex]}]
$endif

$if[$message[1]==joker]
   $channelSendMessage[$channelID;{title:<:boost_evil:865958761164308480> You have bag item right now <:boost_evil:865958761164308480>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]joker @user\` and reduces mentioned user's 50 good deeds and adds all good deeds of them to yourself *!* Great.. right c:}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __250__ evil deeds}{color:$getServerVar[hex]}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];250];$authorID]
    $setGlobalUserVar[joker;var;$authorID]
$globalCooldown[3d;You need to wait %time% to buy this powerful perk again. Please be patient.]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<249]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $onlyIf[$getGlobalUserVar[joker;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your evil deeds on this senpai, you already have it c:]
    $endif

$if[$message[1]==multiple-evil]
   $channelSendMessage[$channelID;{title:<a:evil_bonus:865958289652318238> You have multiple-evil perk right now <a:evil_bonus:865958289652318238>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]multiple-evil\` to double your evil deeds *!* Great.. right c:}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __125__ evil deeds}{color:$getServerVar[hex]}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];125];$authorID]
    $setGlobalUserVar[multi_evil;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<124]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $onlyIf[$getGlobalUserVar[multi_evil;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your evil deeds on this senpai, you already have it c:]
    $endif

$if[$message[1]==eye]
 $setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[10000;15000]];$authorID]
   $channelSendMessage[$channelID;{title:<a:eye:865958568448491530> You have bought eye <a:eye:865958568448491530>}
{description:||<a:dp_star6:835142297125519420> Eye's opening...||}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __100__ evil deeds}{color:$getServerVar[hex]}]
$editIn[3s;3..;2..;1.;<a:eye:865958568448491530> "DEVIL EYE HAS OPENED!";<a:eye:865958568448491530> DEVIL'S EYE LOOKING FOR STAWWIES!;<a:eye:865958568448491530> STAWWIES CAN'T HIDE FROM THIS EYE, GOT 'HEM!;{description:Devil eye found <a:strawwy:861057831712980992> $random[10000;15000] for you, use it for devils side, my beloved :3;<3 Love you :* $username;:blank:}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];100];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<99]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $endif

$if[$message[1]==gun]
   $channelSendMessage[$channelID;{title:<a:gun:865957260340494337> You have bag item right now <a:gun:865957260340494337>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]steal @user\` *!* Great.. right c:}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __10__ evil deeds}{color:$getServerVar[hex]}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];10];$authorID]
    $setGlobalUserVar[gun;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<9]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $onlyIf[$getGlobalUserVar[gun;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your evil deeds on this senpai, you already have it c:]
    $endif
  
$if[$message[1]==bag]
   $channelSendMessage[$channelID;{title:<a:bag:865957197350830150> You have bag item right now <a:bag:865957197350830150>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]steal @user\` *!* Great.. right c:}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __2__ evil deeds}{color:$getServerVar[hex]}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];2];$authorID]
    $setGlobalUserVar[bag;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<1]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $onlyIf[$getGlobalUserVar[bag;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your evil deeds on this senpai, you already have it c:]
    $endif

$if[$message[1]==poison]
   $channelSendMessage[$channelID;{title:<a:poison:865957832837562378> You have poison item right now <a:poison:865957832837562378>}
{description:<a:dp_star6:835142297125519420> With this item you can reduce an user's xp random use \`$getServerVar[prefix]poison @user\`! Great.. right c:}
{field:amount deducted from evil deeds...: <a:mostwanted:862033820668657694> __60__ evil deeds}{color:$getServerVar[hex]}]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];60];$authorID]
    $setGlobalUserVar[poison;var;$authorID]
    $onlyIf[$getGlobalUserVar[poison;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your evil deeds on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<59]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds :c]
    $endif

   $if[$message[1]==knife]
    $setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];6];$authorID]
    $setGlobalUserVar[knife;var;$authorID]
    $wait[1ms]
$channelSendMessage[$channelID;{title:<:moneybox:843231859127091220> Knife... alright take it c: <:moneybox:843231859127091220>}
{description:<a:dp_star6:835142297125519420> Now You can protect yourself from robbers, great right?}{color:BLACK}
{field:you bought knife only for...:<a:mostwanted:862033820668657694> 6 evil deeds}]
    $onlyIf[$getGlobalUserVar[knife;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your devil deeds on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[evil;$authorID]<6]!=true;<a:dp_star6:835142297125519420> You don't have enough evil deeds-]
    $endif
    
    $if[$message[1]==padlock]
   $channelSendMessage[$channelID;{title:<:padlock:871384487186030662> Padlock has activated on your moneybox! <:padlock:871384487186030662>}
{description:<a:dp_star6:835142297125519420> This item will protect your moneybox, you don't have to worry about it now!}
{field:amount deducted from pocket...: <a:strawwy:861057831712980992> __750__ stawwy}{color:$getServerVar[hex]}]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];750];$authorID]
    $setGlobalUserVar[padlock;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<749]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $onlyIf[$getGlobalUserVar[padlock;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $endif
$if[$message[1]==multiple-stawwy]
   $channelSendMessage[$channelID;{title:<a:boost_stawwies_item:866069011405602846> You have multiple-stawwy perk right now <a:boost_stawwies_item:866069011405602846>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]multiple-stawwy\` to double your stawwies *!* Great.. right c:}
{field:amount deducted from lovsu...: <a:boost_lovsu_item:866070667819745330> __10,000__ lovsu}{color:$getServerVar[hex]}]
$setUserVar[xp;$sub[$getUserVar[xp;$authorID];10000];$authorID]
    $setGlobalUserVar[multi_stawwy;var;$authorID]
    $onlyIf[$checkCondition[$getUserVar[xp;$authorID]<9999]!=true;<a:dp_star6:835142297125519420> You don't have enough lovsu :c]
    $onlyIf[$getGlobalUserVar[multi_stawwy;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your lovsu on this senpai, you already have it c:]
    $endif
$if[$message[1]==multiple-lovsu]
   $channelSendMessage[$channelID;{title:<a:boost_lovsu_item:866070667819745330> You have multiple-lovsu perk right now <a:boost_lovsu_item:866070667819745330>}
{description:<a:dp_star6:835142297125519420> With this item you can use \`$getServerVar[prefix]multiple-lovsu\` to double your lovsu on the server *!* Great.. right c:}
{field:amount deducted from stawwies...: <a:strawwy:861057831712980992> __50,000__ stawwies}{color:$getServerVar[hex]}]
$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];50000];$authorID]
    $setGlobalUserVar[multi_lovsu;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<49999]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $onlyIf[$getGlobalUserVar[multi_lovsu;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $endif

    $if[$message[1]==monitor]
    $setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];1000];$authorID]
    $setGlobalUserVar[monitor;var;$authorID]
    $wait[1ms]
$channelSendMessage[$channelID;{title:<a:dp_TV:846943660029116436> Here is your monitor! c: <a:dp_TV:846943660029116436>}{color:$getServerVar[hex]}
{description:<a:dp_star6:835142297125519420> Now You can use this monitor for hacking, great right?}
{field:you bought monitor and that cost you...:<a:strawwy:861057831712980992> __10,000__ stawwy}]
        $onlyIf[$getGlobalUserVar[monitor;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<9999]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $endif

    $if[$message[1]==case]
    $setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];5000];$authorID]
    $setGlobalUserVar[case;var;$authorID]
    $wait[1ms]
$channelSendMessage[$channelID;{title:<:case:866077135109619752> Nicee! You got case! c: <:case:866077135109619752>}{color:$getServerVar[hex]}
{description:<a:dp_star6:835142297125519420> Now You can use this monitor for hacking, great right?}
{field:you bought case and that cost you...:<a:strawwy:861057831712980992> __5,000__ stawwy}]
       $onlyIf[$getGlobalUserVar[case;$authorID]=!var;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<4999]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $endif

   $if[$message[1]==phone]
    $setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];5000];$authorID]
    $setGlobalUserVar[phone;var;$authorID]
    $wait[1ms]
$channelSendMessage[$channelID;{title:<a:phone:865960585895608330> Nicee! You got a phone! c: <a:phone:865960585895608330>}{color:$getServerVar[hex]}
{description:<a:dp_star6:835142297125519420> Now You can use your phone for texting to other people by me, great right? *You can use your phone for message with $getServerVar[prefix]message @user (the message you want to send)! btw by anonymus OwO*}
{field:you bought phone and that cost you...:<a:strawwy:861057831712980992> __5,000__ stawwy}]
        $onlyIf[$getGlobalUserVar[phone;$authorID]!=var;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<4999]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $endif

   $if[$message[1]==fishing-pole]
    $setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];75];$authorID]
    $setGlobalUserVar[pole;3;$authorID]
    $wait[1ms]
$channelSendMessage[$channelID;{title:**𓍯** Nicee! You got a fishing pole! c: **𓍯**}{color:$getServerVar[hex]}
{description:<a:dp_star6:835142297125519420> Now You can use **\`$getServerVar[prefix]fish\`** command, great right? ||You can use this fishing pole only 3 times!||}
{field:you bought monitor and that cost you...:<a:strawwy:861057831712980992> __75__ stawwy}]
        $onlyIf[$getGlobalUserVar[pole;$authorID]!=3;<a:dp_star6:835142297125519420> You don't have to waste your stawwies on this senpai, you already have it c:]
    $onlyIf[$checkCondition[$getGlobalUserVar[pocket;$authorID]<74]!=true;<a:dp_star6:835142297125519420> You don't have enough stawwies :c]
    $endif
    `
}