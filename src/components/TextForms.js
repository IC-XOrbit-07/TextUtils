import React,{use, useState} from 'react'


export default function TextForms(props) {
    const handleOnChange= (event)=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }
    
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const functionClearText = ()=>{
        setText("");
        props.showAlert("Text cleared","success");
    }

    const firstCaseUpper = ()=>{
        if(text==''){
            setText('');
        }
        else{
            let arr = text.split(' ');
            arr.forEach((ele,index)=>{
                arr[index] = ele[0].toUpperCase()+ele.substring(1).toLowerCase();
            })
            setText(arr.join(' '));
        }
        props.showAlert("First case converted to upper","success");
    }
    const [text,setText] = useState("Enter text here")
    return (
        <>

        <div className='container' style={{color:props.currentTheme=='dark'?'white':'black'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.currentTheme=='dark'?'#2b3034':'white',color:props.currentTheme=='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={functionClearText}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={firstCaseUpper}>First Case Upper only</button>
        </div>

        <div className="container my-3" style={{color:props.currentTheme=='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p> {text==''?0:text.split(' ').length} words and {text.length} characterstics</p>
            <p>{0.008 *60* text.split(' ').length} seconds required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
} 
