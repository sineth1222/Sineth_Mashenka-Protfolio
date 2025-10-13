"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const about = {
  title: "About me",
  description: "I am an extremely hardworking and persisting ambitious individual with a great passion for the Software Engineer industry. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "G.B.Sineth Mashenka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 705089955",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "sinethmashenka1222@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Srilankan",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Sineth Mashenka",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ]
};


const experience ={
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Showcases my professional journey, including internships, freelance projects, and full-time roles. It highlights my responsibilities, achievements, and contributions in various roles, demonstrating my expertise and growth in the industry.",
  items: [
    {
      company: "Gravity Plus Pvt Ltd.",
      position: "Back-End Developer Intern",
      duration: "2025 - Present",
    },
    {
      company: "Silicon Radon Network Pvt Ltd.",
      position: "Front-End Developer Intern",
      duration: "summer 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Jounior Web Developer",
      duration: "2022 - 2023",
    },
    /*{
      company: "PraDha Solution Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Jounior Web Developer",
      duration: "2023 - 2024",
    },*/
  ]
};

const education ={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Covers my academic background, including degrees, certifications, and relevant coursework. It reflects my technical foundation, problem-solving abilities, and theoretical knowledge that supports my professional career.",
  items: [
    {
      institution: "SLTC Research University ",
      degree: "BSc (Hons) in Software Engineering",
      duration: "2021 - Present",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2020 - 2021",
    },
    {
      institution: "Great Learning Academy.",
      degree: "UI/UX for Beginners course ",
      duration: "2019 - 2020",
    },
    {
      institution: "Great Learning Academy.",
      degree: "React JS Tutorial course",
      duration: "2019 - 2020",
    },
    {
      institution: "Great Learning Academy.",
      degree: "Front End Development",
      duration: "2019 - 2020",
    },
    {
      institution: "H/Ruhunu Vijayaba National Collage",
      degree: "O/L & A/L",
      duration: "2009 - 2019",
    },
    
  ]
};

const skills = {
  title: "My skills",
  description: "Lists my technical and soft skills, such as programming languages, frameworks, design tools, problem-solving, and communication. This section provides insight into my capabilities and strengths in my field.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "nest.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]

};


const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }} className="min-h-[80vh] flex items-center justify-center py-1 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.info.map((item, index) => {
                          return (
                            <li key={index}
                            className="flex flex-wrap items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-xl">{item.fieldValue}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
