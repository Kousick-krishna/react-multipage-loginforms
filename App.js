import React,{useState} from 'react';
import SignUp from "./SignUp";
import Personal from "./Personal";
import Other from "./Other";
import "./style.css"


function App(){
    const[Page,setPage]=useState(0);

    const FormTitles=["SignUp", "Personal", "Other"];

    const PageDisplay=()=>{
        if(Page === 0){
            return <SignUp/>;
        }else if(Page === 1){
            return <Personal/>;
        }else{
            return <Other/>;
        }
    }

    return(
        <>
        <div className="form-container">
            <div className="form">
                <div className="Header">
                    <h1>{FormTitles[Page]}</h1>
                </div>
                <div className="Body">{PageDisplay()}</div>
                <div className="Footer">
                    <button 
                    disabled={Page === 0}
                    onClick={()=>{setPage((currentPage)=> currentPage - 1);}}>
                        prev
                    </button>
                    <button 
                    disabled={Page === FormTitles.length - 1}
                    onClick={()=>{setPage((currentPage)=> currentPage + 1);}}>
                        next
                     </button>
                </div>
            </div>
        </div>
       
        </>
        
        
        )
}export default App
