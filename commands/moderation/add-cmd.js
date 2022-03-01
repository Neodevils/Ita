module.exports = ({
name: "add-cmd",
code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
$description[ <a:dp_star6:835142297125519420> Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all auto responses.]
$color[$getServerVar[hex]]
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:fcbfcb}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:<:dash6:817209859686400000> Please don't use \`symbol\` for trigger and response}{color:fcbfcb}]
$argscheck[>2;{description:<a:pas10:835152237042729040> Correct use \n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{color:fcbfcb}]
$onlyperms[manageserver;{description: <a:pas10:835152237042729040> You have no permissions for \`MANAGE_SERVER\`}{color:fcbfcb}{timestamp}]
`
})
 