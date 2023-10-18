let nouns = ["Actor", "Boy", "Cinnamon", "Dream", "Eagle", "Flower", "Gold", "Horizon", "Iron", "June", "Key", "Lemonade", "Melodies", "Notebook", "Ocean", "Painting", "Question", "Rat", "Shadow", "Toast", "Unicorn", "Vehicle", "Week", "Xylophone", "Year", "Zebra"]

let adverbs = ["Abstractly", "Boldly", "Calmly", "Deeply", "Extremely", "Fearlessly", "Gracefully", "Happily", "Impulsively", "Jealously", "Kissably", "Lazily", "Mildly", "Nicely", "Oddly", "Prissily", "Quickly", "Relaxingly", "Slowly", "Tenderly", "Ultimately", "Very", "Warely", "Xylophonically", "Yearnfully", "Zanily"]

let verbs = ["Adapting", "Bringing", "Crying", "Debunking", "Eating", "Feeling", "Growing", "Helping", "Inserting", "Jumping", "Kicking", "Learning", "Making", "Navigating", "Operating", "Pouring", "Qualiflying", "Running", "Sleeping", "Transforming", "Using", "Visiting", "Whirling", "Xenomorphing", "Yawning", "Zooming"]

let adjectives = ["Adorable", "Bright", "Charming", "Dangerous", "Emotional", "Fabulous", "Good", "Heavy", "Imaginary", "Joyful", "Kind", "Lazy", "Majestic", "Nice", "Optimal", "Proud", "Quick", "Real", "Strong", "Thunderous", "Understanding", "Villainous", "Weepy", "Xiphoid", "Yellow", "Zingy"]

function randomBandNameGenerator(baseWord) {
    let result = "";
    for(let nounList of nouns){
        if(nounList[0].toLowerCase() === baseWord[0]){
            result = nounList
        }
    }
    for(let nounList of nouns){
        if(nounList[0].toLowerCase() === baseWord[baseWord.length-1]){
            result += nounList
        }
    }
    return result
    }
    
    console.log(randomBandNameGenerator("bohóc"))



