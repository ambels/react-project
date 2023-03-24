import { useState } from "react";

import ButtonChild from "./ButtonChild";
import TextChild from "./TextChild";

const endpoint = 'api.com/user';

export default function Parent() {
    const [text, setText] = useState('');
    let requestData = {
        value: text,
    }
    
    function handleClick() {
        fetch(endpoint, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then((response) => response.json)
        .then((response) => {
            console.log('response', response);
            setText('');
        });
        
        alert(text); 
    }

    function handleChange(event) {
        console.log('event', event.target);
        console.log('event value', event.target.value);
    }
    return (
        <>
            <h1>Parent Component</h1>
            <TextChild onChange={handleChange} />
            <ButtonChild onClick={handleClick} />
        </>
    );
}
