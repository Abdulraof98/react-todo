import React from "react";

const Form = () =>{
    console.log('Hello from form.js')
    return (
        <React.Fragment>
            <div>This is  from the form component</div>
            <form style={{backgroundColor: 'red', height: '200px'}}>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
            </form>
        </React.Fragment>
    )
}

export default Form;