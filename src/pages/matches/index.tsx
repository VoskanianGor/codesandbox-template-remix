
import styles from './index.css'
import {Button, ButtonStyles} from '~/components/button'

export const StatsStyles = () => [{rel: 'stylesheet', href: styles}, ...ButtonStyles()]

export const Matches = () => {
    return <div className='matches'>
        matches
        <Button>matches</Button>
        </div>
}
