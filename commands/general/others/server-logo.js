module.exports = ({
name: "logo",
aliases:['server-icon'],
code: `$onlyIf[$message==;]
$title[<a:0_flower1:817391078810320916> server icon<a:0_flower1:817391078810320916>;$serverIcon]
$image[$serverIcon]
$color[$getServerVar[hex]]` 
})