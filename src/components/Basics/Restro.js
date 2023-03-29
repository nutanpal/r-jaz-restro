import React,{useState} from 'react';
import "./style.css" ;
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from "./Navbar";
// to get unique food categorie make uniquelist array
    const uniqueList = [
        ...new Set(
        Menu.map((e)=>{
        return e.category;
        })
    ),"All"
];
console.log(uniqueList)
//make restro object pass menudata and make menulist of filtered  categories from it 
//Put usestate hooks are on top of function component before retutn 
    const Restro = () => {
        const [menuData, setMenuData]= useState(Menu);
        const[menuList, setMenuList] = useState(uniqueList);

        const filterItem =(category)=>{
            if (category === "All"){
                setMenuData(Menu);
                return;
            }
            const updatedList = Menu.filter((e)=>{
                return e.category === category;
            });
            setMenuData(updatedList);
        };

       
        const myStyle = { 
            margin:"auto",
            width: "30%",
            border: "3px solid white",
            borderRadius:"15px",
            padding: "10px",
            font:" bold 30px cursive" ,
            backgroundColor: "thistle",
            color:"rebeccapurple",
            textAlign:"center"
        };
        
        return(
            <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            {/* <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick ={() =>filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item">Lunch</button>
                    <button className="btn-group__item">Dinner</button>
                    <button className="btn-group__item">Snack</button>
                    <button className="btn-group__item">All</button>
            
                </div>
            </nav> */}
            <h1 style={{color:"rebeccapurple", backgroundColor:"thistle",opacity:0.6}}> Newton's Restro</h1>
            <h3 style = {myStyle}>Carpe Epicure</h3>   
            <MenuCard menuData = {menuData} /> 
            </>
        );
    };

export default Restro;


// {/* <img src="" alt="" /> l48 */} prop drilling menuData