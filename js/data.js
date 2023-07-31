// Pre-storage fake user data, demo-purpose only
const LOGIN_DATA = [
    { username: 'Johnson', password: '123', cups: 4, mg: 200, goal: 2 },
    { username: 'asd', password: 'asd', cups: 1, mg: 200, goal: 2 },
    { username: 'Maria', password: '123', cups: 1, mg: 200, goal: 3 }
];

// Fun facts coffee chip stroaged text
const FUN_FACTS = [
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'Coffee Is Actually A Fruit',
        text: 'They are the pits of the cherry-like berries found on the flowering shrubs, but we call them "beans" because of the resemblance to legumes.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'And you can eat coffee cherries as a food.',
        text: 'Early on, people mixed coffee berries with fat to create an energy-rich snack ball, according to PBS. They would also ferment the pulp to make a wine-like drink (yum!?).',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'The drink dates back to 800 A.D.',
        text: 'Legend has it that 9th-century goat herders noticed the effect caffeine had on their goats, who appeared to "dance" after eating the fruit of the Coffea plant.A local monk then made a drink with the produce and found that it kept him awake at night, thus the original cup of coffee was born.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'There are two main types: Arabica and Robusta.',
        text: 'Growers predominantly plant the Arabica species. Although less popular, Robusta tastes slightly more bitter and contains more caffeine.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'Brazil grows the most coffee in the world.',
        text: 'Today, Brazil produces about third of the worlds supply, according to the International Coffee Organization, about twice as much as the second place holder, Vietnam.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'The worlds most expensive coffee can cost more than $600 a pound.',
        text: 'One of the most coveted varieties comes from the feces of an Asian palm civet. The cat-like creature eats fruit including coffee cherries, but is unable to digest the beans. The excreted seeds produce a smooth, less acidic brew called kopi luwak, but the means of production has drawn criticism from animal welfare activists.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'You can overdose on coffee.',
        text: 'Dont worry, you would need to drink about 30 cups in a very short period time to get close to a lethal dose of caffeine, Vox reports.',
    },
    {
        image: 'imgs/fun-facts/fun-fact-1.svg',
        title: 'Decaf does not mean caffeine-free.',
        text: 'An eight-ounce brewed cup of decaf coffee actually contains two to 12 milligrams of caffeine, the Mayo Clinic states. In comparison, a regular cup of coffee supplies between 95 to 200 milligrams, while one can of cola has aout 23 to 35 milligrams of caffeine.',
    },
];

// Add coffee menu/short-cut
const COFFEE_OPTIONS = [
    {
        id: 0,
        icon: 'icon-0.svg',
        brand: 'Tim Horton',
        name: 'Double Double',
        desc: 'Small',
        mg: 140,
    },
    {
        id: 1,
        icon: 'icon-0.svg',
        brand: 'Tim Horton',
        name: 'Triple Triple Decaffeinated',
        desc: 'Medium',
        mg: 8,
    },
    {
        id: 2,
        icon: 'icon-0.svg',
        brand: 'Tim Horton',
        name: 'Cappuccino',
        desc: 'Medium',
        mg: 205,
    },
    {
        id: 3,
        icon: 'icon-1.svg',
        brand: 'Starbucks',
        name: 'Featured Dark Roast',
        desc: 'Medium',
        mg: 260,
    },
    {
        id: 4,
        icon: 'icon-1.svg',
        brand: 'Starbucks',
        name: 'Frappucino',
        desc: 'Large',
        mg: 180,
    },
    {
        id: 5,
        icon: 'icon-1.svg',
        brand: 'Starbucks',
        name: 'Iced Coffee',
        desc: 'Large',
        mg: 155,
    },
    {
        id: 6,
        icon: 'icon-2.svg',
        brand: 'McCafé',
        name: 'Brewed Coffee',
        desc: 'Small',
        mg: 110,
    },
    {
        id: 7,
        icon: 'icon-2.svg',
        brand: 'McCafé',
        name: 'Americano',
        desc: 'Large',
        mg: 180,
    },
    {
        id: 8,
        icon: 'icon-2.svg',
        brand: 'McCafé',
        name: 'French Vanilla Latte',
        desc: 'Medium',
        mg: 142,
    },
];