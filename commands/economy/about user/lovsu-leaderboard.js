module.exports = {
name: "leaderboard",
type: 'interaction', 
prototype: 'slash', 
code: `$interactionReply[;{newEmbed:{title:**__<:coins_ita:919837728827383838>> global itoins leaderboard <:coins_ita:919837728827383838>__**}{description:$globalUserLeaderboard[stawwy_pocket;asc;{top}⸝⸝ __{username}__ — <:coins_ita:919837728827383838> **{value}** itoins}{color:$getServerVar[hex]}{footer:୨୧ You have $numberSeparator[$getGlobalUserVar[stawwy_pocket;$authorID]] itoins!!:$authorAvatar}]`

}