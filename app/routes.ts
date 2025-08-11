import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
  // Rota da Homepage (/)
  index("routes/home.tsx"),

  // Rota do Quiz (/quiz)
  route("/quiz", "routes/quiz.tsx"),
  
  // NOVA ROTA: Página de Preços (/pricing)
  route("/pricing", "routes/pricing.tsx"),

  // NOVA ROTA: Página de Segurança (/security)
  route("/security", "routes/security.tsx"),

  // NOVA ROTA: Página Sobre Nós (/about)
  route("/about", "routes/about.tsx"),

  // NOVA ROTA: Página de Documentação (/docs)
  route("/docs", "routes/docs.tsx"),

  // NOVA ROTA: Página de Comparação (/compare)
  route("/compare", "routes/compare.tsx"),

  // NOVAS ROTAS: Páginas Legais
  route("/politica-privacidade", "routes/politica-privacidade.tsx"),
  route("/termos-uso", "routes/termos-uso.tsx"),
  route("/cookies", "routes/cookies.tsx"),

] satisfies RouteConfig;
