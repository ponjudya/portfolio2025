import { useRef } from "react";
import { delay, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaFigma, FaSketch } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

export default function SkillsSection() {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // For subtle floating circle movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]); // subtle movement

  const SKILLS = [
    {
      icon: <FaHtml5 className="text-teal-400" size={60} />,
      title: "HTML5",  
      items: ["Responsive Design", "Flexbox", "Grid", "Accessibility"],
    },
    {
      icon: <FaCss3Alt className="text-teal-400" size={60} />,
      title: "CSS3",  
      items: ["Responsive Design", "Flexbox", "Grid", "Accessibility"],
    },
    {
      icon: <FaJs className="text-teal-400" size={60} />,
      title: "JavaScript",
      items: ["ES6+", "DOM Manipulation", "Async", "Fetch API"],
    },
    {
      icon: <RiTailwindCssFill className="text-teal-400" size={60} />,
      title: "Tailwind CSS",
      items: ["ES6+", "DOM Manipulation", "Async", "Fetch API"],
    },
    {
      icon: <FaReact className="text-teal-400" size={60} />,
      title: "React.js",
      items: ["Components", "Hooks", "State Management", "API Integration"],
    },
    {
      icon: <FaFigma className="text-teal-400" size={60} />,
      title: "Figma",
      items: ["Components", "Hooks", "State Management", "API Integration"],
    },
    
  ];

  const TOOLS = [
    { icon: <FaFigma size={55} className="text-[#A259FF]" />, name: "Figma" },
    { icon: <FaSketch size={55} className="text-[#F7B500]" />, name: "Sketch" },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 relative overflow-hidden ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
    {/* Subtle Faded Floating Circles */}
    <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
    <div
        className={`absolute top-40 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl ${
        isDarkMode ? "bg-blue-500" : "bg-blue-400"
        }`}
        style={{ opacity: 0.05 }}
    />
    <div
        className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl ${
        isDarkMode ? "bg-purple-500" : "bg-purple-400"
        }`}
        style={{ opacity: 0.05 }}
    />
    </motion.div>


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
        >
            <motion.div
                variants={itemVariants}
                className={`text-sm uppercase tracking-widest ${
                    isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
            >
                Technical Expertise
            </motion.div>

            <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6"
            >
                Skills &
                <span className="text-teal-500 font-medium"> Technologies</span>
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className={`text-lg ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto font-light`}
            >
                I love building responsive, user-friendly web applications using modern front-end technologies. 
                By combining clean, maintainable code with intuitive, human-centered design, I create digital experiences 
                that are both functional and visually appealing.
            </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`p-8 rounded-2xl border shadow-sm transition-all duration-300 
                flex flex-col items-center text-center
                hover:shadow-2xl hover:scale-[1.03] hover:backdrop-blur-xl
                ${
                  isDarkMode
                    ? "bg-gray-900/40 border-gray-800 hover:bg-gray-900/20"
                    : "bg-white/40 border-gray-200 hover:bg-white/20"
                }`}
            >
              <motion.div variants={iconVariants} className="mb-4">
                {skill.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

              {/* <ul className="space-y-2 text-sm opacity-80">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul> */}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-16"
        >
            <motion.div variants={itemVariants} className="text-center mb-8">
                <h3 className="text-xl font-medium mb-4">Also Working With</h3>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3"
            >
                {TECH_STACK.map((tech, index) => (
                    <motion.span
                        key={tech}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                            isDarkMode 
                            ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                            : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
