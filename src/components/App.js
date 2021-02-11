import React, { useEffect, useState } from "react";
import '../styles/App.css';

function App(){
    const [renderBall,setRenderBall]=useState(false);
    const [posi,setPosi]=useState({left:5,top:5});
    const [ballPosition,setBallPosition]=useState({left:"0",top:"0"});
    const updateXY=(x,y)=>{
        console.log("x and y is",x,y);
        setBallPosition({
            left:x,
            top:y,
        });
    }
    const handleListener=(event)=>{
        console.log(event.keyCode);
        switch(event.keyCode){
           case 39:
               updateXY(ballPosition.left-(-5),ballPosition.top);
               break;
        
        case 40 :
               updateXY(ballPosition.left,ballPosition.top-(-5));
               break;
        
        case 37:
               updateXY(ballPosition.left-5,ballPosition.top);
               break;
        
        case 38:
               updateXY(ballPosition.left,ballPosition.top-5);
               break;
               default:
                   break;
        }
    };
    useEffect(()=>{
        const keyListener=document.addEventListener("keydown",handleListener);
        return function(){ document.removeEventListener("keydown",handleListener)};
    },[ballPosition]);

    const buttonClickHandler=()=> {
        setRenderBall(true);
    };
    const renderBallOrButton=()=> {
		if (renderBall) {

		    return (
            <div className="ball" 
            style={{
                left:ballPosition.left +"px",
                top:ballPosition.top+"px",
                position:"absolute",  
            }}></div>
            );
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
        
    };
return <div className="plaground">{renderBallOrButton()}</div>
    
   
    
};



    

    // bind ArrowRight keydown event
    

export default App;
