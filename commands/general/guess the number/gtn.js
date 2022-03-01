module.exports = ({
    name: "guessthenumber",
    aliases: ['gtn'],
    code: `$setservervar[winning_number;$random[$message[1];$message[2]]]
$setservervar[guess_the_number_channel;$channelid]
$setservervar[gtn;true]
$setservervar[n1;$message[1]]
$setservervar[n2;$message[2]]
$setservervar[gtnstatus;<a:dp_star6:835142297125519420> There is an ongoing game of GTN in <#$channelID>]
$author[୨ ✎ Guess the number!;$servericon]
$title[Alrighty!!]
$description[₊˚ I have got the number in mind ˊ˗
I have DMed you the number!!੭]
$color[$getServerVar[hex]]
$channelSendMessage[$channelID;{description:<a:pas10:835152237042729040> Guess the number has started! The number is from __$message[1] to $message[2]__. Good luck everybody!}{color:fcbfcb}]
$sendDM[$authorID;{description:<a:pas10:835152237042729040> The number for Guess The Number is $random[$message[1];$message[2]].
__Why are you getting this DM?__
You started a Guess The Number event in your $servername server uwu}{color:fcbfcb}]
$onlyif[$isuserdmenabled==true;{description: <:dash4:817209877335375932> \`Your DMs are disabled. but the number is $random[$message[1];$message[2]]. Keep that number somewhere safe!\`} {color:fcbfcb}{delete:10s}]
$onlyif[$message[1]<$message[2];{description: <:dash4:817209877335375932> You have provided the wrong input :(. please make sure the first number is the min number and the second the max number UnU}{color:fcbfcb}]
$onlyif[$message[2]>=5;{description: <:dash4:817209877335375932> The max number has to be at least 5~}{color:$getServerVar[hex]}]
$onlyif[$checkcontains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;lz;x;c;v;b;n;m]==false;{description: <:dash4:817209877335375932> You only need to use numbers as input.}{color:$getServerVar[hex]}]
$argscheck[>2;{description: <:dash4:817209877335375932> Please provide a min number and a max number}{color:fcbfcb}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];{description:<a:pas10:835152237042729040> You don't have a \`staff\` role~}{color:fcbfcb}]
$suppressErrors`
});