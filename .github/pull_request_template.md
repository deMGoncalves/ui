# Erro ao adicionar item ao carrinho de compras: Valor total não é atualizado corretamente

## Problema

Atualmente, ao adicionar um novo item ao carrinho de compras, o valor total não é atualizado corretamente. Isso causa confusão para os usuários, pois eles não conseguem ver o preço total atualizado imediatamente.

## Solução

Atualizei a função `calculateTotal` no arquivo `Cart.js` para corrigir o cálculo do valor total do carrinho de compras. Agora, o preço total é recalculado automaticamente sempre que um novo item é adicionado ou removido do carrinho.

## Descrição

Esta solicitação de pull inclui alterações no código relacionadas à atualização do cálculo do valor total do carrinho de compras. Foi corrigido o bug que causava a inconsistência no valor total exibido para o usuário.

## Tipo de Mudança

- [ ] Correção de bug (alteração ininterrupta que corrige um problema)
- [ ] Novo recurso (alteração ininterrupta que adiciona funcionalidade)
- [ ] Alteração de última hora (correção ou recurso que afetaria o funcionamento esperado da funcionalidade existente)
- [ ] Atualização de documentação

## Testes Realizados

- Executei testes unitários para a função `calculateTotal` utilizando diferentes cenários de itens adicionados ao carrinho.
- Verifiquei se o valor total é calculado corretamente após adicionar, remover e atualizar itens no carrinho.

## Checklist

- [ ] Meu código segue as diretrizes de estilo deste projeto.
- [ ] Realizei uma autorrevisão do meu próprio código.
- [ ] Comentei meu código, especialmente em áreas difíceis de entender.
- [ ] Fiz alterações correspondentes na documentação.
- [ ] Minhas alterações não geraram novos avisos.
- [ ] Adicionei testes que comprovam que minha correção é eficaz ou que meu recurso funciona corretamente.
- [ ] Testes de unidade novos e existentes passam localmente com minhas mudanças.
- [ ] Quaisquer alterações dependentes foram mescladas e publicadas em módulos downstream.
- [ ] Revisei meu código em busca de erros ortográficos e os corrigi.

## Observações Adicionais

Agradeço antecipadamente por revisar esta solicitação de pull. Acredito que as alterações propostas resolverão o problema do cálculo incorreto do valor total do carrinho de compras.

## Issues Relacionadas

Fixes #123

## Revisores Sugeridos

@username1, @username2

## Screenshots

Inclua capturas de tela ou gifs que demonstrem as alterações de interface do usuário ou qualquer novo recurso implementado.

## Links Úteis

Inclua links para recursos adicionais relevantes, como documentação externa, artigos, discussões ou exemplos de código.
