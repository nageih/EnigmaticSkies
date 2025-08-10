ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/shaped/';

    const recipes = [
        {
            output: `create:electron_tube`,
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:polished_rose_quartz',
                B: 'actuallyadditions:enori_crystal',
                B: 'actuallyadditions:restonia_crystal'
            },
            id: `${id_prefix}electron_tube`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
