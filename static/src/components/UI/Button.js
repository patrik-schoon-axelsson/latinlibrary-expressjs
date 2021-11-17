
const Button = (props) => {

    return (
        <button className={`btn ${props.btnCss}`} onClick={props.onClick} type={props.type}>{props.btnLabel}</button>
    )
};

export default Button