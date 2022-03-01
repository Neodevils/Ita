module.exports = ({
name:"wiki",
aliases: ["wikipedia"],
bkz:"Wikipedia üzerinde arama yapar",
code:`$title[Wikipedia Search]
$description[Searching results:
$addField[<a:dp_star6:835142297125519420> Long text;$djsEval[const a = $joinSplitText[ ]

a.summary.extract;yes]
$addField[<a:dp_star6:835142297125519420> in short;$djsEval[const a = $joinSplitText[ ]

a.summary.description;yes]]
$addField[<a:dp_star6:835142297125519420> link;[Link]($djsEval[const a = $joinSplitText[ ]

a.page.fullurl;yes])]
$addField[<a:dp_star6:835142297125519420> title;$djsEval[const a = $joinSplitText[ ]

a.page.title;yes]]
$textSplit[$httpRequest[https://api.falsisdev.ga/wiki?wiki=$uri[encode;$message]&lang=en;GET;;;;page:title];          ]
]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$onlyIf[$message!=;<a:dp_star6:835142297125519420> please enter the thing you are going to search :3]`
})