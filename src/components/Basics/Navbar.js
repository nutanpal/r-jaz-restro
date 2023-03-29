import React from 'react'

const navbar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
            {menuList.map((e)=>{
            return(
                <button className="btn-group__item"
                onClick={()=> filterItem(e)}>{e}</button>
            );
            })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
