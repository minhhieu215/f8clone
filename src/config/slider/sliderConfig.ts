import images from '../../assets/images'
import { themeBanner } from '../../theme'
interface IProps {
    title: string
    introduce: string
    img: string
    buttonText: string
    bgColor:string
}
console.log(themeBanner)
const sliderConfig: Array<IProps> = [
    {
        title:'Học ReactJS Miễn Phí!',
        introduce:'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
        buttonText:'Đăng kí ngay',
        img:images.bannerReact,
        bgColor:themeBanner.bannerReactJS,
    },
    {
        title:'F8 trên Facebook',
        introduce:'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
        buttonText:'Truy cập nhóm',
        img:images.bannerFaceBook,
        bgColor:themeBanner.bannerFbF8,

    },
    {
        title:'Thành Quả của Học Viên',
        introduce:'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
        buttonText:'Xem thành quả',
        img:images.bannerThanhqua,
        bgColor:themeBanner.bannerThanhqua,

    },
    {
        title:'Pre-Order HTML CSS Pro',
        introduce:'Chính thức chấp nhận ĐẶT HÀNG TRƯỚC từ ngày 08/08 - 18/08.',
        buttonText:'Tìm hiểu thêm',
        img:images.bannerHtmlCssPro,
        bgColor:themeBanner.bannerHtmlCssPro,

    },
    {
        title:'F8 trên Youtube',
        introduce:'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
        buttonText:'Truy cập kênh',
        img:images.bannerYoutube,
        bgColor:themeBanner.bannerYtbF8,

    },
]
export default sliderConfig;