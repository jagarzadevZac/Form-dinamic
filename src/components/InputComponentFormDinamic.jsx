import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import SelectItemForm from './selectItemsFormDinamic';
import RadioButonForm from './RadioInputFormDinmic';

const InputFormDinamic =({showinput,showSelect, showRadio, component,label,type})=> {
    const [valueInput, setValueInput] = useState("");

    if(component=== "select"){
        return(
            <SelectItemForm  show={showSelect}  label={label}  />
        );
    }else if(component === "radio"){
        return(
        <RadioButonForm  show={showRadio} label={label}    />
        );
    }else{
        return(
            <div style={{display:(showinput === "NO" ? "none" : "")}} className="p-field">
                <label htmlFor={label}>{label}</label>
                <InputText type={type}  id={label} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
            </div>
        )
    }
    
}

export  default InputFormDinamic;