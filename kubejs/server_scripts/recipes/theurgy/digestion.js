ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/digestion/';

    const recipes = [
        {
            result: { id: 'minecraft:redstone', count: 4 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { tag: 'c:clay' }, count: 4 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}redstone_from_clay`
        },
        {
            result: { id: 'ars_nouveau:source_gem', count: 4 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'aether:ambrosium_shard' }, count: 4 }
            ],
            fluid: { id: 'sauce:source_fluid', amount: 1000 },
            time: 5,
            id: `${id_prefix}source_gem_from_ambrosium_shard`
        },
        {
            result: { id: 'createsifter:raw_gold_piece', count: 1 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'aquaculture:goldfish' }, count: 8 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}raw_gold_piece_from_goldfish`
        },
        {
            result: { id: 'createsifter:raw_iron_piece', count: 1 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { tag: 'c:foods/raw_meats' }, count: 8 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}raw_iron_piece_from_raw_meats`
        },
        {
            result: { id: 'minecraft:gunpowder', count: 2 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'ars_nouveau:bombegranate_pod' }, count: 1 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}gunpowder_from_bombegranate_pod`
        },
        {
            result: { id: 'modern_industrialization:ruby_dust', count: 2 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'ars_nouveau:mendosteen_pod' }, count: 1 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}ruby_dust_from_mendosteen_pod`
        },
        {
            result: { id: 'minecraft:glowstone_dust', count: 2 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'minecraft:glow_berries' }, count: 1 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}glowstone_dust_from_glow_berries`
        },
        {
            result: { id: 'enderio:grains_of_infinity', count: 2 },
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'ars_nouveau:bastion_pod' }, count: 1 }
            ],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}grains_of_infinity_from_bastion_pod`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:digestion';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time = recipe.time * 20;
        recipe.fluid = { ingredient: { fluid: recipe.fluid.id }, amount: recipe.fluid.amount };
        event.custom(recipe).id(recipe.id);
    });
});
