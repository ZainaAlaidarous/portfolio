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
  qout: {
  type: "AI-Powered Smart Fridge System",

  title: "Qout – Smart Fridge System",

  description:
    "A graduation project focused on developing an AI-powered smart fridge ecosystem that helps users manage food inventory, track expiration dates, reduce food waste, and receive personalized recipe recommendations. The solution combines a custom Raspberry Pi-based device that attaches to a refrigerator, computer vision, cloud services, and a mobile application to transform a traditional fridge into a smart inventory management system.",

  role:
    "Contributed to system analysis, database design, mobile application development, Firebase integration, testing, and implementation of the smart inventory management solution. Participated in designing and integrating a Raspberry Pi-based smart device that scans products, tracks inventory, and synchronizes data with the mobile application.",

  features: [
    "Food inventory management",
    "Barcode and expiry date scanning",
    "Expiration date tracking and notifications",
    "Recipe recommendations based on available ingredients",
    "Shopping list generation",
    "Product categorization",
    "Cloud data synchronization",
    "Mobile application integration",
    "Computer vision-based item detection",
    "Raspberry Pi-based smart fridge attachment"
  ],

  impact: [
    "Helped reduce food waste through expiration tracking.",
    "Improved visibility of stored food items.",
    "Automated inventory management processes.",
    "Provided personalized recipe suggestions.",
    "Connected hardware, cloud services, and mobile app into one solution."
  ],

  tech: [
    "Python",
    "Flutter",
    "Firebase",
    "OpenCV",
    "Computer Vision",
    "IoT",
    "Raspberry Pi 4",
    "Camera Module",
    "Touch Display"
  ],
    images: [
      "images/app.png",
      "images/app1.png",
      "images/app2.png",
      "images/app3.png",
      "images/app4.png"


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
    tech: ["Java", "OOP", "Scrum", "Software Engineering"],
    images: ["images/saudi.png"]
  },

  helpconnect: {
  type: "UI/UX Design & Customer Support Platform",

  title: "HelpConnect",

  description:
    "A customer support platform designed to help businesses communicate with their customers through support tickets and live chat services. The project focused on improving customer engagement by providing an accessible, user-friendly, and cost-effective communication solution for businesses.",

  role:
    "Participated in requirements gathering, user research, system analysis, use case modeling, UI/UX design, low-fidelity and high-fidelity prototyping, and usability testing. Contributed to designing both business owner and customer experiences while validating the solution through user testing and feedback.",

  features: [
    "Customer support ticket management",
    "Live chat functionality",
    "Business owner dashboard",
    "User account management",
    "Ticket tracking and status monitoring",
    "Package and subscription management",
    "Customizable customer support interface",
    "Customer-business communication platform"
  ],

  impact: [
    "Improved customer-business communication.",
    "Provided an affordable support solution for businesses.",
    "Enhanced customer engagement and accessibility.",
    "Validated usability through user testing sessions.",
    "Designed user-centered workflows based on research findings."
  ],

  tech: [
    "Figma",
    "Adobe XD",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "Use Case Analysis",
    "Usability Testing"
  ],
    images: [
      "images/helpconnect.png",
      "images/helpconnect1.png",
      "images/helpconnect2.png",
      "images/helpconnect3.png"
    ]
  },

    timekeeper: {
  type: "Attendance Digitization System",

  title: "Timekeeper Portal",

  description:
    "An internal web application developed to replace manual Excel-based attendance processes with a structured digital workflow. The system enables attendance submission, Excel uploads, automated file generation, email delivery, and integration with an existing automation bot for processing attendance records.",
role:
  "Contributed to the development of an internal attendance digitization system by implementing attendance workflows, Excel processing functionality, Microsoft Graph email integration, database operations, validation logic, and user interface enhancements. Supported testing, troubleshooting, and continuous system improvements throughout the development lifecycle.",
  features: [
    "Digital attendance form submission",
    "Excel upload and validation",
    "Automated Excel file generation",
    "Microsoft Graph email integration",
    "Attendance record management",
    "Database logging and tracking",
    "Azure AD authentication",
    "Role-based access control",
    "Automation bot integration",
    "Responsive multi-step user interface"
  ],

  impact: [
    "Replaced manual Excel-based attendance processes.",
    "Reduced repetitive manual data handling.",
    "Improved attendance data accuracy.",
    "Automated file generation and delivery.",
    "Integrated attendance processing with existing automation workflows."
  ],

  tech: [
    "ASP.NET Core MVC",
    "SQL Server",
    "Entity Framework Core",
    "ClosedXML",
    "Microsoft Graph API",
    "Azure AD",
    "Bootstrap",
    "JavaScript"
  ],

  images: [
    "images/timekeeper1.jpeg",
    "images/timekeeper2.jpeg",
    "images/timekeeper3.jpeg",
    "images/timekeeper4.jpeg"
  ]
},

  fis: {
type: "Enterprise System Enhancement",

title: "Flight Information System (FIS)",

description:
"Contributed to enhancing the Flight Information System (FIS) by improving existing user interfaces, optimizing user experience, and modernizing operational screens. The enhancements focused on creating a cleaner, more intuitive, and efficient experience for users while supporting ongoing system improvement initiatives.",

role:
"Worked on redesigning and improving existing FIS interfaces, enhancing usability, refining screen layouts, improving navigation flow, and supporting system enhancement activities based on operational requirements and user feedback.",

features: [
"User interface enhancement",
"Screen redesign and modernization",
"Improved user experience and usability",
"Layout optimization",
"Navigation flow improvements",
"Operational screen enhancements",
"User-focused design improvements"
],

impact: [
"Improved overall user experience.",
"Enhanced system usability and accessibility.",
"Provided a cleaner and more intuitive interface.",
"Reduced complexity in operational screens.",
"Supported ongoing digital transformation initiatives."
],

tech: [
"ASP.NET MVC",
"HTML",
"CSS",
"JavaScript",
"Bootstrap",
"SQL Server"
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
  type: "Enterprise Procurement System",
  title: "Purchase Request Portal (PR Portal)",
 description: `
Developed an enterprise Purchase Request management system that transformed a manual email-based procurement process into a centralized digital workflow.

Before the implementation of the PR Portal, purchase requests were created, reviewed, approved, and tracked through email communication, making visibility, tracking, and process management challenging.

The PR Portal centralized the entire process into a single platform where employees can submit requests, upload supporting documents, monitor request progress, and manage approvals through a structured multi-level workflow.

The solution includes role-based access control, automated workflow routing, email notifications, Microsoft Graph integration, attachment management through Azure Blob Storage, dashboard reporting, and external BOT/SAP integration for PR processing.
`,
  role:
    "Worked on developing and enhancing the PR workflow system, including request submission, approval logic, role-based access, request tracking, dashboard features, attachment handling, and workflow improvements based on business requirements.",

  features: [
  "Purchase request submission",
  "Multi-level approval workflow",
  "Conditional workflow routing based on cost center",
  "Role-based access control",
  "Director approval, technical review, and technical confirmation",
  "Budget confirmation and procurement processing",
  "Final decision workflow",
  "Request tracking and status monitoring",
  "Dashboard and reporting indicators",
  "Automated email notifications",
  "Attachment upload and storage",
  "External BOT for PR processing"
],

impact: [
  "Replaced a manual email-based procurement process.",
  "Centralized procurement requests in a single platform.",
  "Improved approval visibility and request tracking.",
  "Automated workflow notifications and routing.",
  "Enhanced operational efficiency and process transparency."
],

tech: [
  "ASP.NET MVC",
  "SQL Server",
  "JavaScript",
  "Bootstrap",
  "Microsoft Graph",
  "Azure Blob Storage",
  "Azure Entra ID",
  "Azure DevOps"
],

  images: [
    "images/pr1.jpeg",
    "images/pr2.jpeg",
    "images/pr3.jpeg",
    "images/pr4.jpeg"
  ]
},flynas: {
  type: "UI/UX Prototype & Workflow Planning",

  title: "Flynas Digitization Prototype",

  description:
    "A UI/UX and workflow planning project focused on visualizing how operational airline forms and manual procedures could be transformed into a digital process. The project was created as a prototype and process flow plan before the development phase.",

  role:
    "Designed the initial Figma prototype, planned the user journey, structured the form flow, and mapped how users would move through the digitized process. The work focused on UI/UX design, workflow planning, and presenting the future digital experience before coding or system implementation started.",

  features: [
    "Figma prototype design",
    "User journey planning",
    "Operational form flow mapping",
    "Screen structure and layout planning",
    "Workflow step planning",
    "Digital process visualization",
    "Responsive interface concept",
    "User-focused experience planning"
  ],

  impact: [
    "Visualized the future digital process before development.",
    "Helped clarify how manual operational forms could be digitized.",
    "Supported early-stage planning for a digital transformation initiative.",
    "Provided a clear prototype for discussion with stakeholders.",
    "Improved understanding of the required user flow and screen structure."
  ],

  tech: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "User Flow Design",
    "Workflow Planning"
  ],

  images: [
    "images/flynas1.png",
    "images/flynas2.png",
    "images/flynas3.png",
    "images/flynas4.png"
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

const impactList = document.getElementById("galleryImpact");
impactList.innerHTML = "";

if (project.impact) {
  project.impact.forEach((impact) => {
    const li = document.createElement("li");
    li.textContent = impact;
    impactList.appendChild(li);
  });
}

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

