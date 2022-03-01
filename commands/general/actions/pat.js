module.exports ={
name: "pat",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Nya, nya?<a:pbaRoll:817219188203847681>}{color:$getServerVar[hex]}]
$author[$username pats $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/pat/gif/pat_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]pat @user ꔫ◞
**__Mention__ someone for \`pat\`~** <a:bonk:817209813419163709>}]`
}