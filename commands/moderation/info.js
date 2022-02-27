module.exports = [{
  name: "info",
	$if: 'v4', 
	type: 'interaction', 
	prototype: 'slash', 
  code:`
$if[$serverBanner==]
$interactionReply[;{newEmbed:
{author:₊˚✿ 𝗦𝗲𝗿𝘃𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻₊˚✿੭:$serverIcon}{thumbnail:$serverIcon}

{field:。⨯ Owner𓂃੭:
╰・<\:owner_ita\:919702571839545354> <@$ownerID>}

{field:。⨯ Server Name𓂃੭:
╰・<\:information_ita\:919702690836140032> **\`$serverName\`**}

{field:。⨯ Roles Count𓂃੭:╰・<\:role_ita\:919670089991749643> $roleCount roles}

{field:。⨯ Channel Count𓂃੭:
╰・<:podcast_ita:919822432242642964> $channelCount[$guildID;Stage] stage
╰・<:folder_ita:919822536328507472> $channelCount[$guildID;Category] categories
╰・<:volume_ita:919822684383232030> $channelCount[$guildID;Voice] voice
╰・<:hashtag_ita:919822616431308860> $channelCount[$guildID;Text] text
\b\b\b <:news_ita:919866748294025247> __$channelCount[$guildID;News] news channel__
\b\b\b <:dash_alt2_ita:919705571177934888> __$channelCount[$guildID;PublicThread] public thread__
\b\b\b <:dash_alt3_ita:919705668494176298> __$channelCount[$guildID;PrivateThread] private thread__}

{field:。⨯ Emote Counts𓂃੭:╰・<\\:emoji_ita\\:919707042070007868> $emojiCount[$guildID] Emotes}

{field:。⨯ Members Count𓂃੭:
╰・<\\:users_ita\\:919702794737434675> $membersCount[$guildID;all;no] Members៸៸ <:android_ita:919670224138166353> $botCount Bots
\b\b\b╰・**$membersCount[$guildID;Online]** online
\b\b\b╰・**$membersCount[$guildID;Idle]** afk
\b\b\b╰・**$membersCount[$guildID;Dnd]** dnd
\b\b\b╰・**$membersCount[$guildID;Offline]** invisible 👀}


{field:。⨯ Creation Date𓂃੭:╰・<\:ribbon_ita\:919704769323474945> <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:d> 
\b\b\b╰・<\:questioning_ita\:919675688620019713> *__$creationDate[$guildID;time] ago__*}

{field:。⨯ Server Boost𓂃੭:╰・<\:boost_ita\:919712869782786129> $serverBoostCount Boost - Level $replaceText[$replaceText[$replaceText[$replaceText[$serverBoostLevel;NONE;is none :( *sad face*];TIER_1;1 :) *smile face*];TIER_2;**2! OwO**];TIER_3;**3!! Ayo, les goo!**]}

{image:https://media.discordapp.net/attachments/861208192121569280/915682135086616596/813efb9ade453f7f4a67b3ede8c2cbf5.gif}

{color:$getServerVar[hex]}
{footer:\b\b\b╰・No Banner yet, hmm. . .:}{timestamp}}]

$else
$interactionReply[;{newEmbed:
{author:₊˚✿ 𝗦𝗲𝗿𝘃𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻₊˚✿੭:$serverIcon}{thumbnail:$serverIcon}

{field:。⨯ Owner𓂃੭:
╰・<\:owner_ita\:919702571839545354> <@$ownerID>}

{field:。⨯ Server Name𓂃੭:
╰・<\:information_ita\:919702690836140032> **\`$serverName\`**}

{field:。⨯ Roles Count𓂃੭:╰・<\:role_ita\:919670089991749643> $roleCount roles}

{field:。⨯ Channel Count𓂃੭:
╰・<:podcast_ita:919822432242642964> $channelCount[$guildID;Stage] stage
╰・<:folder_ita:919822536328507472> $channelCount[$guildID;Category] categories
╰・<:volume_ita:919822684383232030> $channelCount[$guildID;Voice] voice
╰・<:hashtag_ita:919822616431308860> $channelCount[$guildID;Text] text
\b\b\b <:dash_alt1_ita:919705426398941274> __$channelCount[$guildID;News] news channel__
\b\b\b <:dash_alt2_ita:919705571177934888> __$channelCount[$guildID;PublicThread] public thread__
\b\b\b <:dash_alt3_ita:919705668494176298> __$channelCount[$guildID;PrivateThread] private thread__}

{field:。⨯ Emote Counts𓂃੭:╰・<\\:emoji_ita\\:919707042070007868> $emojiCount[$guildID] Emotes}

{field:。⨯ Members Count𓂃੭:
╰・<\\:users_ita\\:919702794737434675> $membersCount[$guildID;all;no] Members៸៸ <:android_ita:919670224138166353> $botCount Bots
\b\b\b╰・**$membersCount[$guildID;online]** online
\b\b\b╰・**$membersCount[$guildID;Idle]** afk
\b\b\b╰・**$membersCount[$guildID;dnd]** dnd
\b\b\b╰・**$membersCount[$guildID;Offline]** invisible 👀

}


{field:。⨯ Creation Date𓂃੭:╰・<\:ribbon_ita\:919704769323474945> <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:d> 
\b\b\b╰・<\:questioning_ita\:919675688620019713> *__$creationDate[$guildID;time] ago__*}

{field:。⨯ Server Boost𓂃੭:╰・<\:boost_ita\:919712869782786129> $serverBoostCount Boost - Level $replaceText[$replaceText[$replaceText[$replaceText[$serverBoostLevel;NONE;is none :( *sad face*];TIER_1;1 :) *smile face*];TIER_2;**2! OwO**];TIER_3;**3!! Ayo, les goo!**]}

{image:$serverBanner}

{color:$getServerVar[hex]}
{footer:\b\b\b╰・$randomText[I liked this banner!;Though, it could be a better banner;But yah, still good enough banner!]﹆}{timestamp}}]

$endif

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]

$onlyIf[$interactionData[options._subcommand]==server;]
`
}, {
  name:"info",
  type: 'interaction', 
	prototype: 'slash', 
  code:`
 $interactionReply[;{newEmbed:{author:$userTag[$interactionData[options.data[0].options[0].value]]︱is info✿₊˚੭:$userAvatar[$interactionData[options.data[0].options[0].value]]}
{thumbnail:$memberAvatar[$guildID;$interactionData[options.data[0].options[0].value]] }

{field:๑ $customEmoji[id_ita] Discord ID ˎˊ˗:╰・$interactionData[options.data[0].options[0].value]}

{field:๑ <\\:server_ita\\:919669702144434196> On ˎˊ˗:$replaceText[$replaceText[$replaceText[$replaceText[$platform[$interactionData[options.data[0].options[0].value]];mobile;╰・<\:mobile_ita\:919669850962554930> mobile];desktop;╰・<\:discord_ita\:919466382016520192> client];none;╰・<\:empty_ita\:919670165334016010> They are offline now. . .];web;╰・<\:laptop_ita\:919669918931238912> browser]}
{field:๑ <\\:android_ita\\:919670224138166353> Is Robot!? ˎˊ˗:
╰・$replaceText[$replaceText[$isBot[$interactionData[options.data[0].options[0].value]];false;Non, also __$username[$interactionData[options.data[0].options[0].value]]__ one of my favorite person.];true;They're one of my fellow \:3]}

{field:๑ <\\:bonus_ita\\:919675529035145258> Created ˎˊ˗:╰・at <t:$truncate[$divide[$creationDate[$interactionData[options.data[0].options[0].value];ms];1000]]:d>
\b\b\b╰ ・<\:ribbon_ita\:919704769323474945> *$creationDate[$interactionData[options.data[0].options[0].value];time] ago*}

{field:๑ <\\:signed_ita\\:919669999155691591> Joined ˎˊ˗:╰・at <t:$truncate[$divide[$memberJoinedDate[$interactionData[options.data[0].options[0].value];$guildID];1000]]:d>:yes}

{field:๑ <\\:role_ita\\:919670089991749643> Role ˎˊ˗:╰・<@&$highestRole[$interactionData[options.data[0].options[0].value]]> role:yes}

{field:๑ <\\:questioning_ita\\:919675688620019713> Status ˎˊ˗:╰・$replaceText[$getCustomStatus[$interactionData[options.data[0].options[0].value];$interactionData[guild.id]];none;<\:empty_ita\:919670165334016010> Empty status.. like my heart.]}

{field: ๑ <\\:chart_network_ita\\:919684520603697152> Activity ˎˊ˗:╰・$replaceText[$replaceText[$replaceText[$replaceText[$activity[$interactionData[options.data[0].options[0].value]];Custom Status;<\:signature_ita\:919491027985895454> Custom Status~];Spotify;\n\b\b\b╰・<\:spotify_ita\:919474017507885067> Listening to **Spotify**];,;];none;<\:empty_ita\:919670165334016010> Literally nothing. . .]}

{color:$getRoleColor[$highestRole[$interactionData[options.data[0].options[0].value]]]}

{image:$replaceText[$getUserBanner[$interactionData[options.data[0].options[0].value]];null;$randomText[https://media.discordapp.net/attachments/869604846360199289/915215829791019038/f52665b77944aa6abb4b539e8e7d370f.jpg;https://media.discordapp.net/attachments/869604846360199289/915215829530976316/e346a29eb91b65e7e72f4c37357d01be.jpg;https://media.discordapp.net/attachments/869604846360199289/915215830034317383/86d8a4a308c3ad10b6ee5c87814a1c0a.jpg;https://media.discordapp.net/attachments/869604846360199289/915215830285971476/2fb6dd57c2543c24c2c98915a97d488c.jpg;https://media.discordapp.net/attachments/869604846360199289/915215830533427200/b17e47e92b61258e057829f197255432.jpg;https://media.discordapp.net/attachments/869604846360199289/915215830738931752/5c96870fbb050eeec8353ced8d928bef.jpg;https://media.discordapp.net/attachments/869604846360199289/915215830969630720/62d3ed45b8545c617a91804f3d846289.jpg;https://media.discordapp.net/attachments/869604846360199289/915215831477145640/7307a98b64645bdb064c875f6e7f9a80.jpg;https://media.discordapp.net/attachments/869604846360199289/915215831762350120/0d959774ba2d788fe7ac882890900bf0.jpg;https://media.discordapp.net/attachments/869604846360199289/915215994945929226/15b116a4b13fce224f6efa2bcbffee27.gif;https://media.discordapp.net/attachments/869604846360199289/915216065808728114/251e4f9e32cf5e76ec7c90a237e4cbcd.gif;https://media.discordapp.net/attachments/869604846360199289/915216072209219614/66d084c655d043e97a4081d9361b9d3b.jpg;https://media.discordapp.net/attachments/869604846360199289/915216072414752818/2a2816936a2a38ea74924b74808f92ec.jpg;https://media.discordapp.net/attachments/869604846360199289/915216270306201651/ba3c505577a51ae129d55361f442fbaf.gif;https://media.discordapp.net/attachments/869604846360199289/915216405840920576/f8d72df08c7f5c94d26b752d7ffb0cf3.gif;https://media.discordapp.net/attachments/869604846360199289/915216406537199686/26fffa3220622fe9bd5d71548957e14d.gif]]}

{footer:╰・user banner\\:no banner, me suggest you banner \\:3:https://media.discordapp.net/attachments/869604846360199289/919685433766588426/1639293973080.png}}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]

$onlyIf[$interactionData[options._subcommand]==member;]
`
}, {
	name:"info",
  type: 'interaction', 
	prototype: 'slash', 
  code:`
$interactionReply[;{newEmbed:{title:$serverName's︱Channel Information!!}

{thumbnail:$serverIcon}

{field:𐄹 Channel Name 𑁤:╰・<:signature_ita:919491027985895454> $channel[$interactionData[options.data[0].options[0].value];name] ・$channel[$interactionData[options.data[0].options[0].value];mention]}

{field:𐄹 Channel Topic 𑁤:╰・<:pen_ita:919866873816952852> $replaceText[$channelTopic[$interactionData[options.data[0].options[0].value]];none;It has no topic, mysterious OwO]} 

{field:𐄹 Creation Date 𑁤:╰・<:bonus_ita:919675529035145258> at <t:$truncate[$divide[$creationDate[$interactionData[options.data[0].options[0].value];ms];1000]]:d>}

{field:𐄹 Channel ID 𑁤:╰・<:dash_ita:919491119107158036> $channel[$interactionData[options.data[0].options[0].value];id]}

{field:𐄹 Channel Position 𑁤:╰・<:list_ol_ita:919866811246334012> *This channel on $ordinal[$sum[1;$channel[$interactionData[options.data[0].options[0].value];position]]] position,,*
\b\b\b╰・<:ribbon_ita:919704769323474945> Created as $ordinal[$sum[1;$channel[$interactionData[options.data[0].options[0].value];rawPosition]]] channel \:3}

{field:𐄹 Channel Type 𑁤:╰・$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$channel[$interactionData[options.data[0].options[0].value];type];GUILD_TEXT;<:hashtag_ita:919822616431308860> Text Channelsu!];GUILD_VOICE;<:volume_ita:919822684383232030> Hot Voice Chat!];GUILD_CATEGORY;<:folder_ita:919822536328507472> Category :O];GUILD_PUBLIC_THREAD;<:dash_ita:919491119107158036> Public Thread];GUILD_PRIVATE_THREAD;<:dash_ita:919491119107158036> Private Thread. . .];GUILD_NEWS;<:news_ita:919866748294025247> News Channel!]}

{color:$getServerVar[hex]}
}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]

$onlyIf[$interactionData[options._subcommand]==channel;]
`
}, {
  name:"info",
  type: 'interaction', 
	prototype: 'slash', 
  code:`
$interactionReply[;{newEmbed:{title:$serverName︱Role Information!}

{thumbnail:$serverIcon}

{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

{field:﹫ <\\:signature_ita\\:919491027985895454> Role Name ꮺ:╰・$role[$interactionData[options.data[0].options[0].value];name]
\b\b\b╰・<@&$interactionData[options.data[0].options[0].value]>}

{field:﹫ <\\:dash_ita\\:919491119107158036> Role ID ꮺ:╰・\`$role[$interactionData[options.data[0].options[0].value];id]\`}

{field:﹫ <\\:palette_ita\\:919491463363055656> Role Hex ꮺ:╰・$getRoleColor[$interactionData[options.data[0].options[0].value]]}

{field:﹫ <\\:shield_ita\\:919653678078627870> Role Perms ꮺ:╰・$replaceText[$rolePerms[$interactionData[options.data[0].options[0].value];︱]; ;It has no permission.]}

}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]

$onlyIf[$interactionData[options._subcommand]==role;]
`
}, {
	name: "info", 
    type: 'interaction', 
	prototype: 'slash', 
	code: `
$interactionReply[;{newEmbed:{title:Your Ita's︱Information!}

{thumbnail:$userAvatar[$clientID]}

{field:<\\:signature_ita\\:919491027985895454>𓂃⸼my name𓂅:╰・$userTag[$clientID]・┈・<@$clientID>}

{field:<\\:code_ita\\:919653739944607744>𓂃⸼my id𓂅:╰・\`$clientID\`}

{field:<\\:birthday_ita\\:919491181975584840>𓂃⸼my birth date𓂅:╰・<t:$truncate[$divide[$creationDate[$clientID;ms];1000]]:d>}

{field:<\\:developer_ita\\:919491253563953222>𓂃⸼my developer!𓂅:╰・ <a:dp_star6:835142297125519420> $userTag[$botOwnerID]}

{field:<\\:time_ita\\:919653609581457488>𓂃⸼i'm awake for𓂅:╰・ **$uptime**}

{field:<\\:palette_ita\\:919491463363055656>𓂃⸼ my favorite color𓂅:╰・**#CCB0B0** aka __cold turkey__ <\:ACOSP_cutegiggle\:817219215060762664>}

{field:<\\:mix_ita\\:919491322614779914>𓂃⸼serving𓂅:╰・**$serverCount** servers and,,\n\b\b\b╰・__$allMembersCount__ members! need more \:3}

{field:<\\:packages_ita\\:919495181957480468>𓂃⸼package informations!!𓂅:
╰・<\\:node_ita\\:919492794488332309> nodejs: \`$nodeVersion\`
\b\b\b╰・<\\:javascript_ita\\:919491377098817537> aoi.js: \`v$packageVersion\`
\b\b\b\b\b\b╰・<\\:database_ita\\:919491528345403432> database: \`mongo.db\`
}

{color:$getServerVar[hex]}

{footer:・꒱─────── · 𓆩𔘓𓆪 Me dun't use prefix \\:3}};{actionRow:{selectMenu:bot_system:・┈┈・┈┈・・tap to here・・┈┈・┈┈・:1:1:false:{selectMenuOptions:Invite!:0:Tap here to get invite link, yay!:false:<:discord_ita:919466382016520192>}{selectMenuOptions:Support!:1:Tap here to join our family!:false:<:mix_ita:919491322614779914>}}}
]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]

$onlyIf[$interactionData[options._subcommand]==bot;]
`
}, {
name: "bot_system", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[<a:dp_star6:835142297125519420> Tap [here](https://dsc.gg/itadevil) to invite me!;;;;;yes]
$onlyIf[$interactionData[values[0]]==0;]
`
},{
name: "bot_system", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[<a:dp_star6:835142297125519420> Tap [here](https://discord.gg/NNjWVF4nHz) to join my family!;;;;;yes]
$onlyIf[$interactionData[values[0]]==1;]
`
}]