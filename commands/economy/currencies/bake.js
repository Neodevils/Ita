module.exports = {
  name: "bake", 
  code: `
  $if[$randomText[delicious;bad]==delicious]
$color[$getServerVar[hex]]
  $description[
  **‿︵‿︵୨˚̣̣̣୧ - - - - - ୨˚̣̣̣୧‿︵‿︵
┊　 ┊    <a:dp_star6:835142297125519420>               <a:dp_star6:835142297125519420>
┊      ✧･ﾟ
✧ ･ﾟ  <a:evilsuu:861375574386671637>  You bake a $randomText[<:cupcake:861908972188598301> cupcake ;<:cookie:861909631794413573> cookie;<a:chococake:861908718291910657> chocolate cake;<:cake:861908788994768926> cake] for me and $randomMention . . . 
it was delicious and gave you <a:strawwy:861057831712980992> $randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1500;2000;3000] stawwies! <3
\`your balance is now :\`<a:strawwy:861057831712980992>__\`$numberSeparator[$getGlobalUserVar[pocket]]\`__** <:yayy:861913286840942622>]
$footer[🍓 +$randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1500;2000;3000] stawwy ┇ 💖 +$random[50;150] lovsu :3;$authorAvatar]
  $setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1500;2000;3000]];$authorID]
  
  $setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[50;150]];$authorID;$guildID]
 
 $elseIf[$randomText[delicious;bad]==bad]
 $color[$getServerVar[hex]]
  $description[
**‿︵‿︵୨˚̣̣̣୧ - - - - - ୨˚̣̣̣୧‿︵‿︵
┊　 ┊    <a:dp_star6:835142297125519420>               <a:dp_star6:835142297125519420>
┊      ✧･ﾟ
✧ ･ﾟ  <a:evilsuu:861375574386671637>  You bake a $randomText[<:cupcake:861908972188598301> cupcake ;<:cookie:861909631794413573> cookie;<a:chococake:861908718291910657> chocolate cake;<:cake:861908788994768926> cake] for me and $randomMention . . . 
it was... ||$randomText[so bad;less sugary;less salty;like i ate sugar]|| and i'm taking your <a:strawwy:861057831712980992> $randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1000;1000;1000] stawwies away!
\`your balance is now :\`<a:strawwy:861057831712980992>__\`$numberSeparator[$getGlobalUserVar[pocket]]\`__** <a:mad:861923861905014824>]
$footer[🍓 -$randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1000;1000;1000] stawwy ┇ 💖 -$random[30;120] lovsu :(;$authorAvatar]
  $setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];$randomText[200;200;200;300;300;600;600;600;700;700;700;600;600;450;800;250;1000;1000;1000]];$authorID]
  
  $setUserVar[xp;$sub[$getUserVar[xp;$authorID];$random[30;50]];$authorID;$guildID]
  $endelseif
  $endif
  $cooldown[20m;{title:Wait a little bit cutie!}{description:Hey $username! We have to wait %time% to the sweet be ready to serve!}{color:$getServerVar[hex]}]
$onlyIf[$getUserVar[xp;$authorID]>50;{description:**Uh.. you need at least <:exp_heart:843229991491469342> __50__ lovsu to enter this bake event!**}{color:$getServerVar[hex]}]
$onlyIf[$getGlobalUserVar[pocket;$authorID]>1000;{description:**Uh.. you need at least <a:strawwy:861057831712980992> __1,000__ stawwies to enter this bake event!**}{color:$getServerVar[hex]}]`
}