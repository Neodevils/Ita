module.exports = {
name: "queue", 
code: `$description[<:br_flower1:853589383193427998> Song List!! <:br_flower1:853589383193427998>
  $queue[1;10;{number}・{title}︶[url]({url}) by <@{userID}>]]
$color[$getServerVar[hex]]
 $onlyIf[$queueLength!=0;{description:<a:dp_star6:835142297125519420> Nothing playing right now. Wanna play a song? :3}{color:$getServerVar[hex]}]
 $onlyIf[$voiceID!=;{title:Umm...}{description:You have to be in voice channel first >-<}{color:$getServerVar[hex]}]`
}