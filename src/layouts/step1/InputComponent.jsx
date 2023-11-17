import classes from "../step1/step1.module.css";

const InputComponent = ({name,title,value,type,handleChange,error,placeholder}) =>{

    const onChange = (e) => {
     handleChange(e.target.value)
    }
    return (
        <div className={classes.control}>
              <label>{title}</label>
              <input
                value={value}
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                placeholder={placeholder}
              />
              {error && (
                <p style={{ color: "red", fontSize: "10px" }}>
                  {error}
                </p>
              )}
        </div> 
    )
}

export default InputComponent