import ProgressBar from "@/components/ui/ProgressBar";

export default function CodeLanguages() {
    return (
        <div className="bg-white border-2 border-black flex flex-col p-4 m-3 gap-2">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl underline font-bold mb-4">Technical Skills</h1>
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>Python</h1>
                    <h1 className="text-gray-500">Intermediate</h1>
                </div>
                <ProgressBar bgcolor="green" completed="50" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>Swift</h1>
                    <h1 className="text-gray-500">Intermediate</h1>
                </div>
                <ProgressBar bgcolor="green" completed="50" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>JavaScript</h1>
                    <h1 className="text-gray-500">Intermediate</h1>
                </div>
                <ProgressBar bgcolor="green" completed="50" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>HTML</h1>
                    <h1 className="text-gray-500">Intermediate</h1>
                </div>
                <ProgressBar bgcolor="green" completed="50" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>Tailwind</h1>
                    <h1 className="text-gray-500">Beginner</h1>
                </div>
                <ProgressBar bgcolor="green" completed="25" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>Git</h1>
                    <h1 className="text-gray-500">Intermediate</h1>
                </div>
                <ProgressBar bgcolor="green" completed="50" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>C++</h1>
                    <h1 className="text-gray-500">Beginner</h1>
                </div>
                <ProgressBar bgcolor="green" completed="25" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row justify-between">
                    <h1>Jira</h1>
                    <h1 className="text-gray-500">Beginner</h1>
                </div>
                <ProgressBar bgcolor="green" completed="25" />
            </div>
        </div>
    );
}
