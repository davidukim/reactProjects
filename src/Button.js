import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button(props) {
    return <button className={styles.btn} text = {props.text}>{props.text? props.text : "default text"}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button