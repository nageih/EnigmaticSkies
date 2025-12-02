ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:simplemagnets/shaped/';

    const recipes = [
        {
            output: 'simplemagnets:basic_demagnetization_coil',
            pattern: [' B ', 'ABA', 'BAB'],
            key: {
                A: '#c:gems/restonia',
                B: '#c:gems/enori'
            },
            id: `${id_prefix}basic_demagnetization_coil`
        },
        {
            output: 'simplemagnets:advancedmagnet',
            pattern: ['AAB', 'CD ', 'AAE'],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: '#c:gems/empowered_palis',
                C: 'simplemagnets:basicmagnet',
                D: 'aether:enchanted_gravitite',
                E: '#c:gems/empowered_restonia'
            },
            id: `${id_prefix}advancedmagnet`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
