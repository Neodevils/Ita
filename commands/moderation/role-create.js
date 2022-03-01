module.exports = {
  name: "role-create",
  code: `$title[<a:dp_star6:835142297125519420> Role **created** successfully!!]
$color[$message[2]]
$description[
> **— Name :** $message[1]
> **— Color :** $message[2]
> **— Mentionable :** $message[3]
> **— Shown seperately :** $message[4]
]
$addTimestamp
$createRole[$message[1];$message[2];$message[3];$message[4]]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];{description:<a:pas10:835152237042729040> You don't have mod role~}{color:$getServerVar[hex]}]`
}