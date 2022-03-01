module.exports = {
  name: "ita", 
  code:`
$setGlobalUserVar[starter;var;$authorID]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];10000];$authorID]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];100];$authorID;$guildID]
$title[__**ฅ Starter-Pack ฅ**__]
$description[Good job with being Beta user of Kaeru, <@$authorID>! 
You have rewarded with **<a:strawwy:861057831712980992> 10,000 strawwies with <:exp_heart:843229991491469342> 100 lovsu**]
$color[RED]
$footer[Contract with bot developer,if there's a bug!]
 
$onlyIf[$getGlobalUserVar[starter;$authorID]!=var;You already claimed your starter pack, $username..?]
`
}
