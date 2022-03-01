module.exports ={
name: "kiss",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ You are so cute, but you can kiss me instead *giggles* <a:zzt_bunni_roll:817391103652921435>}{color:$getServerVar[hex]}]
$author[$username kisses $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/kiss/gif/kiss_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]kiss @user ꔫ◞
**__Mention__ someone for \`kiss\`~** <a:bonk:817209813419163709>}]`
}