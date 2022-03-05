import { Component } from 'react';
import Button from '../../elements/Button';
import "./style.css";

class AlterarSenha extends Component {

    render() {
 
        function recuperar(event) {
            console.log(event);
        }

        return (
            <>
                <p>Mudar de senha</p>
                <p>Sua senha é ***********</p>
                <p>Você pode alterar clicando no botão abaixo</p>


                <Button type="reset" className="alterar" onClick={recuperar}>Alterar</Button>

                <Button type="reset" />
            </>
        )
    }
}

export default AlterarSenha;