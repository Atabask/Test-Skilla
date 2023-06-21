import "./select.styles.css"


export const Select = ({options}) => {


    return (
        <select>
            {options.map (option => 
                <option  key={option.id} >{option.name}</option>
                )}
        </select>
    )
}