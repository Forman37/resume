import { HiAcademicCap } from "react-icons/hi2";

export default function Education() {
    return (
        <>
            <div className="border-2 border-black flex flex-col items-center bg-white p-4 m-3">
                <h1 className="text-2xl underline font-bold mb-4">Education</h1>
                <div className="flex gap-1 mb-3 w-full">
                    <HiAcademicCap className="text-xl mt-1" />
                    <div className="flex flex-col leading-tight">
                        <h2 className="font-bold text-lg">BS Computer Science</h2>
                        <span className="text-sm font-semibold">Arizona State University</span>
                        <span className="text-sm">(2023-2026)</span>
                    </div>
                </div>
                <div className="flex gap-1 mb-2 w-full">
                    <HiAcademicCap className="text-xl mt-1" />
                    <div className="flex flex-col leading-tight">
                        <h2 className="font-bold text-lg">BS Nursing</h2>
                        <span className="text-sm font-semibold">Ohio University</span>
                        <span className="text-sm">(2022-2023)</span>
                    </div>
                </div>
            </div>
        </>
    );
}
