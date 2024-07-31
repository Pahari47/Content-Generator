"use client"
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

function History() {
    const {user} = useUser()
    const [historyData, setHistoryData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                {/* @ts-ignore */}
                const data = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
                setHistoryData(data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchData();
    }, [user]);


    return (
        <div>
            {/* @ts-ignore */}
            {historyData.map((item, index) => (
                <div className='m-4 grid gap-4 grid-cols-10' key={index}>
                    <div className='min-h-[100px] rounded-lg bg-transparent border-blue-500 shadow col-span-2'>
                        {item.templateSlug}
                    </div>
                    <div className='min-h-[100px] rounded-lg bg-transparent border-blue-500 shadow col-span-6'>
                        {item.aiResponse}
                    </div>
                    <div className='min-h-[100px] rounded-lg bg-transparent border-blue-500 shadow col-span-2'>
                        {item.createdAt}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default History;
