export default function DashboardLayout({ children, notification, revenue, user }: {
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode
}
) {
    return (
        <>
            <div>{children}</div>
            <div className="flex gap-6 w-full ">
                <div className='flex flex-col gap-4 border-2 border-gray-200 p-4 '>
                    <div className='p-2 bg-white rounded shadow h-75'>{user}</div>
                    <div className='p-2 bg-white rounded shadow h-75'>{revenue}</div>
                </div>
                <div className="flex flex-1">
                    <div className='p-2 bg-white rounded shadow'>{notification}</div>
                </div>
            </div>


        </>
    )
}
