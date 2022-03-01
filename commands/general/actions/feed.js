module.exports ={
name: "feed",
code:`
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=$authorID;{description:✦ <:dash4:817209877335375932> ♡ Umm...
You should share some food with me, you know what am I talking about <:ACOSP_cutegiggle:817219215060762664>}{color:$getServerVar[hex]fcbfcb}]
$author[$username feeds $username[$mentioned[1]];$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$image[https://purrbot.site/img/sfw/feed/gif/feed_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{description:> $getServerVar[prefix]feed @user ꔫ◞
**__Mention__ someone for \`feed\`~** <a:bonk:817209813419163709>}]`
}