module.exports = ({
name: "spotify",
code: `$deletecommand
$playSpotify[$message;name;no;]
$suppressErrors[{title:Oppsie!!}{description:Please contract with bot developer. Also umm.. do I have permission to connect a voice channel? owo}{color:$getServerVar[hex]}]
$author[┊ Playlist is playing now!;$authorAvatar]
$description[**<:Spotify:850128169259368450> Listening to Spotify
This [Playlist]($message) playing right now**]
$color[$getServerVar[hex]]
$onlyIf[$voiceID!=;{description:You have to join to a voice channel}{color:$getServerVar[hex]}]
$argsCheck[>1;{title:Umm...}{description:Please enter a spotify playlist link.}{color:$getServerVar[hex]}]
$addReactions[<a:pbaDuck:817219192578900009>]`
})