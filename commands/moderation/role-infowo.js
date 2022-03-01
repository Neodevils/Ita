module.exports = {
  name: "role-info",
  code: `
$title[₊˚Role Info✿੭₊˚]
$color[$getRoleColor[$findRole[$message[1]]]]
$description[
<:br_number_1:837050777129451550> **Name:** $roleName[$findRole[$message[1]]]
<:br_number_2:837050780959375391> **Members:** $roleMembersCount[$findRole[$message[1]]]
<:br_number_3:837050785875361822> **Color:** $getRoleColor[$findRole[$message[1]]]
<:br_number_4:837050797857964072> **Creation:** $creationDate[$findRole[$message[1]];time] ago
<:br_number_5:837050801661673493> **Mentionable:** $replaceText[$replaceText[$isMentionable[$findRole[$message[1]]];true;yes;-1];false;no;-1]
<:br_number_6:837050805882060861> **Shown separately:** $replaceText[$replaceText[$isHoisted[$findRole[$message[1]]];true;yes;-1];false;no;-1]
]
$footer[ID: $findRole[$message[1]]]
$addTimestamp `
}