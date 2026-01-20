# 🎧 Agente de Suporte ao Cliente

Agente especializado em atendimento e suporte ao cliente, projetado para automatizar o processo de triagem, diagnóstico e resolução de tickets de suporte.

---

## 📋 Visão Geral

O Agente de Suporte ao Cliente utiliza IA para:
- 🎯 Classificar automaticamente tickets por categoria e prioridade
- 🔍 Diagnosticar problemas com base em sintomas relatados
- 💡 Fornecer soluções passo a passo
- 📚 Buscar em base de conhecimento para respostas precisas
- ⚡ Escalar problemas complexos para especialistas humanos

---

## ✨ Características

### Classificação Inteligente
- Categorização automática (Técnico, Faturamento, Geral)
- Definição de prioridade (Crítica, Alta, Média, Baixa)
- Roteamento para equipe apropriada

### Diagnóstico Avançado
- Análise de sintomas e contexto
- Identificação de causa raiz
- Sugestão de soluções conhecidas

### Integração com Base de Conhecimento
- Busca semântica em documentação
- Referência a artigos relevantes
- Aprendizado contínuo com novas soluções

### Gestão de SLA
- Monitoramento de tempo de resposta
- Alertas de tickets próximos ao vencimento
- Relatórios de performance

---

## 🚀 Como Usar

### Instalação

```bash
# Navegue até o diretório do agente
cd examples/agent-suporte

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais
```

### Configuração

Edite o arquivo `config.yaml`:

```yaml
agent:
  name: "Agente de Suporte - Sua Empresa"
  type: "support"

support_agent:
  ticket_classification:
    enabled: true
    categories:
      - "technical"
      - "billing"
      - "general"
  
  knowledge_base:
    enabled: true
    url: "https://kb.suaempresa.com"
  
  escalation:
    threshold: "high"
    notification_email: "suporte@suaempresa.com"
```

### Execução

```bash
# Modo interativo
npm start

# Modo daemon (produção)
npm run start:prod

# Com logs detalhados
DEBUG=* npm start
```

---

## 💬 Exemplos de Uso

### Exemplo 1: Problema Técnico

**Entrada do Usuário:**
```
Não consigo acessar meu e-mail no Outlook. 
Aparece mensagem "Cannot connect to server".
```

**Resposta do Agente:**
```
🎫 Ticket #12345 - ALTA PRIORIDADE

📋 Resumo
Problema de conectividade com servidor de e-mail no Outlook.

🔍 Causa Provável
Falha na conexão com servidor Exchange ou credenciais expiradas.

✅ Solução Recomendada

1. Verificar Conexão de Rede
   - Teste sua conexão de internet
   - Acesse outlook.office.com pelo navegador

2. Reconfigurar Conta
   - Abra Outlook > Arquivo > Configurações da Conta
   - Selecione sua conta e clique em "Reparar"
   - Siga o assistente de reparação

3. Limpar Credenciais Armazenadas
   - Painel de Controle > Credenciais do Windows
   - Remova credenciais do Office
   - Reabra o Outlook e faça login novamente

📚 Recursos Adicionais
- [Guia: Resolver problemas de conectividade](https://kb.empresa.com/outlook-connectivity)
- [Vídeo: Reparar perfil do Outlook](https://kb.empresa.com/video/123)

🔄 Follow-up
Se o problema persistir após 30 minutos, este ticket será 
escalado automaticamente para a equipe técnica de nível 2.
```

### Exemplo 2: Dúvida sobre Faturamento

**Entrada do Usuário:**
```
Por que minha fatura deste mês veio R$ 500 a mais que o normal?
```

**Resposta do Agente:**
```
🎫 Ticket #12346 - MÉDIA PRIORIDADE

📋 Resumo
Questionamento sobre valor de fatura mensal.

🔍 Análise Preliminar
Identifiquei possíveis motivos para variação na fatura:

1. Licenças Adicionais
   - Foram adicionados 5 usuários novos em 10/12
   - Custo por usuário: R$ 100/mês
   - Total adicional: R$ 500

2. Serviços Extras
   - Verificar uso de serviços premium
   - Chamadas internacionais no Teams

✅ Próximos Passos

1. Revisar Detalhamento
   - Acesse o Portal do Cliente
   - Vá em "Faturamento" > "Histórico"
   - Baixe o detalhamento completo

2. Validar Usuários
   - Verifique se os 5 novos usuários eram esperados
   - Liste em "Admin Center" > "Usuários Ativos"

📊 Comparação de Faturas
- Fatura anterior (Nov): R$ 2.000
- Fatura atual (Dez): R$ 2.500
- Diferença: R$ 500 (+25%)

💬 Precisa de Mais Ajuda?
Se desejar uma análise detalhada ou contestar cobranças, 
nossa equipe financeira está à disposição.

📞 Contato Direto: financeiro@empresa.com
```

### Exemplo 3: Solicitação de Informação

**Entrada do Usuário:**
```
Como faço para criar uma equipe no Microsoft Teams?
```

**Resposta do Agente:**
```
🎫 Ticket #12347 - BAIXA PRIORIDADE

📋 Como Criar uma Equipe no Microsoft Teams

✅ Passo a Passo

1. Acessar Teams
   - Abra o Microsoft Teams (desktop ou web)
   - Faça login com suas credenciais

2. Criar Nova Equipe
   - Clique em "Equipes" na barra lateral esquerda
   - Clique no botão "Ingressar ou criar equipe"
   - Selecione "Criar equipe"

3. Escolher Tipo de Equipe
   - **Do zero**: Criar uma equipe nova
   - **De um grupo/equipe existente**: Usar modelo

4. Definir Privacidade
   - **Privado**: Apenas pessoas convidadas podem participar
   - **Público**: Qualquer pessoa da organização pode entrar

5. Configurar Informações
   - Nome da equipe (obrigatório)
   - Descrição (opcional)
   - Clique em "Criar"

6. Adicionar Membros
   - Digite nomes ou e-mails dos membros
   - Defina permissões (Proprietário ou Membro)
   - Clique em "Adicionar"

🎬 Tutorial em Vídeo
[Assistir: Criando Equipes no Teams](https://kb.empresa.com/video/teams-create)

📚 Recursos Adicionais
- [Guia Completo do Teams](https://kb.empresa.com/teams-guide)
- [Melhores Práticas para Equipes](https://kb.empresa.com/teams-best-practices)
- [FAQ do Teams](https://kb.empresa.com/teams-faq)

💡 Dica Pro
Você pode criar canais dentro da equipe para organizar 
conversas por tópicos específicos!

✅ Ticket Resolvido
Este ticket foi marcado como resolvido. Caso tenha mais 
dúvidas, não hesite em abrir um novo ticket.
```

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│     Support Agent Architecture          │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   Input Processing              │   │
│  │   - Parse ticket                │   │
│  │   - Extract metadata            │   │
│  │   - Validate format             │   │
│  └────────────┬────────────────────┘   │
│               │                         │
│  ┌────────────▼────────────────────┐   │
│  │   Ticket Classifier             │   │
│  │   - ML-based classification     │   │
│  │   - Category detection          │   │
│  │   - Priority assignment         │   │
│  └────────────┬────────────────────┘   │
│               │                         │
│  ┌────────────▼────────────────────┐   │
│  │   Knowledge Base Search         │   │
│  │   - Semantic search             │   │
│  │   - Relevance ranking           │   │
│  │   - Solution retrieval          │   │
│  └────────────┬────────────────────┘   │
│               │                         │
│  ┌────────────▼────────────────────┐   │
│  │   Response Generator            │   │
│  │   - LLM-based generation        │   │
│  │   - Template application        │   │
│  │   - Formatting                  │   │
│  └────────────┬────────────────────┘   │
│               │                         │
│  ┌────────────▼────────────────────┐   │
│  │   Escalation Manager            │   │
│  │   - Rule-based escalation       │   │
│  │   - SLA monitoring              │   │
│  │   - Notification                │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📊 Métricas e KPIs

### Métricas Monitoradas

- **Tempo Médio de Resposta**: Tempo desde criação até primeira resposta
- **Taxa de Resolução na Primeira Interação**: % de tickets resolvidos sem escalação
- **Satisfação do Cliente**: Score baseado em feedback
- **Taxa de Escalação**: % de tickets que precisam de intervenção humana
- **Tickets por Categoria**: Distribuição de problemas

### Dashboard

```bash
# Visualizar dashboard de métricas
npm run dashboard

# Gerar relatório mensal
npm run report -- --month 12 --year 2024
```

---

## 🔧 Customização

### Adicionar Nova Categoria

Edite `config.yaml`:

```yaml
support_agent:
  ticket_classification:
    categories:
      - "technical"
      - "billing"
      - "general"
      - "sua-nova-categoria"  # Adicione aqui
```

### Customizar Respostas

Edite os templates em `prompts/`:

```markdown
# prompts/support-response.md

Quando responder tickets da categoria {{category}}, 
sempre inclua:

1. Resumo do problema
2. Causa identificada
3. Solução passo a passo
4. Links para documentação
5. Próximos passos
```

### Integrar com CRM

```javascript
// src/integrations/crm.js
const CRMClient = require('./crm-client');

async function createCRMTicket(ticket) {
  const crm = new CRMClient(process.env.CRM_API_KEY);
  
  return await crm.tickets.create({
    title: ticket.title,
    description: ticket.description,
    priority: ticket.priority,
    category: ticket.category
  });
}
```

---

## 🧪 Testes

```bash
# Executar testes
npm test

# Testes com cobertura
npm run test:coverage

# Teste específico
npm test -- --grep "ticket classification"
```

### Exemplo de Teste

```javascript
describe('Support Agent', () => {
  it('should classify technical ticket correctly', async () => {
    const ticket = {
      description: 'Cannot access email in Outlook'
    };
    
    const result = await agent.classify(ticket);
    
    expect(result.category).toBe('technical');
    expect(result.priority).toBe('high');
  });
});
```

---

## 📝 Limitações Conhecidas

- ❌ Não processa anexos em tickets (planejado para v2.0)
- ❌ Suporte limitado para idiomas além de PT-BR e EN-US
- ❌ Escalação automática apenas por e-mail (integração Teams em desenvolvimento)
- ⚠️ Base de conhecimento requer indexação manual inicial

---

## 🛠️ Troubleshooting

### Problema: Agente não está classificando corretamente

**Solução:**
1. Verifique se o modelo está treinado com dados atualizados
2. Aumente o número de exemplos no prompt
3. Ajuste o `confidence_threshold` em config.yaml

### Problema: Busca na KB não retorna resultados

**Solução:**
1. Verifique conexão com a base de conhecimento
2. Confirme que os índices estão atualizados
3. Teste a query manualmente na KB

---

## 📚 Recursos Adicionais

- [Documentação Completa](../../docs/COMO-USAR.md)
- [Arquitetura Detalhada](../../docs/ARQUITETURA.md)
- [API Reference](../../docs/API.md)
- [Best Practices](../../docs/BEST-PRACTICES.md)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para adicionar novas funcionalidades:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este agente é parte do Copilot Agent Box e está licenciado sob a MIT License.

---

<div align="center">
  <p>🎧 Agente de Suporte ao Cliente</p>
  <p><a href="../../README.md">← Voltar para o README principal</a></p>
</div>
