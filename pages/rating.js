import React, { startTransition, useState } from "react";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

const Rating = () => {
  const [isActive, setIsActive] = useState(false)
  const [flag, setFlag] = useState(false)
  const [num, setNum] = useState(0)
  let arr = [1,2,3,4,5]

    const handleClick = (e, i) => {
      if (!flag){
        e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
        e.target.style.color = "hsl(0, 0%, 100%)";
        setNum(arr[i]);
        setFlag(true)
      } 
      
        // setIsActive(current => !current);
    }

    const handleSubmit = (e) => {
      setIsActive(current => !current)
    }

  return (
    <div
      style={{
        backgroundColor: "hsl(216, 12%, 8%)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isActive? <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "hsl(213, 19%, 14%)",
        justifyContent: "center",
        alignItems: "center",
        width: "375px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRadius: "20px",
        paddingTop: "30px",
        paddingBottom: "30px",
        
      }}
    >
       
      <img src="/illustration-thank-you.svg" height={100}/>
      
      <div
          style={{
            // backgroundColor: "green",
            backgroundColor: "hsl(213, 19%, 19%)",
            padding: "5px",
            borderRadius: "10px",
            marginBlock: "0px",
            marginTop: "30px",
            marginBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
      <p style={{color: "hsl(25, 97%, 53%)", fontWeight: 400, fontSize: "15px", marginBlock: "0px",}}>You selected {num} out of 5</p>
      </div>
      <h2 style={{ color: "white" }}>Thank you!</h2>
        <div style={{ color: "hsl(216, 12%, 54%)", textAlign: "center", marginTop: "-20px", fontWeight: 400, fontSize: "18px" }}>
          <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.
          </p>
        </div>
      </div> :
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "hsl(213, 19%, 14%)",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "370px",
          padding: "20px",
          borderRadius: "15px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "hsl(213, 19%, 19%)",
            borderRadius: "50%",
          }}
        >
          <Image src="/icon-star.svg" height={15} width={15}></Image>
        </div>
        <h2 style={{ color: "white", fontWeight: 700, fontSize: "28px"}}>How did we do?</h2>
        <div style={{ color: "hsl(216, 12%, 54%)", marginTop: "-30px", fontWeight: 400, fontSize: "15px"}}>
          <p>
            Please let us know how we did with your suport request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
            marginTop: "5px",
          }}
          
        >
          { arr && arr.length ? arr.map((e, i)=> (
            <React.Fragment key={i}>
          <button 
          className={styles.btnHover} 
          onClick={(e)=>handleClick(e, i)}
          >
            {e}
          </button>
          </React.Fragment>))
          : null
          }
        
        </div>
        <button
        className={styles.submitBtn}
        onClick={(e)=>handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    } 
    </div>
  );
};

export default Rating;
