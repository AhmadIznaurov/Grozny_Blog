import React from 'react';
import './page.scss';
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {Content} from "@/components/Content/Content";


export default function Home() {
  return (
    <div className='container'>
      <Sidebar />
      <Content />
    </div>
  )
}

//Time video is on 1:10:00 - 1:46:47