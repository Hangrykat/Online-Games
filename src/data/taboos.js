const taboos = [
  {
    category: "country",
    word: "Argentina",
    tabooWords: ["wine", "steak", "Evita", "America", "Maradona"],
  },
  {
    category: "country",
    word: "Russia",
    tabooWords: ["cold", "Siberia", "vodka", "war", "Moscow"],
  },
  {
    category: "country",
    word: "United States of America",
    tabooWords: ["guns", "New York", "Trump", "war", "fast food"],
  },
  {
    category: "country",
    word: "China",
    tabooWords: ["cheap", "made", "corona", "chopsticks", "rice"],
  },
  {
    category: "country",
    word: "Bahamas",
    tabooWords: ["beach", "holiday", "carribean", "island", 'coconut'],
  },
  {
    category: "country",
    word: "Saudi Arabia",
    tabooWords: ["oil", "camel", "desert", "war", "middle"],
  },
  {
    category: "country",
    word: "Morocco",
    tabooWords: ["Africa", "tajine", "market", "desert", "dry"],
  },
  {
    category: "country",
    word: "Thailand",
    tabooWords: ["spicy", "tuktuk", "Bangkok", "beach", "holiday"],
  },
  {
    category: "country",
    word: "Japan",
    tabooWords: ["sushi", "anime", "Fuji", "Tokyo", "sakura"],
  },
  {
    category: "country",
    word: "Colombia",
    tabooWords: ["drug", "cartel", "America", "Che Guevara", "cocaine"],
  },
  {
    category: "country",
    word: "Poland",
    tabooWords: ["pierogi", "vodka", "borscht", "pils", "east"],
  },
  {
    category: "country",
    word: "Greece",
    tabooWords: ["gyros", "beach", "vacation", "feta", "beach"],
  },
  {
    category: "country",
    word: "Indonesia",
    tabooWords: ["sambal", "Bali", "surfing", "Asia", "beach"],
  },
  {
    category: "country",
    word: "New Zealand",
    tabooWords: ["Hobbit", "mountain", "Kiwi", "Australia", "roadtrip"],
  },
  {
    category: "country",
    word: "Myanmar",
    tabooWords: [
      "dictator",
      "Asia",
      "air ballon",
      "temples",
      "Aung San Suu Kyi",
    ],
  },
  {
    category: "country",
    word: "India",
    tabooWords: ["curry", "Bollywood", "Asia", "spicy", "naan"],
  },
  {
    category: "country",
    word: "England",
    tabooWords: ["queen", "fish and chips", "Big Ben", "London", "Boris"],
  },
  {
    category: "country",
    word: "South Korea",
    tabooWords: ["Kpop", "ramen", "BBQ", "sushi", "Seoul"],
  },
  {
    category: "country",
    word: "Mongolia",
    tabooWords: ["desert", "inner", "camel", "Asia", "dry"],
  },
  {
    category: "country",
    word: "France",
    tabooWords: ["Paris", "cheese", "baguette", "Eiffel", "frog"],
  },
  {
    category: "emotion",
    word: "angry",
    tabooWords: ["pissed", "happy", "annoyed", "hungry", "shout"],
  },
  {
    category: "emotion",
    word: "sleepy",
    tabooWords: ["tired", "sad", "deprived", "awake", "bed"],
  },
  {
    category: "emotion",
    word: "hungry",
    tabooWords: ["annoyed", "angry", "food", "hunger", "eat"],
  },
  {
    category: "emotion",
    word: "love",
    tabooWords: ["happy", "excited", "heart", "kiss", "relationship"],
  },
  {
    category: "emotion",
    word: "scared",
    tabooWords: ["terrified", "fear", "phobia", "frightened", "run"],
  },
  {
    category: "emotion",
    word: "confused",
    tabooWords: ["understand", "complicated", "difficult", "puzzled", "get"],
  },
  {
    category: "emotion",
    word: "disgust",
    tabooWords: ["smelly", "hate", "loathe", "sick", "like"],
  },
  {
    category: "emotion",
    word: "fear",
    tabooWords: ["phobia", "scared", "ghost", "run", "terrified"],
  },
  {
    category: "emotion",
    word: "pride",
    tabooWords: ["proud", "self-esteem", "satisfaction", "LGBT", "ego"],
  },
  {
    category: "emotion",
    word: "sad",
    tabooWords: ["happy", "depressed", "down", "miserable", "cry"],
  },
  {
    category: "emotion",
    word: "heartbroken",
    tabooWords: ["happy", "sad", "breakup", "relationship", "cry"],
  },
  {
    category: "emotion",
    word: "disappointed",
    tabooWords: ["down", "sad", "breakup", "promise", "cry"],
  },
  {
    category: "emotion",
    word: "stressed",
    tabooWords: ["anxious", "worry", "depressed", "pressure", "work"],
  },
  {
    category: "emotion",
    word: "shy",
    tabooWords: ["brave", "scared", "introvert", "fear", "timid"],
  },
  {
    category: "emotion",
    word: "brave",
    tabooWords: ["shy", "scared", "bold", "fear", "hero"],
  },
  {
    category: "emotion",
    word: "calm",
    tabooWords: ["anxious", "collective", "worry", "easy going", "stressed"],
  },
  {
    category: "emotion",
    word: "shocked",
    tabooWords: ["stunned", "scared", "loud", "astonished", "news"],
  },
  {
    category: "emotion",
    word: "jealous",
    tabooWords: ["envy", "suspicious", "cheat", "relationship", "angry"],
  },
  {
    category: "emotion",
    word: "thirsty",
    tabooWords: ["water", "drink", "hot", "summer", "beer"],
  },
  {
    category: "emotion",
    word: "cold",
    tabooWords: ["ice", "winter", "windy", "winter", "aircon"],
  },
  {
    category: "famous person",
    word: "Donald Trump",
    tabooWords: ["America", "USA", "president", "rich", "election"],
  },
  {
    category: "famous person",
    word: "Nelson Mandela",
    tabooWords: ["Africa", "prison", "president", "freedom", "leaner"],
  },
  {
    category: "famous person",
    word: "Bill Clinton",
    tabooWords: ["America", "USA", "president", "Hillary", "Monica Lewinsky"],
  },
  {
    category: "famous person",
    word: "Vladimir Putin",
    tabooWords: ["Russia", "Moscow", "president", "corruption", "KGB"],
  },
  {
    category: "famous person",
    word: "Albert Einstein",
    tabooWords: ["scientist", "hair", "smart", "nobel prize", "relativity"],
  },
  {
    category: "famous person",
    word: "Oprah Winfrey",
    tabooWords: ["TV", "talk show", "rich", "woman", "host"],
  },
  {
    category: "famous person",
    word: "Princess Diana",
    tabooWords: ["Queen", "crash", "Harry", "Charles", "William"],
  },
  {
    category: "famous person",
    word: "Bill Gates",
    tabooWords: ["Microsoft", "rich", "computer", "IT", "billionaire"],
  },
  {
    category: "famous person",
    word: "Elvis Presley",
    tabooWords: ["King", "Rock & Roll", "hair", "American", "drugs"],
  },
  {
    category: "famous person",
    word: "William Shakespeare",
    tabooWords: ["English", "literature", "Romeo & Juliet", "to be", "poet"],
  },
  {
    category: "famous person",
    word: "Dalai Lama",
    tabooWords: ["Tibet", "Buddhism", "religion", "China", "monk"],
  },
  {
    category: "famous person",
    word: "Charlie Chaplin",
    tabooWords: ["silent", "moustache", "actor", "movies", "black & white"],
  },
  {
    category: "famous person",
    word: "Barack Obama",
    tabooWords: [
      "president",
      "Michelle",
      "healthcare",
      "United States of America",
      "yes we can",
    ],
  },
  {
    category: "famous person",
    word: "Michael Jackson",
    tabooWords: ["king", "pop", "paedophile", "moonwalk", "neverland"],
  },
  {
    category: "famous person",
    word: "Mark Zuckerberg",
    tabooWords: [
      "Facebook",
      "billionaire",
      "social network",
      "United States of America",
      "dropout",
    ],
  },
  {
    category: "famous person",
    word: "Elon Musk",
    tabooWords: [
      "SpaceX",
      "Tesla",
      "Mars",
      "United States of America",
      "rocket",
    ],
  },
  {
    category: "famous person",
    word: "George Bush",
    tabooWords: [
      "president",
      "Afghanistan",
      "war",
      "United States of America",
      "Barack Obama",
    ],
  },
  {
    category: "famous person",
    word: "Steve Jobs",
    tabooWords: ["Apple", "IT", "computer", "iPhone", "Mac"],
  },
  {
    category: "famous person",
    word: "Darth Vader",
    tabooWords: [
      "Star Wars",
      "father",
      "Luke Skywalker",
      "Death Star",
      "light sabers",
    ],
  },
  {
    category: "famous person",
    word: "Kim Jong-Un",
    tabooWords: ["North Korea", "dictator", "nuclear", "war", "Pyongyang"],
  },
  {
    category: "job",
    word: "pilot",
    tabooWords: ["airplane", "cockpit", "fly", "stewardess", "airline"],
  },
  {
    category: "job",
    word: "receptionist",
    tabooWords: ["greet", "hotel", "lobby", "check-in", "room"],
  },
  {
    category: "job",
    word: "professor",
    tabooWords: ["university", "teach", "lecture", "academic", "research"],
  },
  {
    category: "job",
    word: "politician",
    tabooWords: ["politics", "state", "election", "parliment", "government"],
  },
  {
    category: "job",
    word: "florist",
    tabooWords: ["flower", "bouquet", "rose", "valentine", "sell"],
  },
  {
    category: "job",
    word: "lawyer",
    tabooWords: ["court", "attorney", "crime", "jury", "judge"],
  },
  {
    category: "job",
    word: "postman",
    tabooWords: ["letters", "DHL", "mail", "postbox", "Deutsche Post"],
  },
  {
    category: "job",
    word: "fireman",
    tabooWords: ["water", "fire brigade", "hose", "put down", "emergency"],
  },
  {
    category: "job",
    word: "construction worker",
    tabooWords: ["building", "wall", "make", "wall", "house"],
  },
  {
    category: "job",
    word: "carpenter",
    tabooWords: ["wood", "make", "furniture", "hammer", "saw"],
  },
  {
    category: "job",
    word: "dentist",
    tabooWords: ["doctor", "teeth", "crown", "toothache", "mouth"],
  },
  {
    category: "job",
    word: "nurse",
    tabooWords: ["doctor", "hospital", "sick", "needle", "blood"],
  },
  {
    category: "job",
    word: "waiter",
    tabooWords: ["restaurant", "bar", "order", "tip", "food"],
  },
  {
    category: "job",
    word: "babysitter",
    tabooWords: ["kids", "look after", "children", "take care", "go out"],
  },
  {
    category: "job",
    word: "weatherman",
    tabooWords: ["predict", "news", "rain", "sunny", "storm"],
  },
  {
    category: "job",
    word: "astronaut",
    tabooWords: ["space suit", "rocket", "shuttle", "gravity", "launch"],
  },
  {
    category: "job",
    word: "butcher",
    tabooWords: ["meat", "slaughter", "kill", "dead", "sell"],
  },
  {
    category: "job",
    word: "reporter",
    tabooWords: ["news", "journalist", "question", "TV", "speak"],
  },
  {
    category: "job",
    word: "librarian",
    tabooWords: ["library", "books", "quiet", "school", "borrow"],
  },
  {
    category: "job",
    word: "secretary",
    tabooWords: ["office", "keyboard", "telephone", "appointment", "reception"],
  },
  {
    category: "kitchen",
    word: "stove",
    tabooWords: ["cook", "hot plate", "induction", "pan & pots", "kitchen"],
  },
  {
    category: "kitchen",
    word: "fridge",
    tabooWords: ["keep", "cold", "food", "store", "kitchen"],
  },
  {
    category: "kitchen",
    word: "cutting board",
    tabooWords: ["chop", "food", "vegetable", "meat", "knife"],
  },
  {
    category: "kitchen",
    word: "apron",
    tabooWords: ["cook", "wear", "cover", "dirty", "protect"],
  },
  {
    category: "kitchen",
    word: "corkscrew",
    tabooWords: ["wine", "open", "bottle", "Swiss knife", "drink"],
  },
  {
    category: "kitchen",
    word: "grater",
    tabooWords: ["cheesse", "shred", "pieces", "pasta", "cook"],
  },
  {
    category: "kitchen",
    word: "toaster",
    tabooWords: ["bread", "heat", "put", "butter", "breakfast"],
  },
  {
    category: "kitchen",
    word: "teapot",
    tabooWords: ["hot", "drink", "winter", "sick", "green"],
  },
  {
    category: "kitchen",
    word: "microwave",
    tabooWords: ["warm", "cook", "timer", "leftover", "heat"],
  },
  {
    category: "kitchen",
    word: "blender",
    tabooWords: ["mix", "juice", "smoothie", "paste", "cook"],
  },
  {
    category: "kitchen",
    word: "rice cooker",
    tabooWords: ["Asian", "white", "cook", "food", "sushi"],
  },
  {
    category: "kitchen",
    word: "rolling pin",
    tabooWords: ["bake", "dough", "bread", "flour", "flat"],
  },
  {
    category: "kitchen",
    word: "spoon",
    tabooWords: ["soup", "fork", "eat", "food", "plate"],
  },
  {
    category: "kitchen",
    word: "fork",
    tabooWords: ["stab", "knife", "eat", "food", "plate"],
  },
  {
    category: "kitchen",
    word: "knife",
    tabooWords: ["fork", "cut", "steak", "meat", "cook"],
  },
  {
    category: "kitchen",
    word: "measuring cup",
    tabooWords: ["liquid", "water", "cook", "bake", "cook"],
  },
  {
    category: "kitchen",
    word: "kettle",
    tabooWords: ["water", "boil", "hot", "tea", "drink"],
  },
  {
    category: "kitchen",
    word: "grill",
    tabooWords: ["BBQ", "meat", "summer", "eat", "cook"],
  },
  {
    category: "kitchen",
    word: "sieve",
    tabooWords: ["water", "wash", "separate", "pasta", "cook"],
  },
  {
    category: "kitchen",
    word: "mixer",
    tabooWords: ["bake", "dough", "cake", "music", "cook"],
  },
  {
    category: "food",
    word: "pizza",
    tabooWords: ["hut", "fast food", "Domino", "delivery", "round"],
  },
  {
    category: "food & drink",
    word: "soup",
    tabooWords: ["chicken", "cook", "sick", "potato", "drink"],
  },
  {
    category: "food & drink",
    word: "fried rice",
    tabooWords: ["Asian", "takeout", "delivery", "fast food", "Chinese"],
  },
  {
    category: "food & drink",
    word: "fried chicken",
    tabooWords: ["KFC", "mash potatoes", "delivery", "fast food", "diner"],
  },
  {
    category: "food & drink",
    word: "steak",
    tabooWords: ["grill", "BBQ", "beef", "meat", "cook"],
  },
  {
    category: "food & drink",
    word: "tequila sunrise",
    tabooWords: ["drink", "cocktail", "bar", "pub", "club"],
  },
  {
    category: "food & drink",
    word: "mojito",
    tabooWords: ["mint", "brown sugar", "bar", "pub", "drink"],
  },
  {
    category: "food & drink",
    word: "coke",
    tabooWords: ["frizzy", "soft drink", "bar", "pub", "club"],
  },
  {
    category: "food & drink",
    word: "whiskey",
    tabooWords: ["Irish", "Scottish", "bar", "ice", "drink"],
  },
  {
    category: "food & drink",
    word: "coffee",
    tabooWords: ["morning", "sleepy", "caffeine", "cappucino", "espresso"],
  },
  {
    category: "food & drink",
    word: "pasta",
    tabooWords: ["Italian", "tomato sauce", "spaghetti", "Cabonara", "fast food"],
  },
  {
    category: "food & drink",
    word: "pudding",
    tabooWords: ["milk", "vanilla", "dessert", "sweet", "soft"],
  },
  {
    category: "food & drink",
    word: "ice-cream",
    tabooWords: ["cold", "dessert", "gelato", "cone", "scoop"],
  },
  {
    category: "food & drink",
    word: "lollipop",
    tabooWords: ["candy", "suckle", "lick", "sweet", "round"],
  },
  {
    category: "food & drink",
    word: "popcorn",
    tabooWords: ["cinema", "eat", "watch", "movie", "caramel"],
  },
  {
    category: "food & drink",
    word: "gin",
    tabooWords: ["tonic", "dry", "London", "cocktail", "bar"],
  },
  {
    category: "food & drink",
    word: "Long Island ice tea",
    tabooWords: ["tequila", "alcohol", "rum", "cocktail", "bar"],
  },
  {
    category: "food & drink",
    word: "lasagne",
    tabooWords: ["Italian", "food", "layer", "cheese", "pasta"],
  },
  {
    category: "food & drink",
    word: "beer",
    tabooWords: ["refreshing", "drink", "crate", "six packs", "bottles"],
  },
  {
    category: "food & drink",
    word: "tea",
    tabooWords: ["Earl grey", "drink", "hot", "cuppa", "English"],
  },
];

export default taboos;
