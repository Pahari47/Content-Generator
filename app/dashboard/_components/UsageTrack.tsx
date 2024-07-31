"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput, UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'

function UsageTrack() {
    const {user} = useUser()
    const {totalUsage,setTotalUsage} = useContext(TotalUsageContext)
    const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
    const [maxWords, setMaxWords] = useState(10000)
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

    useEffect(()=>{
        user&&GetData();
        user&&IsUserSubscribe();
    },[user]);

    useEffect(()=>{
      user&&GetData();
    },[updateCreditUsage&&user])

    const GetData = async()=>{
        {/* @ts-ignore */}
        const result:History[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

        GetTotalUsage(result)

    }

    const IsUserSubscribe = async ()=>{
      {/* @ts-ignore */}
      const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress));

      if(result){
        setUserSubscription(true);
        setMaxWords(100000)
      }
    }

    const GetTotalUsage = (result:History[]) =>{
        let total:number = 0;
        result.forEach(element =>{
          {/* @ts-ignore */}
            total = total+Number(element.aiResponse?.length) 
        })
        setTotalUsage(total)
        console.log(total);
    }
  return (
    <div className='m-5'>
      <div className='bg-primary text-white rounded-lg p-3'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-slate-600 w-full rounded-full mt-3'>
            <div className='h-2 bg-white rounded-full' style={{width:(totalUsage/maxWords)*100+"%"}}></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credit used</h2>
      </div>
      <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
