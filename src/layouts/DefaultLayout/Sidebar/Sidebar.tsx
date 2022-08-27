import { BulbOutlined, FileTextOutlined, HomeFilled, RiseOutlined } from '@ant-design/icons'
import React from 'react'
import SidebarItem from './SidebarItem'
import { PlusStyled, RowStyled } from './styled'
const Sidebar = () => {
    return (
        <RowStyled>
            <PlusStyled>
                <span>+</span>
            </PlusStyled>
            <SidebarItem name="Home" icon={HomeFilled} link="home" />
            <SidebarItem name="Lộ trình" icon={RiseOutlined} link="learning-paths" />
            <SidebarItem name="Học" icon={BulbOutlined} link="courses" />
            <SidebarItem name="Blog" icon={FileTextOutlined} link="blog" />
        </RowStyled>
    )
}

export default Sidebar
