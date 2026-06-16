# safetyRouting.ts

export interface SafetyLevel {

level: 1 | 2 | 3 | 4;

message: string;

nextStep: string;

}

export const safetyRouting = {

level1: {

level: 1,

message:
"This sounds like something that can become a letter or community project.",

nextStep:
"Continue to Tell My Story."

},

level2: {

level: 2,

message:
"A trusted adult may be able to help you think about this problem.",

nextStep:
"Continue with adult review."

},

level3: {

level: 3,

message:
"This sounds important. A trusted adult should help you decide what to do next.",

nextStep:
"Pause and talk with a trusted adult."

},

level4: {

level: 4,

message:
"This sounds like something an adult should help with right away.",

nextStep:
"Stop the normal letter process and talk to a trusted adult immediately."

}

};
