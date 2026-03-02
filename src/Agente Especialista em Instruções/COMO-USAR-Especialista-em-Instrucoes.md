# 📖 Como Usar o Agente Especialista em Instruções

Este guia fornece instruções detalhadas sobre como usar o **Agente Especialista em Instruções**, um agente declarativo do Microsoft 365 Copilot projetado para ajudar usuários a criar, avaliar e refinar instruções claras, estruturadas e eficazes para outros agentes.

---

## 📋 Índice
- [Criando um Agente no Copilot Studio Lite - Passo a Passo Completo](#-criando-um-agente-no-copilot-studio-lite---passo-a-passo-completo)
  - [Pré-requisitos](#-pré-requisitos)
  - [Passo 1: Acessar o Copilot Studio Lite e Clicar em "Criar Agente"](#passo-1-acessar-o-copilot-studio-lite-e-clicar-em-criar-agente)
  - [Passo 2: Configurar o Agente (Aba Configurar)](#passo-2-configurar-o-agente-aba-configurar)
  - [Passo 3: Adicionar Origens de Conhecimento](#passo-3-adicionar-origens-de-conhecimento)
  - [Passo 4: Adicionar Recursos (Capacidades)](#passo-4-adicionar-recursos-capacidades)
  - [Passo 5: Configurar Prompts Iniciais](#passo-5-configurar-prompts-iniciais)
  - [Passo 6: Experimentar o Agente Especialista em Instruções (Painel de Teste)](#passo-6-experimentar-o-agente-especialista-em-instruções-painel-de-teste)
  - [Passo 7: Criar o Agente](#passo-7-criar-o-agente)
  - [Passo 8: Compartilhar o Agente](#passo-8-compartilhar-o-agente)
- [Diferenças entre Compartilhar e Publicar](#-diferenças-entre-compartilhar-e-publicar)
- [Gerenciar Agentes](#️-gerenciar-agentes)
- [Recursos Adicionais](#-recursos-adicionais)
- [Precisa de Ajuda?](#-precisa-de-ajuda)

---

## 🔧 Criando um Agente no Copilot Studio Lite - Passo a Passo Completo

### 📋 Pré-requisitos
- Acesso ao aplicativo Microsoft 365 Copilot
- Licença do Microsoft 365 Copilot **(apenas se for adicionar algum conhecimento)**

---

### Passo 1: Acessar o Copilot Studio Lite e Clicar em "Criar Agente"
1. Abra o aplicativo Microsoft 365 Copilot
2. No painel esquerdo, selecione **Criar agente**
3. Escolha entre **Descrever** ou **Configurar**

---

### Passo 2: Configurar o Agente (Aba Configurar)

**Configuração sugerida para o Agente Especialista em Instruções:**

| Campo | Valor |
|------:|:------|
| **Nome** | Especialista em Instruções |
| **Descrição** | Agente declarativo do Microsoft 365 Copilot projetado para ajudar usuários a criar instruções claras, estruturadas e eficazes para outros agentes. Ela orienta os usuários explicando os componentes essenciais das instruções de agentes declarativos — como Propósito, Diretrizes, Habilidades, Instruções passo a passo, Tratamento de erros, Ciclos de feedback, Exemplos de interação, Termos não padronizados e Acompanhamento e encerramento — conforme descrito na instrução. |
| **Instruções** | Copie o conteúdo do arquivo **[prompt- Instrucoes.md](prompt-Instrucoes.md)** que contém o prompt sistêmico completo do agente |

---
### Passo 3: Adicionar Origens de Conhecimento **(Opcional)**

Para criar agentes com detecção de contexto, você pode referenciar:

| Tipo de Origem | Descrição |
|----------------|-----------|
| **Itens do SharePoint** | Pastas e arquivos do SharePoint da organização |
| **Sites públicos** | Qualquer site público acessível |
| **Conectores Copilot** | Conectores Microsoft 365 Copilot pré-criados e ativados no tenant |

**Com licença de suplemento Microsoft 365 Copilot, você também pode:**
- Utilizar informações pessoais de trabalho (mensagens do Teams, e-mails do Outlook)

> 📖 Para mais detalhes, consulte: [Adicionar origens de conhecimento](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-add-knowledge)

---

### Passo 4: Adicionar Recursos (Capacidades)

Na seção **Capacidades** da aba Configurar, você pode adicionar:

| Capacidade | Descrição | Como Ativar |
|------------|-----------|-------------|
| **Interpretador de Código** | Resolve problemas matemáticos complexos, analisa dados e gera visualizações | Ative o botão "Criar documentos, gráficos e código" |
| **Gerador de Imagens** | Gera imagens com base nos pedidos do usuário | Ative o botão "Criar imagens" |


---

### Passo 5: Configurar Prompts Iniciais

Os prompts iniciais ajudam outros usuários a entender cenários comumente suportados pelo agente:

1. Cada prompt inicial tem um **titulo** e uma **mensagem**
2. Não há número mínimo de prompts iniciais
3. Quando clicados, os prompts invocam o pedido e iniciam a conversação

| Título | Mensagem |
|--------|----------|
| **Nova Instrução** | Quero criar um agente que ajude usuários a [descrever tarefa]. Você pode me ajudar a escrever instruções robustas para começar? |
| **Revise minha Instrução** | Aqui está um rascunho das instruções do meu agente. Você pode revisar para avaliar clareza, completude e aderência às melhores práticas? |
| **Chain-of-thought** | Quais elementos de chain-of-thought eu devo incluir para que este agente pense passo a passo? |
| **Simulação de resposta** | Você pode simular como o agente responderia usando essas instruções e sugerir melhorias com base nisso? |
| **Ajustar o tom** | Quais perguntas eu deveria me fazer para refinar o tom, o estilo de interação ou as limitações deste agente? |
| **Instruções de exemplo** | Você pode me mostrar um conjunto de instruções bem estruturado para um agente que faça [resumo, planejamento, responder perguntas etc.] |

> 💡 **Dica**: Use prompts iniciais para apresentar casos de uso sofisticados que os usuários talvez não saibam que são possíveis.



---

### Passo 6: Experimentar o Agente Especialista em Instruções (Painel de Teste)

O painel de teste no lado direito permite testar o agente enquanto você o cria:

1. O painel é ativado após o agente ter **nome**, **descrição** e **instruções**
2. O agente se comporta de acordo com as instruções configuradas
3. Selecione **Nova Conversa** para iniciar uma nova conversa e ver os prompts iniciais novamente

#### 🧪 Roteiro de Testes para o Agente Especialista em Instruções

Execute os seguintes testes para validar o funcionamento do agente:

**Teste 1: Criação de Instruções**
```
Prompt: "Quero criar um agente que analisa documentos jurídicos"
Resultado esperado: O agente gera um modelo inicial bem estruturado para um agente jurídico — e depois te faz uma pergunta essencial para completar.
```

**Teste 2: Avaliação de Instruções**
```
Prompt: "Avalie estas instruções de agente"
Resultado esperado: Identificação de lacunas e sugestões de melhoria
```

---

### Passo 7: Criar o Agente

Após testar e configurar o agente:

1. Selecione **Criar** no canto superior direito
2. Uma mensagem de confirmação indica que o agente foi criado
3. O agente é **privado** e só está disponível para você inicialmente

---

### Passo 8: Compartilhar o Agente

Após criar o agente, selecione o botão **Compartilhar** e escolha quem deve ter acesso:

| Opção de Compartilhamento | Descrição |
|---------------------------|-----------|
| **Qualquer pessoa na sua organização** | Qualquer pessoa no tenant pode usar o link de compartilhamento |
| **Usuários específicos na sua organização** | Usuários ou grupos específicos podem usar o link (especifique nomes, e-mails, grupos de segurança ou grupos Microsoft 365) |
| **Só você** | Somente o autor pode usar o agente (opção padrão) |

> 💡 **Nota**: Você pode compartilhar com até **98 usuários** especificando por nome ou e-mail.

#### Compartilhar Arquivos do SharePoint Automaticamente

Ao compartilhar um agente com **Usuários específicos**, você pode:
1. Selecionar as pastas e arquivos do SharePoint a compartilhar junto
2. O compartilhamento só funciona se você tiver permissões para atualizar as permissões de compartilhamento
3. Etiquetas de confidencialidade de arquivos são respeitadas

> ⚠️ **Importante**: O agente respeita os privilégios do usuário final. Se o usuário não tiver acesso a uma origem de conhecimento, o agente não incluirá esse conteúdo nas respostas.


### 📊 Diferenças entre Compartilhar e Publicar

| Aspecto | Compartilhar | Publicar |
|---------|--------------|----------|
| **Objetivo** | Colaboração, feedback, testes ou acesso limitado | Implementação formal para uso abrangente |
| **Audiência** | Até 98 usuários nomeados | Organização inteira ou canal específico |
| **Descoberta** | Privado, visível apenas para destinatários | Público (dentro do escopo), aparece no Arquivo de Agentes |
| **Governança** | Mínima, sem fluxos de aprovação | Pode exigir aprovação e controle de versões |
| **Integração** | Acesso direto apenas | Pode ser integrado no Teams, Copilot ou outras superfícies |

---

### 🛠️ Gerenciar Agentes

Para gerenciar seus agentes:

1. No Microsoft 365 Copilot, expanda o painel esquerdo e selecione **Todos os agentes**
2. Passe o cursor sobre o agente e clique com botão direito nas reticências (**...**)
3. Selecione a opção desejada:
   - **Editar**: Modifica o agente (alterações salvas automaticamente)
   - **Eliminar**: Remove permanentemente o agente
   - **Transferir .zip**: Baixa o pacote para sideload

> ⚠️ **Importante**: Após editar um agente, selecione **Atualizar** para disponibilizar as alterações aos usuários.

---

## 📚 Recursos Adicionais

- [Criar agentes com o Agent Builder no Microsoft 365 Copilot](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-build-agents)
- [Compartilhar e gerir agentes](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-share-manage-agents)
- [Adicionar origens de conhecimento](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-add-knowledge)
- [Modelos de agente](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-templates-overview)

---

## 💬 Precisa de Ajuda?

- 🐛 [Reportar um Bug](https://github.com/microsoft/copilotagentbox/issues)
- 💡 [Solicitar Feature](https://github.com/microsoft/copilotagentbox/issues/new)
- 💬 [Discussões da Comunidade](https://github.com/microsoft/copilotagentbox/discussions)

---

<div align="center">
  <p>📖 Documentação mantida pela comunidade Microsoft</p>

</div>
