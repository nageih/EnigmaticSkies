ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsifter/shaped/';

    const recipes = [
        {
            output: `createsifter:sifter`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'aether:skyroot_planks',
                B: 'create:andesite_casing',
                C: 'aether:skyroot_stick',
                D: 'create:cogwheel',
                E: 'aether:holystone_bricks'
            },
            id: `${id_prefix}sifter`
        },
        {
            output: `createsifter:brass_sifter`,
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#c:plates/brass',
                B: 'create:content_observer',
                C: `createsifter:sifter`,
                D: 'ars_technica:calibrated_precision_mechanism',
                E: 'create:smart_chute'
            },
            id: `${id_prefix}brass_sifter`
        },
        {
            output: `createsifter:string_mesh`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: 'aether:skyroot_slab',
                C: 'farmersdelight:canvas'
            },
            id: `${id_prefix}string_mesh`
        },
        {
            output: `createsifter:andesite_mesh`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:sky_block',
                B: '#c:ingots/andesite_alloy',
                C: `createsifter:string_mesh`
            },
            id: `${id_prefix}andesite_mesh`
        },
        {
            output: `createsifter:brass_mesh`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'malum:astral_weave',
                B: '#c:plates/brass',
                C: `createsifter:andesite_mesh`
            },
            id: `${id_prefix}brass_mesh`
        },
        {
            output: `createsifter:sturdy_mesh`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'malum:soulwoven_silk',
                B: '#c:plates/obsidian',
                C: `createsifter:brass_mesh`
            },
            id: `${id_prefix}sturdy_mesh`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
