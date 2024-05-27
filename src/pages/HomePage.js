import React, { useState } from 'react';
import Card from "../components/card/Card";
import { useData } from "../contexts/DataContext";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const { data, isLoading, isFetching } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        logOut();
        alert('Logout Successful')
        navigate('/', { replace: true });
    };

    return (
        <div className="w-full h-screen overflow-x-hidden  no-scrollbar">
            <header className="relative ">
                <div className="fixed top-0 left-0 right-0 z-20 px-3 bg-slate-200  flex justify-between items-center ">
                    <div className="text-grey-400 text-4xl  md:text-6xl t  text-nowrap font-light font-fontt p-2 flex justify-center items-center">Cats Gallery</div>
                    <div className="flex gap-5">
                        <button className="btn" onClick={handleLoginClick}>Know more about cats!!!</button>
                        <button className="btn" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </header>
            <main className="mt-10 md:mt-14  grid md:grid-cols-3 bg-white  ">
                <div className="bg-slate-100 relative md:col-span-1">

                    <div className="text-wrap md:w-[30%] w-[100%] md:bg-slate-100 bg-gray-100  lg:text-2xl md:p-10 mt-4 md:mt-10
                         p-2 fixed top-10 z-10">
                        The "Cat Gallery" application is designed to provide users with a delightful experience of viewing random cat images. The application fetches 10 random cat images from an API and displays them in a well-organized and aesthetically pleasing manner.
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:col-span-2  gap-7 px-3 py-7 mt-28 md:mt-0 ">
                    {data && data.map((cardElem, index) => (
                        <Card key={index} eachData={cardElem} index={index + 1} isLoading={isLoading} isFetching={isFetching} />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 z-30 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Cats are small, carnivorous mammals known for their agility and playful behavior. They have retractable claws, sharp teeth, and excellent night vision, making them skilled hunters. Domesticated for thousands of years, cats are popular pets, valued for their companionship and independent nature. They communicate using a variety of vocalizations, body language, and purring. Cats also have a strong grooming instinct, often spending a significant portion of their day cleaning themselves.</h2>
                        <button className="btn" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
            <div className="bg-slate-200 w-full flex justify-center fixed bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                <span className='ml-1'> My Cats Gallery</span>
            </div>
        </div>
    );
}

