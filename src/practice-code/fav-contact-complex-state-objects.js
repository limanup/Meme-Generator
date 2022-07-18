import React from "react";
import Star from './fav-contact-setting-state-from-child-components-Count';

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

    function toggleFavorite() {
        setContact((prevContact) => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite,
        }));
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    {/* pass function toggleFavorite to child component Star through props.handleClick */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    );
}
