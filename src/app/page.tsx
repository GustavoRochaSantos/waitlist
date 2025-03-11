"use client"
import { getWaitlistType, postWaitlist } from "@/services/waitlist";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { MdMailOutline, MdOutlineSmartphone } from "react-icons/md";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Home() {
  const [type, setType] = useState('email')
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState<string | undefined>(undefined)
  const methods = useForm({
    defaultValues: {
      value: ""
    }
  })

  const handleSubmit = async (data: { value: string }) => {
    setIsLoading(true)
    const res = await postWaitlist({ type, value: data.value })
    console.log(res)
    setIsLoading(false)
  }

  const loadData = async () => {
    setIsLoading(true)
    const res = await getWaitlistType()
    setType(res.type)
    setIsLoading(false)
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="max-w-3xl w-full space-y-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">Coming Soon! {type}</h1>
        <h3 className="text-2xl font-extrabold">Join the waitlist below.</h3>
        <p>Be the fist to know when tickets drop! Enter your email to join the waitlist.</p>
        {/* {isLoading ? <FaSpinner className="animate-spin text-2xl" /> : ( */}
        <form onSubmit={methods.handleSubmit(handleSubmit)}  >
          <div className="flex justify-between items-center gap-3" >
            <div className={`buttonIcon ${type === 'phone' ? 'bg-red-600' : "bg-red-300"} `} onClick={() => setType('phone')}>
              <MdOutlineSmartphone />
            </div>
            <div className={`buttonIcon ${type === 'email' ? 'bg-red-600' : "bg-red-300"} `} onClick={() => setType('email')}>
              <MdMailOutline />
            </div>
            <div className="border-gray-300 border-2 rounded-md py-4 px-2 w-96">
              {type === 'email' ? (
                <Controller
                  name="value"
                  control={methods.control}
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <input
                      placeholder="Enter email address"
                      type="email"
                      className="border-0 w-full "
                      {...field}
                    />
                  )} />


              ) : (
                <Controller
                  name="value"
                  control={methods.control}
                  rules={{ required: 'Phone is required' }}
                  render={({ field }) => (
                    <PhoneInput
                      country={'us'}
                      {...field}
                    />
                  )}
                />
              )}
              {methods.formState.errors.value && <p className="text-red-500">{methods.formState.errors.value.message}</p>}
            </div>
            <button className="flex justify-center items-center rounded-full px-10 bg-red-300 text-white font-bold w-64 h-12"
              type="submit" >
              {isLoading ? <FaSpinner className="animate-spin" /> : 'Join the waitlist'}
            </button>
          </div>
        </form>
        {/* )} */}
      </main>
    </div >
  );
}
