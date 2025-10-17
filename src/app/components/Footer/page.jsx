export default function Footer(){
    return(
        <div className="h-fit w-full bg-surface-background ">
            <div className="mx-6 lg:mx-16 flex flex-col lg:flex-row justify-between  lg:items-center">
            <div>
            <p className="text-text-secondary text-[12px] mt-5">SaraTouahri-Portfolio</p>
            </div>
            <div className="flex  gap-20 mb-6 lg:mb-0 lg:gap-2 text-white font-heebo text-sm mt-5">
                <a href="https://www.linkedin.com/in/sara-touahri-39284a2a4">Linkdin</a>
                <a href="https://github.com/TouahriSara">Github</a>
            </div>
            </div>
        </div>
    )
}