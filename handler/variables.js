module.exports = (bot) => {

//Bot Variables
  bot.variables({
    hex: "CCB0B0", 
		prefix: "k."
})

//Economy Variables
	bot.variables({
		data: "15", 
		dataCrystal: "5", 
		project: "1", 
		dataShield: "0", 
		dataBug: "0", 
		discordLink: " <a:dp_star6:835142297125519420> waiting to get connected. . .",
		laptop: "no"
	})
	
//Giveaway Variables
  bot.variables({
    endstamp:"0",
    hoster:"",
    prize:"",
    joined:"0",
    joinedusers:"",
    ended:"false"
})
    
//Moderation Variables
  bot.variables({
		  ownerRole: "0",
		  adminRole: "0",
		  modRole: "0",
		  traineeRole: "0",
      giveawayRole: "0"
})

//Server Roles & Channels Variables
  bot.variables({
    qotdRole: "0", 
    ventChannel: "0", 
    supportThread: "0"
})
	
//AFK System
  bot.variables({
    afks: "",
    afk: "hayır",
    afkss:"",
    afkmm:"0",
    afkc: "0",
    afkaa:"No one has mentioned :3"
})

//Role Shop
	bot.variables({
    role1: "",
    title1: "Not settled", 
    description1:"Maybe this slot will be added soon..", 
    price1: "0",
    role2: "",
    title2: "Not settled",
    description2:"Maybe this slot will be added soon too..",
    price2: "0",
  	role3: "",
    title3: "Not settled..",
    description3:"i dun now..",
    price3: "0",
    role4: "",
    title4: "Not settled at least for now..",
    description4:"4 is my favorite number! But why it is empty..",
    price4: "0",
    role5: "",
    title5: "When?",
    description5:"Legends say this slot will be staying empty..",
    price5: "0"
})
	
//Others
  bot.variables({
    vent: "on", 
    thread: "on"
	})
}