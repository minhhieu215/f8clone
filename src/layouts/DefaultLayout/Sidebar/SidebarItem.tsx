import Icon from '@ant-design/icons'
import React, { ReactPropTypes } from 'react'
import { SidebarContainer } from './styled'
interface IProps {
    name: string
    icon: any
}
interface IconProps {
    style: React.CSSProperties
}
const SidebarItem: React.FC<IProps> = ({ name, icon }) => {
    const MyIcon: any = (props: IconProps) => <Icon component={icon} {...props} />
    return (
        <SidebarContainer>
            {<MyIcon className="icon" style={{ color: '#404040' }} />}
            <p>{name}</p>
        </SidebarContainer>
    )
}

export default SidebarItem
