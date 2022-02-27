module.exports = {
name: "play",
type: 'interaction', 
prototype: 'slash', 
$if: 'v4', 
code: `$if[$voiceID[$authorID]==]
$interactionReply[<a:dp_star6:835142297125519420> May you join to a voice channel :3;;;;;yes]
$elseif[$voiceID[$clientID]==]
$interactionFollowUp[;{newEmbed:{description:<a:dp_star6:835142297125519420> **“$get[song]”** to q__ueue *!*__}{thumbnail:$songInfo[thumbnail]}{color:FFD0B3}{color:FFB3B3}{footer:$randomText[enjoy~;music heals!;feel the music!]:$userAvatar[$clientID]}}]
$let[song;$playTrack[youtube;$interactionData[options.data[0].value]]]
$playerConfig[yes;30s]
$wait[1s]
$joinVC
$endelseif
$else

$interactionFollowUp[;{newEmbed:{description:<a:dp_star6:835142297125519420> **“$get[song]”** to q__ueue *!*__}{thumbnail:$songInfo[thumbnail]}{color:FFD0B3}{footer:$randomText[enjoy~;music heals!;feel the music!]:$userAvatar[$clientID]}}]
$let[song;$playTrack[youtube;$interactionData[options.data[0].value]]]
$endif

$interactionDefer

$onlyBotPerms[speak;{
	"content": "I need \`SPEAK\` permission.",
	"options":{
		"interaction" : true
		}
	}
]

$onlyBotPerms[connect;{
	"content": "I need \`CONNECT\` permission.",
	"options":{
		"interaction" : true
		}
	}
]`
}
