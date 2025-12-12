import Image from "next/image";
import headshot from "../assets/images/headshots/james-side.jpg";

export default function Hero() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="flex flex-row items-center justify-center">
                <Image
                    src={headshot}
                    alt="James Forman"
                    width={160}
                    height={160}
                    className="rounded-full object-cover ovject-center"
                />
                <div>
                    <h1 className="text-4xl font-bold text-black">James Forman</h1>
                    <p className="mt-4 text-lg text-black">Software Engineer | BSCS 2026</p>
                </div>
            </div>
        </section>
    );
}
