 module.exports = ({
    name: "guess-number",
    code: `$title[˚ʚ Guess the number 。੭ winner number ੭]
$description[**─﹕๑The winning number for GTN is $getservervar[winning_number].**]
$color[$getServerVar[hex]]
$onlyPerms[admin;{description:You need to be an Admin to use this.}{color:fcbfcb}]
$suppressErrors`
});