ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            result: { id: 'minecraft:wither_rose' },
            ingredient: { item: 'minecraft:allium' },
            energy: 50000,
            id: `${id_prefix}wither_rose`
        },
        {
            result: { id: 'minecraft:moss_block' },
            ingredient: { item: 'minecraft:mud' },
            energy: 500,
            id: `${id_prefix}moss_block`
        },
        {
            result: { id: 'minecraft:glowstone' },
            ingredient: { item: 'minecraft:netherrack' },
            energy: 5000,
            id: `${id_prefix}glowstone`
        },
        {
            result: { id: 'minecraft:amethyst_block' },
            ingredient: { item: 'minecraft:calcite' },
            energy: 5000,
            id: `${id_prefix}amethyst_block`
        },
        {
            result: { id: 'minecraft:amethyst_shard' },
            ingredient: { item: 'createsifter:calcite_pebble' },
            energy: 5000,
            id: `${id_prefix}amethyst_shard`
        },
        {
            result: { id: 'minecraft:ochre_froglight' },
            ingredient: { item: 'minecraft:honey_block' },
            energy: 5000,
            id: `${id_prefix}ochre_froglight`
        },
        {
            result: { id: 'minecraft:verdant_froglight' },
            ingredient: { item: 'minecraft:slime_block' },
            energy: 5000,
            id: `${id_prefix}verdant_froglight`
        },
        {
            result: { id: 'minecraft:pearlescent_froglight' },
            ingredient: { item: 'industrialforegoing:pink_slime_block' },
            energy: 5000,
            id: `${id_prefix}pearlescent_froglight`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:nuggets/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_nugget' },
            energy: 2000,
            id: `${id_prefix}brass_nugget_from_neptunium`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:ingots/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_ingot' },
            energy: 2000 * 8,
            id: `${id_prefix}brass_ingot_from_neptunium`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:storage_blocks/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_block' },
            energy: 2000 * 8 * 8,
            id: `${id_prefix}brass_block_from_neptunium`
        },
        {
            result: { id: 'actuallyadditions:ethetic_green_block' },
            ingredient: { item: 'malum:earthen_spirited_glass' },
            energy: 5000,
            id: `${id_prefix}ethetic_green_block`
        },
        {
            result: { id: 'actuallyadditions:ethetic_white_block' },
            ingredient: { item: 'malum:aerial_spirited_glass' },
            energy: 5000,
            id: `${id_prefix}ethetic_white_block`
        },
        {
            result: { id: 'minecraft:sea_lantern' },
            ingredient: { item: 'ae2:quartz_block' },
            energy: 5000,
            id: `${id_prefix}sea_lantern`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
