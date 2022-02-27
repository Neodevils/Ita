module.exports = [{
name: "giveaway",
type: 'interaction', 
prototype: 'slash', 
code: `$editmessage[$get[e];<:exclamation_ita:919876276788015115> 𝙜𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙚__𝙣𝙙𝙚𝙙__ <:exclamation_ita:919876276788015115>{newEmbed:{thumbnail:$servericon}{title:\b\b╭・<:donate_ita:922164055630827520>・prize: $get[prize]}{description:<:user_circle_ita:919884479420575784>・**hosted by#COLON#** <@$authorid>\n<:winner_ita:929990733627269130>・**winner:** <@$get[winner]>\n<:time_end_ita:930012666683076618>・**ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\b\b**╰・<:users_ita:919702794737434675>・$get[participated]** users had joined this giveaway :O}{footer:giveaway ended at}{timestamp:$get[endstamp]}{color:FFAAAA}}]

$sendmessage[Yay, <@$get[winner]>! You won **$get[prize]** :O;no]

$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;<:times_ita:920648272144629801> Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[#SEMI#]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]

$let[e;$apimessage[$channelid;;{newEmbed:{thumbnail:$servericon}{title:\b\b╭・<:donate_ita:922164055630827520>・prize: $get[prize]}{description:<:user_circle_ita:919884479420575784>・**hosted by#COLON#** <@$authorid>\n<:winner_ita:929990733627269130>・**winner**:||if you join now, you can win! ||\n<:time_ongoing_ita:930012725722095626>・**time** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\b╰・<:users_ita:919702794737434675>・**No one** has joined this giveaway for now 👀}{footer:giveaway has started~}{color:$getServerVar[hex]}};{actionRow:{button:join:4:join_giveaway:false:<:shock_ita:920642588829184000>}{button:reroll:2:reroll_giveaway:false:<:reroll_ita:930012860107587614>}{button:end:4:end_giveaway:false:<:time_end_ita:930012666683076618>}};;;;;yes]]
$wait[1s]
$interactionReply[<:check_ita:919876223914614784> *Successfully c__reated the giveaway !__*;;;;;yes]

$let[endstamp;$sum[$datestamp;$parseTime[$get[time]]]]
$let[prize;$interactionData[options.data[1].value]]
$let[time;$interactionData[options.data[0].value]]
$onlyif[$checkContains[$interactionData[options.data[0].value];s;m;h;d;w]==true;{"content": "<a:dp_star6:835142297125519420> Uhm, that's not a valid time, may you try it like \`1Ow\` OwO...","ephemeral": true, "options":{"interaction" : true}}]

$onlyforroles[$getServerVar[giveawayRole];{"content":"<a:dp_star6:835142297125519420> You don't have \`GIVEAWAY_DEALER\` role..", "ephemeral": true, "options": {"interaction": true}}]
`
}, {
type: 'interaction', 
prototype:"button",
code:`$editmessage[$get[msg];{newEmbed:{thumbnail:$servericon}{title:\b\b╭・<:donate_ita:922164055630827520>・prize: $get[prize]}{description:<:user_circle_ita:919884479420575784>・**hosted by#COLON#** <@$get[host]>\n<:winner_ita:929990733627269130>・**winner:** only one! \n<:time_ongoing_ita:930012725722095626>・**time** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\b\b╰・<:users_ita:919702794737434675>・**$get[participated]** members joined this giveaway~}{footer:you should join too!}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;<a:dp_star6:835142297125519420> Yay! Joined to giveaway];true;<a:dp_star6:835142297125519420> Uhm.. You have already joined this giveaway OwO?];ended;<a:dp_star6:835142297125519420> The giveaway already ended D:];;;;;yes]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]

$onlyIf[$interactionData[customId]==join_giveaway;]`
}, {
type: 'interaction', 
prototype:"button",
code:`$editmessage[$get[e];<:exclamation_ita:919876276788015115> 𝙜𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙧__𝙚𝙧𝙤𝙡𝙡__ <:exclamation_ita:919876276788015115>{newEmbed:{thumbnail:$servericon}{title:\b\b╭・<:donate_ita:922164055630827520>・prize: $get[prize]}{description:<:user_circle_ita:919884479420575784>・**hosted by#COLON#** <@$get[host]>\n<:winner_ita:929990733627269130>・**winner after reroll:** <@$get[winner]> \n<:time_ongoing_ita:930012725722095626>・**time** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\b\b╰・<:users_ita:919702794737434675>・**$get[participated]** members had joined this giveaway~}{footer:just rerolled!}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
$sendmessage[ Yuppi, <@$get[winner]>! You are the new winner of **$get[prize]** *!*;no]
$onlyif[$get[winner]!=;<:times_ita:920648272144629801> Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]

$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;<a:dp_star6:835142297125519420> rerolled the giveaway];true;<a:dp_star6:835142297125519420>this giveaway has not ended yet humm...];false;<a:dp_star6:835142297125519420> Uhh... You do not have \`GIVEAWAY_DEALER\` role settled for the server. .];;;;;yes]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasroles[$guildID;$authorid;$getServerVar[giveawayRole]]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]

$onlyIf[$interactionData[customId]==reroll_giveaway;]`
}, {
type: 'interaction', 
prototype:"button",
code:`$editmessage[$get[e];<:exclamation_ita:919876276788015115> 𝙜𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙛__𝙤𝙧𝙘𝙚 𝙚𝙣𝙙__ <:exclamation_ita:919876276788015115>{newEmbed:{thumbnail:$servericon}{title:\b\b╭・<:donate_ita:922164055630827520>・prize: $get[prize]}{description:<:user_circle_ita:919884479420575784>・**hosted by#COLON#** <@$get[host]>\n<:winner_ita:929990733627269130>・**winner after force end:** <@$get[winner]> \n<:time_ongoing_ita:930012725722095626>・**time** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\b\b╰・<:users_ita:919702794737434675>・**$get[participated]** members had joined this giveaway~}{footer:just ended!}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
$sendmessage[Yeyy, <@$get[winner]>! You are the new winner of **$get[prize]** *!* ;no]
$onlyif[$get[winner]!=;<:times_ita:920648272144629801> Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;<a:dp_star6:835142297125519420> ended the giveaway :3];true;<a:dp_star6:835142297125519420> humm, giveaway already ended thou. . .];false;<a:dp_star6:835142297125519420> Uhh... You do not have \`GIVEAWAY_DEALER\` role settled for the server. .];;;;;yes]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasroles[$guildID;$authorid;$getServerVar[giveawayRole]]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]

$onlyIf[$interactionData[customId]==end_giveaway;]`
}]