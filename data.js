// Data for the FrogsTech-Hub System

// Courses data
const courses = [
    {
        id: "mechatronics",
        name: "Mechatronics Engineering",
        description: "Combination of mechanical, electronic, and software engineering to design and create intelligent systems.",
        color: "linear-gradient(to bottom right, #2E8B57, #1E90FF)",
        icon: "fas fa-robot",
        modules: [
            "Strength of Materials <i>ME 6202</i>",
            "Thermodynamics <i>ME 6205</i>",
            "Engineering Measurement and instrumentation <i>ME 6224</i>",
            "Digital electronics <i>EE 6273</i>",
            "Computer Aided Design I <i>ME 6201</i>",
            "Automotive Technology III <i>ME 6203</i>",
            "Computer Programming II <i>CS 6225</i>",
            "Applied Mathematics III <i>MS 6222</i>",
            "Industrial Practical Training I <i>ME 6208</i>"
        ],
        code: "DME", // Added course Short name for better searching
        searchTerms: ["mechatronics", "robotics", "automation", "control systems", "electronics"]
    },
    {
        id: "mechanical",
        name: "Mechanical Engineering",
        description: "Design, analysis, and manufacturing of mechanical systems and devices.",
        color: "linear-gradient(to bottom right, #1E90FF, #4682B4)",
        icon: "fas fa-cogs",
        modules: [
            "Computer Aided Drafting I <i>ME 6201</i>",
            "Strength of Materials <i>ME 6202</i>",
            "Automotive Technology III <i>ME 6203</i>",
            "Manufacturing Engineering III <i>ME 6204</i>",
            "Thermodynamics <i>ME 6205</i>",
            "Mechanical Engineering Science II <i>ME 6206</i>",
            "Engineering Measurement and Control <i>ME 6207</i>",
            "Applied Mathematics III <i>MS 6222</i>",
            "Industrial Practical Training I <i>ME 6208</i>"
        ],
        code: "DME", // Added course Short name for better searching
        searchTerms: ["mechanical", "thermodynamics", "fluid mechanics", "machine design", "manufacturing"]
    },
    {
        id: "automotive",
        name: "Automotive Engineering",
        description: "Design, development, and production of vehicles and their engineering systems.",
        color: "linear-gradient(to bottom right, #4682B4, #1E90FF)",
        icon: "fas fa-car",
        modules: [
            "Computer Aided Drafting I <i>ME 6201</i>",
            "Strength of Materials <i>ME 6202</i>",
            "Mechanical Engineering Science II <i>ME 6206</i>",
            "Automotive Technology III <i>ME 6203</i>",
            "Welding Technology <i>ME 6218</i>",
            "Thermodynamics <i>ME 6205</i>",
            "Engineering Measurement and Control <i>ME 6207</i>",
            "Applied Mathematics III <i>MS 6222</i>",
            "Industrial Practical Training 1 <i>ME 6208</i>"
        ],
        code: "DAAE", // Added course Short name for better searching
        searchTerms: ["automotive", "vehicle", "engine", "transmission", "aerodynamics", "chassis"]
    },
    {
        id: "safety",
        name: "Safety Engineering",
        description: "Application of engineering principles to ensure safety in workplaces and products.",
        color: "linear-gradient(to bottom right, #1E90FF, #2E8B57)",
        icon: "fas fa-shield-alt",
        modules: [
            "Computer Aided Drafting I <i>ME 6201</i>",
            "Strength of Materials <i>ME 6202</i>",
            "Automotive Technology III <i>ME 6203</i>",
            "Manufacturing Engineering III <i>ME 6204</i>",
            "Thermodynamics <i>ME 6205</i>",
            "Mechanical Engineering Science II <i>ME 6206</i>",
            "Engineering Measurement and Control <i>ME 6207</i>",
            "Applied Mathematics III <i>MS 6222</i>",
            "Industrial Practical Training I <i>ME 6208</i>"
        ],
        code: "DMEISOH", // Added course Short name for better searching
        searchTerms: ["safety", "risk", "fire", "environmental", "industrial", "compliance"]
    }
];

// Study Groups Data
const studyGroups = {
    mechatronics: [
        {
            name: "The FrogBots",
            leader: "Yegela Lugato",
            members: ["Yegela Lugato", "Johary James", "Brian Kimulika", "Gideon Kibure"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Circuit Frogs",
            leader: "Justine Kisid",
            members: ["Justine Kisid", "Islam Fadhili", "Lwitiko Lalashe", "Idrisa Msafiri", "Godfrey Ndimila"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Cyber-Tadpoles",
            leader: "Getruda Sanga",
            members: ["Getruda Sanga", "Richard Salehe", "Agrey Alcuin", "Baraka Chaula", "Steve"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Sensor Squad",
            leader: "Darlen",
            members: ["Darlen", "Derickson", "Issa Yahaya", "Joel Joseph", "Anointed Treasure"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Quantum Leap Frogs",
            leader: "Alphacsad Mwakyusa",
            members: ["Alphacsad Mwakyusa", "Honest Mwaseba", "Daniel Sosimi", "Faustin Joseph", "Nasri Omary"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Embedded Swamp",
            leader: "Baraka Ayubu",
            members: ["Baraka Ayubu", "Mohamed Abdul", "Salah Said", "Gabriel Chacha", "Mussa Malack"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Programmable Pond",
            leader: "Zawad James",
            members: ["Zawad James", "Christopher", "Tito Ayubu", "Daniel Kitigwa", "Petro Aswile"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Tronics Paddlers",
            leader: "Bariki Richard",
            members: ["Bariki Richard", "Brayan Dismas", "Kelvin", "Alleluya Anthony", "Rajabu"],
            meetingTime: "Flex",
            location: "Flex"
        }
    ],
    mechanical: [
        {
            name: "The Motion Frogs",
            leader: "Conso",
            members: ["Conso", "Daniel Mkama", "Dizzo", "Issack", "Steve", "Basheik", "Somebody Paul"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Thermo-Frogs",
            leader: "Bill Mech",
            members: ["Bill Mech", "Bill G", "Bill G", "Bill G", "Bill G"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Momentum Tadpoles",
            leader: "Bill Mech",
            members: ["Bill Mech", "Bill G", "Bill G", "Bill G", "Bill G"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Swamp Dynamic",
            leader: "Bill Mech",
            members: ["Bill Mech", "Bill G", "Bill G", "Bill G", "Bill G"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Torque Squad",
            leader: "Bill Mech",
            members: ["Bill Mech", "Bill G", "Bill G", "Bill G", "Bill G"],
            meetingTime: "Flex",
            location: "Flex"
        }
    ],
    automotive: [
        {
            name: "The Turbo Tadpoles",
            leader: "Adriano Kajana",
            members: ["Adriano Kajana", "Isabella Michael", "Medison Mhame", "Levocatus Constantino", "Iyad Kassim"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Piston-Powered Frogs",
            leader: "Ephraim Msigwa",
            members: ["Ephraim Msigwa", "Colman Mwacha", "Saul Seko", "Leah Mhina", "Moses Martine"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Clutch Society",
            leader: "Ansigari Komba",
            members: ["Ansigari Komba", "Nobert Ndilla", "Nancy Mshana", "Emmanuel Ndelwa", "Arafati Mningo"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Le Frogs Motive",
            leader: "Revord Matihas",
            members: ["Revord Matihas", "Yohana Silas", "Amon Pwele", "Goodluck Kaduga", "Francis Kyando"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "Flywheel Frogs",
            leader: "Hafsa Nassoro",
            members: ["Hafsa Nassoro", "Nathan Ishike", "Isakwisa Alex", "Basil Kerenge", "Erick Paul", "Baraka Dotto"],
            meetingTime: "Flex",
            location: "Flex"
        }
    ],
    safety: [
        {
            name: "The Frogs Helmets",
            leader: "Alex Mpota",
            members: ["Alex Mpota", "Charles Thomas", "Elisha Said", "Bisla Musa", "Elvius Benezeth"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Guardian Tadpoles",
            leader: "Bill Safety",
            members: ["Bill Safety", "Emmanuel Segumba", "Faraja Method", "Francis Bonifasi", "Gabriel Ntora", "Helena Kipaya"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Dangerous Frogs",
            leader: "Bill Safety",
            members: ["Bill Safety", "Irene Pareso", "Jackline Marwa", "Kelvin Mgonja", "Kelvin Egidius"],
            meetingTime: "Flex",
            location: "Flex"
        },
        {
            name: "The Safety Skin Squad",
            leader: "Bill Safety",
            members: ["Bill Safety", "Mario Massawe", "Richard Mkombo", "Ruth Mmari", "Salkina Said"],
            meetingTime: "Flex",
            location: "Flex"
        },
    ]
};

// Enhanced Resources data with multi-course support
const resources = [
    // SHARED MODULES (All 4 courses)
    //Thermodynamics Notes
    {
        id: 1,
        title: "Course Outline Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Complete thermodynamics Course Outline.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Course Outline_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "256 KB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:2,
        title: "Lecture 1 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Thermodynamics Fundamental Concepts.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 1_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "548 KB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:3,
        title: "Lecture 2 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Laws of Perfect Gases.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 2_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "4.95 MB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:4,
        title: "Lecture 3 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Thermodynamics Processes on Gases.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 3_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "548 KB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:5,
        title: "Lecture 4 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Laws of Thermodynamics.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 4_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "1.78 MB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:6,
        title: "Lecture 5 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Ideal and Real Gases.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 5_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "691 KB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:7,
        title: "Lecture 6 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Air Standard and Power Cycle.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 6_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "1.09 MB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id:8,
        title: "Lecture 7 Thermodynamics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Properties of Steam.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Lecture 7_Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "1.96 MB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id: 9,
        title: "S Chand Physics",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>For more notes, examples and excercises.</b>",
        tags: ["Thermodynamics", "heat", "energy", "ME 6205", "laws", "shared", "physics", "chand", "laws"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/S_Chand physics.pdf",
        fileType: "pdf",
        fileSize: "39.76 MB",
        moduleCode: "NO CODE",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id: 10,
        title: "Thermodynamics Simplified Introduction",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>et to understand concepts of Thermodynamics clearly.</b> Shared by all engineering courses.",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", // For shared resources
        filePath: "documents/Shared_Modules/Thermodynamics/Thermodynamics.pdf",
        fileType: "pdf",
        fileSize: "8.38 MB",
        moduleCode: "ME 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["thermodynamics", "heat", "energy", "ME6205", "shared", "all"]
    },
    {
        id: 11,
        title: "Thermodynamics All Notes",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Solved problems and notes for all Thermodynamics Units.</b>",
        tags: ["Thermodynamics", "energy", "ME 6205", "laws", "shared"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Thermodynamics/ME18401-TE.pdf",
        fileType: "pdf",
        fileSize: "2.62 MB",
        moduleCode: "MS 6205",
        dateAdded: "2025-12-22",
        searchTerms: ["mathematics", "applied", "calculus", "MS6222", "shared", "all"]
    },

    //AutoCAD Notes
    {
        id: 12,
        title: "Computer Aided Design Shortcuts Guide",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>All shortcuts for AutoCAD.</b>",
        tags: ["CAD", "design", "ME 6201", "AutoCAD", "shared", "computer", "aided"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/AutoCAD/AutoCAD-Shortcuts-Guide-Autodesk.pdf",
        fileType: "pdf",
        fileSize: "877 KB",
        moduleCode: "ME 6201",
        dateAdded: "2025-12-22",
        searchTerms: ["CAD", "design", "AutoCAD", "ME6201", "shared", "all"]
    },
    {
        id: 34,
        title: "Computer Aided Design Videos",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>All Videos for AutoCAD Lessons.</b>",
        tags: ["CAD", "design", "ME 6201", "AutoCAD", "shared", "computer", "aided"],
        icon: "fas fa-video",
        iconColor: "#9800d4ff",
        filePath: "https://www.youtube.com/@SolidWORKSTANZANIA",
        fileType: "Video",
        fileSize: "",
        moduleCode: "ME 6201",
        dateAdded: "2025-12-22",
        searchTerms: ["CAD", "design", "AutoCAD", "ME6201", "shared", "all"]
    },

    //Automotive Notes
    {
        id: 13,
        title: "Lecture 1 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Clutch System</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 1; Clutch.pptx",
        fileType: "pptx",
        fileSize: "2.33 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },
    {
        id: 14,
        title: "Lecture 2 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Manual Gearbox</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 2; Manual Gearbox.pptx",
        fileType: "pptx",
        fileSize: "3.25 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },
    {
        id: 15,
        title: "Lecture 3 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Automatic Gearbox</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 3; Automatic  Gearbox.pptx",
        fileType: "pptx",
        fileSize: "2.78 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },
    {
        id: 16,
        title: "Lecture 4 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Drive System</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 4. Drive System.pptx",
        fileType: "pptx",
        fileSize: "2.98 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },
    {
        id: 17,
        title: "Lecture 5 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Final Drive Gears and Bearings_Maintainance of Dif</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 5; Final Drive and Bearing_Maintenance of dif.pptx",
        fileType: "pptx",
        fileSize: "4.06 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },
    {
        id: 18,
        title: "Lecture 6 Automotive Technology III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Braking System</b>",
        tags: ["vehicle", "autoelectrical", "automotive", "systems"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff",
        filePath: "documents/Shared_Modules/Automotive/Lecture 6; Brake System.pptx",
        fileType: "pptx",
        fileSize: "4.24 MB",
        moduleCode: "ME 6203",
        dateAdded: "2023-10-05",
        searchTerms: ["vehicle", "dynamics", "automotive", "auto", "autoelectrical"]
    },

    //Strength of Materials Notes
    {
        id: 19,
        title: "Course Content; Strength of Materials",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Course content for Strength of Materials</b>",
        tags: ["Strength of Materials", "ME 6202", "materials"],
        icon: "fas fa-file-word",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Materials/Course Contents_Eng_Materials.docx",
        fileType: "docx",
        fileSize: "21 KB",
        moduleCode: "ME 6202",
        dateAdded: "2025-12-22",
        searchTerms: ["strength", "materials", "ME6202", "mechanical", "automotive", "safety", "mechatronics", "course content"]
    },
    {
        id: 20,
        title: "Definitions; Strength of Materials",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Definitions of key terms and concepts</b>",
        tags: ["Strength of Materials", "ME 6202", "materials"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Materials/Definitions_Eng_Materials.pdf",
        fileType: "pdf",
        fileSize: "3.24 MB",
        moduleCode: "ME 6202",
        dateAdded: "2025-12-22",
        searchTerms: ["strength", "materials", "ME6202", "mechanical", "automotive", "safety", "mechatronics", "definitions"]
    },
    {
        id: 21,
        title: "Lecture 1 Fundamentals of Stress and Strain",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Fundamental concepts of stress and strain of materials</b>",
        tags: ["Strength of Materials", "ME 6202", "materials"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Materials/LECTURE 1  FUNDAMENTALS OF STRESS AND STRAIN.pptx",
        fileType: "pptx",
        fileSize: "3.66 MB",
        moduleCode: "ME 6202",
        dateAdded: "2025-12-22",
        searchTerms: ["strength", "materials", "ME6202", "mechanical", "automotive", "safety", "mechatronics", "definitions", "stress", "strain"]
    },
    {
        id: 22,
        title: "Lecture 1(B) Strength of Materials",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Fundamental Concepts</b>",
        tags: ["Strength of Materials", "ME 6202", "materials"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Materials/MaterialsLecture_01_Eng_Materials.pptx",
        fileType: "pptx",
        fileSize: "145 KB",
        moduleCode: "ME 6202",
        dateAdded: "2025-12-22",
        searchTerms: ["strength", "materials", "ME6202", "mechanical", "automotive", "safety", "mechatronics", "definitions"]
    },

    //Applied Mathematics III
    {
        id: 23,
        title: "Course Outline Applied Mathematics III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Fundamental Concepts</b>",
        tags: ["Applied Mathematics", "MS 6222", "maths"],
        icon: "fas fa-file-word",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Maths/Course Outline_Applied_Mathematics.doc",
        fileType: "docx",
        fileSize: "17 KB",
        moduleCode: "MS 6222",
        dateAdded: "2025-12-22",
        searchTerms: ["Maths", "numbers", "MS 6222", "mechanical", "automotive", "safety", "mechatronics", "course", "outline"]
    },
    {
        id: 24,
        title: "Lecture 1 Applied Mathematics III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Conversion of Radians & degrees, Sector, Trigonometrical ratios and Identities</b>",
        tags: ["Applied Mathematics", "MS 6222", "maths"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Maths/Lecture 1_Applied Mathematics.pdf",
        fileType: "pdf",
        fileSize: "1.36 MB",
        moduleCode: "MS 6222",
        dateAdded: "2025-12-22",
        searchTerms: ["Maths", "numbers", "MS 6222", "mechanical", "automotive", "safety", "mechatronics", "Trigonometry", "degrees", "radian", "trigonometrical", "sector"]
    },
    {
        id: 25,
        title: "MAYOMBIA_Form V Applied Mathematics III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>More excercises and notes</b>",
        tags: ["Applied Mathematics", "MS 6222", "maths"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Maths/MAYOMBYA--Form V.pdf",
        fileType: "pdf",
        fileSize: "10.39 MB",
        moduleCode: "MS 6222",
        dateAdded: "2025-12-22",
        searchTerms: ["Maths", "numbers", "MS 6222", "mechanical", "automotive", "safety", "mechatronics", "Trigonometry", "degrees", "radian", "trigonometrical", "sector", "mayombia", "form V", "form 5"]
    },
    {
        id: 26,
        title: "MAYOMBIA_Form VI Applied Mathematics III",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>More excercises and notes</b>",
        tags: ["Applied Mathematics", "MS 6222", "maths"],
        icon: "fas fa-file-pdf",
        iconColor: "#9800d4ff", 
        filePath: "documents/Shared_Modules/Maths/MAYOMBYA--Form VI.pdf",
        fileType: "pdf",
        fileSize: "9.49 MB",
        moduleCode: "MS 6222",
        dateAdded: "2025-12-22",
        searchTerms: ["Maths", "numbers", "MS 6222", "mechanical", "automotive", "safety", "mechatronics", "Trigonometry", "degrees", "radian", "trigonometrical", "sector", "mayombia", "form VI", "form 6"]
    },

    //Measurements and Instrumentation
    {
        id: 27,
        title: "Course Intoduction; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Course outline and Introduction</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\Course Introduction_Measurements.pptx",
        fileType: "pptx",
        fileSize: "975 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 28,
        title: "Lecture 1; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Introduction to Measuremenet</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\Lecture 1-Introduction to measurement.pptx",
        fileType: "pptx",
        fileSize: "287 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 29,
        title: "Lecture 2; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Temperature Measurement</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\Lecture 2-temperature measurement.pptx",
        fileType: "pptx",
        fileSize: "156 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 30,
        title: "Lecture 3; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Pressure Measurement</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\Lecture 3-pressure meassurement.pptx",
        fileType: "pptx",
        fileSize: "118 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 31,
        title: "Lecture 4; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Measurement of Velocity and Acceleration and Force</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\lecture 4-Measurement of velocity and acceleration and force.pptx",
        fileType: "pptx",
        fileSize: "303 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 32,
        title: "Lecture 4; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>Fundamental of Control System</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\Lecture 6-fundamental of control system.pptx",
        fileType: "pptx",
        fileSize: "2.38 MB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
    {
        id: 33,
        title: "Lecture 4; Engineering Measurement & Instrumentation | Control",
        courses: ["mechatronics", "mechanical", "automotive", "safety"],
        type: "notes",
        description: "<b>System Controllers</b>",
        tags: ["measurement", "instrumentation", "ME 6224", "ME 6207","shared-two"],
        icon: "fas fa-file-powerpoint",
        iconColor: "#9370DB", 
        filePath: "documents\Shared_Modules\Measurement & Instrumentation\lecture 7-System controllers.pptx",
        fileType: "pptx",
        fileSize: "92 KB",
        moduleCode: "ME 6224 | ME 6207",
        dateAdded: "2025-12-22",
        searchTerms: ["measurement", "instrumentation", "ME6207", "ME6224",]
    },
]

// Fixed Timetable data with proper structure
const timetableData = {
    week: 12,
    dateRange: "Oct 16-20",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["7:30-8:15", "8:15-9:00", "9:00-9:45", "9:55-10:40", "10:40-11:25", "11:25-12:10", "13:50-14:35", "14:35-15:20", "15:20-16:05", "16:50-17:35", "17:35-18:20", "18:20-19:05"],
    sessions: [
        // Monday - 12 time slots
        [
            { courses: ["mechanical", "automotive", "safety"], module: "Mechanical Engineering Science", room: "118-A" },
            { courses: ["mechanical", "automotive", "safety"], module: "Mechanical Engineering Science", room: "118-A" },
            { courses: ["mechanical", "automotive", "safety"], module: "Mechanical Engineering Science", room: "118-A" }, 
            null, 
            null,
            null,
            { course: "mechatronics", module: "Engineering Measurement and Instrumentation", room: "203-A" },
            { course: "mechatronics", module: "Engineering Measurement and Instrumentation", room: "203-A" },
            { course: "mechatronics", module: "Engineering Measurement and Instrumentation", room: "203-A" },
            { course: "automotive", module: "Welding Technology", room: "Welding Workshop" },
            { course: "automotive", module: "Welding Technology", room: "Welding Workshop" },
            { course: "automotive", module: "Welding Technology", room: "Welding Workshop" },
        ],
        // Tuesday - 12 time slots
        [
            null,
            null,
            null,
            { courses: ["all"], module: "Computer Aided Design I", room: "D-005" },
            { courses: ["all"], module: "Computer Aided Design I", room: "D-005" },
            { courses: ["all"], module: "Computer Aided Design I", room: "D-005" },
            { courses: ["all"], module: "Applied Mathematics III", room: "Central Basement" },
            { courses: ["all"], module: "Applied Mathematics III", room: "Central Basement" },
            { courses: ["all"], module: "Applied Mathematics III", room: "Central Basement" },
            null,
            null,
            null,
        ],
        // Wednesday - 12 time slots
        [
            { courses: ["all"], module: ["Engineering Measurement and Control", "Computer Programming II"], room: ["LPII-FF-P3", "LBPR 02"] },
            { courses: ["all"], module: ["Engineering Measurement and Control", "Computer Programming II"], room: ["LPII-FF-P3", "LBPR 02"] },
            { courses: ["all"], module: ["Engineering Measurement and Control", "Computer Programming II"], room: ["LPII-FF-P3", "LBPR 02"] },
            { courses: ["all"], module: "Strength of Materials", room: "D-005" },
            { courses: ["all"], module: "Strength of Materials", room: "D-005" },
            { courses: ["all"], module: "Strength of Materials", room: "D-005" },
            { courses: ["all"], module: "Automotive Technology III", room: "115-A" },
            { courses: ["all"], module: "Automotive Technology III", room: "115-A" },
            { courses: ["all"], module: "Automotive Technology III", room: "115-A" },
            { courses: ["mechanical", "safety", "automotive"], module: "Manufacturing Engineering", room: "114-A" },
            { courses: ["mechanical", "safety", "automotive"], module: "Manufacturing Engineering", room: "114-A" },
            { courses: ["mechanical", "safety", "automotive"], module: "Manufacturing Engineering", room: "114-A" },
        ],
        // Thursday - 12 time slots
        [
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" },
            { courses: ["all"], module: "Automotive Technology III", room: "AW-Automotive Workshop" }
        ],
        // Friday - 12 time slots
        [
            { courses: ["all"], module: "Thermodynamics", room: "114-A" },
            { courses: ["all"], module: "Thermodynamics", room: "114-A" },
            { courses: ["all"], module: "Thermodynamics", room: "114-A" },
            { course: "mechatronics", module: "Digital Electronics", room: "D-005" },
            { course: "mechatronics", module: "Digital Electronics", room: "D-005" },
            { course: "mechatronics", module: "Digital Electronics", room: "D-005" },
            null,
            { course: "mechatronics", module: "Computer Programming", room: "LBPR 02" },
            { course: "mechatronics", module: "Computer Programming", room: "LBPR 02" },
            { course: "mechatronics", module: "Computer Programming", room: "LBPR 02" },
            null,
            null,
        ]
    ]
};


// Search function with multi-course support
function searchResources(query, filters = {}) {
    const searchQuery = query.toLowerCase().trim();
    
    return resources.filter(resource => {
        // Text search across multiple fields
        const textMatch = searchQuery === '' || 
            resource.title.toLowerCase().includes(searchQuery) ||
            resource.description.toLowerCase().includes(searchQuery) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
            (resource.moduleCode && resource.moduleCode.toLowerCase().includes(searchQuery)) ||
            (resource.author && resource.author.toLowerCase().includes(searchQuery)) ||
            (resource.searchTerms && resource.searchTerms.some(term => term.toLowerCase().includes(searchQuery)));
        
        // Filter by course, multi-course resources
        let courseMatch = true;
        if (filters.course && filters.course !== 'all') {
            courseMatch = resource.courses.includes(filters.course);
        }
        
        // Filter by type
        const typeMatch = !filters.type || filters.type === 'all' || resource.type === filters.type;
        
        // Filter by module code
        const moduleMatch = !filters.module || resource.moduleCode === filters.module;
        
        // Filter by sharing type (optional)
        const sharingMatch = !filters.sharing || 
            (filters.sharing === 'shared' && resource.courses.length > 1) ||
            (filters.sharing === 'exclusive' && resource.courses.length === 1);
        
        return textMatch && courseMatch && typeMatch && moduleMatch && sharingMatch;
    });
}

// Get resources by course with sharing information
function getResourcesByCourse(courseId) {
    return resources.filter(resource => resource.courses.includes(courseId)).map(resource => {
        return {
            ...resource,
            sharingType: getSharingType(resource.courses)
        };
    });
}

// Determine sharing type
function getSharingType(courses) {
    if (courses.length === 4) return 'shared-all';
    if (courses.length === 3) return 'shared-three';
    if (courses.length === 2) return 'shared-two';
    return 'exclusive';
}

// Get shared resources for specific courses
function getSharedResources(courseIds) {
    return resources.filter(resource => 
        courseIds.every(courseId => resource.courses.includes(courseId))
    );
}

// Get exclusive resources for a course
function getExclusiveResources(courseId) {
    return resources.filter(resource => 
        resource.courses.length === 1 && resource.courses[0] === courseId
    );
}

// Get all shared resources
function getAllSharedResources() {
    return resources.filter(resource => resource.courses.length > 1);
}

// Get module resources
function getResourcesByModule(moduleCode) {
    return resources.filter(resource => resource.moduleCode === moduleCode);
}

// Get resources by tag
function getResourcesByTag(tag) {
    return resources.filter(resource => 
        resource.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
}

// Get recent resources
function getRecentResources(limit = 5) {
    return resources
        .filter(resource => resource.dateAdded)
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, limit);
}

// Get unique modules for filtering
function getUniqueModules() {
    const modules = new Set();
    resources.forEach(resource => {
        if (resource.moduleCode) {
            modules.add(resource.moduleCode);
        }
    });
    return Array.from(modules).sort();
}

// Get unique tags for filtering suggestions
function getUniqueTags() {
    const tags = new Set();
    resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
}

// Get courses that share a specific resource
function getResourceCourses(resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    return resource ? resource.courses : [];
}

// Get suggested resources based on course
function getSuggestedResources(courseId, limit = 3) {
    const courseResources = getResourcesByCourse(courseId);
    
    // Prioritize shared resources for suggestions
    const shared = courseResources.filter(r => r.courses.length > 1);
    const exclusive = courseResources.filter(r => r.courses.length === 1);
    
    // Mix shared and exclusive, with preference for shared
    const suggestions = [
        ...shared.slice(0, Math.ceil(limit/2)),
        ...exclusive.slice(0, Math.floor(limit/2))
    ];
    
    return suggestions.slice(0, limit);
}

// Function to check if a file exists (for error handling)
function checkFileExists(filePath) {// In a real implementation, you might want to check file existence
    return filePath && filePath.length > 0;
}

// Function to get file icon based on file type
function getFileIcon(fileType) {
    const iconMap = {
        'pdf': 'fas fa-file-pdf',
        'doc': 'fas fa-file-word',
        'docx': 'fas fa-file-word',
        'ppt': 'fas fa-file-powerpoint',
        'pptx': 'fas fa-file-powerpoint',
        'xls': 'fas fa-file-excel',
        'xlsx': 'fas fa-file-excel',
        'zip': 'fas fa-file-archive',
        'rar': 'fas fa-file-archive',
        'jpg': 'fas fa-file-image',
        'jpeg': 'fas fa-file-image',
        'png': 'fas fa-file-image',
        'gif': 'fas fa-file-image',
        'mp4': 'fas fa-file-video',
        'avi': 'fas fa-file-video',
        'mov': 'fas fa-file-video',
        'mp3': 'fas fa-file-audio',
        'wav': 'fas fa-file-audio',
        'txt': 'fas fa-file-alt',
        'default': 'fas fa-file'
    };
    
    return iconMap[fileType.toLowerCase()] || iconMap['default'];
}

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        courses,
        studyGroups,
        resources,
        timetableData,
        searchResources,
        getUniqueModules,
        getUniqueTags,
        getResourcesByCourse,
        getRecentResources,
        checkFileExists,
        getFileIcon
    };
}