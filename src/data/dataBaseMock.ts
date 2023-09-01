export interface Post {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    date: string;
}

export const mockDataBase: Post[] = [
    {
        id: 1,
        title: 'Nova Montanha é descoberta na Antártica',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        `,
        imgUrl: 'https://picsum.photos/seed/picsum/600/300',
        date: '01/02/2021'
    },
    {
        id: 2,
        title: 'Curiosidade para o dia 1º de setembro!',
        description: `em 2000, era lançado o Nokia 3310, um dos aparelhos celulares mais icônicos da marca devido à sua reputação de durabilidade.`,
        imgUrl: 'https://media.istockphoto.com/id/517335772/pt/foto/nokia-3310-telem%C3%B3vel.jpg?s=612x612&w=0&k=20&c=WAEZxUF43I30-dX9VYhcKIPub-WzSvsS9J23w_wt8uU=',
        date: '01/09/2021'
    },
    {
        id: 3,
        title: 'Oportunidade de emprego!',
        description: 'vagas em startup industrial brasileira (avaliada em 1 bilhão de reais) e curso gratuito de inteligência artificial aplicada à análise de dados (aberto a todos os tipos de profissionais).',
        imgUrl: 'https://tudosobrehospedagemdesites.com.br/site/wp-content/uploads/2019/02/dominio-dev-topo-728x273.png',
        date: '01/10/2021'
    },
    {
        id: 4,
        title: 'Guilherme faz seu primeiro projeto com Angular!',
        description: 'O jovem dev fez um simples projeto de blog com Angular, e está muito feliz com o resultado!',
        imgUrl: 'https://media.licdn.com/dms/image/D4D03AQF2dXG6TZi40g/profile-displayphoto-shrink_400_400/0/1689694640164?e=1697068800&v=beta&t=1vXyxngvfxaE0fHOyn2f2FLsVq-ATM-fUnE0OWHlyVU',
        date: '01/09/2021'
    }
];