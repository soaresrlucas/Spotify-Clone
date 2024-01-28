# Spotify Clone
Bem-vindo ao repositório do meu projeto de clone da landing page do Spotify! Esta aplicação web foi desenvolvida utilizando React e é uma oportunidade para estudar e praticar HTML, CSS, JavaScript e React. A barra de pesquisa é totalmente funcional, permitindo que você pesquise entre os artistas disponíveis na fake API que criei, chamada artists.json.

## Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

## Instalação
1. Clone o repositório para o seu ambiente local:
   
`git clone https://github.com/seu-usuario/nome-do-repositorio.git`

2. Navegue até o diretório do projeto:

`cd Spotify-Clone`

3. Instale as dependências:

`npm install`

## Uso
Execute a aplicação em modo de desenvolvimento:

`npm start`

> Abra http://localhost:3000 no seu navegador para visualizar o projeto.

## Funcionalidades
* __Barra de Pesquisa__: A barra de pesquisa permite que você busque por artistas disponíveis na fake API.

## Fake API
A aplicação utiliza uma fake API para simular dados de artistas. a API está em ./src/ApiArtsts/artists.json

Para iniciar a api, vá para o diretório ApiArtists e digite no terminal:

`json-server --watch artists.json --port 2000`
> A API está por padrão na porta 2000, pois o React já estará utilizando a porta 3000. Caso deseje trocar, deverá fazer as devidas modificações no código para que a API seja consumida.
