const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId);

  if (headerToggle && navbarId) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggleBtn.classList.toggle("fa-times");
    });
  }
};
showMenu("header-toggle", "navbar");

const linkcolor = document.querySelectorAll(".nav_link");

function colorLink() {
  linkcolor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkcolor.forEach((l) => l.addEventListener("click", colorLink));

const textContents = [
  {
    title: "How to make Hotel Booking Website With HTML CSS",
    subtitle: "MV Studio",
    views: "56.7M",
    timestamp: "1 Week ago",
  },
  {
    title: "Learn JavaScript in 30 Minutes",
    subtitle: "Coding Academy",
    views: "12.3M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Mastering React: Build Modern Web Apps",
    subtitle: "TechGurus",
    views: "8.9M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "The Art of Web Design",
    subtitle: "Creative Designs",
    views: "5.4M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Data Science: A Comprehensive Guide",
    subtitle: "Data Insights",
    views: "2.1M",
    timestamp: "4 Weeks ago",
  },
  {
    title: "Introduction to Machine Learning",
    subtitle: "AI Academy",
    views: "3.8M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "UI/UX Design Principles",
    subtitle: "Design Masters",
    views: "7.6M",
    timestamp: "1 Week ago",
  },
  {
    title: "The Complete Python Course",
    subtitle: "Code Masters",
    views: "10.5M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Mobile App Development with Flutter",
    subtitle: "App Builders",
    views: "6.2M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "Web Development Crash Course",
    subtitle: "Code Ninja",
    views: "9.8M",
    timestamp: "1 Month ago",
  },
  {
    title: "Advanced CSS Techniques",
    subtitle: "Stylish Designs",
    views: "4.3M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Python Data Analysis",
    subtitle: "Data Wizards",
    views: "7.1M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "JavaScript Framework Comparison",
    subtitle: "Framework Experts",
    views: "3.2M",
    timestamp: "2 Months ago",
  },
  {
    title: "Introduction to Artificial Intelligence",
    subtitle: "AI Explorers",
    views: "5.9M",
    timestamp: "4 Weeks ago",
  },
  {
    title: "Responsive Web Design Tips",
    subtitle: "Design Pro",
    views: "2.6M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "Java Programming Basics",
    subtitle: "Java Gurus",
    views: "8.4M",
    timestamp: "1 Week ago",
  },
  {
    title: "Data Visualization with D3.js",
    subtitle: "Visualization Masters",
    views: "6.7M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Frontend Frameworks Comparison",
    subtitle: "Framework Experts",
    views: "4.1M",
    timestamp: "3 Weeks ago",
  },
  {
    title: "Building Scalable Web Applications",
    subtitle: "Scalability Pros",
    views: "3.5M",
    timestamp: "2 Weeks ago",
  },
  {
    title: "Introduction to Data Structures",
    subtitle: "Code Wizards",
    views: "1.9M",
    timestamp: "2 Weeks ago",
  },
];

const section = document.querySelector("section.video_content");

for (let i = 0; i < 100; i++) {
  const contentIndex = i % textContents.length;
  const content = textContents[contentIndex];

  const videoItem = document.createElement("div");
  videoItem.classList.add("video_items");

  const link = document.createElement("a");
  link.href = "single-page.html";

  const image = document.createElement("img");
  image.src = `images/video_images/back${(i % 20) + 1}.jpg`;
  image.alt = "";

  link.appendChild(image);
  videoItem.appendChild(link);

  const details = document.createElement("div");
  details.classList.add("details", "flex");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");

  const img = document.createElement("img");
  img.src =
    "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png";
  img.alt = "";

  imgDiv.appendChild(img);
  details.appendChild(imgDiv);

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = content.title;

  const subtitle = document.createElement("span");
  subtitle.classList.add("subtitle");
  subtitle.textContent = content.subtitle;

  const viewsTimestamp = document.createElement("div");
  viewsTimestamp.classList.add("views-timestamp");
  viewsTimestamp.style.display = "flex";
  viewsTimestamp.style.gap = "2rem";
  const views = document.createElement("span");
  views.textContent = content.views;

  const timestamp = document.createElement("span");
  timestamp.textContent = content.timestamp;

  viewsTimestamp.appendChild(views);
  viewsTimestamp.appendChild(timestamp);

  heading.appendChild(title);
  heading.appendChild(subtitle);
  heading.appendChild(viewsTimestamp);

  details.appendChild(heading);
  videoItem.appendChild(details);

  section.appendChild(videoItem);
}