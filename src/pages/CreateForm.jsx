import React, { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import InputFormDinamic from '../components/InputComponentFormDinamic';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import {fields} from '../data';


const SelectItems = () => {
    const [value1, setValue1] = useState('NO');
    const [value2, setValue2] = useState('NO');
    const [value3, setValue3] = useState('NO');
    const options = ['NO', 'YES'];
    const [activeTab, setActiveTab] = useState(0);
   
    console.log(fields);
    const ButtonsNav = ()=>{

        return(
            <div className="p-pt-2 p-pb-4" style={{textAlign:'center'}} >
                <br/>
                <Button onClick={() => setActiveTab(0)} className="p-button-text" label="Crete form" />
                <Button onClick={() => setActiveTab(1)} className="p-button-text" label="check Form" />
            </div>
        )
    }


    return (
        <div >
            <div className="card" >
            <TabView  activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)} style={{height:"0px"}} >
                    <TabPanel >
                        <div className="p-grid" >
                            <ButtonsNav />
                            <div>
                                <div className="card">
                                    <h5>Add input text</h5>
                                    <SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)} />
                                </div>
                                <div className="card">
                                    <h5>Add select</h5>
                                    <SelectButton value={value2} options={options} onChange={(e) => setValue2(e.value)} />
                                </div>
                                <div className="card">
                                    <h5>Add radio buton</h5>
                                    <SelectButton value={value3} options={options} onChange={(e) => setValue3(e.value)} />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="p-grid" >
                            <ButtonsNav />
                            <div className="card" >
                                <div className="p-col-12 p-md-6 p-lg-6">
                                    <h4>Form</h4>
                                    <div className="card" >
                                        <div className="p-fluid">
                                            {
                                                fields.map((field,i) => {
                                                
                                                    return (
                                                        
                                                        <div className="p-field" key={i}>
                                                            <InputFormDinamic showinput={value1} showSelect={value2} showRadio={value3} component={field.component}  label={field.label} type={field.type} />
                                                            <br/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
                
    );
}


export default SelectItems;