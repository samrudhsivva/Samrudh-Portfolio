/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Samrudh Sivva",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Samrudh Sivva Portfolio",
    type: "website",
    url: "http://samrudh.online/",
  },
};

//Home Page
const greeting = {
  title: "Samrudh Sivva",
  logo_name: "SamrudhSivva",
  nickname: "Samrudh",
  subTitle:
    "A dedicated professional committed to building innovative solutions that drive technological advancement and social good",
  resumeLink:
    "https://drive.google.com/file/d/1Jq_hI3QcT4Gr_8rtaj1xynk_T-eqyjUq/view?usp=drive_link",
  portfolio_repository: "https://github.com/samrudhsivva/",
  githubProfile: "https://github.com/samrudhsivva",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/samrudhsivva",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samrudh-sivva/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@samrudhsivva7059",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:samrudh5000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/sivva_samrudh",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/samrudh.sivva/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/samrudh.sivva/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FrontEndImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating visually appealing and user-friendly interfaces",
        "⚡ Developing dynamic and interactive web applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Creating robust backend systems with Node.js, Express, and Flask",
        "⚡ Building RESTful APIs and microservices",
        "⚡ Integrating databases like MongoDB and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Cloud Development",
      fileName: "CloudDevImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "AI and Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/samrudh5000/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/samrudh5000",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/samrudh5000",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/samrudh5000",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jawaharlal Nehru Technological University, Hyderabad",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "jntu.png",
      alt_name: "Samrudh Sivva JNTU",
      duration: "August 2018 - May 2022",
      descriptions: [
        "⚡ I have studied fundamental software engineering subjects like Data Structures, Analysis of Algorithms, Operating Systems, DBMS, Mathematics, and Agile Software Development.",
        "⚡ I was a Gold Medalist with a GPA of 4.00/4.00, reflecting my exceptional academic performance.",
        "⚡ In addition to core subjects, I completed courses on Deep Learning, Data Science, Cloud Computing, and Full Stack Development.",
      ],
      website_link: "https://jntuh.ac.in/",
    },
    {
      title: "San Jose State University",
      subtitle: "M.S. in Software Engineering",
      logo_path: "San-Jose-State-Spartans-logo.png",
      alt_name: "Samrudh Sivva SJSU",
      duration: "January 2024 - December 2025",
      descriptions: [
        "⚡ My coursework includes Enterprise Software Platforms, Software Systems Engineering, Cloud Computing, and Distributed Systems.",
        "⚡ I have taken advanced courses in Artificial Intelligence, including Explainable AI, Graph Machine Learning, and Computer Vision.",
        "⚡ As a research assistant, I worked on developing new testing algorithms by working on cloud independence of a AI Test Tool.",
        "⚡ I have maintained a GPA of 3.9/4.00 throughout my studies.",
      ],
      website_link: "https://www.sjsu.edu/",
    },
  ],
};
const certifications = {
  certifications: [
    {
      title: "Namste React",
      subtitle: "- Akshay Saini",
      logo_path: "namastedev.png",
      certificate_link:
        "https://courses.namastedev.com/learn/certificate/8816683-142240",
      alt_name: "Samrudh Sivva Namste React Certificate",
      color_code: "#8C151599",
    },
    {
      title: "PEP Trainee",
      subtitle: "- Epam Systems",
      logo_path: "epam_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1IIqgsVSrHJqQhqhmiTUppKD9Bb4Zel3e/view?usp=drivesdk",
      alt_name: "Samrudh Sivva PEP Trainee Certificate",
      color_code: "#00000099",
    },
    {
      title: "AI and ML Internship",
      subtitle: "- IBM",
      logo_path: "IBM_LOGO.png",
      certificate_link: "https://drive.google.com/drive/my-drive",
      alt_name: "Samrudh Sivva AI Certification",
      color_code: "#0C9D5899",
    },
    {
      title: "MERIT Certification",
      subtitle: "- Academics Top GNI",
      logo_path: "jntu.png",
      certificate_link:
        "https://drive.google.com/file/d/1FD3xspf7HI3vhRTCPRC9gJd49pkUK3WX/view?usp=drivesdk",
      alt_name: "Samrudh Sivva GNI Certification",
      color_code: "#1F70C199",
    },
    {
      title: "Quiz Winner at ETV",
      subtitle: "- ETV Channel India",
      logo_path: "etv.png",
      certificate_link:
        "https://drive.google.com/file/d/1FMtvZkTZrz9CjLmONm5wqFOwJSZKF-Q-/view?usp=drivesdk",
      alt_name: "Samrudh Sivva ETV Champion Certificate",
      color_code: "#D83B0199",
    },
    {
      title: "TypeScript Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "Samrudh Sivva Linkedin certificate",
      color_code: "#1F70C199",
    },
    {
      title: "ReactJS Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/2ec61520eefd4b5b8c86b040c44296ab93a3c8c3b4c6fad9aa59c912e5842eb5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYs9g6ToVQk%2Bh3COT%2Fj5niQ%3D%3D",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Red Hat Cloud Training",
      subtitle: "- RedHat",
      logo_path: "redhat.jpeg",
      certificate_link: "",
      alt_name: "Samrudh Sivva Red Hat Training",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Angela Yu",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Samrudh Sivva Angela Yu Certificate",
      color_code: "#2A73CC",
    },

    {
      title: "Data Structures and Algorithms",
      subtitle: "- Smart Interviews",
      logo_path: "smartinterviews.jpeg",
      certificate_link: "",
      alt_name: "Samrudh Sivva DSA Smart Interviews Certificate",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with various startups and established companies in roles ranging from Software Engineer to Data Science Intern. My experience spans developing scalable applications, improving system performance, and pioneering new features. I am passionate about technology and community involvement, which drives my active participation in organizing events and contributing to open-source projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer 1",
          company: "Epam Systems",
          company_url: "https://www.epam.com/",
          logo_path: "epam_logo.png",
          duration: "July 2022 - May 2023",
          location: "Hyderabad, TS, India",
          description: [
            "Developed RESTful microservices using NodeJS and DynamoDB.",
            "Optimized backend architecture and database models.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer 2",
          company: "Epam Systems",
          company_url: "https://www.epam.com/",
          logo_path: "epam_logo.png",
          duration: "June 2023 - December 2023",
          location: "Hyderabad, TS, India",
          description: [
            "Revamped website architecture using NextJS.",
            "Streamlined testing and deployment processes with Jenkins and Cypress.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Epam Systems",
          company_url: "https://www.epam.com/",
          logo_path: "epam_logo.png",
          duration: "January 2022 - June 2022",
          location: "Hyderabad, TS, India",
          description: [
            "Designed a web application using React, JavaScript, and Node.js.",
            "Integrated AWS services and DynamoDB.",
          ],
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "IBM",
          company_url: "https://www.ibm.com/",
          logo_path: "IBM_LOGO.png",
          duration: "June 2020 - August 2020",
          location: "Hyderabad, TS, India",
          description: [
            "Worked on AI/ML, CNN, RNN, NLP, and data science projects.",
            "Deployed solutions using deep learning models and statistical methods.",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Sparatan Recreation and Aquatic Centre",
          company: "SRAC San Jose State University",
          company_url: "https://www.sjsu.com/",
          logo_path: "sjsulogo.png",
          duration: "June 2024 - Current",
          location: "San Jose, California",
          description: [
            "Worked in social media and outreach teams.",
            "Developed the centre's website.",
          ],
          color: "#4285F4",
        },
        {
          title: "Adobe Student Ambassador",
          company: "Adobe",
          company_url: "https://www.adobe.com/",
          logo_path: "adobe.jpeg",
          duration: "Feb 2024 - Current",
          location: "San Jose, California",
          description: [
            "Demonstrated skills with Adobe products like Express and Cloud.",
            "Organized workshops and community meetings.",
          ],
          color: "#D83B01",
        },
        {
          title: "Social Media Coordinator",
          company: "Indian Student Organisation",
          company_url: "https://www.instagram.com/iso.sjsu/",
          logo_path: "iso.jpeg",
          duration: "Mar 2024 - July 2024",
          location: "San Jose, California",
          description: [
            "Coordinated social media activities.",
            "Organized events at SJSU.",
          ],
          color: "#000000",
        },
        {
          title: "Content Writer Core Team",
          company: "Girl Script Organisation",
          company_url: "https://www.instagram.com/girlscriptfoundation/?hl=en",
          logo_path: "girlscript.jpeg",
          duration: "Jan 2018 - May 2020",
          location: "Hyderabad, Telangana",
          description: [
            "Worked as a content writer and social media manager.",
            "Organized webinars and tech workshops.",
          ],
          color: "#0C9D58",
        },
        {
          title: "Member of Street Cause Organisation GNI",
          company: "Street Cause",
          company_url: "https://www.streetcause.org/",
          logo_path: "streetcause.jpeg",
          duration: "July 2019 - Aug 2022",
          location: "Hyderabad, India",
          description: [
            "Organized environmental conservation events.",
            "Assisted needy students with education supplies.",
          ],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects use a wide range of the latest technology tools. I specialize in creating Data Science projects and deploying them as web applications using cloud infrastructure, integrating web applications and AI technologies to enhance efficiency and scalability.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "AI System for Stock Market Trading",
      name: "AI System for Stock Market Trading",
      createdAt: "2022-11-02T00:00:00Z",
      description: "Paper published in ICICSE 2022",
      url: "https://www.gniindia.org/international-conferences.php",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MyPic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Front End, Back End, Cloud and Devops Technologies.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://www.samrudh.online/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "190 Ryland St, San Jose, CA, USA 95110",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95110",
    streetAddress: "Ryland St",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/mmZqunJxwPHMp4JC6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
