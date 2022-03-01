module.exports = {
name: "fish",
code: `
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket];$random[50;450]]]
$setGlobalUserVar[pole;$sub[$getGlobalUserVar[pole];1];$authorID]
**Yes! There is a good spot to fish! Let's go to there!**
$editIn[3s;*<a:dp_star6:835142297125519420> going to there*;*<a:dp_star6:835142297125519420> settled the hook*;{title:Yay! $username look at to your pole ᰍ}
{description:It seems like you caught a \`$randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆]\` ehehe ヾ(＾-＾)ノ}{color:$getServerVar[hex]};**Nice catch! \`$randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆]\` can be worthy on storage! We have almost arrived $username!**;⸜(｡˃ ᵕ ˂ )⸝ Yay! You have earned **__<a:strawwy:861057831712980992> $random[50;450]__** strawwies!]
$botTyping
$globalCooldown[45s;**ฅ Let's fuel our boat first, I'll be back in **__%time%__** ฅ**]
$onlyIf[$getGlobalUserVar[pole;$authorID]!=0;{description: <a:pas10:835152237042729040> **You have used all of your chances, please buy a new fishing pole with \`$getServerVar[prefix]buy fishing-pole\` to receive your fishing pole!**}{color:$getServerVar[hex]}]`



    }
