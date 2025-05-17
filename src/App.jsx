import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Figma, GitBranch, Play, X } from 'lucide-react';
import { Link } from 'react-scroll';
import image from './assets/dhruv1.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [projectTab, setProjectTab] = useState('all');
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };
const filteredProjects = projects.filter((project) => {
    if (projectTab === 'all') return true;
    if (projectTab === 'react') return project.tech && project.tech.some(t => t.toLowerCase().includes('react'));
    if (projectTab === 'htmlcss') return project.tech && project.tech.some(t => ['html', 'css', 'javascript'].includes(t.toLowerCase()));
    if (projectTab === 'figma') return project.type === 'figma';
    if (projectTab === 'mern') return project.tech && ['react', 'node.js', 'express', 'mongodb'].every(t => project.tech.map(x => x.toLowerCase()).includes(t));
    if (projectTab === 'backend') return project.tech && (project.tech.some(t => t.toLowerCase().includes('node')) || project.docs);
    return true;
  });
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Figma Projects', to: 'figma-projects' },
    { name: 'Education', to: 'education' },
    { name: 'References', to: 'references' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-poppins text-primary dark:text-white"
          >
            <span className="text-accent">&lt;</span>
            Dhruv
            <span className="text-accent">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm Dhruv Sonagra
              <span className="block text-2xl md:text-3xl mt-4 text-gray-200">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Building scalable and user-friendly applications with modern technologies
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href="file:///C:/Users/dhruv/Downloads/resume1.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center"
              >
                <Download size={20} className="mr-2" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-4">
                I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies.
                My journey in web development started with a curiosity about how things work on the internet, and it has
                evolved into a professional pursuit of creating elegant, efficient, and user-friendly applications.
              </p>
              <p className="text-lg mb-4">
                My technical interests include:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Building scalable web applications</li>
                <li>Creating intuitive user interfaces</li>
                <li>Optimizing application performance</li>
                <li>Learning new technologies and frameworks</li>
              </ul>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical blog posts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <img
                src={image}
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
{/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Certificates
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg flex flex-col"
              >
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Award size={18} /> {cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Issuer:</span> {cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">{cert.date}</p>
                  <p className="mb-3">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full">{skill}</span>
                    ))}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-accent text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors text-center"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pr
      {/* My Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            My Projects
          </motion.h2>
          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button onClick={() => setProjectTab('all')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'all' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>All Projects</button>
            <button onClick={() => setProjectTab('react')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'react' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>React Projects</button>
            <button onClick={() => setProjectTab('htmlcss')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'htmlcss' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>HTML/CSS Projects</button>
            <button onClick={() => setProjectTab('figma')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'figma' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>Figma Projects</button>
            <button onClick={() => setProjectTab('mern')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'mern' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>MERN Projects</button>
            <button onClick={() => setProjectTab('backend')} className={`px-4 py-2 rounded-full font-medium ${projectTab === 'backend' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>Backend/API Projects</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech && project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tools && project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap space-x-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:underline"
                      >
                        <ExternalLink size={16} className="mr-1" /> Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:underline"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </a>
                    )}
                    {project.docs && (
                      <a
                        href={project.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:underline"
                      >
                        <Code size={16} className="mr-1" /> API Docs
                      </a>
                    )}
                    {project.link && project.type === 'figma' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:underline"
                      >
                        <Figma size={16} className="mr-1" /> View in Figma
                      </a>
                    )}
                    {project.videoId && (
                      <button
                        onClick={() => openVideo(project.videoId)}
                        className="flex items-center text-accent hover:underline"
                      >
                        <Play size={16} className="mr-1" /> Demo Video
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                  allow="autoplay"
                  className="w-full h-full"
                  frameBorder="0"
                ></iframe>
              </div>
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="figma-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Figma Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {figmaProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent hover:underline"
                    >
                      <Figma size={16} className="mr-1" /> View in Figma
                    </a>
                    {project.videoId && (
                      <button
                        onClick={() => openVideo(project.videoId)}
                        className="flex items-center text-accent hover:underline"
                      >
                        <Play size={16} className="mr-1" /> Demo Video
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skillLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Rai University, Ahmedabad</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">August 2024 – August 2028</p>
            <div className="mb-6">
              <span className="inline-block bg-accent text-white px-4 py-2 rounded-full">
                CGPA: 9.62 (First Semester)
              </span>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Subjects</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {keySubjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
                  >
                    {subject}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Additional Learning</h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">CodingGita (Advanced Full-Stack)</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive full-stack development program covering modern web technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            References
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Patel Neel Maheshbhai</h3>
              <p className="text-accent mb-4">CodingGita</p>
              <p className="text-gray-600 dark:text-gray-300">
                "Dhruv has shown exceptional skills in full-stack development and a remarkable ability to grasp complex concepts quickly. His dedication to learning and problem-solving abilities make him stand out."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Get In Touch
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center space-x-3">
                    <Mail className="text-accent" />
                    <span>dhruv.sonagra.cg@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-3">
                   
                  </p>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/dhruv2311-dot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/dhruv-sonagra-995144321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const certificates = [
  {
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740253761/sample-certificate.png",
    title: "Full Stack Web Development",
    issuer: "CodingGita",
    date: "April 2025",
    description: "Completed an advanced full-stack web development course covering React, Node.js, Express, and MongoDB.",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    link: "https://drive.google.com/file/d/your_certificate_id/view"
  },
  // Add more certificates as needed
];

const projects = [
  {
    title: 'Eventura',
    description: 'Event management platform with real-time updates and interactive features.',
    tech: ['React', 'Node.js', 'MongoDB', 'express'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943406/eventura_tuntzx.png",
    demo: 'https://eventura-23.netlify.app/',
    github: 'https://github.com/dhruv2311-dot/eventura-',
    docs: 'https://documenter.getpostman.com/view/39189509/2sAYX3s4Dc',
    videoId: '12ZT1sU_Z6EKmnUcxC1f6Leg-DSP0OT5z' // Replace with your actual Google Drive file ID
  },
  {
    title: 'Youtube',
    description: 'A dynamic YouTube clone featuring real-time video updates, interactive UI, and seamless streaming. Built with React and Node.js, it integrates a custom YouTube API for personalized content delivery. ',
    tech: ['React', 'Node.js','express'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740156747/Screenshot_2025-02-21_221308_uqsfq2.png",
    demo: 'https://youtube-api-lomc.vercel.app/',
    github: 'https://github.com/dhruv2311-dot/Youtube-API',
    videoId: '1FiO-1234567891' // Replace with your actual Google Drive file ID
  },
  {
    title: 'Spotify',
    description: 'A sleek Spotify clone built using React with a modular, component-based architecture. It offers seamless music playback, dynamic UI updates, and an interactive user experience. 🚀🎵',
    tech: ['React', 'javascript','Tailwindcss'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740156966/igvbvpgmgyzkbrthcdma.png",
    demo: 'https://spotify-react-component.vercel.app/',
    github: 'https://github.com/dhruv2311-dot/spotify-react-component',
    videoId: '1FiO-1234567892' // Replace with your actual Google Drive file ID
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A classic Tic Tac Toe game developed using React, featuring a responsive UI, smooth gameplay, and dynamic state management for an engaging experience. 🎮✨',
    tech: ['React', 'javascript','Tailwindcss'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740157368/gtsplesiovqz4emqthn2.png",
    demo: 'https://tic-tac-toe-sandy-two.vercel.app/',
    github: 'https://github.com/dhruv2311-dot/Tic-Tac-Toe',
    videoId: '1FiO-1234567893' // Replace with your actual Google Drive file ID
  },
  {
    title: 'Purple',
    description: 'E-commerce platform with modern UI and seamless shopping experience.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943602/bgrat7sxisqwumu4x1vn.png",
    demo: 'https://purple21.netlify.app/',
    github: 'https://github.com/dhruv2311-dot/PURPLE',
    videoId: '1FiO-1234567894' // Replace with your actual Google Drive file ID
  },
  {
    title: 'PharmEasy',
    description: 'Online pharmacy platform with medicine delivery system.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943561/y4vnpuulvuibf86l0dj9.png",
    demo: 'https://bespoke-blini-7c10e3.netlify.app/',
    github: 'https://github.com/dhruv2311-dot/pharmeasy',
    videoId: '1FiO-1234567895' // Replace with your actual Google Drive file ID
  },
  {
    title: 'HireAVilla',
    description: 'Property booking platform with advanced filtering and booking system.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943420/hireavilla_ag5gso.png",
    demo: 'https://hireavilla12.netlify.app/',
    github: 'https://github.com/dhruv2311-dot/HIREAVILLA',
    videoId: '1FiO-1234567896' // Replace with your actual Google Drive file ID
  },
  {
    title: 'Eventura (Figma)',
    description: 'A clean and modern dashboard interface design with white mode support.',
    tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
    image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943406/eventura_tuntzx.png',
    link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=382-557&t=vtIPVwzy8GVvCr3a-1',
    type: 'figma',
    videoId: '1FiO-1234567897'
  },
  {
    title: 'Furnishly (Figma)',
    description: 'Furnishly features a sleek and intuitive interface with a focus on user experience.',
    tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
    image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740253407/j0jnuta7tknmxkfrplka.jpg',
    link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=124-532&t=vtIPVwzy8GVvCr3a-1',
    type: 'figma',
    videoId: '1FiO-1234567898'
  },
  {
    title: 'CodingGita (Figma)',
    description: 'CodingGita is a well-structured and visually appealing website page design.',
    tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
    image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740253761/wfdtwsnrsexc4xkkumvw.png',
    link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=138-5416&t=vtIPVwzy8GVvCr3a-1',
    type: 'figma',
    videoId: '1FiO-1234567899'
  },
  // ...rest of your projects...

];


const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: <Code size={20} /> },
      { name: 'HTML5', icon: <Code size={20} /> },
      { name: 'CSS3', icon: <Code size={20} /> },
      { name: 'JavaScript', icon: <Code size={20} /> }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: <Code size={20} /> },
      { name: 'Express.js', icon: <Code size={20} /> }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', icon: <Database size={20} /> },
      { name: 'PostgreSQL', icon: <Database size={20} /> }
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <GitBranch size={20} /> },
      { name: 'Figma', icon: <Figma size={20} /> }
    ]
  }
];

const skillLevels = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Database Management', level: 85 },
  { name: 'Problem Solving', level: 90 }
];

const keySubjects = [
  'Data Structures',
  'Algorithms',
  'Web Development',
  'Database Systems',
  'System Design',
  'Problem Solving'
];

export default App;

// import { motion, AnimatePresence } from 'framer-motion';
// import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Figma, GitBranch } from 'lucide-react';
// import { Link } from 'react-scroll';
// import image from './assets/dhruv1.jpg';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const isDark = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDark);
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//     localStorage.setItem('darkMode', !darkMode);
//   };

//   const navItems = [
//     { name: 'Home', to: 'home' },
//     { name: 'About', to: 'about' },
//     { name: 'Projects', to: 'projects' },
//     { name: 'Skills', to: 'skills' },
//     { name: 'Figma Projects', to: 'figma-projects' },
//     { name: 'Education', to: 'education' },
//     { name: 'References', to: 'references' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm z-50 py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-bold font-poppins text-primary dark:text-white"
//           >
//             <span className="text-accent">&lt;</span>
//             Dhruv
//             <span className="text-accent">/&gt;</span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer hover:text-accent transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
//         <div className="container mx-auto px-4 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Hi, I'm Dhruv Sonagra
//               <span className="block text-2xl md:text-3xl mt-4 text-gray-200">
//                 Full-Stack Developer
//               </span>
//             </h1>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Building scalable and user-friendly applications with modern technologies
//             </p>
//             <div className="flex justify-center space-x-4">
//               <motion.a
//                 href="#projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
//               >
//                 View Projects
//               </motion.a>
//               <motion.a
//                 href="https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739946687/resume1_nge8cz.pdf"
//                 download
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center"
//               >
//                 <Download size={20} className="mr-2" />
//                 Resume
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="md:w-1/2"
//             >
//               <h2 className="text-3xl font-bold mb-6">About Me</h2>
//               <p className="text-lg mb-4">
//                 I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies.
//                 My journey in web development started with a curiosity about how things work on the internet, and it has
//                 evolved into a professional pursuit of creating elegant, efficient, and user-friendly applications.
//               </p>
//               <p className="text-lg mb-4">
//                 My technical interests include:
//               </p>
//               <ul className="list-disc list-inside mb-4">
//                 <li>Building scalable web applications</li>
//                 <li>Creating intuitive user interfaces</li>
//                 <li>Optimizing application performance</li>
//                 <li>Learning new technologies and frameworks</li>
//               </ul>
//               <p className="text-lg">
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
//                 or sharing my knowledge through technical blog posts.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.6 }}
//               className="md:w-1/2"
//             >
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="rounded-lg shadow-xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Featured Projects
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card-hover rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-accent hover:underline"
//                     >
//                       <ExternalLink size={16} className="mr-1" /> Demo
//                     </a>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-accent hover:underline"
//                     >
//                       <Github size={16} className="mr-1" /> Code
//                     </a>
//                     {project.docs && (
//                       <a
//                         href={project.docs}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-accent hover:underline"
//                       >
//                         <Code size={16} className="mr-1" /> API Docs
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section id="figma-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Figma Projects
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {figmaProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card-hover rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tools.map((tool, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
//                       >
//                         {tool}
//                       </span>
//                     ))}
//                   </div>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-accent hover:underline"
//                   >
//                     <Figma size={16} className="mr-1" /> View in Figma
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Skills & Expertise
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {skillCategories.map((category, index) => (
//                 <div key={index} className="space-y-4">
//                   <h3 className="text-xl font-semibold">{category.name}</h3>
//                   <div className="flex flex-wrap gap-4">
//                     {category.skills.map((skill, skillIndex) => (
//                       <motion.div
//                         key={skillIndex}
//                         whileHover={{ scale: 1.1 }}
//                         className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"
//                       >
//                         {skill.icon}
//                         <span>{skill.name}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               {skillLevels.map((skill, index) => (
//                 <div key={index} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="font-medium">{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <motion.div
//                     className="h-2 bg-gray-200 rounded-full overflow-hidden"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "100%" }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.div
//                       className="h-full bg-accent"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1, delay: 0.2 }}
//                     />
//                   </motion.div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Education
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
//           >
//             <h3 className="text-2xl font-bold mb-4">Rai University, Ahmedabad</h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">August 2024 – August 2028</p>
//             <div className="mb-6">
//               <span className="inline-block bg-accent text-white px-4 py-2 rounded-full">
//                 CGPA: 9.62 (First Semester)
//               </span>
//             </div>
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold mb-3">Key Subjects</h4>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {keySubjects.map((subject, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
//                   >
//                     {subject}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-3">Additional Learning</h4>
//               <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                 <p className="font-medium">CodingGita (Advanced Full-Stack)</p>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Comprehensive full-stack development program covering modern web technologies
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* References Section */}
//       <section id="references" className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             References
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//             className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
//           >
//             <div className="text-center">
//               <h3 className="text-2xl font-bold mb-2">Patel Neel Maheshbhai</h3>
//               <p className="text-accent mb-4">CodingGita</p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 "Dhruv has shown exceptional skills in full-stack development and a remarkable ability to grasp complex concepts quickly. His dedication to learning and problem-solving abilities make him stand out."
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Get In Touch
//           </motion.h2>
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
//                 <div className="space-y-4">
//                   <p className="flex items-center space-x-3">
//                     <Mail className="text-accent" />
//                     <span>dhruv.sonagra.cg@gmail.com</span>
//                   </p>
//                   <p className="flex items-center space-x-3">
                   
//                   </p>
//                 </div>
//                 <div className="flex space-x-4">
//                   <motion.a
//                     href="https://github.com/dhruv2311-dot/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
//                   >
//                     <Github size={24} />
//                   </motion.a>
//                   <motion.a
//                     href="https://www.linkedin.com/in/dhruv-sonagra-995144321/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
//                   >
//                     <Linkedin size={24} />
//                   </motion.a>
//                 </div>
//               </motion.div>
//               <motion.form
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//                 onSubmit={(e) => e.preventDefault()}
//               >
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-600"
//                     required
//                   ></textarea>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
//                   type="submit"
//                 >
//                   Send Message
//                 </motion.button>
//               </motion.form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const projects = [
//   {
//     title: 'Eventura',
//     description: 'Event management platform with real-time updates and interactive features.',
//     tech: ['React', 'Node.js', 'MongoDB', 'express'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943406/eventura_tuntzx.png",
//     demo: 'https://eventura-23.netlify.app/',
//     github: 'https://github.com/dhruv2311-dot/eventura-',
//     docs: 'https://documenter.getpostman.com/view/39189509/2sAYX3s4Dc'
//   },
//   {
//     title: 'Youtube',
//     description: 'A dynamic YouTube clone featuring real-time video updates, interactive UI, and seamless streaming. Built with React and Node.js, it integrates a custom YouTube API for personalized content delivery. ',
//     tech: ['React', 'Node.js','express'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740156747/Screenshot_2025-02-21_221308_uqsfq2.png",
//     demo: 'https://youtube-api-lomc.vercel.app/',
//     github: 'https://github.com/dhruv2311-dot/Youtube-API',
    
//   },
//   {
//     title: 'Spotify',
//     description: 'A sleek Spotify clone built using React with a modular, component-based architecture. It offers seamless music playback, dynamic UI updates, and an interactive user experience. 🚀🎵',
//     tech: ['React', 'javascript','Tailwindcss'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740156966/igvbvpgmgyzkbrthcdma.png",
//     demo: 'https://spotify-react-component.vercel.app/',
//     github: 'https://github.com/dhruv2311-dot/spotify-react-component',
    
//   },
//   {
//     title: 'Tic-Tac-Toe',
//     description: 'A classic Tic Tac Toe game developed using React, featuring a responsive UI, smooth gameplay, and dynamic state management for an engaging experience. 🎮✨',
//     tech: ['React', 'javascript','Tailwindcss'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740157368/gtsplesiovqz4emqthn2.png",
//     demo: 'https://tic-tac-toe-sandy-two.vercel.app/',
//     github: 'https://github.com/dhruv2311-dot/Tic-Tac-Toe',
    
//   },
//   {
//     title: 'Purple Clone',
//     description: 'E-commerce platform with modern UI and seamless shopping experience.',
//     tech: ['HTML', 'CSS', 'JAVASCRIPT'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943602/bgrat7sxisqwumu4x1vn.png",
//     demo: 'https://purple21.netlify.app/',
//     github: 'https://github.com/dhruv2311-dot/PURPLE'
//   },
//   {
//     title: 'PharmEasy Clone',
//     description: 'Online pharmacy platform with medicine delivery system.',
//     tech: ['HTML', 'CSS', 'JAVASCRIPT'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943561/y4vnpuulvuibf86l0dj9.png",
//     demo: 'https://bespoke-blini-7c10e3.netlify.app/',
//     github: 'https://github.com/dhruv2311-dot/pharmeasy'
//   },
//   {
//     title: 'HireAVilla Clone',
//     description: 'Property booking platform with advanced filtering and booking system.',
//     tech: ['HTML', 'CSS', 'JAVASCRIPT'],
//     image: "https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943420/hireavilla_ag5gso.png",
//     demo: 'https://hireavilla12.netlify.app/',
//     github: 'https://github.com/dhruv2311-dot/HIREAVILLA'
//   }
// ];
// const figmaProjects = [
//   {
//     title: 'Eventura',
//     description: 'A clean and modern dashboard interface design with white mode support.',
//     tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
//     image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1739943406/eventura_tuntzx.png',
//     link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=382-557&t=vtIPVwzy8GVvCr3a-1'
//   },
//   {
//     title: 'Furnishly',
//     description: 'Furnishly features a sleek and intuitive interface with a focus on user experience. The design showcases high-quality furniture with well-organized categories, smooth navigation, and a visually appealing layout. With a minimalist approach, it ensures a seamless shopping experience, incorporating detailed product views, price filters, and responsive elements for accessibility across devices. The elegant typography and balanced white space enhance readability, making browsing effortless and engaging.',
//     tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
//     image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740253407/j0jnuta7tknmxkfrplka.jpg',
//     link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=124-532&t=vtIPVwzy8GVvCr3a-1'
//   },
//   {
//     title: 'codinggita',
//     description: 'CodingGita is a well-structured and visually appealing website page design focused on delivering a seamless user experience. With a modern and intuitive layout, it ensures easy navigation and accessibility. The design incorporates a balanced combination of typography, white space, and interactive elements, making it both engaging and functional. Whether for learning resources, coding tutorials, or tech-related content, CodingGita design enhances readability and usability, creating an efficient and smooth browsing experience.',
//     tools: ['Figma', 'Auto Layout', 'Components', 'Variants'],
//     image: 'https://res.cloudinary.com/dtkzxbcjx/image/upload/v1740253761/wfdtwsnrsexc4xkkumvw.png',
//     link: 'https://www.figma.com/design/VTpYgGhHaIuRfob33itg2p/codinggita?node-id=138-5416&t=vtIPVwzy8GVvCr3a-1'
//   },
 
// ];
// const skillCategories = [
//   {
//     name: 'Frontend',
//     skills: [
//       { name: 'React', icon: <Code size={20} /> },
//       { name: 'HTML5', icon: <Code size={20} /> },
//       { name: 'CSS3', icon: <Code size={20} /> },
//       { name: 'JavaScript', icon: <Code size={20} /> }
//     ]
//   },
//   {
//     name: 'Backend',
//     skills: [
//       { name: 'Node.js', icon: <Code size={20} /> },
//       { name: 'Express.js', icon: <Code size={20} /> }
//     ]
//   },
//   {
//     name: 'Database',
//     skills: [
//       { name: 'MongoDB', icon: <Database size={20} /> },
//       { name: 'PostgreSQL', icon: <Database size={20} /> }
//     ]
//   },
//   {
//     name: 'Tools & Others',
//     skills: [
//       { name: 'Git', icon: <GitBranch size={20} /> },
//       { name: 'Figma', icon: <Figma size={20} /> }
//     ]
//   }
// ];

// const skillLevels = [
//   { name: 'Frontend Development', level: 90 },
//   { name: 'Backend Development', level: 85 },
//   { name: 'UI/UX Design', level: 80 },
//   { name: 'Database Management', level: 85 },
//   { name: 'Problem Solving', level: 90 }
// ];

// const keySubjects = [
//   'Data Structures',
//   'Algorithms',
//   'Web Development',
//   'Database Systems',
//   'System Design',
//   'Problem Solving'
// ];

// export default App;