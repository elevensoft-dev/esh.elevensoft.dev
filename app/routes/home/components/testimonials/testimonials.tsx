import { TestimonialCard } from "./testimonial-card.tsx";
import { IdCardIcon } from "@radix-ui/react-icons"

const testimonials = [
  {
    name: "Ronaldo Sacco",
    role: "CEO",
    company: "SaperX",
    content: "O ESH revolucionou o gerenciamento de acessos na SaperX, simplificando processos, aumentando segurança e economizando horas semanais. Nossa equipe agora foca em inovação, impulsionando o crescimento e eficiência no atendimento a clientes.",
    avatar: "saperx.enc",
    rating: 5,
  },
  {
    name: "Vitor Corrêa",
    role: "CTO",
    company: "ZR Media",
    content: "Estamos com o ESH há mais de um ano e, sinceramente, não dá pra imaginar voltar ao que era antes. Antes a gente tinha que confiar só na disciplina da equipe e torcer para não acontecer nenhum deslize dentro do alojamento. Hoje, o ESH garante que tudo está rodando do jeito certo, sem improviso e sem susto",
    avatar: "zr-media.jpg",
    rating: 5,
  },
  {
    name: "Larissa Souza",
    role: "CFO",
    company: "Trezze Solutions",
    content: "Antes a gente não tinha controle real do que rolava nos servidores, hoje conseguimos até assistir o replay das sessões. Isso trouxe uma segurança enorme e evitou ruídos dentro da equipe. Foi uma das poucas ferramentas que mostrou valor logo na primeira semana.",
    avatar: "trezze.jpg",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <div className="py-1 px-6 rounded-full bg-orange-500/10 text-orange-400 w-max mx-auto text-sm font-medium">
            <IdCardIcon className="w-4 h-4 inline mr-2" />
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Veja como o ESH está impulsionando a segurança das empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
