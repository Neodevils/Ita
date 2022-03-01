module.exports = {
  name: "evil", 
  code:`

 $editIn[3s;{title: $customEmoji[evilsuu] $randomText[Here we go again baby;Ohhh you're committing to evil deeds; I was waiting for you $username!;Finally you are here] ₊˚}
 {description:<a:evilstars:861685035479728158> **$randomText[You took someone's lunch;You took some candy from a baby 3:);You settled a kitten on fire \:);You burned down a church hhhh;You punched to a guy.. that was so powerful slap OwO I liked it! ;You robbed a woman's bag! You are doing well!!;Y-you.. YOU KILLED SOMEONE!! <a:kill:861684652276318218>; I never thought you are going to do this to me... Uhm it felt so good~;You threw a cat to trash can and smiled, so evilll;You don't have to break my heart... I don't deserve this. Don't hurt to my feelings over and over $username.. :/;You suddenly swore to an old woman :3; You didn't show respect to a woman's clothing :/. Let them whatever they wear, but I guess you care huh :3]
        ╚════ஓ๑<a:evilsuu:861375574386671637>๑ஓ════╝**
||well done $username $getGlobalUserVar[evil] evil deeds... pretty __$randomText[dirty;cruel;brutal;anarchic;savage!;sadistic!!;sensational!!!]__||
 }

{color:FF6868}
  {footer:$randomText[Nice niceee, keep going! before I forgot;Good job $username let's meet later again. Ah] also
I have given your. . 
⨯ 🍓 $random[50;100] stawwies 
⨯ 💖 $random[10;50] lovsu!!:$authorAvatar}]

 <a:dp_star6:835142297125519420> You looked around. . . 
  $if[$getGlobalUserVar[good]>0]
$setGlobalUserVar[good;$sub[$getGlobalUserVar[good;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil;$authorID];1];$authorID]

$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[50;100]];$authorID]

$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[10;50]];$authorID;$guildID]

$globalCooldown[1m;{description:**$username.. wait %time% for next engage :3 we don't want to get caught, right?**}{color:FF6868}]
`
}