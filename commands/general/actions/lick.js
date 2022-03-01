module.exports ={
name: "lick",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Ehem- What about me?<:ACOSP_cutegiggle:817219215060762664>}{color:$getServerVar[hex]}]
$author[$username licks $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/lick/gif/lick_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]lick @user ꔫ◞
**__Mention__ someone for \`lick\`~** <a:bonk:817209813419163709>}]`
}