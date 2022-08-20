interface IProps {
    courseName: string
    price?: string
    numberMember?: string
    type?: Array<String>
}
const coursesConfig:Array<IProps> = [
    {
        courseName:"HTML CSS Pro",
        price:"1.290.000",
        numberMember:"",
        type:["pro"],
    },
    {
        courseName:"Kiến thức nhập môn IT",
        price:"",
        numberMember:"77.972",
        type:['frontend','backend']
    },
    {
        courseName:"Lập trình JavaScript nâng cao",
        price:"",
        numberMember:"19.652",
        type:['frontend','backend']
    },
    {
        courseName:"Làm việc với Terminal & Ubuntu",
        price:"",
        numberMember:"6.233",
        type:['backend']
    },
    {
        courseName:"Node & ExpressJS",
        price:"",
        numberMember:"22.514",
        type:['backend']

    },
]
export default coursesConfig