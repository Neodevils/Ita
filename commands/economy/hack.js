module.exports = {
    name: "hack",
    type: 'interaction',
    prototype: 'slash',
    $if:'v4',
    code:`
    $if[$randomText[successful;failed]==successful]
    
    $interactionReply[;{newEmbed:
        {description:**๑ ⋆˚₊⋆────ʚ forking code success ɞ────⋆˚₊⋆ ๑
    ₊˚๑ <:fork_ita:921808628267237448> has started. . . 
    ||you forked $userTag[$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]]'s $randomText[private;public] repository, corrupted and transferred $random[10;950] <\\:branch_ita\\:921808496767402104> data, sharing is caring *:P*||
    ・<:fork_ita:921808628267237448>・ \`now you have $numberSeparator[$getUserVar[data]] data ๑\`
    ・ —  — ・ˏ͛- <:hacker_ita:920683462229360661> ˎˊ˗・ —  —・**}
        {color:dabeff}
    };{actionRow:
        {button:$random[10;950] datas transfered!:2:disabled_0:true:<\\:branch_ita\\:921808496767402104>}
        {button::2:disabled_1:true:<:hacker_ita:920683462229360661>}
        {button:$getUserVar[data] datas:4:disabled_2:true:<\\:branch_ita\\:921808496767402104>}
    }]
    
    $setUserVar[data;$sum[$getUserVar[data];$random[10;950]]]

    $setUserVar[data;$sub[$getUserVar[data;$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]];$random[10;950]];$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]]

$wait[2s]
	$interactionEdit[<a:dp_star6:835142297125519420> *we got them heheehe :d*]
$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *there we go :3*]
$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *aha!*]
$wait[5s]
	$interactionReply[<a:dp_star6:835142297125519420> *connecting to server... may you wait a few seconds?*]
    $else

    $interactionEdit[;{newEmbed:
        {description:**๑ ⋆˚₊⋆────ʚ forking code failed ɞ────⋆˚₊⋆ ๑
    ₊˚๑ <:fork_ita:921808628267237448>  you failed to fork. . . 
    ||you tried to fork $userTag[$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]]'s $randomText[private;public] repository but they had a better system to protect their data for this time,
    Well, since you failed you have to pay back cutie :3 
    
    transferred $random[10;950] <\\:branch_ita\\:921808496767402104> data to them, sharing is caring you know *:P*||
    ・<:fork_ita:921808628267237448>・ \`now you have $numberSeparator[$getUserVar[data]] data ๑\`
    ・ —  — ・ˏ͛- <:hacker_ita:920683462229360661> ˎˊ˗・ —  —・**}
        {color:dabeff}
    };{actionRow:
        {button:$random[10;950] datas transfered...:2:disabled_0:true:<\\:branch_ita\\:921808496767402104>}
        {button::2:disabled_1:true:<:hacker_ita:920683462229360661>}
        {button:$getUserVar[data] datas-:4:disabled_2:true:<\\:branch_ita\\:921808496767402104>}
    }]
    
    $setUserVar[data;$sub[$getUserVar[data];$random[10;950]]]

    $setUserVar[data;$sum[$getUserVar[data;$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]];$random[10;950]];$replaceText[$interactionData[options.data[0].value];undefined;$randomUserID]]

$wait[2s]
	$interactionEdit[<a:dp_star6:835142297125519420> *better to not swear...*]
$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *oops...*]
$wait[1s]
	$interactionEdit[<a:dp_star6:835142297125519420> *trying again. .*]
$wait[5s]
	$interactionReply[<a:dp_star6:835142297125519420> *connecting to server... may you wait a few seconds?*]

    $endif

    $cooldown[1h;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> *$username, wait __%time%__ secs, there is a traffic on web, uhh it is lagginn !*}{color:dabeff}{thumbnail:$authorAvatar}}", 
      "ephemeral": true, 
      "options":{
          "interaction" : true
      }
  	}]

    $onlyIf[$getGlobalUserVar[laptop]!=no;{
        "content":"<a:dp_star6:835142297125519420> You need a \`LAPTOP\`~ Cuz, how can we hack without laptop right?",
        "ephemeral": true,
        "options":{
            "interaction" : true
        }
    }]
    
    $onlyBotPerms[externalemojis;{
        "embeds":"{newEmbed:
            {description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}
            {color:$getServerVar[hex]}
        }",
        "ephemeral": "true", 
            "options": {"interaction": true
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
        "embeds": "{newEmbed:
            {description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}
            {color:$getServerVar[hex]}
        }",
        "options" : {
            "interaction" : true
        }
    }]`
}