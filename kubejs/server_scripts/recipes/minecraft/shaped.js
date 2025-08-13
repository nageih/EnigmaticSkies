ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'BBB'],
            key: {
                A: 'aether:holystone',
                B: 'aether:holystone_bricks'
            },
            id: `minecraft:furnace`
        },
        {
            output: 'minecraft:lever',
            pattern: ['A', 'B'],
            key: {
                A: '#c:rods/wooden',
                B: 'aether:holystone'
            },
            id: `${id_prefix}lever`
        },
        {
            output: '3x minecraft:glass_bottle',
            pattern: ['A A', ' A '],
            key: {
                A: 'aether:quicksoil_glass'
            },
            id: `${id_prefix}glass_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
