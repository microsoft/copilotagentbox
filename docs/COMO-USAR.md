# 📖 Como Usar o Copilot Agent Box

Este guia fornece instruções detalhadas sobre como configurar, customizar e executar os agentes disponíveis no Copilot Agent Box.

---

## 📋 Índice

- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura de um Agente](#estrutura-de-um-agente)
- [Customizando Prompts](#customizando-prompts)
- [Configuração YAML](#configuração-yaml)
- [Executando um Agente](#executando-um-agente)
- [Testando e Depurando](#testando-e-depurando)
- [Boas Práticas](#boas-práticas)
- [Solução de Problemas](#solução-de-problemas)

---

## 🔧 Instalação e Configuração

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/microsoft/copilotagentbox.git
cd copilotagentbox
```

### Passo 2: Instalar Dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações do Microsoft 365 Copilot
MICROSOFT_APP_ID=seu-app-id
MICROSOFT_APP_PASSWORD=sua-senha
TENANT_ID=seu-tenant-id

# Configurações opcionais
LOG_LEVEL=info
ENVIRONMENT=development
```

### Passo 4: Verificar Instalação

```bash
npm run test
```

---

## 🏗️ Estrutura de um Agente

Cada agente no repositório segue uma estrutura padrão:

```
examples/agent-nome/
├── README.md              # Documentação específica do agente
├── config.yaml            # Configurações do agente
├── prompts/
│   ├── system.md         # Prompt do sistema
│   ├── user.md           # Template de prompt do usuário
│   └── examples.md       # Exemplos de uso
├── src/
│   ├── index.js          # Ponto de entrada
│   ├── handlers/         # Manipuladores de eventos
│   └── utils/            # Utilitários
└── tests/
    └── agent.test.js     # Testes do agente
```

### Componentes Principais

#### 1. **README.md**
- Descrição do agente
- Casos de uso
- Exemplos práticos
- Limitações conhecidas

#### 2. **config.yaml**
- Configurações específicas do agente
- Parâmetros de comportamento
- Credenciais e endpoints

#### 3. **prompts/**
- Templates de prompts reutilizáveis
- Instruções para o modelo
- Exemplos de interação

#### 4. **src/**
- Código-fonte do agente
- Lógica de negócio
- Integrações

---

## ✍️ Customizando Prompts

### Estrutura de um Prompt

Os prompts no Copilot Agent Box seguem o padrão Markdown:

```markdown
# System Prompt

Você é um assistente especializado em [ÁREA DE ESPECIALIZAÇÃO].

## Suas Responsabilidades

- Responder perguntas sobre [TÓPICO 1]
- Auxiliar com [TAREFA 1]
- Fornecer insights sobre [ÁREA 2]

## Diretrizes

1. Seja sempre claro e objetivo
2. Use linguagem profissional
3. Cite fontes quando relevante

## Limitações

- Não forneça informações confidenciais
- Não execute ações sem confirmação
```

### Variáveis de Template

Use variáveis para tornar seus prompts dinâmicos:

```markdown
Olá {{userName}}, 

Você solicitou ajuda com {{taskType}}. 
Com base em {{context}}, aqui está minha recomendação...
```

### Melhores Práticas para Prompts

1. **Seja Específico**: Defina claramente o papel e responsabilidades do agente
2. **Use Exemplos**: Forneça exemplos de interações esperadas
3. **Defina Limitações**: Deixe claro o que o agente não deve fazer
4. **Estruture Bem**: Use cabeçalhos e listas para organização
5. **Teste Iterativamente**: Refine os prompts com base nos resultados

---

## ⚙️ Configuração YAML

### Exemplo de config.yaml

```yaml
# Configuração do Agente
agent:
  name: "Agente de Suporte"
  version: "1.0.0"
  description: "Agente para suporte ao cliente"

# Configurações do Modelo
model:
  provider: "azure-openai"
  deployment: "gpt-4"
  temperature: 0.7
  max_tokens: 2000
  top_p: 0.95

# Configurações de Comportamento
behavior:
  language: "pt-BR"
  tone: "professional"
  verbosity: "balanced"
  
# Integrações
integrations:
  microsoft365:
    enabled: true
    services:
      - "teams"
      - "outlook"
      - "sharepoint"
  
# Segurança
security:
  require_authentication: true
  allowed_domains:
    - "contoso.com"
  rate_limit:
    requests_per_minute: 60

# Logging
logging:
  level: "info"
  include_user_data: false
```

### Parâmetros Principais

| Parâmetro | Descrição | Valores |
|-----------|-----------|---------|
| `temperature` | Controla a criatividade das respostas | 0.0 - 1.0 |
| `max_tokens` | Limite de tokens na resposta | 1 - 4096 |
| `top_p` | Controla a diversidade das respostas | 0.0 - 1.0 |
| `tone` | Tom das respostas | professional, casual, friendly |
| `verbosity` | Nível de detalhamento | concise, balanced, detailed |

---

## 🚀 Executando um Agente

### Execução Básica

```bash
# Navegar até o diretório do agente
cd examples/agent-suporte

# Executar o agente
node src/index.js
```

### Execução com Parâmetros

```bash
# Especificar arquivo de configuração
node src/index.js --config=config.custom.yaml

# Modo de debug
node src/index.js --debug

# Especificar ambiente
NODE_ENV=production node src/index.js
```

### Executando via API

```javascript
const AgentBox = require('copilotagentbox');

// Inicializar o agente
const agent = new AgentBox.Agent({
  configPath: './config.yaml',
  promptsPath: './prompts'
});

// Processar uma mensagem
const response = await agent.process({
  message: "Como posso ajudar com suporte técnico?",
  userId: "user123",
  context: {}
});

console.log(response.text);
```

### Integração com Microsoft Teams

```javascript
const { TeamsActivityHandler } = require('botbuilder');
const AgentBox = require('copilotagentbox');

class AgentBot extends TeamsActivityHandler {
  constructor() {
    super();
    this.agent = new AgentBox.Agent({
      configPath: './config.yaml'
    });
    
    this.onMessage(async (context, next) => {
      const response = await this.agent.process({
        message: context.activity.text,
        userId: context.activity.from.id
      });
      
      await context.sendActivity(response.text);
      await next();
    });
  }
}
```

---

## 🧪 Testando e Depurando

### Testes Unitários

```bash
# Executar todos os testes
npm test

# Executar testes de um agente específico
npm test -- examples/agent-suporte

# Executar com cobertura
npm run test:coverage
```

### Modo Debug

```bash
# Ativar logs detalhados
DEBUG=* node src/index.js

# Logs específicos do agente
DEBUG=agent:* node src/index.js
```

### Ferramentas de Debug

1. **Console Interativo**
```bash
node
> const agent = require('./examples/agent-suporte/src/index.js')
> agent.process({ message: "teste" })
```

2. **VS Code Debugger**
Crie `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Agent",
      "program": "${workspaceFolder}/examples/agent-suporte/src/index.js",
      "console": "integratedTerminal"
    }
  ]
}
```

---

## 💡 Boas Práticas

### 1. Versionamento de Prompts

- Mantenha histórico de versões dos prompts
- Documente mudanças significativas
- Use controle de versão semântico

### 2. Segurança

- **Nunca** commite credenciais no repositório
- Use variáveis de ambiente para dados sensíveis
- Implemente rate limiting
- Valide todas as entradas do usuário

### 3. Performance

- Cache respostas comuns
- Use streaming para respostas longas
- Implemente retry logic para falhas temporárias
- Monitore uso de tokens

### 4. Manutenibilidade

- Documente comportamentos esperados
- Escreva testes para cenários críticos
- Use naming conventions consistentes
- Mantenha configurações separadas do código

### 5. Experiência do Usuário

- Forneça feedback durante processamento
- Trate erros graciosamente
- Ofereça sugestões quando apropriado
- Personalize respostas quando possível

---

## 🔍 Solução de Problemas

### Erro: "Authentication Failed"

**Problema**: Credenciais inválidas ou expiradas

**Solução**:
1. Verifique as variáveis de ambiente no `.env`
2. Confirme que o app está registrado no Azure AD
3. Verifique as permissões do app

```bash
# Testar autenticação
npm run test:auth
```

### Erro: "Rate Limit Exceeded"

**Problema**: Muitas requisições em curto período

**Solução**:
1. Ajuste o `rate_limit` no config.yaml
2. Implemente exponential backoff
3. Use cache para requisições repetidas

### Erro: "Invalid Response Format"

**Problema**: Resposta do modelo não está no formato esperado

**Solução**:
1. Revise o prompt para ser mais específico
2. Adicione exemplos de formato esperado
3. Implemente validação de resposta

```javascript
function validateResponse(response) {
  if (!response.text || typeof response.text !== 'string') {
    throw new Error('Invalid response format');
  }
  return response;
}
```

### Logs Não Aparecem

**Problema**: Configuração de logging incorreta

**Solução**:
```bash
# Verificar configuração de logging
cat config.yaml | grep -A 5 "logging:"

# Forçar nível de log
LOG_LEVEL=debug node src/index.js
```

---

## 📚 Recursos Adicionais

- [Documentação de Arquitetura](ARQUITETURA.md)
- [Guia de Contribuição](CONTRIBUTING.md)
- [API Reference](API.md)
- [FAQ](FAQ.md)
- [Exemplos Avançados](../examples/README.md)

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
