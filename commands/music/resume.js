module.exports = {
 name: "resume",
 code: `$resumesong
 $author[┊ Your Music is playing!;$authorAvatar]
 $description[<a:c_heart1:854144565602287637> resumed : \`$songInfo[title]\`
<a:c_heart2:854144553439068191> song url : $songInfo[url]
<a:c_heart3:854144548991926282> duration : $songInfo[current_duration]]
 $color[$getServerVar[hex]]
$onlyIf[$queueLength!=0;{description:  <a:dp_star6:835142297125519420>
There wasn't a song playing.}{color:$getServerVar[hex]}]
 $onlyIf[$voiceID!=;{title:Umm..}{description:You have to enter a vc owo}{color:$getServerVar[hex]}]`}