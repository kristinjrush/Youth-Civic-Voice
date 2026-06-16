# helperProfiles.ts

export interface HelperProfile {
title: string;
emoji: string;
description: string;
examples: string[];
usuallyDoesNotDecide: string[];
}

export const helperProfiles: HelperProfile[] = [

{
title: "Principal",
emoji: "🏫",
description:
"Principals help schools solve problems and support students and families.",

examples: [
"Bullying",
"Recess concerns",
"School climate"
],

usuallyDoesNotDecide: [
"State laws",
"City transportation"
]
},

{
title: "School Board Member",
emoji: "📚",
description:
"School board members help make decisions about schools and district policies.",

examples: [
"School policies",
"District priorities"
],

usuallyDoesNotDecide: [
"City roads",
"Federal laws"
]
},

{
title: "City Council Member",
emoji: "🏙️",
description:
"City council members help make decisions about parks, roads, and community spaces.",

examples: [
"Crosswalks",
"Parks",
"Sidewalks"
],

usuallyDoesNotDecide: [
"School curriculum",
"Federal laws"
]
},

{
title: "Mayor",
emoji: "👩",
description:
"Mayors work with many people to help cities serve their communities.",

examples: [
"Transportation",
"Parks",
"Community priorities"
],

usuallyDoesNotDecide: [
"State laws",
"School district rules"
]
},

{
title: "County Commissioner",
emoji: "🌲",
description:
"County commissioners help make decisions affecting the county.",

examples: [
"County roads",
"Public health"
],

usuallyDoesNotDecide: [
"Federal laws"
]
},

{
title: "State Representative",
emoji: "🏛️",
description:
"State representatives help make laws and decisions for Oregon.",

examples: [
"Education funding",
"State laws"
],

usuallyDoesNotDecide: [
"City playground repairs"
]
},

{
title: "U.S. Representative",
emoji: "🇺🇸",
description:
"Members of Congress help make decisions that affect the country.",

examples: [
"National issues"
],

usuallyDoesNotDecide: [
"School playground repairs"
]
}

];
