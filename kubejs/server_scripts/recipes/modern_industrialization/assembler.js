ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/assembler/';

    const recipes = [
        {
            item_outputs: [{ item: 'modern_industrialization:fluid_pipe', amount: 6 }],
            item_inputs: [
                { item: 'ppfluids:fluid_pipe', amount: 6 },
                { item: 'enderio:conduit_binder', amount: 3 },
                { item: 'ae2:quartz_glass', amount: 2 }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}fluid_pipe`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:item_pipe', amount: 6 }],
            item_inputs: [
                { item: 'prettypipes:pipe', amount: 6 },
                { item: 'enderio:conduit_binder', amount: 3 },
                { tag: 'c:nuggets/pulsating_alloy', amount: 6 }
            ],
            eu: 2,
            duration: 5,
            id: `${id_prefix}item_pipe`
        },
        {
            item_outputs: [{ item: 'pneumaticcraft:advanced_pressure_tube', amount: 1 }],
            item_inputs: [
                { item: 'pneumaticcraft:reinforced_pressure_tube', amount: 1 },
                { item: 'malum:soulwoven_silk', amount: 2 }
            ],
            eu: 4,
            duration: 5,
            id: `${id_prefix}advanced_pressure_tube`
        }
    ];

    colors.forEach((color) => {
        recipes.push(
            {
                item_outputs: [{ item: `modern_industrialization:${color}_fluid_pipe`, amount: 6 }],
                item_inputs: [
                    { item: 'ppfluids:fluid_pipe', amount: 6 },
                    { item: 'enderio:conduit_binder', amount: 3 },
                    { item: 'ae2:quartz_glass', amount: 2 },
                    { tag: `c:dyes/${color}`, amount: 1 }
                ],
                eu: 2,
                duration: 5,
                id: `${id_prefix}${color}_fluid_pipe`
            },
            {
                item_outputs: [{ item: `modern_industrialization:${color}_item_pipe`, amount: 6 }],
                item_inputs: [
                    { item: 'prettypipes:pipe', amount: 6 },
                    { item: 'enderio:conduit_binder', amount: 3 },
                    { tag: 'c:nuggets/pulsating_alloy', amount: 6 },
                    { tag: `c:dyes/${color}`, amount: 1 }
                ],
                eu: 2,
                duration: 5,
                id: `${id_prefix}${color}_item_pipe`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:assembler';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
