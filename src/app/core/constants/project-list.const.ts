import { IProjectItem } from './../interfaces/project-item';

export const PROJECT_LIST_CONSTANT: IProjectItem[] = [
    {
        title: 'Landing Page Example',
        imageSource: '../../../assets/img/landing-page.png',
        info: 'Projeto de demonstração de uma landing page com possibilidade de cadastro, edição, exclusão e visualização (CRUD) das viagens. Foi utilizado Angular e Bootstrap para a construção do projeto.',
        githubLink: 'https://github.com/hugosique/landing-page-example',
        viewLink: 'https://landing-page-example-two.vercel.app/home',
    },
    {
        title: 'Calculadora',
        imageSource: '../../../assets/img/calculator_project.png',
        info: 'Projeto de uma calculadora simples, utilizando como protótipo a padrão do MAC. A Aplicação foi desenvolvida em React junto a um curso que fiz online.',
        githubLink: 'https://github.com/hugosique/react-calculator',
        viewLink: 'https://react-calculator-steel-eight.vercel.app/',
    },
    {
        title: 'Pokedex',
        imageSource: '../../../assets/img/pokedex_project.PNG',
        info: 'Projeto de uma Pokedex (pokemons, que são criaturas fictícias de uma animação). Angular foi utilizado para fazer esse projeto, e o mesmo foi feito em um curso online.',
        githubLink: 'https://github.com/hugosique/pokedex-project',
        viewLink: 'https://pokedex-project-amber-zeta.vercel.app/',
    },
];