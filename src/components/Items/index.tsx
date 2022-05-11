import './styles.scss'

import { FiUser, FiMessageSquare, FiSettings, FiHelpCircle } from 'react-icons/fi'
import { RiNotification3Line } from 'react-icons/ri'
import { CgLogOut } from 'react-icons/cg'
//import { Link } from 'react-router-dom';

export default function Items() {
    return (
        <ul>
            <li>
                <a href="">
                    <FiUser className='icon' />
                    <span>Meu Perfil</span>
                </a>
            </li>

            <li>
                <a href="">
                    <FiMessageSquare className='icon' />
                    <span>Mensagens</span>
                </a>
            </li>

            <li>
                <a href="">
                    <RiNotification3Line className='icon' />
                    <span>Notificações</span>
                </a>
            </li>

            <li>
                <a href="">
                    <FiSettings className='icon' />
                    <span>Configurações</span>
                </a>
            </li>

            <li>
                <a href="">
                    <FiHelpCircle className='icon' />
                    <span>Ajuda</span>
                </a>
            </li>

            <li>
                <a href="">
                    <CgLogOut className='icon' />
                    <span>Sair</span>
                </a>
            </li>

        </ul>
    );
}