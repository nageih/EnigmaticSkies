ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/favor_of_the_void/';

    const recipes = [
        {
            output: { id: 'malum:runewood_sapling' },
            ingredient: { item: 'ars_nouveau:green_archwood_sapling' },
            id: `${id_prefix}runewood_sapling`
        },
        {
            output: { id: 'malum:azure_runewood_sapling' },
            ingredient: { item: 'ars_nouveau:blue_archwood_sapling' },
            id: `${id_prefix}azure_runewood_sapling`
        },
        {
            output: { id: 'malum:raw_soulstone' },
            ingredient: { tag: 'c:raw_materials/iron' },
            id: `${id_prefix}raw_soulstone`
        },
        {
            output: { id: 'minecraft:crimson_fungus' },
            ingredient: { item: 'minecraft:red_mushroom' },
            id: `${id_prefix}crimson_fungus`
        },
        {
            output: { id: 'minecraft:warped_fungus' },
            ingredient: { item: 'minecraft:brown_mushroom' },
            id: `${id_prefix}warped_fungus`
        },
        {
            output: { id: 'oritech:wither_crop_block' },
            ingredient: { item: 'minecraft:nether_wart' },
            id: `${id_prefix}wither_crop_block`
        },
        {
            output: { id: 'malum:anomalous_design' },
            ingredient: { item: 'ae2:fluix_block' },
            id: `${id_prefix}anomalous_design`
        },
        {
            output: {
                type: 'neoforge:components',
                id: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:end' } }
            },
            ingredient: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:overworld' } }
            },
            id: `${id_prefix}bottled_darkness`
        },
        {
            output: { id: 'occultism:eldritch_chalice' },
            ingredient: { item: 'actuallyadditions:coffee_cup' },
            id: `${id_prefix}eldritch_chalice`
        },
        {
            output: { id: AlmostUnified.getTagTargetItem(`c:ingots/silver`).getId() },
            ingredient: { tag: 'c:ingots/gold' },
            id: `${id_prefix}silver_ingot`
        }
    ];

    const aa_crystals = ['restonia', 'palis', 'diamatine', 'void', 'emeradic', 'enori'];

    aa_crystals.forEach((crystal) => {
        recipes.push(
            {
                output: { id: `actuallyadditions:empowered_${crystal}_crystal` },
                ingredient: { tag: `c:gems/${crystal}` },
                id: `${id_prefix}empowered_${crystal}_crystal`
            },
            {
                output: { id: `actuallyadditions:empowered_${crystal}_crystal_block` },
                ingredient: { tag: `c:storage_blocks/${crystal}` },
                id: `${id_prefix}empowered_${crystal}_crystal_block`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:favor_of_the_void';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
