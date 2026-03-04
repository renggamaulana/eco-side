import SlideBanner from "@/components/SlideBanner";

export default function Homepage() {
    return (
        <div className="w-full text-slate-800">

            <SlideBanner />

            {/* VISI */}
            {/* SECTION 1 - VISI */}
            <section className="w-full h-screen p-10 bg-slate-950 flex items-center justify-center">
                <h1 className="text-white font-semibold text-2xl lg:text-4xl lg:w-2/4 text-center">
                “We work to cultivate awareness and responsibility for the Earth we live on. 
                We believe that changing mindsets leads to meaningful environmental action.”
                </h1>
            </section>

            {/* WHY SECTION */}
            <section className="w-full py-20 px-6 bg-green-50">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                    Kenapa Kita Harus Peduli?
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    <Card 
                        emoji="🌍"
                        title="Perubahan Iklim"
                        desc="Suhu bumi meningkat dan cuaca menjadi tidak menentu. Kita bisa memperlambat dampaknya lewat aksi kecil sehari-hari."
                    />
                    <Card 
                        emoji="🗑️"
                        title="Sampah Plastik"
                        desc="Plastik membutuhkan ratusan tahun untuk terurai. Mengurangi penggunaan plastik adalah langkah sederhana tapi berdampak besar."
                    />
                    <Card 
                        emoji="🌲"
                        title="Hutan yang Hilang"
                        desc="Penebangan hutan terus berlangsung. Menanam pohon dan mendukung reforestasi bisa membantu memulihkan bumi."
                    />

                </div>
            </section>

            {/* AJAK AKSI */}
            <section className="w-full py-20 px-6 bg-green-700 text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Mari Bergerak Bersama
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Perubahan terjadi bukan karena satu orang yang sempurna, tapi karena banyak orang
                    yang mengambil langkah kecil setiap hari.
                </p>

                <a href="#join" className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-100 transition">
                    Bergabung Dengan Komunitas
                </a>
            </section>

            {/* PROGRAM / AKTIVITAS */}
            <section className="w-full py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                    Program & Kegiatan Kami
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    <ProgramCard 
                        title="Gerakan Menanam Pohon"
                        desc="Mengajak siapa pun menanam satu pohon per bulan di rumah atau lingkungan sekitar."
                        link="/program/tanam-pohon"
                    />

                    <ProgramCard 
                        title="Komunitas Zero Waste"
                        desc="Berbagi cara hidup minim sampah melalui edukasi dan tantangan gaya hidup ramah lingkungan."
                        link="/program/zero-waste"
                    />

                    <ProgramCard 
                        title="Bersih Pantai & Sungai"
                        desc="Aksi membersihkan sampah plastik dari garis pantai dan aliran sungai secara rutin."
                        link="/program/bersih-laut"
                    />

                </div>
            </section>

        </div>
    );
}

function Card({ emoji, title, desc }: any) {
    return (
        <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">{emoji}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </div>
    )
}

function ProgramCard({ title, desc, link }: any) {
    return (
        <a href={link} className="p-8 bg-green-50 rounded-3xl shadow-sm hover:shadow-lg transition block">
            <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
            <p className="text-slate-600 mb-4">{desc}</p>
            <span className="text-green-700 font-semibold hover:underline">Pelajari lebih lanjut →</span>
        </a>
    )
}
