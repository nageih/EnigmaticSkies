ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:laserio/shaped/';

    const recipes = [
        {
            output: `laserio:laser_connector`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'actuallyadditions:laser_relay_item_advanced',
                B: '#c:gems/empowered_enori',
                C: `enderio:z_logic_controller`
            },
            id: `${id_prefix}laser_connector`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
