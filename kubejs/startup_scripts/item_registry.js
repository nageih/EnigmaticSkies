//priority: 900
StartupEvents.registry('item', (event) => {
    const delivery_bags = [
        { name: `Dumpling Drop`, color: '#a832a8', magic: true },
        { name: `Great Eggspectations`, color: '#e35e0b' },
        { name: `Flappin' Jack's Trove`, color: '#0be3d1' },
        { name: `Cozy Cauldron`, color: '#22e610', magic: true },
        { name: `La Drygmese Poutine`, color: '#ed094a', magic: true },
        { name: `Bun-Believable Burger`, color: '#02610d' },
        { name: `Sheep-Eatin' Green`, color: '#3ff254' },
        { name: `Flyin' Fox`, color: '#f2920c' },
        { name: `Sun's Out, Buns Out`, color: '#f7f300' },
        { name: `The Bun Also Rises`, color: '#139df2', magic: true },
        { name: `Glazed and Confused`, color: '#070ff7', magic: true },
        { name: `Braising Cain`, color: '#f578f1' },
        { name: `Jax's Snax`, color: '#b285e6', magic: true }
    ];

    delivery_bags.forEach((item) => {
        let id = getID(item.name);
        event
            .create(`enigmatica:${id}`)
            .texture('layer0', `enigmatica:item/delivery_bags/delivery_bag`)
            .texture('layer1', `enigmatica:item/delivery_bags/label`)
            .texture('layer2', `enigmatica:item/delivery_bags/sticker`)
            .color(1, item.magic ? '#ebcafc' : '#ddc8b1')
            .color(2, item.color)
            .displayName(`§6CloudDash: ${item.magic ? '§d' : '§r'}${item.name}`)
            .tag('enigmatica:deliveries');
    });

    const iou_slips = [
        { name: 'Flying Cow', layer: 'beef' },
        { name: 'Phyg', layer: 'porkchop' },
        { name: 'Sheepuff', layer: 'mutton' },
        { name: 'Aerbunny', layer: 'rabbit' },
        { name: 'Goat', layer: 'goat_fur' },
        { name: 'Moa', layer: 'feather' },
        { name: 'Chicken', layer: 'egg' }
    ];

    iou_slips.forEach((item) => {
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

    const bottles = [
        {
            name: 'Source Ink',
            colors: ['', '#7d20ab', ''],
            layers: ['alchemy_bottle', 'alchemy_bottle_normal_contents_swirling', 'alchemy_bottle_label_black']
        }
    ];

    bottles.forEach((item) => {
        let id = getID(item.name);
        let bottle = event.create(`enigmatica:${id}`).displayName(item.name);

        item.layers.forEach((layer, index) => {
            bottle.texture(`layer${index}`, `enigmatica:item/${layer}`);
        });

        item.colors.forEach((color, index) => {
            if (color != '') bottle.color(index, color);
        });
    });

    const simple_foods = [
        {
            name: 'Poutine',
            layer: 'poutine',
            nutrition: 4,
            saturation: 7.5
        },
        {
            name: `Lily's Lilac Cotton Candy`,
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
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_flourishing_weald_walker'),
            id: 'occultism:ritual_dummy/animate_flourishing_weald_walker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_flourishing_weald_walker.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_blazing_weald_walker'),
            id: 'occultism:ritual_dummy/animate_blazing_weald_walker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_blazing_weald_walker.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_cascading_weald_walker'),
            id: 'occultism:ritual_dummy/animate_cascading_weald_walker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_cascading_weald_walker.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_vexing_weald_walker'),
            id: 'occultism:ritual_dummy/animate_vexing_weald_walker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_vexing_weald_walker.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_flashing_weald_walker'),
            id: 'occultism:ritual_dummy/animate_flashing_weald_walker',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_flashing_weald_walker.tooltip')
        },

        {
            name: Text.translate('item.occultism.ritual_dummy.animate_skeleton'),
            id: 'occultism:ritual_dummy/animate_skeleton',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_skeleton.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_stray'),
            id: 'occultism:ritual_dummy/animate_stray',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_stray.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_bogged'),
            id: 'occultism:ritual_dummy/animate_bogged',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_bogged.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.animate_phantom'),
            id: 'occultism:ritual_dummy/animate_phantom',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.animate_phantom.tooltip')
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
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_whirlisprig'),
            id: 'occultism:ritual_dummy/transmute_whirlisprig',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_whirlisprig.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_drygmy'),
            id: 'occultism:ritual_dummy/transmute_drygmy',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_drygmy.tooltip')
        },
        {
            name: Text.translate('item.occultism.ritual_dummy.transmute_ravager'),
            id: 'occultism:ritual_dummy/transmute_ravager',
            type: 'summon',
            tooltip: Text.translate('item.occultism.ritual_dummy.transmute_ravager.tooltip')
        }
    ];

    ritual_dummies.forEach((item) => {
        event
            .create(item.id, 'occultism:ritual_dummy')
            .displayName(item.name)
            .pentacleType(item.type)
            .ritualTooltip(item.tooltip);
    });

    const simple_items = [
        'ruby',
        'source_berry_roll_dough',

        'antikythera_mechanism',
        'pulsating_mechanism',
        'tempestuous_mechanism',

        'fire_clay_ball',
        'cookie_dough',
        'sweet_berry_cookie_dough',
        'honey_cookie_dough',
        'source_berry_cookie_dough',
        'pelagite',
        'kerogen',

        'magic_lamp'
    ];

    simple_items.forEach((item) => {
        event.create(`enigmatica:${item}`).texture(`enigmatica:item/${item}`);
    });

    const dorodangos = ['melon_ball', 'boggy', 'briny', 'silty', 'volcanic', 'cloudy', 'reverberating'];

    dorodangos.forEach((type) => {
        let item = `${type}_dorodango`;

        if (type == 'melon_ball') {
            item = type;
        }

        event
            .create(`enigmatica:${item}`)
            .texture(`enigmatica:item/${item}`)
            .tag('c:dorodangos')
            .tag(`c:dorodangos/${type}`);
    });

    const pebbles = ['andesite', 'basalt', 'calcite', 'deepslate', 'diorite', 'granite', 'stone', 'tuff'];

    pebbles.forEach((item) => {
        event
            .create(`enigmatica:${item}_pebble`)
            .texture(`enigmatica:item/${item}_pebble`)
            .tag('c:pebbles')
            .tag(`c:pebbles/${item}`);
    });
});
