
import React from 'react';
import './Registration.scss';
import { Link } from 'react-router-dom';
import politykaPrywatnosci from './documents/polityka-prywatnosci.pdf';
import regulaminTaksidi from './documents/regulamin-taksidi.pdf';


class PasswordField extends React.Component {
    state = {
        type: 'password',
    }

    handleClick = () => this.setState(({ type }) => ({
        type: type === 'password' ? 'text' : 'password'
    }))

    render() {
        return (
            <div className="passwordBox"><input type={this.state.type} name="password" id="password" placeholder="Wpisz hasło"></input>
                <span onClick={this.handleClick}>{this.state.type === 'password' ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}</span></div>
        )
    }
}

class ShowPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 'null'
        }
    }

    render() {
        return (
            <div>
                <PasswordField />
            </div>
        )
    }
}

export { ShowPassword }



class Registration extends React.Component {


    render() {
        return (

            <div id="registration">

                <div className="container">
                    <div className="box">
                        <h3>Zarejestruj się</h3>
                        <div className="form">
                            <form action="dodaj.php" method="POST">
                                <p>E-mail</p>
                                <input type="email" placeholder="Twój adres email"></input>
                                <p>Hasło</p>
                                <ShowPassword />

                                <div className="agree">
                                    <div><input type="checkbox" value="checkbox"></input>
                                        <p className="textSmall">Zapoznałem się z <a href={politykaPrywatnosci} target="_blank">Polityką Prywatności </a>
       i akceptuję <a href={regulaminTaksidi} target="_blank">Regulamin Strony</a></p></div>
                                    <div><input type="checkbox" value="checkbox"></input>
                                        <p className="textSmall">Wyrażam zgodę na otrzymywanie od Taksidi Sp. z o.o. z siedzibą w Górze drogą elektroniczną informacji handlowej (newsletter) w celu przedstawienia mi ofert organizowanych wyjazdach oraz eventach i promocjach.</p></div>
                                </div>
                                <div className="btnBox"><button type="submit" className="btn">Zarejestruj się</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="box two">
                        <h3>Jesteś już zarejestrowany?</h3>
                        <div className="btnBox"><Link to="/Zaloguj"><button type="submit" className="btn">Zaloguj się</button></Link></div>
                        <div className="redBox">
                            <p className="infoText">Uwaga! Masz konto na The Boat Trip?</p>
                            <p>Jeżeli tak, to skorzystaj z opcji <Link to="/Zresetuj-hasło">zapomniałem hasło</Link> podając ten sam email. Konta na Taksidi i na The Boat Trip są połączone. Jedynie w ten sposób poprawnie naliczą Ci się zniżki lojalnościowe na Taksidi.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registration
