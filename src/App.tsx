import { useEffect, useState, useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductSection from '@/components/ProductSection';
import MassaCaseira from '@/components/MassaCaseira';
import Quality from '@/components/Quality';
import Team from '@/components/Team';
import RadioSection from '@/components/RadioSection';
import DeliveryLocation from '@/components/DeliveryLocation';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';
import {
  CALDOS_E_SALGADOS,
  PASTEIS_SALGADOS,
  PASTEIS_DOCES,
  PIZZAS,
  LANCHES,
  SUCOS,
  BEBIDAS,
} from '@/data/menu';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function App() {
  const { canInstall, installed, promptInstall } = usePWAInstall();
  const { playing, loading, error, toggle } = useRadioPlayer(RESTAURANT_INFO.radio.stream);
  const [activeSection, setActiveSection] = useState('inicio');

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['inicio', 'pasteis', 'pizzas', 'massa', 'lanches', 'bebidas', 'sobre', 'radio', 'delivery'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'pasteis' || id === 'pizzas' || id === 'lanches' || id === 'bebidas') {
              setActiveSection(id);
            } else if (id === 'inicio') {
              setActiveSection('inicio');
            } else if (id === 'sobre') {
              setActiveSection('sobre');
            } else if (id === 'delivery') {
              setActiveSection('delivery');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header
        canInstall={canInstall}
        installed={installed}
        onInstall={promptInstall}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        radioPlaying={playing}
        radioLoading={loading}
        onRadioToggle={toggle}
      />

      <main>
        <Hero onNavigate={handleNavigate} />
        <Categories onNavigate={handleNavigate} />

        <ProductSection
          id="pasteis"
          subtitle="Pastéis Salgados e Doces"
          title="Pastéis Fritos na Hora"
          description="Escolha entre os sabores salgados e doces do cardápio do Pastelão."
          products={[...PASTEIS_SALGADOS, ...PASTEIS_DOCES]}
          bgClass="bg-white"
        />

        <ProductSection
          id="pizzas"
          subtitle="Broto, Pequena, Média e Grande"
          title="Pizzas Saborosas"
          description="Escolha o sabor e o tamanho da sua pizza: Broto, Pequena, Média ou Grande."
          products={PIZZAS}
          bgClass="bg-amber-50"
        />

        <MassaCaseira />

        <ProductSection
          id="lanches"
          subtitle="Lanchonete"
          title="Lanches para Qualquer Hora"
          description="Lanches preparados com os ingredientes e combinações descritos no cardápio real."
          products={LANCHES}
          bgClass="bg-white"
        />

        <ProductSection
          id="bebidas"
          subtitle="Sucos, cervejas e bebidas"
          title="Bebidas Geladas"
          description="Sucos, cervejas, refrigerantes, energéticos e águas do cardápio."
          products={[...SUCOS, ...BEBIDAS]}
          bgClass="bg-amber-50"
        />

        <ProductSection
          id="caldos-salgados"
          subtitle="Caldos, salgados e espetos"
          title="Caldos e Salgados"
          description="Caldos, salgados, espetos e picanha na pedra."
          products={CALDOS_E_SALGADOS}
          bgClass="bg-white"
        />

        <Quality />
        <Team />

        <div id="radio">
          <RadioSection playing={playing} loading={loading} error={error} onToggle={toggle} />
        </div>

        <DeliveryLocation />
      </main>

      <Footer />

      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} radioPlaying={playing} />
    </div>
  );
}
