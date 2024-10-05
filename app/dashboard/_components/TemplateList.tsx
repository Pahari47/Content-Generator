"use client"
import Templates from '@/app/(data)/Templates';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface TEMPLATE{
  coord?:COORD[],
  weather?:WEATHER[],
  base:String,
  main?:MAIN[],
  visibility:String,
  wind?:WIND[],
  clouds?:CLOUDS[],
  dt:String,
  sys?:SYS[],
  timezone:String,
  id:String,
  name:String,
  cod:String,
  image:String
}

export interface COORD{
  lon:String,
  lat:String
}

export interface WEATHER{
  id:String,
  main:String,
  description:String,
  icon:String
}

export interface MAIN{
  temp:String,
  feels_like:String,
  temp_min:String,
  temp_max:String,
  pressure:String,
  humidity:String,
  sea_level:String,
  grnd_level:String
}

export interface WIND{
  speed:String,
  deg:String,
  gust:String
}

export interface CLOUDS{
  all:String
}

export interface SYS{
  type:String,
  id:String,
  country:String,
  sunrise:String,
  sunset:String
}

export default function TemplateList({userSearchInput}:any) {

  const [templateList, setTemplateList] = useState(Templates)
  useEffect(()=>{
    if(userSearchInput)
    {
      const filterData = Templates.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Templates)
    }
  },[userSearchInput])

  return (
    <>
     {templateList.map((item:TEMPLATE, index:number)=>(
    <div className="flex flex-col mt-5 items-center justify-center h-full">
      <div className="flex w-4/5 justify-between mb-8">
        <div className="w-1/2 h-52 bg-gray-200 flex flex-col items-center justify-center border">
          <h2 className="text-lg">{item.name}</h2>
          <h3 className='text-sm'>timezone:{item.timezone}</h3>
          <h3 className='text-sm'>visibility:{item.visibility}</h3>
          <h3 className='text-sm'>base:{item.base}</h3>
          <h3 className='text-sm'>dt:{item.dt}</h3>
          <h3 className='text-sm'>cod:{item.cod}</h3>
        </div>

        <div className="w-1/2 h-52 bg-gray-100 flex items-center justify-center border">
          {/* <Image src={item.image} alt='image' width={50} height={50} /> */}
        </div>
      </div>

      <div className="flex w-4/5 justify-between">

          <div className="w-1/3 h-28 cursor-pointer border flex items-center justify-center">
          {templateList.coord?.map((item, index) => (
        <div key={index}>
          <p>Longitude: {item.lon}</p>
          <p>Latitude: {item.lat}</p>
        </div>
      ))}
          </div>
          <div className="w-1/3 h-28 cursor-pointer border flex items-center justify-center"></div>
          <div className="w-1/3 h-28 cursor-pointer border flex items-center justify-center"></div>
      </div>
    </div>
    ))}
    </>
  );
}
