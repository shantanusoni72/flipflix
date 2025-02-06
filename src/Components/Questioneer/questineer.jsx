import { useState } from 'react';
import './style.css';

export default function Questineer() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const questions = {
        'title': 'Frequency Asked Questions...',
        'cards': [
            {
                'question': 'What is Openflix?',
                'answer': 'Openflix is an open-source web application designed for movie and TV show enthusiasts. It provides a sleek and interactive platform where users can explore detailed information about various movies and TV shows, including reviews, ratings, and more.'
            },
            {
                'question': 'What can I do with this application?',
                'answer': 'With Openflix, you can. Browse through a wide collection of movies and TV shows, Search for specific titles based on your preferences, View detailed reviews, descriptions, and ratings for each movie or show and Experience a user-friendly interface that makes entertainment exploration simple and enjoyable.'
            },
            {
                'question': 'Which tech stack is used here?',
                'answer': 'Openflix is built using modern technologies to ensure a responsive and dynamic experience: HTML and CSS for the basic structure and styling of the application, Tailwind CSS for advanced, responsive design and utility-first styling and React for creating a fast, dynamic, and interactive user interface.'
            },
            {
                'question': 'How can I contribute to this project?',
                'answer': 'You can contribute to Openflix by: Visiting the project’s GitHub repository (link provided), Forking the repository and cloning it to your local machine, Reviewing the project’s README file for guidelines on contributing, Submitting bug fixes, implementing new features, or improving the documentation via pull requests, Engaging with the community by providing feedback or reporting issues and Your contributions can make Openflix even better for users worldwide!'
            }
        ]
    }
    return (
        <div className='questioneer-container'>
            <div className="questioneer">
                <h1>{questions.title}</h1>
                {questions.cards.map((item, index) => (
                    <div key={index}>
                        <button
                            className="question-dropdown"
                            onClick={() => toggleAnswer(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span>{item.question}</span>
                            <i className={`fa fa-angle-${activeIndex === index ? "down" : "right"}`} aria-hidden="true"></i>
                        </button>
                        <div className={`answer ${activeIndex === index ? "" : "disabled"}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}