import dynamic from 'next/dynamic';

// Importar componentes com carregamento dinâmico
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const AboutMe = dynamic(() => import('@/components/AboutMe'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Languages = dynamic(() => import('@/components/Languages'), { ssr: false });
const Education = dynamic(() => import('@/components/Education'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutMe />
      <Experience />
      <Languages />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
} 