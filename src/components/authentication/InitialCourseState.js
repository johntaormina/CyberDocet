

const InitialCourseState = {
    Course1: {
        title: 'Introduction',
        urlID: 'introduction',
        Sub1: {
            name: 'Sub1',
            title: 'Introduction',
            completed: false,
            urlID:'introduction-introduction',
            course: 'Course1',
            videoID: 'vvsfM5Dixow'
        }
    },
    Course2: {
        title: 'Phishing',
        urlID: 'phishing',
        Sub1: {
            name: 'Sub1',
            title: 'What is Phishing?',
            completed: false,
            urlID: 'phishing-part1',
            course: 'Course2',
            videoID: 'd1wBvHoW20g',
            sectionQuiz: {


              "quizTitle": "What is Phishing? Quiz",
              "quizSynopsis": "An introductory quiz to phishing",
              "questions": [
                {
                  "question": "Phishing is ___",
                  "questionType": "text",
                  "answers": [
                    "An act in which a cybercriminal attempts to trick you into providing \n them valuable information",
                    "Software downloaded onto your computer designed to disrupt, damage, or gain access to your computer",
                  ],
                  "correctAnswer": "1",
                  "messageForCorrectAnswer": "Correct answer. Good Job.",
                  "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                  "explanation": "Remember that phishing is the act in which someone attempts to gain information from you by any means. Malware downloaded onto your computer could be the result of a successful phishing attempt in which the criminal now has access to your computer."
                },
                {
                  "question": "Clicking a suspicious link on your home computer can put your company's data at risk.",
                  "questionType": "text",
                  "answers": [
                    "True",
                    "False"
                  ],
                  "correctAnswer": "1",
                  "messageForCorrectAnswer": "Correct answer. Good job.",
                  "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                  "explanation": "Once the criminal has access to your computer, he or she has the ability to access passwords, files, and other information on your computer. They can even move to other computers using the same network as you. This can and most likely will cause damage to your company's valuble information if left unhandled."
                },
                {
                  "question": "As companies start to require more phishing awareness training, the number of phishing attempts has gone down.",
                  "questionType": "text",
                  "answers": [
                    "True",
                    "False"
                  ],
                  "correctAnswer": "2",
                  "messageForCorrectAnswer": "Correct answer. Good job.",
                  "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                  "explanation": "The number of phishing attempts is only rising and the only way to protect yourself is with good internet practice!"
                },
                {
                  "question": "What is an example of a Too Good To Be True phishing attempt?",
                  "questionType": "text",
                  "answers": [
                    "An email detailing a recent payment you have made, asking for your home address",
                    "A text message from an unknown number stating a family member is in the hospital and needs your social security number",
                    "A message on Facebook from a lottery company stating you won $5000 dollars and sends you a link to claim your reward",
                    "An attachment from your bosses email that he asks you too download for a new product proposal at work"
                  ],
                  "correctAnswer": "3",
                  "messageForCorrectAnswer": "Correct answer. Good job.",
                  "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                  "explanation": "A phishing attempt does not always have to be delivered by email. It can be through a text message, social media platforms, and more."
                }
              ]


            }
        },
        Sub3: {
            title: 'Phishing Quiz',
            completed: false,
            urlID: 'phishing-quiz1',
            course: 'Course2',
            name: 'Sub3',
            sectionQuiz:  {
                "quizTitle": "Phishing Final Quiz",
                "quizSynopsis": "Test your knowledge about Phishing with this quiz!!!!",
                "questions": [
                  {
                    "question": "Do you use the same password for multiple accounts?",
                    "questionType": "text",
                    "answers": [
                      "Yes",
                      "No",
                    ],
                    "correctAnswer": "2",
                    "messageForCorrectAnswer": "Correct answer. Good Job.",
                    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                    "explanation": "Never use the same password for more than one account. After a data breach, hackers will try user/pass combos on popular sites. Also make sure you are using strong passwords that you change regularly!"
                  },
                  {
                    "question": "Do you hover your mouse over links and see where they go?",
                    "questionType": "text",
                    "answers": [
                      "Yes",
                      "No"
                    ],
                    "correctAnswer": "1",
                    "messageForCorrectAnswer": "Correct answer. Good job.",
                    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                    "explanation": "Always hover over hyperlinks to make sure they go where you expect. When in doubt, go directly to the source rather than clicking on an unknown link."
                  },
                  {
                    "question": "Do you ever open email attachments from people you do not know?",
                    "questionType": "text",
                    "answers": [
                      "Yes",
                      "No"
                    ],
                    "correctAnswer": "2",
                    "messageForCorrectAnswer": "Correct answer. Good job.",
                    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                    "explanation": "Be cautious with unknown emails. Verify the sender by another means before taking any action."
                  },
                  {
                    "question": "Do you respond to emails saying you've won their sweepstakes?",
                    "questionType": "text",
                    "answers": [
                      "Yes",
                      "No",
                    ],
                    "correctAnswer": "2",
                    "messageForCorrectAnswer": "Correct answer. Good job.",
                    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                    "explanation": "Whether it's a sweepstakes or some other lavish prize, phishing emails often sound too good to be true."
                  }
                ]
              } 

        },
        Sub2: {
            name: 'Sub2',
            title: 'Phishing Examples',
            completed: false,
            urlID: 'phishing-part2',
            course: 'Course2',
            videoID: 'BIkhkjtHOuw',
        }
    },
    Course3: {
      title: 'Internet Etiquette',
      urlID: 'internet',
      Sub1: {
        name: 'Sub1',
        title: 'Password Management',
        completed: false,
        urlID: 'internet-password',
        course: 'Course3',
        videoID: 'PmXc5sSkpxg',
    }
    }
}

export default InitialCourseState;