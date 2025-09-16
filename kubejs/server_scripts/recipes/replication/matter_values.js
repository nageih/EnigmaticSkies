ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        // Raw Materials
        {
            input: { item: 'naturesaura:token_sorrow' },
            matter: [{ type: 'replication:precious', amount: 32.0 }],
            id: `${id_prefix}token_sorrow`
        },
        {
            input: { item: 'naturesaura:token_grief' },
            matter: [
                { type: 'replication:precious', amount: 64.0 },
                { type: 'replication:living', amount: 32.0 }
            ],
            id: `${id_prefix}token_grief`
        },

        {
            input: { item: 'naturesaura:token_joy' },
            matter: [{ type: 'replication:ender', amount: 32.0 }],
            id: `${id_prefix}token_joy`
        },
        {
            input: { item: 'naturesaura:token_euphoria' },
            matter: [
                { type: 'replication:ender', amount: 64.0 },
                { type: 'replication:quantum', amount: 32.0 }
            ],
            id: `${id_prefix}token_euphoria`
        },

        {
            input: { item: 'naturesaura:token_fear' },
            matter: [{ type: 'replication:earth', amount: 32.0 }],
            id: `${id_prefix}token_fear`
        },
        {
            input: { item: 'naturesaura:token_terror' },
            matter: [
                { type: 'replication:earth', amount: 64.0 },
                { type: 'replication:organic', amount: 32.0 }
            ],
            id: `${id_prefix}token_terror`
        },

        {
            input: { item: 'naturesaura:token_anger' },
            matter: [{ type: 'replication:metallic', amount: 32.0 }],
            id: `${id_prefix}token_anger`
        },
        {
            input: { item: 'naturesaura:token_rage' },
            matter: [
                { type: 'replication:metallic', amount: 64.0 },
                { type: 'replication:nether', amount: 32.0 }
            ],
            id: `${id_prefix}token_rage`
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
