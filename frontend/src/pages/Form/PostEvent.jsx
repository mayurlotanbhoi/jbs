import React from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../../components/Forms/formsInputs/InputField';
import DatePicker from '../../components/Forms/formsInputs/DatePicker';
import InputTextarea from '../../components/Forms/formsInputs/InputTextarea';
import { MdOutlineHomeWork } from 'react-icons/md';
import { useCreateEventsMutation, usePostOnEventMutation, } from '../../services/events.service';
import { handleRequest } from '../../util/handleRequest';

export default function commentEventForm({ eventId }) {
    const { register, setValue, setError, getValues, reset, clearErrors, handleSubmit, formState: { errors } } = useForm();

    const [commentOnEvent, { data, isLoading, isError, isSuccess }] = usePostOnEventMutation();
    const handleChange = (fieldName, e) => {
        let value = e.target.value
        setValue(fieldName, value, { shouldValidate: true });
    };





    const onSubmit = async (data) => {
        console.log(eventId)
        const handleFormSubmission = async () => {
            const respon = await handleRequest(
                () => commentOnEvent({ data: data, eventId: eventId }),  // The API call function
                {
                    loadingMessage: "creating Events post...",
                    successMessage: "Your  event post created SuccessFully. ",
                    errorMessage: "There was an issue while your event post creations. Please try again later."
                }
            );

            if (respon?.data?.success) {
                reset()
            }
        };
        handleFormSubmission()
    };

    const modelClose = () => {
        setIsModalOpen(false)
        reset()
    }
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">comment On Events </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=' min:w-[300px]  text-black  dark:text-white       grid grid-cols-1 sm:grid-cols-2 gap-x-2' >

                <div className="w-[300px] my-2 col-span-full">
                    <InputTextarea
                        type="text"
                        placeholder="Event Post..."
                        rows={4}
                        label="Writ Event Post"
                        className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none focus-visible:shadow-none 
                        ${errors.comment ? "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 " : " border-stroke focus:border-green-500 dark:focus:border-green-500 "} 
                       dark:border-form-strokedark dark:bg-form-input dark:text-white `}
                        {...register("comment", {
                            required: "Please Enter Post",
                            minLength: {
                                value: 10,
                                message: "Post be greater than 10 letter"
                            },
                            maxLength: {
                                value: 2000,
                                message: "Post should be less than 200 letter"
                            }
                        })}
                        onChange={(e) => handleChange("comment", e)}
                    // icon={<FaAudiocomment className=" " size={25} />}
                    />
                    {errors.comment && <p id="username-error" className="text-red-500 text-xs mt-1 ">{errors.comment.message}</p>}
                </div>
                <div className="my-2 col-span-full">
                    <input
                        type="submit"
                        value="submit"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    />
                </div>
            </form>
        </>
    )
}
