import InputField from "./(generator)/InputField";

export default function Generate() {
    return(
        <section className="h-screen bg-black flex items-center justify-center">
            <div className="text-center">
                <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-white mb-4">
                    <p>ЧТО У ВАС НА УМЕ?</p>
                </div>
                <InputField/>
            </div>
        </section>
    )
}
