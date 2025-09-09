ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            size: 'large',
            color: '#f549ec',
            name: 'wilden_calamity',
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
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 6 },
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
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 16 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 6 }
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
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 16 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 6 }
                    ],
                    max_wave_time: 1600,
                    setup_time: 400
                },
                {
                    entities: [
                        {
                            entity: 'ars_nouveau:wilden_boss',
                            modifiers: [
                                { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.25 },
                                { attribute: 'generic.knockback_resistance', operation: 'add_value', value: 0.5 },
                                { attribute: 'generic.armor', operation: 'add_value', value: 3 },
                                { attribute: 'generic.attack_damage', operation: 'add_value', value: 3 },
                                { attribute: 'apothic_attributes:armor_pierce', operation: 'add_value', value: 3 },
                                { attribute: 'apothic_attributes:life_steal', operation: 'add_value', value: 0.1 },
                                { attribute: 'apothic_attributes:prot_shred', operation: 'add_value', value: 0.5 },
                                { attribute: 'apothic_attributes:cold_damage', operation: 'add_value', value: 2 }
                            ],
                            count: 1,
                            finalize_spawn: false
                        },
                        { entity: 'ars_nouveau:wilden_hunter', count: 3 },
                        { entity: 'ars_nouveau:wilden_stalker', count: 3 },
                        { entity: 'ars_nouveau:wilden_guardian', count: 3 }
                    ],
                    modifiers: [],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_hunter', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_stalker', rolls: 10 },
                        { type: 'gateways:entity_loot', entity: 'ars_nouveau:wilden_guardian', rolls: 10 },
                        { type: 'gateways:stack', stack: { id: 'ars_nouveau:wilden_tribute', count: 3 } }
                    ],
                    max_wave_time: 2000,
                    setup_time: 400
                }
            ],
            rewards: [
                {
                    type: 'gateways:loot_table',
                    loot_table: 'minecraft:chests/bastion_treasure',
                    rolls: 10,
                    desc: 'rewards.gateways.loot_table.bastion_treasure'
                }
            ],
            failures: [
                { type: 'gateways:mob_effect', effect: 'minecraft:blindness', duration: 400 },
                { type: 'gateways:summon', entity: { entity: 'ars_nouveau:wilden_stalker', count: 4 } }
            ]
        },
        {
            size: 'large',
            color: '#f549ec',
            name: 'slime_apocalypse',
            waves: [
                {
                    entities: [
                        { entity: 'aether:blue_swet', count: 6 },
                        { entity: 'minecraft:slime', count: 3, nbt: { Size: 2 }, finalize_spawn: false },
                        { entity: 'minecraft:magma_cube', count: 3, nbt: { Size: 2 }, finalize_spawn: false }
                    ],
                    modifiers: [],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'aether:blue_swet', rolls: 2 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:slime', nbt: { Size: 0 }, rolls: 2 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:magma_cube', nbt: { Size: 1 }, rolls: 2 }
                    ],
                    max_wave_time: 1000,
                    setup_time: 100
                },
                {
                    entities: [
                        { entity: 'aether:blue_swet', count: 9 },
                        { entity: 'minecraft:slime', count: 3, nbt: { Size: 3 }, finalize_spawn: false },
                        { entity: 'minecraft:magma_cube', count: 3, nbt: { Size: 3 }, finalize_spawn: false }
                    ],
                    modifiers: [
                        { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.1 },
                        { attribute: 'generic.movement_speed', operation: 'add_multiplied_total', value: 0.05 }
                    ],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'aether:blue_swet', rolls: 6 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:slime', nbt: { Size: 0 }, rolls: 6 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:magma_cube', nbt: { Size: 1 }, rolls: 6 }
                    ],
                    max_wave_time: 1000,
                    setup_time: 400
                },
                {
                    entities: [
                        { entity: 'aether:blue_swet', count: 12 },
                        { entity: 'minecraft:slime', count: 3, nbt: { Size: 4 }, finalize_spawn: false },
                        { entity: 'minecraft:magma_cube', count: 3, nbt: { Size: 4 }, finalize_spawn: false }
                    ],
                    modifiers: [
                        { attribute: 'generic.max_health', operation: 'add_multiplied_total', value: 0.15 },
                        { attribute: 'generic.movement_speed', operation: 'add_multiplied_total', value: 0.05 },
                        { attribute: 'generic.attack_damage', operation: 'add_value', value: 2.5 },
                        { attribute: 'apothic_attributes:life_steal', operation: 'add_value', value: 0.1 }
                    ],
                    rewards: [
                        { type: 'gateways:entity_loot', entity: 'aether:blue_swet', rolls: 18 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:slime', nbt: { Size: 0 }, rolls: 18 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:magma_cube', nbt: { Size: 1 }, rolls: 18 }
                    ],
                    max_wave_time: 1600,
                    setup_time: 400
                },
                {
                    entities: [
                        { entity: 'aether:blue_swet', count: 15 },
                        { entity: 'minecraft:slime', count: 3, nbt: { Size: 5 }, finalize_spawn: false },
                        { entity: 'minecraft:magma_cube', count: 3, nbt: { Size: 5 }, finalize_spawn: false }
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
                        { type: 'gateways:entity_loot', entity: 'aether:blue_swet', rolls: 18 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:slime', nbt: { Size: 0 }, rolls: 18 },
                        { type: 'gateways:entity_loot', entity: 'minecraft:magma_cube', nbt: { Size: 1 }, rolls: 18 }
                    ],
                    max_wave_time: 2000,
                    setup_time: 400
                }
            ],
            rewards: [
                {
                    type: 'gateways:stack_list',
                    stacks: [
                        { id: 'malum:arcane_spirit', count: 60 },
                        { id: 'malum:aqueous_spirit', count: 20 },
                        { id: 'malum:earthen_spirit', count: 20 },
                        { id: 'malum:infernal_spirit', count: 20 }
                    ]
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`gateways:gateways/${recipe.name}`, recipe);
    });
});
