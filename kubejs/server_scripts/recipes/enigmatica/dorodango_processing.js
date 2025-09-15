ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:dorodango_processing/';
    const recipes = [
        {
            outputs: [
                { id: 'aquaculture:neptunium_nugget', count: 1, chance: 1 / 2 },
                { id: 'ae2:certus_quartz_crystal', count: 1, chance: 1 / 4 },
                { id: 'minecraft:lapis_lazuli', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:briny_dorodango', count: 1 },
            id_suffix: `briny_dorodango_processing`
        },
        {
            outputs: [
                { id: 'minecraft:nautilus_shell', count: 1, chance: 1 / 2 },
                { id: 'minecraft:prismarine_shard', count: 1, chance: 1 / 4 },
                { id: 'minecraft:prismarine_crystals', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:silty_dorodango', count: 1 },
            id_suffix: `silty_dorodango_processing`
        },
        {
            outputs: [
                { id: 'malum:blazing_quartz', count: 1, chance: 1 / 2 },
                { id: 'modern_industrialization:carbon_dust', count: 1, chance: 1 / 4 },
                { id: 'minecraft:netherite_scrap', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:volcanic_dorodango', count: 1 },
            id_suffix: `volcanic_dorodango_processing`
        },
        {
            outputs: [
                { id: 'theurgy:crystallized_lava', count: 1, chance: 1 / 4 },
                { id: 'modern_industrialization:sulfur_dust', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:sulfurous_dorodango', count: 1 },
            id_suffix: `sulfurous_dorodango_processing`
        },
        {
            outputs: [
                { id: 'actuallyadditions:black_quartz', count: 1, chance: 1 / 2 },
                { id: 'aquaculture:fish_bones', count: 1, chance: 1 / 4 },
                { id: 'minecraft:rotten_flesh', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:boggy_dorodango', count: 1 },
            id_suffix: `boggy_dorodango_processing`
        },
        {
            outputs: [
                { id: 'ae2:sky_dust', count: 1, chance: 1 / 4 },
                { id: 'theurgy:crystallized_water', count: 1, chance: 1 / 6 }
            ],
            input: { item: 'enigmatica:cloudy_dorodango', count: 1 },
            id_suffix: `cloudy_dorodango_processing`
        },
        {
            outputs: [{ id: 'theurgy:crystallized_water', count: 1, chance: 1 / 2 }],
            input: { item: 'enigmatica:melon_ball', count: 1 },
            id_suffix: `melon_ball_processing`
        }
    ];

    recipes.forEach((recipe) => {
        let r;
        // Ars Nouveau Crushing
        //  r = {
        //     type: 'ars_nouveau:crush',
        //     output: [],
        //     input: recipe.input
        // };
        // recipe.outputs.forEach((output) => {
        //     r.output.push({ stack: output, chance: output.chance ? output.chance : 1.0, maxRange: 1 });
        // });
        // event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);

        // Create Mixing
        r = {
            type: 'create:mixing',
            results: [],
            ingredients: [recipe.input, { type: 'fluid_tag', fluid_tag: 'theurgy:sal_ammoniac', amount: 10 }],
            heat_requirement: 'heated'
        };
        recipe.outputs.forEach((output) => {
            r.results.push({
                id: output.id,
                count: output.count,
                chance: output.chance ? output.chance * 2 : 1.0
            });
        });
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);

        // Modern Industrialization Centrifuge
        recipe.input.amount = recipe.input.count;
        r = {
            type: 'modern_industrialization:centrifuge',
            item_outputs: [],
            item_inputs: [recipe.input],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            eu: 2,
            duration: 5 * 20
        };
        recipe.outputs.forEach((output) => {
            r.item_outputs.push({
                item: output.id,
                amount: output.count,
                probability: output.chance ? output.chance * 2 : 1.0
            });
        });
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
    });
});
