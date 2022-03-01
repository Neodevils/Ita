module.exports = {
  name: "cbicon",
  code: `$setBotAvatar[$message]
  $title[Changing My Icon!!]
  $description[My icon is \`$message\` now]
$color[$getServerVar[hex]]
  $image[$message]
  $onlyForIDs[285118390031351809;{description:This command can be used by Neo :3}{color:$getServerVar[hex]}
  
  $onlyIf[$message!=;{description:Please enter a link oωo}{color:FFB87D}]
$cooldown[3m;{description:Wait a little more. \%time%\ left, Neo ✿}{color:$getServerVar[hex]}]`
}