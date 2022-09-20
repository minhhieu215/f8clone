interface IHideContent {
    title : string
    length: string
}
interface IContent {
    title :string 
    contentNumber:number
    hideContent : Array<IHideContent>
}
interface IProps {
    courseName: string
    price?: string
    numberMember?: string
    type?: Array<String>
    link?:string
    introduce: string
    whatYouLearn: Array<String>
    chapterNumber: number
    lessonNumber: number
    length: string
    level: string
    content?:Array<IContent>
}

const coursesConfig:Array<IProps> = [
    {
        courseName:"HTML CSS Pro",
        price:"1.290.000",
        numberMember:"",
        type:["pro"],
        link : 'html-css',
        introduce:"Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee." ,
        whatYouLearn: [],
        chapterNumber:13  ,
        lessonNumber: 163 ,
        length:"29 giờ 57 phút" ,
        level:"cơ bản",
        content:[{title:"1.Bắt đầu",contentNumber:4,hideContent:[{title:"1. Bạn sẽ làm được gì sau khóa học?",length:'03:15'},{title:"2. Tìm hiểu về HTML, CSS",length:'02:29'}]},{title:"2. Làm quen với HTML",contentNumber:4,hideContent:[{title:"5. Cấu trúc của 1 file HTML",length:'06:20'},{title:"6. Làm quen với màn thử thách",length:'01:00'}]}
    ]
    },
    {
        courseName:"Kiến thức nhập môn IT",
        price:"",
        numberMember:"77.972",
        type:['frontend','backend'],
        link : 'lessons-for-newbie',
        introduce:"Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé." ,
        whatYouLearn:["Các kiến thức cơ bản, nền móng của ngành IT","Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng",'Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng','Hiểu hơn về cách internet và máy vi tính hoạt động'] ,
        chapterNumber: 4,
        lessonNumber:12  ,
        length:"03 giờ 26 phút" ,
        level:"cơ bản",
        content:[{title:"1.Khái niệm kĩ thuật cần biết",contentNumber:2,hideContent:[{title:"1. Mô hình Client - Server là gì?",length:'11:15'},{title:"2. Domain là gì? Tên miền là gì?",length:'02:29'}]},{title:"2. Môi trường , con người IT",contentNumber:4,hideContent:[{title:" 3. Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục",length:'24:10'},{title:"4. Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?",length:'34:51'}]}]
    },
    {
        courseName:"Lập trình JavaScript nâng cao",
        price:"",
        numberMember:"19.652",
        type:['frontend','backend'],
        link : 'javascript-nang-cao',
        introduce:"Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ..." ,
        whatYouLearn:["Được học kiến thức miễn phí với nội dung chất lượng hơn mất phí","Các kiến thức nâng cao của Javascript giúp code trở nên tối ưu hơn","Hiểu được cách tư duy nâng cao của các lập trình viên có kinh nghiệm","Hiểu được các khái niệm khó như từ khóa this, phương thức bind, call, apply & xử lý bất đồng bộ","Có nền tảng Javascript vững chắc để làm việc với mọi thư viện, framework viết bởi Javascript"] ,
        chapterNumber:6 ,
        lessonNumber:28  ,
        length:"07 giờ 52 phút" ,
        level:"trung bình" ,
        content:[{title:"IIFE,Scope,Closure",contentNumber:10,hideContent:[{title:"1. Giới thiệu",length:'11:15'},{title:"2. IIFE là gì??",length:"23:57"}]},{title:"2.Hoisting,StrictMode, DataTypes",contentNumber:7,hideContent:[{title:" 11. Hoisting là gì?",length:'10:58'},{title:"12. Thực hành hoisting",length:'01:10'}]}]
    },
    {
        courseName:"Làm việc với Terminal & Ubuntu",
        price:"",
        numberMember:"6.233",
        type:['backend'],
        link : 'windows-terminal-wsl',
        introduce:"Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer." ,
        whatYouLearn:["Biết cách cài đặt và tùy biến Windows Terminal",
            "Biết sử dụng Windows Subsystem for Linux",
            "Thành thạo sử dụng các lệnh Linux/Ubuntu",
            "Biết cài đặt Node và tạo dự án ReactJS/",
           " Biết cài đặt PHP 7.4 và MariaDB trên Ubuntu 20.04",
            "Hiểu về Ubuntu và biết tự cài đặt các phần mềm khác"],
        chapterNumber:6 ,
        lessonNumber:42 ,
        length: "05 giờ 04 phút",
        level:"cơ bản" ,
        content:[{title:"1.Giới thiệu",contentNumber:1,hideContent:[{title:"1. Giới thiệu Windows Terminal & WSL",length:'04:13'}]},{title:"2.Windows Terminal & WSL",contentNumber:7,hideContent:[{title:"2. Cài đặt Windows Terminal",length:'20:57'},{title:"3. Ôn tập cài đặt Windows Terminal",length:'00:15'}]}]
    },
    {
        courseName:"Node & ExpressJS",
        price:"",
        numberMember:"22.514",
        type:['backend'],
        link : 'nodejs',
        introduce:"Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web." ,
        whatYouLearn:["Nắm chắc lý thuyết chung trong việc xây dựng web",
          "Biết cách làm việc với Mongoose, MongoDB trong NodeJS",
          "Xây dựng web với Express bằng kiến thức thực tế",
           "Biết cách xây dựng API theo chuẩn RESTful API",
           "Nắm chắc lý thuyết về API và RESTful API",
           "Được chia sẻ lại kinh nghiệm làm việc thực tế",
           "Nắm chắc khái niệm về giao thức HTTP",
           "Hiểu rõ tư tưởng và cách hoạt động của mô hình MVC",
           "Học được cách tổ chức code trong thực tế",
          "Biết cách deploy (triển khai) website lên internet"] ,
        chapterNumber:3 ,
        lessonNumber:38 ,
        length:"12 giờ 10 phút",
        level:"cơ bản" ,
        content:[{title:"1.Giới thiệu",contentNumber:9,hideContent:[{title:"1. Lời khuyên trước khóa học",length:'08:04'}]},{title:"2.Kiến thức cốt lõi",contentNumber:9,hideContent:[{title:"10. Template engine (handlebars)",length:'20:57'},{title:"11. Static file & SCSS",length:'00:15'}]}]
    },
]
export default coursesConfig