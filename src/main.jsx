import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index3.css'
//import { Stamp } from "./Stamp.jsx";
import {Notes} from "./Notes.jsx";
//import './App.css'
//import App from './App.jsx'
// import Store from "./Store.jsx";
// import ShowList from "./ShowList.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <section className="">
      <App x="+" y="-"/>
    </section> */}
    {/* <Store brand={"Pepe"}/> 
    <ShowList brand ={"Pepe"}/> */}
    {/* <Stamp /> */}
    <Notes />
  </StrictMode>,
);





