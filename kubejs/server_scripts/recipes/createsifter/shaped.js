ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsifter/shaped/';

    const recipes = [
        {
            output: `createsifter:string_mesh`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: 'aether:skyroot_slab',
                C: 'farmersdelight:canvas'
            },
            id: `${id_prefix}string_mesh`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
