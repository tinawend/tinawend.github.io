export interface PostBlock {
  type: 'text' | 'code';
  content: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  content: PostBlock[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'AI-verktyget Cursor',
    excerpt: 'Idag har jag testat på ett nytt verktyg som heter Cursor!',
    date: '2024-03-20',
    category: 'Teknik',
    imageUrl: '/blog/images/cursor.png',
    content: [
      {
        type: 'text',
        content: `Idag har jag testat på ett nytt verktyg som heter Cursor – och det var faktiskt riktigt roligt att jobba med! ✨

Jag använde det för att sätta upp grunderna till den här bloggen, som är byggd i React och TypeScript. Men vad är Cursor egentligen? Kort sagt är det en modern kodeditor med inbyggd AI som kan hjälpa en när man programmerar. Det betyder att man kan få förslag, tips och ibland till och med färdiga kodsnuttar direkt när man skriver. Lite som att ha en hjälpreda bredvid sig som alltid är redo med idéer.

För mig innebar det att jag kom igång snabbt, utan att behöva fastna i alla små tekniska detaljer som annars kan ta tid. Det kändes faktiskt ganska smidigt – jag kunde fokusera mer på själva bloggen och mindre på allt runtomkring.

Nu är grunden lagd, och jag ser fram emot att bygga vidare – både med fler inlägg och med lite mer personlighet i designen. 🚀`
      }
    ]
  },
  {
    id: 2,
    title: 'Hemodlade tomater och hemlagad tomatsoppa',
    excerpt: 'Idag har jag plockat tomater från trädgården och lagat ihop en god tomatsoppa.',
    date: '2025-08-10',
    category: 'Livsstil',
    imageUrl: '/blog/images/homegrown-tomatoes.jpg',
    content: [
      {
        type: 'text',
        content: `Idag har jag varit ute på uteplatsen och plockat mina egna tomater – solmogna, söta och alldeles perfekta. Det känns faktiskt lite lyxigt att bara kunna gå ut och hämta dem direkt från krukan, nästan som att ha en liten marknad hemma.

När jag kom in ställde jag mig direkt vid spisen och kokade ihop en tomatsoppa. Den blev så himla god – enkel, men full av smak. Lite lök, vitlök och såklart mina tomater.

Att äta något man själv odlat gör verkligen skillnad. Soppan smakade extra gott, kanske mest för att jag vet varifrån varje liten tomat kommer. 🌿🍅`
      },
      {
        type: 'text',
        content: `Mitt enkla recept på tomatsoppa:

Ca 1kg mogna tomater
1–2 gula lökar
4 vitlöksklyftor
1 msk olivolja
2 st grönsaksbuljongtärningar
ca 4 dl vatten
Salt, peppar och en nypa socker
Färska örter som basilika eller timjan

Hacka lök och vitlök, fräs mjukt i olivolja.
Grovhacka tomaterna och låt dem puttra med i kastrullen i några minuter.
Häll på vattnet och buljongen och låt koka ca 15 minuter.
Mixa soppan slät och smaka av med salt, peppar och en nypa socker.
Toppa gärna med färska örter och kanske ett gott bröd till. 🍞`
      }
    ]
  },
  {
    id: 3,
    title: 'Internt test av min app på Google Play Console',
    excerpt: 'Jag har nyligen publicerat min app för internt test på Google Play Console. Här berättar jag hur processen gick till.',
    date: '2025-11-07',
    category: 'Teknik',
    imageUrl: '/blog/images/google-play-test.png',
    content: [
      {
        type: 'text',
        content: `Jag har nyligen publicerat min app för internt test på Google Play Console 🎉. Det betyder att bara de personer jag bjuder in kan prova appen, vilket är perfekt för att hitta buggar och testa funktioner innan en bredare lansering.`
      },
      {
        type: 'text',
        content: `Så här gick jag tillväga:

1️⃣ Förbered appen: Se till att alla filer, ikoner och beskrivningar är på plats ✅

2️⃣ Skapa AAB-filen (Android App Bundle):
För Google Play krävs att appen laddas upp som en .aab-fil. Jag byggde filen via terminalen med kommandot:`
      },
      {
        type: 'code',
        content: `./gradlew bundleRelease`
      },
      {
        type: 'text',
        content: `Detta genererar AAB-filen i mappen app/build/outputs/bundle/release/, redo att laddas upp ⚡

3️⃣ Skapa ett internt test: I Google Play Console finns en sektion för interna tester. Här lägger du till e-postadresserna till de personer som ska få testa appen ✉️

4️⃣ Ladda upp AAB-filen: När filen är redo laddar du upp den i Google Play Console. Systemet gör en snabb kontroll av filerna och säkerställer att allt är korrekt ⚡

5️⃣ Skicka ut inbjudningar: När uppladdningen är klar får testarna en länk via e-post och kan installera appen direkt på sina enheter 📲

Att använda internt test är ett smidigt sätt att säkerställa att appen fungerar som den ska innan den blir tillgänglig för alla. Det gör processen enkel både för utvecklaren och testarna, och minskar risken för buggar i den riktiga lanseringen.

Mer information om appen och nästa steg i lanseringen kommer snart – håll ögonen öppna! 👀`
      }
    ]
  }
];
