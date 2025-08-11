import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const brands = [
    {
      name: "SaperX",
      logo: "https://cdn2.cardume.digital/public/sites/saperx/images/layout/backgrounds/footer.svg",
      description: "Plataforma de gestão empresarial"
    },
    {
      name: "Eleven Soft",
      logo: "https://elevensoft.dev/icon.png?0542a25d6bd16a09",
      description: "Soluções de segurança e DevOps"
    },
    {
      name: "Pixxey",
      logo: "https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png",
      description: "Tecnologia e inovação"
    },
    {
      name: "TechCorp",
      logo: "public/esh logo 2.png",
      description: "Consultoria em TI"
    },
    {
      name: "SecureNet",
      logo: "public/esh logo 3.png",
      description: "Segurança cibernética"
    },
    {
      name: "DataFlow",
      logo: "public/esh logo 4.png",
      description: "Análise de dados"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-neutral-500 tracking-wider uppercase mb-2">
            Confiança das Empresas
          </h3>
          <p className="text-lg text-neutral-300">
            A confiança de empresas que levam segurança a sério
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Container do carrossel */}
          <div className="overflow-hidden rounded-2xl bg-neutral-800/50 border border-neutral-700">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8 flex flex-col items-center justify-center min-h-[200px]"
                >
                  <div className="text-center">
                    {/* Logo */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-neutral-900 border border-neutral-700 p-4 flex items-center justify-center shadow-lg">
                      <img 
                        src={brand.logo} 
                        alt={`Logo ${brand.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Nome da empresa */}
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {brand.name}
                    </h4>
                    
                    {/* Descrição */}
                    <p className="text-neutral-400 text-sm max-w-xs">
                      {brand.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-600 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Slide anterior"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-600 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Próximo slide"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-orange-400 scale-125' 
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-400 text-sm mb-4">
            Junte-se a essas empresas e transforme sua segurança
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Começar Agora
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
