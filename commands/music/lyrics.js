module.exports = ({
name: "lyrics",
aliases: "l",
code:`
$title[<:dash4:817209877335375932> $songInfo[title] <:dash4:817209877335375932>] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song :(]]
$footer[Requested by $username;$authorAvatar]
$addTimestamp
$color[$getServerVar[hex]] 
$suppressErrors[Nothing was playing?]`
})