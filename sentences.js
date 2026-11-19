// Sentence mining cards (Frases), from Week 1 at Taronja.
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
  ]}
];
