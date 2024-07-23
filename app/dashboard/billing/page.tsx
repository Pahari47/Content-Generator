'use client'
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { error } from 'console';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function billing() {
  
  const [loading,setLoading] = useState(false);
  const {user} = useUser();
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)

  const OnPayment = () =>{
    setLoading(true)
    axios.post('/api/create-subscription',{})
    .then(resp=>{
      console.log(resp.data);
      MakePayment(resp.data.id)
    },(error)=>{
      setLoading(false);
    })
  }

  const MakePayment = (subId:string) =>{
    const options={
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":'Pahari Frustrated',
      description:"Monthly Subscription",
      handler:async(resp:any)=>{
        console.log(resp);
        if(resp){
          SaveSubcription(resp.razorpay_payment_id)
        }
        setLoading(false);
      }
    }

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open()
  }

  const SaveSubcription = async (paymentId:string)=>{
    const result = await db.insert(UserSubscription)
    .values({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      active:true,
      paymentId:paymentId,
      joinDate:moment().format('DD/MM/YYYY')
    });
    console.log(result);
    if(result){
      window.location.reload();
    }
  }

  return (
    <>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className='flex justify-center text-3xl font-bold m-10'>Upgrade to with Monthly Plan</h1>
      <div className='flex relative justify-center gap-10'>
        <div className='h-[45vh] w-[18vw] bg-white shadow-md rounded-lg flex flex-col'>
          <div className='text-center'>
          <p className='mt-6 mb-3'>Free</p>
          <h1 className='font-bold text-3xl mb-2'>0$ / month</h1>
          </div>
          <div className='text-left ml-4 gap-2'>
            <li className='mt-3'>10,000 words/month</li>
            <li className='mt-3'>50+ Content templets</li>
            <li className='mt-3'>Unlimited Download & copy</li>
            <li className='mt-3'>1 Month of History</li>
          </div>
          <Button className='rounded-2xl w-[15vw] m-5'>Currently Active Plan</Button>
        </div>
        <div className='h-[45vh] w-[18vw] bg-white shadow-md rounded-lg'>
        <div className='text-center'>
          <p className='mt-6 mb-3'>Monthly</p>
          <h1 className='font-bold text-3xl mb-2'>5$ / month</h1>
          </div>
          <div className='text-left ml-4 gap-2'>
            <li className='mt-3'>1,00,000 words/month</li>
            <li className='mt-3'>50+ Content templets</li>
            <li className='mt-3'>Unlimited Download & copy</li>
            <li className='mt-3'>1 Year of History</li>
          </div>
          <Button disabled={loading} onClick={()=>OnPayment()} className='rounded-2xl bg-transparent flex gap-2 text-primary border border-gray-950 w-[15vw] m-5'>{loading&&<Loader2Icon className='animate-spin'/>}{userSubscription?'Active Plan': 'Get Started'}</Button>
        </div>
      </div>
    </>
  )
}

export default billing
