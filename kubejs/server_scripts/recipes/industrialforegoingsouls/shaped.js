ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoingsouls/shaped/';

    const recipes = [
        {
            output: 'industrialforegoingsouls:soul_laser_base',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/empowered_void',
                B: 'malum:spirit_jar',
                C: 'minecraft:echo_shard',
                D: 'modern_industrialization:steel_machine_casing',
                E: '#c:gems/ender_crystal'
            },
            id: `${id_prefix}soul_laser_base`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
