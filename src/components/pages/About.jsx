import avatar from '../../assets/avatar.png'



const About = () => {
  return (
    <section id="about" className=" bg-sky-200 py-16 min-h-screen">
        <div className="container flex flex-col-reverse lg:flex-row gap-10 mx-auto px-10 lg:px-20 w-full">
            <div>
                <img src={avatar} className='w-160 rounded-4xl' />
            </div>
            <div className="flex flex-col space-y-2 lg:w-150 w-100">
                <h1 className='text-4xl font-bold'>  ABOUT ME !</h1>
                <h1 className='text-2xl font-medium'> Full-stack developer</h1>
                <p className='text-xl font-normal'> Tôi là một sinh viên công nghệ thông tin tại trường đại học Kiên Giang, 
                    yêu thích lập trình từ cấp ba và có nền tảng tư duy rõ ràng từ thời còn code Pascal. 
                    Hiện tôi đang tìm hiểu web và dành thời gian mỗi ngày để làm các dự án nhỏ nhằm củng cố kỹ năng.
                </p>
                <p className='text-xl font-normal'> Tôi đặc biệt hứng thú với web development. 
                    Những sản phẩm nhỏ — từ các trang web đơn giản đến phức tạp — 
                    là cách tôi rèn tư duy logic và khả năng tự học.
                </p>
                <h1 className='text-2xl font-medium'> Thông tin liên hệ cơ bản </h1>
                <p className='text-xl font-normal'> My email : <a>sinhoang010@gmail.com</a></p>
                <p className='text-xl font-normal'> My address : Kí túc xá Nam, trường đại học Kiên Giang</p>
                <h1 className='text-2xl font-medium'> Thông tin CV của tôi </h1>
                <button className=' rounded-2xl p-2 w-50 font-bold
                cursor-pointer bg-sky-300 text-sky-600 transition hover:scale-110
                hover:bg-sky-400 hover:text-sky-700'> Xem CV </button>
            </div>
        </div>
    </section>
  )
}

export default About