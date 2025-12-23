import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Upload, Loader2, CheckCircle, XCircle } from 'lucide-react';

declare global {
  interface Window {
    __ENV?: {
      API_URL: string;
      RECAPTCHA_SITE_KEY: string;
    };
  }
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "itsrk.singh7@gmail.com",
      
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7703961667",
    
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          <p className="text-xl text-slate-300 mt-6">Let's discuss your next project</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 text-slate-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1dilS-valypEyhQpFBOV1wFHel9sWUME_/view?usp=sharing"
              download
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} />
              Download Resume
            </motion.a>
          </motion.div>

        
                </div>

               

                

      </div>
    </section>
  );
}
