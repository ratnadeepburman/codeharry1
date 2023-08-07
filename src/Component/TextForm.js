import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case button got clicked" + text);
        let newText = text.toUpperCase();
        //setText("you have clicked on handleUp click")
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change text area default function");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter your text here......"); 
    // above is how to declare state. text nam ka state define kiya hai uski default value bhi de diya hai.
    //console.log(useState("Enter your text here."))
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <div className="container">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Upper case
                </button>
            </div>
        </div>
    )
}
