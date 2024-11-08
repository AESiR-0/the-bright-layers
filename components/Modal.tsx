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
            <div className='fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
                <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
                    <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>{data.title}</h2>
                    <div className='px-4 pb-4'>
                        <p className='text-sm font-medium text-gray-700'>{data.content}</p>
                    </div>
                    <div className='border-t border-gray-300 flex justify-between items-center px-4 pt-2'>
                        <div className='text-sm font-medium text-gray-700'>Example Content</div>
                        <button
                            type='button'
                            className='h-8 px-2 text-sm rounded-md bg-gray-700 text-white'
                            onClick={() => setHandler(false)}
                        >
                            Close
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
            <button onClick={() => handleModal}>{text}</button>
            {openModal && (
                <>
                    <Modal data={data} setHandler={setModal} key={data.title} />
                </>
            )}
        </>
    )
}


