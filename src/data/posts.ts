export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Kom igång med React och TypeScript',
    excerpt: 'Lär dig bygga moderna webbapplikationer med React och TypeScript. Vi går igenom allt från installation till driftsättning.',
    date: '2024-03-20',
    category: 'Teknik',
    imageUrl: '/blog/images/react-typescript.jpg',
    content: `React och TypeScript är en kraftfull kombination för att bygga moderna webbapplikationer. I denna guide går vi igenom hur du installerar nödvändiga verktyg, sätter upp ett nytt projekt och skriver din första komponent. Vi diskuterar även typning, props och state i TypeScript, samt hur du kan dra nytta av typkontroll för att undvika vanliga buggar. Slutligen visar vi hur du bygger och distribuerar din applikation till produktion.`,
  },
  {
    id: 2,
    title: 'Bästa praxis för React-utveckling',
    excerpt: 'Upptäck bästa praxis och mönster för att bygga skalbara React-applikationer.',
    date: '2024-03-21',
    category: 'Teknik',
    imageUrl: '/blog/images/react-best-practices.jpg',
    content: `För att bygga skalbara och underhållbara React-appar är det viktigt att följa vissa principer. Använd återanvändbara komponenter, håll logik och presentation separerade, och dra nytta av hooks för att hantera state och sid-effekter. Strukturera din kod i mappar och använd TypeScript för att få bättre typkontroll. Testa dina komponenter och använd verktyg som ESLint och Prettier för att hålla koden ren.`,
  },
  {
    id: 3,
    title: 'Förstå TypeScript-typer',
    excerpt: 'Djupdyk i TypeScript-typer och hur de kan göra din kod mer robust.',
    date: '2024-03-22',
    category: 'Teknik',
    imageUrl: '/blog/images/typescript-types.jpg',
    content: `TypeScript erbjuder ett rikt typ-system som hjälper dig att skriva säkrare kod. Lär dig skillnaden mellan primitiva typer, gränssnitt (interfaces), typer (types) och generiska typer. Vi visar exempel på hur du kan använda union types, type guards och typalias för att skapa flexibla och robusta applikationer.`,
  },
  {
    id: 4,
    title: 'Moderna verktyg för webbutveckling',
    excerpt: 'Utforska viktiga verktyg och hjälpmedel för modern webbutveckling.',
    date: '2024-03-23',
    category: 'Teknik',
    imageUrl: '/blog/images/web-development-tools.jpg',
    content: `Det finns många verktyg som kan effektivisera din utvecklingsprocess. Några populära är VS Code, Git, Prettier, ESLint och olika browser extensions. Vi går igenom hur du installerar och konfigurerar dessa verktyg, samt tips på plugins och inställningar som kan göra dig mer produktiv som utvecklare.`,
  },
  {
    id: 5,
    title: 'Hemodlade tomater och hemlagad tomatsoppa',
    excerpt: 'Idag har jag plockat tomater från trädgården och lagat ihop en god tomatsoppa.',
    date: '2025-08-10',
    category: 'Livsstil',
    imageUrl: '/blog/images/homegrown-tomatoes.jpg',
    content: `Idag har jag varit ute på uteplatsen och plockat mina egna tomater – solmogna, söta och alldeles perfekta. Det känns faktiskt lite lyxigt att bara kunna gå ut och hämta dem direkt från krukan, nästan som att ha en liten marknad hemma.

När jag kom in ställde jag mig direkt vid spisen och kokade ihop en tomatsoppa. Den blev så himla god – enkel, men full av smak. Lite lök, vitlök och såklart mina tomater.

Att äta något man själv odlat gör verkligen skillnad. Soppan smakade extra gott, kanske mest för att jag vet varifrån varje liten tomat kommer. 🌿🍅

Mitt enkla recept på tomatsoppa:

Ca 1kg mogna tomater

1-2 gul lök

4 vitlöksklyftor

1 msk olivolja

2st grönsaksbuljongtärningar

ca 4 dl vatten

Salt, peppar och en nypa socker

Färska örter som basilika eller timjan

Hacka lök och vitlök, fräs mjukt i olivolja.

Grovhacka tomaterna och låt dem puttra med i kastrullen i några minuter.

Häll på vattnet och buljongen och låt koka ca 15 minuter.

Mixa soppan slät och smaka av med salt, peppar och en nypa socker.

Toppa gärna med färska örter och kanske ett gott bröd till.`,
  },
]; 