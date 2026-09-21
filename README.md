# Automador de Diário de Classe Digital

Conjunto de scripts de automação para o console do navegador projetados para simplificar tarefas repetitivas no portal de Diário de Classe Digital utilizado nas escolas da região.

A solução reduz o tempo gasto no preenchimento de planejamentos pedagógicos e no lançamento diário de notas de 30 minutos para poucos segundos, eliminando erros manuais de digitação.

## 💡 O Problema e a Solução
O portal de diário digital adotado na região exige o preenchimento manual de diversos campos repetitivos por turma, disciplina e período. Em épocas de fechamento ou início de trimestre, esse processo consome horas dos docentes.

Para resolver isso, criei um fluxo de trabalho otimizado que combina inteligência artificial, processamento de dados e injeção de scripts no navegador:

Geração de Conteúdo: Alimento a versão Pro da IA com os Planos de Curso e diretrizes da BNCC/CRMG do Estado de Minas Gerais para estruturar conteúdos, habilidades, metodologias e aprendizados esperados.

Digitalização de Notas: Para o lançamento de avaliações, recebo as listas com as notas, realizo a leitura/digitalização dos dados e formato a sequência das notas.

Execução Automática: Insiro os dados pré-formatados no script e rodo a automação pelo console do navegador, que preenche e salva todas as informações em segundos.

## 🛠️ Funcionalidades dos Scripts

### 1. Preenchimento de Planejamento (planejamento.js)
Automatiza a inclusão das matrizes de planejamento pedagógico no sistema:

Mapeia os campos de texto (textarea) da página respeitando um deslocamento (offset) configurável para ajustar a disciplinas específicas.

Preenche em lote: conteúdos, códigos de habilidades, metodologias e aprendizados esperados.

Dispara os eventos nativos da página (input, change) para garantir que a aplicação reconheça os dados digitados.

Dispara o salvamento automático assim que todos os campos são preenchidos.

### 2. Lançamento Sequencial de Notas (notas.js)
Acelera a digitação de notas das turmas na tabela do diário:

Percorre os campos numéricos e seletores da tabela de alunos na ordem exata da lista digitalizada.

Utiliza manipuladores de propriedades do DOM para sobrescrever valores com segurança.

Destaca os campos preenchidos com cor verde clara para confirmação visual rápida do usuário.

Possui opção configurável de submissão automática do formulário.

## 🚀 Como Usar
Acesse a página correspondente no portal do Diário de Classe Digital (Matriz de Planejamento ou Tabela de Notas).

Abra as Ferramentas do Desenvolvedor no navegador (F12 ou Ctrl+Shift+I).

Clique na aba Console.

Insira os dados nos arrays do script escolhido.

Cole o código no console e pressione Enter.

## ⚠️ Observações de Segurança e Privacidade
Sem armazenamento de dados pessoais: Os scripts funcionam apenas na memória temporária do navegador durante a execução. Nenhum dado de alunos ou professores é enviado para servidores externos.

Compatibilidade: Desenvolvido especificamente para os seletores e estrutura HTML da plataforma de diário de classe padronizada da região.

## 📄 Licença
MIT — sinta-se à vontade para adaptar e utilizar na sua rotina escolar.