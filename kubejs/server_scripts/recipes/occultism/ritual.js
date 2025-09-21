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
            duration: 30,
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
            duration: 30,
            id: `${id_prefix}rift_wilden_calamity`
        },
        {
            ritual_type: 'occultism:summon',
            entity_to_summon: 'ars_nouveau:wilden_boss',
            entity_to_sacrifice: sacrifice.villager,
            result: {
                id: 'ars_nouveau:wilden_tribute',
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_wilden_boss"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_wilden_boss.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: 'arsdelight:wilden_sauce' },
            ingredients: [
                { item: 'malum:imitation_heart' },
                { item: 'arsdelight:wilden_meat' },
                { item: 'arsdelight:wilden_meat' },
                { item: 'arsdelight:wilden_meat' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_wilden_boss`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_wilden_boss`
        }
    ];

    /*
        Ingredient Display in EMI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    const animated_blocks = [
        {
            entity: 'aether:blue_swet',
            egg: 'aether:blue_swet_spawn_egg',
            block: 'arsdelight:frostaya_jelly',
            spirit: 'naturesaura:birth_spirit'
        },
        {
            entity: 'minecraft:slime',
            egg: 'minecraft:slime_spawn_egg',
            block: 'arsdelight:mendosteen_jelly',
            spirit: 'naturesaura:birth_spirit'
        },
        {
            entity: 'minecraft:magma_cube',
            egg: 'minecraft:magma_cube_spawn_egg',
            block: 'arsdelight:bombegrante_jelly',
            spirit: 'naturesaura:birth_spirit'
        },

        {
            entity: 'the_bumblezone:honey_slime',
            egg: 'the_bumblezone:honey_slime_spawn_egg',
            block: 'minecraft:honey_block',
            spirit: 'naturesaura:birth_spirit'
        },
        {
            entity: 'aether:zephyr',
            egg: 'aether:zephyr_spawn_egg',
            block: 'aether:cold_aercloud',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:sentry',
            egg: 'aether:sentry_spawn_egg',
            block: 'aether:holystone_bricks',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'the_bumblezone:rootmin',
            egg: 'the_bumblezone:rootmin_spawn_egg',
            block: 'minecraft:packed_mud',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:golden_swet',
            egg: 'aether:golden_swet_spawn_egg',
            block: 'aether:golden_gummy_swet',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'minecraft:guardian',
            egg: 'minecraft:guardian_spawn_egg',
            block: 'enderio:guardian_diode',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'minecraft:shulker',
            egg: 'minecraft:shulker_spawn_egg',
            block: 'minecraft:purpur_block',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:flourishing_weald_walker',
            egg: 'ars_nouveau:green_archwood_sapling',
            block: 'ars_nouveau:green_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:blazing_weald_walker',
            egg: 'ars_nouveau:red_archwood_sapling',
            block: 'ars_nouveau:red_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:cascading_weald_walker',
            egg: 'ars_nouveau:blue_archwood_sapling',
            block: 'ars_nouveau:blue_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:vexing_weald_walker',
            egg: 'ars_nouveau:purple_archwood_sapling',
            block: 'ars_nouveau:purple_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_elemental:flashing_weald_walker',
            egg: 'ars_elemental:yellow_archwood_sapling',
            block: 'ars_elemental:yellow_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
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
                { tag: 'c:essences/hex_ash' },
                { item: 'industrialforegoing:pink_slime_block' },
                { item: animated.spirit },
                { item: 'industrialforegoing:pink_slime_block' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}animate_${mob_id}`
        });
    });

    const transmuted_creatures = [
        {
            entity: 'minecraft:mooshroom',
            egg: 'minecraft:mooshroom_spawn_egg'
        },
        {
            entity: 'aether:cockatrice',
            egg: 'aether:cockatrice_spawn_egg'
        },
        {
            entity: 'ars_nouveau:wilden_hunter',
            egg: 'ars_nouveau:wilden_hunter_se',
            entity_to_sacrifice: sacrifice.villager
        },
        {
            entity: 'ars_nouveau:wilden_guardian',
            egg: 'ars_nouveau:wilden_guardian_se',
            entity_to_sacrifice: sacrifice.villager
        },
        {
            entity: 'ars_nouveau:wilden_stalker',
            egg: 'ars_nouveau:wilden_stalker_se',
            entity_to_sacrifice: sacrifice.villager
        }
    ];

    transmuted_creatures.forEach((transmuted) => {
        let mob_id = transmuted.entity.split(':')[1];
        let recipe = {
            ritual_type: 'occultism:summon',
            entity_to_summon: transmuted.entity,
            result: {
                id: transmuted.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: Ingredient.of(
                `geneticsresequenced:organic_matter[geneticsresequenced:entity_type="${transmuted.entity}"]`
            ).toJson(),
            ingredients: [
                { item: 'malum:imitation_heart' },
                { item: 'malum:imitation_flesh' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'malum:imitation_flesh' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_${mob_id}`
        };
        if (transmuted.entity_to_sacrifice) recipe.entity_to_sacrifice = transmuted.entity_to_sacrifice;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.pentacle_id = 'occultism:contact_eldritch_spirit';
        event.custom(recipe).id(recipe.id);
    });
});
