
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {

      const [categories,setCategories] =useState([])
      
          useEffect(() =>{
              fetch("categories.json")
              .then(res => res.json())
              .then(data => setCategories(data))
          },[])
          console.log(categories)
    return (
        <div className="p-2 space-y-8">
             <h2 className="text-2xl">left side nav</h2>
             {
                categories.map(categorie => 
                <NavLink 
                className={'block p-3 border border-sky-500 rounded-lg hover:bg-sky-300'}
                 key={categorie.id}
                  to={`/categorie/${categorie.id}`}
                >
                {categorie.name}</NavLink>)
             }
        </div>
    );
};

export default LeftSideNav;