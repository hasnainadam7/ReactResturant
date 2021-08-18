import React, { useState } from 'react'
import "./style.css"
import MenuCard from './MenuCard.js'
import Menu from "./MenuApi.js"
import { Navbar } from './Navbar.js'
export const Resturant = () => {
    //here we fill navBar buttons
    //new Set is a method which give us unique data (no repeation)
    //ussing [... ] will convert our unique object data into array form 
    const uniqeData = [...new Set(Menu.map((curElem) => {
            return curElem.category;
        } 
        )),"All"];


    //useState is mangeing data 
    let [menuData, setmenuData] = useState(Menu)
    // let [navBarlist, setnavBarlist] = useState(uniqeData)
 
    //here we get only selected category by using filter mehtod
    const filterItem = (category) => {  
        if (category === "All") {
            setmenuData(Menu)
            return;
        }
        const upDateedList = Menu.filter((currEle) => {
            return (currEle.category === category)
        })
        //now we fill this data in over menuData by updating/seting it
        setmenuData(upDateedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} navBarlist={uniqeData}/>
            {/* //PassedData  is a prop this is method for passing data from one page to another page   */}
            <MenuCard PassedData={menuData} />
        </>)
}


