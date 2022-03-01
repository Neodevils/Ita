module.exports={
  name:"wot",
  code:`$author[;$authorAvatar]
$title[<:p_collar:817391056629923890> **𝓦𝓮𝓪𝓻 𝓸𝓻 𝓣𝓮𝓪𝓻** <:p_collar:817391056629923890>]
$description[<:dash5:817209872990076982> *Would you wear it or would you tear it off?*]
$image[$message[1]]
$addReactions[<a:reda_w:842322733165838346>;<a:reda_t:842322729281519636>]
$color[$getServerVar[hex]]
$deletecommand
$onlyIf[$message[1]!=;{description: <a:dp_star6:835142297125519420> Please use a link.}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040>Sowwy You are missing a staff role~}{color:$getServerVar[hex]}]
`
}
