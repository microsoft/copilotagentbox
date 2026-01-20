# 📖 Como Usar o Agente de Ata de Reunião

Este guia fornece instruções detalhadas sobre como usar o agente de Ata de Reunião do Copilot Agent Box, incluindo instalação, configuração, execução e melhores práticas.

---

## 📋 Índice

- [Criando um Agente no Copilot Studio Lite - Passo a Passo Completo](#-criando-um-agente-no-copilot-studio-lite---passo-a-passo-completo)
  - [Pré-requisitos](#-pré-requisitos)
  - [Passo 1: Acessar o Copilot Studio Lite e Clicar em "Criar Agente"](#passo-1-acessar-o-copilot-studio-lite-e-clicar-em-criar-agente)
  - [Passo 2: Configurar o Agente (Aba Configurar)](#passo-2-configurar-o-agente-aba-configurar)
  - [Passo 3: Adicionar Origens de Conhecimento](#passo-3-adicionar-origens-de-conhecimento)
  - [Passo 4: Adicionar Recursos (Capacidades)](#passo-4-adicionar-recursos-capacidades)
  - [Passo 5: Configurar Prompts Iniciais](#passo-5-configurar-prompts-iniciais)
  - [Passo 6: Experimentar o Agente de Ata de Reunião (Painel de Teste)](#passo-6-experimentar-o-agente-de-ata-de-reunião-painel-de-teste)
  - [Passo 7: Criar o Agente](#passo-7-criar-o-agente)
  - [Passo 8: Compartilhar o Agente](#passo-8-compartilhar-o-agente)
- [Diferenças entre Compartilhar e Publicar](#-diferenças-entre-compartilhar-e-publicar)
- [Gerenciar Agentes](#️-gerenciar-agentes)
- [Recursos Adicionais](#-recursos-adicionais)
- [Precisa de Ajuda?](#-precisa-de-ajuda)

---

## 🔧 Criando um Agente no Copilot Studio Lite - Passo a Passo Completo

Este guia detalha o processo completo desde o botão **"Criar Agente"** até **"Criar e Compartilhar"**, baseado na documentação oficial do [Copilot Studio Lite no Microsoft 365 Copilot](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-build-agents).

### 📋 Pré-requisitos

- Licença do Microsoft 365 Copilot
- Acesso ao aplicativo Microsoft 365 Copilot

> ⚠️ **Nota**: As capacidades dos agentes diferem com base na licença do usuário. Consulte a documentação para mais detalhes.

---

### Passo 1: Acessar o Copilot Studio Lite e Clicar em "Criar Agente"

1. **Abra o aplicativo Microsoft 365 Copilot**
2. No **painel esquerdo**, selecione **Criar agente**
3. Você pode criar o agente de duas formas:
   - Através da aba **Descrever** (usando linguagem natural)
   - Através da aba **Configurar** (compilação manual)

> 💡 **Dica**: A aba **Descrever** só está disponível quando o idioma do Microsoft 365 está definido para um dos idiomas suportados.

---

### Passo 2: Configurar o Agente (Aba Configurar)

A aba **Configurar** permite editar diretamente as informações do agente com mais controle e precisão:

| Campo | Descrição | Limite |
|-------|-----------|--------|
| **Nome** | Nome descritivo e exclusivo do agente | 30 caracteres |
| **Ícone** | Imagem PNG para representar o agente (fundo transparente recomendado) | 192x192 pixels, 1 MB |
| **Descrição** | Ajuda o LLM a identificar quando usar o agente. Deve ser curta, precisa e simples | 1.000 caracteres |
| **Instruções** | Instruções específicas que direcionam o comportamento do agente. Veja o prompt sistêmico em [prompt.md](prompt.md) | 8.000 caracteres |
| **Conhecimento** | Origens de conhecimento (SharePoint, sites, conectores) | Até 20 origens |
| **Recursos** | Capacidades adicionais como Interpretador de Código e Gerador de Imagens | - |
| **Prompts Iniciais** | Ajudam usuários a entender cenários suportados pelo agente | Sem limite mínimo |

#### 📝 Configuração do Agente de Ata de Reunião

Preencha os campos conforme abaixo para configurar o Agente de Ata de Reunião:

| Campo | Valor Sugerido |
|-------|----------------|
| **Nome** | `Agente Ata de Reunião` |
| **Ícone** | Use uma imagem PNG representativa (ex: ícone de documento ou bloco de notas) |
| **Descrição** | `Agente especializado em criar, estruturar e organizar atas de reunião. Registra participantes, pauta, decisões tomadas, ações pendentes e próximos passos de forma clara e profissional.` |
| **Instruções** | Copie o conteúdo do arquivo **[prompt.md](prompt.md)** que contém o prompt sistêmico completo do agente |

---

### Passo 3: Adicionar Origens de Conhecimento

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

1. Cada prompt inicial tem um **nome** e uma **descrição**
2. Não há número mínimo de prompts iniciais
3. Quando clicados, os prompts invocam o pedido e iniciam a conversação

> 💡 **Dica**: Use prompts iniciais para apresentar casos de uso sofisticados que os usuários talvez não saibam que são possíveis.

---

### Passo 6: Experimentar o Agente de Ata de Reunião (Painel de Teste)

O painel de teste no lado direito permite testar o agente enquanto você o cria:

1. O painel é ativado após o agente ter **nome**, **descrição** e **instruções**
2. O agente se comporta de acordo com as instruções configuradas
3. Selecione **Nova Conversa** para iniciar uma nova conversa e ver os prompts iniciais novamente

#### 🧪 Roteiro de Testes para o Agente de Ata de Reunião

Execute os seguintes testes para validar o funcionamento do agente:

**Teste 1: Criação de Nova Ata**
```
Prompt: "Preciso criar uma ata para a reunião de planejamento trimestral que aconteceu hoje às 14h"
Resultado esperado: O agente deve solicitar informações como participantes, pauta e decisões
```

**Teste 2: Registro de Participantes**
```
Prompt: "Participaram da reunião: João Silva (Gerente de Projetos), Maria Santos (Analista), Pedro Costa (Desenvolvedor) e Ana Lima (PO)"
Resultado esperado: O agente deve registrar corretamente os participantes e seus cargos
```

**Teste 3: Registro de Decisões**
```
Prompt: "As decisões tomadas foram: aprovar o orçamento do Q2, iniciar o projeto Alpha em março e contratar 2 novos desenvolvedores"
Resultado esperado: O agente deve listar as decisões de forma clara e estruturada
```

**Teste 4: Registro de Ações e Responsáveis**
```
Prompt: "João ficou responsável por enviar o cronograma até sexta-feira. Maria vai preparar o relatório de custos para a próxima semana"
Resultado esperado: O agente deve criar uma lista de ações com responsáveis e prazos
```

**Teste 5: Geração da Ata Completa**
```
Prompt: "Gere a ata completa da reunião"
Resultado esperado: O agente deve consolidar todas as informações em um documento estruturado com: data, participantes, pauta, decisões, ações e próximos passos
```

**Teste 6: Edição de Informações**
```
Prompt: "Corrija o prazo do João para segunda-feira ao invés de sexta-feira"
Resultado esperado: O agente deve atualizar a informação mantendo o restante da ata intacto
```

> ⚠️ **Limitações do painel de teste**: Como o agente ainda não foi criado, algumas funcionalidades não estão disponíveis (compartilhar pedidos, fornecer comentários, @mention outros agentes).

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

---
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
  <p><a href="../README.md">← Voltar para o README principal</a></p>
</div>
