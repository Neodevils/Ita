module.exports = {
  name: "sabotage", 
  code:`

 $editIn[3s;{title: <a:network:870002313249570866> $randomText[I couldn't wait anymore;I have been waiting for hours; Here we go, $username. . .;Finally done~~] ₊˚}
 {description: <a:worm:870002849709428827> **$randomText[you used drone to hack a person's phone;you hacked a person's gallery and threatened to show them on social media;You spread a deadly tech virus thru wiring circuits and exploded nearby computers owo;You hacked the hospital's electrical connection nice nicee;you were staring at the ATM for seconds and you stole it OwO]
        ╚════ஓ๑<a:network:870002313249570866>๑ஓ════╝**
||nice job $username it was __$randomText[cool!;fun;scary to me;op move]__||
 }

{color:000001}
  {footer:$randomText[This is your payment;No mercy? I like it~] 
ᘒ 🍓 $random[100;600] stawwies:$authorAvatar}]

 <a:dp_star6:835142297125519420> You looked around to sabotage. . . 
  $if[$getGlobalUserVar[evil]>0]
$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil;$authorID];1];$authorID]
$endIf

$if[$getGlobalUserVar[good]>0]
$setGlobalUserVar[good;$sub[$getGlobalUserVar[good;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[100;400]];$authorID]

$onlyIf[$getGlobalUserVar[case;$authorID]!=yok;<a:dp_star6:835142297125519420> You also need a case to hack~]

$onlyIf[$getGlobalUserVar[monitor;$authorID]!=yok;<a:dp_star6:835142297125519420> You need a monitor to hack~]

$globalCooldown[30s;{description:**anonymous, chill! we don't want cops arrest us right? wait for __%time%__**}{color:000001}]
$onlyIf[$getGlobalUserVar[evil;$authorID]>0;{description: Uh.. There's no evil deeds left to endowe. :c}{color:000001}]
$onlyIf[$getGlobalUserVar[good;$authorID]>0;{description: Uh.. There's no good deeds left to endowe..}{color:000001}]
`
}