export interface DecisionType {
id: string;
title: string;
emoji: string;
description: string;
childPrompt: string;
examples: string[];
letterLanguage: string;
}

export const decisionTypes: DecisionType[] = [

{
id: "fix_something",

title: "Fix Something",

emoji: "🔧",

description:
"Repair something that is broken.",

childPrompt:
"What needs to be fixed?",

examples: [
"Broken swings",
"Cracked sidewalks",
"Missing crosswalk signs",
"Leaky drinking fountains"
],

letterLanguage:
"One thing that could help is fixing this problem."
},

{
id: "add_something",

title: "Add Something New",

emoji: "➕",

description:
"Create something your community does not have yet.",

childPrompt:
"What would you like to add?",

examples: [
"More trees",
"Bike racks",
"Playground equipment",
"Benches"
],

letterLanguage:
"One thing that could help is adding something new."
},

{
id: "change_a_rule",

title: "Change a Rule",

emoji: "🔄",

description:
"Improve how things work.",

childPrompt:
"Is there a rule, schedule, or policy that should change?",

examples: [
"Lunch rules",
"Recess schedules",
"Traffic patterns",
"School policies"
],

letterLanguage:
"One thing that could help is changing how this works."
},

{
id: "help_others_understand",

title: "Help Others Understand",

emoji: "📚",

description:
"Teach people why this matters.",

childPrompt:
"What do you wish adults understood?",

examples: [
"Why students need shade",
"How noise affects learning",
"Why safety matters"
],

letterLanguage:
"I hope this story helps people understand why this issue matters."
},

{
id: "work_together",

title: "Work Together",

emoji: "🤝",

description:
"Learn more and solve the problem together.",

childPrompt:
"Who could work together to help?",

examples: [
"Students and teachers",
"Families and schools",
"Neighbors and city leaders"
],

letterLanguage:
"I hope people can work together to solve this problem."
},

{
id: "share_my_idea",

title: "Share My Idea",

emoji: "💡",

description:
"I have another idea.",

childPrompt:
"What idea would you like to share?",

examples: [
"Creative solutions",
"Student suggestions",
"New possibilities"
],

letterLanguage:
"I would like to share an idea that might help."
}

];
