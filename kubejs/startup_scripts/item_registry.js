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
        },
        {
            name: `Lily's Pink Cotton Candy`,
            layer: 'cotton_candy',
            nutrition: 0.5,
            saturation: 0.5,
            effect: { id: 'minecraft:speed', duration: 60, amplifier: 0 },
            fastToEat: true,
            alwaysEdible: true
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
                if (item.effect) {
                    food.effect(item.effect.id, item.effect.duration * 20, item.effect.amplifier, 1);
                }

                if (item.alwaysEdible) food.alwaysEdible();
                if (item.fastToEat) food.fastToEat();
            });
    });

    const ritual_dummies = [
        // Rifts
        {
            name: Text.translate('item.occultism.ritual_dummy.rift_slime_apocalypse'),
            id: 'occultism:ritual_dummy/rift_slime_apocalypse',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.rift_slime_apocalypse.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.rift_wilden_calamity'),
            id: 'occultism:ritual_dummy/rift_wilden_calamity',
            type: 'misc',
            tooltip: Text.translate('item.occultism.ritual_dummy.rift_wilden_calamity.tooltip')
        },

        // Animated Creatures
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_blue_swet'),
            id: 'occultism:ritual_dummy/animate_blue_swet',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_blue_swet.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_golden_swet'),
            id: 'occultism:ritual_dummy/animate_golden_swet',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_golden_swet.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_slime'),
            id: 'occultism:ritual_dummy/animate_slime',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_slime.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_magma_cube'),
            id: 'occultism:ritual_dummy/animate_magma_cube',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_magma_cube.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_zephyr'),
            id: 'occultism:ritual_dummy/animate_zephyr',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_zephyr.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_sentry'),
            id: 'occultism:ritual_dummy/animate_sentry',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_sentry.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_rootmin'),
            id: 'occultism:ritual_dummy/animate_rootmin',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_rootmin.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_guardian'),
            id: 'occultism:ritual_dummy/animate_guardian',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_guardian.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_honey_slime'),
            id: 'occultism:ritual_dummy/animate_honey_slime',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_honey_slime.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_shulker'),
            id: 'occultism:ritual_dummy/animate_shulker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_shulker.tooltip')
        },

        // Transmuted Creatures
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_wilden_stalker'),
            id: 'occultism:ritual_dummy/transmute_wilden_stalker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_wilden_stalker.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_wilden_hunter'),
            id: 'occultism:ritual_dummy/transmute_wilden_hunter',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_wilden_hunter.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_wilden_guardian'),
            id: 'occultism:ritual_dummy/transmute_wilden_guardian',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_wilden_guardian.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_wilden_boss'),
            id: 'occultism:ritual_dummy/transmute_wilden_boss',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_wilden_boss.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_mooshroom'),
            id: 'occultism:ritual_dummy/transmute_mooshroom',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_mooshroom.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_cockatrice'),
            id: 'occultism:ritual_dummy/transmute_cockatrice',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_cockatrice.tooltip')
        }
    ];

    ritual_dummies.forEach((item) => {
        event
            .create(item.id, 'occultism:ritual_dummy')
            .displayName(item.name)
            .pentacleType(item.type)
            .ritualTooltip(item.tooltip);
    });

    const simple_items = ['ruby', 'boggy_dorodango', 'oceanic_dorodango', 'volcanic_dorodango'];

    simple_items.forEach((item) => {
        event.create(`enigmatica:${item}`).texture(`enigmatica:item/${item}`);
    });
});
