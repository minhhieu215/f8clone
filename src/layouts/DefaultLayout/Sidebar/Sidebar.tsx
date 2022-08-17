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
            <SidebarItem name="Home" icon={HomeFilled} />
            <SidebarItem name="Lộ trình" icon={RiseOutlined} />
            <SidebarItem name="Học" icon={BulbOutlined} />
            <SidebarItem name="Blog" icon={FileTextOutlined} />
        </RowStyled>
    )
}

export default Sidebar
