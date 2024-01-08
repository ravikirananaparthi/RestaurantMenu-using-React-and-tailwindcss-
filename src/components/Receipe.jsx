import React, { useState } from 'react';
import {categories, data} from '../data/data';
function Receipe(props) {
    console.log(data);
    const[food,setFoods]=useState(data);
    //filter type  cakes icecreams ..
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price ;
            })
        );
    };

   return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-semibold text-4xl text-center'>Top Rated Menu</h1>
            {/*filter row*/}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/*filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type </p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>setFoods(data)} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=>filterType('Natural Ice Creams')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Natural Ice Creams</button>
                        <button onClick={()=>filterType('Pocket Waffles')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Pocket Waffles</button>
                        <button onClick={()=>filterType('Pastry Cakes')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Pastry Cakes</button>
                        <button onClick={()=>filterType('Milkshakes')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Milkshakes</button>
                    </div>
                </div>
                {/** filter price */}
            <div>
                
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    
                    <button onClick={()=>{filterPrice('$')}} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>₹</button>
                    <button onClick={()=>{filterPrice('$$')}} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹</button>
                    <button onClick={()=>{filterPrice('$$$')}} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹₹</button>
                    <button onClick={()=>{filterPrice('$$$$')}} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹₹₹</button>
                </div>
            </div>
            </div>
            {/**display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
                {food.map((item,index)=>(
                    <div key={index} className='border  rounded-lg shadow-lg hover:scale-105 duration-400'>
                        <img src={item.image} alt={item.image}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-extrabold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Receipe;