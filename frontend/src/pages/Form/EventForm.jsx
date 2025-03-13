import React from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../../components/Forms/formsInputs/InputField';
import DatePicker from '../../components/Forms/formsInputs/DatePicker';
import { FaAudioDescription, FaHeading, FaRupeeSign } from 'react-icons/fa';
import InputTextarea from '../../components/Forms/formsInputs/InputTextarea';
import { MdOutlineHomeWork } from 'react-icons/md';
import { useCreateEventsMutation } from '../../services/events.service';
import { handleRequest } from '../../util/handleRequest';

export default function EventForm() {
    const { register, setValue, setError, getValues, reset, clearErrors, handleSubmit, formState: { errors } } = useForm();
    const [createEvents, { data, isLoading, isError, isSuccess }] = useCreateEventsMutation();
    const handleChange = (fieldName, e) => {
        let value = e.target.value
        setValue(fieldName, value, { shouldValidate: true });
    };



    const onSubmit = async (data) => {

        console.log(data)


        const handleFormSubmission = async () => {
            const respon = await handleRequest(
                () => createEvents(data),  // The API call function
                {
                    loadingMessage: "creating Events...",
                    successMessage: "Your  event created SuccessFully. ",
                    errorMessage: "There was an issue while your event creations. Please try again later."
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
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Add Events </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=' min:w-[300px]  text-black  dark:text-white       grid grid-cols-1 sm:grid-cols-2 gap-x-2' >
                <div className=' mt-[0.6rem]'>
                    <InputField
                        type="text"
                        placeholder="Event Heading..."
                        label="Event Heading"
                        className={`w-full rounded-lg border  bg-transparent py-3 pl-6 pr-10 outline-none focus-visible:shadow-none 
  ${errors.heading ? "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 " : " border-stroke focus:border-green-500 dark:focus:border-green-500 "} 
  dark:border-form-strokedark dark:bg-form-input dark:text-white `}
                        {...register("heading", {
                            required: "Please enter the payment amount",

                            minLength: {
                                value: 3,
                                message: "Name should be greater than 3 letter"
                            },
                            maxLength: {
                                value: 40,
                                message: "Name should be less than 40 letter"
                            }
                        })}
                        onChange={(e) => handleChange("heading", e)}
                        icon={<FaHeading size={20} />}
                        errorSms={errors.heading && <p className="text-red-500 text-xs mt-1 ">{errors.heading.message}</p>}
                    />
                </div>


                {/* payment_date */}
                <DatePicker
                    label="Event date"
                    placeholder="Select evetn date"
                    // onChange={(e) => handleChange("payment_date", e)}
                    setValue={setValue}
                    setKey="date"
                    dateFormat="d M, Y"
                    className={`w-full cursor-pointer rounded-lg border bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:bg-white file:py-3 file:px-5 file:hover:bg-primary file:hover:text-white file:hover:bg-opacity-10
                                   ${errors.date ? "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 " : " border-stroke focus:border-green-500 dark:focus:border-green-500"} 
                                    disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white`}
                    {...register("date", {
                        required: "Please event  date",
                    })}
                    errorSms={errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                />


                <div className="my-2 col-span-full">
                    <InputTextarea
                        type="text"
                        placeholder="Event Description..."
                        rows={4}
                        label="Enter Event Description"
                        className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none focus-visible:shadow-none 
                        ${errors.description ? "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 " : " border-stroke focus:border-green-500 dark:focus:border-green-500 "} 
                       dark:border-form-strokedark dark:bg-form-input dark:text-white `}
                        {...register("description", {
                            required: "Please Enter description",
                            minLength: {
                                value: 10,
                                message: "description be greater than 10 letter"
                            },
                            maxLength: {
                                value: 2000,
                                message: "description should be less than 200 letter"
                            }
                        })}
                        onChange={(e) => handleChange("description", e)}
                        icon={<FaAudioDescription className=" " size={25} />}
                    />
                    {errors.description && <p id="username-error" className="text-red-500 text-xs mt-1 ">{errors.description.message}</p>}
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
