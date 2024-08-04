import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
export class SeedUsersRoles1570200490073 implements MigrationInterface {
   A = {
   "typeKey":"A",
   "sections":[
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 1 - 5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":1,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":2,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":3,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":4,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"Which of the following is true?",
               "questionNumber":5,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 6 - 10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"Which of the following must be true?",
               "questionNumber":6,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":7,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":8,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":9,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":10,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 11 – 13",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":11,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":12,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":13,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            }
         ]
      },
      {
         "sectionQuestion":"The planning committee for a series of road rallies had seven checkpoints, T, U, V, W, X, Y, and Z to use. Each rally would start from a checkpoint and each lap would end by checking in at a checkpoint. No lap passes any checkpoint other than the one which ends it. Each rally would end by checking in at the last checkpoint, not necessarily the same as the one from which the rally started. The checkpoints were connected directly - that is, without passing any other checking points between - by road as follows: U is connected directly to V and W V is connected directly to T and Y W is connected directly to V, X, Y, and Z. X is connected directly to Z.",
         "sectionNumberHeading":"QUESTIONS 14 - 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"Which of the following is a possible sequence of checkpoints to visit in a four-lap rally beginning at the checkpoint U?",
               "questionNumber":14,
               "a":"V, T, Y, W",
               "b":"V, W, Z, U",
               "c":"V, Y, X, W",
               "d":"W, V, T, X",
               "e":"W, X, Z, W",
               "answer":"e"
            },
            {
               "question":"On a two - lap rally beginning at checkpoint Z,which checkpoint CANNOT be visited ? ",
               "questionNumber":15,
               "a":"T",
               "b":"U",
               "c":"V",
               "d":"W",
               "e":"Y",
               "answer":"a"
            },
            {
               "question":"Which of the following is a complete and accurate list of possible second checkpoints in a rally beginning from checkpoint Y ? ",
               "questionNumber":16,
               "a":"T, X, Z",
               "b":"T, W, X, Z",
               "c":"T, V, W, X, Z",
               "d":"T, U, V, W, X, Z",
               "e":"T, U, V, W, X, Y, Z",
               "answer":"e"
            },
            {
               "question":"If a four - lap rally begins and ends at checkpoint U, and no checkpoint is passed twice, what checkpoint must end the second lap ? ",
               "questionNumber":17,
               "a":"V",
               "b":"W",
               "c":"X",
               "d":"Y",
               "e":"Z",
               "answer":"d"
            },
            {
               "question":"What is the greatest possible number of laps in a rally in which no checkpoint is checked into twice ? ",
               "questionNumber":18,
               "a":"4",
               "b":"5",
               "c":"6",
               "d":"7",
               "e":"8",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":19,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":20,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":21,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":22,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":23,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            }
         ]
      }
   ]
   }
   
   B = {
   "typeKey":"B",
   "sections":[
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 1 - 5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"Which of the following is true?",
               "questionNumber":1,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":2,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":2,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":3,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":4,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":5,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 6 - 10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":6,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":7,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":8,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":9,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":10,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 11 – 13",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":11,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":12,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":13,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"The planning committee for a series of road rallies had seven checkpoints, T, U, V, W, X, Y, and Z to use. Each rally would start from a checkpoint and each lap would end by checking in at a checkpoint. No lap passes any checkpoint other than the one which ends it. Each rally would end by checking in at the last checkpoint, not necessarily the same as the one from which the rally started. The checkpoints were connected directly - that is, without passing any other checking points between - by road as follows: U is connected directly to V and W V is connected directly to T and Y W is connected directly to V, X, Y, and Z. X is connected directly to Z.",
         "sectionNumberHeading":"QUESTIONS 14 - 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"What is the greatest possible number of laps in a rally in which no checkpoint is checked into twice ? ",
               "questionNumber":14,
               "a":"4",
               "b":"5",
               "c":"6",
               "d":"7",
               "e":"8",
               "answer":"c"
            },
            {
               "question":"If a four - lap rally begins and ends at checkpoint U, and no checkpoint is passed twice, what checkpoint must end the second lap ? ",
               "questionNumber":15,
               "a":"V",
               "b":"W",
               "c":"X",
               "d":"Y",
               "e":"Z",
               "answer":"d"
            },
            {
               "question":"Which of the following is a complete and accurate list of possible second checkpoints in a rally beginning from checkpoint Y ? ",
               "questionNumber":16,
               "a":"T, X, Z",
               "b":"T, W, X, Z",
               "c":"T, V, W, X, Z",
               "d":"T, U, V, W, X, Z",
               "e":"T, U, V, W, X, Y, Z",
               "answer":"e"
            },
            {
               "question":"On a two - lap rally beginning at checkpoint Z,which checkpoint CANNOT be visited ? ",
               "questionNumber":17,
               "a":"T",
               "b":"U",
               "c":"V",
               "d":"W",
               "e":"Y",
               "answer":"a"
            },
            {
               "question":"Which of the following is a possible sequence of checkpoints to visit in a four-lap rally beginning at the checkpoint U?",
               "questionNumber":18,
               "a":"V, T, Y, W",
               "b":"V, W, Z, U",
               "c":"V, Y, X, W",
               "d":"W, V, T, X",
               "e":"W, X, Z, W",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":19,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":20,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":21,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":22,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":23,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      }
   ]
   }
   C = {
   "typeKey":"C",
   "sections":[
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 1-5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":1,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":2,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":3,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":4,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":5,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"The planning committee for a series of road rallies had seven checkpoints, T, U, V, W, X, Y, and Z to use. Each rally would start from a checkpoint and each lap would end by checking in at a checkpoint. No lap passes any checkpoint other than the one which ends it. Each rally would end by checking in at the last checkpoint, not necessarily the same as the one from which the rally started. The checkpoints were connected directly - that is, without passing any other checking points between - by road as follows: U is connected directly to V and W V is connected directly to T and Y W is connected directly to V, X, Y, and Z. X is connected directly to Z.",
         "sectionNumberHeading":"QUESTIONS 6-10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"What is the greatest possible number of laps in a rally in which no checkpoint is checked into twice ? ",
               "questionNumber":6,
               "a":"4",
               "b":"5",
               "c":"6",
               "d":"7",
               "e":"8",
               "answer":"c"
            },
            {
               "question":"If a four - lap rally begins and ends at checkpoint U, and no checkpoint is passed twice, what checkpoint must end the second lap ? ",
               "questionNumber":7,
               "a":"V",
               "b":"W",
               "c":"X",
               "d":"Y",
               "e":"Z",
               "answer":"d"
            },
            {
               "question":"Which of the following is a complete and accurate list of possible second checkpoints in a rally beginning from checkpoint Y ? ",
               "questionNumber":8,
               "a":"T, X, Z",
               "b":"T, W, X, Z",
               "c":"T, V, W, X, Z",
               "d":"T, U, V, W, X, Z",
               "e":"T, U, V, W, X, Y, Z",
               "answer":"e"
            },
            {
               "question":"On a two - lap rally beginning at checkpoint Z,which checkpoint CANNOT be visited ? ",
               "questionNumber":9,
               "a":"T",
               "b":"U",
               "c":"V",
               "d":"W",
               "e":"Y",
               "answer":"a"
            },
            {
               "question":"Which of the following is a possible sequence of checkpoints to visit in a four-lap rally beginning at the checkpoint U?",
               "questionNumber":10,
               "a":"V, T, Y, W",
               "b":"V, W, Z, U",
               "c":"V, Y, X, W",
               "d":"W, V, T, X",
               "e":"W, X, Z, W",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 11 – 13",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":11,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":12,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":13,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 14-18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":14,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":15,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":16,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":17,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":18,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 19 - 23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":19,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":20,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":21,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":22,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"Which of the following is true?",
               "questionNumber":23,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            }
         ]
      }
   ]
   }
   D = {
   "typeKey":"D",
   "sections":[
      {
         "sectionQuestion":"The planning committee for a series of road rallies had seven checkpoints, T, U, V, W, X, Y, and Z to use. Each rally would start from a checkpoint and each lap would end by checking in at a checkpoint. No lap passes any checkpoint other than the one which ends it. Each rally would end by checking in at the last checkpoint, not necessarily the same as the one from which the rally started. The checkpoints were connected directly - that is, without passing any other checking points between - by road as follows: U is connected directly to V and W V is connected directly to T and Y W is connected directly to V, X, Y, and Z. X is connected directly to Z.",
         "sectionNumberHeading":"QUESTIONS 1-5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"What is the greatest possible number of laps in a rally in which no checkpoint is checked into twice ? ",
               "questionNumber":1,
               "a":"4",
               "b":"5",
               "c":"6",
               "d":"7",
               "e":"8",
               "answer":"c"
            },
            {
               "question":"If a four - lap rally begins and ends at checkpoint U, and no checkpoint is passed twice, what checkpoint must end the second lap ? ",
               "questionNumber":2,
               "a":"V",
               "b":"W",
               "c":"X",
               "d":"Y",
               "e":"Z",
               "answer":"d"
            },
            {
               "question":"Which of the following is a complete and accurate list of possible second checkpoints in a rally beginning from checkpoint Y ? ",
               "questionNumber":3,
               "a":"T, X, Z",
               "b":"T, W, X, Z",
               "c":"T, V, W, X, Z",
               "d":"T, U, V, W, X, Z",
               "e":"T, U, V, W, X, Y, Z",
               "answer":"e"
            },
            {
               "question":"On a two - lap rally beginning at checkpoint Z,which checkpoint CANNOT be visited ? ",
               "questionNumber":4,
               "a":"T",
               "b":"U",
               "c":"V",
               "d":"W",
               "e":"Y",
               "answer":"a"
            },
            {
               "question":"Which of the following is a possible sequence of checkpoints to visit in a four-lap rally beginning at the checkpoint U?",
               "questionNumber":5,
               "a":"V, T, Y, W",
               "b":"V, W, Z, U",
               "c":"V, Y, X, W",
               "d":"W, V, T, X",
               "e":"W, X, Z, W",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 6-10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":6,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":7,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":8,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":9,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":10,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 11 – 13",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":11,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":12,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":13,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 14 - 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":14,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":15,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":16,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":17,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"Which of the following is true?",
               "questionNumber":18,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":19,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":20,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":21,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":22,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":23,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      }
   ]
   }
   E = {
   "typeKey":"E",
   "sections":[
      {
         "sectionQuestion":" There are seven pieces left on the chessboard: the White King, White Queen, White Knight, White Rook, Black King, Black Bishop, and Black Pawn. From the point of view of the white player,  The White Rook, White King and Black Pawn are nearer than the White Queen, while the Black Bishop, Black King, and White Knight are farther away than the White Queen.  The White Rook is in the same column as the White Knight, but nearer.   The Black King is in the same column as the Black Pawn, but farther away.  Twice as many pieces are to the right of the White Queen as are left of the White Queen  The diagonal from the Black Pawn, going left and away from the White player, passes through the White Rook, White Queen, and Black Bishop, in order from near to far.",
         "sectionNumberHeading":"QUESTIONS 1-5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"White King lies in what direction from White Queen? ",
               "questionNumber":1,
               "a":"Toward the Black Player in the same column.",
               "b":"Away from the White Player in the same column",
               "c":"Toward the White Player and to the left",
               "d":"Toward the White player and to the right.",
               "e":"Away from the white player and to the right.",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that might lie to the right of the Black King in the same row",
               "questionNumber":2,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"a"
            },
            {
               "question":"Which of the following statement must be true?",
               "questionNumber":3,
               "a":"The White Rook is nearer to the White Player than the Black Pawn",
               "b":"The Black Pawn is nearer to the White Player than the White King",
               "c":"The White King is to the right of the Black Bishop, from the White Player's point of view.",
               "d":"The White Queen is to the right of the Black King, from the White player's point of view",
               "e":"The White Knight is to the left of the Black King, from the White Player's point of view",
               "answer":"e"
            },
            {
               "question":"How many of the pieces may be nearer to the Black player than the Black Bishop? ",
               "questionNumber":4,
               "a":"4",
               "b":"3",
               "c":"2",
               "d":"1",
               "e":"0",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that can be left of the White Rook, from the White Player's point of view?",
               "questionNumber":5,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"d"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 6-10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":6,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":7,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":8,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":9,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":10,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 11 - 15",
         "sectionNumber":3,
         "questions":[
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":11,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":12,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":13,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":14,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"Which of the following is true?",
               "questionNumber":15,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 16 – 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":16,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":17,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":18,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":19,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":20,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":21,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":22,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":23,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      }
   ]
   }
   F = {
   "typeKey":"F",
   "sections":[
      {
         "sectionQuestion":"The Weymouth Ferry was fully loaded except for space for six tons of deck cargo. The purser had ten crates that had not yet been brought abroad.  One crate weighed 1,000 pounds.  Two crates weighed a ton each.  Three crates each weighed a ton and a half.  The last Four crates each weighed two tons.  1ton = 2,000pound",
         "sectionNumberHeading":"Question 1 - 5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"What is the maximum number of these crates that can be stowed in the space available for deck cargo?",
               "questionNumber":1,
               "a":"3",
               "b":"4",
               "c":"5",
               "d":"6",
               "e":"7",
               "answer":"c"
            },
            {
               "question":"What is the minimum number of crates that can be taken abroad and exactly fill the available deck cargo space?",
               "questionNumber":2,
               "a":"2",
               "b":"3",
               "c":"4",
               "d":"5",
               "e":"6",
               "answer":"b"
            },
            {
               "question":"If the three ton-and-a-half crates are taken abroad,what is the maximum number of additional crates that can be stowed in the available space?",
               "questionNumber":3,
               "a":"5",
               "b":"4",
               "c":"3",
               "d":"2",
               "e":"1",
               "answer":"d"
            },
            {
               "question":"If the 1,000-pound crate costs $10 to ship,each one-ton crate costs $20, each ton-and-a-half crate costs $30 and each two-ton crate $25, what is the maximum shipping charge the purser can collect from the available tonnage?",
               "questionNumber":4,
               "a":"$75",
               "b":"$90",
               "c":"$110",
               "d":"$120",
               "e":"$150",
               "answer":"d"
            },
            {
               "question":"If the 1,000-pound crate costs $10 to ship,each one-ton crate costs $20, each ton-and-a-half crate $30 and each two-ton crate $25, how much shipping charge is the purser guaranteed if he uses at least half the available tonnage?",
               "questionNumber":5,
               "a":"$40",
               "b":"$45",
               "c":"$50",
               "d":"$55",
               "e":"$60",
               "answer":"b"
            }
         ]
      },
      {
         "sectionQuestion":" There are seven pieces left on the chessboard: the White King, White Queen, White Knight, White Rook, Black King, Black Bishop, and Black Pawn. From the point of view of the white player,  The White Rook, White King and Black Pawn are nearer than the White Queen, while the Black Bishop, Black King, and White Knight are farther away than the White Queen.  The White Rook is in the same column as the White Knight, but nearer.   The Black King is in the same column as the Black Pawn, but farther away.  Twice as many pieces are to the right of the White Queen as are left of the White Queen  The diagonal from the Black Pawn, going left and away from the White player, passes through the White Rook, White Queen, and Black Bishop, in order from near to far.",
         "sectionNumberHeading":"QUESTIONS 6-10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"White King lies in what direction from White Queen? ",
               "questionNumber":6,
               "a":"Toward the Black Player in the same column.",
               "b":"Away from the White Player in the same column",
               "c":"Toward the White Player and to the left",
               "d":"Toward the White player and to the right.",
               "e":"Away from the white player and to the right.",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that might lie to the right of the Black King in the same row",
               "questionNumber":7,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"a"
            },
            {
               "question":"Which of the following statement must be true?",
               "questionNumber":8,
               "a":"The White Rook is nearer to the White Player than the Black Pawn",
               "b":"The Black Pawn is nearer to the White Player than the White King",
               "c":"The White King is to the right of the Black Bishop, from the White Player's point of view.",
               "d":"The White Queen is to the right of the Black King, from the White player's point of view",
               "e":"The White Knight is to the left of the Black King, from the White Player's point of view",
               "answer":"e"
            },
            {
               "question":"How many of the pieces may be nearer to the Black player than the Black Bishop? ",
               "questionNumber":9,
               "a":"4",
               "b":"3",
               "c":"2",
               "d":"1",
               "e":"0",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that can be left of the White Rook, from the White Player's point of view?",
               "questionNumber":10,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"d"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 11-15",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":11,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":12,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":13,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":14,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":15,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 16 – 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":16,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":17,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":18,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":19,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":20,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":21,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":22,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":23,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      }
   ]
   }
   G = {
   "typeKey":"G",
   "sections":[
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 1-5",
         "sectionNumber":1,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":1,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":2,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":3,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            },
            {
               "question":"If only one of the men is both in Operations and in a group B  team, which of the following must be true?",
               "questionNumber":4,
               "a":"No more than two of the men are in the Marketing team",
               "b":"No more than two of the men are in the Sales team",
               "c":"No more than two of the men are in the Admin team",
               "d":"No less than two of the men are both Operations and in Group A organizations",
               "e":"No less than two of the men are in the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following must be true?",
               "questionNumber":5,
               "a":"Ade belongs to the Sales team",
               "b":"Chike belongs to the  Marketing team",
               "c":"Chike belongs to the Admin team",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to the IT team",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"The planning committee for a series of road rallies had seven checkpoints, T, U, V, W, X, Y, and Z to use. Each rally would start from a checkpoint and each lap would end by checking in at a checkpoint. No lap passes any checkpoint other than the one which ends it. Each rally would end by checking in at the last checkpoint, not necessarily the same as the one from which the rally started. The checkpoints were connected directly - that is, without passing any other checking points between - by road as follows: U is connected directly to V and W V is connected directly to T and Y W is connected directly to V, X, Y, and Z. X is connected directly to Z.",
         "sectionNumberHeading":"QUESTIONS 6-10",
         "sectionNumber":2,
         "questions":[
            {
               "question":"What is the greatest possible number of laps in a rally in which no checkpoint is checked into twice ? ",
               "questionNumber":6,
               "a":"4",
               "b":"5",
               "c":"6",
               "d":"7",
               "e":"8",
               "answer":"c"
            },
            {
               "question":"If a four - lap rally begins and ends at checkpoint U, and no checkpoint is passed twice, what checkpoint must end the second lap ? ",
               "questionNumber":7,
               "a":"V",
               "b":"W",
               "c":"X",
               "d":"Y",
               "e":"Z",
               "answer":"d"
            },
            {
               "question":"Which of the following is a complete and accurate list of possible second checkpoints in a rally beginning from checkpoint Y ? ",
               "questionNumber":8,
               "a":"T, X, Z",
               "b":"T, W, X, Z",
               "c":"T, V, W, X, Z",
               "d":"T, U, V, W, X, Z",
               "e":"T, U, V, W, X, Y, Z",
               "answer":"e"
            },
            {
               "question":"On a two - lap rally beginning at checkpoint Z,which checkpoint CANNOT be visited ? ",
               "questionNumber":9,
               "a":"T",
               "b":"U",
               "c":"V",
               "d":"W",
               "e":"Y",
               "answer":"a"
            },
            {
               "question":"Which of the following is a possible sequence of checkpoints to visit in a four-lap rally beginning at the checkpoint U?",
               "questionNumber":10,
               "a":"V, T, Y, W",
               "b":"V, W, Z, U",
               "c":"V, Y, X, W",
               "d":"W, V, T, X",
               "e":"W, X, Z, W",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 11-15",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":11,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":12,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":13,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":14,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":15,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 16 – 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":16,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":17,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":18,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":" There are seven pieces left on the chessboard: the White King, White Queen, White Knight, White Rook, Black King, Black Bishop, and Black Pawn. From the point of view of the white player,  The White Rook, White King and Black Pawn are nearer than the White Queen, while the Black Bishop, Black King, and White Knight are farther away than the White Queen.  The White Rook is in the same column as the White Knight, but nearer.   The Black King is in the same column as the Black Pawn, but farther away.  Twice as many pieces are to the right of the White Queen as are left of the White Queen  The diagonal from the Black Pawn, going left and away from the White player, passes through the White Rook, White Queen, and Black Bishop, in order from near to far.",
         "sectionNumberHeading":"QUESTIONS 19-23",
         "sectionNumber":5,
         "questions":[
            {
               "question":"White King lies in what direction from White Queen? ",
               "questionNumber":19,
               "a":"Toward the Black Player in the same column.",
               "b":"Away from the White Player in the same column",
               "c":"Toward the White Player and to the left",
               "d":"Toward the White player and to the right.",
               "e":"Away from the white player and to the right.",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that might lie to the right of the Black King in the same row",
               "questionNumber":20,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"a"
            },
            {
               "question":"Which of the following statement must be true?",
               "questionNumber":21,
               "a":"The White Rook is nearer to the White Player than the Black Pawn",
               "b":"The Black Pawn is nearer to the White Player than the White King",
               "c":"The White King is to the right of the Black Bishop, from the White Player's point of view.",
               "d":"The White Queen is to the right of the Black King, from the White player's point of view",
               "e":"The White Knight is to the left of the Black King, from the White Player's point of view",
               "answer":"e"
            },
            {
               "question":"How many of the pieces may be nearer to the Black player than the Black Bishop? ",
               "questionNumber":22,
               "a":"4",
               "b":"3",
               "c":"2",
               "d":"1",
               "e":"0",
               "answer":"c"
            },
            {
               "question":"What is the maximum number of pieces that can be left of the White Rook, from the White Player's point of view?",
               "questionNumber":23,
               "a":"0",
               "b":"1",
               "c":"2",
               "d":"3",
               "e":"4",
               "answer":"d"
            }
         ]
      }
   ]
   }
   H = {
   "typeKey":"H",
   "sections":[
      {
         "sectionQuestion":"At the Four Plus Two talks, the representatives of the United States, Great Britain, France, Spain, Egypt and, and Holland are seated around a round table. Each seat is next to two others and directly opposite one across the table. The seating is subject to the following conditions.The representatives of Egypt and Holland sit next to one another. The representative of France will not sit next to the representative of Egypt The representatives of the United States will not sit next to the representative of Spain.",
         "sectionNumberHeading":"QUESTIONS 1 – 3",
         "sectionNumber":1,
         "questions":[
            {
               "question":"If the representative of France sits directly across the table from that of Egypt, any of the following could be true EXCEPT",
               "questionNumber":1,
               "a":"the representative of the United States sits directly across from that of Great Britain.",
               "b":"the representative of Holland sits directly across from that of Spain",
               "c":"the representative of the United States sits next to that of Great Britain.",
               "d":"the representative of Holland sits next to that of Great Britain",
               "e":"the  representative of Spain sits next to that of Great Britain.",
               "answer":"d"
            },
            {
               "question":"If the representatives of the United States is directly across the table from the representative of Great Britain, representative of which two countries must sit on either side of the representative of Spain ?",
               "questionNumber":2,
               "a":"France and Great Britain",
               "b":"France and Egypt",
               "c":"The United States and Holland",
               "d":"Holland and Great Britain",
               "e":"Great Britain and Egypt",
               "answer":"a"
            },
            {
               "question":"If the representative of France sits next to that of Holland and the representative of the United States sits next to that of Egypt, representatives of what countries must sit on either side of the representative of Great Britain ?",
               "questionNumber":3,
               "a":"France and the United States",
               "b":"France and Egypt",
               "c":"France and Spain",
               "d":"The United States and Holland",
               "e":"The United States and Spain",
               "answer":"e"
            }
         ]
      },
      {
         "sectionQuestion":"The Basic College Council is made up of representatives from the departments in the various divisions. From the Science Division is one representative from each department of Chemistry, Mathematics, and Biology. The Social Science Division provides a representative each from History, Linguistics and Economics. A representative from Philosophy and one from Rhetoric serve for the Humanities Division.All Council Committees are made up entirely of Council members.Each Committee has exactly four members.Each Committee has at least one member from each Division.The representative from Chemistry will not serve on a Committee with the representative from Biology.The representatives from Mathematics and Economics always serve on the same Committees",
         "sectionNumberHeading":"Question 4 - 8",
         "sectionNumber":2,
         "questions":[
            {
               "question":"The representatives of which of the following groups of departments can serve together on a committee?",
               "questionNumber":4,
               "a":"Chemistry, Mathematics, History, Economics",
               "b":"Chemistry, Mathematics, History, Philosophy",
               "c":"Mathematics, Biology, Linguistics, Economics",
               "d":"Mathematics, Biology, Economics, Rhetoric",
               "e":"Biology, History, Economics, Rhetoric",
               "answer":"d"
            },
            {
               "question":"If both the representatives from the Humanities Division are on a committee, then the other members of the committee can be representatives of:",
               "questionNumber":5,
               "a":"Biology and History",
               "b":"Biology and Economics",
               "c":"Mathematics and History",
               "d":"Chemistry and Mathematics",
               "e":"Chemistry and Biology",
               "answer":"a"
            },
            {
               "question":"If the representative of Economics is on a committee, which groups of three might round out that committee?",
               "questionNumber":6,
               "a":"representatives of Chemistry, Mathematics and Biology",
               "b":"representatives of Chemistry, Biology and Rhetoric",
               "c":"representatives of Chemistry, Philosophy and Rhetoric",
               "d":"representatives of History, Economics and Philosophy",
               "e":"representatives of Mathematics, Philosophy, and Rhetoric",
               "answer":"e"
            },
            {
               "question":"If the representatives of Biology and Philosophy do not serve on a committee, representatives of both of which of the following pairs of departments must serve on a committee?",
               "questionNumber":7,
               "a":"Chemistry and Linguistics",
               "b":"Chemistry and Economics",
               "c":"Mathematics and History",
               "d":"Mathematics and Economics",
               "e":"History and Economics",
               "answer":"d"
            },
            {
               "question":"Which of the following is true?",
               "questionNumber":8,
               "a":"If the representative of Chemistry and Mathematics are on a committee, the representatives of Philosophy must also be on it",
               "b":"If the representative of Rhetoric is not on a committee, then the representatives of Mathematics and Biology must both be on it",
               "c":"If both Humanities representatives are on a committee, then the representative of Chemistry cannot be on it",
               "d":"If the representative of neither Mathematics nor Philosophy Is on a committee, then the representative of Economics must be on it",
               "e":"If the representative of neither Biology nor Economics is on a committee, then the representative of Linguistics cannot be on it",
               "answer":"c"
            }
         ]
      },
      {
         "sectionQuestion":"There were five students in the professional ethics seminar.Two of them were female, the others male. Two of the men were undergraduates.One of the females was in graduate school. One of the remaining students was in a professional school and the other was an Undergraduate. Two of the students were going into the ministry, two into medicine and the fifth into law.The two students going into the ministry are the same sex ",
         "sectionNumberHeading":"QUESTION 9-13",
         "sectionNumber":3,
         "questions":[
            {
               "question":"If the student in the professional school is a female ministry student, which of the following statements must be true ? ",
               "questionNumber":9,
               "a":"The student in graduate school is a ministry student",
               "b":"The medical students are both in graduate students",
               "c":"The law student is female",
               "d":"The medical students are female",
               "e":"The other ministry student is male",
               "answer":"a"
            },
            {
               "question":"If the medical students are of different sexes and the ministry students have the same status, then the student in graduate school must be ",
               "questionNumber":10,
               "a":"a medical student",
               "b":"a ministry student",
               "c":"either a medical student or a law student",
               "d":"either a medical student or a ministry student",
               "e":"either a ministry student or a law student",
               "answer":"c"
            },
            {
               "question":"If one of the female students is a medical student and in a professional school, which of the following statements must be true ? ",
               "questionNumber":11,
               "a":"The male students have different academic statuses",
               "b":"The medical students have the same academic status",
               "c":"The law student is either in graduate school or in a professional school",
               "d":"The law student is either in a professional school or in an undergraduate school",
               "e":"The law student is either an undergraduate or in a graduate school",
               "answer":"e"
            },
            {
               "question":"If the law student is female, which of the following must be true ?",
               "questionNumber":12,
               "a":"The ministry students are both male.",
               "b":"All male students are undergraduates",
               "c":"One of the female students has the same status as do two of the male students",
               "d":"The law student is a graduate",
               "e":"One of the medical students is in a professional school",
               "answer":"a"
            },
            {
               "question":"If the two Students going into the Ministry have the same academic status, which of the following statements must be true ",
               "questionNumber":13,
               "a":"The ministry students are both male",
               "b":"The law student is female",
               "c":"The ministry students are both female",
               "d":"Both females are going into law",
               "e":"One of the undergraduates is going into ministry",
               "answer":"a"
            }
         ]
      },
      {
         "sectionQuestion":"The Weymouth Ferry was fully loaded except for space for six tons of deck cargo. The purser had ten crates that had not yet been brought abroad.  One crate weighed 1,000 pounds.  Two crates weighed a ton each.  Three crates each weighed a ton and a half.  The last Four crates each weighed two tons.  1ton = 2,000pound",
         "sectionNumberHeading":"Question 14 - 18",
         "sectionNumber":4,
         "questions":[
            {
               "question":"What is the maximum number of these crates that can be stowed in the space available for deck cargo?",
               "questionNumber":14,
               "a":"3",
               "b":"4",
               "c":"5",
               "d":"6",
               "e":"7",
               "answer":"c"
            },
            {
               "question":"What is the minimum number of crates that can be taken abroad and exactly fill the available deck cargo space?",
               "questionNumber":15,
               "a":"2",
               "b":"3",
               "c":"4",
               "d":"5",
               "e":"6",
               "answer":"b"
            },
            {
               "question":"If the three ton-and-a-half crates are taken abroad,what is the maximum number of additional crates that can be stowed in the available space?",
               "questionNumber":16,
               "a":"5",
               "b":"4",
               "c":"3",
               "d":"2",
               "e":"1",
               "answer":"d"
            },
            {
               "question":"If the 1,000-pound crate costs $10 to ship,each one-ton crate costs $20, each ton-and-a-half crate costs $30 and each two-ton crate $25, what is the maximum shipping charge the purser can collect from the available tonnage?",
               "questionNumber":17,
               "a":"$75",
               "b":"$90",
               "c":"$110",
               "d":"$120",
               "e":"$150",
               "answer":"d"
            },
            {
               "question":"If the 1,000-pound crate costs $10 to ship,each one-ton crate costs $20, each ton-and-a-half crate $30 and each two-ton crate $25, how much shipping charge is the purser guaranteed if he uses at least half the available tonnage?",
               "questionNumber":18,
               "a":"$40",
               "b":"$45",
               "c":"$50",
               "d":"$55",
               "e":"$60",
               "answer":"b"
            }
         ]
      },
      {
         "sectionQuestion":"Seated at a department meeting, from left to right: Ade, Bayo, Chike, Dauda, Emeka. Each of them belonged to exactly two teams Marketing, Sales, Operations, Admin and IT. The following conditions held for the five men.The teams fall into three groups: Composed of Marketing and Sales Composed of Admin and IT Composed of Operations alone The two teams each person belongs to, come from two different groups. No person\n belonged to any team to which a man sitting next to him belonged. Bayo belonged to the Operations and IT teams.Emeka belonged to the Marketing team.",
         "sectionNumberHeading":"Question 19-23",
         "sectionNumber":19,
         "questions":[
            {
               "question":"Farouk sat down just to the right of Emeka. Farouk is in the Operations and Admin teams, but the same conditions continue to apply to men at the table. Which of the following must be true?",
               "questionNumber":19,
               "a":"Chike belongs to Marketing and Operations",
               "b":"Chike belongs to Sales and Admin",
               "c":"Dauda belongs to Sales and Operations",
               "d":"Dauda belongs to the IT team",
               "e":"Emeka belongs to Marketing and Admin",
               "answer":"c"
            },
            {
               "question":"If Chike is in the Sales team, which of the following must be true?",
               "questionNumber":20,
               "a":"Chike is in the IT team",
               "b":"Dauda is in the IT team",
               "c":"Dauda is in Operations and neither an IT or Admin",
               "d":"Emeka is in Operations and neither an IT or Admin",
               "e":"Emeka belongs to the IT team",
               "answer":"b"
            },
            {
               "question":"Which of the following is a possible combination of memberships for Dauda?",
               "questionNumber":21,
               "a":"Sales and Operations",
               "b":"Operations and Admin",
               "c":"Marketing and IT",
               "d":"Admin and Marketing",
               "e":"Sales and Admin",
               "answer":"a"
            }
         ]
      }
   ]
   }
   

    // eslint-disable-next-line
  public async up(queryRunner: QueryRunner): Promise<any> {
     const questionTypeRepository = getRepository('question_type');
     await questionTypeRepository.save(this.A);
     await questionTypeRepository.save(this.B);
     await questionTypeRepository.save(this.C);
     await questionTypeRepository.save(this.D);
     await questionTypeRepository.save(this.E);
     await questionTypeRepository.save(this.F);
     await questionTypeRepository.save(this.G);
     await questionTypeRepository.save(this.H);
    }

    // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
