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
    guestportal: {
      type: "Enterprise Guest Service Platform",

      title: "Guest Transportation Request Portal",

      description:
        "An enterprise web application that digitizes how guest transportation requests are submitted, approved, and fulfilled. It replaced manual coordination with one portal that takes every request through its full lifecycle (creation, review, approval, assignment, and completion) with a dedicated workflow for each operational role.",

      role:
        "Full-stack developer. Built the first functional version within three months: designed the request workflow and status model, built the backend APIs and database layer, implemented SSO and role-based access, and added automated email notifications with scheduled reminders. Also handled security remediation, testing, and deployment readiness.",

      approach: [
        "Mapped the manual request process into a clear status model and approval path for each operational role.",
        "Built the backend with Node.js and Express as REST APIs, with role-based authorization enforced on every endpoint.",
        "Designed the database on Azure SQL to store requests, guest details, status history, and audit records.",
        "Integrated Microsoft Entra ID single sign-on so employees log in with their existing corporate accounts.",
        "Built a responsive Bootstrap front end with role-specific screens and request status tracking.",
        "Automated email notifications, plus scheduled reminders 24 hours and 8 hours before each trip.",
        "Fixed security findings, tested the full request lifecycle, and prepared the app for deployment on Azure."
      ],

      features: [
        "End-to-end request lifecycle",
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
        "Digitized guest transportation request management",
        "Centralized operational workflows",
        "Improved request visibility and tracking",
        "Automated service notifications and reminders",
        "Supported secure role-based access"
      ],

      tech: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "Bootstrap",
        "Azure SQL",
        "Microsoft Entra ID",
        "Azure",
        "Git / GitHub"
      ],

      imageNote: "Screenshots are not shown to protect client confidentiality.",

      images: []
    },

    crew: {
      type: "Transportation Workflow & Backend System",

      title: "Crew Transportation System",

      description:
        "An enterprise transportation management system developed to digitize bus registration and approval processes across multiple organizations and operational roles. Each request passes through a three-level approval chain involving partner organizations and airline users, with all data and requests managed in one central system.",

      role:
        "Worked primarily on backend development, building REST APIs, database operations, workflow logic, and multi-level approval functionality. Contributed to system completion, testing, security remediation, and database integration.",

      features: [
        "Multi-level approval workflow",
        "Three-level approval chain across partner organizations",
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
        "Supported structured approvals across multiple organizations",
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

      imageNote: "Screenshots are not shown to protect client confidentiality.",

      images: []
    },

    pr: {
      type: "Enterprise Procurement Workflow System",

      title: "Procurement Request (PR) Portal",

      description:
        "An enterprise procurement platform that replaced a manual process where purchase requests were passed from person to person by email. All requests now live in one central system where users submit requests, upload supporting documents, track progress, and move through a structured multi-stage approval process. Once approvals are complete, the request is handed off automatically to an integrated automation bot that completes the procurement processing.",

      role:
        "Built the entire system end to end: request submission, workflow logic, multi-stage and conditional approvals, role-based access, request tracking, attachment handling, email notifications, database design, the automation bot integration, testing, and continuous improvements based on business requirements.",

      features: [
        "Purchase request submission",
        "Multi-stage approval workflow",
        "Conditional workflow routing",
        "Role-based access control",
        "Request status tracking",
        "Automated email notifications",
        "Attachment management",
        "Dashboard and reporting indicators",
        "Automation bot integration for final processing"
      ],

      impact: [
        "Replaced manual person-to-person email approvals",
        "Centralized all purchase requests in one system",
        "Improved approval visibility and tracking",
        "Automated workflow routing and notifications",
        "Connected approvals directly to automated procurement processing"
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
      type: "Attendance System Enhancement",

      title: "Timekeeper Portal",

      description:
        "An existing internal attendance system used to submit and manage daily attendance records. My work focused on improving its user experience and adding a new Excel upload feature: users attach an Excel file, the system reads it, and the attendance data is uploaded automatically instead of being entered manually record by record.",

      role:
        "Enhanced the UI/UX of the existing portal and built the new Excel upload feature end to end: attaching the file, reading and parsing its contents, and uploading the attendance data into the system.",

      approach: [
        "Reviewed the existing screens and improved their layout, structure, and ease of use.",
        "Added an option to attach an Excel file directly from the attendance form.",
        "Read and parsed the uploaded Excel file on the server using C# and ClosedXML.",
        "Mapped the file's rows to attendance records and uploaded them into the system's database."
      ],

      features: [
        "Excel file attachment",
        "Automatic reading of Excel attendance data",
        "Bulk upload of attendance records",
        "Improved form layouts and usability",
        "Cleaner, more consistent interface"
      ],

      impact: [
        "Replaced manual, record-by-record data entry with a single file upload",
        "Faster attendance submission",
        "Improved overall user experience"
      ],

      tech: [
        "ASP.NET Core MVC",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "ClosedXML",
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
      type: "UI/UX Modernization",

      title: "Flight Information System (FIS)",

      description:
        "An existing flight information system used by operations teams. The work focused on modernizing its legacy screens, converting older interfaces into clean, consistent, and well-structured pages that are easier to read and use.",

      role:
        "Redesigned and rebuilt legacy screens into modern layouts with consistent formatting, clearer navigation, and better readability, improving the overall user experience across the system's operational screens.",

      features: [
        "Legacy screen modernization",
        "Consistent layout and formatting",
        "Navigation improvements",
        "Improved readability of operational data",
        "User-focused design improvements"
      ],

      impact: [
        "Improved overall user experience",
        "Unified the look and feel across screens",
        "Made operational screens easier to read and use"
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

    digitalproto: {
      type: "UI/UX Prototype & Workflow Planning",

      title: "Operational Workflow Digitization Prototype",

      description:
        "An early-stage digitization initiative for an aviation client, aimed at turning a paper-based operational process into a digital workflow. Before any development started, the work focused on understanding the current process, defining the future user journey, and presenting the proposed digital experience as an interactive prototype.",

      role:
        "Took part in the initial project planning and independently designed the full UI/UX prototype. Responsible for translating the process into user flows and screen structures, then designing the interactive prototype used to review the proposed solution with stakeholders before development.",

      approach: [
        "Reviewed the current manual process to identify its steps, users, documents, and pain points.",
        "Mapped the future digital workflow and user journey for each user type.",
        "Defined the information architecture and screen structure for each step.",
        "Built low-fidelity wireframes to validate the flow early.",
        "Designed high-fidelity screens and linked them into a clickable Figma prototype.",
        "Presented the prototype in stakeholder discussions to clarify requirements before development."
      ],

      features: [
        "Interactive UI/UX prototype",
        "User journey planning",
        "Workflow mapping",
        "Screen structure planning",
        "Digital process visualization",
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

      // No screenshots are shown for this project (client confidentiality /
      // early-stage work). The gallery hides the image area when `images` is empty.
      imageNote: "Screenshots are not shown to protect client confidentiality.",

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

  const approachBox = document.getElementById("galleryApproachBox");
  const approachList = document.getElementById("galleryApproach");
  approachList.innerHTML = "";
  if (project.approach && project.approach.length) {
    project.approach.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      approachList.appendChild(li);
    });
    approachBox.hidden = false;
  } else {
    approachBox.hidden = true;
  }

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
        galleryNoImages.textContent = project.imageNote || "Project screenshots will be added soon.";
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
