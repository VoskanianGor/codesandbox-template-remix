import styles from './index.css'

export const ButtonStyles = () => [{ rel: "stylesheet", href: styles }]

export const Button = ({children}) => {
    
    return (
        <button className="button">
            {children}
        </button>
    )
}