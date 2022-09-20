import { BulbOutlined, EditOutlined, FileTextOutlined, HomeFilled, RiseOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem'
import { PlusStyled, RowStyled, WriteBlogContainer } from './styled'
const WriteBlog = () => {
    return (
        <Link to="/newpost">
            <WriteBlogContainer>
                <EditOutlined /> <span>Viết blog</span>
            </WriteBlogContainer>
        </Link>
    )
}
const Sidebar = () => {
    const [isWrite, setIsWrite] = React.useState(false)
    const handleChange = () => {
        setIsWrite(!isWrite)
    }
    return (
        <RowStyled>
            <Tooltip
                onVisibleChange={handleChange}
                trigger={['click']}
                color="#fff"
                placement="bottomRight"
                title={<WriteBlog />}
            >
                <PlusStyled isWrite={isWrite}>
                    <span>+</span>
                </PlusStyled>
            </Tooltip>
            <SidebarItem name="Home" icon={HomeFilled} link="" />
            <SidebarItem name="Lộ trình" icon={RiseOutlined} link="learning-paths" />
            <SidebarItem name="Học" icon={BulbOutlined} link="courses" />
            <SidebarItem name="Blog" icon={FileTextOutlined} link="blog" />
        </RowStyled>
    )
}

export default Sidebar
