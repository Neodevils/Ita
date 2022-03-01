module.exports ={
name: "tickle",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Hhhhhh! You are so funny!
And do you know? I have a spot that makes me laugh a lot~ <:ACOSP_cutegiggle:817219215060762664>}{color:$getServerVar[hex]}]
$author[$username tickles $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/tickle/gif/tickle_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]tickle @user ꔫ◞
**__Mention__ someone for \`tickle\`~** <a:bonk:817209813419163709>}]`
}