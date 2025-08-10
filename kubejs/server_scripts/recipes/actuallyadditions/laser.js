ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:nether_wart' },
            result: { id: 'oritech:wither_crop_block' },
            energy: 50000,
            id: `${id_prefix}wither_crop_block`
        },
        {
            ingredient: { item: 'minecraft:allium' },
            result: { id: 'minecraft:wither_rose' },
            energy: 50000,
            id: `${id_prefix}wither_rose`
        },
        {
            ingredient: { item: 'minecraft:mud' },
            result: { id: 'minecraft:moss_block' },
            energy: 500,
            id: `${id_prefix}moss_block`
        },
        {
            ingredient: { item: 'minecraft:netherrack' },
            result: { id: 'minecraft:glowstone' },
            energy: 5000,
            id: `${id_prefix}glowstone`
        },
        {
            ingredient: { item: 'minecraft:calcite' },
            result: { id: 'minecraft:amethyst_block' },
            energy: 5000,
            id: `${id_prefix}amethyst_block`
        },
        {
            ingredient: { item: 'createsifter:calcite_pebble' },
            result: { id: 'minecraft:amethyst_shard' },
            energy: 5000,
            id: `${id_prefix}amethyst_shard`
        },
        {
            ingredient: { item: 'minecraft:honey_block' },
            result: { id: 'minecraft:ochre_froglight' },
            energy: 5000,
            id: `${id_prefix}ochre_froglight`
        },
        {
            ingredient: { item: 'minecraft:slime_block' },
            result: { id: 'minecraft:verdant_froglight' },
            energy: 5000,
            id: `${id_prefix}verdant_froglight`
        },
        {
            ingredient: { item: 'industrialforegoing:pink_slime_block' },
            result: { id: 'minecraft:pearlescent_froglight' },
            energy: 5000,
            id: `${id_prefix}pearlescent_froglight`
        },
        {
            ingredient: { item: AlmostUnified.getTagTargetItem('c:storage_blocks/bronze').getId() },
            result: { id: 'aquaculture:neptunium_block' },
            energy: 50000,
            id: `${id_prefix}neptunium_block`
        },
        {
            ingredient: { item: AlmostUnified.getTagTargetItem('c:ingots/bronze').getId() },
            result: { id: 'aquaculture:neptunium_ingot' },
            energy: 50000,
            id: `${id_prefix}neptunium_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
