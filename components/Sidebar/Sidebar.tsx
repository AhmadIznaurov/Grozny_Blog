import React from "react";
import {SidebarMenu} from "@/components/Sidebar/SidebarMenu";
import styles from '@/styles/sidebar.module.scss';


export const Sidebar: React.FC = () => {
    return (
        <div className={styles.container}>
              <SidebarMenu />
        </div>
    );
}
