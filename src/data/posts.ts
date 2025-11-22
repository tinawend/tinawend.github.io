export type PostBlock =
  | {
      type: 'text';
      content: string | { sv: string; en: string };
    }
  | {
      type: 'code';
      content: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string | { sv: string; en: string };
      caption?: string | { sv: string; en: string };
      size?: 'small' | 'big';
    };

export interface Post {
  id: number;
  title: string | { sv: string; en: string };
  excerpt: string | { sv: string; en: string };
  date: string;
  category: string | { sv: string; en: string };
  imageUrl: string;
  content: PostBlock[];
  contentEn?: PostBlock[]; // Optional English content
}

export const posts: Post[] = [
  {
    id: 1,
    title: { sv: 'AI-verktyget Cursor', en: 'The AI Tool Cursor' },
    excerpt: { sv: 'Idag har jag testat på ett nytt verktyg som heter Cursor!', en: 'Today I tried a new tool called Cursor!' },
    date: '2024-03-20',
    category: { sv: 'Teknik', en: 'Tech' },
    imageUrl: '/images/cursor.png',
    content: [
      {
        type: 'text',
        content: {
          sv: `Idag har jag testat på ett nytt verktyg som heter Cursor – och det var faktiskt riktigt roligt att jobba med! ✨

Jag använde det för att sätta upp grunderna till den här bloggen, som är byggd i React och TypeScript. Men vad är Cursor egentligen? Kort sagt är det en modern kodeditor med inbyggd AI som kan hjälpa en när man programmerar. Det betyder att man kan få förslag, tips och ibland till och med färdiga kodsnuttar direkt när man skriver. Lite som att ha en hjälpreda bredvid sig som alltid är redo med idéer.

För mig innebar det att jag kom igång snabbt, utan att behöva fastna i alla små tekniska detaljer som annars kan ta tid. Det kändes faktiskt ganska smidigt – jag kunde fokusera mer på själva bloggen och mindre på allt runtomkring.

Nu är grunden lagd, och jag ser fram emot att bygga vidare – både med fler inlägg och med lite mer personlighet i designen. 🚀`,
          en: `Today I tried a new tool called Cursor – and it was actually really fun to work with! ✨

I used it to set up the basics of this blog, which is built in React and TypeScript. But what is Cursor really? In short, it's a modern code editor with built-in AI that can help you when programming. This means you can get suggestions, tips and sometimes even ready-made code snippets directly as you write. A bit like having a helper next to you who's always ready with ideas.

For me, it meant I got started quickly, without getting stuck in all the small technical details that can otherwise take time. It actually felt quite smooth – I could focus more on the blog itself and less on everything around it.

Now the foundation is laid, and I look forward to building further – both with more posts and with a bit more personality in the design. 🚀`
        }
      }
    ]
  },
  {
    id: 2,
    title: { sv: 'Hemodlade tomater och hemlagad tomatsoppa', en: 'Homegrown tomatoes and homemade tomato soup' },
    excerpt: { sv: 'Idag har jag plockat tomater från trädgården och lagat ihop en god tomatsoppa.', en: 'Today I picked tomatoes from the garden and made a delicious tomato soup.' },
    date: '2025-08-10',
    category: { sv: 'Livsstil', en: 'Lifestyle' },
    imageUrl: '/images/homegrown-tomatoes.jpg',
    content: [
      {
        type: 'text',
        content: {
          sv: `Idag har jag varit ute på uteplatsen och plockat mina egna tomater – solmogna, söta och alldeles perfekta. Det känns faktiskt lite lyxigt att bara kunna gå ut och hämta dem direkt från krukan, nästan som att ha en liten marknad hemma.

När jag kom in ställde jag mig direkt vid spisen och kokade ihop en tomatsoppa. Den blev så himla god – enkel, men full av smak. Lite lök, vitlök och såklart mina tomater.

Att äta något man själv odlat gör verkligen skillnad. Soppan smakade extra gott, kanske mest för att jag vet varifrån varje liten tomat kommer. 🌿🍅`,
          en: `Today I was out on the patio and picked my own tomatoes – sun-ripened, sweet and absolutely perfect. It actually feels a bit luxurious to just be able to go out and pick them directly from the pot, almost like having a little market at home.

When I came in, I went straight to the stove and cooked up a tomato soup. It turned out so incredibly good – simple, but full of flavor. A bit of onion, garlic and of course my tomatoes.

Eating something you've grown yourself really makes a difference. The soup tasted extra good, maybe mostly because I know where every little tomato comes from. 🌿🍅`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Mitt enkla recept på tomatsoppa:

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
Toppa gärna med färska örter och kanske ett gott bröd till. 🍞`,
          en: `My simple tomato soup recipe:

About 1kg ripe tomatoes
1–2 yellow onions
4 garlic cloves
1 tbsp olive oil
2 vegetable bouillon cubes
about 4 dl water
Salt, pepper and a pinch of sugar
Fresh herbs like basil or thyme

Chop onion and garlic, sauté gently in olive oil.
Roughly chop the tomatoes and let them simmer in the pot for a few minutes.
Pour in the water and bouillon and let boil for about 15 minutes.
Blend the soup smooth and season with salt, pepper and a pinch of sugar.
Top with fresh herbs and maybe a good bread on the side. 🍞`
        }
      }
    ]
  },
  {
    id: 3,
    title: { sv: 'Internt test av min app på Google Play Console', en: 'Internal testing of my app on Google Play Console' },
    excerpt: { sv: 'Jag har nyligen publicerat min app för internt test på Google Play Console. Här berättar jag hur processen gick till.', en: 'I recently published my app for internal testing on Google Play Console. Here I tell you how the process went.' },
    date: '2025-11-07',
    category: { sv: 'Teknik', en: 'Tech' },
    imageUrl: '/images/google-play-test.png',
    content: [
      {
        type: 'text',
        content: {
          sv: `Jag har nyligen publicerat min app för internt test på Google Play Console 🎉. Det betyder att bara de personer jag bjuder in kan prova appen, vilket är perfekt för att hitta buggar och testa funktioner innan en bredare lansering.`,
          en: `I recently published my app for internal testing on Google Play Console 🎉. This means only the people I invite can try the app, which is perfect for finding bugs and testing features before a broader launch.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Så här gick jag tillväga:

1️⃣ Förbered appen: Se till att alla filer, ikoner och beskrivningar är på plats ✅

2️⃣ Skapa AAB-filen (Android App Bundle):
För Google Play krävs att appen laddas upp som en .aab-fil. Jag byggde filen via terminalen med kommandot:`,
          en: `Here's how I went about it:

1️⃣ Prepare the app: Make sure all files, icons and descriptions are in place ✅

2️⃣ Create the AAB file (Android App Bundle):
For Google Play, the app must be uploaded as a .aab file. I built the file via the terminal with the command:`
        }
      },
      {
        type: 'code',
        content: `./gradlew bundleRelease`
      },
      {
        type: 'text',
        content: {
          sv: `Detta genererar AAB-filen i mappen app/build/outputs/bundle/release/, redo att laddas upp ⚡

3️⃣ Skapa ett internt test: I Google Play Console finns en sektion för interna tester. Här lägger du till e-postadresserna till de personer som ska få testa appen ✉️

4️⃣ Ladda upp AAB-filen: När filen är redo laddar du upp den i Google Play Console. Systemet gör en snabb kontroll av filerna och säkerställer att allt är korrekt ⚡

5️⃣ Skicka ut inbjudningar: När uppladdningen är klar får testarna en länk via e-post och kan installera appen direkt på sina enheter 📲

Att använda internt test är ett smidigt sätt att säkerställa att appen fungerar som den ska innan den blir tillgänglig för alla. Det gör processen enkel både för utvecklaren och testarna, och minskar risken för buggar i den riktiga lanseringen.

Mer information om appen och nästa steg i lanseringen kommer snart – håll ögonen öppna! 👀`,
          en: `This generates the AAB file in the app/build/outputs/bundle/release/ folder, ready to upload ⚡

3️⃣ Create an internal test: In Google Play Console there's a section for internal testing. Here you add the email addresses of the people who should test the app ✉️

4️⃣ Upload the AAB file: When the file is ready, upload it to Google Play Console. The system does a quick check of the files and ensures everything is correct ⚡

5️⃣ Send out invitations: When the upload is complete, testers get a link via email and can install the app directly on their devices 📲

Using internal testing is a convenient way to ensure the app works as it should before it becomes available to everyone. It makes the process easy for both the developer and the testers, and reduces the risk of bugs in the real launch.

More information about the app and the next steps in the launch coming soon – keep your eyes open! 👀`
        }
      }
    ]
  },
  {
    id: 4,
    title: { sv: 'Halloweenstämning hemma 🎃', en: 'Halloween atmosphere at home 🎃' },
    excerpt: { sv: 'Lite höstpyssel med ljung, pumpor och glada barn i utklädnader!', en: 'A bit of autumn crafting with heather, pumpkins and happy children in costumes!' },
    date: '2025-11-02',
    category: { sv: 'Livsstil', en: 'Lifestyle' },
    imageUrl: '/images/halloween-decor.jpg',
    content: [
      {
        type: 'text',
        content: {
          sv: `Halloween kom och gick – men vilken mysig kväll det blev! 🍁

Jag planterade lite ljung i en kruka på uteplatsen, tillsammans med en prydnadspumpa och halloweenpumpan som min man gjorde. Det var så fint att se allt lysa upp i mörkret när kvällen kom. 🎃✨

Det var också roligt att se alla barn som gick runt och samlade godis! Så många fina utklädnader – allt från små katter till miniatyrhäxor. Man märker verkligen hur mycket glädje det sprider, både för barnen och oss som öppnar dörren.

Nu när ljusen i pumpan börjar ta slut känns det lite grått och tråkigt, men samtidigt mysigt att hösten fortsätter med sina färger och mörka kvällar och snart kan man nog smyga upp lite julljusslingor där ute med. 🍂🕯️`,
          en: `Halloween came and went – but what a cozy evening it was! 🍁

I planted some heather in a pot on the patio, together with a decorative pumpkin and the Halloween pumpkin my husband made. It was so beautiful to see everything light up in the dark when evening came. 🎃✨

It was also fun to see all the children going around collecting candy! So many nice costumes – everything from little cats to miniature witches. You really notice how much joy it spreads, both for the children and us who open the door.

Now that the lights in the pumpkin are starting to run out, it feels a bit gray and boring, but at the same time cozy that autumn continues with its colors and dark evenings and soon you can probably sneak up some Christmas light strings out there. 🍂🕯️`
        }
      }
    ]
  },
  {
    id: 5,
    title: { sv: 'En dag på Loka Brunn spa', en: 'A day at Loka Brunn spa' },
    excerpt: { sv: 'En heldag på spa. 💆‍♀️✨', en: 'A full day at the spa. 💆‍♀️✨' },
    date: '2025-11-12',
    category: { sv: 'Livsstil', en: 'Lifestyle' },
    imageUrl: '/images/loka-brunn-swim.jpg',
    content: [
      {
        type: 'text',
        content: {
          sv: `För ett tag sedan fick jag ett presentkort till Loka Brunn i 30-årspresent av min man – och nu har vi äntligen använt det. 💆‍♀️✨`,
          en: `A while ago I got a gift card to Loka Brunn as a 30th birthday present from my husband – and now we've finally used it. 💆‍♀️✨`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Vi bestämde oss för att åka dit nu i november, som en liten paus och chans att koppla av innan bebisen kommer. Det blev en heldag på spat medan farmor passade vår son hemma, och det var så skönt att bara få landa lite tillsammans. 🌿`,
          en: `We decided to go there now in November, as a little break and chance to relax before the baby comes. It became a full day at the spa while grandma took care of our son at home, and it was so nice to just be able to land a bit together. 🌿`
        }
      },
      {
        type: 'image',
        src: '/images/loka-brunn-fruit.jpg',
        alt: { sv: 'Inne i spaavdelningen på Loka Brunn', en: 'Inside the spa area at Loka Brunn' },
        caption: { sv: 'Poolhänget i den varma delen av spat.', en: 'The pool area in the warm part of the spa.' },
        size: 'big'
      },
      {
        type: 'text',
        content: {
          sv: `Vi passade på att unna oss lite gott att dricka och ett härligt frukt-fat inne på spaavdelningen vilket var härligt och gav en sån avslappnande känsla. 🍹🍇 Inne på spaavdelningen fanns flertal olika pooler, både en större och flera mindre, det fanns även flera utomhuspooler som blickade ut över den intilliggande sjön. 🌊 Min man provade även på att doppa ner sig i den kalla poolen efter bastun, vilket jag inte hade riktigt modet att göra. Jag fick även en ansiktskur under dagen med en mängd olika återfuktande produkter och en ansiktsmassage, och efteråt kände jag mig verkligen som en ny människa. 💆‍♀️✨ Det var verkligen välbehövligt, jag som är så torr i hyn annars.`,
          en: `We took the opportunity to treat ourselves to something good to drink and a lovely fruit platter in the spa area which was lovely and gave such a relaxing feeling. 🍹🍇 Inside the spa area there were several different pools, both a larger one and several smaller ones, there were also several outdoor pools that looked out over the adjacent lake. 🌊 My husband also tried dipping into the cold pool after the sauna, which I didn't quite have the courage to do. I also got a facial during the day with a variety of moisturizing products and a facial massage, and afterwards I really felt like a new person. 💆‍♀️✨ It was really much needed, I who am so dry in the skin otherwise.`
        }
      },
      {
        type: 'image',
        src: '/images/loka-brunn-forratt.jpeg',
        alt: { sv: 'Förrätt på Loka Brunn', en: 'Starter at Loka Brunn' },
        caption: { sv: 'En krämig förrätt med smak av höst.', en: 'A creamy starter with autumn flavors.' }
      },
      {
        type: 'image',
        src: '/images/loka-brunn-dessert.jpeg',
        alt: { sv: 'Dessert på Loka Brunn', en: 'Dessert at Loka Brunn' },
        caption: { sv: 'En fräsh blåbärsmousse med rom.', en: 'A fresh blueberry mousse with rum.' },
        size: 'small'
      },
      {
        type: 'text',
        content: {
          sv: `På kvällen åt vi middag där innan vi åkte hem – en perfekt avslutning på en riktigt lugn och mysig dag. 🍂 Till förrätt åt vi en fantastiskt god svampsoppa med en hint av tryffel, en svampemulsion i botten, picklade trattkantareller, lingon och grönkålschips. Till huvudrätt blev det rostbiff med pepparsås, rostad potatis, sotad lök, kål och pepparkrisp. Efterrätten var en blåbärsmousse med rom och en vit chokladkräm. Allt var verkligen super gott, men min favorit var defentivt förrätten. 🍽️`,
          en: `In the evening we had dinner there before we went home – a perfect ending to a really calm and cozy day. 🍂 For starter we had a fantastically good mushroom soup with a hint of truffle, a mushroom emulsion at the bottom, pickled chanterelles, lingonberries and kale chips. For main course it became roast beef with pepper sauce, roasted potatoes, caramelized onions, cabbage and pepper crisp. The dessert was a blueberry mousse with rum and a white chocolate cream. Everything was really super good, but my favorite was definitely the starter. 🍽️`
        }
      }
    ]
  },
  {
    id: 6,
    title: { sv: 'Egenodlad jalapeño och Carolina Reaper 🌶️', en: 'Homegrown jalapeño and Carolina Reaper 🌶️' },
    excerpt: { sv: 'Jag har skördat min jalapeño och picklat den i en klassisk 1-2-3-lag!', en: 'I harvested my jalapeño and pickled it in a classic 1-2-3 brine!' },
    date: '2025-11-09',
    category: { sv: 'Livsstil', en: 'Lifestyle' },
    imageUrl: '/images/jalapeno.jpg',
    content: [
      {
        type: 'text',
        content: {
          sv: `I år lyckades jag odla min favoritchili – jalapeño! 🌶️ Det blev en riktigt fin skörd, och jag bestämde mig för att pickla dem i en klassisk 1–2–3-lag (1 del ättika, 2 delar socker och 3 delar vatten). Så enkelt, men så gott! Perfekt till tacos, hamburgare eller bara som en liten extra kick i maten. 🔥`,
          en: `This year I managed to grow my favorite chili – jalapeño! 🌶️ It became a really good harvest, and I decided to pickle them in a classic 1–2–3 brine (1 part vinegar, 2 parts sugar and 3 parts water). So simple, but so good! Perfect for tacos, hamburgers or just as a little extra kick in the food. 🔥`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Så här gjorde jag:
  
  Jag skivade jalapeñon i tunna ringar och la dem i en väl rengjord glasburk. 
  Sedan kokade jag upp lagen:

  1 dl ättika
  2 dl socker
  3 dl vatten

  och rörde om tills sockret löst sig helt. När den kokat upp hällde jag den varma lagen direkt över chilin, satte på locket och lät burken svalna. Efter en dag i kylen hade jalapeñon fått den där perfekta balansen mellan syra, sötma och hetta. 🌶️💚`,
          en: `Here's how I did it:
  
  I sliced the jalapeños into thin rings and placed them in a well-cleaned glass jar. 
  Then I boiled up the brine:

  1 dl vinegar
  2 dl sugar
  3 dl water

  and stirred until the sugar dissolved completely. When it had boiled, I poured the hot brine directly over the chilies, put on the lid and let the jar cool. After a day in the fridge, the jalapeños had gotten that perfect balance between acidity, sweetness and heat. 🌶️💚`
        }
      },
      {
        type: 'image',
        src: '/images/c-reaper.jpg',
        alt: { sv: 'Carolina Reaper', en: 'Carolina Reaper' },
        caption: { sv: 'Världens starkaste chili.', en: 'The world\'s hottest chili.' },
        size: 'small'
      },
      {
        type: 'text',
        content: {
          sv: `Jag hade också en planta med Carolina Reaper – världens starkaste chili. Den gav bara tre frukter i år, och dessutom ganska få frön, men jag hoppas på lite bättre utdelning nästa säsong. Det är ändå något speciellt med att se de där knallröda, nästan skrämmande små frukterna växa fram. 😅🔥`,
          en: `I also had a plant with Carolina Reaper – the world's hottest chili. It only gave three fruits this year, and also quite few seeds, but I hope for a bit better yield next season. It's still something special to see those bright red, almost scary little fruits grow. 😅🔥`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Att odla chili har verkligen blivit en av mina favoritgrejer under säsongen – både rogivande och spännande på samma gång. Nu står burkarna med picklad jalapeño i kylen och väntar på att få ge lite hetta till höstmaten. 🌿✨`,
          en: `Growing chili has really become one of my favorite things during the season – both calming and exciting at the same time. Now the jars with pickled jalapeño are in the fridge waiting to add some heat to the autumn food. 🌿✨`
        }
      }
    ]
  },
  {
    id: 7,
    title: { sv: 'Snickers Cheesecake', en: 'Snickers Cheesecake' },
    excerpt: { sv: 'Jag har bakat en riktigt god Snickers-cheesecake – här är receptet! 🍫🥜', en: 'I baked a really good Snickers cheesecake – here\'s the recipe! 🍫🥜' },
    date: '2025-11-20',
    category: { sv: 'Livsstil', en: 'Lifestyle' },
    imageUrl: '/images/cake-peace.jpg',
    content: [
      {
        type: 'text',
        content: {
          sv: `Jag har bakat en Snickers-cheesecake – och alltså… det här kan vara bland det godaste jag gjort 🤤🍰✨
  
  Den är krämig, chokladig, jordnötssmörig och helt perfekt om man älskar Snickers (som jag gör!). Cheesecake råkar dessutom vara min mans absoluta favorit, så det kändes extra kul att testa just den här varianten 😄💛 
  Här kommer receptet så att du också kan testa:`,
          en: `I baked a Snickers cheesecake – and well… this might be among the best things I've made 🤤🍰✨
  
  It's creamy, chocolatey, peanut buttery and absolutely perfect if you love Snickers (like I do!). Cheesecake also happens to be my husband's absolute favorite, so it felt extra fun to try this particular variant 😄💛 
  Here's the recipe so you can try it too:`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Botten:
  200 g digestive
  70 g smör`,
          en: `Base:
  200 g digestive biscuits
  70 g butter`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Fyllning:
  300 g cream cheese
  150 g jordnötssmör
  100 g florsocker
  3 dl grädde`,
          en: `Filling:
  300 g cream cheese
  150 g peanut butter
  100 g powdered sugar
  3 dl cream`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Topping:
  5 Snickers bars
  1 dl grädde`,
          en: `Topping:
  5 Snickers bars
  1 dl cream`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Gör så här:
  1. Krossa digestivekexen till fina smulor. Smält smöret och blanda med kexsmulorna. Pressa ut i botten av en form med löstagbar kant och ställ i kylen.`,
          en: `Do this:
  1. Crush the digestive biscuits into fine crumbs. Melt the butter and mix with the biscuit crumbs. Press into the bottom of a springform pan and place in the fridge.`
        }
      },
      {
        type: 'image',
        src: '/images/cake-bottom.jpg',
        alt: { sv: 'Botten av Snickers-cheesecake', en: 'Base of Snickers cheesecake' },
        caption: { sv: 'Botten av Snickers-cheesecake.', en: 'Base of Snickers cheesecake.' },
        size: 'big'
      },
      {
        type: 'text',
        content: {
          sv: `
  2. Blanda cream cheese, jordnötssmör och florsocker till en jämn smet. Vänd ner den ovispade grädden i smeten. Bred ut allt över digestivebotten.`,
          en: `
  2. Mix cream cheese, peanut butter and powdered sugar into a smooth batter. Fold in the unwhipped cream. Spread everything over the digestive base.`
        }
      },
      {
        type: 'image',
        src: '/images/cake-cream.jpg',
        alt: { sv: 'fyllningen av Snickers-cheesecake', en: 'filling of Snickers cheesecake' },
        caption: { sv: 'fyllningen av Snickers-cheesecake.', en: 'filling of Snickers cheesecake.' },
        size: 'big'
      },
      {
        type: 'text',
        content: {
          sv: `
  3. Skär Snickers i bitar och värm tillsammans med grädden i micron tills det smält samman. Blanda ordentligt och låt svalna helt. Häll över cheesecaken och bred ut försiktigt.`,
          en: `
  3. Cut Snickers into pieces and heat together with the cream in the microwave until melted together. Mix thoroughly and let cool completely. Pour over the cheesecake and spread carefully.`
        }
      },
      {
        type: 'image',
        src: '/images/cake-top-layer.jpg',
        alt: { sv: 'topp-lagret av Snickers-cheesecake', en: 'top layer of Snickers cheesecake' },
        caption: { sv: 'topp-lagret av Snickers-cheesecake.', en: 'top layer of Snickers cheesecake.' },
        size: 'big'
      },
      {
        type: 'text',
        content: {
          sv: `
  4. Låt stå i kylen i minst 4 timmar – jag lät den stå över natten för bästa resultat ❄️🍰
  
  Servera och njut! 😉✨`,
          en: `
  4. Let stand in the fridge for at least 4 hours – I let it stand overnight for best results ❄️🍰
  
  Serve and enjoy! 😉✨`
        }
      },
    ]
  },
  {
    id: 8,
    title: { sv: 'Nyhet: Google Gemini 3 lanserad – och jag vill testa!', en: 'News: Google Gemini 3 launched – and I want to test it!' },
    excerpt: { sv: 'Google har släppt Gemini 3 med ny kodapp och rekordresultat – så här tänker jag kring det.', en: 'Google has released Gemini 3 with new coding app and record results – here\'s what I think about it.' },
    date: '2025-11-21',
    category: { sv: 'Teknik', en: 'Tech' },
    imageUrl: '/images/gemini3.png',
    content: [
      {
        type: 'text',
        content: {
          sv: `Nyheten har landat – Google har lanserat sitt senaste stora språkmodellsystem Gemini 3, bara sju månader efter Gemini 2.5. I samma svep har de även släppt en ny kodapp kallad Antigravity, som ska kombinera promptfält, terminal och webbläsare i ett enda flöde för kodare.`,
          en: `The news has landed – Google has launched its latest large language model system Gemini 3, just seven months after Gemini 2.5. In the same sweep, they've also released a new coding app called Antigravity, which should combine prompt field, terminal and browser in a single flow for coders.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Enligt TechCrunch uppnådde Gemini 3 ett benchmarkresultat på 37,4 på "Humanity's Last Exam" – betydligt högre än tidigare toppmodell. Källa: https://techcrunch.com/2025/11/18/google-launches-gemini-3-with-new-coding-app-and-record-benchmark-scores/`,
          en: `According to TechCrunch, Gemini 3 achieved a benchmark score of 37.4 on "Humanity's Last Exam" – significantly higher than the previous top model. Source: https://techcrunch.com/2025/11/18/google-launches-gemini-3-with-new-coding-app-and-record-benchmark-scores/`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Det här är förstås väldigt spännande för mig som utvecklare – tanken på att kunna använda ett verktyg som Antigravity, där kod, terminal och webbläsare samspelar, känns verkligen som ett steg framåt för arbetsflödet. Jag ser fram emot att testa det själv och se hur det fungerar i praktiken.`,
          en: `This is of course very exciting for me as a developer – the thought of being able to use a tool like Antigravity, where code, terminal and browser interact, really feels like a step forward for the workflow. I look forward to testing it myself and seeing how it works in practice.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Jag kommer att hålla koll på tillgänglighet och funktioner – och såklart återkomma med mina egna erfarenheter här på bloggen. Häng gärna med mig på den resan!`,
          en: `I'll keep an eye on availability and features – and of course come back with my own experiences here on the blog. Feel free to join me on that journey!`
        }
      }
    ]
  },
  {
    id: 9,
    title: { sv: 'Första testet av Google Gemini 3 Antigravity – smart hjälp för smarta hem', en: 'First test of Google Gemini 3 Antigravity – smart help for smart homes' },
    excerpt: { sv: 'Jag använde Googles nya kodapp Antigravity för att automatisera min julbelysning på uteplatsen.', en: 'I used Google\'s new coding app Antigravity to automate my Christmas lighting on the patio.' },
    date: '2025-11-22',
    category: { sv: 'Teknik', en: 'Tech' },
    imageUrl: '/images/antigravity-tasks.png',
    content: [
      {
        type: 'text',
        content: {
          sv: `Jag har testat Google Gemini 3 och deras nya utvecklingsverktyg Antigravity – och jag är imponerad! Antigravity är en smart kodapp som hjälper till med både idéer, planering och själva implementationen. Perfekt för någon som tycker det är spännande att blanda in teknik i sitt vardagsliv.`,
          en: `I've tested Google Gemini 3 and their new development tool Antigravity – and I'm impressed! Antigravity is a smart coding app that helps with both ideas, planning and the actual implementation. Perfect for someone who thinks it's exciting to mix technology into everyday life.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Mitt projekt den här gången var att automatisera julbelysningen på uteplatsen. Den ska tändas automatiskt kl 15:00 och släckas vid 09:00 på morgonen. En liten sak i vardagen, men så skönt att slippa gå ut i kylan för att tända och släcka själv!`,
          en: `My project this time was to automate the Christmas lighting on the patio. It should turn on automatically at 3:00 PM and turn off at 9:00 AM in the morning. A small thing in everyday life, but so nice to avoid going out in the cold to turn on and off yourself!`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Det jag gillade mest var hur Antigravity presenterade en tydlig task-lista och en implementation plan åt mig direkt när jag beskrev min idé. Den bröt ner allt i konkreta steg – från att identifiera rätt enhet i Home Assistant till att skapa automationen och testa att den fungerar.`,
          en: `What I liked most was how Antigravity presented a clear task list and an implementation plan for me directly when I described my idea. It broke everything down into concrete steps – from identifying the right device in Home Assistant to creating the automation and testing that it works.`
        }
      },
      {
        type: 'image',
        src: '/images/antigravity-implementation-plan.png',
        alt: { sv: 'Antigravity implementation plan', en: 'Antigravity implementation plan' },
        caption: { sv: 'Antigravity implementation plan.', en: 'Antigravity implementation plan.' },
        size: 'big'
      },
      {
        type: 'text',
        content: {
          sv: `Det gjorde processen väldigt enkel att följa och jag kunde bocka av varje steg allteftersom. Automationen fungerade direkt i mitt test, och nu tänds belysningen varje dag när mörkret faller.`,
          en: `It made the process very easy to follow and I could check off each step as I went. The automation worked immediately in my test, and now the lighting turns on every day when darkness falls.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Koden och den färdiga automationen finns upplagd på min GitHub för den som vill kika på den tekniska delen, eller för den som kanske själv vill skapa en liknande automation.`,
          en: `The code and the finished automation are posted on my GitHub for anyone who wants to check out the technical part, or for anyone who might want to create a similar automation themselves.`
        }
      },
      {
        type: 'text',
        content: {
          sv: `Jag ser verkligen fram emot att fortsätta testa fler idéer med Antigravity. Det känns som ett kraftfullt verktyg som gör det både snabbare och roligare att bygga smarta hem-lösningar.`,
          en: `I really look forward to continuing to test more ideas with Antigravity. It feels like a powerful tool that makes it both faster and more fun to build smart home solutions.`
        }
      }
    ]
  } 
];
