module.exports = ({
name: "set-prefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://images-ext-1.discordapp.net/external/qCDLJxKj7QegErID44nVfIm9EaSZgSxKHrdZcsNmYs8/%3Fv%3D1%26size%3D2048/https/cdn.discordapp.com/emojis/738692419821895720.png]
$description[**<a:dp_star6:835142297125519420> Well done!
My new prefix is** \`$message\`]
$color[$getServerVar[hex]]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;{description:<a:pas10:835152237042729040> **You have to put a prefix, example**. . .
❥ \`$getServerVar[prefix]setprefix k.\`}{color:$getServerVar[hex]}]
$onlyPerms[admin;{description:<a:pas10:835152237042729040> **You dont have** \`ADMIN\` **perms**}{color:$getServerVar[hex]}]`
})
 