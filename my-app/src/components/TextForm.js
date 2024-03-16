import React,{useState} from 'react';




export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
      console.log("Lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleOnChange = (event) =>{
        console.log("Changed");
        setText(event.target.value);
    }
    const clear = (event) =>{
      console.log("Translate to Urdu");
      let newText = "";
      setText(newText);
  }
  const extractEmails = () => {
    const emailRegex = /[\w.-]+@[a-zA-Z_-]+\.[a-zA-Z]+/g;
    const extractedEmails = text.match(emailRegex);
    if (extractedEmails) {
      setEmails(extractedEmails);
    } else {
      setEmails([]);
    }
  };
    const [text, setText] = useState("");
    const [emails, setEmails] = useState([]);
    
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
 <div className="mb-3" style={{color: props.mode===`dark`?`white`:`black`}}>
  
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`}}  id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={extractEmails}>Extract Emails</button>


 
    </div>

    <div className="container my-3" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>Text Counting</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes Required to Read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
        <h3>Extracted Emails</h3>
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
