module.exports = {
    name: "joker",
    code: `
$setGlobalUserVar[joker;yok;$authorID]
$title[<:boost_evil:865958761164308480> J.O.K.E.R. on progress c:]
$description[You have used "joker" skill on $username[$mentioned[1]], their good seed reduced by 50 good points. But, **you got <a:mostwanted:862033820668657694> $getGlobalUserVar[evil] evil deeds right now!** <:boost_evil:865958761164308480>]
$color[FF6868]
$setGlobalUserVar[good;$sub[$getGlobalUserVar[good;$mentioned[1]];50];$mentioned[1]]
$setGlobalUserVar[evil;$sum[$getGlobalUserVar[good;$mentioned[1]];$getGlobalUserVar[evil]];$authorID]
$onlyIf[$getGlobalUserVar[joker;$authorID]!=yok;You don't have this perk dum dum]`
}