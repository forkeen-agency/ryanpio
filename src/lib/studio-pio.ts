import { pontoHoverImage } from '@/lib/ponto-method-images';

export const STUDIO = {
  name: 'Studio Pio.',
  heroHeadline: 'Branding e Estratégia',
  heroHeadlineAccent: 'de Marca',
  heroLead:
    'Estratégia antes do design. Para quem abre ou reposiciona um negócio.',
  tagline: 'Branding e Estratégia de Marca',
  founder: 'Ryan Pio',
  founderHandle: '@oryanpio',
  instagramStudio: 'https://www.instagram.com/ostudiopio/',
  instagramFounder: 'https://www.instagram.com/oryanpio/',
  copyright: '© Studio Pio. Todos os direitos reservados.',
} as const;

export const ABOUT = {
  heroHeadline: 'O remédio que sua marca precisa',
  heading: 'Prazer, Ryan Pio.',
  paragraphs: [
    'Sou marido, pai e empresário. Trabalho no mercado criativo há mais de 10 anos, em identidade visual, diagramação, social selling e direção criativa. Nesse caminho atendi marcas como GSK, Ânima Educação, Colégio Bandeirantes, Grant Thornton e Finbold.',
    'Fundei o Studio Pio. em 2024. Começamos criando marcas para profissionais da saúde e aprendemos uma coisa que vale para qualquer setor: o problema de marca quase nunca é de desenho. É de decisão. Por isso hoje trabalhamos com quem vai abrir um negócio ou reposicionar um que já existe, sempre com estratégia antes do design.',
    'O que a gente entrega não é um logo. É uma marca que faz a sua empresa ser escolhida antes de ser comparada.',
  ],
} as const;

export const PONTO_METHOD = {
  title: 'Método PONTO.',
  subtitle:
    'Cinco etapas. Cada uma entrega algo que você pode usar, mesmo que o projeto parasse ali.',
  footnote: 'Prazo e investimento são definidos no diagnóstico.',
  steps: [
    {
      title: '01. Diagnóstico',
      description:
        'Entendemos o negócio antes de qualquer desenho: onde ele está, com quem compete e o que o cliente percebe hoje. Você recebe um relatório com o problema real a resolver, que muitas vezes é diferente do que você trouxe.',
      image: pontoHoverImage('diagnostico'),
    },
    {
      title: '02. Estratégia',
      description:
        'Decidimos o que a marca é: posicionamento, personalidade, tom de voz e promessa. Você recebe o documento de estratégia, que orienta design e comunicação daqui pra frente, com ou sem a gente.',
      image: pontoHoverImage('estrategia'),
    },
    {
      title: '03. Direção',
      description:
        'Traduzimos a estratégia em conceito e território visual, aprovados antes de qualquer desenho. Você sabe de onde a marca vem antes de vê-la pronta.',
      image: pontoHoverImage('direcao'),
    },
    {
      title: '04. Identidade',
      description:
        'Desenhamos o sistema completo: logotipo, símbolo, tipografia, cor e regras de uso, tudo justificado pelas etapas anteriores. Você recebe a identidade visual com manual e arquivos para todos os meios.',
      image: pontoHoverImage('identidade'),
    },
    {
      title: '05. Lançamento',
      description:
        'Apresentamos a marca com a lógica inteira do projeto e montamos o plano para colocá-la no mundo: onde aplicar primeiro e o que comunicar. Marca sem lançamento é logo guardado numa pasta.',
      image: pontoHoverImage('lancamento'),
    },
  ],
} as const;

export const DELIVERABLES = {
  title: 'Entregáveis',
  subtitle:
    'Cada entregável pode ser usado sozinho. Juntos, são uma marca pronta pra trabalhar.',
  items: [
    {
      title: 'Diagnóstico de marca',
      description:
        'Relatório com a leitura do negócio, do mercado e da percepção atual da marca. Aponta o problema real a resolver.',
    },
    {
      title: 'Estratégia de marca',
      description:
        'Documento com posicionamento, personalidade, tom de voz e promessa. Orienta design, comunicação e decisões futuras, com ou sem a gente.',
    },
    {
      title: 'Logotipo',
      description:
        'Apresentado com o conceito e a direção criativa aprovados. Arquivos em PDF, PNG, SVG e EPS, nas versões RGB e CMYK, com código Pantone.',
    },
    {
      title: 'Identidade visual',
      description:
        'Grafismos de apoio, patterns, texturas, tipografia, paleta de cores e demais elementos que fazem a marca ser a mesma em qualquer meio.',
    },
    {
      title: 'Prototipagem',
      description:
        'Aplicações da marca em materiais reais: peças digitais, publicitárias, uniformes e papelaria. Escopo definido no diagnóstico.',
    },
    {
      title: 'Manual de marca',
      description:
        'Guia de uso da identidade. Garante que qualquer pessoa, dentro ou fora da empresa, aplique a marca do jeito certo.',
    },
  ],
} as const;

export const CTA = {
  title: 'Sua marca pronta pra ser escolhida, não comparada.',
  description:
    'Preencha o formulário para entendermos o seu negócio e os desafios do projeto. Em seguida marcamos uma conversa de diagnóstico.',
  button: 'Peça um diagnóstico',
} as const;

export const CONTACT_FORM = {
  title: 'Formulário de Diagnóstico',
  intro:
    'Este é o primeiro passo para entendermos o seu negócio e o problema que a marca precisa resolver. Leva menos de 5 minutos.',
  submit: 'Enviar',
  sections: {
    contact: 'Dados de contato',
    company: 'Dados da empresa',
    project: 'Sobre o projeto',
  },
  businessStage: [
    'Vou abrir',
    'Abri há menos de 1 ano',
    'Em funcionamento, quero reposicionar',
    'Outro',
  ],
  teamSize: ['Só eu', '2 a 10', '11 a 50', 'Mais de 50'],
  projectNeed: [
    'Marca do zero',
    'Reposicionamento',
    'Ainda não sei, quero um diagnóstico',
  ],
  revenue: [
    'Ainda não faturo',
    'Até 10 mil',
    '10 a 30 mil',
    '30 a 70 mil',
    '70 a 150 mil',
    'Acima de 150 mil',
  ],
  timeline: ['Até 1 mês', '1 a 3 meses', 'Sem pressa'],
  referral: [
    'Instagram do Studio Pio',
    'Instagram do Ryan Pio',
    'Google',
    'Indicação',
    'Behance',
    'LinkedIn',
    'Outro',
  ],
} as const;
