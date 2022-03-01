module.exports = {
name: "message",
code: `

$deletecommand
Done
$deleteIn[2s]
$sendDM[$findUser[$message[1]];{title:𓂃a message︱from anonymous discord user}{description:<a:pas10:835152237042729040> *You got a mail from anonymous person...*}{field:their msg (っ'-')╮=͟͟͞͞ ✉️:$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;<:stare:797156847903047810> *Literally they didn't send anything so I'll reveal their ID ||$authorID||*];false;$messageSlice[1]]}
{timestamp}{footer:from $serverName[$guildID]}{color:$getServerVar[hex]}]
$onlyIf[$getGlobalUserVar[phone;$authorID]==var;Sorry but, you don' have phone :c]`
    }