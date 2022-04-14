module.exports = [{
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code:`$setServerVar[ownerRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:owner_ita:919702571839545354> owner role has been updated!}
{description:*・New owner role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

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

$onlyIf[$interactionData[options._subcommand]==owner;]
`
}, {
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code:
`
$setServerVar[adminRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:manager_ita:924572459913592873> admin role has been updated!}
{description:*・New admin role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==admin;]
`
}, {
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code:
`
$setServerVar[modRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:staff_ita:924572532424704011> mod role has been updated!}
{description:*・New moderator role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==mod;]
`
}, {
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code: `

$setServerVar[traineeRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:staff_ita:924572532424704011> trainee role has been updated!}
{description:*・New trainee role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==trainee;]
`
}, {
name:"set",
type: 'interaction', 
prototype: 'slash', 
code:`$setServerVar[giveawayRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:donate_ita:922164055630827520> giveaway dealer role has been updated!}
{description:*・New giveaway dealer role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==giveaway-dealer;]
`
}, {
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code:`

$setServerVar[qotdRole;$interactionData[options.data[0].options[0].value]]
  
$interactionReply[;{newEmbed:{title:<:qotd_ita:922164546343403561> qotd role has been updated!}
{description:*・New question of the day role settled to \`$roleName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getRoleColor[$interactionData[options.data[0].options[0].value]]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==qotd;]
`
}, {
  name:"set",
  type: 'interaction', 
	prototype: 'slash', 
  code:
`
$slowmode[2h;$interactionData[options.data[0].options[0].value]]

$setServerVar[ventChannel;$interactionData[options.data[0].options[0].value]]

$setServerVar[vent;on]
$interactionReply[;{newEmbed:{title:<:on_ita:919705187415887932> vent channel has been updated!}
{description:*・New vent channel settled to \`$channelName[$interactionData[options.data[0].options[0].value]]\` !*}
{color:$getServerVar[hex]}

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
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

$onlyIf[$interactionData[options._subcommand]==vent;]
`
}, {
	name: "set", 
  type: 'interaction', 
	prototype: 'slash', 
	code: `
$deleteVar[ventChannel;$guildID]
$deleteVar[vent;$guildID]
$wait[1s]
$interactionReply[;{newEmbed:{description:<:off_ita:919705255594319872> **Successfully disabled vent system for this server.**}
{color:$getServerVar[hex]}}]

$onlyIf[$getServerVar[vent]==on;{
"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> Vent system already disabled. . .}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
}]

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
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

$onlyIf[$interactionData[options._subcommand]==vent-off;]
`	
}, {
  name: "$alwaysExecute",
  channel: '$getServerVar[ventChannel]', 
  code: `
    $channelSendMessage[$get[id];<a:dp_star6:835142297125519420> <@$authorID> so, yah! if you want you can ping **__an member__** for help on your vent *!*]
$deleteCommand
$createThread[$channelID;┈・$username's“let on” channel ୭;MAX;public;$get[id];no]

$let[id;$sendMessage[<@$authorID> {newEmbed:{title:<a:dp_star6:835142297125519420> Opened a thread for you..}
{thumbnail:$authorAvatar}
{description:>>> ** They wanted to talk about..:**
\b$message <:right_quote_ita:925257346958123029>
\b}
{color:$getServerVar[hex]}
{footer:⁀➷ Feel free to mention the user you need to.}
{timestamps};yes]]
	
$useChannel[$getServerVar[ventChannel]]

$onlyBotPerms[createpublicthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`CREATE_PUBLIC_THREAD\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[sendmessageinthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`SEND_MESSAGE_IN_THREAD\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[mentioneveryone;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MENTION_EVERYONE\`** permission, to mention role.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[managemessages;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_MESSAGES\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message."
}]

$onlyIf[$channelID==$getServerVar[ventChannel];]
	
$onlyIf[$getServerVar[vent]==on;]
`
}, {
  name:"set",
	type: 'interaction', 
	prototype: 'slash', 
  code: `

$modifyChannelPerms[$guildID;$interactionData[options.data[0].options[0].value];/readmessagehistory;/sendmessageinthreads;/viewchannel]
$wait[1s]
$modifyChannelPerms[$getServerVar[ownerRole];$interactionData[options.data[0].options[0].value];+viewchannel;+sendmessage;+managethreads;+readmessagehistory]
$wait[1s]
$modifyChannelPerms[$getServerVar[adminRole];$interactionData[options.data[0].options[0].value];+viewchannel;+managethreads;+sendmessage;+readmessagehistory]
$wait[1s]
$modifyChannelPerms[$getServerVar[modRole];$interactionData[options.data[0].options[0].value];+viewchannel;+sendmessage;+managethreads;+readmessagehistory]
$wait[1s]
$modifyChannelPerms[$getServerVar[traineeRole];$interactionData[options.data[0].options[0].value];+viewchannel;+sendmessage;+managethreads;+readmessagehistory]
$wait[1s]

$suppressErrors[<a:dp_star6:835142297125519420> May you set staff roles too? :3 Cause I see you haven't OwO]

$slowmode[1h;$interactionData[options.data[0].options[0].value]]
$wait[1s]
$pinMessage[$get[id];$interactionData[options.data[0].options[0].value]]
$wait[1s]
$let[id;$channelSendMessage[$interactionData[options.data[0].options[0].value];{newEmbed:{title:<a:dp_star6:835142297125519420> Welcome to Support Channel!!}{description:<:dash3:817209881559826492> This is **$serverName** is support channel,, if you have any questions about the server or have any issues please text your issue to here and our moderators will help to you as soon as possible.

**__<a:br_exclamation01:914388124954677339> Avoid those things!! <a:br_exclamation01:914388124954677339>__**

> <:br_number_1:837050777129451550> If a staff handling a problem, do not interrupt them but you can watch them to learn something :3
> 
> <:br_number_2:837050780959375391> If you want to help but you're unsure about that help, it's better to not helping cutie <a:bunny_no:817209791272714283>
> 
> <:br_number_3:837050785875361822> Please do not talk off-topic in thread <a:0_exclamation:817219232516669450>
> 
> <:br_number_4:837050797857964072> And lastly, if you open a thread for no reason, you will be punished '^'

}{color:$getServerVar[hex]}{thumbnail:$serverIcon}{footer:Best Regardless,, $serverName's Staffs:$userAvatar[$clientID]}};yes]]

$setServerVar[supportThread;$interactionData[options.data[0].options[0].value]]
$setServerVar[thread;on]

$interactionReply[;{newEmbed:{title:<:on_ita:919705187415887932> support channel has been updated!}
{description:*・New support channel settled to \`$channelName[$interactionData[options.data[0].options[0].value]]\`. Every time a message sent to there I'll create a thread for user!
Note: Lvl 2 Boosted Servers will have private support threads.*}
{color:$getServerVar[hex]}}]

$onlyIf[$getServerVar[modRole]!=;{
"embeds" : "{newEmbed:{description:**Ummm, I guess you haven't settled mod role.\\n<a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set mod @role\` to set it**}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
}
}]

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
}]

$onlyBotPerms[managechannel;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_CHANNEL\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
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

$onlyIf[$interactionData[options._subcommand]==support;]

`
}, {
	name: "set", 
  type: 'interaction', 
	prototype: 'slash', 
	code: `
$deleteVar[supportThread;$guildID]
$deleteVar[thread;$guildID]
$wait[1s]
$interactionReply[;{newEmbed:{description:<:off_ita:919705255594319872> **Successfully disabled support system for this server.**}
{color:$getServerVar[hex]}}]

$onlyIf[$getServerVar[thread]==on;{
"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> Support system already disabled. . .}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
}]

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
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

$onlyIf[$interactionData[options._subcommand]==support-off;]
`	
}, {
  name: "$alwaysExecute",
  channel: '$getServerVar[supportThread]', 
  code: `
  $channelSendMessage[$get[id];<a:dp_star6:835142297125519420> <@$authorID> so, yah! if you want you can ping **__a staff member__** for help *!*]
$deleteCommand
$createThread[$channelID;𐊾 $username⌗$discriminator requested for help𓂃⸼୭;1440;private;$get[id];no]

$let[id;$sendMessage[— <@&$getServerVar[modRole]> ding ding𓂃!{newEmbed:{title:<a:dp_star6:835142297125519420> Opened a thread for you!}
{thumbnail:$serverIcon}
{description:> __<:left_quote_ita:925257422132629526> They wanted help about:__
> 
> **<:dash_ita:919491119107158036> $message**
> 
> *You can also help to member. But if you are __not sure__ about something, better to stay out!*}
{color:$getServerVar[hex]}
{footer:⁀➷ $serverName:$authorAvatar}
{timestamps};yes]]
	
$useChannel[$getServerVar[supportThread]]

$onlyIf[$getServerVar[modRole]!=;{
"embeds" : "{newEmbed:{description:**Ummm, I guess you haven't settled qotd role.\\n<a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set mod @role\` to set it**}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[createprivatethreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`CREATE_PRIVATE_THREAD\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[createpublicthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`CREATE_PUBLIC_THREAD\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[sendmessageinthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`SEND_MESSAGE_IN_THREAD\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[mentioneveryone;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MENTION_EVERYONE\`** permission, to mention role.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[managemessages;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_MESSAGES\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}"
}]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message."
}]

$onlyIf[$channelID==$getServerVar[supportThread];]

$onlyIf[$getServerVar[thread]==on;]
`
}, {
	name: "set", 
	type: 'interaction', 
	prototype: 'slash', 
	code: `
$slowmode[$interactionData[options.data[0].options[0].value];$channelID]

$interactionReply[;{newEmbed:{title:<a:dp_star6:835142297125519420> Slowmode has changed to $interactionData[options.data[0].options[0].value]}{footer:・Usage 1s/1m/1h,, max 6h desu~}{color:$getServerVar[hex]}}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have a \`STAFF\` role to make qotd~}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
	}
}
]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
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

$onlyIf[$interactionData[options._subcommand]==slowmode;]
`
}, {
	name: "set",
	type: 'interaction', 
	prototype: 'slash', 
	code: `
$changeNickname[$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[1].value]]

$interactionReply[;{newEmbed:{description:<:pen_ita:919866873816952852> $userTag[$interactionData[options.data[0].options[0].value]]'s nickname changed to \`$interactionData[options.data[0].options[1].value]\` **successfully ✿**}
{color:$getServerVar[hex]}}]
	$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$interactionData[options.data[0].options[0].value]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}}",
		"options":{
			"interaction" : true
		}}]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$interactionData[options.data[0].options[0].value]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}},
		"options":{
			"interaction" : true
		}
}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any roles higher than \`TRAINEE\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]

	$onlyBotPerms[managenicknames;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_NICKNAMES\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
	}
]
	
	$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
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

$onlyIf[$interactionData[options._subcommand]==nickname;]
`
}]
