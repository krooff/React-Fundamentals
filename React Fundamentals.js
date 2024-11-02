import React from 'react';
import './Fundamentals App.css'; // CSS file for styling

// Header Component
const Header = () => {
    return (
        <header className="header">
            <div className="header-overlay">
                <h1>Kyle Rooffener</h1>
            </div>
        </header>
    );
};

// About Component
const About = () => {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>
            Past
I started my professional career on a path in tech that allowed me to work with my hands, utilizing an associate degree in Electrical Engineering. Though it didn’t go as planned it did strengthen my math and problem solving as well as familiarize me with technical layouts and blueprints. Following my minute education, I found work as an Aerosol Formulation Technician. To secure a more advantageous career I transferred into Sewer and Utility installation Construction.
 
Future
All the experience I've gained has led me back to where I started. I still see my future in the tech field. Utilizing my keyboard instead of a soldering gun. I’m eager to hone the new skills I've developed and expand my knowledge base with more programming.

            </p>
        </section>
    );
};

// Contact Component (Class Component)
class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <h2>Contact Information</h2>
                <p>Email: krooff1@gmail.com</p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/kyle-rooffener">My Profile</a>
                </p>
            </section>
        );
    }
}

// App Component
const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Contact />
        </div>
    );
};

export default App;
