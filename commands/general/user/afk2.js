module.exports = ({
    name:"$alwaysExecute",
    code:`
	$deleteIn[30s]
	$setGlobalUserVar[afkaa;No one has mentioned :3]
	$setVar[afkkk;$sub[$getVar[afkkk];1]]
	$setGlobalUserVar[afk;hayır]
    $setGlobalUserVar[afkmm;0]
    $setGlobalUserVar[afks;]
    $setGlobalUserVar[afkss;]
    $color[$getServerVar[hex]]
    $description[<a:pas10:835152237042729040> succesfully removed afk status!
||Total, you have been afk for \`$parseDate[$math[$dateStamp-$getglobaluservar[afkss]];time]\`.
<:dash3:817209881559826492> **your old afk reason was・\`$getGlobalUserVar[afks]\`.**
<:dash5:817209872990076982> while you are afk・you have been mentioned \`$getGlobalUserVar[afkmm]\` times.
<:dash4:817209877335375932> the member mentioned you last time・\`$getGlobalUserVar[afkaa]\`||]
    $onlyIf[$getGlobalUserVar[afkc]==2;]
    $setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
    $onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
    $suppressErrors`
    })