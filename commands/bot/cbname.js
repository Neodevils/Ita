module.exports = {
  name: "cbname",
  code: `$setBotName[$message]
  $title[Changing My Name!!]
  $description[My name is \`$message\` now]
$color[$getServerVar[hex]]
  $onlyForIDs[285118390031351809;{description:This command can be used by Neo :3}{color:$getServerVar[hex]}]
  
  $onlyIf[$message!=;{description:Please enter a name oωo}{color:FFB87D}]
$cooldown[3m;{description:Wait a little more. \%time%\ left, Neo ✿}{color:$getServerVar[hex]}]`
}