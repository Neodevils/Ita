module.exports ={
name: "cuddle",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Do you wanna feel a warm body? Try on me baby <a:zzt_bunni_roll:817391103652921435>}{color:$getServerVar[hex]}]
$author[$username cuddles $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]cuddle @user ꔫ◞
**__Mention__ someone for \`cuddle\`~** <a:bonk:817209813419163709>}]`
}