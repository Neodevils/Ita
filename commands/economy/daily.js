module.exports = {
	name: "daily", 
	type: 'interaction', 
	prototype: 'slash',
	code: `
	$setUserVar[data;$sum[$getUserVar[data];$random[100;250]]]
	
	$interactionEdit[;{newEmbed:
		{title:<:chest_ita:919887076311322634> daily yayy <:chest_ita:919887076311322634>}
		{description:**✦<:dash_ita:919491119107158036>୧︰ $username :3,, you opened your __daily chest!__ :୧ 
		⌗  ◟・ <:check_ita:919876223914614784> ੭ ⸝⸝ and you earned・ <a:dp_star6:835142297125519420> ໑
		$random[100;250] <:branch_ita:921808496767402104> data.. :3
		
		. . .Come back later, sweetie~**}
		{color:dabeff}
		{thumbnail:$authorAvatar}
		{footer:Come back later!}
	}]

	$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *drrrrrrrmm drum dum dum! ! !*]

	$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *dum dum. . .*]

	$wait[1s]
	$interactionReply[<a:dp_star6:835142297125519420> *dum dum. .*]

	$cooldown[24h;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> uhm... wait **%time%** for next datas~}{color:dabeff}}",
"ephemeral" : true,
		"options" : {
			"interaction" : true
		}
	}]

	$onlyBotPerms[embedlinks;{
		"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
		"ephemeral": "true", 
		"options": {
			"interaction": true
		}
	}]

	$onlyIf[$guildID!=;{
		"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
		"options" : {
			"interaction" : true
		}
	}]
	`
}
