import React from 'react';

const Form = ({props}) => {
    const handleClick = (arg) => {
        props.onChange(arg)
    }
    return (
        <div>
            <h4 className="ml-3">Колличество пересадок</h4>

            <form>
                
                        <div className="form-check" onClick={() => handleClick({"name": "all" , "checked": !props.all})}>
                            <input className="checkbox" type='checkbox' checked={props.all}/>
                            <label className="form-check-label">Все</label>
                        </div>
                    
                
                        <div className="form-check" onClick={() => handleClick({"value": "0" ,"name": "nonStops" , "checked": !props.nonStops})}>
                            <input className="checkbox" type='checkbox' checked={props.nonStops}/>
                            <label className="form-check-label">Без остановок</label>
                        </div>
                    
                
                        <div className="form-check" onClick={() => handleClick({"value": "1","name": "valueOne" , "checked": !props.valueOne})}>
                            <input className="checkbox" type='checkbox' checked={props.valueOne}/>
                            <label className="form-check-label">1 остановка</label>
                        </div>
                    
                
                        <div className="form-check" onClick={() => handleClick({"value": "2","name": "valueTwo" , "checked": !props.valueTwo})}>
                            <input className="checkbox" type='checkbox' checked={props.valueTwo} />
                            <label className="form-check-label">2 остановки</label>
                        </div>
                    
                
                        <div className="form-check" onClick={() => handleClick({"value": '3',"name": "valueThree" , "checked": !props.valueThree})}>
                            <input className="checkbox" type='checkbox' checked={props.valueThree} />
                            <label className="form-check-label">3 остановки</label>
                        </div>
                    

            </form>
        </div>
    )
}

export default Form;