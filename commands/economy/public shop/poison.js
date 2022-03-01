module.exports = {
   name: "poison",
   code: `
$setGlobalUserVar[poison;yok]
$setUserVar[xp;$sub[$getUSerVar[xp;$mentioned[1]];$randomText[200;200;200;200;250;250;250;250;600;1500]];$mentioned[1]]

$title[You..are..poiso.. $username[$mentioned[1]]]
$description[$username, poisoned $username[$mentioned[1]] with poison <a:poison:865957832837562378> *!* *coughs*]
$addField[They lost...;||<a:lowe:861599577387827201> $randomText[200;200;200;200;250;250;250;250;600;1500] lovsu||]
$footer[Poisoned date is]
$addTimestamp

$onlyIf[$isBot[$mentioned[1;yes]]==false;**<a:mnrubs:817219196953952267> umm you can't poison discord bots**]
$onlyIf[$mentioned[1]!=$authorID;..?]
$onlyIf[$mentioned[1]!=;Can you try to use poison on someone? c:]
$onlyIf[$getGlobalUserVar[poison;$authorID]!=yok;{description: <a:pas10:835152237042729040> **You dont have a poison yet! Try using \`$getServerVar[prefix]buy poison\` to receive poison and then run this command on a user c:**}{color:$getServerVar[hex]}]
` 
}
