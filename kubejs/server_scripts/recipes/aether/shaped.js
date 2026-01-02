ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/shaped/';

    const recipes = [
        {
            output: `aether:iron_ring`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/iron',
                B: 'aether:ambrosium_shard'
            },
            id: `${id_prefix}iron_ring`
        },
        {
            output: `aether:golden_ring`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/gold',
                B: 'aether:ambrosium_shard'
            },
            id: `${id_prefix}golden_ring`
        },
        {
            output: `aether:altar`,
            pattern: ['CCC', 'CBC', 'AAA'],
            key: {
                A: 'aether:holystone',
                B: 'aether:ambrosium_shard',
                C: '#aether:planks_crafting'
            },
            id: `${id_prefix}altar`
        },
        {
            output: `aether:freezer`,
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'aether:holystone',
                B: 'aether:icestone',
                C: '#aether:planks_crafting'
            },
            id: `${id_prefix}freezer`
        },
        {
            output: '16x aether:skyroot_stick',
            pattern: ['A', 'A'],
            key: {
                A: '#aether:skyroot_logs'
            },
            id: `${id_prefix}skyroot_stick`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
