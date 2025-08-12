import { Header } from "../header";

export function HeaderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <Header />
      
      {/* Conteúdo de demonstração */}
      <main className="container mx-auto px-6 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-6">
            Header Moderno ESH
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Um header completamente redesenhado com animações suaves, menu dropdown responsivo, 
            efeitos visuais sofisticados e uma experiência de usuário premium.
          </p>
        </div>

        {/* Seções de demonstração */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">✨ Funcionalidades</h2>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Menu dropdown com tooltips informativos
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                Menu mobile responsivo com animações
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Barra de progresso de scroll
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                Efeitos de hover sofisticados
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Transições suaves e micro-interações
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🎨 Design System</h2>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Gradientes laranja-amarelo consistentes
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                Backdrop blur e transparências
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Sombras e bordas sutis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                Tipografia hierárquica clara
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Espaçamento e proporções harmoniosas
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de scroll para demonstrar a barra de progresso */}
        <div className="space-y-8">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Seção {i + 1} - Demonstração de Scroll
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Esta seção demonstra como a barra de progresso de scroll funciona enquanto você navega pela página. 
                O header também muda de aparência quando você faz scroll, aplicando um fundo translúcido com blur 
                e sombras para melhor legibilidade.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 