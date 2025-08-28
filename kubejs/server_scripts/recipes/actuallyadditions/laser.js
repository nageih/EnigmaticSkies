ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
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
            ingredient: { item: 'aquaculture:neptunium_nugget' },
            result: { id: AlmostUnified.getTagTargetItem('c:nuggets/brass').getId() },
            energy: 2000,
            id: `${id_prefix}brass_nugget_from_neptunium`
        },
        {
            ingredient: { item: 'aquaculture:neptunium_ingot' },
            result: { id: AlmostUnified.getTagTargetItem('c:ingots/brass').getId() },
            energy: 2000 * 8,
            id: `${id_prefix}brass_ingot_from_neptunium`
        },
        {
            ingredient: { item: 'aquaculture:neptunium_block' },
            result: { id: AlmostUnified.getTagTargetItem('c:storage_blocks/brass').getId() },
            energy: 2000 * 8 * 8,
            id: `${id_prefix}brass_block_from_neptunium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
