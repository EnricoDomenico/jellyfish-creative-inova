'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    'Serviços': ['Gestão de Tráfego', 'Social Media', 'Sites & Landing Pages', 'Branding'],
    'Nichos': ['Imobiliárias', 'Clínicas Médicas', 'Advogados', 'Outros Segmentos'],
    'Empresa': ['Sobre Nós', 'Resultados', 'Blog', 'Contato'],
  }

  const socialLinks = [
    { icon: Facebook, href: null, label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/jellyfishcreativ/', label: 'Instagram' },
    { icon: Linkedin, href: null, label: 'LinkedIn' },
  ]

  return (
    <footer id="sobre" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-3xl font-display font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Jellyfish
                </span>
              </div>
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                Creative Agency
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Marketing digital que transforma investimento em resultados reais.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(11) 99914-1103</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>antonio.picolo@jellyfish.art.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <span
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200 cursor-default"
                    >
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2026 Jellyfish Creative Inova. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Component = social.href ? motion.a : motion.div
                const props = social.href
                  ? {
                      href: social.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {}
                
                return (
                  <Component
                    key={social.label}
                    {...props}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={social.href ? { scale: 0.95 } : undefined}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 ${
                      social.href ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Component>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-blue-400 transition-colors cursor-default">
                Política de Privacidade
              </span>
              <span className="hover:text-blue-400 transition-colors cursor-default">
                Termos de Uso
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
    </footer>
  )
}
