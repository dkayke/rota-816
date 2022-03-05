import { Component } from 'react';

class AlterarEmail extends Component {

    render() {
        return (
            <>
                <p>Alteração de e-mail</p>
                <input type="text" value="dannyel_kayke@hotmail.com" />
                <button type="button">Alterar</button>
            </>
        )
    }
}

export default AlterarEmail;