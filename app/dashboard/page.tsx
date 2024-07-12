"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const page = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* Search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default page
