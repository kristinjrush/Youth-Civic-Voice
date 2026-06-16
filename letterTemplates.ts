# letterTemplates.ts

export interface LetterData {

helperName: string;

issue: string;

story: string;

whyItMatters: string;

solution: string;

}

export function generateLetter(data: LetterData): string {

return `

Dear ${data.helperName},

My name is a student.

I noticed ${data.issue}.

${data.story}

This matters because ${data.whyItMatters}.

One thing that could help is ${data.solution}.

Thank you for listening to young people and helping our community.

Sincerely,

A Student Who Cares

`;

}
