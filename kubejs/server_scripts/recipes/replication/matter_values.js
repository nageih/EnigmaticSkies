ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        // Raw Materials
        {
            input: { item: 'naturesaura:token_sorrow' },
            matter: [
                { type: 'replication:precious', amount: 16.0 },
                { type: 'replication:living', amount: 8.0 }
            ],
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
            matter: [
                { type: 'replication:ender', amount: 16.0 },
                { type: 'replication:quantum', amount: 8.0 }
            ],
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
            matter: [
                { type: 'replication:earth', amount: 16.0 },
                { type: 'replication:organic', amount: 8.0 }
            ],
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
            matter: [
                { type: 'replication:metallic', amount: 16.0 },
                { type: 'replication:nether', amount: 8.0 }
            ],
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
            input: { item: 'ae2:engineering_processor' },
            matter: [
                { type: 'replication:ender', amount: 128 },
                { type: 'replication:earth', amount: 128 },
                { type: 'replication:precious', amount: 128 },
                { type: 'replication:metallic', amount: 128 },

                { type: 'replication:organic', amount: 64 }
            ],
            id: `${id_prefix}engineering_processor`
        },
        {
            input: { item: 'ae2:logic_processor' },
            matter: [
                { type: 'replication:ender', amount: 128 },
                { type: 'replication:earth', amount: 128 },
                { type: 'replication:precious', amount: 128 },
                { type: 'replication:metallic', amount: 128 },

                { type: 'replication:nether', amount: 64 }
            ],
            id: `${id_prefix}logic_processor`
        },
        {
            input: { item: 'ae2:calculation_processor' },
            matter: [
                { type: 'replication:ender', amount: 128 },
                { type: 'replication:earth', amount: 128 },
                { type: 'replication:precious', amount: 128 },
                { type: 'replication:metallic', amount: 128 },

                { type: 'replication:living', amount: 64 }
            ],
            id: `${id_prefix}calculation_processor`
        },
        {
            input: { item: 'modern_industrialization:quantum_circuit' },
            matter: [
                { type: 'replication:ender', amount: 128 },
                { type: 'replication:earth', amount: 128 },
                { type: 'replication:precious', amount: 128 },
                { type: 'replication:metallic', amount: 128 },

                { type: 'replication:quantum', amount: 64 }
            ],
            id: `${id_prefix}quantum_circuit`
        }
    ];

    /*
    Types

    Token of Joy/Euphoria (Air)
        ender
        quantum

    Token of Fear/Terror (Earth)
        earth
        organic

    Token of Sorrow/Grief (Water)
        precious
        living

    Token of Anger/Rage (Fire)
        metallic
        nether
    */

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
