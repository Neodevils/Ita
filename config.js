module.exports = {
	Bot: {
	token: process.env.TOKEN,
	prefix: "k.",
	intents: "all", 
  database: {
      db: require("aoi.db"),
      type: "aoi.db",
      path: "./database/",
      tables: ["main"],
      extraOptions: {
        dbType: "KeyValue"
      }
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
