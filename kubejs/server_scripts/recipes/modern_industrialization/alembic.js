ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/steam_alembic/';

    const recipes = [
        {
            item_outputs: [
                { item: 'aquaculture:neptunium_nugget', amount: 3, probability: 1 / 3 },
                { item: 'ae2:certus_quartz_crystal', amount: 2, probability: 1 / 3 },
                { item: 'minecraft:lapis_lazuli', amount: 1, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:briny_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}briny_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'minecraft:nautilus_shell', amount: 4, probability: 1 / 3 },
                { item: 'minecraft:prismarine_shard', amount: 2, probability: 1 / 3 },
                { item: 'minecraft:prismarine_crystals', amount: 1, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:silty_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}silty_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'aquaculture:fish_bones', amount: 3, probability: 1 / 3 },
                { item: 'actuallyadditions:black_quartz', amount: 2, probability: 1 / 3 },
                { item: 'minecraft:rotten_flesh', amount: 1, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:boggy_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}boggy_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'aether:zanite_gemstone', amount: 3, probability: 1 / 3 },
                { item: 'occultism:echo_dust', amount: 2, probability: 1 / 3 },
                { item: 'occultism:otherworld_ashes', amount: 1, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:reverberating_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}reverberating_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'malum:blazing_quartz', amount: 3, probability: 1 / 3 },
                { item: 'theurgy:crystallized_lava', amount: 2, probability: 1 / 3 },
                { item: 'create:cinder_flour', amount: 1, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:volcanic_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}volcanic_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'theurgy:sal_ammoniac_crystal', amount: 3, probability: 1 / 3 },
                { item: 'ae2:sky_dust', amount: 2, probability: 1 / 3 },
                { item: 'malum:refined_brilliance', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:cloudy_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}cloudy_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'theurgy:crystallized_water', amount: 3 },
                { item: 'theurgy:crystallized_water', amount: 1, probability: 1 / 2 }
            ],
            item_inputs: [{ item: 'enigmatica:melon_ball', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}melon_ball_processing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.duration *= 20;

        if (recipe.eu <= 4) {
            recipe.type = 'modern_industrialization:steam_alembic';
            event.custom(recipe).id(`${recipe.id}/steam`);

            if (debug) console.log(`${recipe.id}/steam`);
        }

        recipe.type = 'modern_industrialization:electric_alembic';
        event.custom(recipe).id(`${recipe.id}/electric`);

        if (debug) console.log(`${recipe.id}/electric`);
    });
});
