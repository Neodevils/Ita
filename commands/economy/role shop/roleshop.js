module.exports = {
  name: "shop",
  code:`$reactionCollector[$splitText[1];$authorID;1m;<:y_number_1:837050840706580502>,<:y_number_2:837050845325426729>;shop1,shop2;yes]
  $textSplit[$sendMessage[{author:୨ Role Shopsu!! ෆ:$userAvatar[$clientID]}
  {color:$getServerVar[hex]}
  {thumbnail:$serverIcon}
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop. Yaay! <a:beee:846943809220640778>*
**__<a:dp_star6:835142297125519420> | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy-1\`. Easy right? I know, I know hhh}
$If[$getServerVar[role1]!=]
 {field:1꒱꒱ $role[$getServerVar[role1];name]:
> Role ⸼ ۫  ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role1]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price1]] lovsu}
$endIf

$If[$getServerVar[role2]!=]
{field:2꒱꒱ $role[$getServerVar[role2];name]:
> Role ⸼ ۫ ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role2]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price2]] lovsu}
$endIf

$If[$getServerVar[role3]!=]
{field:3꒱꒱ $role[$getServerVar[role3];name]:
> Role ⸼ ۫ ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role3]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price3]] lovsu}
$endIf

$If[$getServerVar[role4]!=]
{field:4꒱꒱ $role[$getServerVar[role4];name]:
> Role ⸼ ۫ ꒰: <a:bowred:861390312190377984> <@&$getServerVar[role4]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price4]] lovsu}
$endIf

$If[$getServerVar[role5]!=]
{field:5꒱꒱ $role[$getServerVar[role5];name]:
> Role ⸼ ۫ ꒰: <a:bowblue:861390233308233728> <@&$getServerVar[role5]>
> Price ⸼ ۫ ꒰: <a:lowe:861599577387827201> $numberSeparator[$getServerVar[price5]] lovsu}
$endIf
{footer:$userTag OwO:$authorAvatar}
{timestamp};yes]]
$suppressErrors[]`
}
