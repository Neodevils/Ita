/eval code𓂃:$exec[npm i github:aoijs/aoi.js#main]/eval code𓂃:$exec[npm i github:aoijs/aoi.js#main]module.exports = ({

name: "editsnipe",

aliases: ["esnipe"],

code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]

$description[> \`edited message\`
> $getChannelVar[esnipeOldMsg]]

$addTimestamp

$color[$getServerVar[hex]]

$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description:<a:pas10:835152237042729040> there is nothing to snipe}{color: fcbfcb}]

$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description:<a:pas10:835152237042729040> there is nothing to snipe}{color: fcbfcb}]

$suppressErrors[There is nothing to snipe~]`

})