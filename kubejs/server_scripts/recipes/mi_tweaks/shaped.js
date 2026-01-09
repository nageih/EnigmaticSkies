ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mi_tweaks/shaped/';

    const recipes = [
        {
            output: 'mi_tweaks:settling_tank',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'minecraft:bricks',
                B: 'pneumaticcraft:small_tank',
                C: 'minecraft:iron_trapdoor',
                D: 'minecraft:barrel'
            },
            id: `${id_prefix}settling_tank`
        },
        {
            output: 'mi_tweaks:large_settling_tank',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'minecraft:bricks',
                B: 'pneumaticcraft:large_tank',
                C: 'enderio:dark_steel_trapdoor',
                D: 'minecraft:barrel'
            },
            id: `${id_prefix}large_settling_tank`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
