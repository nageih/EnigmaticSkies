BlockEvents.rightClicked((event) => {
    const { block, item } = event;

    if (item.id == 'ars_nouveau:abjuration_essence' && block.id == 'malum:tainted_rock') {
        convertToBiome(event, 'minecraft:mushroom_fields', 'occultism:spirit_fire_flame', 10);
    }

    if (item.id == 'ars_nouveau:earth_essence' && block.id == 'minecraft:tuff') {
        convertToBiome(event, 'minecraft:mangrove_swamp', 'supplementaries:green_flame', 10);
    }

    if (item.id == 'ars_nouveau:water_essence' && block.id == 'minecraft:clay') {
        convertToBiome(event, 'minecraft:warm_ocean', 'minecraft:soul_fire_flame', 10);
    }

    if (item.id == 'ars_nouveau:fire_essence' && block.id == 'minecraft:blackstone') {
        convertToBiome(event, 'ars_nouveau:archwood_forest', 'minecraft:flame', 10);
    }

    if (item.id == 'ars_nouveau:air_essence' && block.id == 'minecraft:sculk') {
        convertToBiome(event, 'minecraft:deep_dark', 'minecraft:sculk_soul', 10);
    }
});
