'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

// Reusable Jellyfish SVG Component
function JellyfishSVG() {
  return (
    <svg viewBox="0 0 300 450" className="w-[300px] h-[450px]">
      <defs>
        {/* Minimal elegant gradient */}
        <radialGradient id="jellyfishBody" cx="50%" cy="35%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#7dd3fc" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </radialGradient>

        <linearGradient id="tentacleFlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
        </linearGradient>

        {/* Subtle glow */}
        <filter id="gentleGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Tentacles - Clean and flowing */}
      <g>
        {[...Array(8)].map((_, i) => {
          const angle = -165 + (i * 330 / 7)
          const rad = angle * Math.PI / 180
          const startX = 150 + Math.cos(rad) * 55
          const startY = 125 + Math.sin(rad) * 30
          const controlX = startX + (i % 2 ? 20 : -20)
          const endX = startX + (i % 2 ? 10 : -10)
          
          return (
            <motion.path
              key={i}
              animate={{
                d: [
                  `M ${startX},${startY} Q ${controlX},${startY + 130} ${endX},${startY + 270}`,
                  `M ${startX},${startY} Q ${controlX - (i % 2 ? 40 : -40)},${startY + 130} ${endX},${startY + 270}`,
                  `M ${startX},${startY} Q ${controlX},${startY + 130} ${endX},${startY + 270}`,
                ],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              d={`M ${startX},${startY} Q ${controlX},${startY + 130} ${endX},${startY + 270}`}
              stroke="url(#tentacleFlow)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              filter="url(#gentleGlow)"
            />
          )
        })}
      </g>

      {/* Main body - Simple and elegant */}
      <g>
        {/* Outer bell */}
        <motion.ellipse
          cx="150"
          cy="110"
          rx="70"
          ry="60"
          fill="url(#jellyfishBody)"
          filter="url(#gentleGlow)"
          animate={{
            ry: [60, 65, 60],
            opacity: [0.85, 0.95, 0.85],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle inner highlight */}
        <motion.ellipse
          cx="150"
          cy="95"
          rx="45"
          ry="35"
          fill="white"
          opacity="0.5"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top shine */}
        <ellipse
          cx="150"
          cy="80"
          rx="30"
          ry="20"
          fill="white"
          opacity="0.8"
        />

        {/* Minimal detail lines */}
        {[...Array(4)].map((_, i) => {
          const y = 110 + i * 12
          return (
            <motion.line
              key={i}
              x1="120"
              y1={y}
              x2="180"
              y2={y}
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.3"
              strokeLinecap="round"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          )
        })}
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100" />
      
      {/* Clean minimal background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs only */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                ✨ Marketing que Converte
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Marketing Estratégico para{' '}
              <span className="text-gradient">gerar Leads e Vendas</span>{' '}
              todos os meses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Transformamos cliques em clientes reais através de estratégias 
              de marketing digital que realmente funcionam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/message/ZNLJG47I5KKNK1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-xl flex items-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Agendar Diagnóstico
              </motion.a>

              <motion.a
                href="#resultados"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                Ver Resultados
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: '500+', label: 'Clientes' },
                { value: '95%', label: 'Satisfação' },
                { value: '3x', label: 'ROI Médio' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Multiple Jellyfish with Depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
              {/* Topo Esquerda */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute left-[-50px] top-[-120px]"
                style={{ 
                  filter: 'blur(3px)',
                  opacity: 0.5,
                  transform: 'scale(0.5)',
                }}
              >
                <JellyfishSVG />
              </motion.div>

              {/* Topo Direita */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 9.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute right-[-40px] top-[-110px]"
                style={{ 
                  filter: 'blur(3px)',
                  opacity: 0.55,
                  transform: 'scale(0.52)',
                }}
              >
                <JellyfishSVG />
              </motion.div>

              {/* Lado Esquerdo */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute left-[-140px] top-[30%]"
                style={{ 
                  filter: 'blur(2.5px)',
                  opacity: 0.58,
                  transform: 'scale(0.56)',
                }}
              >
                <JellyfishSVG />
              </motion.div>

              {/* Lado Direito */}
              <motion.div
                animate={{
                  y: [0, -22, 0],
                }}
                transition={{
                  duration: 8.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute right-[-130px] top-[35%]"
                style={{ 
                  filter: 'blur(2.5px)',
                  opacity: 0.6,
                  transform: 'scale(0.58)',
                }}
              >
                <JellyfishSVG />
              </motion.div>

              {/* Centro - Principal */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(6, 182, 212, 0.4))' }}
              >
                <JellyfishSVG />
              </motion.div>
            </div>

            {/* Subtle ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400 rounded-full blur-[100px] -z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
