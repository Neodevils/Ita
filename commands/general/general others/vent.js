module.exports = {
  name: "vent", 
  code: `
$channelSendMessage[$getServerVar[vent];{description:・┇ $message}{author:They didn't want to tell it to vent channel directly so. . .:$userAvatar[784865728322338816]}
{timestamp}
{color:$getServerVar[hex]}]
$deletecommand
$argsCheck[>1;{description:<a:dp_star6:835142297125519420> Please type something that you want to vent. . . I will send it for you}{color:fcbfcb}{delete:5s}]
$onlyIf[$getServerVar[vent]!=;{description:**<:strawberry:843222396424945694> Hewwo.. I know you want to vent but vent channel didn't settled by staffs..**}{deletecommand}{color:$getServerVar[hex]}]`
}