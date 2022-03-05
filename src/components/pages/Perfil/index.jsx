import { Component } from 'react';
import { Link } from 'react-router-dom';

class Perfil extends Component {

    render() {
        return (
            <>
                <Link to="/alterar-dados">Alterar Dados</Link>
                <hr/>
                
                <h3>Perfil</h3>
                <p>Dannyel Kayke</p>
                <p>dannyel_kayke@hotmail.com</p>
                <p>18/03/1997</p>
            </>
        );
    }
}

export default Perfil;