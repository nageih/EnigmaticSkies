ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const sacrifice = {
        llama: { display_name: 'ritual.occultism.sacrifice.llamas', tag: 'c:llamas' },
        chicken: { display_name: 'ritual.occultism.sacrifice.chicken', tag: 'c:chickens' },
        cow: { display_name: 'ritual.occultism.sacrifice.cows', tag: 'c:cows' },
        fish: { display_name: 'ritual.occultism.sacrifice.fish', tag: 'c:fish' },
        warden: { display_name: 'ritual.occultism.sacrifice.warden', tag: 'c:wardens' },
        sheep: { display_name: 'ritual.occultism.sacrifice.sheep', tag: 'c:sheep' },
        villager: { display_name: 'ritual.occultism.sacrifice.humans', tag: 'occultism:humans' }
    };

    const recipes = [
        {
            ritual_type: 'occultism:craft',
            result: Item.of('gateways:gate_pearl[gateways:gateway="gateways:slime_apocalypse"]').toJson(),
            activation_item: { item: 'minecraft:conduit' },
            ingredients: [
                { item: 'industrialforegoing:pink_slime_block' },
                { item: 'malum:earthen_spirit' },
                { item: 'malum:infernal_spirit' },
                { item: 'malum:aqueous_spirit' }
            ],
            ritual_dummy: { id: 'occultism:ritual_dummy/rift_slime_apocalypse', count: 1 },
            duration: 5,
            id: `${id_prefix}rift_slime_apocalypse`
        },
        {
            ritual_type: 'occultism:craft',
            result: Item.of('gateways:gate_pearl[gateways:gateway="gateways:wilden_calamity"]').toJson(),
            activation_item: { item: 'minecraft:conduit' },
            ingredients: [
                { item: 'ars_elemental:mark_of_mastery' },
                { item: 'malum:earthen_spirit' },
                { item: 'malum:aerial_spirit' },
                { item: 'malum:aqueous_spirit' }
            ],
            ritual_dummy: { id: 'occultism:ritual_dummy/rift_wilden_calamity', count: 1 },
            duration: 5,
            id: `${id_prefix}rift_wilden_calamity`
        }
    ];

    const animated_blocks = [
        {
            entity: 'aether:blue_swet',
            egg: 'aether:blue_swet_spawn_egg',
            block: 'arsdelight:frostaya_jelly',
            spirit: 'malum:sacred_spirit'
        },
        {
            entity: 'minecraft:slime',
            egg: 'minecraft:slime_spawn_egg',
            block: 'arsdelight:mendosteen_jelly',
            spirit: 'malum:sacred_spirit'
        },
        {
            entity: 'minecraft:magma_cube',
            egg: 'minecraft:magma_cube_spawn_egg',
            block: 'arsdelight:bombegrante_jelly',
            spirit: 'malum:sacred_spirit'
        },
        {
            entity: 'aether:zephyr',
            egg: 'aether:zephyr_spawn_egg',
            block: 'aether:cold_aercloud',
            spirit: 'malum:arcane_spirit'
        },
        {
            entity: 'aether:sentry',
            egg: 'aether:sentry_spawn_egg',
            block: 'aether:holystone_bricks',
            spirit: 'malum:arcane_spirit'
        },
        {
            entity: 'the_bumblezone:rootmin',
            egg: 'the_bumblezone:rootmin_spawn_egg',
            block: 'minecraft:packed_mud',
            spirit: 'malum:arcane_spirit'
        },
        {
            entity: 'aether:golden_swet',
            egg: 'aether:golden_swet_spawn_egg',
            block: 'aether:golden_gummy_swet',
            spirit: 'malum:arcane_spirit'
        },
        {
            entity: 'minecraft:guardian',
            egg: 'minecraft:guardian_spawn_egg',
            block: 'enderio:guardian_diode',
            spirit: 'malum:arcane_spirit'
        },
        {
            entity: 'the_bumblezone:honey_slime',
            egg: 'the_bumblezone:honey_slime_spawn_egg',
            block: 'minecraft:honey_block',
            spirit: 'malum:sacred_spirit'
        },
        {
            entity: 'minecraft:shulker',
            egg: 'minecraft:shulker_spawn_egg',
            block: 'minecraft:purpur_block',
            spirit: 'malum:arcane_spirit'
        }
    ];

    animated_blocks.forEach((animated) => {
        let mob_id = animated.entity.split(':')[1];
        recipes.push({
            ritual_type: 'occultism:summon',
            entity_to_summon: animated.entity,
            result: {
                id: animated.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.animate_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.animate_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: animated.block },
            ingredients: [
                { tag: 'c:essences/conjuration' },
                { item: animated.spirit },
                { tag: 'c:essences/manipulation' },
                { item: animated.spirit }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_${mob_id}`, count: 1 },
            duration: 5,
            id: `${id_prefix}animate_${mob_id}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.pentacle_id = 'occultism:contact_eldritch_spirit';
        event.custom(recipe).id(recipe.id);
    });
});
