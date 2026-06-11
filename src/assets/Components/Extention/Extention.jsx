
import React, { useState } from 'react'

export default function Extention() {




    const [filter, setFilter] = useState(`all`)

    const [isChecked, setIsChecked] = useState("null")

    const [mode, setMode] = useState("sun")


    


    const [extentions, setExtensions] = useState(

        [
                {
    id: 1,
    name: "DevLens",
    description: "Inspect layout and visualize element boundaries quickly",
    active: true,
    icon: <i className="fa-solid fa-ruler-combined"></i>,
  },
  {
    id: 2,
    name: "StyleSpy",
    description: "Analyze CSS styles on any webpage element",
    active: true,
    icon: <i className="fa-solid fa-eye"></i>,
  },
  {
    id: 3,
    name: "CodeBoost",
    description: "Enhance code readability and performance instantly",
    active: true,
    icon: <i className="fa-solid fa-bolt"></i>,
  },
  {
    id: 4,
    name: "BugFinder",
    description: "Detect and highlight frontend layout issues",
    active: false,
    icon: <i className="fa-solid fa-bug"></i>,
  },
  {
    id: 5,
    name: "ColorMate",
    description: "Pick and manage colors easily from websites",
    active: true,
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    id: 6,
    name: "SpeedTest",
    description: "Measure website loading speed and performance",
    active: false,
    icon: <i className="fa-solid fa-gauge-high"></i>,
  },
  {
    id: 7,
    name: "GridHelper",
    description: "Visualize grid layouts for better UI structure",
    active: true,
    icon: <i className="fa-solid fa-border-all"></i>,
  },
  {
    id: 8,
    name: "FocusMode",
    description: "Remove distractions for better reading experience",
    active: true,
    icon: <i className="fa-solid fa-bullseye"></i>,
  },
  {
    id: 9,
    name: "TagInspector",
    description: "Inspect HTML tags and structure easily",
    active: false,
    icon: <i className="fa-solid fa-code"></i>,
  },
  {
    id: 10,
    name: "LinkChecker",
    description: "Find broken links across web pages quickly",
    active: true,
    icon: <i className="fa-solid fa-link"></i>,
  },
  {
    id: 11,
    name: "DarkSwitch",
    description: "Toggle dark mode for comfortable viewing",
    active: true,
    icon: <i className="fa-solid fa-moon"></i>,
  },
  {
    id: 12,
    name: "ImageScan",
    description: "Analyze and optimize images on websites",
    active: false,
    icon: <i className="fa-solid fa-image"></i>,
  },


        ]


    )  


   const filteredItems = extentions.filter((item)=>{

        if (filter === "all") {return item;};
        if (filter === "Active") {return item.active};
        if (filter === "Inactive") {return !item.active};
    })




  const deletedExtension = (id)=>{ setExtensions(extentions.filter((deletedItem)=> deletedItem.id !== id))}
   
       
  
 
 const changeToggle = (id)=>{setExtensions(extentions.map((toggling)=>  {
    if (toggling.id === id){

        return{
            ...toggling,
            active: !toggling.active
        }

        
    }
    return toggling
 }
    

))}
   
 











  return <>
    

     {/* screen Start */}
  
  <div className={` bg-[#edf6fb]  ${mode === "moon"? "dark dark:bg-[#050b21]"  : ""} `}>

    {/* Container Start  */}

    <div className='container mx-auto p-1'>

          


        {/* Bar start */}

        <div className="bg-[#fcfdff]  dark:bg-[#1f2535]   mt-5 overflow flex justify-between items-center relative p-2 rounded-xl">
            <i className="fa-solid fa-grip-vertical text-[#e46059]"></i>
            <h4 className="absolute  left-7 text-[#0c153d] font-bold dark:text-white ">Extentions</h4>
            <div className=' bg-[#eeeeee] dark:bg-[#2e354c] flex justify-center items-center   w-7 h-7 rounded leading-none text-white' onClick={()=>{setMode(mode === "moon" ? "sun" : "moon")}}><i className=  { `  ${ mode === `moon`? `fa-regular fa-sun` : ` fa-regular fa-moon text-[#4f556e]`}`  }></i></div>
        </div>

        {/* Bar End */}







        {/* Extensionn list and buttons div start */}

        <div className='md:flex md:justify-between md:mt-8 md:items-center  mt-7 text-center'>
                <div className='text-[#0c153d] dark:text-white font-bold text-xl mb-3'>
                    <p>Extention List</p>
                </div>

                <div className=''>
                    <button className={`cursor-pointer mr-2  py-1 px-4 rounded-full ${filter === "all"? "text-white bg-[#f25b54] dark:text-[#39112f]" : mode === "moon"? "text-[white] bg-[#1f2535]"  : "bg-[#fcfcfe] text-black" } `} onClick={()=>{setFilter(`all`)}}>All</button>
                    <button className={`cursor-pointer mr-2  py-1 px-4 rounded-full ${filter === "Active"? "text-white bg-[#f25b54] dark:text-[#39112f]" : mode === "moon"? "text-white bg-[#1f2535]"  : "bg-[#fcfcfe] text-black" } `} onClick={()=>{setFilter("Active")}}>Active</button>
                    <button className={`cursor-pointer mr-2  py-1 px-4 rounded-full ${filter === "Inactive"? "text-white bg-[#f25b54] dark:text-[#39112f]" : mode === "moon"? "text-white bg-[#1f2535]"  : "bg-[#fcfcfe] text-black" } `} onClick={()=>{setFilter("Inactive")}}>Inactive</button>
                </div>

        </div>

 {/* Extensionn list and buttons div End */}



    {/* Extensions Start */}

       <div className="grid gap-4 grid-cols-1   md:grid-cols-2  lg:grid-cols-3">
        
    
       
            {filteredItems.map((extention)=>{ return (

           <div key = {extention.id} className=' p-3 mt-10 bg-[#fcfdff] dark:bg-[#1f2535] rounded-2xl '>

            <div className=' flex  items-center rounded leading-none  w-300 my-10'>
                
                <div className=' bg-[#c0d8bd] w-8 h-8 mr-3 flex justify-center items-center rounded '>
                    {extention.icon}
                </div>

                <div >
                   <h4 className='text-[#06133f] dark:text-white mb-2 font-bold '> {extention.name}</h4>
                   <p className='text-[13px] text-[#5d616b]'>{extention.description}</p>
                </div>
            </div>

            <div className='flex justify-between items-center my-10 '>
                <button className=' text-[#5d616b] dark:text-white border rounded-full w-25 p-1 hover:bg-[#f15c55] hover:text-white dark:hover:text-[#06133f] font-normal cursor-pointer' onClick={()=>{deletedExtension(extention.id)}}>Remove</button>

                <div className="relative inline-block w-11 h-5">
                <input  id="switch-component" type="checkbox" onClick={()=>{changeToggle(extention.id)}} checked={extention.active} onChange={(e)=> setIsChecked(e.target.checked)} className="peer appearance-none w-11 h-5 bg-[#c4c2c3] dark:bg-[#525868]  rounded-full  checked:bg-[#f25a56] cursor-pointer transition-colors duration-300" />
                <label htmlFor="switch-component" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                </label>
                </div>
                
            </div>

        </div>)


          })}




        











       
        











        


       </div>

    {/* Extensions End */}


    </div>


    {/* Container End  */}




  </div>

    {/* screen End */}
  
  
  
  </>
}
