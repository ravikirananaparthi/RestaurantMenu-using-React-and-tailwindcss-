import React from 'react';

function Cards(props) {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card*/}
            <div className='rounded-xl relative'>
            {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Waffles</p>
                    <p className='px-2'>Crisp, fluffy, sweet perfection</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.pexels.com/photos/5711392/pexels-photo-5711392.jpeg?auto=compress&cs=tinysrgb&w=600' alt="weberror"/>
            </div>
            {/* card*/}
            <div className='rounded-xl relative'>
            {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sundae</p>
                    <p className='px-2'>Sundae magic: a dessert fantasy</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://cdn.mos.cms.futurecdn.net/yGaCgcPAp8dYjAQ7C4ayHn.jpg' alt="weberror"/>
            </div>
            {/* card*/}
            <div className='rounded-xl relative'>
            {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Natural Icecreams</p>
                    <p className='px-2'>Handcrafted frozen delights with natural goodness</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://www.kelvinscale.in/img/kelvin/12.jpg' alt="weberror"/>
            </div>
        </div>
    );
}

export default Cards;