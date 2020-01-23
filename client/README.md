# Projeto Base Angular
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Sumário
1. [Por que utilizar um projeto base de Angular se ele já é um framework?](#objetivo)
2. [Por que estruturar as pastas do projeto Web?](#estruturar)
3. [Escalabilidade](#escalabilidade)
4. [Debugar](#debugar)
5. [A estrutura](#estrutura)
6. [Módulos - Lazy Load](#modulos)
7. [Core](#core)
8. [Shared](#shared)
9. [Dependências](#dependencias)

## <a name=objetivo><a/> Por que utilizar um projeto base de Angular se ele já é um framework?

Quando começamos a utilizar o Angular, vemos como sua curva de aprendizado é longa e escalável. Facilmente quem está iniciando nele, se perde ao criar components, pipes, diretivas etc, espalhando-os por todo o projeto.
O intuito desse pacote é disponibilizar uma arquitetura inicial que poderá ser usada em qualquer programa desenvolvido nele.

## <a name=estruturar><a/> Por que estruturar as pastas do projeto Web?

Melhores práticas trazem benefícios concretos para a empresa. Seguir uma boa prática é como um atalho. Existem outros caminhos. Às vezes não sabemos o porquê do atalho. Mas seguir por ele aumenta as chances de sucesso. Os benefícios a longo prazo trazem ganhos na qualidade do software.

## <a name=escalabilidade><a/> Escalabilidade

O código será mais simples escalar. Adicionar novos componentes, módulos e páginas não provoca inchaço as pastas existentes. Mantém a complexidade do sistema baixo. Logo a integração de novos desenvolvedores será uma tarefa tranquila. Além disso, com essa abordagem, é relativamente simples descartar recursos dentro e fora do aplicativo. Testar uma nova funcionalidade ou removê-la será fácil.

## <a name=debugar><a/> Debugar

Debugar o código será mais transparente com essa abordagem modularizada. Manter uma estrutura coesa traz benefícios para encontrar bugs e corrigi-los.

## <a name=estrutura><a/> A estrutura

Abaixo a estrutura proposta para projetos de grande porte:

```
|-- modules

    |-- module1
        |-- [+] components
        |-- module1.service.ts
        |-- module1.module.ts
        |-- module1.routes.ts

    |-- module2 
        |-- [+] components
        |-- module2.service.ts
        |-- module2.module.ts
        |-- module2.routes.ts

|-- shared
        |-- [+] components
        |-- [+] mocks
        |-- [+] models
        |-- [+] directives
        |-- [+] pipes

|-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] mocks
        |-- [+] services
        |-- [+] header

|-- app.module.ts
|-- app.component.ts
```

## <a name=modulos><a/> Módulos - Lazy Load

Módulos lazy loaded ajudam a diminuir o tempo de inicialização da aplicação. Com o lazy load, o aplicativo não precisa carregar tudo de uma só vez. Ele só vai carregar o que o usuário espera ver. O módulo só irá carregar quando o usuário navegar para sua rota.

Perfeito para aplicações grande, combina com o interesse do usuário e organiza a estrutura. Todo o conteúdo do módulo está diretamente relacionado com a rota. Logo faz sentido os componentes estarem dentro do módulo.

Trabalhar com módulos há ganhos significativos na inicialização da aplicação. É inimaginável uma aplicação Angular de médio porte sem módulos lazy load. E essa estrutura é coesa, mantém os grupos de interesse dentro de um mesmo local.

## <a name=core><a/> Core

O core module deve conter serviços singleton, componentes universais e outros recursos em que há uma instância única. Autenticação, header, interceptors são exemplos de componentes que terá apenas uma instância ativa para a aplicação e será utilizado praticamente por todos os modules.

## <a name=shared><a/> Shared

O shared é onde todos os componentes compartilhados, pipes, filters e services devem ir. O shared pode ser importado em qualquer module. Assim esses itens serão reutilizados. O shared module deve ser independente do restante do aplicativo. Portanto, não deve ter referências de outro módulo.

***Créditos:*** [Angular - Como estruturar componentes em grandes projetos](https://www.brunobrito.net.br/estruturando-components-angular/)

## <a name=dependencias><a/> Dependências

Tentamos instalar o mínimo de dependências iniciais possíveis para dar liberdade para o desenvolvedor poder escolher o melhor caminho a qual seguir. Pensando nisso, disponibilizamos somente alguns pacotes a qual achamos que poderá ser utilizado em qualquer projeto desenvolvido pela sua equipe.

> **Se sinta a vontade para desinstala-los caso não for usá-los.**

Lista:

1. [Jquery](https://api.jquery.com/)
2. [Dayjs](https://github.com/iamkun/dayjs)
3. [Ngx-mask](https://www.npmjs.com/package/ngx-mask/v/1.0.0)
4. [Sweetalert2](https://sweetalert2.github.io/v7.html)
5. [Toastr](https://www.npmjs.com/package/ngx-toastr)

## <a name=dependencias><a/> Dependências Desenvolvimento:

Lista:

1. [Node-sass](https://webdesign.tutsplus.com/pt/tutorials/watch-and-compile-sass-in-five-quick-steps--cms-28275)
2. [Husky](https://github.com/typicode/husky)