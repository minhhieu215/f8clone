import images from '../assets/images';
interface IPost {
    courseName:string;
    userAvatar: string
    userName: string
    timeToRead: string
}

const postConfig :Array<IPost> =[
    {   
        courseName:"Tổng hợp các sản phẩm của học viên tại F8",
        userAvatar : images.logoImg,
        userName:"Sơn Đặng",
        timeToRead:"6",
    },
    {   
        courseName:"Ký sự ngày thứ 25 học ở F8 ",
        userAvatar : images.logoImg,
        userName:"Sơn Sơn",
        timeToRead:"1",
    },
    {   
        courseName:"Thời gian và Động lực",
        userAvatar : images.logoImg,
        userName:"Dong Ngo",
        timeToRead:"6",
    },
]

export default postConfig
