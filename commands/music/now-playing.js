module.exports = {
 name: "playing",
 aliases: "np", 
 code: `
 __**<a:dp_star6:835142297125519420><@$authorID>**__
 $author[ʚSong Info ɞ;$authorAvatar]
 $description[
 
 $image[$songInfo[thumbnail]]
 
 $addField[$customEmoji[dp_star6] publisher's url;[Click to here]($songInfo[publisher_url])]
 
 $addField[$customEmoji[dp_star6] publisher;$songInfo[publisher]]
 
 $addField[$customEmoji[dp_star6] played by;$userTag[$songInfo[userID]]]
 
 $addField[$customEmoji[dp_star6] url;
 $songInfo[url]]
 
 $addField[$customEmoji[dp_star6] duration left;
 $songInfo[duration_left]]
 
 $addField[$customEmoji[dp_star6] current duration; $songInfo[current_duration]]
 
 $addField[$customEmoji[dp_star6] duration; $songInfo[duration]]
 
 $addField[$customEmoji[dp_star6] description; $songInfo[description]]
 
 $addField[$customEmoji[dp_star6] currently playing;$songInfo[title]]]
 
 $color[$getServerVar[hex]]
 $suppressErrors[Ummm.. Nothing is playing right now-]`
 }