// script.js
// All functionality is wrapped in initPortfolio() and only runs once loader.js
// has finished fetching and injecting every section from sections/*.html into
// index.html (signaled by the "sectionsLoaded" event). This guarantees every
// element this file queries for already exists in the DOM.

function initPortfolio() {
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
  revealOnScroll();

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
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
    chauffeur: {
      type: "Enterprise Guest Service Platform",

      title: "Chauffeur / Guest Portal",

      description:
        "An enterprise web application developed to digitize and manage guest chauffeur service requests. The portal supports the full request lifecycle, allowing authorized users to create, review, approve, track, and manage chauffeur requests through structured role-based workflows.",

      role:
        "Worked on the full-stack development of the portal and delivered the first functional version within three weeks. Contributed to request workflows, role-based access, authentication, automated notifications and reminders, security enhancements, testing, and deployment readiness.",

      features: [
        "Full chauffeur request lifecycle",
        "Role-based access control",
        "Microsoft Entra ID / SSO authentication",
        "Automated email notifications",
        "Automated 24-hour and 8-hour reminders",
        "Request status tracking",
        "Operational role workflows",
        "Audit tracking",
        "Guest request management",
        "Security enhancements"
      ],

      impact: [
        "Digitized guest chauffeur request management",
        "Centralized operational workflows",
        "Improved request visibility and tracking",
        "Automated service notifications and reminders",
        "Supported secure role-based access"
      ],

      tech: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "SQL Server",
        "Microsoft Entra ID",
        "REST APIs",
        "Azure",
        "Git / GitHub"
      ],

      images: []
    },

    crew: {
      type: "Transportation Workflow & Backend System",

      title: "Crew Transportation System",

      description:
        "An enterprise transportation management system developed to digitize bus registration and approval processes across multiple operational roles. The solution provides a structured workflow between SAAS, SGS, and airline users while supporting centralized data management and request processing.",

      role:
        "Worked primarily on backend development, building REST APIs, database operations, workflow logic, and multi-level approval functionality. Contributed to system completion, testing, security remediation, and database integration.",

      features: [
        "Multi-level approval workflow",
        "SAAS → SGS → Airline workflow",
        "Bus registration management",
        "Role-based access",
        "Backend REST APIs",
        "Request status management",
        "Database-driven workflow",
        "Data validation",
        "Optimistic concurrency control",
        "System testing"
      ],

      impact: [
        "Digitized transportation registration workflows",
        "Centralized transportation request management",
        "Improved workflow visibility",
        "Supported structured approvals across multiple operational roles",
        "Reduced reliance on manual processing"
      ],

      tech: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "SQL Server",
        "REST APIs",
        "JavaScript",
        "Git / GitHub"
      ],

      images: []
    },

    pr: {
      type: "Enterprise Procurement Workflow System",

      title: "Procurement Request (PR) Portal",

      description:
        "An enterprise procurement platform developed to transform a manual email-based purchase request process into a centralized digital workflow. The portal allows users to submit requests, upload supporting documents, track request progress, and manage approvals through a structured multi-stage process.",

      role:
        "Led the end-to-end development of the PR Portal, including request submission, workflow logic, multi-stage approvals, role-based access, request tracking, Excel automation, attachment handling, notifications, database operations, testing, and continuous improvements based on business requirements.",

      features: [
        "Purchase request submission",
        "Multi-stage approval workflow",
        "Conditional workflow routing",
        "Role-based access control",
        "Request status tracking",
        "Excel import/export automation",
        "Automated email notifications",
        "Attachment management",
        "Dashboard and reporting indicators",
        "Procurement processing workflow"
      ],

      impact: [
        "Replaced a manual email-based procurement process",
        "Centralized purchase requests",
        "Improved approval visibility and tracking",
        "Reduced repetitive manual data entry",
        "Automated workflow routing and notifications"
      ],

      tech: [
        "C#",
        "ASP.NET MVC",
        "SQL Server",
        "JavaScript",
        "Bootstrap",
        "Microsoft Graph",
        "Azure Blob Storage",
        "Microsoft Entra ID",
        "Azure DevOps"
      ],

      images: [
        "images/pr1.png",
        "images/pr2.png",
        "images/pr3.png",
        "images/pr4.png",
        "images/pr5.png"
      ]
    },

    timekeeper: {
      type: "Attendance Digitization System",

      title: "Timekeeper Portal",

      description:
        "An internal web application developed to replace manual Excel-based attendance processes with a structured digital workflow. The system supports attendance submission, Excel processing, automated file generation, and integration with existing operational processes.",

      role:
        "Contributed to attendance workflows, Excel processing functionality, database operations, validation logic, user interface improvements, testing, troubleshooting, and continuous system enhancements.",

      features: [
        "Digital attendance submission",
        "Excel upload and validation",
        "Automated Excel file generation",
        "Attendance record management",
        "Database logging and tracking",
        "Authentication and access control",
        "Automation workflow support",
        "Responsive user interface"
      ],

      impact: [
        "Reduced manual Excel processing",
        "Improved attendance data accuracy",
        "Automated repetitive processing",
        "Improved attendance workflow efficiency"
      ],

      tech: [
        "ASP.NET Core MVC",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "ClosedXML",
        "Microsoft Graph",
        "Microsoft Entra ID",
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
        "Contributed to enhancing an existing Flight Information System by improving user interfaces, usability, and operational screens based on business requirements.",

      role:
        "Worked on improving and modernizing existing interfaces, refining layouts and navigation, enhancing usability, and supporting system improvement activities based on operational requirements and user feedback.",

      features: [
        "User interface enhancements",
        "Operational screen improvements",
        "Layout optimization",
        "Navigation improvements",
        "Usability enhancements",
        "User-focused design improvements"
      ],

      impact: [
        "Improved overall user experience",
        "Enhanced usability of operational screens",
        "Provided cleaner and more intuitive interfaces",
        "Supported ongoing system improvement initiatives"
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

    filetrip: {
      type: "UI/UX Prototype & Workflow Planning",

      title: "FileTrip Digitization Prototype",

      description:
        "A planning and UI/UX prototyping initiative created to visualize a proposed digital workflow before development. The work focused on understanding the process, organizing the user journey, planning screen structures, and presenting the future digital experience through an interactive prototype.",

      role:
        "Contributed to the initial planning of the project and developed the UI/UX prototype. Worked on user-flow planning, screen structure, workflow visualization, and prototyping before the development phase.",

      features: [
        "UI/UX prototype",
        "User journey planning",
        "Workflow mapping",
        "Screen structure planning",
        "Digital process visualization",
        "Interactive prototype",
        "Early-stage requirements understanding"
      ],

      impact: [
        "Visualized the proposed digital workflow before development",
        "Supported early stakeholder discussions",
        "Helped clarify user flow and screen structure",
        "Provided a prototype for the planned digitization initiative"
      ],

      tech: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "User Flow Design",
        "Workflow Planning"
      ],

      // No screenshots are available for this project yet — it was an early-stage
      // planning/prototype effort. The gallery UI hides the image area and image
      // navigation controls whenever `images` is empty (see the gallery-btn handler
      // below), so this intentionally renders without broken image paths.
      images: []
    },

    qout: {
      type: "Senior / Graduation Project",

      title: "Qoot – Smart Fridge System",

      description:
        "A graduation project focused on developing an AI-powered smart fridge ecosystem that helps users manage food inventory, track expiration dates, reduce food waste, and receive personalized recipe recommendations. The solution combines a custom Raspberry Pi-based device that attaches to an existing refrigerator, computer vision, cloud services, and a mobile application to transform a traditional fridge into a smart inventory management system.",

      role:
        "Contributed to system analysis, database design, mobile application development, Firebase integration, testing, and implementation of the smart inventory management solution. Participated in designing and integrating a Raspberry Pi-based smart device that attaches to an existing refrigerator, scans products, tracks inventory, and synchronizes data with the mobile application.",

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
        "Raspberry Pi",
        "IoT"
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
        "A tourism and booking platform developed using Java and object-oriented programming, allowing users to browse destinations and manage hotel, attraction, restaurant, and reservation-related activities.",

      role:
        "Participated in system analysis, design, implementation, and Scrum-based development activities.",

      features: [
        "Choose city and date",
        "View and reserve hotels",
        "Book attractions",
        "View restaurants",
        "Manage reservation details"
      ],

      tech: ["Java", "OOP", "Agile / Scrum", "Software Engineering"],

      // No screenshot is available for this project — the academic card already
      // shows a text placeholder instead of an <img>, and the gallery below
      // handles an empty images array the same way (no broken image path).
      images: []
    },

    helpconnect: {
      type: "UI/UX Design & Customer Support Platform",

      title: "HelpConnect",

      description:
        "A customer support platform concept designed to improve communication between businesses and customers through support tickets and live chat.",

      role:
        "Contributed to requirements gathering, user research, system analysis, use-case modeling, UI/UX design, wireframing, prototyping, and usability testing.",

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
        "Usability Testing"
      ],

      images: [
        "images/helpconnect.png",
        "images/helpconnect1.png",
        "images/helpconnect2.png",
        "images/helpconnect3.png"
      ]
    }
  };

  const galleryModal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  const galleryNoImages = document.getElementById("galleryNoImages");
  const galleryControls = document.getElementById("galleryControls");
  const galleryType = document.getElementById("galleryType");
  const galleryTitle = document.getElementById("galleryTitle");
  const galleryDescription = document.getElementById("galleryDescription");
  const imageCounter = document.getElementById("imageCounter");

  let currentImages = [];
  let currentIndex = 0;

  document.querySelectorAll(".gallery-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      const project = galleryData[btn.dataset.gallery];

      currentImages = project.images || [];
      currentIndex = 0;

      galleryType.textContent = project.type || "";
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
      if (currentImages.length > 0) {
        galleryImage.hidden = false;
        galleryNoImages.hidden = true;
        galleryControls.hidden = false;

        galleryImage.src = currentImages[0];
        imageCounter.textContent =
          `1 / ${currentImages.length}`;
      } else {
        galleryImage.hidden = true;
        galleryImage.src = "";
        galleryNoImages.hidden = false;
        galleryControls.hidden = true;
      }

      galleryModal.classList.add("show-gallery");

    });

  });

  document.getElementById("closeGallery")
  .addEventListener("click", () => {

    galleryModal.classList.remove("show-gallery");

  });

  document.getElementById("nextImage")
  .addEventListener("click", () => {

    if (!currentImages.length) return;

    currentIndex =
    (currentIndex + 1) % currentImages.length;

    galleryImage.src =
    currentImages[currentIndex];

    imageCounter.textContent =
    `${currentIndex + 1} / ${currentImages.length}`;

  });

  document.getElementById("prevImage")
  .addEventListener("click", () => {

    if (!currentImages.length) return;

    currentIndex =
    (currentIndex - 1 + currentImages.length)
    % currentImages.length;

    galleryImage.src =
    currentImages[currentIndex];

    imageCounter.textContent =
    `${currentIndex + 1} / ${currentImages.length}`;

  });

}

// Sections are injected asynchronously by loader.js. Wait for the
// "sectionsLoaded" event it dispatches once every section has been fetched
// and inserted into the DOM before wiring up any functionality.
document.addEventListener("sectionsLoaded", initPortfolio);
