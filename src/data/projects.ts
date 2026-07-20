import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aifms",
    title: "AIFMS — Affective Intelligence Feedback Monitoring System",
    description:
      "Emotion recognition and analytics system evaluating customer experience using machine learning, computer vision, and web-based dashboards.",
    stack: ["Python", "OpenCV", "CNN", "Flask", "MySQL", "Raspberry Pi"],
    featured: true,
    image: "/images/projects/aifms-cover.png",
  },
  {
    slug: "depEd-enrollment-dashboard",
    title: "DepEd Enrollment Data Dashboard",
    description:
      "Dashboard visualizing enrollment trends from educational datasets for easier interpretation of data-driven insights.",
    stack: ["Python", "Pandas", "Data viz"],
    image: "/images/projects/depEd-dashboard.png",
  },
  {
    slug: "pomotrack",
    title: "PomoTrack",
    description:
      "Productivity app built around the Pomodoro method for task and time management.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL"],
    image: "/images/projects/pomotrack.png",
  },
  {
    slug: "thesis-management-system",
    title: "Thesis Management System",
    description:
      "Database management system built to streamline thesis-related processes and information management.",
    stack: ["MySQL", "Database design"],
    image: "/images/projects/thesis-mgmt.png",
  },
  {
    slug: "esp32-laser-tripwire",
    title: "ESP32-Based Laser Tripwire Alarm System",
    description:
      "Embedded systems project using ESP32 to build an intelligent laser-based security alarm system.",
    stack: ["ESP32", "Embedded C"],
    image: "/images/projects/tripwire.png",
  },
];
