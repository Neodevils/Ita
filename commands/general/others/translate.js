module.exports = ({
name:"translate",
bkz:"Yazılan metni yazılan dillerde çevirir",
code:`$title[<a:0_flower1:817391078810320916> Translate <a:0_flower1:817391078810320916>]
$description[
$addField[<a:dp_star6:835142297125519420> text translated to;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];tr;Turkish;-1];en;English;-1];fr;French;-1];de;German;-1];ru;Russian;-1];aze;Azerbaijan;-1];ita;Italian;-1];esp;Espanol;-1];du;Dutch;-1];arm;Armenian;-1];chi;Chinese;-1];ja;Japanese;-1];fil;Filipino;-1]]
$addField[<a:pas10:835152237042729040> it is mean;$replaceText[$jsonRequest[https://api.falsisdev.ga/translate?key=a1q7klzhassx59uvi&text=$messageSlice[2]&lang=$message[1]&from=$message[2];translated];31;sj, ğ, ü, bruh. so funny;-1]]
]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$suppressErrors[uhhh...sorry I can't translate that. ]
$onlyIf[$messageSlice[2]!=;<a:pas10:835152237042729040> Please type something.]
$onlyIf[$message[1]!=;<a:pas10:835152237042729040> please type the language you are going to translate.
> example: $getServerVar[prefix]translate tr en Hello]
$onlyIf[$message[2]!=;<a:pas10:835152237042729040> please type the language you are going to translate.
> example: $getServerVar[prefix]translate tr en Hello]`
})