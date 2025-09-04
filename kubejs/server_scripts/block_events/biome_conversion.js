BlockEvents.rightClicked((event) => {
    const { block, item } = event;

    if (item.id == 'arsdelight:vexing_bark' && block.id == 'malum:tainted_rock') {
        convertToBiome(event, 'minecraft:mushroom_fields', 'occultism:spirit_fire_flame', 10);
    }

    if (item.id == 'arsdelight:flourishing_bark' && block.id == 'minecraft:tuff') {
        convertToBiome(event, 'minecraft:mangrove_swamp', 'supplementaries:green_flame', 10);
    }

    if (item.id == 'arsdelight:cascading_bark' && block.id == 'minecraft:clay') {
        convertToBiome(event, 'minecraft:warm_ocean', 'minecraft:soul_fire_flame', 10);
    }

    if (item.id == 'arsdelight:blazing_bark' && block.id == 'minecraft:blackstone') {
        convertToBiome(event, 'ars_nouveau:archwood_forest', 'minecraft:flame', 10);
    }
});
