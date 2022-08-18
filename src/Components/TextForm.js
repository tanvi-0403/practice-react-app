import React, {useState} from 'react'

export default function TextForm(props) {
    const calculatelength = () =>{
        let ar = text.split(" ");
        
        console.log(ar[0]);
        return 1;
    }

    const handleOnClick = () =>{
        console.log('Buttne clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Convertes to Upper case","success");
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Text converted to lower case","success");
    }
   
    const handleReClick = ()=>{
        let newtext = "";

        for(let i = text.length -1 ; i >= 0 ; i-- )
        {
            newtext = newtext + text.charAt(i);
        }
        setText(newtext);
        props.showAlert("Text revreted","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text,setText] = useState('');
  return (
    <>
    <div>
        <div className="box" style={{color:props.mode === 'light' ? 'dark':'white'}}>
        <label >{props.heading}</label>
        <div className='mb-3'>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light' ? 'dark':'white'}} onChange={handleOnChange} placeholder="Text" id="mybox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2 " onClick={handleOnClick} style={{backgroundColor:props.greenMode ==='Enable'?'red':'blue'}}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} style={{backgroundColor:props.greenMode ==='Enable'?'red':'blue'}}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleReClick} style={{backgroundColor:props.greenMode ==='Enable'?'red':'blue'}}>Convert text to reverse</button>
        
        </div>
    </div>
    <div className='container my-2'>
        <h3>Your Text Summary</h3>
        <p>{text.length === 0 ? 0 : text.trim().split(" ").length} words, {text.length} characters</p>
    </div>
    </>
  )
}
