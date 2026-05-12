export default function handler(req, res) {
  // Lista simples de nomes
  const nomes = ['Professor(a)', 'Dev', 'Avaliador(a)', 'Visitante'];
  
  // Sorteia um nome aleatório
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  
  // Retorna um JSON (que é o padrão para APIs)
  res.status(200).json({
    sucesso: true,
    mensagem: `Olá, ${nomeAleatorio}! Esta é uma API Serverless rodando no Vercel.`,
    data: new Date().toLocaleDateString('pt-BR')
  });
}