import styles from './Button.module.css';

function Button (props) {
    return <button onClick={props.passedInProp} className={styles.btn}>click</button>
}

export default Button