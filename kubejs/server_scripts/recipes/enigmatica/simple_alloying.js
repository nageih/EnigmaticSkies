ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:simple_alloying/';
    const recipes = [
        {
            output: { id: 'enderio:dark_steel_ingot', count: 1 },
            inputs: [
                { tag: 'c:dusts/obsidian', count: 2 },
                { tag: 'c:ingots/steel', count: 1 },
                { tag: 'c:gems/black_quartz', count: 2 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `darksteel_ingot`
        },
        {
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/bronze').getId(), count: 1 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:tiny_dusts/silicon', count: 1 }
            ],
            tier: 1,
            exclusions: [],
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
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/silver', count: 4 },
                { tag: 'c:dusts/diamond', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `iesnium_ingot`
        },
        // {
        //     output: { id: AlmostUnified.getTagTargetItem('c:ingots/invar').getId(), count: 3 },
        //     inputs: [
        //         { tag: 'c:ingots/nickel', count: 1 },
        //         { tag: 'c:ingots/iron', count: 2 }
        //     ],
        //     tier: 1,
        //     exclusions: [],
        //     id_suffix: `invar_ingot`
        // },
        {
            output: { id: 'naturesaura:depth_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/sky', count: 2 },
                { item: 'minecraft:netherite_scrap', count: 1 },
                { tag: 'c:ingots/tainted_gold', count: 2 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `depth_ingot`
        },
        {
            output: { id: 'minecraft:netherite_ingot', count: 2 },
            inputs: [
                { item: 'minecraft:netherite_scrap', count: 4 },
                { tag: 'c:ingots/gold', count: 4 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `netherite_ingot`
        },
        {
            output: { id: 'create:andesite_alloy', count: 1 },
            inputs: [
                { tag: 'c:dusts/sky_stone', count: 1 },
                { item: 'minecraft:andesite', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `andesite_alloy`
        },
        {
            output: { id: 'create:rose_quartz', count: 1 },
            inputs: [
                { tag: 'c:gems/restonia', count: 4 },
                { tag: 'c:gems/black_quartz', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `rose_quartz`
        },
        {
            output: { id: 'modern_industrialization:cupronickel_ingot', count: 2 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/nickel', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `cupronickel_ingot`
        },
        {
            output: { id: 'modern_industrialization:battery_alloy_ingot', count: 2 },
            inputs: [
                { tag: 'c:ingots/lead', count: 1 },
                { tag: 'c:ingots/antimony', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `battery_alloy_ingot`
        },
        {
            output: { id: 'enderio:copper_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/andesite_alloy', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `copper_alloy_ingot`
        },
        {
            output: { id: 'enderio:energetic_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:dusts/redstone', count: 1 },
                { tag: 'c:ingots/gold', count: 1 },
                { tag: 'c:dusts/glowstone', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `energetic_alloy_ingot`
        },
        {
            output: { id: 'enderio:vibrant_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/energetic_alloy', count: 1 },
                { tag: 'c:ender_pearls', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `vibrant_alloy_ingot`
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
            output: { id: 'enderio:conductive_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/copper_alloy', count: 1 },
                { tag: 'c:ingots/iron', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `conductive_alloy_ingot`
        },
        {
            output: { id: 'enderio:pulsating_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/copper_alloy', count: 1 },
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
                { tag: 'c:ingots/tainted_gold', count: 1 }
            ],
            tier: 1,
            exclusions: ['create'],
            id_suffix: `soularium_ingot`
        },
        {
            output: { id: 'enderio:end_steel_ingot', count: 2 },
            inputs: [
                { tag: 'c:dusts/end_stone', count: 4 },
                { tag: 'c:ingots/dark_steel', count: 2 },
                { item: 'minecraft:dragon_breath', count: 1 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `end_steel_ingot`
        },
        {
            output: { id: 'oritech:duratium_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/platinum', count: 1 },
                { item: 'oritech:reinforced_carbon_sheet', count: 2 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `duratium_ingot`
        },
        {
            output: { id: 'oritech:energite_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/nickel', count: 1 },
                { tag: 'c:gems/fluxite', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `energite_ingot`
        },
        {
            output: { id: 'oritech:adamant_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/neptunium', count: 1 },
                { tag: 'c:dusts/diamond', count: 1 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `adamant_ingot`
        },
        {
            output: { id: 'modern_industrialization:fire_clay_brick', count: 2 },
            inputs: [
                { tag: 'c:clay', count: 1 },
                { item: 'aether:aerogel', count: 1 },
                { tag: 'c:dusts/ash', count: 1 }
            ],
            tier: 1,
            exclusions: [],
            id_suffix: `fire_clay_brick`
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
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
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
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // MI Mixing
        if (!recipe.exclusions.includes('modern_industrialization')) {
            let r = {
                type: 'modern_industrialization:mixer',
                item_inputs: recipe.inputs.map((input) => {
                    input.amount = input.count;
                    return input;
                }),
                item_outputs: [{ item: recipe.output.id, amount: recipe.output.count }],
                duration: recipe.tier * 5 * 20,
                eu: recipe.tier * 2
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }
    });
});
