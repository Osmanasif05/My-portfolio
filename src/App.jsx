import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Code, 
  Settings, 
  Zap, 
  Menu, 
  X, 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Terminal,
  Database,
  PenTool,
  Activity,
  FileText
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  // Data: Experience
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "TMU Velocity",
      location: "Toronto, ON",
      date: "Jul 2025 – Present",
      description: [
        "Collaborate with the software team to develop perception algorithms for a high-speed autonomous race vehicle, processing real-time LiDAR data to implement SLAM and improve multi-sensor fusion performance using Python and ROS 2.",
        "Leverage Gazebo and RViz to design, validate, and iterate on a robust sim-to-real workflow, enabling high-fidelity testing and verification of perception algorithms prior to deployment on the physical race vehicle."
      ],
      icon: <Code className="text-cyan-400" />
    },
    {
      id: 2,
      role: "Mechanical Designer",
      company: "TMU Chem-E-Car",
      location: "Toronto, ON",
      date: "Aug 2025 – Present",
      description: [
        "Collaborate with the mechanical team to design the vehicle chassis in SolidWorks, conducting load analysis to ensure structural integrity and optimal component placement for integrated electrical and chemical subsystems.",
        "Designed a gearbox-based drivetrain to optimize power transmission from motors, implementing shaft–bearing assemblies to transmit torque while improving vibration support and mechanical reliability."
      ],
      icon: <Settings className="text-cyan-400" />
    },
    {
      id: 3,
      role: "Mechatronics Design Intern",
      company: "MiON Science",
      location: "Remote",
      date: "Sep 2025 – Dec 2025",
      description: [
        "Performed electronic component selection and trade-off analysis for a mechatronic prototype, collaborating to refine mechanical design decisions based on power requirements, communication interfaces, cost, and manufacturability.",
        "Developed detailed wiring diagrams and contributed to ESP32 firmware setup, configuring Bluetooth and USART-based communication for reliable system-level integration."
      ],
      icon: <Cpu className="text-cyan-400" />
    },
    {
      id: 4,
      role: "Undergraduate Assistant",
      company: "ELIXIR Lab",
      location: "Toronto, ON",
      date: "Aug 2025 – Aug 2025",
      description: [
        "Calibrated and synchronized a dual-camera vision system in ROS 2 using AprilTags, aligning camera coordinate frames with the robotic arm and configuring a unified perception pipeline to ensure consistent operation during arm motion.",
        "Engineered a new camera mounting clamp in SolidWorks to resolve slippage and vibration issues, ensuring a high-friction fit required for precise base camera tracking during rapid arm rotation."
      ],
      icon: <Activity className="text-cyan-400" />
    }
  ];

  // Data: Ongoing Projects
  const ongoingProjects = [
    {
      id: "ongoing-1",
      title: "Embedded Vibration-Based Condition Monitoring System",
      tech: ["Embedded Systems", "Signal Processing", "ML Models (CNN/LSTM)", "MEMS"],
      status: "Active Development",
      description: [
        "Designing an embedded data acquisition system using a MEMS accelerometer and MCU to stream real-time vibration data to a PC.",
        "Developing a signal processing pipeline for feature extraction and frequency-domain analysis of vibration signals.",
        "Evaluating and comparing baseline ML models and neural architectures (MLP, 1D CNN, LSTM) for vibration-based fault classification."
      ]
    },
    {
      id: "ongoing-2",
      title: "Spider Robot Prototype",
      tech: ["Robotics", "Kinematics", "CAD", "Simulation"],
      status: "Research Phase",
      description: [
        "Currently exploring inverse and forward kinematics for CAD design preparation.",
        "Exploring robotics simulations to validate mechanical concepts and control strategies for the prototype."
      ]
    }
  ];

  // Data: Projects
  const projects = [
    {
      id: 1,
      title: "3-DOF Mobile Manipulator",
      tech: ["SolidWorks", "DFM/DFA", "3D Printing", "ESP32", "C/C++"],
      date: "Sep 2025 – Dec 2025",
      details: [
        "Designed and manufactured a 3-DOF robotic arm mounted on a mecanum-wheel mobile base, enabling autonomous grasping, onboard storage, and controlled release of blocks through a custom mechanical storage mechanism.",
        "Led end-to-end mechanical CAD and DFM-driven fabrication in SolidWorks, producing manufacturing-ready drawings and optimizing geometry for single-print assemblies, minimal fasteners, modular part replacement, and rapid design iteration."
      ],
      category: "Robotics"
    },
    {
      id: 2,
      title: "Automated Bike Lock System",
      tech: ["Python", "OpenCV", "C/C++", "Arduino", "SolidWorks", "3D Printing"],
      date: "Sep 2024 – Dec 2024",
      details: [
        "In a four-person team, developed a dual-authentication bike lock system integrating keypad override and a facial recognition pipeline using Python, OpenCV, and MediaPipe, achieving 90%+ recognition accuracy in real-world testing.",
        "Designed and 3D printed custom housing in SolidWorks, integrating mechanical constraints for electronics, and developed Arduino firmware (C/C++) to control a servo actuator, achieving sub-1-second unlock response following user authentication."
      ],
      category: "Embedded/CV"
    },
    {
      id: 3,
      title: "Autonomous Line-Following Robot",
      tech: ["C/C++", "AVR Assembly", "PWM", "IR Sensors"],
      date: "Sep 2025 – Present",
      details: [
        "Developed an autonomous robot car capable of line-following and maze navigation using IR reflectance sensors, PWM motor control, and decision-making algorithms. Programmed the system in C, C++, and AVR Assembly, implementing low-level logic through direct register manipulation for real-time timing, I/O operations, and interrupts.",
        "Designed embedded control routines for speed regulation, smooth turning, branch detection, and path-resolution logic, supported by systematic testing and calibration across multiple track layouts."
      ],
      category: "Embedded"
    },
    {
      id: 4,
      title: "Ball Sorting System",
      tech: ["SolidWorks", "Tolerance Analysis", "DFM/DFA"],
      date: "Jan 2025 – Apr 2025",
      details: [
        "Designed a manually operated mechanical sorting system to separate balls, incorporating a parallel four-bar linkage for controlled motion and a geared rotating base for precise positioning, supported by manufacturing drawings for repeatable assembly.",
        "Designed a three-fingered, elastic-assisted claw and applied DFM/DFA principles in SolidWorks to reduce part count, simplify assembly, and maintain a critical ±0.5 mm tolerance across interfaces."
      ],
      category: "Mechanical"
    },
    {
      id: 5,
      title: "2-DOF Gimbal Camera Mount",
      tech: ["SolidWorks", "Mechanical Design", "3D Printing", "Parametric Design"],
      date: "Jul 2025 – Aug 2025",
      details: [
        "Refined a 2-axis gimbal camera mount for an autonomous rover over multiple design cycles in SolidWorks, achieving a 20% reduction in part count to simplify assembly and a 15% decrease in mass to reduce payload.",
        "Engineered a versatile clamping mechanism with a sliding shaft system to enhance modularity, allowing the mount to be securely fastened across various frame tubes (20mm-30mm diameter).",
        "Utilized advanced features like interference detection and parametric design to ensure the model was manufacturable and precise for controlled pitch and yaw motion."
      ],
      category: "CAD Design"
    },
    {
      id: 6,
      title: "Engineering Design Solution",
      tech: ["SolidWorks", "Human Factors", "Documentation"],
      date: "Sep 2024 – Dec 2024",
      details: [
        "Designed a human-centered mechanical system for a children’s assistive transport device in SolidWorks, converting accessibility-driven user needs into ergonomic, safety, and usability-focused design features while developing detailed system drawings.",
        "Developed formal engineering documentation (PRS, SKB, PDS) and applied subsystem decomposition, subsystem matrices, and design choice matrices to compare design alternatives, manage trade-offs, and support design requirements."
      ],
      category: "Design"
    }
  ];

  // Data: Skills
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5 mb-1 text-cyan-400" />,
      skills: ["C/C++", "Python", "MATLAB", "Assembly (AVR)"]
    },
    {
      title: "Frameworks & Libs",
      icon: <Database className="w-5 h-5 mb-1 text-purple-400" />,
      skills: ["ROS 2", "OpenCV", "MediaPipe", "Arduino/ESP32"]
    },
    {
      title: "Engineering Tools",
      icon: <PenTool className="w-5 h-5 mb-1 text-amber-400" />,
      skills: ["SolidWorks", "ANSYS", "Gazebo", "RViz", "Simulink", "Git", "VS Code"]
    },
    {
      title: "Electrical & Embedded",
      icon: <Zap className="w-5 h-5 mb-1 text-yellow-400" />,
      skills: ["PWM & H-Bridge", "Sensor Interfacing", "Power Electronics", "Actuators"]
    },
    {
      title: "Manufacturing",
      icon: <Settings className="w-5 h-5 mb-1 text-slate-400" />,
      skills: ["GD&T", "DFM/DFA", "3D Printing", "Laser Cutting", "Metrology"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-mono text-white tracking-tighter group">
            <span className="text-cyan-400">&lt;</span>
            OsmanAsif
            <span className="text-cyan-400">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300 hover:text-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono tracking-widest uppercase animate-fade-in-up">
            System Online • Ready to Deploy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Mechatronics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Bridging the gap between mechanical systems, electronics, and intelligent software.
            <span className="text-slate-300 block mt-2">
              Specializing in robust mechanical design, DFM-driven manufacturing, and the seamless integration of hardware with intelligent software.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </a>
            
            {/* Resume Button */}
            <a 
              href="/MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30 font-medium transition-all flex items-center gap-2"
            >
              <FileText size={18} /> Resume
            </a>

            <a 
              href="https://www.linkedin.com/in/osman-asif-a80471346/details/projects/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3 rounded border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 font-medium transition-all flex items-center gap-2"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a 
              href="https://github.com/Osmanasif05" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3 rounded border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 font-medium transition-all flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">01. About Me</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Hello! I'm <span className="text-cyan-400 font-semibold">Osman Asif</span>, a passionate Mechatronics Engineering student driven by the challenge of creating integrated systems that interact with the physical world.
              </p>
              <p>
                My expertise lies at the intersection of <span className="text-white">mechanical design</span>, <span className="text-white">embedded firmware</span>, and <span className="text-white">control logic</span>. Whether it's designing custom PCBs, modeling complex assemblies in SolidWorks, or coding autonomous navigation algorithms in C++, I love building things that move and think.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
              <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-700 flex flex-col justify-center items-center h-full text-center">
                <Terminal size={48} className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Core Passions</h3>
                <ul className="text-slate-400 space-y-2 font-mono text-sm">
                  <li>&gt; Autonomous Robotics</li>
                  <li>&gt; Precision Mechatronics</li>
                  <li>&gt; Embedded Systems</li>
                  <li>&gt; CAD Design & Analysis</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-lg text-slate-400 leading-relaxed max-w-2xl">
             <p>
                Currently, I'm diving deep into <span className="text-cyan-400">ROS 2</span> and <span className="text-cyan-400">Autonomous Perception</span>, integrating these algorithms with <span className="text-cyan-400">custom-manufactured prototypes</span> to push the boundaries of what student robotics can achieve.
              </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">02. Experience</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>

          <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {exp.role} 
                    </h3>
                    <div className="text-cyan-400 font-medium mb-1">{exp.company}</div>
                  </div>
                  <div className="font-mono text-sm text-slate-500 whitespace-nowrap bg-slate-900/50 px-2 py-1 rounded inline-block md:block w-fit">
                    {exp.date} | {exp.location}
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed group">
                      <span className="text-cyan-500 mr-2 mt-1.5 text-xs opacity-50 group-hover:opacity-100 transition-opacity">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-700 w-12 md:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">03. Technical Projects</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>

          {/* Current Ongoing Projects Section (Moved Up) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-cyan-950/50 text-cyan-400 animate-pulse border border-cyan-500/20">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Current Ongoing Projects</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ongoingProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-slate-900/40 rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex flex-col h-full relative hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]"
                >
                  <div className="absolute top-0 right-0 bg-cyan-900/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded-bl-lg border-l border-b border-cyan-500/30 backdrop-blur-sm">
                    {project.status}
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors pr-8">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-cyan-200/70 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3 flex-grow">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start text-slate-400 leading-relaxed text-sm group/item">
                          <span className="text-cyan-500 mr-2 mt-1 min-w-[12px]">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Projects Grid */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded bg-slate-800 text-slate-400">
               <Settings size={20} />
            </div>
             <h3 className="text-xl font-bold text-slate-300 font-mono">Completed Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Settings size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                      {project.date.split('–')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs font-mono text-cyan-200/70 bg-cyan-900/20 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <ul className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow space-y-2">
                    {project.details.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-500 mr-2 mt-1 min-w-[12px]">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="https://www.linkedin.com/in/osman-asif-a80471346/details/projects/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 transition-all">
              See full details on LinkedIn <ExternalLink size={16} />
            </a>
            <a href="https://github.com/Osmanasif05" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 transition-all">
              See code on GitHub <Github size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">04. Technical Arsenal</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {cat.icon}
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-950 rounded text-sm text-slate-300 border border-slate-800 hover:border-cyan-500/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to collaborate?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Currently looking for new opportunities in Mechatronics, Robotics, and Embedded Systems.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/osman-asif-a80471346" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Osmanasif05"
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:osman.asif@torontomu.ca" 
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-slate-600 text-sm font-mono">
            <p>Designed & Built by Osman Asif</p>
            <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;