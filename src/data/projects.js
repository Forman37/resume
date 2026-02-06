// src/data/projects.js
import AsuClubsImg from "@/assets/images/projects/asu-clubs.png";
import PaycheckerImg from "@/assets/images/projects/paychecker-screens-1.png";
import AsuBookStoreImg from "@/assets/images/projects/asu-bookstore.png";
import ExpressExplain from "@/assets/images/projects/ExpressExplain.png";

const projects = [
    {
        id: "paychecker",
        title: "Paychecker+ (iOS)",
        short: "iOS app (100+ downloads) to calculate and track paychecks for nurses and other professions. Allows for extremely complicated or very simple paycheck calculation.",
        tech: ["Swift", "Firestore", "Firebase"],
        image: PaycheckerImg,
        appStore: "https://apps.apple.com/us/app/paychecker/id6751362951",
    },
    {
        id: "express-explain",
        title: "Express Explain",
        short:
            "A collaborated full-stack app for students at ASU that allows a user to ask a question with documents or self-uploaded files. " +
            "The question is run through a RAG database to allow accurate, precise information. My part in this is uploading chats to the database, displaying chats for the user, retrieving chats from the database for reuse, and help fine-tuning the lambda functions.",
        tech: ["React", "Tailwind", "ChatGPT API", "AWS Database"],
        image: ExpressExplain,
    },
    {
        id: "asu-clubs",
        title: "ASU Clubs Web App",
        short: "Full-stack app for ASU clubs with admin/user flows, events, and auth.",
        tech: ["React", "Tailwind", "Firestore", "Firebase Auth"],
        image: AsuClubsImg,
        github: "https://github.com/Forman37/SunDevilsConnect",
    },
    {
        id: "asu-bookstore",
        title: "ASU BookStore Web App",
        short: "A collaborated full-stack app for ASU bookstore with SQLite database, admin access, and cart tracking. Parts completed by me are the home page, database setup, and navigation logic. Some input through the rest of the pages.",
        tech: ["Java", "CSS", "SQLite"],
        image: AsuBookStoreImg,
        github: "https://github.com/Forman37/ASU-Library-Project/tree/main",
    },
];

export default projects;
