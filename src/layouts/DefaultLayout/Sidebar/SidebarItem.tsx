import Icon from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkStyled, SidebarContainer } from './styled'
interface IProps {
    name: string
    icon: any
    link: string
}
interface IconProps {
    style: React.CSSProperties
}
const SidebarItem: React.FC<IProps> = ({ name, icon, link }) => {
    const MyIcon: any = (props: IconProps) => <Icon component={icon} {...props} />
    return (
        <LinkStyled>
            <NavLink to={'/' + link} className={({ isActive }) => (isActive ? 'active' : 'unselected')}>
                <SidebarContainer>
                    {<MyIcon className="icon" style={{ color: '#404040' }} />}
                    <p>{name}</p>
                </SidebarContainer>
            </NavLink>
        </LinkStyled>
    )
}

export default SidebarItem
