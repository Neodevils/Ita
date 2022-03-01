module.exports = {
  name:"ping",
  code:`$title[♡ 𝐏𝐢𝐧𝐠 ♡]
$color[$getServerVar[hex]]
$description[$if[$botPing<=250]
<:online:849942524453978123> **$botPing** ms!੭
$endif

$if[$botPing>=250]
<:dnd:849942689989656597> **$botPing** ms!੭
$endif
]
$addTimestamp`
}