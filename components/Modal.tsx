'use client'
import React, { useState } from 'react';
interface obj {
    title: string;
    content: string;
    bullets: Array<string>
}
const Modal = ({ data, setHandler }: {
    setHandler: any; data: obj
}) => {

    return (
        <div>
            <div className='fixed z-50 top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
                <div className='max-w-[70vw] relative h-[60vh] bg-white shadow-lg px-16 py-7 rounded-md'>
                    <h2 className='text-4xl  font-semibold text-center text-primary border-b border-gray-300 py-3 px-4 mb-4'>{data.title}</h2>
                    <div className='px-4 pb-4'>
                        <p className='text-md font-medium text-primary'>{data.content}</p>
                    </div>
                    <div className="py-2">
                        {data.bullets.map((item, index) => (
                            <>
                                <li className="text-primary px-4  text-lg ">{item}</li>
                            </>
                        ))}
                    </div>
                    <div className=' absolute top-2 right-4 flex justify-between items-center px-4 pt-2'>
                        <button
                            type='button'
                            className='h-10 text-4xl px-3 rounded-md font-bold  text-secondary hover:text-orange-500 transition-all duration-200 ease-in-out hover:scale-90'
                            onClick={() => setHandler(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export function ModalButton({ text, data, }: { text: string; data: obj; }) {
    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal)
    }
    return (
        <>
            <button onClick={(e) => {
                e.preventDefault;
                handleModal();
            }}>          <span className="flex items-center gap-1 hover:text-orange-500 hover:gap-2 transition-all">
                    {text}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </span></button>
            {openModal && (
                <>
                    <Modal data={data} setHandler={setModal} key={data.title} />
                </>
            )}
        </>
    )
}


