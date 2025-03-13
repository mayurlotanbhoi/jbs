import React, { useState } from 'react'


import { useSelector } from 'react-redux';
import EventCard from '../../../../components/Event/EventCard.jsx';
import { FaPlus } from 'react-icons/fa';
import { Modal } from '../../../../components/popups/Modal.jsx';
import EventForm from '../../../Form/EventForm.jsx';
import { useGetEventsByCityQuery } from '../../../../services/events.service.js';

export default function Menu() {
    const { data, isLoading, error } = useGetEventsByCityQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { name, user_type } = useSelector((state) => state?.auth?.user || {});  // const { logo, company_name, owner_name } = user


    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <EventForm />
            </Modal>

            {user_type === 'admin' && <div className='w-full flex justify-end items-center'>
                <button onClick={() => setIsModalOpen(true)}
                    className="  flex  items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                    <FaPlus className=' me-1' />
                    Add Event
                </button>
            </div>}

            <div className=' flex justify-evenly flex-wrap'>
                <EventCard events={isLoading ? [] : data?.data} />
            </div>


        </div>
    )
}
