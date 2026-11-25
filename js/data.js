/* =========================================================================
   CONTEÚDO DO PORTFÓLIO — edite aqui sem mexer no restante do código.
   Campos vazios ("") escondem o botão correspondente automaticamente.
   ========================================================================= */

window.PORTFOLIO = {
  perfil: {
    nome: "Kauany Paula da Silva",
    iniciais: "KP",
    apelido: "Kau",
    formacao: "Análise e Desenvolvimento de Sistemas, Unicesumar (formatura prevista para julho de 2027)",
    tituloHero: ["Oi, eu sou a Kau!", "Transformo tarefas manuais em", "automação."],
    palavras: ["Organizada", "Persistente", "Observadora"],
    // Coloque sua foto em assets/img/foto.jpg e escreva o caminho aqui:
    foto: "assets/img/foto.jpg",
    headline: [
      "Estagiária de Supply Chain",
      "Power Platform",
      "Excel Avançado",
      "Power BI",
      "Automação de Processos",
      "IA Aplicada a Negócios"
    ],
    resumo:
      "Sou estudante de Análise e Desenvolvimento de Sistemas na Unicesumar, estagiária de Supply Chain, e adoro transformar tarefas manuais em processos automáticos com Excel, VBA, Power Automate, Power BI e IA.",
    slogan: "Transformando processos manuais em soluções inteligentes através de dados e automação.",
    linkedin: "https://www.linkedin.com/in/kauany-paula-silva-53954735a",
    email: "kauanyebook@gmail.com",               // ex.: "seuemail@gmail.com"
    curriculo: "assets/docs/curriculo-kauany.pdf",           // ex.: "assets/docs/curriculo-kauany.pdf"
    github: "https://github.com/Kaukau-gif",              // opcional
    instagram: "",           // opcional
    cargoHero: "Automação de Processos", // 2ª linha do título da Home
    poemaLink: "",           // link do seu perfil no app Meu Poema
    disponibilidade: "Aberta a oportunidades remotas em Automação de Processos",
    versiculos: [
      { texto: "Elevo os meus olhos para os montes: de onde me virá o socorro? O meu socorro vem do Senhor.", ref: "Salmos 121:1-2" },
      { texto: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" }
    ]
  },

  sobre: [
    "Oi! Eu sou a Kauany, mas pode me chamar de Kau. Sou estudante de Análise e Desenvolvimento de Sistemas na Unicesumar e adoro transformar tarefas manuais em processos automáticos.",
    "Comecei a trabalhar aos 17 anos como auxiliar de fotógrafa, fazendo ensaios femininos em estúdio. Faculdade parecia distante, mas eu me inscrevi mesmo assim: desde criança, aquela tela preta cheia de código me parecia mágica.",
    "Passei por um estágio em Infraestrutura de TI, onde aprendi a base de suporte e sistemas, e cheguei a Supply Chain. Lá descobri o que me move: olhar um processo, encontrar onde se perde tempo e resolver com tecnologia.",
    "O momento em que tive certeza foi quando vi uma automação minha funcionando pela primeira vez: o sistema me devolvendo os dados e clicando sozinho. Desde então, mapeio fluxos, crio macros VBA, robôs no Power Automate e painéis no Power BI, sempre usando IA para acelerar.",
    "Meu próximo passo é atuar como Analista de Automação de Processos, de preferência remoto."
  ],

  // Jornada profissional (ordem cronológica)
  jornada: [
    { titulo: "Auxiliar de fotógrafa", quando: "07/2024 – 09/2025, comecei aos 17 anos", texto: "Primeiro trabalho, em ensaios femininos em estúdio. Aprendi a olhar para os detalhes e a lidar com clientes e prazos.", tipo: "inicio" },
    { titulo: "Faculdade de ADS", quando: "Unicesumar, 2025 a julho de 2027", texto: "Mesmo sem condições ideais, me inscrevi e comecei a transformar a curiosidade de infância em profissão. Lá desenvolvi em equipe o Mãe Conectada, um app de pré-natal com assistente de IA.", tipo: "estudo" },
    { titulo: "Estágio em TI: Suporte e Infraestrutura", quando: "Suporte, infraestrutura e automação", texto: "Chamados técnicos e suporte a usuários, manutenção de hardware, sistemas operacionais e redes locais, e apoio em rotinas automatizadas com Power Automate, SAP Scripting e Excel VBA.", tipo: "ti" },
    { titulo: "Estágio em Supply Chain", quando: "Processos de negócio", texto: "Entrei na rotina de pedidos, estoque, PCP e faturamento, e passei a enxergar a operação como um fluxo.", tipo: "negocio" },
    { titulo: "Primeiras automações", quando: "Excel e VBA", texto: "A primeira vez que vi o sistema me devolvendo os dados e clicando sozinho. Ali eu tive certeza.", tipo: "auto" },
    { titulo: "Mapeamento e dados", quando: "BPMN e Power BI", texto: "Mapeamento AS IS / TO BE da rotina de vendas e acompanhamento de status com dados.", tipo: "dados" },
    { titulo: "IA como aceleradora", quando: "IA generativa", texto: "Uso de IA para rascunhar fluxogramas, revisar código e prototipar soluções em horas, não semanas.", tipo: "ia" },
    { titulo: "Soluções para analistas", quando: "VBA e Power Automate", texto: "Protótipos de auditoria Gantt × SAP e robôs que entregam relatórios prontos, criados por iniciativa própria e ainda não implementados oficialmente.", tipo: "auto" },
    { titulo: "Próximo passo", quando: "Objetivo", texto: "Atuar como Analista de Automação de Processos.", tipo: "objetivo" }
  ],

  /* ---------------------------------------------------------------------
     PROJETOS
     status: texto curto exibido no selo do projeto.
     fluxo: etapas desenhadas no fluxograma (tipo: start | task | decision | waste | auto | end)
     --------------------------------------------------------------------- */
  projetos: [
    {
      id: "mae-conectada",
      titulo: "Mãe Conectada",
      categoria: "Projeto acadêmico",
      destaque: true,
      status: "Protótipo navegável no Figma",
      resumo: "Aplicativo mobile de acompanhamento pré-natal com assistente de Inteligência Artificial, desenvolvido em equipe no curso de Análise e Desenvolvimento de Sistemas da Unicesumar. É o projeto de que mais me orgulho.",
      equipe: ["Aline Rodrigues Lorkievicz", "Silvia de Oliveira Fabro", "Kauany Paula"],
      orientador: "Prof. Msc. Alexandre Rodizio Bento",
      problema: "A gestante lida ao mesmo tempo com consultas, exames, sintomas, orientações e os preparativos para a chegada do bebê. As informações ficam espalhadas em fontes diferentes, a rotina é organizada à mão (e consultas, exames e medicamentos acabam esquecidos) e, entre uma consulta e outra, nem sempre ela sabe quando um sintoma merece atenção profissional.",
      contexto: "O pré-natal é central para acompanhar a evolução da gravidez e identificar intercorrências. A saúde móvel (mHealth) usa o celular para dar acesso a informação, monitoramento e serviços de saúde. O Mãe Conectada tem caráter estritamente complementar: não substitui o acompanhamento dos profissionais de saúde.",
      analise: {
        definir: {
          pergunta: "Como usar a tecnologia móvel e a Inteligência Artificial para ajudar a gestante a organizar a rotina, acessar informações e acompanhar a gestação de forma simples, intuitiva e dinâmica, sem substituir os profissionais de saúde?",
          itens: [
            "Atores: Gestante, Administrador (gerencia usuários e conteúdo educativo) e Assistente de IA.",
            "Três problemas centrais: informação dispersa, rotina organizada à mão e dúvidas entre as consultas.",
            "Princípio do projeto: a IA só informa de forma educativa. Não diagnostica, não prescreve e não substitui consulta médica."
          ]
        },
        dados: {
          texto: "A base do projeto veio de protocolos do Ministério da Saúde, de estudos sobre saúde móvel e chatbots na gestação, e das necessidades da usuária descritas em User Stories (3W e 3C). Estes são os dados que o app organiza:",
          dicionario: [
            ["Cadastro", "E-mail, senha e 2FA", "Acesso seguro"],
            ["Gestação", "DUM (data da última menstruação)", "Idade gestacional e data provável do parto"],
            ["Diário", "Humor, sintomas, peso, pressão e água", "Histórico e gráfico de bem-estar"],
            ["Agenda", "Consultas e exames", "Lembretes por push, alerta ou e-mail"],
            ["Medicamentos", "Horários e vacinas", "Lembretes (apenas organização)"],
            ["Enxoval", "Itens por categoria e situação", "Progresso de itens adquiridos"],
            ["Assistente", "Dúvidas da gestante", "Respostas educativas e alerta de urgência"]
          ]
        },
        preparar: {
          texto: "Como são dados de saúde, o cuidado com o tratamento da informação veio antes das telas:",
          itens: [
            "LGPD: dados de saúde são sensíveis e tratados com Privacy by Design e Privacy by Default (privacidade como padrão).",
            "Cálculo automático da idade gestacional e da data provável do parto a partir da DUM.",
            "Conteúdo semanal sobre o desenvolvimento do bebê validado pelo Ministério da Saúde.",
            "Filtro de urgência antes do modelo de IA: sinais de alerta direcionam para o SAMU 192.",
            "Medicamentos e vacinas apenas para organização, sem orientação de dose.",
            "Processo de engenharia de software iterativo, em cinco fases."
          ]
        },
        apresentar: {
          texto: "As informações viram indicadores visuais que apoiam a gestante e a equipe de saúde:",
          itens: [
            "Progresso da gestação: semana, trimestre e percentual concluído, com tamanho do bebê e data prevista do parto.",
            "Bem-estar na semana: gráfico de humor e registros de peso, pressão e água, com o botão “Levar para a consulta”.",
            "Progresso do enxoval: barra de progresso (ex.: 12 de 30 itens) e categorias para planejar a chegada do bebê."
          ]
        }
      },
      solucao: [
        "Cadastro e login com autenticação em dois fatores (2FA).",
        "Idade gestacional calculada pela DUM, com data provável do parto.",
        "Desenvolvimento do bebê semana a semana, com conteúdo validado pelo Ministério da Saúde.",
        "Diário de sintomas: humor, sintomas, peso, pressão e água, com histórico.",
        "Agenda de consultas e exames com lembretes por push, alerta ou e-mail.",
        "Medicamentos e vacinas com registro de horários e lembretes.",
        "Lista de enxoval por categoria, com itens adquiridos e pendentes.",
        "Assistente virtual com IA para dúvidas gerais, com alerta de urgência (SAMU 192) antes do modelo."
      ],
      ferramentas: ["Figma", "Inteligência Artificial (chatbot)", "User Stories", "LGPD e Privacy by Design", "Engenharia de Software"],
      competencias: ["Prototipação no Figma", "UX para saúde", "Levantamento de requisitos", "IA responsável", "Proteção de dados", "Trabalho em equipe", "Pesquisa acadêmica"],
      desafios: [
        "Criar uma IA útil no dia a dia que não diagnostique nem prescreva.",
        "Proteger dados de saúde, que são sensíveis pela LGPD, desde a concepção.",
        "Reunir muitas funções em uma interface simples e acolhedora.",
        "Deixar claro em todas as telas que o app complementa, e não substitui, o pré-natal."
      ],
      resultados: [
        "Rotina da gestação organizada em um só lugar.",
        "Menos consultas, exames e medicamentos esquecidos.",
        "Informação confiável acessível entre as consultas.",
        "Registros de bem-estar prontos para levar à consulta."
      ],
      indicadores: [
        { valor: "8", rotulo: "funcionalidades" },
        { valor: "6", rotulo: "telas prototipadas" },
        { valor: "3", rotulo: "atores no sistema" },
        { valor: "3", rotulo: "indicadores de gestão" }
      ],
      fluxo: [
        { tipo: "start", texto: "Cadastro e login (2FA)" },
        { tipo: "auto", texto: "Informar a DUM" },
        { tipo: "auto", texto: "Semana gestacional e DPP" },
        { tipo: "auto", texto: "Diário, agenda e enxoval" },
        { tipo: "decision", texto: "Dúvida ou sintoma?" },
        { tipo: "decision", texto: "Sinal de urgência?" },
        { tipo: "auto", texto: "Assistente de IA educativo" },
        { tipo: "end", texto: "Levar para a consulta" }
      ],
      vitrine: ["assets/img/mae/login.jpg", "assets/img/mae/inicio.jpg", "assets/img/mae/diario.jpg"],
      retrato: true,
      galeria: [
        { src: "assets/img/mae/login.jpg", legenda: "Login: e-mail e senha, recuperação de senha e criação de conta" },
        { src: "assets/img/mae/inicio.jpg", legenda: "Tela inicial: semana gestacional, trimestre, tamanho do bebê, parto previsto e próxima consulta" },
        { src: "assets/img/mae/diario.jpg", legenda: "Diário de saúde: humor, sintomas, peso, pressão, água e gráfico de bem-estar" },
        { src: "assets/img/mae/assistente.jpg", legenda: "Assistente (IA): respostas educativas, alerta de urgência e aviso de que não substitui o profissional" },
        { src: "assets/img/mae/agenda.jpg", legenda: "Agenda: consultas, exames e medicamentos com lembretes e histórico" },
        { src: "assets/img/mae/enxoval.jpg", legenda: "Enxoval: lista por categorias com progresso de itens" }
      ],
      indicadoresImg: [
        { src: "assets/img/mae/ind-gestacao.jpg", legenda: "Progresso da gestação" },
        { src: "assets/img/mae/ind-bem-estar.jpg", legenda: "Bem-estar na semana" },
        { src: "assets/img/mae/ind-enxoval.jpg", legenda: "Progresso do enxoval" }
      ]
    },
    {
      id: "auditoria-gantt-sap",
      analise: {
        "definir": {
          "pergunta": "Quais pedidos estão com status ou data diferentes entre o SAP e o Gantt, e o que cada um precisa?",
          "itens": [
            "Partes interessadas: analistas de vendas, que informam prazos ao cliente, e PCP, que programa a produção.",
            "Critério de sucesso: todo pedido com etapa coerente nas duas fontes e Data Acordada igual ou posterior ao término da produção.",
            "Escopo: pedidos ativos na carteira; o Gantt e o SAP são só lidos, nunca alterados."
          ]
        },
        "dados": {
          "texto": "Os dados vinham de duas fontes com estruturas diferentes. A macro localiza sozinha cada base: procura em todas as abas a linha de cabeçalho com mais colunas esperadas e avisa quais estão faltando. O Gantt é encontrado na pasta local, no OneDrive ou no SharePoint.",
          "dicionario": [
            [
              "SAP",
              "Chave (pedido-item)",
              "Junção entre as bases"
            ],
            [
              "SAP",
              "Status SAP / ST2",
              "Etapa do pedido no ERP"
            ],
            [
              "SAP",
              "Data de entrega e Data Acordada",
              "Validação de prazo"
            ],
            [
              "Gantt",
              "Aba da máquina e status",
              "Etapa real na produção"
            ],
            [
              "Gantt",
              "Pedido (texto livre)",
              "Junção com o SAP"
            ],
            [
              "Gantt",
              "WIP e P.A.",
              "Material em processo e pronto"
            ],
            [
              "Gantt",
              "Término",
              "Data prevista de fim da produção"
            ]
          ],
          "itens": [
            "Abas fora do escopo (carteira tratada e terceiros) são ignoradas.",
            "Histórico das execuções anteriores é guardado para comparar mudanças de status."
          ]
        },
        "preparar": {
          "texto": "A maior parte do trabalho foi deixar as duas bases comparáveis. Cada valor passa por uma limpeza antes do cruzamento:",
          "itens": [
            "Remove caracteres invisíveis que quebram buscas: espaço não separável, caracteres de largura zero e marcas de formatação.",
            "Unifica 10 variações de traço (–, —, ‑…) em um hífen comum.",
            "Retira o apóstrofo de números gravados como texto e espaços extras.",
            "Extrai números de pedido de células com texto livre do Gantt.",
            "Sinaliza chaves fora do padrão sem nunca “corrigir” o número.",
            "Aceita datas reais, números de série e textos dd/mm/aaaa ou aaaa-mm-dd, e rejeita datas impossíveis.",
            "Traduz dezenas de status escritos de formas diferentes em 6 etapas padronizadas."
          ],
          "antesDepois": [
            [
              " 1002450 - 01 ",
              "1002450-01",
              "espaços removidos"
            ],
            [
              "'1002450–01",
              "1002450-01",
              "apóstrofo e traço longo"
            ],
            [
              "IC 8006666",
              "8006666",
              "número-base sem item"
            ],
            [
              "100245-010",
              "100245-010 ⚑",
              "mantido e sinalizado"
            ],
            [
              "31/02/2026",
              "rejeitada",
              "data impossível"
            ],
            [
              "Prog. LCL03",
              "2 Programado/Produção",
              "status padronizado"
            ]
          ]
        },
        "apresentar": {
          "texto": "O resultado é entregue na linguagem de quem vai agir, não de quem analisou:",
          "itens": [
            "Quatro cartões de ação: atualizar status, atualizar data, status e data, verificar no Gantt.",
            "Tabela só com os pedidos que precisam de ação, com o status correto e o motivo de cada sugestão.",
            "Resumo por etapa, alertas de atraso e histórico de mudanças.",
            "Gráfico e painel com os números da última execução, logo abaixo."
          ]
        }
      },
      competencias: ["Lógica de validação de fluxo","Tratamento de dados entre sistemas","Experiência do usuário em planilhas","Governança e rastreabilidade (logs)","Código modular em VBA"],
      titulo: "Auditoria Automática de Status (Gantt × SAP)",
      categoria: "Excel VBA",
      destaque: true,
      status: "Protótipo funcional, ainda não implementado",
      resumo:
        "Macro que cruza o ERP com o Gantt de produção, encontra pedidos com status ou data divergentes e diz exatamente o que atualizar.",
      problema:
        "O acompanhamento de pedidos dependia de três fontes que não conversavam: o ERP (SAP), o Gantt de programação (uma aba por máquina) e o Power BI. Para saber se um pedido estava certo, era preciso pesquisar pedido por pedido com Ctrl+F e comparar à mão. Status desatualizados e datas vencidas passavam despercebidos.",
      contexto:
        "Indústria de processamento de aço com várias máquinas e um fluxo produtivo em etapas: Pendência, Ag. Programação PCP, Programado/Produção, Pronto, Separação e Faturamento. A área de vendas precisa de datas confiáveis para informar o cliente.",
      solucao: [
        "Lê a base do SAP e indexa todas as abas de máquinas do Gantt, detectando os cabeçalhos automaticamente mesmo quando mudam de posição.",
        "Normaliza números de pedido (com e sem item) e localiza a melhor ocorrência de cada um.",
        "Valida o fluxo produtivo e classifica 10 tipos de divergência, como SAP e Gantt em etapas diferentes, cancelado no Gantt e ativo no SAP, etapa pulada ou retorno sem justificativa.",
        "Sugere o status correto e o que atualizar: status, data, ambos ou verificar no Gantt.",
        "Gera um painel com indicadores por etapa, resumo de ações e alertas de atraso.",
        "Bloqueia o salvamento enquanto houver pedido atrasado sem Data Acordada atualizada, e só aceita datas válidas.",
        "Mantém histórico de status e log de alterações com usuário e data/hora.",
        "Funciona com arquivos locais, OneDrive ou SharePoint e lembra o último Gantt usado. Nunca altera o Gantt nem o SAP.",
        "Dashboard com total de auditorias, % de conformidade, não conformidades por categoria, ranking de falhas e distribuição por responsável.",
        "Fluxo no Power Automate que dispara a análise (Office Scripts) sempre que o arquivo do Gantt é modificado."
      ],
      ferramentas: ["Excel VBA", "Office Scripts", "Power Automate", "SAP (base exportada)", "SharePoint / OneDrive", "Fórmulas avançadas", "Formatação condicional", "IA para revisão de código"],
      desafios: [
        "Gantt com estrutura diferente em cada aba e cabeçalhos que mudam de linha.",
        "Abas novas de máquinas sem status mapeado: criei um log automático para não perder nenhum pedido.",
        "Garantir que a ferramenta só lê e sugere, sem risco de corromper os sistemas de origem.",
        "Fazer a equipe atualizar prazos: a solução foi validar a data na própria célula e impedir o salvamento com atraso."
      ],
      resultados: [
        "Conferência de centenas de pedidos em uma execução, no lugar da busca manual pedido a pedido.",
        "Lista priorizada do que cada pedido precisa: a pessoa só age onde há problema.",
        "Prazos acordados sempre coerentes com a data de término da produção.",
        "Base para o painel único de acompanhamento proposto no TO BE."
      ],
      indicadores: [
        { valor: "246", rotulo: "pedidos analisados em uma execução" },
        { valor: "60", rotulo: "divergências SAP × Gantt encontradas" },
        { valor: "10", rotulo: "tipos de divergência validados" },
        { valor: "~2.300", rotulo: "linhas de VBA" }
      ],
      grafico: {
        titulo: "Resultado da última execução: o que cada pedido precisa",
        nota: "Dados reais da execução de 16/11/2026, 246 pedidos.",
        barras: [
          { rotulo: "Sem programação localizada no Gantt", valor: 181 },
          { rotulo: "Atualizar status", valor: 61 },
          { rotulo: "Atualizar status e data", valor: 2 },
          { rotulo: "Nada a atualizar", valor: 2 }
        ]
      },
      fluxo: [
        { tipo: "start", texto: "Abrir o painel" },
        { tipo: "auto", texto: "Localizar Gantt (local / SharePoint)" },
        { tipo: "auto", texto: "Ler base SAP" },
        { tipo: "auto", texto: "Indexar abas das máquinas" },
        { tipo: "decision", texto: "Fluxo coerente?" },
        { tipo: "auto", texto: "Classificar divergência e sugerir status" },
        { tipo: "auto", texto: "Painel, resumo e histórico" },
        { tipo: "end", texto: "Analista age só no que precisa" }
      ],
      galeria: [
        { src: "assets/img/estagio/dashboard-auditoria.png", legenda: "Dashboard da auditoria: conformidade, não conformidades por categoria, ranking de falhas e responsáveis (dados anonimizados)" },
        { src: "assets/img/estagio/fluxo-gantt-office-scripts.png", legenda: "Execução automática: o Power Automate roda a análise quando o arquivo do Gantt é modificado" }
      ],
      mockPainel: true
    },

    {
      id: "painel-integrado",
      analise: {
        "definir": {
          "pergunta": "Onde está cada pedido e o que precisa de ação hoje?",
          "itens": [
            "Partes interessadas: analistas de Supply Chain que acompanham a carteira diariamente.",
            "Critério de sucesso: responder em uma tela o que antes exigia abrir vários relatórios."
          ]
        },
        "dados": {
          "texto": "Mapeei quais relatórios a equipe consultava e quais campos realmente eram usados em cada um.",
          "itens": [
            "Base de pedidos exportada do SAP.",
            "Gantt de programação da produção.",
            "Controles de acompanhamento mantidos pela equipe."
          ]
        },
        "preparar": {
          "texto": "As bases foram consolidadas e padronizadas antes de chegar ao painel:",
          "itens": [
            "Consolidação das fontes com Power Query.",
            "Padronização de tipos de dado (texto, número, data) e da chave do pedido.",
            "Remoção de duplicados.",
            "Colunas de cálculo separadas e ocultas, para a tela mostrar só o necessário."
          ]
        },
        "apresentar": {
          "texto": "A apresentação foi pensada para a rotina do analista:",
          "itens": [
            "Cartões de indicadores que se atualizam por fórmula.",
            "Tabela com pedido, status, origem, datas, o que atualizar e motivo.",
            "Aba espelho somente leitura e resumo por etapa."
          ]
        }
      },
      competencias: ["Estruturação de bases de dados", "Modelagem de indicadores", "Dashboards operacionais", "Visão do usuário final"],
      titulo: "Painel Integrado de Pedidos",
      categoria: "Excel VBA",
      destaque: true,
      status: "Protótipo, ainda não implementado",
      resumo:
        "Planilha que reúne informações de várias fontes em uma única visualização, para o analista ver em um só lugar o que precisa de ação.",
      problema:
        "Os dados de pedidos estavam espalhados em relatórios diferentes. Para responder a uma pergunta simples, como em que etapa está um pedido, o analista precisava abrir e consultar vários arquivos à mão.",
      contexto:
        "Equipe de Supply Chain que acompanha diariamente a carteira de pedidos entre Vendas, PCP, Produção e Faturamento.",
      solucao: [
        "Consolidação das bases de pedidos com Power Query e VBA.",
        "Painel centralizado com cartões de indicadores que se atualizam por fórmula: atualizar status, atualizar data, status e data, verificar no Gantt.",
        "Tabela na visão do analista: pedido, status, aba de origem, data acordada, data de término, o que atualizar, status correto e motivo.",
        "Colunas de apoio ocultas para os cálculos, deixando a tela limpa.",
        "Aba espelho somente leitura e resumo por etapa para consulta rápida."
      ],
      ferramentas: ["Excel", "VBA", "Power Query", "Formatação condicional"],
      desafios: [
        "Reunir bases com formatos diferentes sem duplicar pedidos.",
        "Mostrar só o necessário ao analista, sem perder os dados de apoio."
      ],
      resultados: [
        "Uma única tela para acompanhar os pedidos, no lugar de vários relatórios.",
        "Menos consultas manuais e mais confiança na informação.",
        "Base para a auditoria e a sugestão automática de status."
      ],
      indicadores: [
        { valor: "1", rotulo: "tela no lugar de vários relatórios" },
        { valor: "4", rotulo: "cartões de ação para o analista" }
      ],
      fluxo: [
        { tipo: "start", texto: "Relatórios de origem" },
        { tipo: "auto", texto: "Power Query consolida" },
        { tipo: "auto", texto: "VBA trata e cruza" },
        { tipo: "auto", texto: "Cartões de indicadores" },
        { tipo: "end", texto: "Visão única do analista" }
      ],
      galeria: []
    },

    {
      id: "sugestao-status",
      analise: {
        "definir": {
          "pergunta": "Qual deveria ser o status deste pedido agora, e por quê?",
          "itens": [
            "Problema: cada pessoa decidia o status com um critério diferente.",
            "Critério de sucesso: a mesma regra para toda a equipe, com o motivo explicado."
          ]
        },
        "dados": {
          "texto": "A regra cruza quatro campos de duas fontes:",
          "itens": [
            "Status no SAP.",
            "Status e aba da máquina no Gantt.",
            "Data de término da produção.",
            "Data Acordada com o cliente."
          ]
        },
        "preparar": {
          "texto": "Para comparar etapas escritas de jeitos diferentes, criei uma escala única de níveis:",
          "itens": [
            "0 Pendência/Bloqueio, 1 Ag. Prog. PCP, 2 Programado/Produção, 3 Pronto, 4 Separação, 5 Faturamento, 9 Cancelado.",
            "Status com nome de máquina (ex.: “Prog. LCL03”, “MCT03”) caem no nível 2.",
            "Valores vazios ou com erro são marcados como status inválido."
          ]
        },
        "apresentar": {
          "texto": "Cada sugestão chega com o raciocínio visível:",
          "itens": [
            "Colunas Status correto e Motivo.",
            "Status de prazo e dias de atraso.",
            "Bloqueio de salvamento quando há pedido atrasado sem Data Acordada nova."
          ]
        }
      },
      competencias: ["Regras de negócio em código", "Validação de dados", "Padronização de processo"],
      titulo: "Sugestão Inteligente de Status",
      categoria: "Excel VBA",
      destaque: false,
      status: "Protótipo, módulo da auditoria",
      resumo:
        "Macro que sugere o status correto de cada pedido a partir de regras de negócio e datas operacionais.",
      problema:
        "Decidir o status de um pedido dependia da experiência de cada pessoa. Pedidos ficavam em status errados durante o fluxo, e prazos vencidos passavam sem ajuste.",
      contexto:
        "Fluxo produtivo em etapas (Pendência, Ag. Programação PCP, Programado, Pronto, Separação e Faturamento), com datas de término e datas acordadas com o cliente.",
      solucao: [
        "Compara a etapa no ERP com a etapa no Gantt de produção.",
        "Aplica regras de nível de etapa para detectar retorno sem justificativa e etapa pulada.",
        "Considera as datas: se a Data Acordada for anterior ao término de um pedido não concluído, marca como atrasado.",
        "Sugere o status correto e explica o motivo em uma coluna própria.",
        "Só aceita Data Acordada igual ou posterior ao término, e impede salvar enquanto houver atraso."
      ],
      ferramentas: ["Excel", "VBA"],
      desafios: [
        "Transformar decisões do dia a dia em regras objetivas.",
        "Explicar cada sugestão para o analista confiar nela."
      ],
      resultados: [
        "Menos validações manuais.",
        "Mesmo critério de status para toda a equipe.",
        "Prazos coerentes com a produção."
      ],
      indicadores: [
        { valor: "6", rotulo: "etapas do fluxo validadas" },
        { valor: "2", rotulo: "critérios combinados: etapa e prazo" }
      ],
      fluxo: [
        { tipo: "start", texto: "Pedido" },
        { tipo: "auto", texto: "Etapa ERP × Gantt" },
        { tipo: "decision", texto: "Etapa coerente?" },
        { tipo: "decision", texto: "Prazo em dia?" },
        { tipo: "end", texto: "Status sugerido e motivo" }
      ],
      galeria: []
    },

    {
      id: "rpa-consolidacao-status",
      analise: {
        "definir": {
          "pergunta": "Qual é o status válido de cada pedido quando ele aparece em várias linhas da base?",
          "itens": [
            "Critério de sucesso: uma única linha por pedido, sempre pela mesma regra.",
            "As regras foram escritas antes do robô (RN01 a RN03)."
          ]
        },
        "dados": {
          "texto": "Base exportada em Excel. Identifiquei as colunas de que a regra precisava:",
          "dicionario": [
            [
              "Base",
              "Coluna 4: Nº do pedido",
              "Agrupar registros"
            ],
            [
              "Base",
              "Coluna P.A.",
              "Filtrar PA/PASE"
            ],
            [
              "Base",
              "Coluna 12: Término",
              "Escolher a data mais recente"
            ],
            [
              "Base",
              "Coluna 0: Status",
              "Status final do pedido"
            ]
          ]
        },
        "preparar": {
          "texto": "O robô prepara os dados pedido a pedido:",
          "itens": [
            "Monta a lista de pedidos únicos.",
            "Filtra a tabela por pedido e pula tabelas vazias, sem erro.",
            "RN01: mantém só registros PA/PASE.",
            "RN02: encontra a maior data de término.",
            "RN03: detecta empates de data com status diferentes e trata o conflito."
          ]
        },
        "apresentar": {
          "texto": "Entrega pronta para uso:",
          "itens": [
            "Tabela de resultado com uma linha por pedido.",
            "Relatório gravado em nova planilha ao fim da execução."
          ]
        }
      },
      competencias: ["RPA desktop","Tradução de regras de negócio em lógica","Tratamento de exceções","Documentação de fluxo"],
      titulo: "Robô de consolidação de status",
      categoria: "Power Automate",
      destaque: true,
      status: "Protótipo funcional, ainda não implementado",
      resumo:
        "Robô no Power Automate Desktop que lê a base de pedidos, aplica três regras de negócio e grava um relatório consolidado por pedido.",
      problema:
        "Um mesmo pedido aparece em várias linhas da base, com status e datas de término diferentes. Consolidar à mão qual é o status válido de cada pedido era lento e sujeito a erro.",
      contexto:
        "Rotina de acompanhamento de pedidos entre Vendas e PCP, alimentada por planilhas exportadas do ERP.",
      solucao: [
        "Lê a planilha e monta a lista de pedidos únicos.",
        "Para cada pedido, filtra a tabela de dados e trata pedidos sem registro, sem quebrar o fluxo.",
        "RN01: filtra registros PA/PASE pela coluna correta.",
        "RN02: identifica a maior Data de Término do pedido.",
        "RN03: verifica se outros registros têm a mesma data e status divergentes, e trata o empate.",
        "Grava o relatório final em uma nova planilha, pronto para uso."
      ],
      ferramentas: ["Power Automate Desktop", "Excel", "DataTables", "Loops e condicionais", "Regras de negócio documentadas"],
      desafios: [
        "Evitar erro ao acessar linhas de tabelas vazias: o fluxo pula para o próximo pedido.",
        "Transformar regras que estavam na cabeça das pessoas em regras escritas (RN01 a RN03).",
        "Organizar 89 ações em blocos comentados para facilitar manutenção."
      ],
      resultados: [
        "Um status confiável por pedido, sempre pela mesma regra.",
        "Fim da consolidação manual linha a linha.",
        "Regras de negócio documentadas e reaproveitáveis."
      ],
      indicadores: [
        { valor: "89", rotulo: "ações no fluxo" },
        { valor: "3", rotulo: "regras de negócio automatizadas" },
        { valor: "4", rotulo: "blocos: lista, tabela, processamento, relatório" }
      ],
      fluxo: [
        { tipo: "start", texto: "Iniciar" },
        { tipo: "auto", texto: "Ler planilha" },
        { tipo: "auto", texto: "Lista de pedidos únicos" },
        { tipo: "decision", texto: "Pedido tem registros?" },
        { tipo: "auto", texto: "RN01 Filtrar PA/PASE" },
        { tipo: "auto", texto: "RN02 Maior data de término" },
        { tipo: "decision", texto: "RN03 Empate com status diferente?" },
        { tipo: "end", texto: "Relatório consolidado" }
      ],
      galeria: [
        { src: "assets/img/projetos/rpa-status-01.png", legenda: "Início: leitura do Excel e lista de pedidos únicos" },
        { src: "assets/img/projetos/rpa-status-02.png", legenda: "Loop por pedido com validação" },
        { src: "assets/img/projetos/rpa-status-03.png", legenda: "Processamento por pedido e tratamento de tabela vazia" },
        { src: "assets/img/projetos/rpa-status-04.png", legenda: "RN01: filtro de registros PA/PASE" },
        { src: "assets/img/projetos/rpa-status-05.png", legenda: "RN02: maior data de término" },
        { src: "assets/img/projetos/rpa-status-06.png", legenda: "Comparação de datas" },
        { src: "assets/img/projetos/rpa-status-07.png", legenda: "RN03: empate de data com status divergente" },
        { src: "assets/img/projetos/rpa-status-08.png", legenda: "Contador de empates" },
        { src: "assets/img/projetos/rpa-status-09.png", legenda: "Inserção na tabela de resultado" },
        { src: "assets/img/projetos/rpa-status-10.png", legenda: "Gravação do relatório final" }
      ]
    },

    {
      id: "mapeamento-adv",
      analise: {
        "definir": {
          "pergunta": "Onde a rotina de Administração de Vendas perde tempo e gera retrabalho?",
          "itens": [
            "Escopo: do pedido implantado pelo comercial até a nota fiscal.",
            "Critério de sucesso: um retrato fiel do AS IS, validado pelas áreas, antes de propor qualquer solução."
          ]
        },
        "dados": {
          "texto": "Os dados de processo vieram de pessoas e sistemas:",
          "itens": [
            "Entrevistas com roteiro estruturado com a analista responsável e as áreas.",
            "Acompanhamento da rotina real.",
            "Sistemas e canais usados: ERP, planilhas, Gantt, Power BI e WhatsApp.",
            "Documentos impressos que circulavam entre as áreas."
          ]
        },
        "preparar": {
          "texto": "Organizei as informações brutas em uma estrutura analisável:",
          "itens": [
            "Cada tarefa ligada a uma área, um sistema e uma decisão.",
            "Cada desperdício classificado como retrabalho, espera ou reprocesso.",
            "Lacunas marcadas como “a confirmar”, sem suposições.",
            "Fatos (AS IS) separados de propostas (TO BE)."
          ]
        },
        "apresentar": {
          "texto": "Apresentei em níveis, para públicos diferentes:",
          "itens": [
            "Fluxograma simples, para a liderança.",
            "Raias por área, para alinhar responsabilidades.",
            "BPMN detalhado com 18 decisões, para quem vai automatizar.",
            "Mapa de 16 desperdícios e TO BE com 11 melhorias."
          ]
        }
      },
      competencias: ["Mapeamento AS IS / TO BE","Notação BPMN","Entrevista com áreas","Identificação de desperdícios (Lean)","Visão sistêmica de Supply Chain"],
      titulo: "Mapeamento AS IS / TO BE da rotina de vendas",
      categoria: "Análise de Processos",
      destaque: true,
      status: "Diagnóstico feito, proposta TO BE",
      resumo:
        "Mapeamento ponta a ponta da rotina de Administração de Vendas: 10 áreas, 18 decisões, 16 desperdícios classificados e 11 melhorias propostas.",
      problema:
        "A rotina de Administração de Vendas dependia de pedidos impressos em três horários fixos, conversas por WhatsApp sem registro, digitação dupla no ERP e em planilhas, e acompanhamento em três sistemas. Ninguém tinha a visão do processo inteiro.",
      contexto:
        "Do pedido implantado pelo comercial até a nota fiscal, passando por estoque de várias unidades, qualidade, separação, PCP, produção, logística e faturamento.",
      solucao: [
        "Roteiro de entrevista com a analista responsável e com as áreas envolvidas.",
        "Fluxograma simples ponta a ponta para alinhar a visão geral.",
        "Fluxograma funcional em raias por área.",
        "BPMN detalhado com 18 pontos de decisão, mensagens entre áreas e sistemas usados em cada tarefa.",
        "Mapa de desperdícios com legenda (retrabalho, espera, reprocesso) ligado a cada etapa.",
        "Proposta TO BE: fila digital sem impressão, status automático, transferências registradas no ERP e painel único com alerta de atraso."
      ],
      ferramentas: ["draw.io", "BPMN", "Entrevistas", "Lean (desperdícios)", "IA generativa para rascunho", "SAP", "Power BI"],
      desafios: [
        "Muito conhecimento tácito: a escolha da máquina dependia da experiência de cada pessoa.",
        "Lacunas de informação: marquei cada uma como 'a confirmar' para validar com as áreas.",
        "Separar o que é fato (AS IS) do que é hipótese (TO BE) para não vender solução antes do diagnóstico."
      ],
      resultados: [
        "Eliminar impressão de pedidos e o transporte de papel até a logística.",
        "Acabar com a digitação dupla de status e de peso.",
        "Substituir três fontes de acompanhamento por um painel único com alerta.",
        "Base para priorizar as automações (Auditoria Gantt × SAP e robôs)."
      ],
      indicadores: [
        { valor: "10", rotulo: "áreas mapeadas em raias" },
        { valor: "18", rotulo: "pontos de decisão no BPMN" },
        { valor: "16", rotulo: "desperdícios classificados" },
        { valor: "11", rotulo: "melhorias propostas no TO BE" }
      ],
      desperdicios: [
        { tipo: "Retrabalho", texto: "Impressão de todos os pedidos do horário" },
        { tipo: "Espera", texto: "Pedido aguarda a próxima janela de impressão (3 por dia)" },
        { tipo: "Retrabalho", texto: "Transferência entre unidades combinada por WhatsApp" },
        { tipo: "Reprocesso", texto: "Vai-e-volta Vendedor, Qualidade e Vendas para definir o lote" },
        { tipo: "Retrabalho", texto: "Peso do sistema reescrito à mão no papel da separação" },
        { tipo: "Reprocesso", texto: "Status atualizado duas vezes: ERP e planilha" },
        { tipo: "Espera", texto: "Acompanhamento em três fontes, sem alerta" },
        { tipo: "Retrabalho", texto: "Peso digitado manualmente na planilha de faturamento" },
        { tipo: "Espera", texto: "Documento físico levado à logística, sem confirmação" }
      ],
      fluxoAsIs: [
        { tipo: "start", texto: "Pedido no ERP" },
        { tipo: "waste", texto: "Imprimir em horário fixo" },
        { tipo: "decision", texto: "Estoque cobre?" },
        { tipo: "waste", texto: "WhatsApp com outras unidades" },
        { tipo: "waste", texto: "Status no ERP e na planilha" },
        { tipo: "waste", texto: "Acompanhar em 3 fontes" },
        { tipo: "waste", texto: "Digitar peso no faturamento" },
        { tipo: "end", texto: "Papel até a logística" }
      ],
      fluxo: [
        { tipo: "start", texto: "Pedido com lote obrigatório" },
        { tipo: "auto", texto: "Fila digital, sem impressão" },
        { tipo: "decision", texto: "Estoque cobre?" },
        { tipo: "auto", texto: "Transferência registrada no ERP" },
        { tipo: "auto", texto: "Programação vinculada ao pedido" },
        { tipo: "auto", texto: "Painel único com alerta" },
        { tipo: "auto", texto: "Status Pronto alimenta faturamento" },
        { tipo: "end", texto: "Confirmação digital à logística" }
      ],
      galeria: [
        { src: "assets/img/estagio/bpmn-raias.png", legenda: "BPMN com raias por área (visão geral do processo)" }
      ]
    },

    {
      id: "rpa-faturamento",
      analise: {
        "definir": {
          "pergunta": "Como eliminar a digitação manual de rota, pedido e peso no faturamento?",
          "itens": [
            "Origem: desperdício encontrado no mapeamento da rotina de vendas."
          ]
        },
        "dados": {
          "texto": "Modelo de faturamento em Excel e os dados do pedido a lançar.",
          "itens": [
            "Aba de destino e colunas do modelo identificadas."
          ]
        },
        "preparar": {
          "texto": "Cuidados para não corromper o arquivo:",
          "itens": [
            "Localiza a primeira linha livre antes de gravar.",
            "Grava cada dado na coluna certa do modelo."
          ]
        },
        "apresentar": {
          "texto": "Planilha preenchida, salva e fechada, pronta para a logística.",
          "itens": []
        }
      },
      competencias: ["RPA desktop","Automação de Excel","Ligação entre diagnóstico e solução"],
      titulo: "Robô de preenchimento do faturamento",
      categoria: "Power Automate",
      destaque: false,
      status: "Protótipo, ainda não implementado",
      resumo:
        "Fluxo enxuto que abre o modelo de faturamento, grava os dados nas posições certas, salva e fecha, sem digitação manual.",
      problema:
        "O mapeamento mostrou que rota, pedido-linha e peso eram digitados à mão na planilha de faturamento, com risco de erro de peso.",
      contexto:
        "Etapa final da rotina de vendas, antes de o pedido seguir para logística e emissão de nota fiscal.",
      solucao: [
        "Abre o modelo de faturamento e ativa a aba correta.",
        "Encontra a primeira linha livre automaticamente.",
        "Grava os dados nas colunas do modelo.",
        "Salva e fecha o arquivo, pronto para a próxima etapa."
      ],
      ferramentas: ["Power Automate Desktop", "Excel"],
      desafios: [
        "Escrever sempre na primeira linha livre, sem sobrescrever lançamentos anteriores."
      ],
      resultados: [
        "Ataca diretamente um desperdício encontrado no mapeamento: peso digitado à mão.",
        "Mesmo formato de lançamento todas as vezes."
      ],
      indicadores: [
        { valor: "10", rotulo: "ações, do início ao fim" },
        { valor: "0", rotulo: "digitação manual no lançamento" }
      ],
      fluxo: [
        { tipo: "start", texto: "Iniciar" },
        { tipo: "auto", texto: "Abrir modelo" },
        { tipo: "auto", texto: "Primeira linha livre" },
        { tipo: "auto", texto: "Gravar dados" },
        { tipo: "end", texto: "Salvar e fechar" }
      ],
      galeria: [
        { src: "assets/img/projetos/rpa-faturamento.png", legenda: "Fluxo completo no Power Automate Desktop" }
      ]
    },

    {
      id: "fluxos-power-automate",
      analise: {
        "definir": {
          "pergunta": "Como avisar a equipe e rodar análises sem depender de alguém lembrar de fazer isso?",
          "itens": [
            "Critério de sucesso: a informação chega na hora certa e a análise roda sozinha quando os dados mudam."
          ]
        },
        "dados": {
          "texto": "Os fluxos trabalham com os dados do acompanhamento de pedidos:",
          "dicionario": [
            ["Fluxo de alerta", "StatusAtual", "Situação atual do pedido"],
            ["Fluxo de alerta", "DataTermino", "Data prevista de término"],
            ["Fluxo de alerta", "PedidoID", "Identificação do pedido no e-mail"],
            ["Fluxo do Gantt", "Arquivo do Gantt (nuvem)", "Gatilho: dispara quando o arquivo é modificado"]
          ]
        },
        "preparar": {
          "texto": "Cuidados para o fluxo ser confiável:",
          "itens": [
            "Variáveis inicializadas antes da condição, para a regra ficar clara e fácil de manter.",
            "Atraso antes de processar, para o arquivo terminar de ser salvo.",
            "Bloco de escopo (try) para isolar e tratar erros na execução dos scripts."
          ]
        },
        "apresentar": {
          "texto": "O resultado chega a quem precisa:",
          "itens": [
            "E-mail enviado pelo Outlook quando a condição do pedido é atendida.",
            "Scripts do Excel (Office Scripts) executados automaticamente para analisar o Gantt."
          ]
        }
      },
      competencias: ["Automação em nuvem", "Gatilhos de arquivo", "Office Scripts", "Tratamento de erros", "Notificações automáticas"],
      titulo: "Fluxos Power Automate na nuvem",
      categoria: "Power Automate",
      destaque: false,
      status: "Protótipo, ainda não implementado",
      resumo:
        "Dois fluxos em nuvem: um envia alerta por e-mail conforme o status do pedido, e outro roda a análise do Gantt sozinho quando o arquivo é modificado.",
      problema:
        "Acompanhar mudanças de status e rodar a análise do Gantt dependia de alguém lembrar de verificar e executar tudo manualmente.",
      contexto:
        "Arquivos de acompanhamento de pedidos armazenados na nuvem (OneDrive/SharePoint), usados por Vendas e PCP.",
      solucao: [
        "Fluxo de alerta: recebe status atual, data de término e número do pedido em variáveis, avalia uma condição e envia e-mail (Outlook) quando ela é verdadeira.",
        "Fluxo do Gantt: disparado quando o arquivo é modificado, aguarda alguns instantes e executa, dentro de um bloco de tratamento de erros, os scripts que analisam o Gantt.",
        "Integração entre Power Automate e Excel por meio de Office Scripts."
      ],
      ferramentas: ["Power Automate", "Office Scripts", "Excel", "Outlook", "OneDrive / SharePoint"],
      desafios: [
        "Evitar que o fluxo rode antes de o arquivo terminar de ser salvo.",
        "Não deixar um erro no script interromper tudo sem aviso."
      ],
      resultados: [
        "Análise do Gantt executada automaticamente a cada alteração.",
        "Equipe avisada por e-mail sem precisar conferir manualmente."
      ],
      indicadores: [
        { valor: "2", rotulo: "fluxos em nuvem" },
        { valor: "1", rotulo: "integração com Office Scripts" }
      ],
      fluxo: [
        { tipo: "start", texto: "Arquivo do Gantt modificado" },
        { tipo: "auto", texto: "Atraso" },
        { tipo: "auto", texto: "Escopo try" },
        { tipo: "auto", texto: "Script AnalisarGantt" },
        { tipo: "end", texto: "Análise atualizada" }
      ],
      galeria: [
        { src: "assets/img/estagio/fluxo-gantt-office-scripts.png", legenda: "Fluxo disparado quando o arquivo do Gantt é modificado: atraso, escopo try e Office Scripts" },
        { src: "assets/img/estagio/fluxo-alerta-email.png", legenda: "Fluxo de alerta: variáveis do pedido, condição e envio de e-mail" }
      ]
    },

    {
      id: "dashboard-power-bi",
      analise: {
        "definir": {
          "pergunta": "Quantos pedidos estão com status divergente entre SAP e Gantt, de que tipo e sob responsabilidade de quem?",
          "itens": [
            "Partes interessadas: Vendas, PCP e liderança de Supply Chain."
          ]
        },
        "dados": {
          "texto": "Resultados da auditoria Gantt × SAP: cada pedido auditado com data, responsável, categoria da não conformidade e status no Gantt.",
          "itens": []
        },
        "preparar": {
          "texto": "Tratamento e modelagem com Power Query antes da visualização.",
          "itens": [
            "Padronização das categorias de não conformidade e dos responsáveis por máquina.",
            "Medidas de percentual de conformidade e não conformidade."
          ]
        },
        "apresentar": {
          "texto": "Uma página de análise com cartões, filtros e três gráficos:",
          "itens": [
            "Cartões: total de auditorias, não conformidades, % de conformidade, % de não conformidade e pendências críticas.",
            "Filtros por data, responsável, categoria e status no Gantt.",
            "Evolução mensal, % de não conformidade por categoria e ocorrências por responsável."
          ]
        }
      },
      competencias: ["Modelagem de dados", "Medidas e KPIs", "Segmentação de dados", "Storytelling com dados"],
      titulo: "Dashboard Power BI: Análise de Status SAP",
      categoria: "Power BI",
      destaque: false,
      status: "Protótipo, ainda não implementado",
      resumo:
        "Painel no Power BI que transforma o resultado da auditoria Gantt × SAP em indicadores de conformidade, com filtros por data, responsável, categoria e status.",
      problema:
        "O resultado da auditoria ficava em planilha, sem uma visão rápida de quantos pedidos estavam com problema, de que tipo e sob responsabilidade de quem.",
      contexto:
        "Acompanhamento da carteira de pedidos por Vendas, PCP e liderança de Supply Chain.",
      solucao: [
        "Tratamento das bases com Power Query.",
        "Cartões de total de auditorias, não conformidades, % de conformidade e pendências críticas.",
        "Segmentações por data, responsável, categoria e status no Gantt.",
        "Gráficos de evolução mensal, não conformidade por categoria e ocorrências por responsável."
      ],
      ferramentas: ["Power BI", "Power Query", "Excel"],
      desafios: [
        "Definir indicadores que respondem às perguntas reais da equipe.",
        "Deixar claro, em poucos segundos, onde está o problema."
      ],
      resultados: [
        "Visibilidade da conformidade dos pedidos em um só lugar.",
        "Responsáveis identificados para agir rápido."
      ],
      indicadores: [
        { valor: "5", rotulo: "cartões de indicadores" },
        { valor: "4", rotulo: "filtros" },
        { valor: "3", rotulo: "gráficos de análise" }
      ],
      kpisLista: ["Total de auditorias", "Não conformidades", "% de conformidade", "Pendências críticas", "Ocorrências por responsável"],
      fluxo: [
        { tipo: "start", texto: "Resultado da auditoria" },
        { tipo: "auto", texto: "Power Query" },
        { tipo: "auto", texto: "Modelo e medidas" },
        { tipo: "end", texto: "Dashboard de decisão" }
      ],
      galeria: [
        { src: "assets/img/estagio/powerbi-status-sap.png", legenda: "Página “Análise Status SAP” no Power BI (dados anonimizados)" }
      ]
    },

    {
      id: "laboratorio-power-automate",
      competencias: ["Gatilhos e ações", "Variáveis e expressões", "Condições e Switch", "Loops", "Aprovações", "Integração com Forms e Outlook"],
      titulo: "Laboratório de Power Automate",
      categoria: "Power Automate",
      destaque: false,
      status: "Curso concluído com certificado",
      resumo:
        "Fluxos que construí no curso completo de Power Automate (17,5 h, Udemy): de variáveis e condições até aprovações com Microsoft Forms.",
      problema: "", contexto: "",
      solucao: [
        "Previsão do tempo: busca a previsão do dia, monta a mensagem com Compor e envia por e-mail.",
        "Previsão do tempo com parâmetros informados na execução.",
        "Variáveis: inicialização, incremento e decremento.",
        "Condições: verifica se o número é positivo e usa Switch para somar, subtrair, multiplicar ou dividir.",
        "Loop “Faça até”: incrementa uma variável e adiciona resultados a um array.",
        "Solicitação de pessoas: nova resposta no Microsoft Forms inicia uma aprovação e segue caminhos diferentes conforme a decisão."
      ],
      ferramentas: ["Power Automate", "Microsoft Forms", "Aprovações", "Outlook", "Expressões"],
      desafios: [
        "Entender a lógica de cada tipo de ação antes de aplicar em problemas reais do trabalho."
      ],
      resultados: [
        "Base sólida para os fluxos do estágio, como o alerta por e-mail e a execução automática da análise do Gantt."
      ],
      indicadores: [
        { valor: "17,5 h", rotulo: "de curso concluído" },
        { valor: "9", rotulo: "fluxos de exercício" }
      ],
      fluxo: [
        { tipo: "start", texto: "Nova resposta no Forms" },
        { tipo: "auto", texto: "Obter detalhes da resposta" },
        { tipo: "auto", texto: "Iniciar e aguardar aprovação" },
        { tipo: "decision", texto: "Aprovado?" },
        { tipo: "end", texto: "Seguir o caminho da decisão" }
      ],
      galeria: [
        { src: "assets/img/curso-pa/wf12-forms-aprovacao.png", legenda: "Forms + aprovação + condição" },
        { src: "assets/img/curso-pa/wf09-condicoes-switch.png", legenda: "Condição e Switch: calculadora" },
        { src: "assets/img/curso-pa/wf10-loop-faca-ate.png", legenda: "Loop “Faça até” com array" },
        { src: "assets/img/curso-pa/wf08-variaveis.png", legenda: "Variáveis: incremento e decremento" },
        { src: "assets/img/curso-pa/wf04-previsao-email.png", legenda: "Previsão do tempo enviada por e-mail" },
        { src: "assets/img/curso-pa/wf03-previsao-compor.png", legenda: "Previsão do tempo com Compor" },
        { src: "assets/img/curso-pa/lista-de-fluxos.png", legenda: "Meus fluxos do curso e do estágio" }
      ],
      certificado: { src: "assets/img/certificados/power-automate-udemy.jpg", link: "https://ude.my/UC-cc62bbc0-4052-4c95-8d14-fa522c24e06a" }
    }
  ],

  certificacoes: {
    cursos: [
      { nome: "Power Automate: Curso Completo", orgao: "Udemy, Ricardo Pacheco", situacao: "Concluído em 24/11/2026 (17,5 h)", link: "https://ude.my/UC-cc62bbc0-4052-4c95-8d14-fa522c24e06a", imagem: "assets/img/certificados/power-automate-udemy.jpg" },
      { nome: "Tratativas de Dados no Excel via Power Query", orgao: "Udemy, Pedro Henrique Franco", situacao: "Concluído em 24/11/2026 (4,5 h)", link: "https://ude.my/UC-502f6023-c5da-446e-904f-76d8eee0ed4c", imagem: "assets/img/certificados/power-query-udemy.jpg" },
      { nome: "Automação SAP com Excel VBA e GUI Scripting: Do 0 ao Expert", orgao: "Udemy, Edmauro Américo Américo", situacao: "Concluído em 09/11/2026 (4,5 h)", link: "https://ude.my/UC-bac29f20-8e3e-4c61-a1ff-a694930bb367", imagem: "assets/img/certificado-sap-vba.jpg" },
      { nome: "Prompting Responsável: Maximizar a IA no seu negócio", orgao: "Santander Open Academy, conteúdo Microsoft e Founderz", situacao: "Concluído em 17/09/2026 (8 h)", serie: "OA-2026-0917003206700", imagem: "assets/img/certificados/prompting-responsavel-microsoft.jpg" },
      { nome: "Fundamentos de segurança cibernética", orgao: "Santander Open Academy, conteúdo IBM", situacao: "Concluído em 16/09/2026 (1,5 h)", serie: "OA-2026-0916003203181", imagem: "assets/img/certificados/seguranca-cibernetica-ibm.jpg" },
      { nome: "Fundamentos da Análise de Dados", orgao: "Cisco Networking Academy", situacao: "Curso" },
      { nome: "Trilhas Microsoft Learn", orgao: "Microsoft", situacao: "Estudo contínuo" }
    ],
    proximas: [
      { codigo: "PL-900", nome: "Power Platform Fundamentals" },
      { codigo: "PL-300", nome: "Power BI Data Analyst" },
      { codigo: "DP-900", nome: "Azure Data Fundamentals" }
    ]
  },

  interesses: [
    { nome: "Fé", texto: "Minha base. O versículo de Salmos 121 me acompanha.", icone: "fe" },
    { nome: "Fotografia", texto: "Ensaios femininos em estúdio, onde comecei a trabalhar.", icone: "foto" },
    { nome: "Poesia", texto: "Escrevo e publico no app Meu Poema.", icone: "poesia" },
    { nome: "Música gospel", texto: "Principalmente artistas gospel dos EUA.", icone: "musica" },
    { nome: "Filmes e séries", texto: "Romance, ficção científica, filmes poéticos e histórias com mensagem para a vida.", icone: "filme" },
    { nome: "Games", texto: "FPS, battle royale e Minecraft.", icone: "game" },
    { nome: "Futebol", texto: "Curto acompanhar.", icone: "bola" }
  ],

  resultadosObtidos: [
    "Redução de atividades manuais",
    "Maior confiabilidade das informações",
    "Visibilidade dos pedidos",
    "Apoio à tomada de decisão",
    "Padronização dos processos"
  ],

  proximosProjetos: [
    { nome: "Integração entre Make e Power Platform", tipo: "auto" },
    { nome: "Dashboards avançados no Power BI", tipo: "dados" },
    { nome: "Aplicações com Power Apps", tipo: "ti" },
    { nome: "Automações utilizando IA", tipo: "ia" },
    { nome: "Soluções web para gestão operacional", tipo: "negocio" }
  ],

  // Conhecimentos técnicos, agrupados
  conhecimentos: [
    { grupo: "Automação", itens: [
      { nome: "Power Automate", texto: "Robôs desktop com loops, regras e DataTables." },
      { nome: "VBA", texto: "Macros de auditoria, validação, logs e eventos." },
      { nome: "Make", texto: "Cenários de integração entre aplicativos." },
      { nome: "Automações empresariais", texto: "Da ideia ao fluxo documentado." }
    ]},
    { grupo: "Dados", itens: [
      { nome: "Excel Avançado", texto: "Fórmulas complexas, painéis e validações." },
      { nome: "Power Query", texto: "Consolidação e tratamento de bases." },
      { nome: "Power BI", texto: "Dashboards de status, atrasos e lead time." },
      { nome: "Análise de Dados", texto: "Cruzamento de bases e indicadores." },
      { nome: "KPIs", texto: "Indicadores de performance operacional." }
    ]},
    { grupo: "Plataforma", itens: [
      { nome: "Power Platform", texto: "Visão integrada de Power BI e Power Automate." },
      { nome: "SharePoint", texto: "Arquivos compartilhados como fonte de automação." },
      { nome: "Microsoft 365", texto: "Excel, Outlook, Teams e OneDrive no dia a dia." }
    ]},
    { grupo: "Negócio", itens: [
      { nome: "Supply Chain", texto: "Pedidos, estoque, PCP, separação e faturamento." },
      { nome: "SAP", texto: "Consulta e extração de bases de pedidos." },
      { nome: "Processos Logísticos", texto: "Mapeamento AS IS / TO BE e BPMN." }
    ]},
    { grupo: "Integração e APIs", itens: [
      { nome: "APIs REST e SOAP", texto: "Conhecimento prático e acadêmico." },
      { nome: "Webhooks e payloads", texto: "JSON e XML." },
      { nome: "iPaaS", texto: "Introdução à plataforma Digibee." },
      { nome: "SAP GUI Scripting", texto: "Automação do SAP com Excel VBA." }
    ]},
    { grupo: "Programação", itens: [
      { nome: "Java", texto: "Orientação a objetos e lógica estruturada." },
      { nome: "Python", texto: "Scripts e automações." },
      { nome: "C# / .NET", texto: "Base de desenvolvimento." },
      { nome: "SQL", texto: "Noções de bancos de dados." },
      { nome: "Git e GitHub", texto: "Controle de versão." },
      { nome: "BPMN e UML", texto: "Modelagem de processos e sistemas." }
    ]},
    { grupo: "IA", itens: [
      { nome: "Inteligência Artificial", texto: "IA generativa para prototipar, revisar código e documentar, com prompting responsável." }
    ]}
  ],

  // O que estou aprendendo (estado: "aplicando" | "praticando" | "estudando")
  aprendendo: [
    { nome: "Excel", estado: "aplicando" },
    { nome: "VBA", estado: "aplicando" },
    { nome: "Automação", estado: "aplicando" },
    { nome: "Power BI", estado: "aplicando" },
    { nome: "Power Automate", estado: "aplicando" },
    { nome: "IA Generativa", estado: "aplicando" },
    { nome: "SAP GUI Scripting", estado: "aplicando" },
    { nome: "Power Query", estado: "aplicando" },
    { nome: "APIs REST", estado: "praticando" },
    { nome: "Make", estado: "estudando" },
    { nome: "Integrações", estado: "estudando" },
    { nome: "Análise de Processos", estado: "praticando" }
  ],

  diferenciais: [
    "Identificar gargalos",
    "Mapear processos",
    "Criar soluções digitais",
    "Desenvolver protótipos rapidamente",
    "Usar IA como acelerador de produtividade",
    "Aprender tecnologias de forma autônoma"
  ],

  curiosidades: [
    "Gosto de transformar tarefas manuais em processos automáticos.",
    "Tenho curiosidade por novas tecnologias.",
    "Estou sempre aprendendo ferramentas digitais.",
    "Procuro unir negócios, dados e automação.",
    "Gosto de resolver problemas com tecnologia."
  ],

  poema: {
    titulo: "A infância do futuro próximo",
    versos: [
      "a vida que tanto me via,",
      "aptidão de achar que enfim talvez não a desejaria,",
      "o olhar da escravidão de quem não conseguia",
      "olhar para o círculo crido, a junção da criatura,",
      "me reconhecer que tudo a encontrar",
      "se tem a achar no fim"
    ]
  }
};
