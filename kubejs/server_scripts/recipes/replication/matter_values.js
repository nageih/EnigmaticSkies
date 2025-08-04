ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        // Raw Materials
        {
            input: { item: 'modern_industrialization:fire_clay_bricks' },
            matter: [{ type: 'replication:earth', amount: 64.0 }],
            id: `${id_prefix}fire_clay_bricks`
        },
        {
            input: { item: 'farmersdelight:organic_compost' },
            matter: [{ type: 'replication:organic', amount: 64.0 }],
            id: `${id_prefix}organic_compost`
        },
        {
            input: { item: 'theurgy:alchemical_salt_mineral' },
            matter: [{ type: 'replication:metallic', amount: 64.0 }],
            id: `${id_prefix}alchemical_salt_mineral`
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            matter: [{ type: 'replication:nether', amount: 64.0 }],
            id: `${id_prefix}blaze_ember`
        },
        {
            input: { item: 'enderio:ender_resonator' },
            matter: [{ type: 'replication:ender', amount: 64.0 }],
            id: `${id_prefix}ender_resonator`
        },
        {
            input: { item: 'minecraft:ghast_tear' },
            matter: [{ type: 'replication:precious', amount: 64.0 }],
            id: `${id_prefix}ghast_tear`
        },
        {
            input: { item: 'justdirethings:time_crystal' },
            matter: [{ type: 'replication:quantum', amount: 64.0 }],
            id: `${id_prefix}time_crystal`
        },
        {
            input: { item: 'industrialforegoing:pink_slime_block' },
            matter: [{ type: 'replication:living', amount: 64.0 }],
            id: `${id_prefix}pink_slime_block`
        },

        // Components

        {
            input: { item: 'modern_industrialization:analog_circuit' },
            matter: [
                { type: 'replication:organic', amount: 24.0 },
                { type: 'replication:metallic', amount: 48.0 },
                { type: 'replication:earth', amount: 32.0 },
                { type: 'replication:precious', amount: 48.0 }
            ],
            id: `${id_prefix}analog_circuit`
        }
    ];

    /*
    Types:
        living
        organic
        metallic
        earth
        precious
        quantum
        nether
        ender

    */

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';
        event.custom(recipe).id(recipe.id);
    });
});
