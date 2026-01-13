'use client'

import { motion } from 'framer-motion'
import { Building2, Heart, Scale, ArrowRight } from 'lucide-react'

const niches = [
  {
    icon: Building2,
    title: 'Imobiliárias',
    description: 'Mais leads e vendas de imóveis.',
    image: '/images/imoveis.jpg',
    color: 'from-blue-600 to-blue-700',
    stats: ['+ 300% leads', '+ 150% visitas'],
  },
  {
    icon: Heart,
    title: 'Clínicas Médicas',
    description: 'Mais agendamentos e reputação.',
    image: '/images/clinicas.jpg',
    color: 'from-cyan-600 to-cyan-700',
    stats: ['+ 200% agendamentos', '+ 180% alcance'],
  },
  {
    icon: Scale,
    title: 'Advogados',
    description: 'Mais contatos e autoridade jurídica.',
    image: '/images/advogados.jpg',
    color: 'from-blue-700 to-cyan-600',
    stats: ['+ 250% contatos', '+ 170% credibilidade'],
  },
]

export default function Niches() {
  return (
    <section id="nichos" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Especialização
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Especialistas no seu mercado</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções personalizadas para cada nicho
          </p>
        </motion.div>

        {/* Niches Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <motion.div
              key={niche.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover">
                {/* Image background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                  {/* Placeholder for image */}
                  <div className={`w-full h-full bg-gradient-to-br ${niche.color} opacity-90`} />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end min-h-[450px]">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 w-fit"
                  >
                    <niche.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {niche.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    {niche.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    {niche.stats.map((stat) => (
                      <div
                        key={stat}
                        className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.me/message/ZNLJG47I5KKNK1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>Quero Mais Leads</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>

                  {/* Decorative line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Seu segmento não está listado? Não tem problema!
          </p>
          <motion.a
            href="https://wa.me/message/ZNLJG47I5KKNK1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow inline-block"
          >
            Falar com Especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
