module.exports = {
    name: "set-bg",
    code: `
$color[$getServerVar[hex]]
$author[Background setted!]
$description[<:dash3:817209881559826492> Successfully setted the custom background for your rank card..!]
$image[$message]
$footer[Executed by $username#$discriminator[$authorID]]
$addTimestamp
$setServerVar[custombg;$message[1]]
$onlyIf[$checkContains[$message;https://;http://;img;.com;.net;.es;.;:;//;/;.jpg;.png;.gif;.webp;q=;images?;image?;img?;encrypted]==true;**$username** Please, make sure you wrote a valid background image URL]
    $onlyPerms[admin;<:dash3:817209881559826492> Only for admins!!]`
}