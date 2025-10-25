ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shaped/';

    const recipes = [];

    let conversions = [
        {
            set: ['create:crimsite', 'create:ochrum', 'create:veridium', 'create:asurine']
        },
        {
            set: ['arts_and_crafts:soapstone', 'arts_and_crafts:gypsum', 'create:limestone']
        },
        {
            set: [
                'minecraft:sandstone',
                'arts_and_crafts:cobbled_ochre_pietraforte',
                'arts_and_crafts:cobbled_verdant_pietraforte'
            ]
        },
        {
            set: ['minecraft:pitcher_plant', 'minecraft:blue_orchid', 'minecraft:cornflower', 'aether:purple_flower']
        },
        {
            set: ['minecraft:allium', 'minecraft:pink_tulip', 'minecraft:peony', 'minecraft:lilac']
        },
        {
            set: [
                'minecraft:torchflower',
                'minecraft:sunflower',
                'minecraft:dandelion',
                'minecraft:orange_tulip',
                'minecraft:red_tulip',
                'minecraft:poppy',
                'minecraft:rose_bush'
            ]
        },
        {
            set: [
                'minecraft:pink_petals',
                'aether:white_flower',
                'minecraft:white_tulip',
                'minecraft:azure_bluet',
                'minecraft:lily_of_the_valley',
                'minecraft:oxeye_daisy'
            ]
        }
    ];

    let flowers = [];

    conversions.forEach((conversion) => {
        conversion.set.forEach((block, i) => {
            let previous = conversion.set.slice(i - 1)[0];
            recipes.push({
                output: `8x ${block}`,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: previous,
                    B: '#c:essences/manipulation'
                },
                id: `${id_prefix}${getID(block)}_from_${getID(previous)}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
