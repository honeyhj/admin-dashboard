import React, { Component } from 'react';
import axios from 'axios';
class Menu extends Component {
    constructor(){
        super();
        this.state ={
        category:'',
        subCategories:'',
        selectedCategory:'',
        allMenu:[],
        }
    }
         handleChange = (e)=>{
        const  getText ={...this.state}
        getText[e.target.name] = e.target.value;
        this.setState(getText)
    }
     singleMenu = async ()=>{
        const {singleSubCategory} = this.state;
        await axios.post("http://localhost:4500/category-creation",
        {type:"singleSubCategory",category:singleSubCategory},
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }
        )
        .then((data) => {
            alert('category Added successfully')

        })
    }
     dropdownMenu = async() => {
        const {category} = this.state;
        await axios.post("http://localhost:4500/category-creation",
            {type:"category",category:category},
            {
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            }
        ) 
        .then((data)=>{
            alert(' dropdown category Added successfully')
        })
    }
   
     dropdownSubMenu = async ()=>{
        const {selectedCategory,subCategories} = this.state;
        await axios.post("http://localhost:4500/subCategory-creation",
        {selectedCategory,subCategories},
        {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }
        )
        .then((data)=>{
            alert(' dropdown Sub category Added successfully')
        })
    }
    getAllCategory = async () => {
        await axios.get("http://localhost:4500/getAllCategory")
            .then((data)=>{
                this.setState({allMenu:data.data})
            })
    }
    render() {
        return (
                    <div style={{display:"flex"}}>
            <div>
                <div>
                    <input type="text" name="singleSubCategory" id="" onChange={this.handleChange} placeholder="singleSubCategory"/>
                    <button type="button" onClick={this.singleMenu}>add</button>
                </div><br />
                {
                            this.state.allMenu.map((item,index) => {
                                if(item.type === "category"){
                                    return (
                                        <li key={index} value={item.category}>{item.category}</li>
                                    )
                                }
                            })
                        }
                <div>
                    <input type="text" name="category" id="" onChange={this.handleChange} placeholder="category"/>
                    <button type="button" onClick={this.dropdownMenu}>add</button>
                </div><br />
            </div>
            <div>
                <div>
                    <label>dropdownCategory</label>
                        <select name="selectedCategory" id="" onChange={this.handleChange}>
                        <option value="">Select Category</option>
                        {
                            this.state.allMenu.map((item,index) => {
                                if(item.type === "category"){
                                    return (
                                        <option key={index} value={item.category}>{item.category}</option>
                                    )
                                }
                            })
                        }
                        
                        </select>
                </div>
                <div>
                    <input type="text" name="subCategories" id="" onChange={this.handleChange} placeholder="subCategories"/>
                    <button type="button" onClick={this.dropdownSubMenu}>add</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Menu;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Menu = () => {
//     const [menus,setMenus] = useState({
//         category:'',
//         subCategories:'',
//         selectedCategory:'',
//         allMenu:[],
//     })
//     const handleChange = (e)=>{
//         const  getText ={...menus}
//         getText[e.target.name] = e.target.value;
//         setMenus(getText)
//     }
//     console.log(menus);
//     const singleMenu = async ()=>{
//         const {singleSubCategory} = menus;
//         await axios.post("http://localhost:4500/category-creation",
//         {type:"singleSubCategory",category:singleSubCategory},
//         {
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             }
//         }
//         )
//         .then((data) => {
//             alert('category Added successfully')

//         })
//     }
//     const dropdownMenu = async() => {
//         const {category} = menus;
//         await axios.post("http://localhost:4500/category-creation",
//             {type:"category",category:category},
//             {
//                 headers:{
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 }
//             }
//         ) 
//         .then((data)=>{
//             alert(' dropdown category Added successfully')
//         })
//     }
//     useEffect(() => {
//         axios.get("http://localhost:4500/getAllCategory")
//         .then((data)=>{
//             setMenus({allMenu:data.data})
//         })
//     },[])
//     const dropdownSubMenu = async ()=>{
//         const {selectedCategory,subCategories} = menus;
//         await axios.post("http://localhost:4500/subCategory-creation",
//         {selectedCategory,subCategories},
//         {
//             headers:{
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             }
//         }
//         )
//         .then((data)=>{
//             alert(' dropdown Sub category Added successfully')
//         })
//     }
//         useEffect(()=>{
//             axios.get("http://localhost:4500/getAllCategory")
//             .then((data)=>{
//                 setMenus({allMenu:data.data})
//             })
//         },[])
//     return (
//         <div style={{display:"flex"}}>
//             <div>
//                 <div>
//                     <input type="text" name="singleSubCategory" id="" onChange={handleChange} placeholder="singleSubCategory"/>
//                     <button type="button" onClick={singleMenu}>add</button>
//                 </div><br />
//                 {
//                             menus.allMenu.map((item,index) => {
//                                 if(item.type === "category"){
//                                     return (
//                                         <li key={index} value={item.category}>{item.category}</li>
//                                     )
//                                 }
//                             })
//                         }
//                 <div>
//                     <input type="text" name="category" id="" onChange={handleChange} placeholder="category"/>
//                     <button type="button" onClick={dropdownMenu}>add</button>
//                 </div><br />
//             </div>
//             <div>
//                 <div>
//                     <label>dropdownCategory</label>
//                         <select name="selectedCategory" id="" onChange={handleChange}>
//                         <option value="">Select Category</option>
//                         {
//                             menus.allMenu.map((item,index) => {
//                                 if(item.type === "category"){
//                                     return (
//                                         <option key={index} value={item.category}>{item.category}</option>
//                                     )
//                                 }
//                             })
//                         }
                        
//                         </select>
//                 </div>
//                 <div>
//                     <input type="text" name="subCategories" id="" onChange={handleChange} placeholder="subCategories"/>
//                     <button type="button" onClick={dropdownSubMenu}>add</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Menu;