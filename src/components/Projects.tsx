import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Network } from 'lucide-react';

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'UrbanOasis-website',
      subtitle: 'Booking Rental Properties',
      description:
        'Urbanoasis is a feature-rich web application for listing and booking rental properties, inspired by Airbnb. Built using Node.js, Express, MongoDB, and EJS, it allows users to search for properties, filter categories, book stays, and manage listings seamlessly.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'REST APIs'],
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-600',
      github: 'https://github.com/sraushansungh7/UrbanOasis-website',
      demo: ''
    },
    {
      title: 'url_shortner',
      subtitle: 'URL Shortener',
      description:
        'A lightweight and efficient URL Shortener web application built using Node.js, Express, and MongoDB. It converts long URLs into short, shareable links and includes redirect handling and click analytics.',
      technologies: ['Node.js', 'Supabase', 'REST APIs'],
      icon: Network,
      gradient: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/sraushansungh7/url_shotner',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon size={40} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-semibold border border-slate-200 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
                      >
                        <Github size={20} />
                        Code
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* FIXED OVERLAY (does NOT block clicks) */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
