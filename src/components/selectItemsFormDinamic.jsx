import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { citySelectItems } from "../data";


const SelectItemForm =({show,label})=>{
    const [selectedCities1, setSelectedCities1] = useState(null);
    return(   
        <div style={{display:(show === "NO" ? "none" : "")}}>             
            <MultiSelect  value={selectedCities1} options={citySelectItems} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder={label} maxSelectedLabels={3} />
        </div>
    )

}

export default SelectItemForm;