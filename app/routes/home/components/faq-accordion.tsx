import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion.tsx";
import { Shield, Users, Eye, FileCheck, Server } from "lucide-react";
import { IdCardIcon } from "@radix-ui/react-icons";

const faqData = [
  {
    id: "item-1",
    question: "Quais empresas se beneficiam do ESH?",
    answer: "Qualquer empresa com servidores acessados remotamente — incluindo ISPs, telecoms, fintechs, indústrias e software houses.",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "item-2",
    question: "O ESH grava as sessões dos usuários?",
    answer: "Sim. Todas as conexões via SSH são gravadas com armazenamento centralizado e replay completo, garantindo rastreabilidade total.",
    icon: <Eye className="w-5 h-5" />
  },
  {
    id: "item-3",
    question: "Posso definir acessos diferentes por colaborador?",
    answer: "Sim. Controle granular por usuário com base em tags e grupos de servidores.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "item-4",
    question: "O ESH ajuda com conformidade e auditoria?",
    answer: "Sim. Logs detalhados, rastreamento de comandos e controle de acessos compatíveis com normas como ISO 27001 e LGPD.",
    icon: <FileCheck className="w-5 h-5" />
  },
  {
    id: "item-5",
    question: "Que tipos de acesso remoto são suportados?",
    answer: "SSH e Telnet, sem precisar instalar nada nos servidores. O acesso é mediado por um menu interativo da plataforma.",
    icon: <Server className="w-5 h-5" />
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="py-1 px-6 rounded-full bg-orange-500/10 text-orange-400 w-max mx-auto text-sm font-medium">
            <IdCardIcon className="w-4 h-4 inline mr-2" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossa solução de segurança
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-amber-400/5 rounded-2xl" />

          <Accordion type="single" collapsible className="relative z-10 space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card/50 backdrop-blur-sm border border-neutral-500/50 rounded-xl px-6 transition-all duration-300 hover:border-orange-600/30 hover:shadow-lg hover:shadow-orange-600/10"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors duration-300">
                      <div className="text-orange-600">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-lg text-white font-semibold group-hover:text-orange-600 transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="ml-14 text-neutral-500 leading-relaxed text-white">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

