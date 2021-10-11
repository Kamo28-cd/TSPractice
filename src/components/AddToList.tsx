import { stringify } from 'querystring';
import React, { useState } from 'react';
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}
const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        image: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.image)
            return 

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),//because when we get the value from the input field it is automatically brought back to us as a string we need  to parse it into an integer hence parseInt
                url: input.image,
                note: input.note
            }
        ])
        setInput({
            name: "",
            age: "",
            note: "",
            image: ""
        })
    }
    return (
        <div className="AddToList">
            <input 
                type="text"
                placeholder="Name"
                className="AddToList-input"  
                value={input.name} 
                onChange={handleChange} 
                name="notes"
            />
            <input 
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange} 
                name="notes"   
            />
            <input 
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.image}
                onChange={handleChange}  
                name="notes"  
            />
            <textarea 
                
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange} 
                name="notes"    
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            > 
                Add to List
            </button>
        </div>
    )

}

export default AddToList