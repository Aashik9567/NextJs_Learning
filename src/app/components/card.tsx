export const Card =({children}:{
    children:React.ReactNode;
})=>{

    return(
       <div className="bg-pink-400 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] p-6 my-5 border border-red-100 transition-all duration-300 ease-out relative overflow-hidden">
            {children}
        </div>
    )
}