ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/accumulation/';

    const recipes = [
        {
            result: { id: 'sauce:source_fluid', amount: 1000 },
            solute: { item: 'ars_additions:codex_entry' },
            evaporant: { ingredient: { tag: 'theurgy:sal_ammoniac' }, amount: 1000 },
            time: 5,
            id: `${id_prefix}source_fluid`
        },
        {
            result: { id: 'minecraft:water', amount: 250 },
            solute: { item: 'aether:cold_aercloud' },
            time: 5,
            id: `${id_prefix}water`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:accumulation';
        recipe.category = 'misc';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        
    });
});
