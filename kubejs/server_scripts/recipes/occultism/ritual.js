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
            result: Item.of('gateways:gate_pearl[gateways:gateway="gateways:overworldian_nights"]').toJson(),
            activation_item: { item: 'minecraft:conduit' },
            ingredients: [
                { item: 'minecraft:clay_ball' },
                { item: 'minecraft:clay_ball' },
                { item: 'minecraft:clay_ball' },
                { item: 'minecraft:clay_ball' }
            ],
            ritual_dummy: { id: 'occultism:ritual_dummy/misc_overworldian_nights', count: 1 },
            duration: 5,
            id: `${id_prefix}misc_overworldian_nights`
        }
    ];

    const animated_blocks = [
        {
            entity: 'aether:blue_swet',
            egg: 'aether:blue_swet_spawn_egg',
            block: 'arsdelight:frostaya_jelly'
        },
        {
            entity: 'aether:golden_swet',
            egg: 'aether:golden_swet_spawn_egg',
            block: 'aether:golden_gummy_swet'
        },
        {
            entity: 'minecraft:slime',
            egg: 'minecraft:slime_spawn_egg',
            block: 'arsdelight:mendosteen_jelly'
        },
        {
            entity: 'minecraft:magma_cube',
            egg: 'minecraft:magma_cube_spawn_egg',
            block: 'arsdelight:bombegrante_jelly'
        },
        {
            entity: 'aether:zephyr',
            egg: 'aether:zephyr_spawn_egg',
            block: 'aether:cold_aercloud'
        },
        {
            entity: 'aether:sentry',
            egg: 'aether:sentry_spawn_egg',
            block: 'aether:holystone_bricks'
        },
        {
            entity: 'the_bumblezone:rootmin',
            egg: 'the_bumblezone:rootmin_spawn_egg',
            block: 'minecraft:packed_mud'
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
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.misc_animate_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.misc_animate_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: animated.block },
            ingredients: [
                { tag: 'c:essences/conjuration' },
                { item: 'malum:sacred_spirit' },
                { tag: 'c:essences/manipulation' },
                { item: 'malum:sacred_spirit' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/misc_animate_${mob_id}`, count: 1 },
            duration: 5,
            id: `${id_prefix}misc_animate_${mob_id}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.pentacle_id = 'occultism:contact_eldritch_spirit';
        event.custom(recipe).id(recipe.id);
    });
});
