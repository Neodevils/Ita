module.exports = ({
  name:"emoji",
  aliases:['emojinfo','emoji-info'],
  bkz:"Girilen Emojinin Bilgisini Gösterir",
  code:`
  
  $author[꒰꒰emoji information;$emoji[$resolveEmojiID[$noMentionMessage[1]];url]]
  $description[・emoji name: \`$emoji[$resolveEmojiID[$noMentionMessage[1]];name]\`
・emoji id: \`$emoji[$resolveEmojiID[$noMentionMessage[1]];id]\`
<a:dp_star6:835142297125519420> emoji link: [TAP]($emoji[$resolveEmojiID[$noMentionMessage[1]];url])
・emoji code: \`$emoji[$resolveEmojiID[$noMentionMessage[1]];identifier]\`
・emoji status:\`$replaceText[$replaceText[$emoji[$resolveEmojiID[$noMentionMessage[1]];isanimated];true;animated emoji;-1];false;non-animated emoji;-1]\`
・emoji's server: \`$serverName[$emoji[$resolveEmojiID[$noMentionMessage[1]];guildid]]\`
・created at: **\`$emoji[$resolveEmojiID[$noMentionMessage[1]];created]\`**
  $image[$emoji[$resolveEmojiID[$noMentionMessage[1]];url]]
  $color[$getServerVar[hex]]
  $footer[₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇ෆ˟̑̑˚̑̑˟̑ෆ₊̣̇]
$suppressErrors[<a:unlem_kaeru:864997251932094514> I can't find the emoji-]
  $onlyIf[$resolveEmojiID[$noMentionMessage[1]]!=;<a:unlem_kaeru:864997251932094514> I can't find the emoji, or it's time up on the server.]
  $onlyIf[$checkContains[$noMentionMessage[1];:]==true;<a:unlem_kaeru:864997251932094514> Please enter an emoji-]
  $onlyIf[$noMentionMessage[1]!=;<a:unlem_kaeru:864997251932094514> Please enter an emoji]
  `
})