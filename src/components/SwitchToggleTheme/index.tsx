import React, { useEffect, useState } from 'react'
import './styles.scss'

export default function SwitchToggleTheme() {
    const [themeLocalStorage] = useState(localStorage.getItem('themeStorage'));
    const [switchComponent, setSwitchComponent] = React.useState<boolean>(true);

    const toggleChecked = () => {
        if (!switchComponent) {
            changeTheme('dark');
            localStorage.setItem('themeStorage', 'dark');
        } else {
            changeTheme('light');
            localStorage.setItem('themeStorage', 'light');
        }

        setSwitchComponent(value => !value)
    }

    async function changeTheme(theme: String) {
        if (theme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    async function verifyBrowserTheme() {
        if (themeLocalStorage === 'dark') {
            setSwitchComponent(true);
            changeTheme('dark');
            localStorage.setItem('themeStorage', 'dark');
        } else {
            setSwitchComponent(false);
            changeTheme('light');
            localStorage.setItem('themeStorage', 'light');
        }
    }

    useEffect(() => {
        verifyBrowserTheme();
    }, [themeLocalStorage]);

    return (
        <div className="container">
            <div className="toggle">
                <label className='container'>
                    <input
                        type="checkbox"
                        checked={switchComponent}
                        onChange={toggleChecked}
                    />
                    <i></i>
                    <span></span>
                </label>
            </div>
        </div>
    )
}