import {categories} from '../data';
import { RadioButton } from 'primereact/radiobutton';
import React, { useState } from 'react';



const RadioButonForm=({show,label})=>{
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return(
        <div className="card"  style={{display:(show === "NO" ? "none" : "")}}>
            <h5>{label}</h5> 
            {
                categories.map((category) => {
                    return (
                        <div>
                            <div >
                                <div key={category.key} className="p-field-radiobutton" >
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label htmlFor={category.key}>{category.name}</label>
                                </div>
                            </div><br/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RadioButonForm;
