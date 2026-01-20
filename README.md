# 🤖 Copilot Agent Box

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/microsoft/copilotagentbox?style=social)](https://github.com/microsoft/copilotagentbox/stargazers)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

> Repositório open-source com agentes prontos para integração ao **Microsoft 365 Copilot**. Projetado para acelerar a criação de soluções inteligentes, oferecendo modelos reutilizáveis, exemplos práticos e boas práticas para automação e produtividade corporativa.

---

## 📑 Índice

- [Visão Geral](#-visão-geral)
- [Características](#-características)
- [Como Começar](#-como-começar)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Exemplos de Agentes](#-exemplos-de-agentes)
- [Contribuindo](#-contribuindo)
- [Suporte](#-suporte)
- [Licença](#-licença)

---

## 🎯 Visão Geral

O **Copilot Agent Box** é uma coleção curada de agentes de IA prontos para uso com o Microsoft 365 Copilot. Este repositório fornece:

- 🚀 **Templates prontos** para uso imediato
- 📚 **Documentação completa** de cada agente
- 🏗️ **Arquitetura clara** e bem documentada
- 💡 **Exemplos práticos** de implementação
- ⚡ **Boas práticas** de desenvolvimento de agentes

---

## ✨ Características

- **Modelos Reutilizáveis**: Agentes prontos que podem ser facilmente adaptados às suas necessidades
- **Integração Microsoft 365**: Compatível com o ecossistema Microsoft 365 Copilot
- **Open Source**: Contribuições da comunidade são bem-vindas
- **Documentação Rica**: Cada agente possui documentação detalhada de arquitetura e uso
- **Configuração Simplificada**: Arquivos MarkDown para configuração rápida
- **Escalável**: Arquitetura projetada para crescer com suas necessidades

---

## 🚀 Como Começar

### Pré-requisitos

Antes de começar, certifique-se de ter:

- Git instalado ([Download Git](https://git-scm.com/downloads))
- Acesso ao Microsoft 365 Copilot
- Node.js 18+ (para execução de agentes)
- Visual Studio Code (recomendado)

### Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/microsoft/copilotagentbox.git

# Entre no diretório
cd copilotagentbox

# Instale as dependências (se aplicável)
npm install
```

### Estrutura do Projeto

```
copilotagentbox/
├── 📁 docs/                           # Documentação geral do repositório
│   ├── COMO-USAR.md                   # Guia geral de uso
│   └── CONTRIBUTING.md                # Guia de contribuição
│
├── 📁 Exemplos/                       # Exemplos e templates de referência
│   ├── README.md                      # Índice dos exemplos
│   ├── Agente Ata de Reuniao/         # Exemplo do agente de atas
│   └── Agente Ex2/                    # Exemplo adicional
│
├── 📁 src/                            # Código fonte dos agentes
│   ├── Agente Ata de Reuniao/         # Agente de Ata de Reunião
│   │   ├── ARQUITETURA.md             # Arquitetura do agente
│   │   ├── COMO-USAR.md               # Guia de uso do agente
│   │   └── prompt.md                  # Prompt sistêmico do agente
│   └── Agente Ex2/                    # Agente adicional (em desenvolvimento)
│
├── LICENSE                            # Licença MIT
├── README.md                          # Este arquivo
└── SECURITY.md                        # Política de segurança
```

---

## 📖 Como Usar

Para instruções detalhadas sobre como usar os agentes deste repositório, consulte nosso guia completo:

👉 **[Guia de Como Usar](docs/COMO-USAR.md)**

### Início Rápido

1. **Escolha um agente** da pasta `Exemplos`
2. **Leia a documentação** específica do agente
3. **Customize o prompt** conforme suas necessidades
4. **Execute o agente** e teste

---

## 🎨 Exemplos de Agentes

Explore nossa coleção de agentes prontos:

| Agente | Descrição | Documentação |
|--------|-----------|--------------|
| 📝 **Ata de Reunião** | Agente especializado em criar, estruturar e organizar atas de reunião | [Ver docs](src/Agente%20Ata%20de%20Reuniao/COMO-USAR.md) |
| 🎧 **Suporte ao Cliente** | Automação de atendimento e resolução de tickets | [Ver exemplo](Exemplos/README.md) |

> 💡 **Contribua**: Novos agentes estão sendo desenvolvidos! Veja como contribuir com seu próprio agente em [CONTRIBUTING.md](docs/CONTRIBUTING.md).

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Veja como você pode ajudar:

1. 🍴 Faça um fork do projeto
2. 🌿 Crie uma branch para sua feature (`git checkout -b feature/NovoAgente`)
3. ✍️ Commit suas mudanças (`git commit -m 'Adiciona novo agente'`)
4. 📤 Push para a branch (`git push origin feature/NovoAgente`)
5. 🎉 Abra um Pull Request

Para mais detalhes, consulte [CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 💬 Suporte

Precisa de ajuda? Temos algumas opções:

- 📖 [Documentação](docs/)
- 🐛 [Reportar um Bug](https://github.com/microsoft/copilotagentbox/issues)
- 💡 [Solicitar Feature](https://github.com/microsoft/copilotagentbox/issues/new)
- 💬 [Discussões](https://github.com/microsoft/copilotagentbox/discussions)

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🌟 Agradecimentos

Obrigado a todos os [contribuidores](https://github.com/microsoft/copilotagentbox/graphs/contributors) que ajudaram a tornar este projeto possível!

---

<div align="center">
  <p>Feito com ❤️ pela comunidade Microsoft</p>
  <p>
    <a href="https://github.com/microsoft/copilotagentbox">⭐ Star no GitHub</a> •
    <a href="https://github.com/microsoft/copilotagentbox/issues">🐛 Reportar Bug</a> •
    <a href="https://github.com/microsoft/copilotagentbox/discussions">💬 Discussões</a>
  </p>
</div>
