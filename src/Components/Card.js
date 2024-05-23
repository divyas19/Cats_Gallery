import React, { useState } from 'react';
import loading from "../Images/loading.gif"

function Card({ eachData, index, isLoading, isFetching }) {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <>
            {(isLoading || isFetching) ? (
                <div>Loading...</div>
            ) : (
                <div className="card">
                    <img
                        src={eachData?.url}
                        alt="Cat"
                        className={`h-[70%] w-full ${isImageLoaded ? '' : 'hidden'}`}
                        onLoad={handleImageLoad}
                    />
                    {!isImageLoaded && <div> <img src={loading} /></div>}
                    <div className={`h-[30%] flex justify-center flex-col ${isImageLoaded ? '' : 'hidden'}`}>
                        <span className="block text-center font-bold">{index} - URL</span>
                        <span className="block text-center break-all">{eachData?.url || "URL not found"}</span>
                        <div className="batch">
                            <span className="block text-xs">{`Cat-${index}`}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
