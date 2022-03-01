module.exports ={
name: "hug",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ I-
I wish I could have been in your arms- <:ACOSP_cutegiggle:817219215060762664>}{color:$getServerVar[hex]}]
$author[$username hugs $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/hug/gif/hug_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]hug @user ꔫ◞
**__Mention__ someone for \`hug\`~** <a:bonk:817209813419163709>}]`
}