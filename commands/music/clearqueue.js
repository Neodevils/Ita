module.exports = ({
name: "clearqueue",
code: `$clearSongQueue
$stopSong
$editIn[125ms;<a:dp_star6:835142297125519420> Cleared queue. from **$queueLength song** to **0**] <a:pas10:835152237042729040> Clearing...
$onlyIf[$queueLength!=0;**<a:dp_star6:835142297125519420>Nothing song was playing**]`
})