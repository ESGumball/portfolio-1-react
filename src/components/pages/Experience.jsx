

const Experience = () => {
  return (
    <section id="experience" className=" bg-sky-100 py-16 h-screen"> 
        <div className="container flex flex-col items-center mx-auto space-y-4">
            <h1 className='text-4xl font-bold'> Experience </h1>
            <h2 className='text-2xl font-medium'> Đây là một số kinh nghiệm của tôi </h2>
            <div className="flex flex-row justify-between text-center w-350 gap-20 h-full">
                <div className="w-full rounded-2xl bg-blue-400 p-4">
                    <h1 className='text-2xl font-bold text-sky-100'>Self-learning Experience</h1>
                    <div className="text-left">
                        <h2 className='text-xl font-medium'> Tự học HTML, CSS, JavaScript - 2025 </h2>
                        <p> - Nghiên cứu từ W3Schools, Geeksforgeeks </p>
                        <p> - Hiểu rõ cấu trúc DOM, CSS Flexbox & Grid, event handling. </p>
                        <p> - Áp dụng vào việc dựng giao diện responsive cho website cá nhân. </p>
                    </div>
                    <div className="text-left">
                        <h2 className='text-xl font-medium'> Tự học React.js thông qua dự án — 2025 </h2>
                        <p> - Xây portfolio bằng React để làm quen component, props, state. </p>
                        <p> - Tự triển khai Tailwind để tối ưu UI. </p>
                        <p> - Kết quả: Hiểu cách tổ chức Component Tree, Re-render và Props Drilling. </p>
                    </div>
                </div>
                <div className="w-full rounded-2xl bg-blue-400 p-4">
                    <h1 className='text-2xl font-bold text-sky-100'>Academic Projects</h1>
                    <h2 className='text-xl font-medium text-left'> - Bài tập lớn môn Lập trình Web: Website bán hàng sử dụng PHP + MySQL </h2>
                    <h2 className='text-xl font-medium text-left'> - Môn Lập trình Python: Công cụ quản lý sinh viên (CRUD) </h2>
                    <h2 className='text-xl font-medium text-left'> - Xây dựng hệ thống quản lý sinh viên </h2>
                    <h2 className='text-xl font-medium text-left'> - Xây dựng hệ thống quản lý thư viện </h2>
                </div>
                <div className="w-full rounded-2xl bg-blue-400 p-4">
                    <h1 className='text-2xl font-bold text-sky-100'>Personal Projects</h1>
                    <h2 className='text-xl font-medium text-left'> - Xây dựng website portfolio bằng React với Tailwind </h2>
                    <h2 className='text-xl font-medium text-left'> - Hệ thống đăng nhập PHP + MySQL </h2>
                    <h2 className='text-xl font-medium text-left'> - Clone giao diện Facebook / Shopee bằng HTML, CSS, JS </h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience