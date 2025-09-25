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
            input: { item: 'ae2:engineering_processor' },
            matter: [
                { type: 'replication:ender', amount: 50 },
                { type: 'replication:earth', amount: 100 },
                { type: 'replication:precious', amount: 25 },
                { type: 'replication:metallic', amount: 25 }
            ],
            id: `${id_prefix}engineering_processor`
        },
        {
            input: { item: 'ae2:logic_processor' },
            matter: [
                { type: 'replication:ender', amount: 50 },
                { type: 'replication:earth', amount: 25 },
                { type: 'replication:precious', amount: 25 },
                { type: 'replication:metallic', amount: 100 }
            ],
            id: `${id_prefix}logic_processor`
        },
        {
            input: { item: 'ae2:calculation_processor' },
            matter: [
                { type: 'replication:ender', amount: 50 },
                { type: 'replication:earth', amount: 25 },
                { type: 'replication:precious', amount: 100 },
                { type: 'replication:metallic', amount: 25 }
            ],
            id: `${id_prefix}calculation_processor`
        }
    ];

    /*
    Types

    Tier 1:
        ender       Token of Joy (Air)
        earth       Token of Fear (Earth)
        precious    Token of Sorrow (Water)
        metallic    Token of Anger (Fire)
    
    Tier 2: 

        quantum     Token of Euphoria (Air)
        organic     Token of Terror (Earth) 
        living      Token of Grief (Water)       
        nether      Token of Rage (Fire)

    */

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';
        event.custom(recipe).id(recipe.id);
    });
});
