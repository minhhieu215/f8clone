import React from 'react'
import { Logo, Logomini } from './styled'
interface IProps {
    img: string
    type?: string
    size?: string
}
const Image: React.FC<IProps> = ({ img, type, size }) => {
    if (type === 'logo' && size == 'mini') {
        return <Logomini src={img} />
    } else if (type === 'logo') {
        return <Logo src={img} />
    } else {
        return <img src={img} />
    }
}

export default Image
