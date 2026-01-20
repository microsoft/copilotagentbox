# 📦 Pacotes de Agentes Prontos para Download

Esta pasta contém **pacotes .zip** de agentes prontos para serem publicados diretamente na loja de agentes da sua organização, **sem necessidade de alterações**.

---

## 📋 Índice

- [Sobre os Pacotes](#-sobre-os-pacotes)
- [Agentes Disponíveis](#-agentes-disponíveis)
- [Como Publicar um Pacote de Agente](#-como-publicar-um-pacote-de-agente)
- [Notas Importantes](#-notas-importantes)
- [Recursos Adicionais](#-recursos-adicionais)

---

## 📁 Sobre os Pacotes

Cada pasta neste diretório contém um arquivo **.zip** de um agente específico, pronto para implementação:

| Pasta | Descrição | Status |
|-------|-----------|--------|
| `Agente Ata de Reuniao/` | Pacote do agente de Ata de Reunião | ✅ Disponível |
| `Agente Ex2/` | Pacote de agente adicional | 🔄 Em desenvolvimento |

### O que contém cada pacote .zip?

O pacote ZIP de cada agente inclui:
- **Manifesto do agente**: Configurações e metadados do agente
- **Ícone da aplicação**: Imagem representativa do agente

---

## 🎯 Agentes Disponíveis

### 📝 Agente Ata de Reunião

Agente especializado em criar, estruturar e organizar atas de reunião de forma profissional.

**Funcionalidades:**
- Captura de informações da reunião (data, hora, participantes)
- Registro de pauta e tópicos discutidos
- Documentação de decisões tomadas
- Atribuição de ações com responsáveis e prazos
- Geração de documento final estruturado

📥 **Download**: [`Agente Ata de Reuniao/`](Agente%20Ata%20de%20Reuniao/)

---

## 🚀 Como Publicar um Pacote de Agente

Siga o passo a passo abaixo para publicar um agente na sua organização usando o pacote .zip.

### Pré-requisitos

- Acesso ao **Microsoft Teams**
- Permissão para fazer **sideload de aplicativos** no Teams
- Licença do **Microsoft 365 Copilot** (para usar o agente após publicação)

---

### Passo 1: Baixar o Pacote .zip

1. Navegue até a pasta do agente desejado neste repositório
2. Faça o **download do arquivo .zip** correspondente
3. Salve o arquivo em um local de fácil acesso no seu computador

---

### Passo 2: Acessar o Microsoft Teams

1. Abra o **Microsoft Teams** (aplicativo desktop ou web)
2. No painel lateral esquerdo, clique em **Aplicativos**

---

### Passo 3: Fazer Upload do Pacote (Sideload)

1. Na página de Aplicativos, clique em **Gerenciar seus aplicativos** (no canto inferior esquerdo)
2. Selecione **Carregar um aplicativo**
3. Escolha **Carregar um aplicativo personalizado**
4. Navegue até o arquivo **.zip** que você baixou e selecione-o
5. Clique em **Abrir** para fazer o upload

---

### Passo 4: Instalar o Agente

1. Após o upload, o agente aparecerá na lista de aplicativos
2. Clique em **Adicionar** para instalar o agente
3. O agente estará disponível no seu Microsoft Teams e Microsoft 365 Copilot

---

### Passo 5: Usar o Agente

1. Abra o **Microsoft 365 Copilot** ou o **Microsoft Teams**
2. Procure pelo nome do agente instalado
3. Inicie uma conversa e comece a usar o agente

---

## ⚠️ Notas Importantes

### Limitações do Sideload

| Limitação | Descrição |
|-----------|-----------|
| **macOS** | O sideload de agentes no Teams **não é suportado** no macOS |
| **Arquivos incorporados** | O pacote ZIP não pode incluir arquivos incorporados |
| **Permissões** | Seu administrador pode ter desabilitado o sideload de aplicativos |

### Sobre Permissões de Administrador

Se você não conseguir fazer o upload do pacote, pode ser necessário:

1. Solicitar ao administrador do Teams que **habilite o sideload** de aplicativos
2. Ou solicitar que o administrador **publique o agente** no catálogo de aplicativos da organização

### Governança

- Os administradores podem configurar quem pode publicar agentes na organização
- Algumas organizações exigem aprovação antes de um agente ficar disponível para todos
- Consulte o administrador do seu tenant para mais informações

---

## 📚 Recursos Adicionais

### Documentação Oficial Microsoft

- [Partilhar e gerir agentes](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/agent-builder-share-manage-agents)
- [Carregar aplicativos no Microsoft Teams](https://learn.microsoft.com/pt-br/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Publicar agentes para Microsoft 365 Copilot](https://learn.microsoft.com/pt-br/microsoft-365-copilot/extensibility/publish)

### Documentação do Repositório

- [Como contribuir](../docs/CONTRIBUTING.md)

---

## 💡 Dica

Se você deseja **personalizar** um agente antes de publicar, consulte a documentação na pasta `src/` para entender como modificar o prompt sistêmico e as configurações do agente.

---

<div align="center">
  <p>📦 Pacotes de Agentes - Copilot Agent Box</p>
  <p><a href="../README.md">← Voltar para o README principal</a></p>
</div>
