import Crowded from "../assets/crowded.gif"
import Discolored from "../assets/discolored.gif"
import Spaced from "../assets/spaced.gif"
import Protruding from "../assets/protruding.gif"

export const questionTypes = {
    closed: 'Closed questions',
    multiChoice: 'multiChoice',
    oneChoice: 'oneChoice',
    multiChoiceImg: 'multiChoiceImg'
}

export const QUESTIONS = [
    {
        title: 'How would you describe your teeth?',
        subTitle: 'Choose any that apply.',
        options: [
            {
                image: Crowded,
                text: 'Crowded',
            },
            {
                image: Discolored,
                text: 'Discolored',
            },
            {
                image: Spaced,
                text: 'Spaced',
            },
            {
                image: Protruding,
                text: 'Protruding',
            },
        ],
        answer: [],
        type: questionTypes.multiChoiceImg
    },
    {
        title: 'Have you ever worn braces?',
        options: [
            {
                text: 'Yes',
            },
            {
                text: 'No',
            }
        ],
        answer: '',
        type: questionTypes.closed
    },
    {
        title: 'Do you have a permanent retainer?',
        options: [
            {
                text: 'Yes',
            },
            {
                text: 'No',
            }
        ],
        answer: '',
        type: questionTypes.closed
    },
    {
        title: 'How soon do you want to get started?',
        options: [
            {
                text: 'Right away',
            },
            {
                text: 'A few weeks',
            },
            {
                text: 'A few months',
            },
            {
                text: 'Not sure',
            }
        ],
        answer: '',
        type: questionTypes.oneChoice
    },
    {
        title: 'How did you hear about tender?',
        options: [
            {
                text: 'Social media',
            },
            {
                text: 'Friends or Family',
            },
            {
                text: 'Internt Search',
            },
            {
                text: 'Podcast',
            },
            {
                text: 'Other',
            },
            {
                text: 'Mailer',
            },
            {
                text: 'My dentist',
            },
            {
                text: 'TV',
            },
            {
                text: 'Influencer',
            },
        ],
        answer: '',
        type: questionTypes.oneChoice
    },
    {
        title: 'Is there anything else you want to know about Tender?',
        subTitle: 'Choose any that apply.',
        hasCheckBox: true,
        hasCustomAnswer: true,
        options: [
            {
                checkBox: false,
                text: 'Insurance overview',
            },
            {
                checkBox: false,
                text: 'Photos of patient results',
            },
            {
                checkBox: false,
                text: 'Cost breakdown',
            },
            {
                checkBox: false,
                text: 'How tender is diffrent from competitors',
            },
            {
                checkBox: false,
                text: 'How aligners are made',
            },
            {
                checkBox: false,
                text: 'How Tender works',
            },
            //input
        ],
        answer: [],
        type: questionTypes.multiChoice
    },
    {
        title: 'How old are you?',
        options: [
            {
                text: 'Under 13',
            },
            {
                text: '13-15',
            },
            {
                text: '16-17',
            },
            {
                text: '18-25',
            },
            {
                text: '26-35',
            },
            {
                text: '36-45',
            },
            {
                text: '46+',
            },
        ],
        answer: '',
        type: questionTypes.oneChoice
    },

]

