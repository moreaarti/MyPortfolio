"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>React Native</li>
          <li>JavaScript</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul>
          <li>BE, Pune University</li>
          <li>Diploma, MSBTE</li>
        </ul>
      ),
    },
    {
      title: "certifications",
      id: "certifications",
      content: (
        <ul>
          <li>React.js Certification</li>
          <li>JavaScript Mastery</li>
        </ul>
      ),
    },
    {
      title: "experience",
      id: "experience",
      content: (
        <ul>
          <li>Frontend React Developer at NLB servies Pvt Ltd</li>
          <li>Mobile Developer at Spanrig technology</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    setTab(id); // Simple tab state update
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src="/img/about-image.png" width={500} height={500} alt="About Image" />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4 sm:mt-4'>
            About Me
          </h2>
          <p className='text-base lg:text-lg'>
            I am a Web and mobile developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React-Redux, Node.js, Express.js, React Native, Next.js, SQL, HTML, CSS, and other libraries. I am a quick learner and always looking to expand my knowledge and skill set. I am a team player and excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-8'>
            {/* Applying the CSS styles to each tab */}
            <button 
              onClick={() => handleTabChange("skills")} 
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${tab === "skills" ? "text-white border-purple-600" : ""}`}>
              Skills
            </button>

            <button 
              onClick={() => handleTabChange("education")} 
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${tab === "education" ? "text-white border-purple-600" : ""}`}>
              Education
            </button>

            <button 
              onClick={() => handleTabChange("certifications")} 
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${tab === "certifications" ? "text-white border-purple-600" : ""}`}>
              Certifications
            </button>

            <button 
              onClick={() => handleTabChange("experience")} 
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${tab === "experience" ? "text-white border-purple-600" : ""}`}>
              Experience
            </button>
          </div>

          {/* Display the selected tab content */}
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



// "use client"
// import React, { useState, useTransition } from 'react'
// import Image from 'next/image'
// import TabButton from './TabButton'

// const AboutSection = () => {
//     const [tab, setTab] = useState("skills")
//     const [startTransition, isPending] = useTransition();

//     const TAB_DATA = [{
//         title: "skills",
//         id: "skills",
//         content: (
//             <ul>
//                 <li>
//                     React.js,
//                 </li>
//                 <li>
//                     Next.js,
//                 </li>
//                 <li>
//                     node.js,
//                 </li>
//                 <li>
//                     React Native,
//                 </li>
//                 <li>
//                     JavaScript,
//                 </li>

//             </ul>
//         )


//     },
//     {
//         title: "Education",
//         id: "education",
//         content: (
//             <ul>
//                 <li>BE, Pune university</li>
//                 <li>Diploma, MSBTE</li>
//             </ul>)
//     }
//     ]

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id)

//         })
//     }
//     return (
//         <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
//             <Image src="/img/about-image.png" width={500} height={500} />
//             <div>
//                 <h2 className='text-4xl font-bold text-white mb-4 sm:mt-4'>
//                     About Me
//                 </h2>
//                 <p className='text-base lg:text:lg'>
//                     I am a Web and mobile developer with passionate for creating interactive and responsive web application I have experience to working with JavaScript, react-redux, node JS, Express js, React Native, next js, SQL, HTML, CSS and other libraries. I am quick learner I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with other to create amazing application.
//                 </p>
//                 <div className='flex flex-row mt-8'>
//                     {/* <TabButton
//                         selectTab={() => handleTabChange("skills")} active={tab === "skills"} >
//                         Skills
//                     </TabButton>
//                     <TabButton
//                         selectTab={() => handleTabChange("Education")} active={tab === "Education"} >
//                         Education
//                     </TabButton>
//                     <div className='mt-8'>{TAB_DATA.find((t) => t.id == tab.content)}</div>
//                     <TabButton
//                         selectTab={() => handleTabChange("Certifications")} active={tab === "Certifications"} >
//                         Certifications
//                     </TabButton> */}
//                     <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
//                     <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Education</span>
//                     <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Experience</span>
//                 </div>
//             </div>
//         </div>
//         </section>
//     )
// }

// export default AboutSection




// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import TabButton from './TabButton';

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");

//   const TAB_DATA = [
//     {
//       title: "skills",
//       id: "skills",
//       content: (
//         <ul>
//           <li>React.js</li>
//           <li>Next.js</li>
//           <li>Node.js</li>
//           <li>React Native</li>
//           <li>JavaScript</li>
//         </ul>
//       ),
//     },
//     {
//       title: "education",
//       id: "education",
//       content: (
//         <ul>
//           <li>BE, Pune University</li>
//           <li>Diploma, MSBTE</li>
//         </ul>
//       ),
//     },
//     {
//       title: "certifications",
//       id: "certifications",
//       content: (
//         <ul>
//           <li>React.js Certification</li>
//           <li>JavaScript Mastery</li>
//         </ul>
//       ),
//     },
//     {
//       title: "experience",
//       id: "experience",
//       content: (
//         <ul>
//           <li>Frontend Developer at XYZ Company</li>
//           <li>Mobile Developer at ABC Company</li>
//         </ul>
//       ),
//     },
//   ];

//   const handleTabChange = (id) => {
//     setTab(id); // Simple tab state update
//   };

//   return (
//     <section className='text-white'>
//       <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
//         <Image src="/img/about-image.png" width={500} height={500} alt="About Image" />
//         <div>
//           <h2 className='text-4xl font-bold text-white mb-4 sm:mt-4'>
//             About Me
//           </h2>
//           <p className='text-base lg:text-lg'>
//             I am a Web and mobile developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React-Redux, Node.js, Express.js, React Native, Next.js, SQL, HTML, CSS, and other libraries. I am a quick learner and always looking to expand my knowledge and skill set. I am a team player and excited to work with others to create amazing applications.
//           </p>
//           <div className='flex flex-row mt-8'>
//             <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >
//               Skills
//             </TabButton>
//             <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >
//               Education
//             </TabButton>
//             <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"} >
//               Certifications
//             </TabButton>
//             <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"} >
//               Experience
//             </TabButton>
//           </div>

//           {/* Display the selected tab content */}
//           <div className='mt-8'>
//             {TAB_DATA.find((t) => t.id === tab)?.content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
