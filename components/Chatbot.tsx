"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FaComment, FaTimes } from "react-icons/fa";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image';

// Define portfolio data (from your previous files)
const about = {
  title: "About me",
  description: "I am an extremely hardworking and persisting ambitious individual with a great passion for the Software Engineer industry.",
  info: [
    { fieldName: "Name", fieldValue: "G.B.Sineth Mashenka" },
    { fieldName: "Phone", fieldValue: "(+94) 705089955" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "Email", fieldValue: "sinethmashenka1222@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Srilankan" },
    { fieldName: "Linkedin", fieldValue: "Sineth Mashenka" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ],
};

const experience = {
  title: "My experience",
  description: "Showcases my professional journey, including internships, freelance projects, and full-time roles.",
  items: [
    { company: "Gravity Plus Pvt Ltd.", position: "Back-End Developer Intern", duration: "2025 - Present" },
    { company: "Silicon Radon Network Pvt Ltd.", position: "Front-End Developer Intern", duration: "summer 2024" },
    { company: "PraDha Solution Startup", position: "Freelance Web Developer", duration: "2023 - 2024" },
    { company: "PraDha Solution Startup", position: "Jounior Web Developer", duration: "2022 - 2023" },
  ],
};

const education = {
  title: "My education",
  description: "Covers my academic background, including degrees, certifications, and relevant coursework.",
  items: [
    { institution: "SLTC Research University", degree: "BSc (Hons) in Software Engineering", duration: "2021 - Present" },
    { institution: "Tech Institute", degree: "Certified Web Developer", duration: "2020 - 2021" },
    { institution: "Great Learning Academy.", degree: "UI/UX for Beginners course", duration: "2019 - 2020" },
    { institution: "Great Learning Academy.", degree: "React JS Tutorial course", duration: "2019 - 2020" },
    { institution: "Great Learning Academy.", degree: "Front End Development", duration: "2019 - 2020" },
    { institution: "H/Ruhunu Vijayaba National Collage", degree: "O/L & A/L", duration: "2009 - 2019" },
  ],
};

const skills = {
  title: "My skills",
  description: "Lists my technical and soft skills, such as programming languages, frameworks, design tools, problem-solving, and communication.",
  skillList: [
    { name: "html 5" },
    { name: "css 3" },
    { name: "tailwindcss" },
    { name: "javascript" },
    { name: "react.js" },
    { name: "nest.js" },
    { name: "node.js" },
    { name: "figma" },
  ],
};

const services = [
  { title: "Web Development", description: "Building and maintaining websites using modern technologies to ensure seamless performance, responsiveness, and user experience." },
  { title: "UI/UX Design", description: "Creating visually appealing and user-friendly designs that enhance interaction, usability, and overall experience." },
  { title: "Mobile App Development", description: "Developing high-performing mobile applications for Android and iOS, ensuring functionality, security, and smooth user experience." },
  { title: "Logo Design", description: "Designing unique and memorable logos that reflect a brand’s identity, enhancing recognition and credibility user experience." },
];

const projects = [
  { title: "Rentzy - Rental Service Platform", description: "Introducing Rentzy, your one-stop digital platform for all things rental!" },
  { title: "News Paper", description: "A dynamic Sri Lankan news platform with an AI-powered chatbot." },
  { title: "PraDha Family Mart Billing POS System", description: "A comprehensive solution streamlining retail operations." },
  { title: "project 1", description: "Doc Plant Website for plant disease solutions." },
  { title: "project 2", description: "Sriseth Website for astrology services." },
  { title: "project 3", description: "Student Management System." },
  { title: "project 4", description: "Billing System." },
  { title: "project 5", description: "MCQ Master for students and teachers." },
];

const contactInfo = {
  phone: "(+94) 705 089 955",
  email: "sinethmashenka1222@gmail.com",
  address: "38/B kudawella central nakulugamuwa srilanka",
};

// Message type
type Message = {
  text: string;
  isUser: boolean;
};

// Function to generate bot responses
const generateResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("name") || lowerMessage.includes("who are you")) {
    return `Hi! I'm Sineth Mashenka, a passionate Software Engineer. Nice to chat with you! 😊`;
  }
  if (lowerMessage.includes("what do you do") || lowerMessage.includes("profession") || lowerMessage.includes("job")) {
    return `I'm a Software Engineer specializing in web development, UI/UX design, mobile apps, and more. I excel at crafting elegant digital experiences. Want to know about specific services or projects? 🚀`;
  }
  if (lowerMessage.includes("education") || lowerMessage.includes("qualifications") || lowerMessage.includes("degree")) {
    const eduList = education.items.map(item => `${item.degree} from ${item.institution} (${item.duration})`).join("\n");
    return `Here's my education background:\n${education.description}\n\n${eduList}`;
  }
  if (lowerMessage.includes("experience") || lowerMessage.includes("work history")) {
    const expList = experience.items.map(item => `${item.position} at ${item.company} (${item.duration})`).join("\n");
    return `My professional experience includes:\n${experience.description}\n\n${expList}`;
  }
  if (lowerMessage.includes("skills")) {
    const skillList = skills.skillList.map(skill => skill.name).join(", ");
    return `I have skills in: ${skillList}. ${skills.description}`;
  }
  if (lowerMessage.includes("services") || lowerMessage.includes("offer")) {
    const serviceList = services.map(service => `${service.title}: ${service.description}`).join("\n\n");
    return `I offer the following services:\n\n${serviceList}`;
  }
  if (lowerMessage.includes("projects") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    const projectList = projects.map(project => `${project.title}: ${project.description}`).join("\n\n");
    return `Here are some of my projects:\n\n${projectList}\n\nCheck out my work page for more details!`;
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("reach you") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    return `You can reach me at:\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}\nAddress: ${contactInfo.address}\nFeel free to drop a message via the contact form too! 📧`;
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return `Hey there! I'm Sineth Mashenka. How can I help you today? Ask me about my work, education, or anything else! 😄`;
  }
  return `I'm not sure about that one. Could you ask about my name, education, experience, skills, services, projects, or contact info? I'd love to chat more! 🤔`;
};

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Sineth Mashenka, your friendly chatbot. Ask me anything about myself, my work, or services! 😊", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    if (isChatOpen) {
      setMessages([{ text: "Hello! I'm Sineth Mashenka, your friendly chatbot. Ask me anything about myself, my work, or services! 😊", isUser: false }]);
      setInput("");
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    const response = generateResponse(input);
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      {/* Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-accent text-primary rounded-full hover:bg-accent-hover transition-all duration-300 transform hover:scale-110"
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/*<Image
          src="/assets/chatbot2.png"
          alt="Chatbot logo"
          width={180}
          height={180}
          className="w-26 sm:w-36 rounded-full"
        />*/}
        {isChatOpen ? <FaTimes size={20} /> : <FaComment size={20} />}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: isChatOpen ? 0 : "100%",
          opacity: isChatOpen ? 1 : 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed bottom-16 right-4 z-50 w-[90%] max-w-[400px] sm:w-[400px] h-[60vh] sm:h-[70vh] bg-[#27272c] rounded-xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-accent text-primary">
            <h2 className="text-lg sm:text-xl font-bold">Chat with Sineth Mashenka</h2>
            <Button
              variant="primary"
              size="lg"
              onClick={toggleChat}
              className="text-primary hover:text-white"
              aria-label="Close chat"
            >
              <FaTimes size={16} />
            </Button>
          </div>

          {/* Chat History */}
          <ScrollArea ref={chatContainerRef} className="flex-1 p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"} mb-4`}
              >
                <div className={`flex items-start gap-3 ${msg.isUser ? "flex-row-reverse" : ""}`}>
                  <Avatar>
                    <AvatarFallback>{msg.isUser ? "You" : "SM"}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`p-3 rounded-lg text-sm sm:text-base max-w-[80%] ${
                      msg.isUser ? "bg-accent text-primary" : "bg-white/10 text-white"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center p-4 border-t border-white/20">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 bg-white/10 text-white border-none focus:ring-accent text-sm sm:text-base"
              aria-label="Chat input"
            />
            <Button type="submit" size="lg" className="ml-2" aria-label="Send message">
              <FaComment size={16} />
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Chatbot;