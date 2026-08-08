import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aifms",
    title: "AIFMS — Affective Intelligence Feedback Monitoring System",
    description:
      "An AI-powered feedback monitoring system combining facial emotion recognition, computer vision, embedded hardware, and web-based analytics.",
    stack: [
      "Python",
      "OpenCV",
      "CNN",
      "Flask",
      "MySQL",
      "Raspberry Pi",
      "Chart.js",
    ],
    featured: true,
    icon: "ti-mood-smile",
    image: "/images/projects/aifms-cover.png",
    outcome:
      "Developed an end-to-end kiosk-to-dashboard system that combines real-time facial emotion recognition with user feedback analytics, evaluated across 131 live sessions.",
    details: [
      "A kiosk-based feedback and emotion analytics platform developed for the PUP University Library. The system captures user feedback and, with consent, analyzes facial expressions using a CNN-based emotion recognition model before storing and visualizing the results through an administrative dashboard.",
    ],
    features: [
      "Flask-based kiosk application with a guided feedback flow and responsive 1280×800 interface",
      "CNN-based facial emotion recognition model classifying four emotions: happy, sad, angry, and neutral",
      "OpenCV-based image processing and real-time camera integration for facial emotion detection",
      "Raspberry Pi 4 kiosk with touchscreen display and USB webcam for on-site deployment",
      "MySQL database for centralized storage of feedback, emotion classifications, timestamps, and service data",
      "Admin analytics dashboard built with Chart.js featuring KPI cards, trend charts, radar charts, heatmaps, and feedback visualizations",
      "Privacy consent flow allowing users to provide feedback without enabling facial emotion detection",
      "System evaluation across 131 live sessions, measuring processing latency, CPU usage, RAM utilization, and FPS",
    ],
  },
  {
    slug: "depEd-enrollment-dashboard",
    title: "DepEd Enrollment Data Dashboard",
    description:
      "Dashboard visualizing enrollment trends from educational datasets for easier interpretation of data-driven insights.",
    stack: ["Python", "Pandas", "Data viz"],
    icon: "ti-chart-bar",
    image: "/images/projects/depEd-dashboard.png",
  },
  {
    slug: "pomotrack",
    title: "PomoTrack",
    description:
      "Productivity app built around the Pomodoro method for task and time management.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL"],
    icon: "ti-clock",
    image: "/images/projects/pomotrack.png",
    outcome:
      "Built a complete productivity system that connects focus sessions to tasks and surfaces daily analytics — helping users understand and improve their deep work habits.",
    details: [
      "PomoTrack is a Pomodoro-based productivity tracker that lets users manage tasks, run timed focus sessions, and review their progress over time. The app connects a React frontend to a FastAPI backend, with session data persisted in PostgreSQL via SQLAlchemy and visualized through an analytics dashboard.",
    ],
    features: [
      "Focus timer with 25/5/15 minute session modes, pause, resume, and early-complete support",
      "Task management with priority levels, status tracking, estimated Pomodoros, and deadlines",
      "Session-to-task linking — each completed Pomodoro is associated with the task it was spent on",
      "Real-time daily progress tracking pulling completed sessions from the backend",
      "Session notes captured per Pomodoro and stored alongside session metadata",
      "Auto-start breaks and sound notifications on session completion",
      "Responsive sidebar layout with weekly streak display and profile management",
    ],
  },
  {
    slug: "ledger-budget-tracker",
    title: "Ledger — Personal Budget Tracker",
    description:
      "A full-stack personal finance web app for consolidating and tracking income, expenses, and budgets across multiple Philippine digital payment platforms.",
    stack: [
      "React",
      "Python",
      "FastAPI",
      "MySQL",
      "Tailwind CSS",
      
    ],
    featured: false,
    icon: "ti-wallet",
    image: "/images/projects/ledger-cover.png",
    outcome:
      "Delivered a fully deployed personal budget tracker with secure multi-user login, cross-account financial visibility, monthly budget planning, and an interactive analytics dashboard.",
    details: [
      "A web-based personal budget tracking system built for Filipino users managing funds across Maribank, UnionBank, Maya, Coins.ph, and PayPal. The system allows users to log transactions, monitor per-account balances, set monthly spending targets by category, and analyze patterns through an interactive dashboard — all behind a secure authentication layer that fully isolates each user's financial data.",
    ],
    features: [
      "Secure user registration and login with bcrypt-hashed passwords and stateless JWT session tokens",
      "Multi-account support automatically seeded with Maribank, UnionBank, Maya, Coins.ph, and PayPal on registration",
      "Full transaction CRUD — log income and expenses with account, category, date, description, and amount",
      "Monthly budget planner with per-category spending targets, inline editing, progress bars, and over-budget alerts",
      "Dashboard with four KPI cards (total balance, monthly income, expense, and net), a spending-by-category pie chart, and an annual income-vs-expense trend bar chart",
      "Python FastAPI backend with SQLAlchemy ORM, Pydantic validation, and auto-generated Swagger documentation at /docs",
      "React frontend built with Vite, styled with Tailwind CSS, and charted with Recharts",
      "Full data isolation — every account, transaction, and budget is scoped server-side to the authenticated user",
    ],
  },
  {
    slug: "esp32-laser-tripwire",
    title: "ESP32-Based Laser Tripwire Alarm System",
    description:
      "Embedded systems project using ESP32 to build an intelligent laser-based security alarm system.",
    stack: ["ESP32", "Embedded C"],
    icon: "ti-bolt",
    image: "/images/projects/tripwire.png",
  },
];
