module.exports = {
 name: "skip",
 code: `$skipSong
 $author[┇ Skipped!!;$authorAvatar]
 $description[<:d_dash6:854144805213569027> now playing: \`$songInfo[title;1]\`
 <:d_dash5:854144810340319262> song url: $songInfo[url;1]
 <:d_dash4:854144815235465277> song duration : $songInfo[duration;1]]
 $color[$getServerVar[hex]]
 $suppressErrors[{description:There is no songs, so let's listen to it :p}{color:$getServerVar[hex]}{footer:You can use k.pause.੭}]
$onlyIf[$queueLength>1;{description:<a:pas10:835152237042729040> **Ehm. This  the last song :3**}{color:$getServerVar[hex]}]
$onlyIf[$queueLength!=0;**<a:dp_star6:835142297125519420> Nothing was playing**]`
 }