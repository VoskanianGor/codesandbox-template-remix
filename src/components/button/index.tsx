import styles from './index.css'

export const links = () => [{ rel: "stylesheet", href: styles }]

const Button = ({children}) => {
    
    return (
        <button className="button">
            {children}
        </button>
    )
}

export default Button