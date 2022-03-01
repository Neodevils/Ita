module.exports = ({
name:"color",
aliases:"color-code",
bkz:"Girilen rengin bilgisini atar.",
code:`$title[✿ preview of the color ✿]
$description[
> ๑ color name: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;name]\`
> ๑ hex code : \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;hexcode]\`
> ๑ rgb code : \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;rgbcode]\`
> ๑ hsl code: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;hslcode]\`
> ๑ luminosity code: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;luminosity]\`
> ๑ color type: $replaceText[$replaceText[$jsonRequest[https://api.falsisdev.ga/color?hex=$message;isLight];true;*light*;-1];false;**dark**;-1]
]
$color[$message]
$thumbnail[https://some-random-api.ml/canvas/colorviewer?hex=$message]
$onlyIf[$charCount[$message]==6;<a:0_flower1:817391078810320916> Can you please enter a hex code? Please delete "#" if you have added it.]
$onlyIf[$message!=;<a:dp_star6:835142297125519420> Enter a hex code. . .]
$onlyIf[$message[2]==;**Please enter a valid hex code-**]
$suppressErrors[||**Something went wrong- uhhh... I don't feel so good..**||]`
})