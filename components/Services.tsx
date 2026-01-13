'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Share2, Layout, Sparkles } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Gestão de Tráfego',
    description: 'Anúncios estratégicos que geram leads qualificados e vendas.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Conteúdo que fortalece sua marca e engaja o público certo.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Layout,
    title: 'Sites & Landing Pages',
    description: 'Páginas modernas pensadas para converter visitantes.',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description: 'Posicionamento profissional que destaca seu negócio.',
    color: 'from-cyan-600 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
]

export default function Services() {
  return (
    <section id="serviços" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            Nossos Serviços
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Marketing que converte</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estratégias completas que transformam cliques em clientes reais.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Large Icon with Gradient Background */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  className="relative mb-8"
                >
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow relative z-10`}>
                    <service.icon className="w-12 h-12 text-white" strokeWidth={2} />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className={`absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-12 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pronto para crescer?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende seu diagnóstico gratuito agora
            </p>
            <motion.a
              href="https://wa.me/message/ZNLJG47I5KKNK1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}
