ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            size: 'medium',
            color: '#f549ec',
            name: 'test',
            waves: [
                {
                    entities: [
                        { entity: 'ars_nouveau:wilden_hunter', count: 5 },
                        { entity: 'ars_nouveau:wilden_stalker', count: 3 },
                        { entity: 'ars_nouveau:wilden_guardian', count: 1 }
                    ],
                    modifiers: [],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 5 }
                    ],
                    max_wave_time: 1000,
                    setup_time: 100
                },
                {
                    entities: [
                        { entity: 'ars_nouveau:wilden_hunter', count: 8 },
                        { entity: 'ars_nouveau:wilden_stalker', count: 5 },
                        { entity: 'ars_nouveau:wilden_guardian', count: 3 }
                    ],
                    modifiers: [
                        { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.1 },
                        { attribute: 'generic.movement_speed', operation: 'add_multiplied_total', value: 0.05 }
                    ],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 15 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 15 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 10 }
                    ],
                    max_wave_time: 1000,
                    setup_time: 400
                },
                {
                    entities: [
                        { entity: 'ars_nouveau:wilden_hunter', count: 8 },
                        { entity: 'ars_nouveau:wilden_stalker', count: 5 },
                        { entity: 'ars_nouveau:wilden_guardian', count: 3 }
                    ],
                    modifiers: [
                        { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.15 },
                        { attribute: 'generic.movement_speed', operation: 'add_multiplied_total', value: 0.05 },
                        { attribute: 'generic.attack_damage', operation: 'add_value', value: 2.5 },
                        { attribute: 'apothic_attributes:arrow_damage', operation: 'add_value', value: 0.1 },
                        { attribute: 'apothic_attributes:life_steal', operation: 'add_value', value: 0.1 }
                    ],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 15 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 15 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 15 }
                    ],
                    max_wave_time: 1600,
                    setup_time: 400
                },
                {
                    entities: [
                        {
                            entity: 'ars_nouveau:wilden_hunter',
                            desc: 'name.gateways.undead_legionnaire',
                            nbt: {
                                CustomNameVisible: 1,
                                CustomName: '{"translate":"name.gateways.undead_legionnaire","color":"red"}'
                            },
                            modifiers: [{ type: 'gateways:gear_set', gear_set: 'gateways:iron_with_diamond' }],
                            count: 5,
                            finalize_spawn: false
                        },
                        { entity: 'ars_nouveau:wilden_stalker', count: 3 },
                        { entity: 'ars_nouveau:wilden_guardian', count: 3 }
                    ],
                    modifiers: [
                        { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.25 },
                        { attribute: 'generic.knockback_resistance', operation: 'add_value', value: 0.5 },
                        { attribute: 'generic.armor', operation: 'add_value', value: 3 },
                        { attribute: 'generic.attack_damage', operation: 'add_value', value: 3 },
                        { attribute: 'apothic_attributes:armor_pierce', operation: 'add_value', value: 3 },
                        { attribute: 'apothic_attributes:life_steal', operation: 'add_value', value: 0.1 }
                    ],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 20 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 20 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 20 }
                    ],
                    max_wave_time: 2000,
                    setup_time: 400
                }
            ],
            rewards: [
                {
                    type: 'gateways:loot_table',
                    loot_table: 'minecraft:chests/simple_dungeon',
                    rolls: 10,
                    desc: 'rewards.gateways.loot_table.simple_dungeon'
                }
            ],
            failures: [
                { type: 'gateways:mob_effect', effect: 'minecraft:blindness', duration: 400 },
                { type: 'gateways:summon', entity: { entity: 'ars_nouveau:wilden_stalker', count: 2 } }
            ],
            rules: { allow_discarding: true }
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`gateways:gateways/${recipe.name}`, recipe);
    });
});
