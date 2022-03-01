module.exports = ({

name: "warnings", 

code: `$color[$getServerVar[hex]]

$author[┇ $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings. . .;$userAvatar[$mentioned[1;yes]]]

$description[<a:dp_star6:835142297125519420> **$username[$mentioned[1;yes]]** has,,

<:dash6:817209859686400000> \`$getUserVar[warns;$findUser[$message]]\` warnings

・ **warnings user's;;**

.Tag⸝⸝ <@$mentioned[1;yes]> 

.ID⸝⸝ (\`$mentioned[1;yes]\`)]
$footer[command executed by $username;$authorAvatar]

$onlyIf[$getUserVar[warns;$findUser[$message]]>0;{description:<a:dp_star6:835142297125519420> **The warnings of this user is already at 0, good member hhh**}{color:$getServerVar[hex]}]

$onlyIf[$mentioned[1]!=;{description:<a:dp_star6:835142297125519420> **May I know who's warnings we are going to see?**]

$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role to check staff command :(}{color:$getServerVar[hex]}]

$onlyIf[$isBot[$mentioned[1;yes]]!=true;{description:**<a:pas10:835152237042729040> You can't warn a bot, so they don't have warnings :P**}{color:$getServerVar[hex]}]`

})
