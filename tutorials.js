/* Dados das aulas do Tutorial P7Store
 * Cada aula segue o fluxo real dos apps (auditado no código).
 * meta = o que você vai aprender | passos = passo a passo numerado
 * leia ao lado do app aberto: use o botão "Abrir o app" para abrir em outra aba.
 */
window.TUTORIALS = [
  {
    id: "p7store-basico",
    app: "P7Store",
    aula: "1 de 2",
    titulo: "Configuração inicial",
    cor: "indigo",
    meta: "Criar sua conta, cadastrar a empresa e liberar o acesso dos funcionários.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Crie sua conta e entre",
        d: "Abra o P7Store no navegador e crie a conta do dono da empresa (ou faça login se já tem). O acesso pode ser com e-mail e senha ou com o Google."
      },
      {
        t: "Encontre as instruções iniciais",
        d: "Depois de entrar, procure a lâmpada de instruções iniciais (Ajuda e Tutoriais). Clicando nela, o próprio sistema te guia pelos campos de configuração, seção por seção, mostrando o que preencher em cada um."
      },
      {
        t: "Entre na engrenagem de configurações",
        d: "Clique na engrenagem (Configurações). É lá que ficam todas as configurações da sua empresa. Siga as telas abaixo na ordem que aparecem — o tutorial guiado e a engrenagem levam aos mesmos lugares."
      },
      {
        t: "Dados Gerais",
        d: "Preencha o nome da empresa, ramo de atuação, CNPJ, telefone e endereço. Esses dados aparecem na identidade do sistema e nas notas e relatórios."
      },
      {
        t: "Configurações Pix",
        d: "Cadastre a chave Pix que receberá os pagamentos dos clientes (CPF, CNPJ, e-mail, telefone ou chave aleatória). Informe também o nome do recebedor e a cidade."
      },
      {
        t: "Funcionários",
        d: "Crie os funcionários informando nome, CPF e senha. Marque \u201cGerente\u201d quando quiser que ele gerencie a empresa. O custo diário é usado nos cálculos."
      },
      {
        t: "Equipes",
        d: "Organize funcionários em equipes com nome e cor. Isso facilita distribuir tarefas e dividir as áreas do negócio."
      },
      {
        t: "Perfis de Acesso",
        d: "Defina perfis escolhendo quais apps cada funcionário pode usar. É assim que você controla o que cada pessoa faz no sistema."
      },
      {
        t: "Notificações",
        d: "Ative as notificações que a empresa deve receber (novos pedidos, aprovação de pagamento e outras). Permita as notificações no navegador para recebê-las."
      }
    ]
  },
  {
    id: "p7store-avancado",
    app: "P7Store",
    aula: "2 de 2",
    titulo: "Configurações avançadas",
    cor: "indigo",
    meta: "Conectar IA, WhatsApp, ferramentas e modelos — o coração dos apps inteligentes.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Integrações de IA",
        d: "Cadastre as IAs da sua empresa. Para cada uma, escolha o provedor (OpenAI, Ollama e outros), o modelo, a API Key e a função. Depois é só selecioná-las nos apps."
      },
      {
        t: "Configurações WhatsApp",
        d: "Conecte a sua instância do WhatsApp informando a URL do servidor e a API Key. Configure o webhook para que o AtendIA receba e envie mensagens automaticamente."
      },
      {
        t: "Ferramentas MCP",
        d: "Adicione servidores MCP (Model Context Protocol) para dar às IAs acesso a ferramentas externas. Escolha o tipo (sse, stdio, http) e o endpoint de cada servidor."
      },
      {
        t: "Modelos",
        d: "Gerencie os modelos de IA. Detecte modelos instalados no seu servidor Ollama, instale do catálogo ou cadastre a URL manual de um servidor de modelos."
      }
    ]
  },
  {
    id: "digest",
    app: "Digest",
    aula: "Aula única",
    titulo: "Gestão de clientes e obras",
    cor: "azul",
    meta: "Cadastrar clientes e obras, lançar pedidos e exportar seus dados em Excel.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Entre no Digest pela loja",
        d: "Abra o P7Store e entre no app Digest. Na primeira tela você vê o Dashboard, com os indicadores gerais da empresa."
      },
      {
        t: "Cadastre um cliente",
        d: "Vá em Clientes e clique no botão + para abrir o formulário. Preencha nome (obrigatório), telefone, e-mail, empresa e endereço."
      },
      {
        t: "Crie uma obra",
        d: "Ainda na tela de Clientes, clique em Criar Obra. Escolha um cliente já cadastrado (ou crie um novo na hora), informe o nome da obra, endereço, valor do contrato e a modalidade (com material, sem material ou global)."
      },
      {
        t: "Lance pedidos de produção",
        d: "Na tela de Pedidos, vincule cada pedido a uma obra: status, datas de pedido/entrega, código do produto, descrição, ambiente e quantidades."
      },
      {
        t: "Acompanhe o financeiro",
        d: "Use Caixa para lançar entradas e saídas vinculadas a obras e Relatórios para DRE, BPO por obra, cobrança e backlog."
      },
      {
        t: "Exporte seus dados",
        d: "Nas telas de Clientes, Pedidos, Estoque, Caixa, Patrimônio e Relatórios há o botão de exportar. Um clique gera um arquivo Excel (.xlsx) com os dados da tela — perfeito para backup, planilha ou envio para o contador."
      }
    ]
  },
  {
    id: "precicalc",
    app: "Precicalc",
    aula: "Aula única",
    titulo: "Precificar e gerar propostas",
    cor: "ambar",
    meta: "Montar propostas comerciais com preço justo, PDF e PIX, direto para o cliente.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Conheça as três abas",
        d: "O Precicalc tem Configuração, Cálculo e Histórico. A Configuração já vem com os dados da sua empresa vindos do P7Store."
      },
      {
        t: "Revise a configuração",
        d: "Na aba Configuração, confira impostos (PIS, COFINS, IRPJ, CSLL, ICMS/ISS), custo fixo mensal, lucro desejado e a tabela CMOI (custo médio por item). Isso mantém sua precificação saudável."
      },
      {
        t: "Preencha o cliente e a obra",
        d: "Na aba Cálculo, informe os dados do cliente (empresa, nome, telefone, obra e o serviço). Se o cliente já existe, use a busca para selecioná-lo."
      },
      {
        t: "Informe os custos do orçamento",
        d: "Preencha custo de material, tempo de execução (dias + horas), mão de obra adicional, custos variáveis e o número de itens do serviço."
      },
      {
        t: "Veja as três modalidades calculadas",
        d: "Com os mesmos custos, o app calcula automaticamente: Com Material (markup sobre tudo), Sem Material (markup só na mão de obra) e Proposta Global (material à parte). Escolha a que faz sentido e salve o orçamento."
      },
      {
        t: "Gerencie no Histórico",
        d: "Na aba Histórico, cada orçamento vira um card: baixe o PDF da proposta, gere o PIX (QR Code copia-e-cola), edite, duplique ou altere o status (rascunho, enviado, aguardando resposta, aprovado)."
      },
      {
        t: "Na aprovação, o fluxo segue sozinho",
        d: "Ao aprovar uma proposta, o Precicalc cria a obra e a ordem de serviço no Digest automaticamente. O próximo app do fluxo já recebe o que foi aprovado — sem redigitar nada."
      }
    ]
  },
  {
    id: "fulltame",
    app: "FullTame",
    aula: "Aula única",
    titulo: "Ponto digital e execução de serviços",
    cor: "verde",
    meta: "Bater ponto como CLT e, se for PJ, marcar a execução entre os serviços.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Entre com o seu link ou token",
        d: "O funcionário acessa o FullTame pelo link de acesso que recebeu da empresa. A tela \u201cHoje\u201d é o painel principal do dia."
      },
      {
        t: "CLT: bata seu ponto (entrada)",
        d: "Toque no botão central para registrar a entrada. O sistema marca o horário e a localização. O ponto alterna entre entrada e saída a cada toque — com limite de 6 batidas por dia."
      },
      {
        t: "CLT: registre a saída",
        d: "Ao terminar o expediente, toque de novo para registrar a saída. O resumo do dia compara o previsto pela sua jornada com o realizado."
      },
      {
        t: "PJ: marque a execução entre serviços",
        d: "No modo PJ (sem horário fixo), na entrada você escolhe a obra e a tarefa em andamento — ou descreve uma nova tarefa. Na saída, a execução daquela tarefa é finalizada e registrada."
      },
      {
        t: "Gerente: acompanhe no RH",
        d: "Na aba RH, o gerente vê faltas, horas extras e ajustes, e pode configurar a jornada de cada funcionário (dias de folga, entrada e saída — com até dois períodos por dia)."
      }
    ]
  },
  {
    id: "atendia",
    app: "AtendIA",
    aula: "Aula única",
    titulo: "Atendimento com IA no WhatsApp",
    cor: "roxo",
    meta: "Conectar o WhatsApp, deixar a IA responder e assumir quando precisar.",
    abrir: "https://p7store.vercel.app/auth",
    passos: [
      {
        t: "Entre no AtendIA pela loja",
        d: "Abra o P7Store e entre no AtendIA. Na primeira vez a tela apresenta um passo a passo de boas-vindas mostrando por onde começar."
      },
      {
        t: "Conecte o WhatsApp",
        d: "Vá em Configurações → WhatsApp. Informe a URL do servidor e a API Key da sua instância (Evolution API) e confira se ela aparece conectada. Sem isso as mensagens não chegam."
      },
      {
        t: "Mensagens chegam sozinhas",
        d: "Com o WhatsApp conectado, novas conversas aparecem automaticamente na central de atendimento, sem precisar digitar o contato."
      },
      {
        t: "Deixe a IA responder",
        d: "No modo de atendimento por IA, cada mensagem é respondida automaticamente seguindo o roteiro que você configurou. O cliente é atendido na hora, 24h."
      },
      {
        t: "Assuma quando precisar",
        d: "Quer falar com a pessoa? Alterne o chat para o modo humano. E, mesmo no manual, a IA te ajuda: ela sugere uma resposta pronta que você aceita com um clique."
      },
      {
        t: "Explore o que vem junto",
        d: "Além do chat: Pipeline de vendas para acompanhar oportunidades, Campanhas para disparar mensagens em lote e Tarefas e lembretes para não deixar nada passar."
      }
    ]
  }
];