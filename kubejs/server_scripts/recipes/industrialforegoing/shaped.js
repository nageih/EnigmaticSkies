ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/shaped/';

    const recipes = [
        {
            output: 'industrialforegoing:animal_feeder',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'actuallyadditions:enori_crystal',
                B: 'aether:enchanted_berry',
                C: 'minecraft:golden_carrot',
                D: 'actuallyadditions:iron_casing',
                E: 'actuallyadditions:basic_coil',
                F: '#c:gears/stone'
            },
            id: `${id_prefix}animal_feeder`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
