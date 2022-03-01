module.exports = ({
    name:"$alwaysExecute",
    code:`
	$deleteIn[20s]
	$setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1]]
    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1]];1];$mentioned[1]]
    $description[<a:dp_star6:835142297125519420> hey cutie, the member you pinged is afk <a:zzt_bunni_sippy:817391098837205023>
**__their reason is__**
> \`$getGlobalUserVar[afks;$mentioned[1]]\`
<a:unlem_kaeru:864997251932094514> the member you have mentioned, afk for \`$parseDate[$math[$dateStamp-$getglobaluservar[afkss;$mentioned[1]]];time]\`-]
    $color[$getServerVar[hex]]
    $onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
    $suppressErrors`
    })