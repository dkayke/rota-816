import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Perfil from "./components/pages/Perfil";
import AlterarDados from './components/pages/AlterarDados';
import AlterarEmail from './components/pages/AlterarEmail';
import AlterarSenha from './components/pages/AlterarSenha';
import NotFound from './components/pages/NotFound';

class RootRouters extends Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Perfil />} />

                        <Route path="/alterar-dados" element={<AlterarDados />}>
                            <Route path="alterar-email" element={<AlterarEmail />} />
                            <Route path="alterar-senha" element={<AlterarSenha />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default RootRouters;