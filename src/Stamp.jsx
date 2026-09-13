import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export function Stamp(){
    const [msg, setMsg] = useState("");

    const stamp = { section: "G4" , roll_number: "1001", name:"Sugandha"};

    function handleClick(){
        localStorage.setItem("stamp", JSON.stringify(stamp));
        setMsg("updated");
    }

    return (
    <>
        <Header />

        <div className="box2 mt2">
            <h3>We have got stamp data</h3>
            <hr />

            {msg === "" && (
                <button onClick={handleClick}>Click here</button>
            )}

            {msg === "updated" && (
                <p className="bg1 p1">Stamp created</p>
            )}
        </div>

        <Footer />
    </>
);
}