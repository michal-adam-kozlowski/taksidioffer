
import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';


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


class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <div className="container">
                    <div className="box one">
                        <div className="greenBox">
                            <p className="infoText">Czy masz już konto na The Boat Trip lub Taksidi?</p>
                            <p>Do złożenia rezerwacji konieczne jest posiadanie konta, ale nie martw się, jeżeli jeszcze go nie masz - po drodze zapytamy Cię o wszystkie dane niezbędne do jego utworzenia.</p>
                        </div>
                    </div>
                    <div className="box two">
                        <h3>Zaloguj się</h3>
                        <div className="form">
                            <form action="dodaj.php" method="POST">
                                <p>E-mail</p>
                                <input type="email" placeholder="Twój adres email"></input>
                                <p>Hasło</p>
                                <ShowPassword />
                                <div className="linkPassword"><Link to="/Zresetuj-hasło">Nie pamiętasz hasła?<i className="arrow"></i></Link></div>
                                <div className="btnBox"><button type="submit" className="btn">Zaloguj się</button></div>
                            </form>
                            <div className="btnBox2"><Link to="/Rejestracja"><button type="submit" className="btn">Nie mam konta</button></Link></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login
