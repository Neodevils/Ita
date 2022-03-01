module.exports = [{
    name: "multiple-evil",
    code: `
$setGlobalUserVar[multi_evil;yok;$authorID]
$setGlobalUserVar[evil;$multi[$getGlobalUserVar[evil;$authorID];2];$authorID]
  $title[<a:evilsuu:861375574386671637> ₊˚𓂃EVILS DOUBLED!]

$description[𓏲 ׅ<a:evilstars:861685035479728158> Your evil deeds doubled, you have $getGlobalUserVar[evil] evil deeds added!!· ༝ ₊ <a:evilstars:861685035479728158>⬫

*Happy evil deeds 3:)*
*- Ita*
]
$color[FF6868]
$globalCooldown[1d; You can use this perk in %time% again c: be patient okii?]
$onlyIf[$getGlobalUserVar[multi_evil;$authorID]!=yok;Hold on! We might be devils but we still need your evil deeds, so buy it first! :c]`
},
{
    name: "multiple-stawwy",
    code: `
$setGlobalUserVar[multi_stawwy;yok;$authorID]
$setGlobalUserVar[pocket;$multi[$getGlobalUserVar[pocket;$authorID];2];$authorID]
  $title[<a:strawwy:861057831712980992> ₊˚𓂃POCKET DOUBLED!]

$description[𓏲 ׅ<a:strawwy:861057831712980992> Your pocket doubled, $getGlobalUserVar[pocket] stawwies added!!· ༝ ₊ <a:strawwy:861057831712980992>⬫
]
$color[$getServerVar[hex]]
$globalCooldown[1d; You can use this perk in %time% again c: be patient okii?]
$onlyIf[$getGlobalUserVar[multi_stawwy;$authorID]!=yok;You need to buy it first :c]`
},
{
    name: "multiple-lovsu",
    code: `
$setGlobalUserVar[multi_lovsu;yok;$authorID]
$setUserVar[xp;$multi[$getUserVar[xp;$authorID];2];$authorID]
  $title[<a:boost_lovsu_item:866070667819745330> ₊˚𓂃LOVSU DOUBLED!]

$description[𓏲 ׅ<a:boost_lovsu_item:866070667819745330> Your lovsu doubled, $getUserVar[xp] lovsu added!!· ༝ ₊ <a:boost_lovsu_item:866070667819745330>⬫
]
$color[$getServerVar[hex]]
$globalCooldown[1d; You can use this perk in %time% again c: be patient okii?]
$onlyIf[$getGlobalUserVar[multi_lovsu;$authorID]!=yok;You need to buy it first :c]`
},
{
    name: "multiple-good",
    code: `
$setGlobalUserVar[multi_good;yok;$authorID]
$setGlobalUserVar[good;$multi[$getGlobalUserVar[good;$authorID];2];$authorID]
  $title[<a:goodsu:861383559565541406> ₊˚𓂃GOOD DOUBLED!]

$description[𓏲 ׅ<a:goodhearts:861686190871543818> Your good deeds doubled, $getGlobalUserVar[good] good deeds added!!· ༝ ₊ <a:goodhearts:861686190871543818>⬫

*Happy helping deeds 0:)*
*- Ita*
]
$color[88C2FF]
$globalCooldown[1d; You can use this perk in %time% again c: be patient okii?]
$onlyIf[$getGlobalUserVar[multi_good;$authorID]!=yok;Umm... but we gotta see your efforts get the perk from shop first c:]`
}]