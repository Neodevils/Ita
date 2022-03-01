module.exports = ({
name: "cmd-list",
code: `
$author[Auto Responses!!₊˚]
$color[$getServerVar[hex]]
$thumbnail[$servericon]
$description[<a:dp_star6:835142297125519420> These are can be used!
> \`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$onlyif[$gettextsplitlength>=2;{description:<:dash6:817209859686400000> There are no custom commands on the server \`$servername\`}{color:fcbfcb}]
$textsplit[$getservervar[ccmd];/] 
`
}) 