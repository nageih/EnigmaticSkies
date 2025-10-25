ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:simple_alloying/';
    const recipes = [
        {
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/bronze').getId(), count: 1 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:tiny_dusts/silicon', count: 1 }
            ],
            tier: 1,
            exclusions: ['modern_industrialization:mixer'],
            id_suffix: `bronze_ingot`
        },
        {
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/electrum').getId(), count: 2 },
            inputs: [
                { tag: 'c:ingots/gold', count: 1 },
                { tag: 'c:ingots/silver', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `electrum_ingot`
        },
        {
            output: { id: 'occultism:iesnium_ingot', count: 5 },
            inputs: [
                { tag: 'c:ingots/silver', count: 4 },
                { tag: 'c:dusts/diamond', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `iesnium_ingot`
        },
        {
            output: { id: 'naturesaura:depth_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/sky', count: 2 },
                { tag: 'c:ingots/netherite', count: 2 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `depth_ingot`
        },
        {
            output: { id: 'minecraft:netherite_ingot', count: 2 },
            inputs: [
                { item: 'minecraft:netherite_scrap', count: 4 },
                { tag: 'c:ingots/hallowed_gold', count: 4 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `netherite_ingot`
        },

        {
            output: { id: 'create:rose_quartz', count: 2 },
            inputs: [
                { item: 'malum:strange_crystal', count: 1 },
                { tag: 'c:gems/black_quartz', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `rose_quartz`
        },
        {
            output: { id: 'enderio:copper_alloy_ingot', count: 2 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/andesite_alloy', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `copper_alloy_ingot`
        },
        {
            output: { id: 'enderio:redstone_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:dusts/redstone', count: 1 },
                { tag: 'c:dusts/silicon', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `redstone_alloy_ingot`
        },
        {
            output: { id: 'enderio:conductive_alloy_ingot', count: 2 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/infused_iron', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `conductive_alloy_ingot`
        },
        {
            output: { id: 'enderio:energetic_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/hallowed_gold', count: 1 },
                { item: 'malum:strange_crystal', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `energetic_alloy_ingot`
        },
        {
            output: { id: 'enderio:pulsating_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/infused_iron', count: 1 },
                { tag: 'c:dusts/grains_of_pizeallity', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `pulsating_alloy_ingot`
        },
        {
            output: { id: 'enderio:soularium_ingot', count: 1 },
            inputs: [
                { item: 'oritech:wither_crop_block', count: 13 },
                { tag: 'c:ingots/hallowed_gold', count: 1 }
            ],
            tier: 1,
            exclusions: ['create'],
            id_suffix: `soularium_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        // EnderIO
        if (!recipe.exclusions.includes('enderio')) {
            let r = {
                type: 'enderio:alloy_smelting',
                inputs: recipe.inputs,
                output: recipe.output,
                energy: recipe.tier == 2 ? 9600 : 6400,
                experience: recipe.tier == 2 ? 1.5 : 0.3
            };
            let r_id = `${id_prefix}${getID(r.type)}/${recipe.id_suffix}`;
            event.custom(r).id(r_id);
            if (debug) console.log(r_id);
        }

        // Create Mixing
        if (!recipe.exclusions.includes('create')) {
            let ingredients = [];
            recipe.inputs.forEach((input) => {
                for (var i = 0; i < input.count; i++) {
                    ingredients.push(input);
                }
            });
            let r = {
                type: 'create:mixing',
                ingredients: ingredients,
                results: [recipe.output],
                heat_requirement: recipe.tier == 2 ? 'superheated' : 'heated'
            };
            let r_id = `${id_prefix}${getID(r.type)}/${recipe.id_suffix}`;
            event.custom(r).id(r_id);
            if (debug) console.log(r_id);
        }

        // MI Blast Furnace
        if (!recipe.exclusions.includes('modern_industrialization')) {
            let r = {
                type: 'modern_industrialization:blast_furnace',
                item_inputs: recipe.inputs.map((input) => {
                    input.amount = input.count;
                    return input;
                }),
                item_outputs: [{ item: recipe.output.id, amount: recipe.output.count }],
                duration: recipe.tier * 5 * 20,
                eu: recipe.tier * 2
            };
            let r_id = `${id_prefix}${getID(r.type)}/${recipe.id_suffix}`;
            event.custom(r).id(r_id);
            if (debug) console.log(r_id);
        }
    });
});
