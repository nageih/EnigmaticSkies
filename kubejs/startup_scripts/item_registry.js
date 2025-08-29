//priority: 900
StartupEvents.registry('item', (event) => {
    const delivery_bags = [
        { name: `Dumpling Drop` },
        { name: `Great Eggspectations` },
        { name: `Cozy Cauldron` },
        { name: `La Drygmese Poutine`, magic: true },
        { name: `Bottomless Breadsticks` },
        { name: `Bun-Believable Burger` },
        { name: `Sheep-Eatin' Green` }
    ];

    delivery_bags.forEach((item) => {
        let id = getID(item.name);
        event
            .create(`enigmatica:${id}`)
            .texture(`enigmatica:item/delivery_bags/${id}`)
            .displayName(`§6CloudDash: ${item.magic ? '§d' : '§r'}${item.name}`)
            .tag('enigmatica:deliveries');
    });

    const IOU_slips = [
        { name: 'Flying Cow', layer: 'beef' },
        { name: 'Phyg', layer: 'porkchop' },
        { name: 'Sheepuff', layer: 'mutton' },
        { name: 'Aerbunny', layer: 'rabbit' },
        { name: 'Goat', layer: 'goat_fur' },
        { name: 'Moa', layer: 'feather' },
        { name: 'Chicken', layer: 'egg' }
    ];

    IOU_slips.forEach((item) => {
        let id = getID(item.name);
        event
            .create(`enigmatica:${id}_iou`)
            .displayName(`§6IOU:§r 1x ${item.name}`)
            .texture('layer0', 'minecraft:item/paper')
            .texture('layer1', `enigmatica:item/${item.layer}`)
            .color(0, '#f2e1a5')
            // .color(1, '#00FFF0')
            .tooltip(`§5May be exchanged for ${getArticle(item.name)} ${item.name}`);
    });

    const simple_foods = [
        {
            name: 'Poutine',
            layer: 'poutine',
            nutrition: 4,
            saturation: 7.5
        }
    ];

    simple_foods.forEach((item) => {
        let id = getID(item.name);
        let realNutrition = item.nutrition * 2;
        let realSaturation = item.saturation / realNutrition;
        event
            .create(`enigmatica:${id}`)
            .texture(`enigmatica:item/${item.layer}`)
            .displayName(item.name)
            .maxStackSize(64)
            .useAnimation('eat')
            .food((food) => {
                food.nutrition(realNutrition).saturation(realSaturation);
            });
    });

    const ritualDummies = [
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_overworldian_nights'),
            id: 'occultism:ritual_dummy/misc_overworldian_nights',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_overworldian_nights.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_blue_swet'),
            id: 'occultism:ritual_dummy/misc_animate_blue_swet',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_blue_swet.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_golden_swet'),
            id: 'occultism:ritual_dummy/misc_animate_golden_swet',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_golden_swet.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_slime'),
            id: 'occultism:ritual_dummy/misc_animate_slime',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_slime.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_magma_cube'),
            id: 'occultism:ritual_dummy/misc_animate_magma_cube',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_magma_cube.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_zephyr'),
            id: 'occultism:ritual_dummy/misc_animate_zephyr',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_zephyr.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_sentry'),
            id: 'occultism:ritual_dummy/misc_animate_sentry',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_sentry.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.misc_animate_rootmin'),
            id: 'occultism:ritual_dummy/misc_animate_rootmin',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.misc_animate_rootmin.tooltip')
        }
    ];

    ritualDummies.forEach((item) => {
        event
            .create(item.id, 'occultism:ritual_dummy')
            .displayName(item.name)
            .pentacleType(item.type)
            .ritualTooltip(item.tooltip);
    });

    event.create(`enigmatica:ruby`).texture(`enigmatica:item/ruby`);
});
