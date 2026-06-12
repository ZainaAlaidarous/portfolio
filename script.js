const revealElements = document.querySelectorAll(
".section-title, .about-card, .stat-card, .skill-card, .timeline-item, .project-card, .academic-project-card, .contact-card");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const projects = {
  pr: {
    type: "Enterprise Workflow System",
    title: "PR Workflow System",
    description:
      "A procurement request workflow system designed to manage request submissions, multi-level approvals, role-based actions, dashboards, request tracking, and automated email notifications.",
    tech: "ASP.NET MVC • SQL Server • JavaScript • Bootstrap • Azure DevOps"
  },
  timekeeper: {
    type: "Workforce Management System",
    title: "Timekeeper Portal",
    description:
      "An internal attendance and workforce management portal enhanced with Excel import/export, automated workflow processes, email generation, and improved user experience for operational users.",
    tech: "ASP.NET MVC • SQL Server • JavaScript • Bootstrap • Excel Automation"
  },
  fis: {
    type: "Internal System Enhancement",
    title: "FIS Enhancement Project",
    description:
      "Enhanced destination-related functionalities and improved operational workflow handling within an internal system, with a focus on usability and workflow efficiency.",
    tech: "ASP.NET MVC • SQL Server • JavaScript • Bootstrap"
  },
  flynas: {
  type: "Digital Transformation Prototype",

  title: "Flynas Load Control Digitization",

  description:
    "A digital transformation initiative focused on converting operational airline forms and manual processes into a centralized digital platform. The project included workflow analysis, UI/UX design, process optimization, and prototype development to improve efficiency, visibility, and data accuracy.",

  role:
    "Designed interactive prototypes, analyzed operational workflows, created user journeys, and translated business requirements into digital solutions. Worked closely with stakeholders to visualize future-state processes and improve operational efficiency.",

  features: [
    "Operational form digitization",
    "Workflow redesign",
    "User journey mapping",
    "Interactive prototypes",
    "Digital signatures",
    "Document management concepts",
    "Process visibility improvements",
    "Responsive UI design",
    "Stakeholder-driven requirements gathering",
    "Digital transformation planning"
  ],

  tech: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "User Flow Design",
    "Process Mapping"
  ],

  images: [
    "images/flynas1.png",
    "images/flynas2.png",
    "images/flynas3.png",
    "images/flynas4.png"
  ]
}
};

const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalType = document.getElementById("modalType");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");

document.querySelectorAll(".project-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const projectKey = button.dataset.project;
    const project = projects[projectKey];

    modalType.textContent = project.type;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.tech;

    modal.classList.add("show-modal");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show-modal");
  }
});

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = "🌙";
  }
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

const startCounters = () => {
  counters.forEach((counter) => {
    const target = parseFloat(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";
    const isDecimal = counter.dataset.decimal === "true";

    let current = 0;
    const steps = 60;
    const increment = target / steps;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = isDecimal
          ? current.toFixed(2)
          : Math.ceil(current) + suffix;

        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = isDecimal
          ? target.toFixed(2)
          : target + suffix;
      }
    };

    updateCounter();
  });
};

window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 120 && !countersStarted) {
    countersStarted = true;
    startCounters();
  }
});

const galleryData = {
  qoot: {
    type: "AI Mobile Application",
    title: "Qoot – Smart Fridge System",
    description:
      "An AI-powered smart fridge system designed to help users manage food inventory, monitor expiry dates, receive alerts, discover recipes, and generate shopping lists to reduce food waste.",
    role:
      "Contributed to the mobile application design and development, inventory management flow, recipe and shopping list features, and system integration with Firebase and computer vision components.",
    features: [
      "Food inventory tracking",
      "Expiry date monitoring and alerts",
      "Recipe suggestions based on available items",
      "Shopping list generation",
      "Category-based item organization"
    ],
    tech: ["Flutter", "Firebase", "Python", "OpenCV", "Computer Vision"],
    images: [
      "images/app.png",
      "images/app1.png",
      "images/app2.png",
      "images/app3.png"
    ]
  },

  saudi: {
    type: "Java Booking System",
    title: "Saudi Vacation Platform",
    description:
      "A tourism and reservation platform that allows users to browse destinations, reserve hotels, book attractions, view restaurants, and manage reservation details.",
    role:
      "Participated in system analysis, design, implementation, and Scrum-based development activities.",
    features: [
      "Choose city and date",
      "View and reserve hotels",
      "Book attractions",
      "View restaurants",
      "Manage reservation details"
    ],
    tech: ["Java", "OOP", "MVC", "Scrum", "Software Engineering"],
    images: ["images/saudi.png"]
  },

  helpconnect: {
    type: "UI/UX Prototype",
    title: "HelpConnect – Support Application",
    description:
      "A customer support platform prototype that helps businesses communicate with customers through live chat and support ticket management.",
    role:
      "Worked on requirements gathering, user flows, low and high fidelity prototypes, dashboard screens, live chat interfaces, and usability testing.",
    features: [
      "Live chat",
      "Support ticket management",
      "Dashboard analytics",
      "Personal information page",
      "User-friendly support interface"
    ],
    tech: ["Figma", "Adobe XD", "UI/UX Design", "Usability Testing"],
    images: [
      "images/helpconnect.png",
      "images/helpconnect1.png",
      "images/helpconnect2.png",
      "images/helpconnect3.png"
    ]
  },

    timekeeper: {
    type: "Enterprise Attendance System",
    title: "Timekeeper Portal",
   description:
"An internal workforce management portal developed to simplify attendance tracking, shift management, and workforce operations. The portal digitizes attendance processes, improves operational visibility, and reduces manual effort through automated workflows and Excel integration.",

role:
"Enhanced system functionality, improved user experience, implemented attendance management features, supported Excel import/export processes, and optimized operational workflows for business users.",

features: [
  "Daily attendance submission",
  "Employee attendance records",
  "Shift information management",
  "Excel import and export",
  "Automated validation processes",
  "Operational reporting",
  "Improved user experience",
  "Role-based access management"
],

tech: [
  "ASP.NET MVC",
  "SQL Server",
  "JavaScript",
  "Bootstrap",
  "Excel Integration"
],
    images: [
      "images/timekeeper1.jpeg",
      "images/timekeeper2.jpeg",
      "images/timekeeper3.jpeg",
      "images/timekeeper4.jpeg"
    ]
  },

  fis: {
    type: "Internal Flight Information System",
    title: "FIS Enhancement Project",
   description:
"Designed UI/UX prototypes and workflow concepts for digitizing airline operational forms and manual processes. The project aimed to improve process visibility, reduce paperwork, and support future digital transformation initiatives.",

role:
"Created wireframes, user flows, interactive prototypes, and workflow diagrams while collaborating with stakeholders to understand operational requirements and translate them into digital solutions.",

features: [
  "Interactive UI/UX prototypes",
  "Workflow analysis",
  "Digital form design",
  "Process mapping",
  "User journey design",
  "Responsive layouts",
  "Stakeholder-driven design approach",
  "Operational process digitization"
],

tech: [
  "Figma",
  "UI/UX Design",
  "Wireframing",
  "Prototyping",
  "Workflow Planning"
],
    images: [
      "images/fis1.jpeg",
      "images/fis2.jpeg",
      "images/fis3.jpeg",
      "images/fis4.jpeg",
      "images/fis5.jpeg",
      "images/fis6.jpeg",
      "images/fis7.jpeg",
      "images/fis8.jpeg",
      "images/fis9.jpeg",
      "images/fis10.jpeg",
      "images/fis11.jpeg",
      "images/fis12.jpeg",
      "images/fis13.jpeg",
      "images/fis14.jpeg",
      "images/fis15.jpeg"
    ]
  },
  pr: {
  type: "Enterprise Workflow System",
  title: "PR Workflow System",
 description:
"An enterprise Procurement Request (PR) management system developed to digitize and streamline the procurement process through a structured multi-level approval workflow. The system enables request creation, automated approval routing, role-based actions, request tracking, dashboard visibility, and workflow management across multiple departments.",

role:
"Designed and implemented workflow enhancements, approval logic, role-based access control, request tracking features, dashboard functionality, and system improvements. Collaborated with stakeholders to analyze business requirements and optimize procurement processes.",

features: [
  "PR request creation and submission",
  "Multi-level approval workflow",
  "Dynamic approval routing",
  "Role-based access control",
  "Technical and budget confirmation stages",
  "Procurement and final review process",
  "Request tracking and status monitoring",
  "Dashboard and reporting features",
  "Automated email notifications",
  "Workflow configuration enhancements"
],

tech: [
  "ASP.NET MVC",
  "SQL Server",
  "JavaScript",
  "Bootstrap",
  "Azure DevOps",
  "Power Automate"
],
  tech: ["ASP.NET MVC", "SQL Server", "JavaScript", "Bootstrap", "Power Automate"],
  images: [
    "images/pr1.jpeg",
    "images/pr2.jpeg",
    "images/pr3.jpeg",
    "images/pr4.jpeg"
  ]
}
};

const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");
const imageCounter = document.getElementById("imageCounter");

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".gallery-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const project = galleryData[btn.dataset.gallery];

    currentImages = project.images;
    currentIndex = 0;

    galleryTitle.textContent = project.title;
    galleryDescription.textContent = project.description;
document.getElementById("galleryRole").textContent = project.role;

const featuresList = document.getElementById("galleryFeatures");
featuresList.innerHTML = "";

project.features.forEach((feature) => {
  const li = document.createElement("li");
  li.textContent = feature;
  featuresList.appendChild(li);
});

const techBox = document.getElementById("galleryTech");
techBox.innerHTML = "";

project.tech.forEach((item) => {
  const span = document.createElement("span");
  span.textContent = item;
  techBox.appendChild(span);
});
    galleryImage.src = currentImages[0];
    imageCounter.textContent =
      `1 / ${currentImages.length}`;

    galleryModal.classList.add("show-gallery");

  });

});

document.getElementById("closeGallery")
.addEventListener("click", () => {

  galleryModal.classList.remove("show-gallery");

});

document.getElementById("nextImage")
.addEventListener("click", () => {

  currentIndex =
  (currentIndex + 1) % currentImages.length;

  galleryImage.src =
  currentImages[currentIndex];

  imageCounter.textContent =
  `${currentIndex + 1} / ${currentImages.length}`;

});

document.getElementById("prevImage")
.addEventListener("click", () => {

  currentIndex =
  (currentIndex - 1 + currentImages.length)
  % currentImages.length;

  galleryImage.src =
  currentImages[currentIndex];

  imageCounter.textContent =
  `${currentIndex + 1} / ${currentImages.length}`;

});

