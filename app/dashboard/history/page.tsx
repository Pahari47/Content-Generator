"use client"
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

function History() {
    const [historyData, setHistoryData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await db.select().from(AIOutput);
                setHistoryData(data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
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
