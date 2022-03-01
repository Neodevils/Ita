module.exports = {
name: "search",
code: ` 







$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[20;60]];$authorID]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[1;5]];$authorID;$guildID]
*Walking cutely*
$editIn[3s;{title:५<a:strawwy:861057831712980992> Ah! <a:strawwy:861057831712980992>५}
{thumbnail:$userAvatar[$authorID]}
{color:$getServerVar[hex]}
{description:· · - ┈┈━━ ˚ . <:blue_11:817210296233492480> . ˚ ━━┈┈ - · ·
  $username, $randomText[yey! we have found strawwies under your bed and took your dropped stawwies. Luckily we didn't lose them (。-ω-);!! look there *walking while holding your hand*. Yay! There are the strawwies on the ground!]}
{footer:🍓 +$random[20;60] strawwies | 💖 +$random[1;5] lovsu}]


$globalCooldown[35s;<a:box:817209817461817386> I'm looking for a new place to find strawwies, $username! it says results will be given in %time%. Can yuw wait a liwwe mowe?]`
}