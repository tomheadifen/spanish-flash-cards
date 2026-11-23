// Sentence mining cards (Frases), from Weeks 1 and 2 at Taronja.
// Each card is one short sentence with one gap:
//   es:   the sentence, with ___ where the answer goes
//   a:    the answer that fills the gap
//   hint: optional, e.g. the verb and person to use
//   en:   English meaning
//   note: optional, shown on the back
// img on a topic is a file in images/ (without .webp), used in the Topics list.
window.SENTENCES = [
  { id: "s-yo", es: "Sobre mí", en: "About me", img: "waving-hand", cards: [
    { es: "Me ___ Tom.", a: "llamo", en: "My name's Tom.", note: "No \"es\": not \"me llamo es\"." },
    { es: "Soy ___ Nueva Zelanda.", a: "de", en: "I'm from New Zealand.", note: "ser de + place" },
    { es: "Hablo inglés y un ___ de español.", a: "poco", en: "I speak English and a little Spanish.", note: "Keep \"y\" and \"un poco de\"." },
    { es: "Tengo ___ y cinco años.", a: "treinta", en: "I'm 35.", note: "treinta (30), not \"trenta\"." }
  ]},
  { id: "s-preguntas", es: "Preguntas", en: "Questions", img: "thinking-face", cards: [
    { es: "¿___ te llamas?", a: "Cómo", en: "What's your name?", note: "cómo = how" },
    { es: "¿___ es tu apellido?", a: "Cuál", en: "What's your surname?", note: "cuál = which / what (choosing one)" },
    { es: "¿___ hermanos tienes?", a: "Cuántos", en: "How many siblings do you have?", note: "cuántos = how many. It agrees: cuántos hermanos, cuántas hermanas." },
    { es: "¿Dónde ___?", a: "vives", hint: "vivir, tú", en: "Where do you live?", note: "No \"de\" here." },
    { es: "¿De dónde ___?", a: "eres", hint: "ser, tú", en: "Where are you from?", note: "\"De dónde\" = from where. Compare: ¿Dónde vives?" },
    { es: "¿Cuántos ___ tienes?", a: "años", en: "How old are you?", note: "Age uses tener. Don't forget the ñ." },
    { es: "¿Cuánto ___?", a: "cuesta", en: "How much is it?", note: "Fixed phrase. Not \"cuartos\"." }
  ]},
  { id: "s-clase", es: "En clase", en: "In class", img: "teacher", cards: [
    { es: "No ___.", a: "comprendo", hint: "comprender, yo", en: "I don't understand.", note: "No \"h\": not \"comprehendo\"." },
    { es: "¿Puedes ___, por favor?", a: "repetir", en: "Can you repeat, please?" },
    { es: "¿Qué ___?", a: "significa", en: "What does it mean?" },
    { es: "¿Cómo se ___?", a: "escribe", en: "How do you spell it?" }
  ]},
  { id: "s-tener", es: "Tener y describir", en: "Tener & describing", img: "sleeping-face", cards: [
    { es: "Tengo ___.", a: "hambre", en: "I'm hungry.", note: "hambre = hunger. hombre = man!" },
    { es: "Tengo ___.", a: "sueño", en: "I'm sleepy.", note: "tener + noun. Not \"yo sueño\"." },
    { es: "Tengo un poco ___ hambre.", a: "de", en: "I'm a bit hungry.", note: "un poco de + noun" },
    { es: "Tengo un hermano y ___ hermana.", a: "una", en: "I have a brother and a sister.", note: "hermana is feminine → una" },
    { es: "Tiene los ojos ___.", a: "marrones", en: "He/she has brown eyes.", note: "Plural noun → plural adjective." }
  ]},
  { id: "s-frecuencia", es: "¿Con qué frecuencia?", en: "How often", img: "spiral-calendar", cards: [
    { es: "A veces ___ vino.", a: "bebo", hint: "beber, yo", en: "I sometimes drink wine.", note: "bebo = I drink. vivo = I live!" },
    { es: "___ escucho música.", a: "Siempre", en: "I always listen to music.", note: "siempre = always" },
    { es: "Canto ___ los días.", a: "todos", en: "I sing every day.", note: "todos los días = every day" }
  ]},
  { id: "s-verbos", es: "Verbos -er / -ir", en: "-er / -ir verbs", img: "pen", cards: [
    { es: "Él ___ mucha agua.", a: "bebe", hint: "beber", en: "He drinks a lot of water.", note: "-er verbs: él → -e (not -a)." },
    { es: "Vosotros ___ palabras difíciles.", a: "aprendéis", hint: "aprender", en: "You all learn difficult words.", note: "-er, vosotros → -éis" },
    { es: "Nosotros ___ mucho en clase.", a: "escribimos", hint: "escribir", en: "We write a lot in class.", note: "-ir, nosotros → -imos" }
  ]},

  // ---------- Week 2 ----------
  { id: "s-bota-ie", es: "Verbos e → ie", en: "e → ie verbs", img: "light-bulb", cards: [
    { es: "___ las llaves todos los días.", a: "Pierdo", hint: "perder, yo", en: "I lose my keys every day.", note: "e → ie in yo, tú, él, ellos." },
    { es: "Nosotros ___ a las ocho.", a: "empezamos", hint: "empezar, nosotros", en: "We start at eight.", note: "Nosotros doesn't change: not \"empiezamos\"." },
    { es: "La escuela ___ a las ocho.", a: "cierra", hint: "cerrar, ella", en: "The school closes at eight.", note: "cerrar → cierra" },
    { es: "Ellos no ___ la pregunta.", a: "entienden", hint: "entender, ellos", en: "They don't understand the question.", note: "-er verb: ellos → -en (not -an)." },
    { es: "¿Tú qué ___?", a: "piensas", hint: "pensar, tú", en: "What do you think?" },
    { es: "¿Vosotros ___ la paella?", a: "calentáis", hint: "calentar, vosotros", en: "Are you all heating up the paella?", note: "Vosotros doesn't change: not \"calientáis\"." },
    { es: "Freddy ___ a las cinco.", a: "merienda", hint: "merendar, él", en: "Freddy has his afternoon snack at five.", note: "merendar = to have an afternoon snack" },
    { es: "Mi hermana y yo ___ los platos.", a: "fregamos", hint: "fregar, nosotros", en: "My sister and I wash the dishes.", note: "mi hermana y yo = nosotros → no change." },
    { es: "Normalmente ___ ir solo.", a: "prefiero", hint: "preferir, yo", en: "I usually prefer to go alone." },
    { es: "Tú siempre ___.", a: "mientes", hint: "mentir, tú", en: "You always lie." },
    { es: "Lo ___.", a: "siento", en: "I'm sorry.", note: "Fixed phrase, from sentir (to feel)." }
  ]},
  { id: "s-bota-ue", es: "Verbos o → ue", en: "o → ue verbs", img: "bed", cards: [
    { es: "___ ocho horas todas las noches.", a: "Duermo", hint: "dormir, yo", en: "I sleep eight hours every night." },
    { es: "Esta noche ___ en el hotel.", a: "dormimos", hint: "dormir, nosotros", en: "Tonight we're sleeping at the hotel.", note: "Nosotros doesn't change: not \"duermimos\"." },
    { es: "¿___ mi nombre?", a: "Recuerdas", hint: "recordar, tú", en: "Do you remember my name?", note: "-ar verb: tú → -as (not \"recuerdes\")." },
    { es: "No ___ mi teléfono.", a: "encuentro", hint: "encontrar, yo", en: "I can't find my phone.", note: "Spanish says \"I don't find\"." },
    { es: "¿Cuándo ___ a tu país?", a: "vuelves", hint: "volver, tú", en: "When are you going back to your country?" },
    { es: "No ___ beber alcohol.", a: "puedo", hint: "poder, yo", en: "I can't drink alcohol." },
    { es: "Sara ___ al tenis tres veces al mes.", a: "juega", hint: "jugar, ella", en: "Sara plays tennis three times a month.", note: "jugar is u → ue: not \"juga\". Jugar al + sport." },
    { es: "¿Vosotros ___ al fútbol?", a: "jugáis", hint: "jugar, vosotros", en: "Do you all play football?", note: "Vosotros doesn't change." },
    { es: "Elena ___ con un chico guapo.", a: "sueña", hint: "soñar, ella", en: "Elena dreams about a handsome guy.", note: "-ar verb: él/ella → -a (not \"sueñe\"). Soñar con = dream about." },
    { es: "Mis amigos ___ muchos vinos.", a: "prueban", hint: "probar, ellos", en: "My friends try lots of wines.", note: "o → ue: not \"proban\"." },
    { es: "Ella ___ el dinero.", a: "cuenta", hint: "contar, ella", en: "She counts the money.", note: "-ar verb: él/ella → -a (not \"cuente\")." },
    { es: "El avión ___ a Madrid.", a: "vuela", hint: "volar, él", en: "The plane flies to Madrid." }
  ]},
  { id: "s-bota-i", es: "Verbos e → i", en: "e → i verbs", img: "face-with-tears-of-joy", cards: [
    { es: "Sara siempre ___ café con leche.", a: "pide", hint: "pedir, ella", en: "Sara always orders a white coffee." },
    { es: "¿Qué ___ para desayunar?", a: "pides", hint: "pedir, tú", en: "What do you order for breakfast?", note: "Tú → pides. \"Pedís\" is vosotros." },
    { es: "Nosotros ___ ayuda al profesor.", a: "pedimos", hint: "pedir, nosotros", en: "We ask the teacher for help.", note: "Nosotros doesn't change." },
    { es: "La profesora ___ la explicación.", a: "repite", hint: "repetir, ella", en: "The teacher repeats the explanation." },
    { es: "Yo ___ las normas.", a: "sigo", hint: "seguir, yo", en: "I follow the rules.", note: "seguir → sigo: the u disappears." },
    { es: "Juana siempre ___ sus objetivos.", a: "consigue", hint: "conseguir, ella", en: "Juana always achieves her goals." },
    { es: "Victoria siempre ___.", a: "sonríe", hint: "sonreír, ella", en: "Victoria always smiles.", note: "Accent on the í: sonríe." },
    { es: "Mis amigos y yo ___ mucho.", a: "reímos", hint: "reír, nosotros", en: "My friends and I laugh a lot.", note: "mis amigos y yo = nosotros" },
    { es: "Yo ___ un vino blanco.", a: "elijo", hint: "elegir, yo", en: "I choose a white wine.", note: "g → j before o: elijo." }
  ]},
  { id: "s-sombrero", es: "Yo especial", en: "Special yo forms", img: "womans-hat", cards: [
    { es: "___ yoga los jueves.", a: "Hago", hint: "hacer, yo", en: "I do yoga on Thursdays.", note: "Only yo is irregular: hago, haces, hace…" },
    { es: "___ de casa a las ocho.", a: "Salgo", hint: "salir, yo", en: "I leave home at eight." },
    { es: "___ la radio.", a: "Oigo", hint: "oír, yo", en: "I hear the radio." },
    { es: "___ un Subaru.", a: "Conduzco", hint: "conducir, yo", en: "I drive a Subaru.", note: "-ducir → -duzco" },
    { es: "___ Valencia.", a: "Conozco", hint: "conocer, yo", en: "I know Valencia.", note: "conocer = know people and places." },
    { es: "___ la botella a Thomas.", a: "Doy", hint: "dar, yo", en: "I give the bottle to Thomas." },
    { es: "___ en Valencia.", a: "Estoy", hint: "estar, yo", en: "I'm in Valencia.", note: "Location → estar." },
    { es: "No lo ___.", a: "sé", hint: "saber, yo", en: "I don't know.", note: "Fixed phrase. sé has an accent." },
    { es: "___ a la escuela todos los días.", a: "Vengo", hint: "venir, yo", en: "I come to school every day." },
    { es: "¿Qué ___?", a: "dices", hint: "decir, tú", en: "What are you saying? / Pardon?", note: "Useful in a noisy bar." }
  ]},
  { id: "s-ir", es: "Ir y planes", en: "Going & plans", img: "airplane", cards: [
    { es: "___ al supermercado.", a: "Voy", hint: "ir, yo", en: "I'm going to the supermarket.", note: "a + el = al" },
    { es: "Vamos ___ Madrid en coche.", a: "a", en: "We're going to Madrid by car.", note: "ir a + place. Not \"a en\"." },
    { es: "Voy a trabajar ___ autobús.", a: "en", en: "I go to work by bus.", note: "en + transport" },
    { es: "Vamos a la escuela ___ pie.", a: "a", en: "We walk to school.", note: "a pie (on foot) is the exception: not \"en pie\"." },
    { es: "Esta noche ___ a ver una serie.", a: "voy", hint: "ir, yo", en: "Tonight I'm going to watch a series.", note: "ir a + infinitive = the future" },
    { es: "¿Qué ___ a hacer este fin de semana?", a: "vais", hint: "ir, vosotros", en: "What are you all going to do this weekend?" },
    { es: "Mañana vamos ___ visitar la montaña.", a: "a", en: "Tomorrow we're going to visit the mountains.", note: "Don't drop the a: vamos a + infinitive." },
    { es: "Vamos a viajar la semana que ___.", a: "viene", en: "We're going to travel next week.", note: "la semana que viene = la próxima semana" },
    { es: "Mis amigos ___ a ir a la playa.", a: "van", hint: "ir, ellos", en: "My friends are going to go to the beach." },
    { es: "Vamos a dormir ___ casa.", a: "en", en: "We're going to sleep at home.", note: "dormir en (not a)." }
  ]},
  { id: "s-gustar", es: "Gustar", en: "Likes", img: "smiling-face-with-heart-eyes", cards: [
    { es: "Me ___ la paella.", a: "gusta", en: "I like paella.", note: "One thing → gusta" },
    { es: "Me ___ las tapas.", a: "gustan", en: "I like tapas.", note: "Plural → gustan" },
    { es: "¿A ti ___ gusta viajar?", a: "te", en: "Do you like travelling?", note: "Don't drop the pronoun. \"A ti\" is optional, \"te\" isn't." },
    { es: "A nosotros ___ gusta bailar.", a: "nos", en: "We like dancing.", note: "nos (us), not os (you all)." },
    { es: "A mis amigos ___ gusta salir de fiesta.", a: "les", en: "My friends like going out partying." },
    { es: "A Juan ___ gustan los animales.", a: "le", en: "Juan likes animals." },
    { es: "¿A vosotros ___ gustan los deportes?", a: "os", en: "Do you all like sport?" },
    { es: "Me gusta ___ cerveza.", a: "la", en: "I like beer.", note: "Gustar + article: me gusta la cerveza." },
    { es: "Me ___ viajar.", a: "encanta", en: "I love travelling.", note: "encantar works like gustar." },
    { es: "Me gusta leer, ¿y a ___?", a: "ti", en: "I like reading, what about you?" }
  ]},
  { id: "s-saber", es: "Saber o poder", en: "Saber or poder", img: "brain", cards: [
    { es: "¿___ bailar salsa?", a: "Sabes", hint: "saber, tú", en: "Can you dance salsa?", note: "saber + infinitive = know how to" },
    { es: "¿___ hablar español?", a: "Sabéis", hint: "saber, vosotros", en: "Can you all speak Spanish?" },
    { es: "Mi hermana ___ tocar el piano.", a: "sabe", hint: "saber o poder, ella", en: "My sister can play the piano.", note: "A skill → saber" },
    { es: "No ___ cocinar paella. No conozco la receta.", a: "sé", hint: "saber o poder, yo", en: "I can't cook paella. I don't know the recipe.", note: "Don't know how → saber" },
    { es: "No ___ jugar al fútbol. Tengo una pierna rota.", a: "puedo", hint: "saber o poder, yo", en: "I can't play football. I've got a broken leg.", note: "Physically can't → poder" },
    { es: "Marta no ___ cocinar gazpacho porque no tiene tomates.", a: "puede", hint: "saber o poder, ella", en: "Marta can't make gazpacho because she has no tomatoes.", note: "Not possible right now → poder" }
  ]},
  { id: "s-semana", es: "Mi semana", en: "My week", img: "alarm-clock", cards: [
    { es: "___ lunes voy al gimnasio.", a: "Los", en: "On Mondays I go to the gym.", note: "los + day = every Monday" },
    { es: "Hago la compra todos los ___.", a: "sábados", en: "I do the food shopping every Saturday." },
    { es: "Sara baila salsa una ___ a la semana.", a: "vez", en: "Sara dances salsa once a week.", note: "una vez, dos veces" },
    { es: "Juega al tenis tres ___ al mes.", a: "veces", en: "He plays tennis three times a month.", note: "vez → veces (z → c)" },
    { es: "Salgo con mis amigos casi ___ los fines de semana.", a: "todos", en: "I go out with my friends almost every weekend." },
    { es: "No tomo café ___.", a: "nunca", en: "I never drink coffee.", note: "= Nunca tomo café." },
    { es: "Mi cumpleaños es en ___.", a: "noviembre", en: "My birthday is in November.", note: "Months have no capital letter." }
  ]},
  { id: "s-tienda", es: "En la tienda de ropa", en: "At the clothes shop", img: "shopping-bags", cards: [
    { es: "¿Tienes esta camiseta en otro ___?", a: "color", en: "Do you have this T-shirt in another colour?", note: "en + colour: en azul, en negro…" },
    { es: "¿Tienes la ___ M?", a: "talla", en: "Do you have it in a medium?", note: "la talla = the size" },
    { es: "Ahora te la ___.", a: "traigo", hint: "traer, yo", en: "I'll bring it to you now.", note: "traer → traigo. \"Te la\" (it to you) is a fixed phrase for now." },
    { es: "¿Dónde están los ___?", a: "probadores", en: "Where are the fitting rooms?" },
    { es: "Las camisas están en la primera ___.", a: "planta", en: "The shirts are on the first floor.", note: "planta baja = ground floor" },
    { es: "¿Cuánto ___ los vaqueros?", a: "cuestan", hint: "costar, ellos", en: "How much are the jeans?", note: "Plural → cuestan" },
    { es: "¿Efectivo o ___?", a: "tarjeta", en: "Cash or card?" },
    { es: "Lo siento, no me ___.", a: "quedan", en: "Sorry, we haven't got any left.", note: "Fixed phrase in shops." }
  ]},
  { id: "s-restaurante", es: "En el restaurante", en: "At the restaurant", img: "fork-and-knife-with-plate", cards: [
    { es: "¿Qué te ___?", a: "pongo", en: "What can I get you?", note: "The waiter's phrase. poner → pongo." },
    { es: "¿Qué hay de ___?", a: "primero", en: "What's there for the first course?", note: "de primero, de segundo, de postre" },
    { es: "De segundo, ___ pollo al horno.", a: "quiero", hint: "querer, yo", en: "For the main, I'd like roast chicken." },
    { es: "Para ___, vino tinto.", a: "beber", en: "To drink, red wine." },
    { es: "Quiero carne con ___.", a: "patatas", en: "I'd like meat with potatoes.", note: "la guarnición = the side dish" },
    { es: "¿Qué ___ el gazpacho?", a: "lleva", en: "What's in the gazpacho?", note: "llevar = to contain (for food)" },
    { es: "Ellos ___ tres vasos de agua.", a: "piden", hint: "pedir, ellos", en: "They order three glasses of water." },
    { es: "Perdona, ¿me traes otra ___ de vino?", a: "copa", en: "Excuse me, can you bring me another glass of wine?", note: "una copa = a wine glass. un vaso = a glass (water)." },
    { es: "¿Nos traes la ___, por favor?", a: "cuenta", en: "Can you bring us the bill, please?" },
    { es: "¿Puedo ___?", a: "repetir", en: "Can I have more?", note: "With food, repetir = have seconds." }
  ]},
  { id: "s-hotel", es: "En el hotel", en: "At the hotel", img: "hotel", cards: [
    { es: "¿Tienen habitaciones ___?", a: "libres", en: "Do you have any rooms available?" },
    { es: "Quiero una habitación ___.", a: "doble", en: "I'd like a double room." },
    { es: "Tres ___, por favor.", a: "noches", en: "Three nights, please." },
    { es: "Somos una ___ con un niño.", a: "pareja", en: "We're a couple with a child." },
    { es: "¿El desayuno está ___?", a: "incluido", en: "Is breakfast included?" },
    { es: "La entrada es a ___ de las dos.", a: "partir", en: "Check-in is from two o'clock.", note: "a partir de = from (a time)" },
    { es: "¿Puedo hacer una ___?", a: "reserva", en: "Can I make a booking?" }
  ]}
];
