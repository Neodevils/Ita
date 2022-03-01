module.exports = ({
name: "del-cmd",
code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$color[$getServerVar[hex]]
$description[<a:dp_star6:835142297125519420> Successfully deleted $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] auto response. . .]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:fcbfcb}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:fcbfcb}]
$argscheck[>1;{description:Correct use \n\`\`\`\n$getservervar[prefix]del-cmd <trigger>\n\`\`\`}{color:fcbfcb}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:fcbfcb}{timestamp}]
`
}) 
 