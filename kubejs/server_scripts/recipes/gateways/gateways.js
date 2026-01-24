ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            type: 'gateways:normal',
            name: 'catching_fire',
            size: 'large',
            color: '#fcb03e',
            rewards: [
                {
                    type: 'gateways:stack_list',
                    stacks: [{ id: 'enigmatica:borrowed_flame', count: 25 }]
                }
            ],
            waves: [
                {
                    max_wave_time: 800,
                    setup_time: 20,
                    entities: [
                        {
                            type: 'gateways:standard',
                            entity: 'minecraft:blaze',
                            count: 3,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        },
                        {
                            type: 'gateways:standard',
                            entity: 'aether:fire_minion',
                            count: 1,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        }
                    ],
                    rewards: [{ type: 'gateways:experience', experience: 10, orb_size: 2 }]
                },
                {
                    max_wave_time: 800,
                    setup_time: 20,
                    entities: [
                        {
                            type: 'gateways:standard',
                            entity: 'minecraft:blaze',
                            count: 4,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        },
                        {
                            type: 'gateways:standard',
                            entity: 'aether:fire_minion',
                            count: 2,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        }
                    ],
                    rewards: [{ type: 'gateways:experience', experience: 10, orb_size: 2 }],
                    modifiers: [
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.max_health',
                            operation: 'add_multiplied_total',
                            value: 0.15
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.armor',
                            operation: 'add_value',
                            value: 2.0
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'add_multiplied_total',
                            value: 0.15
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'apothic_attributes:projectile_damage',
                            operation: 'add_multiplied_total',
                            value: 0.15
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'add_value',
                            value: 0.05
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'add_multiplied_total',
                            value: 0.05
                        }
                    ]
                },
                {
                    max_wave_time: 800,
                    setup_time: 20,
                    entities: [
                        {
                            type: 'gateways:standard',
                            entity: 'minecraft:blaze',
                            count: 5,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        },
                        {
                            type: 'gateways:standard',
                            entity: 'aether:fire_minion',
                            count: 2,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        }
                    ],
                    rewards: [{ type: 'gateways:experience', experience: 50, orb_size: 5 }],
                    modifiers: [
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.max_health',
                            operation: 'add_multiplied_total',
                            value: 0.2
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.armor',
                            operation: 'add_value',
                            value: 3.0
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'add_multiplied_total',
                            value: 0.2
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'apothic_attributes:projectile_damage',
                            operation: 'add_multiplied_total',
                            value: 0.2
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'add_value',
                            value: 0.15
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'add_multiplied_total',
                            value: 0.1
                        }
                    ]
                },
                {
                    max_wave_time: 1000,
                    setup_time: 20,
                    entities: [
                        {
                            type: 'gateways:standard',
                            entity: 'minecraft:blaze',
                            count: 6,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        },
                        {
                            type: 'gateways:standard',
                            entity: 'aether:fire_minion',
                            count: 3,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        }
                    ],
                    rewards: [{ type: 'gateways:experience', experience: 100, orb_size: 25 }],
                    modifiers: [
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.max_health',
                            operation: 'add_multiplied_total',
                            value: 0.25
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.armor',
                            operation: 'add_value',
                            value: 5.0
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'add_multiplied_total',
                            value: 0.3
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'apothic_attributes:projectile_damage',
                            operation: 'add_multiplied_total',
                            value: 0.3
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'add_value',
                            value: 0.15
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'add_multiplied_total',
                            value: 0.15
                        }
                    ]
                },
                {
                    max_wave_time: 1200,
                    setup_time: 20,
                    entities: [
                        {
                            type: 'gateways:standard',
                            entity: 'minecraft:blaze',
                            count: 7,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        },
                        {
                            type: 'gateways:standard',
                            entity: 'aether:fire_minion',
                            count: 3,
                            nbt: { DeathLootTable: 'minecraft:empty' },
                            finalize_spawn: false
                        }
                    ],
                    rewards: [{ type: 'gateways:experience', experience: 500, orb_size: 25 }],
                    modifiers: [
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.max_health',
                            operation: 'add_multiplied_total',
                            value: 0.35
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.armor',
                            operation: 'add_value',
                            value: 5.0
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'add_multiplied_total',
                            value: 0.5
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'apothic_attributes:projectile_damage',
                            operation: 'add_multiplied_total',
                            value: 0.5
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'add_value',
                            value: 0.2
                        },
                        {
                            type: 'gateways:attribute',
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'add_multiplied_total',
                            value: 0.15
                        }
                    ]
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`gateways:gateways/${recipe.name}`, recipe);
    });
});
