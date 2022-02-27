module.exports = {
	Bot: {
	token: process.env.TOKEN,
	prefix: "k.",
	intents: "all", 
  database: {
        type: "dbdjs.mongo",
        db: require('dbdjs.mongo'),
        path: "./database/",
        tables: ["main"] 
},
	respondOnEdit: {
		commands: true
	},
	debug: {
		interpreter : true
},
	suppressAllErrors: ""
}
}
