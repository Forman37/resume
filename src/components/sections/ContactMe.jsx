import { FaEnvelope, FaLink, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMe() {
    return (
        <div className="border-2 border-black flex flex-col bg-white p-4 m-3 gap-3 h-50">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl underline text-bold mb-4">Contact Me</h1>
            </div>

            <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Troy, OH</span>
            </div>
            <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>forman3@me.com</span>
            </div>
            <div className="flex items-center gap-2">
                <FaLink />
                <span>discord.com/users/forman3</span>
            </div>
        </div>
    );
}
