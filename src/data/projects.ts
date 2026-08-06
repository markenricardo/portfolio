import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aifms",
    title: "AIFMS — Affective Intelligence Feedback Monitoring System",
    description:
      "Emotion recognition and analytics system evaluating customer experience using machine learning, computer vision, and web-based dashboards.",
    stack: ["Python", "OpenCV", "CNN", "Flask", "MySQL", "Raspberry Pi"],
    featured: true,
    icon: "ti-mood-smile",
    image: "/images/projects/aifms-cover.png",
    outcome:
      "Built the full kiosk-to-dashboard pipeline for a real emotion-analytics system, evaluated across 131 live sessions against ISO/IEC 25010 performance criteria.",
    details: [
      "A kiosk-based emotion recognition system that captures customer feedback through facial emotion detection, then surfaces those insights through an admin analytics dashboard — a full pipeline spanning hardware sensing, ML inference, and data visualization.",
    ],
    features: [
      "Flask kiosk app built from 14 Jinja2 templates on a shared base layout, fixed to a 1280×800 viewport",
      "CNN-based emotion recognition model classifying four emotions",
      "Raspberry Pi hardware built under a separate Prototyping Model",
      "Admin dashboard with Chart.js: KPI sparklines, lollipop, radar, heatmap, punchcard views",
      "Evaluated with ISO/IEC 25010 criteria across latency, CPU, RAM, and FPS over 131 sessions",
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
  },
  {
    slug: "thesis-management-system",
    title: "Thesis Management System",
    description:
      "Database management system built to streamline thesis-related processes and information management.",
    stack: ["MySQL", "Database design"],
    icon: "ti-database",
    image: "/images/projects/thesis-mgmt.png",
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
