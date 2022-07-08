module.exports = [
	{
		$if: 'v4',
		name: "music",
		type: 'interaction',
		prototype: 'slash',
		code: `
$if[$voiceID[$authorID]==]
$interactionReply[<a:dp_star6:835142297125519420> May you join to a voice channel :3;;;;;yes]

$elseif[$queueLength==0]
$interactionReply[<a:dp_star6:835142297125519420> Nothing is playing right now OwO?;;;;;yes]

$endelseif

$elseif[$voiceID[$clientID]==]
$interactionEdit[You can use \`/play\` slash commands to play any music hhh]

$wait[2s]
$interactionEdit[Oh, yes!]

$wait[3s]
$interactionEdit[Okay, now. What do you want to play? :3]

$wait[1s]
$joinVC

$wait[2s]
$interactionReply[<a:dp_star6:835142297125519420> Okiie! lemme join vc :3]

$endelseif

$else
$interactionReply[;{newEmbed:{field:<\\:music_ita\\:924573629226811403>𓂃currently playing:╰・$songInfo[title]}{field:<\\:user_circle_ita\\:919884479420575784>𓂃publisher:— $songInfo[author]}{field:<\\:time_ita\\:919653609581457488>𓂃duration:— *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}{field:<\\:shock_ita\\:920642588829184000>𓂃watched:— $numberSeparator[$songInfo[views]] views}{field:<\\:link_ita\\:919653951836672070>𓂃url:— <a\\:dp_star6\\:835142297125519420> [Tap here to go to the link!]($songInfo[url])}{image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}};{actionRow:{selectMenu:musicMenu_$authorID:・tap here for other music options𓂃!!:1:1:false:{selectMenuOptions:#1 music heals!:music0:play previous track? stop? skip or l∞p? tap to here!:no:<:previous_ita:941209452890161222>}{selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:no:<:reroll_ita:930012860107587614>}}}]

$endif

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Music Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
		`
	}, 
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
$interactionUpdate[;{newEmbed:{field:<\\:music_ita\\:924573629226811403>𓂃currently playing:╰・$songInfo[title]}{field:<\\:user_circle_ita\\:919884479420575784>𓂃publisher:— $songInfo[author]}{field:<\\:time_ita\\:919653609581457488>𓂃duration:— *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}{field:<\\:shock_ita\\:920642588829184000>𓂃watched:— $numberSeparator[$songInfo[views]] views}{field:<\\:link_ita\\:919653951836672070>𓂃url:— <a\\:dp_star6\\:835142297125519420> [Tap here to go to the link!]($songInfo[url])}{image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{footer:・heheeh #COLON#P:$userAvatar[$clientID]}};{actionRow:{button::2:loopSong_$authorID:false:<:repeat_1_ita:943603983874916352>}{button::2:previousTrack_$authorID:false:<:previous_ita:941209452890161222>}{button::2:stopTrack_$authorID:false:<:stop_ita:941209391036784660>} {button::2:skipTrack_$authorID:false:<:skip_ita:941209515473395722>}{button::2:loopQueue_$authorID:false:<:reroll_ita:930012860107587614>}}{actionRow:{selectMenu:musicMenu_$authorID:・tap here for other music options𓂃!!:1:1:no:{selectMenuOptions:#1 music heals!:music0:play previous track? stop? skip or l∞p? tap to here!:yes:<:previous_ita:941209452890161222>}{selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:no:<:reroll_ita:930012860107587614>}}}]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Music#1 Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyIf[$interactionData[customId]==musicMenu_$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "<a:dp_star6:835142297125519420> Using their music menu? Not cool $username, not cool...","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==music0;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',
  	code: `
$interactionDelete

$wait[5s]

$interactionReply[> <a:dp_star6:835142297125519420> loop mode is now __song__ *!*

*Oh, small tip: if you want to use autoplay mode, you need to reset the player~*]

$loopMode[song]

$log[— $userTag, used Music/Loop Song Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==loopSong;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button',
  	code: `
$interactionDelete

$wait[10s]

$interactionReply[> <a:dp_star6:835142297125519420> **__$playPrevious__** :3]

$log[— $userTag, used Music/Previous Song Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$djseval[client.voiceManager.manager.players.get(guild.id).queue.previous!==null;yes]==true;{"content":"<a:dp_star6:835142297125519420> Uhm no previous song OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==previousTrack;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button', 
  	code: `
$interactionDelete

$wait[10s]

$interactionReply[>>> <a:dp_star6:835142297125519420> *nods while dancing*ヾ(〃^∇^)ﾉ. A--- OwO? UHH... Yeshh! Stopped the playing! Sooo, see you lateeer! ✿]

$leaveVC

$log[— $userTag, used Music/Stop Song Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==stopTrack;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button',
  	code: `
$interactionDelete

$wait[10s]

$interactionEdit[> <a:dp_star6:835142297125519420> skipped the song, now playing __**$songInfo[title]**__ :3]

$wait[1s]

$skip

$interactionReply[> <a:dp_star6:835142297125519420> skipping...]

$log[— $userTag, used Music/Skip Song Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength>1;{"content":"<a:dp_star6:835142297125519420> No song left OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skipTrack;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button', 
  	code: `
$interactionDelete

$wait[5s]

$interactionReply[> <a:dp_star6:835142297125519420> loop mode is __queue__ *!*] 

$loopMode[queue]

$log[— $userTag, used Music/Loop Queue Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength>=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==loopQueue;]
		`
	}, 
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
$interactionUpdate[;{newEmbed:{field:<\\:music_ita\\:924573629226811403>𓂃currently playing:╰・$songInfo[title]}{field:<\\:user_circle_ita\\:919884479420575784>𓂃publisher:— $songInfo[author]}{field:<\\:time_ita\\:919653609581457488>𓂃duration:— *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}{field:<\\:shock_ita\\:920642588829184000>𓂃watched:— $numberSeparator[$songInfo[views]] views}{field:<\\:link_ita\\:919653951836672070>𓂃url:— <a\\:dp_star6\\:835142297125519420> [Tap here to go to the link!]($songInfo[url])}{image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{footer:・menu will be deleted after 30s #COLON#3:$userAvatar[$clientID]}};{actionRow:{button::2:nightcore_$authorID:false:<:moon_stars_ita:920646794571038740>} {button::2:queue_$authorID:false:<:album_ita:943604099650302002>}{button::2:resetFilter_$authorID:false:<:times_ita:920648272144629801>}{button::2:bass_$authorID:false:<:magic_ita:944659286603227177>}{button::2:8d_$authorID:false:<:8d_ita:944666656452509746>}}{actionRow:{selectMenu:musicMenu:・tap here for other music options𓂃!!:1:1:no:{selectMenuOptions:#1 music heals!:music0:play previous track? stop? skip or l∞p? tap to here!:no:<:previous_ita:941209452890161222>}{selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:yes:<:reroll_ita:930012860107587614>}}}]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Music#2 Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyIf[$interactionData[customId]==musicMenu_$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "<a:dp_star6:835142297125519420> For real, using their music menu? Not cool $username, not cool...","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==music1;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
$interactionDelete

$wait[10s]

$interactionFollowUp[> <a:dp_star6:835142297125519420> __**enabled nightcore**__ for the queue :3]

$wait[1s]

$let[a;$addFilter[{"aresample": "48000","asetrate" : "48000*1.1","atempo": "1.1"}]]

$interactionDefer

$log[— $userTag, used Nightcore Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==nightcore;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
$interactionDelete

$wait[10s]

$interactionFollowUp[> <a:dp_star6:835142297125519420> filters and loop mode has been __**reset**__ :3]

$wait[1s]

$loopMode[none]

$let[a;$resetFilters]

$interactionDefer

$log[— $userTag, used Reset Filter/Loop Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==resetFilter;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
$interactionReply[;{newEmbed:{title:𓂃⸼<\\:music_ita\\:924573629226811403> now playing  ᯬ⌣ᯬ}{description:> <a:dp_star6:835142297125519420> __**$songInfo[title]**__ ヾ(＾-＾)ノ♪}{field:𓂃⸼<\\:album_ita\\:943604099650302002> next songs ᯌ:>>> $queue[1;5;**\`{position}꒱꒱\`** __{title}__ ៸៸ **﹫{user.tag}** ꮺ ~~[track]({url})~~]}{color:$getServerVar[hex]}{thumbnail:$authorAvatar}};;;;yes]

$log[— $userTag, used Queue Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==queue;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
$interactionDelete

$wait[10s]

$interactionReply[> <a:dp_star6:835142297125519420> enabled __**bass**__ :3]

$log[— $userTag, used Bass Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$let[b;$setFilter[{"bass=g": "10", "apulsator=hz":"0.125","asubboost" : ""}]]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bass;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
$interactionDelete

$wait[10s]

$interactionReply[> <a:dp_star6:835142297125519420> enabled __**8D mode**__ :3]

$let[b;$addFilter[{"apulsator": "hz=0.125","stereotools": "","stereowiden" :"","aecho" :"0.8:0.8:50:0.5"}]]

$log[— $userTag, used 8D Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyif[$queueLength!=0;{"content":"<a:dp_star6:835142297125519420> Nothing is playing right now OwO?","ephemeral": true, "options": {"interaction": true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> uhm, you can use this after them done~","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==8d;]
		`
	}
]
