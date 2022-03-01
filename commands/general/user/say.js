module.exports ={
  name: "say", 
  code: `
  $message <:ACOSP_cutegiggle:817219215060762664>
$deletecommand
$onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;{description: <:dash6:817209859686400000> Umm..? Please do not use me to mention to \`@here\` or \`@everyone\` or for other stuffs. . . uhh}{color:fcbfcb}]
  `
}