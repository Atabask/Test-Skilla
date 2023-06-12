import { useState } from 'react';
import "./button.styles.css"


export const Button = ({children, ...props}) => {
    const [active, setActive] = useState(false)

    const changeClass = () => {
        setActive(!active)
    }

    return (
        <button 
        {...props} 
        className={ active === false ? 'btn' : 'active'}
        onClick={() => changeClass()}
        >
            {children}
        </button>
    )
}