const taboos = [
    {
        category: 'country',
        id: 100,
        word: 'Argentina',
        tabooWords: ['wine', 'steak', 'Evita', 'America', 'Maradona']
    },
    {
        category: 'country',
        id: 101,
        word: 'Russia',
        tabooWords: ['cold', 'Siberia', 'vodka', 'war', 'Moscow']
    },
    {
        category: 'country',
        id: 102,
        word: 'United States of America',
        tabooWords: ['guns', 'New York', 'Trump', 'war', 'fast food']
    },
    {
        category: 'country',
        id: 103,
        word: 'China',
        tabooWords: ['cheap', 'made', 'corona', 'chopsticks', 'rice']
    },
    {
        category: 'country',
        id: 104,
        word: 'Bahamas',
        tabooWords: ['beach', 'holiday', 'carribean', 'island']
    },
    {
        category: 'country',
        id: 105,
        word: 'Saudi Arabia',
        tabooWords: ['oil', 'camel', 'desert', 'war', 'middle']
    },
    {
        category: 'country',
        id: 106,
        word: 'Morocco',
        tabooWords: ['Africa', 'tajine', 'market', 'desert', 'dry']
    },
    {
        category: 'country',
        id: 107,
        word: 'Thailand',
        tabooWords: ['spicy', 'tuktuk', 'Bangkok', 'beach', 'holiday']
    },
    {
        category: 'country',
        id: 108,
        word: 'Japan',
        tabooWords: ['sushi', 'anime', 'Fuji', 'Tokyo', 'sakura']
    },
    {
        category: 'country',
        id: 109,
        word: 'Colombia',
        tabooWords: ['drug', 'cartel', 'America', 'Che Guevara', 'cocaine']
    },
    {
        category: 'country',
        id: 110,
        word: 'Poland',
        tabooWords: ['pierogi', 'vodka', 'borscht', 'pils', 'east']
    },
    {
        category: 'country',
        id: 111,
        word: 'Greece',
        tabooWords: ['gyros', 'beach', 'vacation', 'feta', 'beach']
    },       
    {
        category: 'country',
        id: 112,
        word: 'Indonesia',
        tabooWords: ['sambal', 'Bali', 'surfing', 'Asia', 'beach']
    },
    {
        category: 'country',
        id: 113,
        word: 'New Zealand',
        tabooWords: ['Hobbit', 'mountain', 'Kiwi', 'Australia', 'roadtrip']
    }, 
    {
        category: 'country',
        id: 114,
        word: 'Canada',
        tabooWords: ['hockey', 'Toronto', 'maple', 'Vancouver', 'cold']
    },
    {
        category: 'country',
        id: 115,
        word: 'Myanmar',
        tabooWords: ['dictator', 'Asia', 'air ballon', 'temples', 'Aung San Suu Kyi']
    },
    {
        category: 'country',
        id: 116,
        word: 'India',
        tabooWords: ['curry', 'Bollywood', 'Asia', 'spicy', 'naan']
    },
    {
        category: 'country',
        id: 117,
        word: 'England',
        tabooWords: ['queen', 'fish and chips', 'Big Ben', 'London', 'Boris']
    },
    {
        category: 'country',
        id: 118,
        word: 'South Korea',
        tabooWords: ['Kpop', 'ramen', 'BBQ', 'sushi', 'Seoul']
    },
    {
        category: 'country',
        id: 119,
        word: 'Mongolia',
        tabooWords: ['desert', 'inner', 'camel', 'Asia', 'dry']
    },
    {
        category: 'country',
        id: 120,
        word: 'France',
        tabooWords: ['Paris', 'cheese', 'baguette', 'Eiffel', 'frog']
    },
    {
        category: 'emotion',
        id: 200,
        word: 'angry',
        tabooWords: ['pissed', 'happy', 'annoyed', 'hungry', 'shout']
    },
    {
        category: 'emotion',
        id: 201,
        word: 'sleepy',
        tabooWords: ['tired', 'sad', 'deprived', 'awake', 'bed']
    },
    {
        category: 'emotion',
        id: 202,
        word: 'hungry',
        tabooWords: ['annoyed', 'angry', 'food', 'hunger', 'eat']
    },
    {
        category: 'emotion',
        id: 203,
        word: 'love',
        tabooWords: ['happy', 'excited', 'heart', 'kiss', 'relationship']
    },
    {
        category: 'emotion',
        id: 204,
        word: 'scared',
        tabooWords: ['terrified', 'fear', 'phobia', 'frightened', 'run']
    },
    {
        category: 'emotion',
        id: 205,
        word: 'confused',
        tabooWords: ['understand', 'complicated', 'difficult', 'puzzled', 'get']
    },
    {
        category: 'emotion',
        id: 205,
        word: 'disgust',
        tabooWords: ['smelly', 'hate', 'loathe', 'sick', 'like']
    },
    {
        category: 'emotion',
        id: 206,
        word: 'fear',
        tabooWords: ['phobia', 'scared', 'ghost', 'run', 'terrified']
    },
    {
        category: 'emotion',
        id: 207,
        word: 'pride',
        tabooWords: ['proud', 'self-esteem', 'satisfaction', 'LGBT', 'ego']
    },
    {
        category: 'emotion',
        id: 207,
        word: 'satisfaction',
        tabooWords: ['happy', 'proud', 'joy', 'relief', 'achieve']
    },
    {
        category: 'emotion',
        id: 208,
        word: 'sad',
        tabooWords: ['happy', 'depressed', 'down', 'miserable', 'cry']
    },
    {
        category: 'emotion',
        id: 209,
        word: 'heartbroken',
        tabooWords: ['happy', 'sad', 'breakup', 'relationship', 'cry']
    },
    {
        category: 'emotion',
        id: 210,
        word: 'disappointed',
        tabooWords: ['down', 'sad', 'breakup', 'promise', 'cry']
    },
    {
        category: 'emotion',
        id: 211,
        word: 'stressed',
        tabooWords: ['anxious', 'worry', 'depressed', 'pressure', 'work']
    },
    {
        category: 'emotion',
        id: 212,
        word: 'stressed',
        tabooWords: ['anxious', 'worry', 'depressed', 'pressure', 'work']
    },
    {
        category: 'emotion',
        id: 213,
        word: 'shy',
        tabooWords: ['brave', 'scared', 'introvert', 'fear', 'timid']
    },
    {
        category: 'emotion',
        id: 214,
        word: 'brave',
        tabooWords: ['shy', 'scared', 'bold', 'fear', 'hero']
    },
    {
        category: 'emotion',
        id: 215,
        word: 'calm',
        tabooWords: ['anxious', 'collective', 'worry', 'easy going', 'stressed']
    },
    {
        category: 'emotion',
        id: 216,
        word: 'shocked',
        tabooWords: ['stunned', 'scared', 'loud', 'astonished', 'news']
    },
    {
        category: 'emotion',
        id: 217,
        word: 'hot',
        tabooWords: ['cold', 'warm', 'summer', 'sweaty', 'desert']
    },
    {
        category: 'emotion',
        id: 218,
        word: 'cold',
        tabooWords: ['hot', 'ice', 'freeze', 'winter', 'flu']
    },
    {
        category: 'emotion',
        id: 219,
        word: 'jealous',
        tabooWords: ['envy', 'suspicious', 'cheat', 'relationship', 'angry']
    },
    {
        category: 'emotion',
        id: 220,
        word: 'thirsty',
        tabooWords: ['water', 'drink', 'hot', 'summer', 'beer']
    },
    {
        category: 'famous person',
        id: 300,
        word: 'Donald Trump',
        tabooWords: ['America', 'USA', 'president', 'rich', 'election']
    },
    {
        category: 'famous person',
        id: 301,
        word: 'Nelson Mandela',
        tabooWords: ['Africa', 'prison', 'president', 'freedom', 'leaner']
    },
    {
        category: 'famous person',
        id: 302,
        word: 'Bill Clinton',
        tabooWords: ['America', 'USA', 'president', 'Hillary', 'Monica Lewinsky']
    },
    {
        category: 'famous person',
        id: 303,
        word: 'Vladimir Putin',
        tabooWords: ['Russia', 'Moscow', 'president', 'corruption', 'KGB']
    },
    {
        category: 'famous person',
        id: 304,
        word: 'Albert Einstein',
        tabooWords: ['scientist', 'hair', 'smart', 'nobel prize', 'relativity']
    },
    {
        category: 'famous person',
        id: 305,
        word: 'Oprah Winfrey',
        tabooWords: ['TV', 'talk show', 'rich', 'woman', 'host']
    },
    {
        category: 'famous person',
        id: 306,
        word: 'Princess Diana',
        tabooWords: ['Queen', 'crash', 'Harry', 'Charles', 'William']
    },
    {
        category: 'famous person',
        id: 307,
        word: 'Bill Gates',
        tabooWords: ['Microsoft', 'rich', 'computer', 'IT', 'billionaire']
    },
    {
        category: 'famous person',
        id: 308,
        word: 'Elvis Presley',
        tabooWords: ['King', 'Rock & Roll', 'hair', 'American', 'drugs']
    },
    {
        category: 'famous person',
        id: 309,
        word: 'William Shakespeare',
        tabooWords: ['English', 'literature', 'Romeo & Juliet', 'to be', 'poet']
    },
    {
        category: 'famous person',
        id: 310,
        word: 'Dalai Lama',
        tabooWords: ['Tibet', 'Buddhism', 'religion', 'China', 'monk']
    },
    {
        category: 'famous person',
        id: 311,
        word: 'Charlie Chaplin',
        tabooWords: ['silent', 'moustache', 'actor', 'movies', 'black & white']
    },
    {
        category: 'famous person',
        id: 312,
        word: 'Barack Obama',
        tabooWords: ['president', 'Michelle', 'healthcare', 'United States of America', 'yes we can']
    },
    {
        category: 'famous person',
        id: 313,
        word: 'Michael Jackson',
        tabooWords: ['king', 'pop', 'paedophile', 'moonwalk', 'neverland']
    },
    {
        category: 'famous person',
        id: 314,
        word: 'Mark Zuckerberg',
        tabooWords: ['Facebook', 'billionaire', 'social network', 'United States of America', 'dropout']
    },
    {
        category: 'famous person',
        id: 315,
        word: 'Arnold Schwarzenegger',
        tabooWords: ['Terminator', 'governor', 'Hollywood', 'United States of America', 'actor']
    },
    {
        category: 'famous person',
        id: 316,
        word: 'Elon Musk',
        tabooWords: ['SpaceX', 'Tesla', 'Mars', 'United States of America', 'rocket']
    },
    {
        category: 'famous person',
        id: 317,
        word: 'George Bush',
        tabooWords: ['president', 'Afghanistan', 'war', 'United States of America', 'Barack Obama']
    },
    {
        category: 'famous person',
        id: 318,
        word: 'Steve Jobs',
        tabooWords: ['Apple', 'IT', 'computer', 'iPhone', 'Mac']
    },
    {
        category: 'famous person',
        id: 319,
        word: 'Darth Vader',
        tabooWords: ['Star Wars', 'father', 'Luke Skywalker', 'Death Star', 'light sabers']
    },
    {
        category: 'famous person',
        id: 320,
        word: 'Kim Jong-Un',
        tabooWords: ['North Korea', 'dictator', 'nuclear', 'war', 'Pyongyang']
    },
    {
        category: 'job',
        id: 401,
        word: 'pilot',
        tabooWords: ['airplane', 'cockpit', 'fly', 'stewardess', 'airline']
    },
    {
        category: 'job',
        id: 402,
        word: 'gardener',
        tabooWords: ['lawn', 'mow', 'water', 'cut', 'trees']
    },
    {
        category: 'job',
        id: 403,
        word: 'receptionist',
        tabooWords: ['greet', 'hotel', 'lobby', 'check-in', 'room']
    },
    {
        category: 'job',
        id: 404,
        word: 'professor',
        tabooWords: ['university', 'teach', 'lecture', 'academic', 'research']
    },
    {
        category: 'job',
        id: 405,
        word: 'politician',
        tabooWords: ['politics', 'state', 'election', 'parliment', 'government']
    },
    {
        category: 'job',
        id: 406,
        word: 'florist',
        tabooWords: ['flower', 'bouquet', 'rose', 'valentine', 'sell']
    },
    {
        category: 'job',
        id: 407,
        word: 'lawyer',
        tabooWords: ['court', 'attorney', 'crime', 'jury', 'judge']
    },
    {
        category: 'job',
        id: 408,
        word: 'postman',
        tabooWords: ['letters', 'DHL', 'mail', 'postbox', 'Deutsche Post']
    },
    {
        category: 'job',
        id: 409,
        word: 'fireman',
        tabooWords: ['water', 'fire brigade', 'hose', 'put down', 'emergency']
    },
    {
        category: 'job',
        id: 410,
        word: 'construction worker',
        tabooWords: ['building', 'wall', 'make', 'wall', 'house']
    },
    {
        category: 'job',
        id: 411,
        word: 'carpenter',
        tabooWords: ['wood', 'make', 'furniture', 'hammer', 'saw']
    },
    {
        category: 'job',
        id: 412,
        word: 'dentist',
        tabooWords: ['doctor', 'teeth', 'crown', 'toothache', 'mouth']
    },
    {
        category: 'job',
        id: 413,
        word: 'nurse',
        tabooWords: ['doctor', 'hospital', 'sick', 'needle', 'blood']
    },
    {
        category: 'job',
        id: 414,
        word: 'waiter',
        tabooWords: ['restaurant', 'bar', 'order', 'tip', 'food']
    },
    {
        category: 'job',
        id: 415,
        word: 'babysitter',
        tabooWords: ['kids', 'look after', 'children', 'take care', 'go out']
    },
    {
        category: 'job',
        id: 416,
        word: 'weatherman',
        tabooWords: ['predict', 'news', 'rain', 'sunny', 'storm']
    },
    {
        category: 'job',
        id: 417,
        word: 'astronaut',
        tabooWords: ['space suit', 'rocket', 'shuttle', 'gravity', 'launch']
    },
    {
        category: 'job',
        id: 418,
        word: 'butcher',
        tabooWords: ['meat', 'slaughter', 'kill', 'dead', 'sell']
    },
    {
        category: 'job',
        id: 419,
        word: 'reporter',
        tabooWords: ['news', 'journalist', 'question', 'TV', 'speak']
    },
    {
        category: 'job',
        id: 420,
        word: 'librarian',
        tabooWords: ['library', 'books', 'quiet', 'school', 'borrow']
    },
    {
        category: 'kitchen',
        id: 500,
        word: 'stove',
        tabooWords: ['cook', 'hot plate', 'induction', 'pan & pots', 'kitchen']
    },
    {
        category: 'kitchen',
        id: 501,
        word: 'fridge',
        tabooWords: ['keep', 'cold', 'food', 'store', 'kitchen']
    },
    {
        category: 'kitchen',
        id: 502,
        word: 'coffee machine',
        tabooWords: ['morning', 'espresso', 'cappuccino', 'milk', 'drink']
    },
    {
        category: 'kitchen',
        id: 503,
        word: 'cutting board',
        tabooWords: ['chop', 'food', 'vegetable', 'meat', 'knife']
    },
    {
        category: 'kitchen',
        id: 504,
        word: 'apron',
        tabooWords: ['cook', 'wear', 'cover', 'dirty', 'protect']
    },
    {
        category: 'kitchen',
        id: 505,
        word: 'corkscrew',
        tabooWords: ['wine', 'open', 'bottle', 'Swiss knife', 'drink']
    },
    {
        category: 'kitchen',
        id: 506,
        word: 'grater',
        tabooWords: ['cheesse', 'shred', 'pieces', 'pasta', 'cook']
    },
    {
        category: 'kitchen',
        id: 507,
        word: 'toaster',
        tabooWords: ['bread', 'heat', 'put', 'butter', 'breakfast']
    },
    {
        category: 'kitchen',
        id: 508,
        word: 'teapot',
        tabooWords: ['hot', 'drink', 'winter', 'sick', 'green']
    },
    {
        category: 'kitchen',
        id: 509,
        word: 'microwave',
        tabooWords: ['warm', 'cook', 'timer', 'leftover', 'heat']
    },
    {
        category: 'kitchen',
        id: 510,
        word: 'blender',
        tabooWords: ['mix', 'juice', 'smoothie', 'paste', 'cook']
    },
    {
        category: 'kitchen',
        id: 511,
        word: 'rice cooker',
        tabooWords: ['Asian', 'white', 'cook', 'food', 'sushi']
    },
    {
        category: 'kitchen',
        id: 512,
        word: 'rolling pin',
        tabooWords: ['bake', 'dough', 'bread', 'flour', 'flat']
    },
    {
        category: 'kitchen',
        id: 513,
        word: 'spoon',
        tabooWords: ['soup', 'fork', 'eat', 'food', 'plate']
    },
    {
        category: 'kitchen',
        id: 514,
        word: 'fork',
        tabooWords: ['stab', 'knife', 'eat', 'food', 'plate']
    },
    {
        category: 'kitchen',
        id: 515,
        word: 'knife',
        tabooWords: ['fork', 'cut', 'steak', 'meat', 'cook']
    },
    {
        category: 'kitchen',
        id: 516,
        word: 'measuring cup',
        tabooWords: ['liquid', 'water', 'cook', 'bake', 'cook']
    },
    {
        category: 'kitchen',
        id: 517,
        word: 'kettle',
        tabooWords: ['water', 'boil', 'hot', 'tea', 'drink']
    },
    {
        category: 'kitchen',
        id: 518,
        word: 'grill',
        tabooWords: ['BBQ', 'meat', 'summer', 'eat', 'cook']
    },
    {
        category: 'kitchen',
        id: 519,
        word: 'sieve',
        tabooWords: ['water', 'wash', 'separate', 'pasta', 'cook']
    },
    {
        category: 'kitchen',
        id: 520,
        word: 'mixer',
        tabooWords: ['bake', 'dough', 'cake', 'music', 'cook']
    },
]

export default taboos