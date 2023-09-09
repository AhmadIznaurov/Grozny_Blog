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
// next
// react
// typescript