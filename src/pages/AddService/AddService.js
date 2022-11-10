import { Label, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';

const AddService = () => {
    useTitle('Add Services')
    const [form, setForm] = useState([
        { label: "", responses: [{ value: "" }] }
    ]);
    const [facility, setFacility] = useState([
        { label: "", responses: [{ value: "" }] }
    ]);

    const [accept, setAccept] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleInput = event => {
        setAccept(event.target.value)
    }

    const handleAddService = e => {
        e.preventDefault()
         const from = e.target;
         const title = from.title.value;
        const desc = from.desc.value;
        const feature = form;
        const facilit = facility;
        const ttc = from.thingstocarry.value;
        const img = from.photoUrl.value;
        const date = from.date.value;
        const days = from.days.value;
        const bdt = from.price.value;
        console.log(title, desc, feature, facilit, ttc, img, bdt, date);
        const addService = {
            package_name: title,
            img: img,
            description: desc,
            tour_feature: feature,
            facility: facilit,
            Things_to_Carry: ttc,
            days: days,
            date: date,
            price: bdt
        }
        fetch('https://server-shuvoprogram.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    from.reset()
                    toast.success("Successfully Add Package !")
                }

            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mx-20'>
            <form onSubmit={handleAddService} className="grid grid-cols-3">
                {/* title */}
                <div className='col-span-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Title"
                        />
                    </div>
                    <TextInput
                        id="small"
                        type="text"
                        name='title'
                        sizing="sm"
                    />
                </div>
                {/* description */}
                <div className='col-span-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="description"
                        />
                    </div>
                    <Textarea
                        id="description"
                        name='desc'
                        placeholder="Please write your service details..."
                        required={true}
                        rows={4}
                    />
                </div>
                {/* dynamic field */}
                <div className='flex'>
                    <BsFillPlusCircleFill
                        className='cursor-pointer h-6 w-6 mr-4 mt-2'
                        onClick={() => {
                            const formCopy = [...form];
                            formCopy.push({ label: "", responses: [{ value: "" }] });
                            setForm(formCopy);
                            
                        }}
                    />

                    <div className='flex flex-col'>
                        {form.map((question, key) => (
                            <div className="" key={key}>
                                <label>Feature {key + 1}</label>
                                <TextInput
                                    id="small"
                                    type="text"
                                    sizing="md"
                                    value={question.label}
                                    onChange={(e) => {
                                        const formCopy = [...form];
                                        formCopy[key].label = e.target.value;
                                        setForm(formCopy);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* dynamic field-2 */}
                <div className='flex items-center'>
                    <button
                        onClick={() => {
                            const facilityCopy = [...facility];
                            facilityCopy.push({ label: "", responses: [{ value: "" }] });
                            setFacility(facilityCopy);
                            
                        }}
                        disabled={disabled}
                    > <BsFillPlusCircleFill onClick={handleInput} className='h-6 w-6 mr-4 mt-2' /> </button>
                    <div className='flex flex-col'>
                        {facility.length < 5 ?
                         (facility.map((question, key) => (
                            <div className="..." key={key}>
                                <label>Facility {key + 1}</label>
                                <TextInput
                                    id="small"
                                    type="text"
                                    sizing="sm"
                                    value={question.label}
                                    onChange={(e) => {
                                        const facilityCopy = [...facility];
                                        facilityCopy[key].label = e.target.value;
                                        setFacility(facilityCopy);
                                    }}
                                />
                            </div>
                        ))) : setDisabled(!accept)
                        }
                    </div>
                </div>
                {/* things to carry  */}
                <div className='col-span-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="things to carry"
                            value="Things To carry"
                        />
                    </div>
                    <Textarea
                        id="things to carry"
                        placeholder="Please write your carry on tour..."
                        name='thingstocarry'
                        required={true}
                        rows={2}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Tour Date"
                        />
                    </div>
                    <TextInput
                        id="small"
                        type="date"
                        name='date'
                        sizing="sm"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Tour Date"
                        />
                    </div>
                    <TextInput
                        id="small"
                        type="number"
                        name='days'
                        sizing="sm"
                    />
                </div>
                {/* upload img */}
                <div className='col-span-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Package Photo"
                        />
                    </div>
                    <TextInput
                        id="small"
                        type="text"
                        name='photoUrl'
                        sizing="sm"
                    />
                </div>
                <div>
                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                        <label htmlFor="price" className="block text-sm font-medium">Package price</label>
                        <div className="flex">
                            <input type="number" name="price" id="price" placeholder="Package Price" className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400" />
                            <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">৳</span>
                        </div>
                    </fieldset>
                </div>
                <input type="submit" value="Add Service" className='p-2 cursor-pointer bg-sky-500 rounded-lg col-span-full w-40 mt-5'/>
                </form>
            </div>
    );
};

export default AddService;