import './styles.scss'
import Avatar from '../../assets/img/profile.jpg'

type CardProps = {
    children: React.ReactNode
}

export default function Header(props: CardProps) {
    return (
        <header>
            <img src={Avatar} alt="Profile avatar" />
            <span>Rodrigo Gouveia</span>
            {props.children}
        </header>
    );
}