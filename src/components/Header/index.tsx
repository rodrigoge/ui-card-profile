import './styles.scss'
import Avatar from '../../assets/img/profile.png'

export default function Header() {
    return (
        <header>
            <img src={Avatar} alt="Profile avatar" />
            <span>Rodrigo Gouveia</span>
        </header>
    );
}