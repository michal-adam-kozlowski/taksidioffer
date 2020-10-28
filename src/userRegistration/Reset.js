
import React from 'react';
import './Reset.scss';
import { Link } from 'react-router-dom';

class Reset extends React.Component {
    render() {
        return (
            <div id="reset">
                <div className="container">
                    <div class="firstPart">
                        <div className="box">
                            <h3>Resetuj hasło</h3>
                            <p>Jeśli nie pamiętasz hasła do swojego konta i chcesz je zresetować, wprowadź swój adres e-mail do pola poniżej a następnie postępuj zgodnie z instrukcjami.</p>
                            <div className="form">
                                <form action="dodaj.php" method="POST">
                                    <p>E-mail</p>
                                    <input type="email" placeholder="Twój adres email"></input>
                                    <div className="btnBox"><button type="submit" className="btn">Resetuj hasło</button></div>
                                    <div className="linkPassword"><Link to="/Rejestracja" >Utwórz nowe konto<i className="arrow"></i></Link></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="btnBox2"><Link to="/Zaloguj"><button className="btn">Wróć do logowania</button></Link></div>
                </div>
            </div>
        );
    }
}

export default Reset
