
import styles from './index.css'
import {Button, ButtonStyles} from '~/components/button'

export const StatsStyles = () => [{rel: 'stylesheet', href: styles}, ...ButtonStyles()]

const Stats = () => {
    return <div className='stats'>
        stats
        <Button>my stats</Button>
        </div>
}

export default Stats