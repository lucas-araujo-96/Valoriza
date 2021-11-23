# Valoriza

Este é o repositório do projeto "Valoriza" desenvolvido no evento NLW: da RocketSeat: uma API em padrão REST de um sistema de feedback que permite que usuários façam elogios uns aos outros, desenvolvida em Typescript em cima do Node.JS, já possui as migrations para criar o BD SQLite. Meu segundo projeto e uma clara melhoria com relação ao anterior.
Possui autenticação/autorização por JWT usando middlewares, hasheamento de senhas usando bcryptjs, utiliza um ORM para acesso ao BD, além da clara estrutura usada pela RocketSeat com a minha interpretação do código utilizado.

>use npm run typeorm migraton:run para rodar as migrations e gerar o arquivo do SQLite<br />
>use npm run server para iniciar o servidor, ele está configurado para usar a porta 3000, mas isto pode ser facilmente alterado em ./src/app.ts
