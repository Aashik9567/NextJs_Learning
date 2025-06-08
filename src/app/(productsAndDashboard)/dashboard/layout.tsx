import Login from "@/app/(auth)/login/page"
export default function DashboardLayout({ children, notification, revenue, user }: {
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode
}
) {
    const isLoggedIn = false; // Replace with actual authentication logic
    return isLoggedIn? (
        <>
            <div className="min-w-full ">{children}</div>
            <div className="flex gap-6 ">
                <div className='flex flex-col gap-4 border-2 border-gray-200 p-4 '>
                    <div className='p-2 bg-white rounded shadow h-75'>{user}</div>
                    <div className='p-2 bg-white rounded shadow h-75'>{revenue}</div>
                </div>
                <div className="flex">
                    <div className='p-2 bg-white rounded shadow'>{notification}</div>
                </div>
            </div>


        </>
    ):(
        <Login />
    )
}
