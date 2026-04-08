import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "DOM Manipulation"
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture"
      ],
    },
    {
      category: "Networking",
      skills: [
        "CCNA",
        "TCP/IP",
        "Routing & Switching",
        "Network Security",
        "Subnetting",
        "Troubleshooting"
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Vercel",
        "Render",
        "MongoDB Atlas"
      ],
    },
    {
      category: "Core Skills",
      skills: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "Debugging",
        "API Integration",
        "Full-Stack Development"
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + categoryIndex * 0.1,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-blue-600 pb-2">
                {category.category}
              </h3>

              <ul className="list-disc list-inside space-y-2 text-slate-700">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}