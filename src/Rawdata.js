import React , {useState,useEffect} from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';
import {Link} from "react-router-dom";

function Rawdata() {
    const [textdoc, setTextDoc] = useState("");
    useEffect(async ()=> {
        try {
            const result = await import(`./markdown/data.md`)
            console.log(result.default)
            const res = await fetch(result.default)
            const text1 = await res.text()
            setTextDoc(text1)
    
        } catch (error) {
            console.log(error)
        }
           
      },[])
    return (
        <div >
            <Link className='app_navDiv' to="/"  style={{ textDecoration: 'none'}}>
            <h3 className="app_nav">Check .md file</h3>
          </Link>
          {textdoc}
            
        </div>
    )
}

export default Rawdata
