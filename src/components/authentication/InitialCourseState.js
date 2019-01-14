

const InitialCourseState = {
    Introduction: {
        title: 'Introduction',
        urlID: 'introduction',
        Sub1: {
            name: 'Sub1',
            title: 'Introduction',
            completed: false,
            urlID:'introduction-introduction',
            course: 'Introduction',
            videoID: 'vvsfM5Dixow'
        }
    },
    Phishing: {
        title: 'Phishing',
        urlID: 'phishing',
        Sub1: {
            name: 'Sub1',
            title: 'What is Phishing?',
            completed: false,
            urlID: 'phishing-part1',
            course: 'Phishing',
            videoID: '9TRR6lHviQc'
        },
        Sub2: {
            title: 'Phishing Quiz',
            completed: false,
            urlID: 'phishing-quiz1',
            course: 'Phishing',
            name: 'Sub2',
            sectionQuiz:  {
                "quizTitle": "React Quiz Component Demo",
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

        }
    }
}

export default InitialCourseState;