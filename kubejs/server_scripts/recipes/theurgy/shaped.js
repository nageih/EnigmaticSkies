ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/shaped/';

    const recipes = [
        {
            output: 'theurgy:sal_ammoniac_tank',
            pattern: ['ABA', 'ACA', 'DDD'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:ambrosium_shard',
                C: 'handcrafted:terracotta_thick_pot',
                D: 'aether:skyroot_planks'
            },
            id: `${id_prefix}sal_ammoniac_tank`
        },
        {
            output: 'theurgy:sal_ammoniac_accumulator',
            pattern: ['ABA', 'DCD'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:ambrosium_shard',
                C: 'handcrafted:terracotta_thick_pot',
                D: 'aether:skyroot_planks'
            },
            id: `${id_prefix}sal_ammoniac_accumulator`
        },
        {
            output: 'theurgy:digestion_vat',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: 'handcrafted:terracotta_thick_pot'
            },
            id: `${id_prefix}digestion_vat`
        },
        {
            output: 'theurgy:fermentation_vat',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: 'minecraft:barrel'
            },
            id: `${id_prefix}fermentation_vat`
        },
        {
            output: 'theurgy:calcination_oven',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'modern_industrialization:fire_clay_brick',
                C: 'minecraft:blast_furnace',
                D: 'create:basin'
            },
            id: `${id_prefix}calcination_oven`
        },
        {
            output: 'theurgy:pyromantic_brazier',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'handcrafted:terracotta_thick_pot',
                C: 'create:shaft'
            },
            id: `${id_prefix}pyromantic_brazier`
        },
        {
            output: 'theurgy:distiller',
            pattern: [' A ', 'ABA', 'CCC'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'handcrafted:terracotta_thick_pot',
                C: 'minecraft:polished_andesite'
            },
            id: `${id_prefix}distiller`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
