import React, { useState } from 'react';
import { useAttendEventsMutation } from '../../services/events.service';
import { handleRequest } from '../../util/handleRequest';
import { Modal } from '../popups/Modal';
import EventForm from '../../pages/Form/EventForm';
import PostEventForm from '../../pages/Form/PostEvent';
import { Link } from 'react-router-dom';

export default function EventCard({ events }) {
    const [attendEvents, { data, isLoading, isError, error }] = useAttendEventsMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAttend = async (eventId) => {

        const handleFormSubmission = async () => {
            const respon = await handleRequest(
                () => attendEvents(eventId),  // The API call function
                {
                    loadingMessage: "Submiting Events...",
                    successMessage: "Attend SuccessFully. ",
                    errorMessage: "There was an issue while your event Attend. Please try again later."
                }
            );
        };
        handleFormSubmission()
    };

    if (events?.length === 0 || !events) {
        return <h1 className=' mt-20 text-indigo-500 text-2xl'>No event in your city</h1>
    }
    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <PostEventForm eventId={isModalOpen} />
            </Modal>
            {
                events?.map((event, index) => {
                    const { city, description, date, heading, _id } = event;
                    return <>
                        <div key={_id} className="w-[350px]  mx-auto bg-white rounded-xl shadow-md  m-3">
                            <div className="flex flex-col w-full">
                                <div className="p-4 sm:p-6">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        <span>{city}</span>
                                        <span className=' text-[8px] block text-black'>{new Date(date).toLocaleDateString()}</span>

                                    </div>
                                    <p className="mt-1 text-lg leading-tight font-medium text-black">
                                        {heading}
                                    </p>
                                    <p className="mt-2 text-gray-500">{description}</p>
                                    <div className="mt-5 flex flex-wrap items-center ">
                                        <img
                                            className="h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://randomuser.me/api/portraits/men/75.jpg"
                                            alt="Avatar 1"
                                        />
                                        <img
                                            className="h-6 w-6 rounded-full ring-2 ring-white -ml-3"
                                            src="https://randomuser.me/api/portraits/women/74.jpg"
                                            alt="Avatar 2"
                                        />
                                        <img
                                            className="h-6 w-6 rounded-full ring-2 ring-white -ml-3"
                                            src="https://randomuser.me/api/portraits/men/76.jpg"
                                            alt="Avatar 3"
                                        />
                                        <span className="h-6 w-6 rounded-full ring-2 ring-white -ml-3 bg-indigo-500 text-white flex items-center justify-center text-sm font-semibold">
                                            +3
                                        </span>
                                    </div>
                                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                                        <button onClick={() => onAttend(_id)} className="w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            Attend Event
                                        </button>
                                        <button onClick={() => setIsModalOpen(_id)} className="w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                            Post on events
                                        </button>
                                        <Link to={`post/${_id}`} className="w-full text-center text-md sm:w-auto px-4 py-2  font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                            view Post
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })
            }
        </>

    );
}
