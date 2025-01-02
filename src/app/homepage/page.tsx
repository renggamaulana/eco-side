import SlideBanner from "@/components/SlideBanner";

export default function Homepage() {
    return (
        <div>
            <SlideBanner/>
            <div className="w-full p-5 bg-slate-950 h-screen flex items-center justify-center">
                <h1 className="text-white font-semibold text-4xl w-2/4 text-center">“We work on people’s mindset and understanding about the earth we live on. We believe that people as well as institutions will change their behavior in an altered state of environmental knowledge. “</h1>
            </div>
            <div className="w-full p-5 bg-green-200 h-screen">
                <h1>OKe</h1>
            </div>
        </div>
    )
}