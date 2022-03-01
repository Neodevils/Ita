module.exports = {
	name: "avatar",
	aliases: ['av'],
	code: `
$if[$message==;]
$author[$username#$discriminator;$authorAvatar]
$title[✄ - - - - - - - - - - - - - - - -]
$color[$getServerVar[hex]]
$description[[─﹕๑ Avatar Link]($authorAvatar)]
$image[$replaceText[$authorAvatar;?size=4096?;?size=256;-1]]
$footer[Asked by: $username#$discriminator[$authorID];$authorAvatar]
$suppressErrors
$else

$author[$user[$mentioned[1];tag];$userAvatar[$mentioned[1]]]
$title[✄ - - - - - - - - - - - - - - - -]
$description[[─﹕๑ Avatar Link]($userAvatar[$mentioned[1;yes]])]
$image[$replaceText[$userAvatar[$mentioned[1]];?size=4096?;?size=256;-1]]
$footer[Asked by: $username#$discriminator[$authorID];$authorAvatar]
$suppressErrors`
}
