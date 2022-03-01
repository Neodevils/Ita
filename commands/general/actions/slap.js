module.exports ={
name: "slap",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Slap me more I'm masochistic baby <a:pbaRoll:817219188203847681>}{color:$getServerVar[hex]}]
$author[$username slaps $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/slap/gif/slap_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]slap @user ꔫ◞
**__Mention__ someone for \`slap\`~** <a:bonk:817209813419163709>}]`
}