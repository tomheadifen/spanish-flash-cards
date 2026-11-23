// Verb conjugation practice (Verbos), from Weeks 1 and 2 at Taronja. Present tense only.
// Each verb:
//   v:  the infinitive
//   en: English meaning
//   f:  the six present-tense forms (yo, tú, él, nosotros, vosotros, ellos), space separated.
//       Leave f out for fully regular verbs: the app builds the forms from the -ar / -er / -ir endings.
// Wrong answers ("fakes") are generated automatically from common mistakes.
// img on a topic is a file in images/ (without .webp), used in the Topics list.
window.VERBS = [
  { id: "v-ar", es: "Regulares -ar", en: "Regular -ar verbs", img: "musical-note", cards: [
    { v: "hablar", en: "to speak" }, { v: "bailar", en: "to dance" }, { v: "cantar", en: "to sing" },
    { v: "caminar", en: "to walk" }, { v: "comprar", en: "to buy" }, { v: "desayunar", en: "to have breakfast" },
    { v: "escuchar", en: "to listen" }, { v: "estudiar", en: "to study" }, { v: "fumar", en: "to smoke" },
    { v: "llegar", en: "to arrive" }, { v: "llevar", en: "to wear / carry" }, { v: "necesitar", en: "to need" },
    { v: "practicar", en: "to practise" }, { v: "preguntar", en: "to ask" }, { v: "tocar", en: "to play (an instrument)" },
    { v: "tomar", en: "to take / have" }, { v: "trabajar", en: "to work" }, { v: "usar", en: "to use" },
    { v: "viajar", en: "to travel" }, { v: "bajar", en: "to go down" }, { v: "dibujar", en: "to draw" },
    { v: "cocinar", en: "to cook" }, { v: "nadar", en: "to swim" }, { v: "cenar", en: "to have dinner" },
    { v: "celebrar", en: "to celebrate" }, { v: "limpiar", en: "to clean" }, { v: "llorar", en: "to cry" },
    { v: "pagar", en: "to pay" }, { v: "pintar", en: "to paint" }, { v: "visitar", en: "to visit" },
    { v: "cambiar", en: "to change" }, { v: "entrar", en: "to go in" }, { v: "pasear", en: "to go for a walk" },
    { v: "pescar", en: "to fish" }, { v: "silbar", en: "to whistle" }, { v: "pasar", en: "to spend (time)" },
    { v: "esquiar", en: "to ski", f: "esquío esquías esquía esquiamos esquiáis esquían" }
  ]},
  { id: "v-er", es: "Regulares -er", en: "Regular -er verbs", img: "fork-and-knife", cards: [
    { v: "comer", en: "to eat" }, { v: "beber", en: "to drink" }, { v: "aprender", en: "to learn" },
    { v: "comprender", en: "to understand" }, { v: "correr", en: "to run" }, { v: "creer", en: "to believe / think" },
    { v: "leer", en: "to read" }, { v: "vender", en: "to sell" }
  ]},
  { id: "v-ir", es: "Regulares -ir", en: "Regular -ir verbs", img: "house", cards: [
    { v: "vivir", en: "to live" }, { v: "escribir", en: "to write" }, { v: "abrir", en: "to open" },
    { v: "compartir", en: "to share" }, { v: "decidir", en: "to decide" }, { v: "partir", en: "to cut / split" },
    { v: "recibir", en: "to receive" }, { v: "subir", en: "to go up" }
  ]},
  { id: "v-ie", es: "Cambio e → ie", en: "e → ie stem change", img: "light-bulb", cards: [
    { v: "pensar", en: "to think", f: "pienso piensas piensa pensamos pensáis piensan" },
    { v: "querer", en: "to want / love", f: "quiero quieres quiere queremos queréis quieren" },
    { v: "sentir", en: "to feel", f: "siento sientes siente sentimos sentís sienten" },
    { v: "empezar", en: "to start", f: "empiezo empiezas empieza empezamos empezáis empiezan" },
    { v: "cerrar", en: "to close", f: "cierro cierras cierra cerramos cerráis cierran" },
    { v: "perder", en: "to lose", f: "pierdo pierdes pierde perdemos perdéis pierden" },
    { v: "entender", en: "to understand", f: "entiendo entiendes entiende entendemos entendéis entienden" },
    { v: "preferir", en: "to prefer", f: "prefiero prefieres prefiere preferimos preferís prefieren" },
    { v: "mentir", en: "to lie", f: "miento mientes miente mentimos mentís mienten" },
    { v: "fregar", en: "to wash (dishes)", f: "friego friegas friega fregamos fregáis friegan" },
    { v: "merendar", en: "to have an afternoon snack", f: "meriendo meriendas merienda merendamos merendáis meriendan" },
    { v: "calentar", en: "to heat up", f: "caliento calientas calienta calentamos calentáis calientan" },
    { v: "confesar", en: "to confess", f: "confieso confiesas confiesa confesamos confesáis confiesan" },
    { v: "despertar", en: "to wake (someone) up", f: "despierto despiertas despierta despertamos despertáis despiertan" },
    { v: "regar", en: "to water", f: "riego riegas riega regamos regáis riegan" },
    { v: "acertar", en: "to get it right", f: "acierto aciertas acierta acertamos acertáis aciertan" }
  ]},
  { id: "v-ue", es: "Cambio o → ue", en: "o → ue (and u → ue)", img: "bed", cards: [
    { v: "poder", en: "can / to be able", f: "puedo puedes puede podemos podéis pueden" },
    { v: "recordar", en: "to remember", f: "recuerdo recuerdas recuerda recordamos recordáis recuerdan" },
    { v: "volver", en: "to come back", f: "vuelvo vuelves vuelve volvemos volvéis vuelven" },
    { v: "dormir", en: "to sleep", f: "duermo duermes duerme dormimos dormís duermen" },
    { v: "encontrar", en: "to find", f: "encuentro encuentras encuentra encontramos encontráis encuentran" },
    { v: "contar", en: "to tell / count", f: "cuento cuentas cuenta contamos contáis cuentan" },
    { v: "probar", en: "to try / taste", f: "pruebo pruebas prueba probamos probáis prueban" },
    { v: "soñar", en: "to dream", f: "sueño sueñas sueña soñamos soñáis sueñan" },
    { v: "volar", en: "to fly", f: "vuelo vuelas vuela volamos voláis vuelan" },
    { v: "mover", en: "to move", f: "muevo mueves mueve movemos movéis mueven" },
    { v: "morir", en: "to die", f: "muero mueres muere morimos morís mueren" },
    { v: "jugar", en: "to play (u → ue)", f: "juego juegas juega jugamos jugáis juegan" },
    { v: "colgar", en: "to hang (up)", f: "cuelgo cuelgas cuelga colgamos colgáis cuelgan" },
    { v: "soler", en: "to usually (do)", f: "suelo sueles suele solemos soléis suelen" }
  ]},
  { id: "v-i", es: "Cambio e → i", en: "e → i stem change", img: "face-with-tears-of-joy", cards: [
    { v: "repetir", en: "to repeat", f: "repito repites repite repetimos repetís repiten" },
    { v: "pedir", en: "to ask for / order", f: "pido pides pide pedimos pedís piden" },
    { v: "seguir", en: "to follow / continue", f: "sigo sigues sigue seguimos seguís siguen" },
    { v: "conseguir", en: "to get / achieve", f: "consigo consigues consigue conseguimos conseguís consiguen" },
    { v: "corregir", en: "to correct", f: "corrijo corriges corrige corregimos corregís corrigen" },
    { v: "elegir", en: "to choose", f: "elijo eliges elige elegimos elegís eligen" },
    { v: "despedir", en: "to dismiss / say goodbye", f: "despido despides despide despedimos despedís despiden" },
    { v: "servir", en: "to serve", f: "sirvo sirves sirve servimos servís sirven" },
    { v: "reír", en: "to laugh", f: "río ríes ríe reímos reís ríen" },
    { v: "sonreír", en: "to smile", f: "sonrío sonríes sonríe sonreímos sonreís sonríen" },
    { v: "vestir", en: "to dress / wear", f: "visto vistes viste vestimos vestís visten" },
    { v: "medir", en: "to measure", f: "mido mides mide medimos medís miden" },
    { v: "impedir", en: "to prevent", f: "impido impides impide impedimos impedís impiden" }
  ]},
  { id: "v-yo", es: "Yo especial", en: "Special yo form", img: "womans-hat", cards: [
    { v: "hacer", en: "to do / make", f: "hago haces hace hacemos hacéis hacen" },
    { v: "poner", en: "to put", f: "pongo pones pone ponemos ponéis ponen" },
    { v: "traer", en: "to bring", f: "traigo traes trae traemos traéis traen" },
    { v: "salir", en: "to leave / go out", f: "salgo sales sale salimos salís salen" },
    { v: "oír", en: "to hear", f: "oigo oyes oye oímos oís oyen" },
    { v: "conocer", en: "to know (people, places)", f: "conozco conoces conoce conocemos conocéis conocen" },
    { v: "conducir", en: "to drive", f: "conduzco conduces conduce conducimos conducís conducen" },
    { v: "traducir", en: "to translate", f: "traduzco traduces traduce traducimos traducís traducen" },
    { v: "agradecer", en: "to thank", f: "agradezco agradeces agradece agradecemos agradecéis agradecen" },
    { v: "ofrecer", en: "to offer", f: "ofrezco ofreces ofrece ofrecemos ofrecéis ofrecen" },
    { v: "parecer", en: "to seem / look like", f: "parezco pareces parece parecemos parecéis parecen" },
    { v: "dar", en: "to give", f: "doy das da damos dais dan" },
    { v: "estar", en: "to be (states, place)", f: "estoy estás está estamos estáis están" },
    { v: "saber", en: "to know (facts, how to)", f: "sé sabes sabe sabemos sabéis saben" },
    { v: "ver", en: "to see / watch", f: "veo ves ve vemos veis ven" },
    { v: "coger", en: "to take / grab", f: "cojo coges coge cogemos cogéis cogen" }
  ]},
  { id: "v-irr", es: "Muy irregulares", en: "Very irregular", img: "footprints", cards: [
    { v: "ser", en: "to be", f: "soy eres es somos sois son" },
    { v: "ir", en: "to go", f: "voy vas va vamos vais van" },
    { v: "tener", en: "to have", f: "tengo tienes tiene tenemos tenéis tienen" },
    { v: "venir", en: "to come", f: "vengo vienes viene venimos venís vienen" },
    { v: "decir", en: "to say / tell", f: "digo dices dice decimos decís dicen" }
  ]}
];
