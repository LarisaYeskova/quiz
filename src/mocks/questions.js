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
        type: questionTypes.multiChoiceImg
    },
    {
        title: 'Have you ever worn braces?',
        options: [
            {
                text: 'yes',
            },
            {
                text: 'no',
            }
        ],
        type: questionTypes.closed
    },
    {
        title: 'Do you have a permanent retainer?',
        options: [
            {
                text: 'yes',
            },
            {
                text: 'no',
            }
        ],
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
        type: questionTypes.oneChoice
    },
    {
        title: 'Is there anything else you want to know about Tender?',
        subTitle: 'Choose any that apply.',
        options: [
            {
                checkBox: true,
                text: 'Insurance overview',
            },
            {
                checkBox: true,
                text: 'Photos of patient results',
            },
            {
                checkBox: true,
                text: 'Cost breakdown',
            },
            {
                checkBox: true,
                text: 'How candid is diffrent from competitors',
            },
            {
                checkBox: true,
                text: 'How aligners are made',
            },
            {
                checkBox: true,
                text: 'How Tender works',
            },
            //input
        ],
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
        type: questionTypes.oneChoice
    },

]

