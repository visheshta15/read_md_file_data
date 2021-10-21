import React , {useState,useEffect} from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';
import {Link} from "react-router-dom";

function Mddata() {
  const [post, setPost] = useState("");
  const [textdoc, setTextDoc] = useState("");

  // useEffect(()=>{
  //   import(`./markdown/data.md`)
  //   .then(res=> {
  //     fetch(res.default)
  //     .then(res => res.text())
  //     .then(res => setPost(res))
  //     .catch(err => console.log(err))
  //   })
  //   .catch(err=> console.log(err))
  // },[])

  useEffect(async ()=> {
    try {
        const result = await import(`./markdown/data.md`)
        console.log(result.default)
        const res = await fetch(result.default)
        const text1 = await res.text()
        console.log(text1)
        setPost(text1)
        setTextDoc(text1)

    } catch (error) {
        console.log(error)
    }
       
  },[])


  return (
    <div className="App">
        {/* <Link className="app_navDiv" to="/rowData" style={{ textDecoration: 'none'}}>
            <h3 className="app_nav">Check raw data of .md file</h3>
        </Link> */}
      <Markdown>
        {post}
      </Markdown>
    </div>
  );
}

export default Mddata;
