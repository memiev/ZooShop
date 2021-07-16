const productCategories = [
    {
        id: 0,
        title: "food",
    },
    {
        id: 1,
        title: "toys",
    },
    {
        id: 2,
        title: "brushes",
    },
];

const foodProducts = [
    {
        id: 0,
        category: "food",
        brand: "Whiskas",
        name: "For Kittens",
        for: "cats",
        price: 1500
    },
    {
        id: 1,
        category: "food",
        brand: "Whiskas",
        name: "For Adults",
        for: "cats",
        price: 1200
    },
    {
        id: 2,
        category: "food",
        brand: "Friskies",
        name: "For Kittens",
        for: "cats",
        price: 1456
    },
    {
        id: 3,
        category: "food",
        brand: "Friskies",
        name: "For Adults",
        for: "cats",
        price: 1419
    },
    {
        id: 4,
        category: "food",
        brand: "Special",
        name: "Super Special",
        for: "cats",
        price: 3999
    },
    {
        id: 5,
        category: "food",
        brand: "Pedigree",
        name: "For Pupees",
        for: "dogs",
        price: 1999
    },
    {
        id: 6,
        category: "food",
        brand: "Pedigree",
        name: "For Adults",
        for: "dogs",
        price: 1895
    },
    {
        id: 7,
        category: "food",
        brand: "Pedigree",
        name: "Can",
        for: "dogs",
        price: 895
    },
];

const brushProducts = [
    {
        id: 0,
        category: "brushes",
        brand: "Whiskas",
        name: "For Kittens",
        for: "cats",
        price: 780
    },
    {
        id: 1,
        category: "brushes",
        brand: "Pedigree",
        name: "For Adults",
        for: "dogs",
        price: 1200
    },
];


const toyProducts = [
    {
        id: 0,
        category: "toys",
        brand: "Kitty-Laze",
        name: "Laser",
        for: "cats",
        price: 545
    },
    {
        id: 1,
        category: "toys",
        brand: "Doggy-Chew",
        name: "Latex Bone",
        for: "dogs",
        price: 1098
    },
    {
        id: 2,
        category: "toys",
        brand: "Kitty-Laze",
        name: "Mouse",
        for: "cats",
        price: 755
    },
    {
        id: 3,
        category: "toys",
        brand: "Doggy-Chew",
        name: "Tug Rope",
        for: "dogs",
        price: 1220
    },
];

const specialOffers = [
    {
        id: 0,
        name: "Kitty Special Stack",
        for: "cats",
        price: 3599,
        items: [
            {
                id: 4,
                category: "food",
                brand: "Special",
                name: "Super Special",
                for: "cats",
                price: 3999
            },
            {
                id: 0,
                category: "toy",
                brand: "Kitty-Laze",
                name: "Laser",
                for: "cats",
                price: 545
            }
        ]
    },
    {
        id: 1,
        name: "Doggy Special Stack",
        for: "dogs",
        price: "2699",
        items: [
            {
                id: 3,
                category: "brush",
                brand: "Doggy-Chew",
                name: "Tug Rope",
                for: "dogs",
                price: 1220
            },
            {
                id: 6,
                category: "food",
                brand: "Pedigree",
                name: "For Adults",
                for: "dogs",
                price: 1895
            }
        ]
    }
];

const urlResponseMap = {
    "/products": productCategories,
    "/products/food": foodProducts,
    "/products/brushes": brushProducts,
    "/products/toys": toyProducts,
    "/special-offers": specialOffers,
};

const getResponseForUrl = (url) => {
    const categoryPatern = /\/products\/(?<category>\w+)\/(?<id>\d+)/g;
    const match = categoryPatern.exec(url);
    if (match) {
        const category = match.groups.category;
        const id = +match.groups.id;
        return urlResponseMap[`/products/${category}`][id];
    }

    return urlResponseMap[url];
};

export default getResponseForUrl;