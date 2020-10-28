
import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div id="contactContainer">
            <div className="wrapper">
                <div className="box">
                    <h1>Masz pytania?</h1>
                    <div className="contact">
                        <p>info@taksidi.pl</p>
                        <p>+48 530 033 292</p>
                    </div>
                    <div className="adress">
                        <p>ul. Wołodyjowskiego 40</p>
                        <p>02-697 Warszawa</p>
                    </div>
                    <div className="openingHours">
                        <p>Poniedziałek - piątek 10.00 - 15.00</p>
                    </div>
                    <button className="btn">Sprawdź FAQ</button>
                </div>
                <div className="form">
                    <form action="dodaj.php" method="POST">
                        <label>Twój adres e-mail</label>
                        <input type="email" placeholder="Twój adres e-mail"></input>
                        <label>Treść wiadomości</label>
                        <textarea placeholder="W czym możemy Ci pomóc?" rows="8" cols="50"></textarea>
                        <button type="submit" className="btn">Wyślij wiadomość</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
