// src/data/projects.js
import AsuClubsImg from "@/assets/images/projects/asu-clubs.png";
import PaycheckerImg from "@/assets/images/projects/paychecker-screens-1.png";

const projects = [
    {
        id: "asu-clubs",
        title: "ASU Clubs Web App",
        short: "Full-stack app for ASU clubs with admin/user flows, events, and auth.",
        tech: ["React", "Tailwind", "Firestore", "Firebase Auth"],
        image: AsuClubsImg,
        github: "https://github.com/yourname/asu-clubs",
        demo: "https://asu-clubs.example.com",
    },
    {
        id: "paychecker",
        title: "Paychecker+ (iOS)",
        short: "iOS app (80+ downloads) to calculate and track paychecks for nurses and other professions.",
        tech: ["Swift", "Firestore", "Firebase"],
        image: PaycheckerImg,
        appStore: "https://apps.apple.com/....",
        github: "https://github.com/yourname/paychecker",
    },
];

export default projects;
