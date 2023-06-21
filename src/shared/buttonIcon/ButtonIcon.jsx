import "./ButtonIcon.styles.css"



export const ButtonIcon = ({children, ...props }) => {


    return (
        <button className="btn-icon" {...props} >
            {children}
        </button>
    )
}