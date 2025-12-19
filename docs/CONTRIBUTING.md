# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Copilot Agent Box! Este documento fornece diretrizes para contribuir com o projeto.

---

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Processo de Pull Request](#processo-de-pull-request)
- [Padrões de Código](#padrões-de-código)
- [Commit Guidelines](#commit-guidelines)
- [Desenvolvimento Local](#desenvolvimento-local)

---

## 📜 Código de Conduta

Este projeto adere ao código de conduta da Microsoft. Ao participar, você está concordando em manter um ambiente respeitoso e inclusivo.

### Nossos Padrões

- ✅ Usar linguagem acolhedora e inclusiva
- ✅ Respeitar diferentes pontos de vista e experiências
- ✅ Aceitar críticas construtivas com graça
- ✅ Focar no que é melhor para a comunidade

---

## 🚀 Como Contribuir

### Tipos de Contribuição

Aceitamos diversos tipos de contribuição:

1. **Código**
   - Novos agentes
   - Correções de bugs
   - Melhorias de performance
   - Novos recursos

2. **Documentação**
   - Melhorias na documentação
   - Tradução de documentos
   - Tutoriais e guias
   - Exemplos de uso

3. **Testes**
   - Testes unitários
   - Testes de integração
   - Testes de performance

4. **Design**
   - Templates de prompts
   - Diagramas de arquitetura
   - Melhorias de UX

---

## 🐛 Reportando Bugs

### Antes de Reportar

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/microsoft/copilotagentbox/issues)
2. Confirme que você está usando a versão mais recente
3. Tente reproduzir o bug em um ambiente limpo

### Como Reportar

Use o template de issue para bugs:

```markdown
**Descrição do Bug**
[Descrição clara e concisa do problema]

**Como Reproduzir**
1. Vá para '...'
2. Execute '...'
3. Veja o erro

**Comportamento Esperado**
[O que deveria acontecer]

**Comportamento Atual**
[O que está acontecendo]

**Screenshots**
[Se aplicável, adicione screenshots]

**Ambiente**
- OS: [e.g., Windows 11]
- Node.js: [e.g., 18.0.0]
- Versão do Agent Box: [e.g., 1.0.0]

**Logs**
```
[Cole logs relevantes aqui]
```

**Informações Adicionais**
[Qualquer contexto adicional]
```

---

## 💡 Sugerindo Melhorias

### Antes de Sugerir

1. Verifique se a melhoria já foi sugerida
2. Confirme que não existe em desenvolvimento
3. Pense em como a melhoria beneficia a comunidade

### Como Sugerir

Use o template de feature request:

```markdown
**Sua Melhoria Resolve um Problema?**
[Descrição clara do problema]

**Solução Desejada**
[Descrição clara da solução proposta]

**Alternativas Consideradas**
[Outras soluções que você considerou]

**Contexto Adicional**
[Qualquer contexto ou screenshot]

**Impacto**
- [ ] Novos usuários se beneficiarão
- [ ] Melhora experiência de usuários existentes
- [ ] Resolve problema crítico
- [ ] Nice to have
```

---

## 🔄 Processo de Pull Request

### Checklist Antes de Submeter

- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Commit messages seguem o padrão
- [ ] Build local passa sem erros
- [ ] PR tem descrição clara

### Passos para PR

1. **Fork o Repositório**
```bash
# Clone seu fork
git clone https://github.com/SEU-USUARIO/copilotagentbox.git
cd copilotagentbox
```

2. **Crie uma Branch**
```bash
# Branch para feature
git checkout -b feature/minha-feature

# Branch para bugfix
git checkout -b fix/meu-bugfix

# Branch para documentação
git checkout -b docs/minha-doc
```

3. **Faça suas Mudanças**
```bash
# Adicione arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona novo agente de análise"
```

4. **Mantenha Sincronizado**
```bash
# Adicione o repositório original como upstream
git remote add upstream https://github.com/microsoft/copilotagentbox.git

# Atualize sua branch
git fetch upstream
git rebase upstream/main
```

5. **Push e Crie PR**
```bash
# Push para seu fork
git push origin feature/minha-feature

# Vá ao GitHub e crie o Pull Request
```

### Template de PR

```markdown
## Descrição
[Descrição clara do que este PR faz]

## Tipo de Mudança
- [ ] Bug fix (mudança que corrige um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentação

## Como Foi Testado?
[Descreva os testes realizados]

## Checklist
- [ ] Código segue os padrões
- [ ] Testes passam localmente
- [ ] Documentação atualizada
- [ ] Sem warnings de linter

## Screenshots (se aplicável)
[Adicione screenshots se relevante]

## Issues Relacionadas
Closes #123
```

---

## 💻 Padrões de Código

### JavaScript/TypeScript

```javascript
// Bom ✅
async function processTicket(ticket) {
  try {
    const classified = await classifyTicket(ticket);
    const solution = await findSolution(classified);
    return formatResponse(solution);
  } catch (error) {
    logger.error('Error processing ticket', { error, ticket });
    throw error;
  }
}

// Evite ❌
async function processTicket(ticket) {
  const classified = await classifyTicket(ticket);
  const solution = await findSolution(classified);
  return formatResponse(solution);
  // Sem tratamento de erro
}
```

### Naming Conventions

```javascript
// Classes: PascalCase
class TicketClassifier {}

// Funções/Variáveis: camelCase
function classifyTicket() {}
const ticketId = 123;

// Constantes: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_ENDPOINT = 'https://api.example.com';

// Arquivos: kebab-case
ticket-classifier.js
support-agent.js
```

### Comentários

```javascript
// Bom ✅
/**
 * Classifies a support ticket by category and priority
 * @param {Object} ticket - The ticket to classify
 * @param {string} ticket.description - Ticket description
 * @returns {Promise<Object>} Classification result
 */
async function classifyTicket(ticket) {
  // Implementation
}

// Evite ❌
// This function classifies tickets
async function classifyTicket(ticket) {
  // Implementation
}
```

### Estrutura de Arquivos

```
src/
├── agents/
│   ├── base-agent.js          # Classe base
│   ├── support-agent.js       # Agente específico
│   └── __tests__/            # Testes
│       └── support-agent.test.js
├── utils/
│   ├── logger.js
│   └── validators.js
└── index.js
```

---

## 📝 Commit Guidelines

### Formato de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `test`: Adição/modificação de testes
- `chore`: Tarefas de build, configuração, etc

### Exemplos

```bash
# Feature
git commit -m "feat(support-agent): add ticket escalation logic"

# Bug fix
git commit -m "fix(classifier): resolve null pointer exception"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Breaking change
git commit -m "feat(api)!: change response format

BREAKING CHANGE: API now returns JSON instead of XML"
```

### Boas Práticas

- ✅ Use o imperativo: "add" não "added" ou "adds"
- ✅ Não capitalize a primeira letra
- ✅ Sem ponto final no subject
- ✅ Limite o subject a 50 caracteres
- ✅ Body com no máximo 72 caracteres por linha
- ✅ Explique o "porquê" não o "como"

---

## 🛠️ Desenvolvimento Local

### Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/microsoft/copilotagentbox.git
cd copilotagentbox

# Instale dependências
npm install

# Copie arquivo de ambiente
cp .env.example .env

# Configure variáveis de ambiente
# Edite .env com suas credenciais

# Execute testes
npm test

# Inicie em modo desenvolvimento
npm run dev
```

### Estrutura de Desenvolvimento

```bash
# Criar novo agente
npm run create:agent -- --name meu-agente

# Executar linter
npm run lint

# Formatar código
npm run format

# Build de produção
npm run build

# Executar testes com watch
npm run test:watch
```

### Ferramentas Recomendadas

- **IDE**: Visual Studio Code
- **Extensões VSCode**:
  - ESLint
  - Prettier
  - GitLens
  - GitHub Copilot
- **Node.js**: v18 ou superior
- **npm**: v9 ou superior

### Configuração do VSCode

`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript"
  ]
}
```

---

## 🧪 Testes

### Escrevendo Testes

```javascript
// support-agent.test.js
const SupportAgent = require('../support-agent');

describe('SupportAgent', () => {
  let agent;
  
  beforeEach(() => {
    agent = new SupportAgent(mockConfig);
  });
  
  describe('classifyTicket', () => {
    it('should classify technical ticket correctly', async () => {
      const ticket = {
        description: 'Cannot access email'
      };
      
      const result = await agent.classifyTicket(ticket);
      
      expect(result.category).toBe('technical');
      expect(result.priority).toBe('high');
    });
    
    it('should handle invalid input', async () => {
      await expect(agent.classifyTicket(null))
        .rejects.toThrow('Invalid ticket');
    });
  });
});
```

### Cobertura de Testes

Buscamos manter cobertura acima de 80%:

```bash
# Executar com cobertura
npm run test:coverage

# Ver relatório
open coverage/index.html
```

---

## 📚 Recursos Adicionais

- [Documentação Principal](COMO-USAR.md)
- [Arquitetura](ARQUITETURA.md)
- [Código de Conduta](CODE_OF_CONDUCT.md)
- [Segurança](SECURITY.md)

---

## 🎉 Reconhecimento

Todos os contribuidores são reconhecidos em nosso [README](../README.md) e receberão crédito por suas contribuições.

---

## ❓ Dúvidas?

Se tiver dúvidas sobre como contribuir:

- 💬 [Abra uma discussão](https://github.com/microsoft/copilotagentbox/discussions)
- 📧 Entre em contato: opensource@microsoft.com
- 📖 Consulte a [documentação](../README.md)

---

<div align="center">
  <p>🤝 Obrigado por contribuir!</p>
  <p><a href="../README.md">← Voltar para o README principal</a></p>
</div>
