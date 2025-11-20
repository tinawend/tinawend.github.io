export type PostBlock =
  | {
      type: 'text';
      content: string;
    }
  | {
      type: 'code';
      content: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
      size?: 'small' | 'big';
    };

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
    imageUrl: '/images/cursor.png',
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
    imageUrl: '/images/homegrown-tomatoes.jpg',
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
    imageUrl: '/images/google-play-test.png',
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
  },
  {
    id: 4,
    title: 'Halloweenstämning hemma 🎃',
    excerpt: 'Lite höstpyssel med ljung, pumpor och glada barn i utklädnader!',
    date: '2025-11-02',
    category: 'Livsstil',
    imageUrl: '/images/halloween-decor.jpg',
    content: [
      {
        type: 'text',
        content: `Halloween kom och gick – men vilken mysig kväll det blev! 🍁

Jag planterade lite ljung i en kruka på uteplatsen, tillsammans med en prydnadspumpa och halloweenpumpan som min man gjorde. Det var så fint att se allt lysa upp i mörkret när kvällen kom. 🎃✨

Det var också roligt att se alla barn som gick runt och samlade godis! Så många fina utklädnader – allt från små katter till miniatyrhäxor. Man märker verkligen hur mycket glädje det sprider, både för barnen och oss som öppnar dörren.

Nu när ljusen i pumpan börjar ta slut känns det lite grått och tråkigt, men samtidigt mysigt att hösten fortsätter med sina färger och mörka kvällar och snart kan man nog smyga upp lite julljusslingor där ute med. 🍂🕯️`
      }
    ]
  },
  {
    id: 5,
    title: 'En dag på Loka Brunn spa',
    excerpt: 'En heldag på spa. 💆‍♀️✨',
    date: '2025-11-12',
    category: 'Livsstil',
    imageUrl: '/images/loka-brunn-swim.jpg',
    content: [
      {
        type: 'text',
        content: `För ett tag sedan fick jag ett presentkort till Loka Brunn i 30-årspresent av min man – och nu har vi äntligen använt det. 💆‍♀️✨`
      },
      {
        type: 'text',
        content: `Vi bestämde oss för att åka dit nu i november, som en liten paus och chans att koppla av innan bebisen kommer. Det blev en heldag på spat medan farmor passade vår son hemma, och det var så skönt att bara få landa lite tillsammans. 🌿`
      },
      {
        type: 'image',
        src: '/images/loka-brunn-fruit.jpg',
        alt: 'Inne i spaavdelningen på Loka Brunn',
        caption: 'Poolhänget i den varma delen av spat.',
        size: 'big'
      },
      {
        type: 'text',
        content: `Vi passade på att unna oss lite gott att dricka och ett härligt frukt-fat inne på spaavdelningen vilket var härligt och gav en sån avslappnande känsla. 🍹🍇 Inne på spaavdelningen fanns flertal olika pooler, både en större och flera mindre, det fanns även flera utomhuspooler som blickade ut över den intilliggande sjön. 🌊 Min man provade även på att doppa ner sig i den kalla poolen efter bastun, vilket jag inte hade riktigt modet att göra. Jag fick även en ansiktskur under dagen med en mängd olika återfuktande produkter och en ansiktsmassage, och efteråt kände jag mig verkligen som en ny människa. 💆‍♀️✨ Det var verkligen välbehövligt, jag som är så torr i hyn annars.`
      },
      {
        type: 'image',
        src: '/images/loka-brunn-forratt.jpeg',
        alt: 'Förrätt på Loka Brunn',
        caption: 'En krämig förrätt med smak av höst.'
      },
      {
        type: 'image',
        src: '/images/loka-brunn-dessert.jpeg',
        alt: 'Dessert på Loka Brunn',
        caption: 'En fräsh blåbärsmousse med rom.',
        size: 'small'
      },
      {
        type: 'text',
        content: `På kvällen åt vi middag där innan vi åkte hem – en perfekt avslutning på en riktigt lugn och mysig dag. 🍂 Till förrätt åt vi en fantastiskt god svampsoppa med en hint av tryffel, en svampemulsion i botten, picklade trattkantareller, lingon och grönkålschips. Till huvudrätt blev det rostbiff med pepparsås, rostad potatis, sotad lök, kål och pepparkrisp. Efterrätten var en blåbärsmousse med rom och en vit chokladkräm. Allt var verkligen super gott, men min favorit var defentivt förrätten. 🍽️`
      }
    ]
  },
  {
    id: 6,
    title: 'Egenodlad jalapeño och Carolina Reaper 🌶️',
    excerpt: 'Jag har skördat min jalapeño och picklat den i en klassisk 1-2-3-lag!',
    date: '2025-11-09',
    category: 'Livsstil',
    imageUrl: '/images/jalapeno.jpg',
    content: [
      {
        type: 'text',
        content: `I år lyckades jag odla min favoritchili – jalapeño! 🌶️ Det blev en riktigt fin skörd, och jag bestämde mig för att pickla dem i en klassisk 1–2–3-lag (1 del ättika, 2 delar socker och 3 delar vatten). Så enkelt, men så gott! Perfekt till tacos, hamburgare eller bara som en liten extra kick i maten. 🔥`
      },
      {
        type: 'text',
        content: `Så här gjorde jag:
  
  Jag skivade jalapeñon i tunna ringar och la dem i en väl rengjord glasburk. 
  Sedan kokade jag upp lagen:

  1 dl ättika
  2 dl socker
  3 dl vatten

  och rörde om tills sockret löst sig helt. När den kokat upp hällde jag den varma lagen direkt över chilin, satte på locket och lät burken svalna. Efter en dag i kylen hade jalapeñon fått den där perfekta balansen mellan syra, sötma och hetta. 🌶️💚`
      },
      {
        type: 'image',
        src: '/images/c-reaper.jpg',
        alt: 'Carolina Reaper',
        caption: 'Världens starkaste chili.',
        size: 'small'
      },
      {
        type: 'text',
        content: `Jag hade också en planta med Carolina Reaper – världens starkaste chili. Den gav bara tre frukter i år, och dessutom ganska få frön, men jag hoppas på lite bättre utdelning nästa säsong. Det är ändå något speciellt med att se de där knallröda, nästan skrämmande små frukterna växa fram. 😅🔥`
      },
      {
        type: 'text',
        content: `Att odla chili har verkligen blivit en av mina favoritgrejer under säsongen – både rogivande och spännande på samma gång. Nu står burkarna med picklad jalapeño i kylen och väntar på att få ge lite hetta till höstmaten. 🌿✨`
      }
    ]
  }  
];
