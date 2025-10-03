ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mi_tweaks/shaped/';

    const recipes = [
        {
            output: 'mi_tweaks:settling_tank',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'minecraft:bricks',
                B: 'modern_industrialization:steel_tank',
                C: 'minecraft:iron_trapdoor'
            },
            id: `${id_prefix}settling_tank`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
