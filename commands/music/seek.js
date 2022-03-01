module.exports = {
  name: "seek", 
  code:`$seekTo[$message]
 $author[┊ Seeking to $message. second!;$authorAvatar]
 $title[<:strawberry:843222396424945694><a:dp_star6:835142297125519420><:strawberry:843222396424945694><a:dp_star6:835142297125519420><:strawberry:843222396424945694>]
 $description[**♡ Done, seeked to $message. second!**]
 $color[$getServerVar[hex]]
 
 $suppressErrors[{description:<a:dp_star6:835142297125519420> Song? **Did song end?? qwq** umm also did you enter a second to seek? :3}{color:$getServerVar[hex]}]
$onlyIf[$voiceID!=;{title:Umm..}{description:You have to enter a vc owo}{color:$getServerVar[hex]}]
 `}