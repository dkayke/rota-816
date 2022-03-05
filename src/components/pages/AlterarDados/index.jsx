import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./style.css";

class AlterarDados extends Component {

    render() {
        const ehPaginaPrincipal = false;

        return (
            <>
                <Link to="/">Perfil</Link>
                <hr />

                <h3>Alterar Dados</h3>
                <Link to="../">Perfil</Link>
                <Link to="./">Inicio</Link>
                <Link to="alterar-email">Alterar E-mail</Link>
                <Link to="alterar-senha">Alterar Senha</Link>

                <div className="conteudo">
                    {ehPaginaPrincipal && <p>Nenhuma sub página foi renderizada</p>}                    <Outlet />
                </div>
            </>
        );
    }
}

export default AlterarDados;