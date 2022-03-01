module.exports = ({
name: "stop",
code: `$stopSong
$sendMessage[<a:dp_star6:835142297125519420> Stopped.;no]
$onlyIf[$queueLength!=0;**<a:pas10:835152237042729040> Nothing song was playing**]
$onlyIf[$voiceID!=;{description:You should've been in a voice chat to execute this command.}{color:ffd87d}]
$deleteIn[5s]`
})