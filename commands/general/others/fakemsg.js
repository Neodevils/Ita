module.exports = {
name:"fakemsg",
  code:`

$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$message]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
$suppressErrors[||mawbe you shwuld type somewthing (づ◡﹏◡)づ||]
  $cooldown[3s;{description:You are too fast, wait a little bit}{color:ffb87d!}[delete:5s}]
  $onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;Cutie, that's wrong what are you trying for -3-]
  $deletecommand
  `
  }