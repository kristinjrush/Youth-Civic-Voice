# routeMap.ts

export interface RouteRule {
issueCode: string;
issueArea: string;
primaryRepresentative: string;
secondaryRepresentatives?: string[];
relatedDepartment?: string;
explanation: string;
departmentNote?: string;
confidence: "high" | "medium" | "low";
}

export const routeMap: RouteRule[] = [

{
issueCode: "dangerous_crossing",
issueArea: "Transportation",

primaryRepresentative: "City Council Member",

secondaryRepresentatives: ["Mayor"],

relatedDepartment: "Public Works",

explanation:
"City council members help make decisions about roads, sidewalks, and transportation.",

departmentNote:
"Public Works may help carry out improvements.",

confidence: "high"
},

{
issueCode: "broken_playground",
issueArea: "Parks",

primaryRepresentative: "City Council Member",

secondaryRepresentatives: ["Mayor"],

relatedDepartment: "Parks Department",

explanation:
"City leaders help make decisions about parks and playgrounds.",

confidence: "high"
},

{
issueCode: "school_rule",
issueArea: "Education",

primaryRepresentative: "School Board Member",

secondaryRepresentatives: ["Principal"],

explanation:
"School board members help make decisions about district policies.",

confidence: "high"
},

{
issueCode: "bullying",
issueArea: "School Climate",

primaryRepresentative: "Principal",

secondaryRepresentatives: ["Teacher", "Counselor"],

explanation:
"School leaders help students feel safe and supported.",

confidence: "high"
},

{
issueCode: "state_law",
issueArea: "State Policy",

primaryRepresentative: "State Representative",

secondaryRepresentatives: ["State Senator"],

explanation:
"State legislators help make laws and decide how resources are used across Oregon.",

confidence: "high"
}

];
