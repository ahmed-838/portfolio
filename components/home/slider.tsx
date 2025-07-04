"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Athkar - Islamic Supplications App",
    description: "Interactive web application providing daily Islamic supplications (Adhkar) and Quran learning features with a modern, responsive UI. Includes morning/evening Adhkar collections and Tajweed lessons.",
    image: "/projects/azkar.png",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://gencare.vercel.app/",
    category: "Web Application"
  },
  {
    id: 2,
    title: "GenCare - Pregnancy Care Application",
    description: "Comprehensive mobile application supporting expecting mothers with personalized health tracking, pregnancy information, and AI-powered ultrasound analysis for disease detection.",
    image: "/projects/gencare.png",
    tags: ["React Native", "Expo", "Node.js", "MongoDB", "AWS", "ML/AI"],
    link: "https://gen-care-website.vercel.app/",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "ViewStore - E-Commerce Platform",
    description: "Multi-tiered e-commerce solution with separate customer storefront and admin dashboard. Features product management, promotional offers, secure authentication, and Arabic language support.",
    image: "/projects/viewstore.png",
    tags: ["Next.js", "Express", "MongoDB", "JWT", "Material UI"],
    link: "https://viewstore.vercel.app/",
    category: "E-Commerce"
  },
  {
    id: 4,
    title: "Mawa - Student Housing Platform",
    description: "Comprehensive student housing management system connecting property owners with student tenants. Features map-based property search, multi-role interfaces, and RTL support for Arabic markets.",
    image: "/projects/mawa1.png",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Leaflet Maps"],
    link: "https://mawa-rho.vercel.app/map/",
    category: "Platform"
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setIsImageLoading(true);
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setIsImageLoading(true);
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setIsImageLoading(true);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying, isHovered]);

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      zIndex: 0,
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
    })
  };

  return (
    <div 
      className="w-full max-w-7xl mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slider Container */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 }
            }}
            className="absolute inset-0 w-full h-full"
            onTouchStart={(e: React.TouchEvent) => {
              setTouchEnd(null);
              setTouchStart(e.targetTouches[0].clientX);
            }}
            onTouchMove={(e: React.TouchEvent) => {
              setTouchEnd(e.targetTouches[0].clientX);
            }}
            onTouchEnd={() => {
              if (!touchStart || !touchEnd) return;
              const distance = touchStart - touchEnd;
              const isLeftSwipe = distance > minSwipeDistance;
              const isRightSwipe = distance < -minSwipeDistance;
              
              if (isLeftSwipe) nextSlide();
              else if (isRightSwipe) prevSlide();
            }}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
              
              {/* Image Section */}
              <div className="relative order-1 lg:order-1 h-2/5 sm:h-1/2 lg:h-full overflow-hidden">
                <motion.div 
                  className="relative w-full h-full group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Decorative elements - hidden on mobile */}
                  <div className="hidden lg:block absolute top-6 left-6 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                  <div className="hidden lg:block absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
                  
                  <div className="relative w-full h-full p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <Image 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                        className={`object-cover transition-all duration-1000 ${
                          isImageLoading ? 'scale-110 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100'
                        }`}
                        priority={currentIndex === 0}
                        onLoad={() => setIsImageLoading(false)}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Category badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1 bg-teal-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                      >
                        {projects[currentIndex].category}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative order-2 lg:order-2 h-3/5 sm:h-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="w-full max-w-lg">
                  
                  {/* Project Number */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-teal-400/60 font-mono text-xs sm:text-sm mb-1 sm:mb-2"
                  >
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </motion.div>

                  {/* Title */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight"
                  >
                    {projects[currentIndex].title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none"
                  >
                    {projects[currentIndex].description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 lg:mb-8"
                  >
                    {projects[currentIndex].tags.slice(0, 4).map((tag, idx) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        whileHover={{ y: -2, scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {projects[currentIndex].tags.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs sm:text-sm">
                        +{projects[currentIndex].tags.length - 4}
                      </span>
                    )}
                  </motion.div>

                  {/* CTA Button */}
                  {projects[currentIndex].link && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                      <motion.a 
                        href={projects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 text-sm sm:text-base"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Explore Project</span>
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.a>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation - Hidden on mobile */}
        <div className="hidden sm:block absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20">
          <motion.button 
            onClick={prevSlide}
            className="p-2 lg:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
        </div>
        
        <div className="hidden sm:block absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20">
          <motion.button 
            onClick={nextSlide}
            className="p-2 lg:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`transition-all duration-500 ${
                index === currentIndex 
                  ? "w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg shadow-teal-400/30" 
                  : "w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-white/40 rounded-full hover:bg-white/60"
              }`} />
              
              {/* Progress bar for current slide */}
              {index === currentIndex && isAutoPlaying && !isHovered && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play toggle - Hidden on small screens */}
        <div className="hidden lg:block absolute top-4 lg:top-6 right-4 lg:right-6 z-20">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
          >
            {isAutoPlaying ? (
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
