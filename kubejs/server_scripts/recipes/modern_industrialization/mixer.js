ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/mixer/';

    const recipes = [
        {
            item_inputs: [
                { item: 'ars_nouveau:abjuration_essence', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/blazegold', amount: 1 }
            ],
            item_outputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 4 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}polymorphic_catalyst`
        },
        {
            item_inputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}polymorphic_fluid_source`
        },

        {
            fluid_outputs: [{ fluid: 'modern_industrialization:sugar_solution', amount: 1000 }],
            item_inputs: [{ tag: 'c:sugars', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            duration: 10,
            eu: 2,
            id: `modern_industrialization:oil/mixer/sugar_solution`
        },
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1000 }],
            item_inputs: [{ tag: 'c:dusts/redstone', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:plant_oil', amount: 1000 }],
            duration: 10,
            eu: 2,
            id: `modern_industrialization:oil/mixer/lubricant_from_plant_oil`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:crystallized_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 }],
            duration: 1,
            eu: 1,
            id: `${id_prefix}crystallized_oil`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:empowered_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:empowered_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            duration: 1,
            eu: 1,
            id: `${id_prefix}empowered_oil`
        },
        {
            item_outputs: [{ item: 'appflux:redstone_crystal', amount: 1 }],
            item_inputs: [
                { tag: 'c:storage_blocks/redstone', amount: 1 },
                { tag: 'c:gems/fluix', amount: 1 },
                { tag: 'c:dusts/glowstone', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000, probability: 0.0 }],
            duration: 5,
            eu: 8,
            id: `${id_prefix}redstone_crystal`
        },
        {
            item_outputs: [{ item: 'justdirethings:time_crystal', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:time_crystal_block', amount: 1, probability: 0.0 },
                { item: 'minecraft:ghast_tear', amount: 1 }
            ],
            duration: 120,
            eu: 4,
            id: `${id_prefix}time_crystal`
        },
        {
            item_outputs: [{ item: 'oritech:raw_silicon', amount: 3 }],
            fluid_inputs: [{ tag: 'c:water', amount: 1000 }],
            item_inputs: [
                { tag: 'c:sands/colorless', amount: 2 },
                { tag: 'c:dusts/certus_quartz', amount: 4 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}raw_silicon`
        },
        {
            item_outputs: [{ item: 'enderio:industrial_insulation_block', amount: 2 }],
            fluid_inputs: [{ tag: 'theurgy:solvent', amount: 250 }],
            item_inputs: [
                { item: 'minecraft:glass', amount: 1 },
                { item: 'aether:aerogel', amount: 8 },
                { tag: 'c:gems/black_quartz', amount: 2 }
            ],
            duration: 10,
            eu: 4,
            id: `${id_prefix}industrial_insulation_block`
        },
        {
            item_outputs: [{ item: 'minecraft:gunpowder', amount: 2 }],
            item_inputs: [
                { item: 'create:cinder_flour', amount: 1 },
                { tag: 'c:dusts/sulfur', amount: 1 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}gunpowder`
        },
        {
            item_outputs: [{ item: 'enderio:pulsating_crystal', amount: 1 }],
            fluid_inputs: [{ tag: 'c:lumisene', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/brilliance', amount: 4 },
                { tag: 'c:gems/source', amount: 1 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}pulsating_crystal`
        },
        {
            fluid_outputs: [{ fluid: 'supplementaries:lumisene', amount: 250 }],
            item_inputs: [{ item: 'minecraft:glow_berries', amount: 2 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}lumisene`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            item_inputs: [{ tag: `ae2:${washable}_cable`, amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            item_outputs: [{ item: `ae2:fluix_${washable}_cable`, amount: 1 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                item_inputs: [{ item: `create:${oxide}${type}`, amount: 1 }],
                fluid_inputs: [{ tag: 'c:honey', amount: 1 }],
                item_outputs: [{ item: `create:waxed_${oxide}${type}`, amount: 1 }],
                duration: 5,
                eu: 2,
                id: `${id_prefix}waxed_${oxide}${type}`
            });
        });
    });

    const jdt_materials = [
        { input: 'c:ingots/iron', output: 'justdirethings:ferricore_ingot', tier: 1 },
        { input: 'c:ingots/gold', output: 'justdirethings:blazegold_ingot', tier: 2 },
        { input: 'c:gems/blazing_quartz', output: 'justdirethings:coal_t2', tier: 2 },
        { input: 'c:gems/diamond', output: 'justdirethings:celestigem', tier: 3 },
        { input: 'c:gems/blaze_ember', output: 'justdirethings:coal_t3', tier: 3 },
        { input: 'c:ingots/netherite', output: 'justdirethings:eclipsealloy_ingot', tier: 4 },
        { input: 'c:gems/voidflame', output: 'justdirethings:coal_t4', tier: 4 }
    ];

    jdt_materials.forEach((material) => {
        recipes.push({
            item_inputs: [
                { tag: `justdirethings:goo/tier${material.tier}`, amount: 1, probability: 0.0 },
                { tag: material.input, amount: 9 },
                { tag: `justdirethings:goo_revive_tier_${material.tier}`, amount: 1, probability: 0.1 }
            ],
            item_outputs: [
                { item: material.output, amount: 3 },
                { item: material.output, amount: 1, probability: 0.5 }
            ],
            duration: 60 * material.tier,
            eu: material.tier,
            id: `${id_prefix}${material.output.split(':')[1]}`
        });
    });

    const jdt_fuels = [
        { input: 'c:gems/blaze_ember', additive: 'actuallyadditions:refined_canola_oil', tier: 2 },
        { input: 'c:gems/voidflame', additive: 'actuallyadditions:crystallized_oil', tier: 3 },
        { input: 'c:gems/eclipse_ember', additive: 'actuallyadditions:empowered_oil', tier: 4 }
    ];

    jdt_fuels.forEach((material) => {
        recipes.push({
            item_inputs: [
                { tag: `justdirethings:goo/tier${material.tier}`, amount: 1, probability: 0.0 },
                { tag: `justdirethings:goo_revive_tier_${material.tier}`, amount: 1, probability: 0.1 },
                { tag: material.input, amount: 1 }
            ],
            fluid_inputs: [
                {
                    fluid:
                        material.tier == 2
                            ? `justdirethings:polymorphic_fluid_source`
                            : `justdirethings:refined_t${material.tier - 1}_fluid_source`,
                    amount: 1000
                },
                { fluid: material.additive, amount: 1000 }
            ],
            fluid_outputs: [{ fluid: `justdirethings:refined_t${material.tier}_fluid_source`, amount: 3000 }],
            duration: 60 * material.tier,
            eu: material.tier,
            id: `${id_prefix}refined_t${material.tier}_fluid_source`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
