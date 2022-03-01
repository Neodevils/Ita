module.exports = {
  name: "set-embed", 
  code: `$description[<a:dp_star6:835142297125519420> Embed color has changed to \`$message[1]\`]
  $color[$message]
$setServerVar[hex;$message[1]]
$onlyIf[$isValidHex[$message[1]]!=false;{description:Please enter a valid hex code <a:pbaDuck:817219192578900009>
> Example: **\`$getServerVar[prefix]embed 123abc\`**
}{color:$getServerVar[hex]}]
$onlyPerms[admin;{description:<a:pas10:835152237042729040> **You dont have** \`ADMIN\` **perms**}{color:$getServerVar[hex]}]`
}