// src/data/projects.js
import AsuClubsImg from "@/assets/images/projects/asu-clubs.png";
import PaycheckerImg from "@/assets/images/projects/paychecker-screens-1.png";
import AsuBookStoreImg from "@/assets/images/projects/asu-bookstore.png";

const projects = [
    {
        id: "asu-clubs",
        title: "ASU Clubs Web App",
        short: "Full-stack app for ASU clubs with admin/user flows, events, and auth.",
        tech: ["React", "Tailwind", "Firestore", "Firebase Auth"],
        image: AsuClubsImg,
        github: "https://github.com/Forman37/SunDevilsConnect",
        demo: "https://asu-clubs.example.com",
    },
    {
        id: "paychecker",
        title: "Paychecker+ (iOS)",
        short: "iOS app (80+ downloads) to calculate and track paychecks for nurses and other professions.",
        tech: ["Swift", "Firestore", "Firebase"],
        image: PaycheckerImg,
        appStore: "https://apps.apple.com/us/app/paychecker/id6751362951",
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
