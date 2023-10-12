// Import
import logo from './images/logo.png'
import background_image from './images/background.jpg'
import section_1 from './images/section1.png'
import section_2 from './images/section2.jpg'
import section_3 from './images/section3.png'

// Landing Page
const landing_page = {
    'logo': logo,
    'background_image': background_image,
    'title': 'Unlimited movies, TV shows and more.',
    'subtitle': 'Watch anywhere. Cancel anytime. Ready to watch? Click on the watch button',
    'watch_button': 'Watch',
    // Sections
    'sections': [
        {
            'image': section_1,
            'title': 'Enjoy on your TV.',
            'subtitle': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
        },
        {
            'image': section_2,
            'title': 'Download your shows to watch offline.',
            'subtitle': 'Save your favourites easily and always have something to watch.'
        },
        {
            'image': section_3,
            'title': 'Watch everywhere.',
            'subtitle': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        }
    ],
    // FAQs
    'faq': {
        'title': 'Frequently Asked Questions',
        'watch': {
            'title': 'Ready to watch? Click on the watch button below.',
            'btn_text': 'Watch Now'
        },
        'content': [
            {
                'question': {
                    'title': 'What is Openflix?',
                    'content': 'Openflix is a netflix-inspired web application where users can browse, search and see reviews of movies and TV shows.'
                }
            }
        ]
    },
    // Footer
    'footer': {
        'title': 'Openflix Global'
    }
}

export default { landing_page }