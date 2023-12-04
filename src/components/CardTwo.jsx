import React from 'react'

function CardTwo({ beer }) {
    return (
        beer &&
        <div className="flex max-w-2xl flex-col items-center md:flex-row bg-[#FAF4F0] rounded-md border-2 border-black">
            <div className="h-[200px] lg:w-[200px] flex justify-center items-center md:h-[200px] md:w-[300px]">
                <img
                    src={beer.image_url}
                    alt="Laptop"
                    className="h-[150px] mx-10 rounded-md object-cover"
                />
            </div>
            <div>
                <div className="p-4">
                    <h1 className="inline-flex items-center text-xl text-[#56706B] font-bold font-serif">
                        {beer.name}
                    </h1>
                    <h2 className="mt-3 text-lg font-serif font-thin text-[#BB9B57]">
                        {beer.tagline}
                    </h2>
                    <p className="mt-3 text-base text-[#979591]">
                        {beer.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardTwo