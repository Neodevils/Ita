module.exports = {

name: "profile",

code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**(｡ﾉω＼｡) We bots also don't have profiles. . .**]

$reply[$messageID;
{thumbnail:$userAvatar[$mentioned[1;yes]]}

{title:**<a:evilsuu:861375574386671637>৶ user profile <a:goodsu:861383559565541406>꒦꒷**}

{color:$getServerVar[hex]}
{description:
*・Here is the information as you requested!*}
{field:☾ evil ⛤:<a:evilsuu:861375574386671637> $getGlobalUserVar[evil;$mentioned[1;yes]] bad deeds:yes}
{field:☼ favor 𓍝: <a:goodsu:861383559565541406> $getGlobalUserVar[good;$mentioned[1;yes]] good deeds:yes}
{field:✿┇**__About Me__**:
**꒦꒷୧𓂃side࿔** 
$if[$getGlobalUserVar[evil;$mentioned[1;yes]]>$getGlobalUserVar[good;$mentioned[1;yes]]]
<a:mostwanted:862033820668657694> **__ᵈᵉᵛⁱˡ__**
$endif
$if[$getGlobalUserVar[evil;$mentioned[1;yes]]<$getGlobalUserVar[good;$mentioned[1;yes]]]
<a:guardian:862032785971216404> **__ᵃⁿᵍᵉˡ__**
$endIf
౨ \`$mentioned[1;yes]\` ৎ
— $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
— $nickname[$mentioned[1;yes]]
}

{field:✦ ┇**__Chests__**:

<a\:daily\:843466317188563004> | **$getGlobalUserVar[DailyChest;$mentioned[1;yes]]** DailyChest

<\:lucky\:843466529031192606> | **$getGlobalUserVar[lucky;$mentioned[1;yes]]** Lucky

<a\:spiteful\:843468902314541076> | **$getGlobalUserVar[spiteful;$mentioned[1;yes]]** Spiteful}

{field:໒ ┇**__Flow__**:

<a\:dp_star6\:835142297125519420> | **$numberSeparator[$sum[$getGlobalUserVar[pocket;$mentioned[1;yes]];$getGlobalUserVar[moneybox;$mentioned[1;yes]]]]** stawwies (total)

<a\:strawwy\:861057831712980992> | **$numberSeparator[$getGlobalUserVar[pocket;$mentioned[1;yes]]]** stawwies (pocket)

<\:moneybox\:843231859127091220> | **$numberSeparator[$getGlobalUserVar[moneybox;$mentioned[1;yes]]]** stawwies (moneybox)

<\:exp_heart\:843229991491469342> | **$numberSeparator[$getUserVar[xp;$mentioned[1;yes]]]** love}]
`
}