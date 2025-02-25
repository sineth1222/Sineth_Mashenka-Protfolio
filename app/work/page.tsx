"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Discover know more about our project and services by visiting our Doc Plant Website. we will provide a solution for your disease plants.",
    stack: [{ name: "React.js"}, { name: "Tailwind.css"}],
    image: '/assets/work/thumbb1.png',
    live: "https://doc-plant-website.vercel.app/",
    github: "https://github.com/sineth1222/Doc_Plant_Website",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Discover know more about our project and services by visiting our Sriseth Website. we will provide a astrology for your busy life style.",
    stack: [{ name: "Html 5"}, { name: "Css 3"}, { name: "Javascript"}],
    image: '/assets/work/thumbb2.png',
    live: "https://sriseth-website.vercel.app/",
    github: "https://github.com/sineth1222/sriseth_website",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Discover know more about our project and services by visiting our Student Management System.",
    stack: [{ name: "Php"},{name:"Laravel"},{name:"Html 5"}, {name:"Css 3"}],
    image: '/assets/work/thumbb3.png',
    live: "https://github.com/sineth1222/Student_Management_System_Laravel",
    github: "https://github.com/sineth1222/Student_Management_System_Laravel",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description: "Discover know more about our project and services by visiting our Billing System.",
    stack: [{ name: "Python"},{name:"Tkinter"}],
    image: '/assets/work/thumbb4.png',
    live: "https://www.linkedin.com/in/sineth-mashenka-113122241/recent-activity/all/",
    github: "https://github.com/sineth1222/Billing-System",
  },
  {
    num: "05",
    category: "fullstack",
    title: "project 5",
    description: "MCQ Master is a relatable system for both student and teachers.Student can choose a subject they want and ask mcq questions related to that subject, the answer are also provided and techers can add questions related to the subject to this application.",
    stack: [{ name: "Python"},{name:"Tkinter"}],
    image: '/assets/work/thumbb5.png',
    live: "https://www.linkedin.com/in/sineth-mashenka-113122241/recent-activity/all/",
    github: "https://github.com/sineth1222/Smart-MCQ-Assesment-System/tree/main",
  },
];

interface SwiperEvent {
  activeIndex: number;
}

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperEvent) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"} }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">{project.stack.map((item, index) => {
                return <li key={index} className="text-xl text-accent">{item.name}
                {/* remove last coma */}
                {index !== project.stack.length - 1 && ","}</li>;
              })}</ul>
              {/* border */}
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} alt={""} fill className="object-cover"/>
                    </div>
                  </div>
                </SwiperSlide>;
              })}

              {/* slide button */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles={""}              />
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
