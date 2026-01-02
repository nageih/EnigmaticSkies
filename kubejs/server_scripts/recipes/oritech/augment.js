ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/augment_data/';

    const recipes = [
        // Tier 1
        {
            // Steel Fist
            effect: { entityAttributeId: 'minecraft:generic.attack_damage', attributeOperationType: 0, amount: 4.0 },
            applyCost: [
                { ingredient: { item: 'modern_industrialization:steel_plate' }, count: 8 },
                { ingredient: { item: 'malum:grim_talc' }, count: 16 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 150000000,
            time: 80,
            toggleable: false,
            uiX: 5,
            uiY: 10,
            id: 'oritech:augment/attackdamage'
        },
        {
            // Synthetic Muscles
            effect: { entityAttributeId: 'minecraft:generic.movement_speed', attributeOperationType: 1, amount: 0.25 },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 30000000,
            time: 30,
            toggleable: false,
            uiX: 5,
            uiY: 30,
            id: 'oritech:augment/speedboost'
        },
        {
            // Steel-Infused Frame
            effect: { entityAttributeId: 'minecraft:generic.max_health', attributeOperationType: 0, amount: 6.0 },
            applyCost: [
                { ingredient: { item: 'modern_industrialization:steel_rod' }, count: 32 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 10000000,
            time: 20,
            toggleable: false,
            uiX: 5,
            uiY: 70,
            id: 'oritech:augment/hpboost'
        },
        {
            // Water Breathing
            effect: { potionEffectId: 'minecraft:water_breathing', effectStrength: 0 },
            applyCost: [
                { ingredient: { item: 'malum:caustic_catalyst' }, count: 8 },
                { ingredient: { item: 'minecraft:heart_of_the_sea' }, count: 16 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 50000000,
            time: 40,
            toggleable: false,
            uiX: 5,
            uiY: 90,
            id: 'oritech:augment/waterbreath'
        },
        {
            // Mining Speed
            effect: { entityAttributeId: 'minecraft:player.block_break_speed', attributeOperationType: 2, amount: 1.0 },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'enderio:zombie_electrode' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/attackdamage', 'oritech:augment/speedboost'],
            rfCost: 50000000,
            time: 60,
            toggleable: false,
            uiX: 30,
            uiY: 10,
            id: 'oritech:augment/miningspeed'
        },
        {
            // Hardened Plating
            effect: { entityAttributeId: 'minecraft:generic.armor', attributeOperationType: 0, amount: 4.0 },
            applyCost: [
                { ingredient: { item: 'modern_industrialization:andesite_alloy_plate' }, count: 32 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 80000000,
            time: 40,
            toggleable: false,
            uiX: 5,
            uiY: 50,
            id: 'oritech:augment/armor'
        },
        {
            // Miniaturization
            effect: { entityAttributeId: 'minecraft:generic.scale', attributeOperationType: 1, amount: -0.5 },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/hpboost'],

            rfCost: 20000000,
            time: 20,
            toggleable: true,
            uiX: 30,
            uiY: 90,
            id: 'oritech:augment/dwarf'
        },
        {
            // Gigantism
            effect: { entityAttributeId: 'minecraft:generic.scale', attributeOperationType: 1, amount: 1.0 },
            applyCost: [
                { ingredient: { item: 'malum:suspicious_device' }, count: 8 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/dwarf', 'oritech:augment/armor'],
            rfCost: 40000000,
            time: 80,
            toggleable: true,
            uiX: 55,
            uiY: 90,
            id: 'oritech:augment/giant'
        },
        {
            // Step Assist
            effect: { entityAttributeId: 'minecraft:generic.step_height', attributeOperationType: 0, amount: 0.6 },
            applyCost: [{ ingredient: { item: 'malum:imitation_flesh' }, count: 16 }],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/speedboost', 'oritech:augment/armor'],
            rfCost: 75000000,
            time: 40,
            toggleable: true,
            uiX: 30,
            uiY: 50,
            id: 'oritech:augment/stepassist'
        },
        {
            // Flash Steps
            effect: { entityAttributeId: 'minecraft:generic.movement_speed', attributeOperationType: 0, amount: 0.25 },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/stepassist'],
            rfCost: 150000000,
            time: 90,
            toggleable: true,
            uiX: 55,
            uiY: 50,
            id: 'oritech:augment/superspeedboost'
        },
        {
            // Carbon-Reinforced Lungs
            effect: { entityAttributeId: 'minecraft:generic.max_health', attributeOperationType: 0, amount: 4.0 },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { tag: 'c:carbon_fibre' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/armor'],
            rfCost: 50000000,
            time: 40,
            toggleable: false,
            uiX: 55,
            uiY: 70,
            id: 'oritech:augment/hpboostmore'
        },
        {
            // Luck
            effect: { entityAttributeId: 'minecraft:generic.luck', attributeOperationType: 0, amount: 5.0 },
            applyCost: [
                { ingredient: { item: 'enderio:prescient_crystal' }, count: 32 },
                { ingredient: { item: 'malum:intricate_assembly' }, count: 8 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:ender_resonator' }, count: 32 },
                { ingredient: { item: 'malum:paracausal_flame' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: [],
            rfCost: 200000000,
            time: 90,
            toggleable: false,
            uiX: 30,
            uiY: 30,
            id: 'oritech:augment/luck'
        },
        {
            // Auto-Feeder
            effect: { customAugmentId: 'oritech:augment/autofeeder' },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { item: 'malum:concentrated_gluttony' }, count: 32 },
                { ingredient: { item: 'malum:impurity_stabilizer' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/hpboostmore'],
            rfCost: 30000000,
            time: 30,
            toggleable: true,
            uiX: 80,
            uiY: 90,
            id: 'oritech:augment/autofeeder'
        },
        {
            // Hyper Mining Speed
            effect: { entityAttributeId: 'minecraft:player.block_break_speed', attributeOperationType: 2, amount: 1.0 },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { item: 'enderio:guardian_diode' }, count: 32 },
                { ingredient: { item: 'malum:accelerating_inlay' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/miningspeed', 'oritech:augment/superspeedboost'],
            rfCost: 250000000,
            time: 120,
            toggleable: true,
            uiX: 55,
            uiY: 10,
            id: 'oritech:augment/superminingspeed'
        },
        {
            // Reactive Plating
            effect: { entityAttributeId: 'minecraft:generic.armor', attributeOperationType: 0, amount: 6.0 },
            applyCost: [
                { ingredient: { item: 'malum:imitation_flesh' }, count: 32 },
                { ingredient: { item: 'malum:shielding_apparatus' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/autofeeder'],
            rfCost: 180000000,
            time: 80,
            toggleable: false,
            uiX: 80,
            uiY: 50,
            id: 'oritech:augment/betterarmor'
        },
        {
            // Night Vision
            effect: { potionEffectId: 'minecraft:night_vision', effectStrength: 0 },
            applyCost: [
                { ingredient: { item: 'malum:prismatic_focus_lens' }, count: 2 },
                { ingredient: { item: 'malum:grim_talc' }, count: 16 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: [],
            rfCost: 50000000,
            time: 120,
            toggleable: true,
            uiX: 80,
            uiY: 30,
            id: 'oritech:augment/nightvision'
        },
        {
            // Magnet
            effect: { customAugmentId: 'oritech:augment/magnet' },
            applyCost: [
                { ingredient: { item: 'aether:enchanted_gravitite' }, count: 8 },
                { ingredient: { item: 'malum:grim_talc' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: ['oritech:augment/superminingspeed'],
            rfCost: 300000000,
            time: 120,
            toggleable: true,
            uiX: 80,
            uiY: 10,
            id: 'oritech:augment/magnet'
        },
        {
            // Cloak
            effect: { potionEffectId: 'minecraft:invisibility', effectStrength: 0 },
            applyCost: [
                { ingredient: { item: 'malum:resonance_tuner' }, count: 8 },
                { ingredient: { item: 'malum:iridescent_ether' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:ender_resonator' }, count: 32 },
                { ingredient: { item: 'malum:paracausal_flame' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: ['oritech:augment/nightvision', 'oritech:augment/magnet'],
            rfCost: 100000000,
            time: 160,
            toggleable: true,
            uiX: 105,
            uiY: 10,
            id: 'oritech:augment/cloak'
        },
        {
            // Ore Vision
            effect: { customAugmentId: 'oritech:augment/orefinder' },
            applyCost: [
                { ingredient: { item: 'malum:convoluted_lens' }, count: 2 },
                { ingredient: { item: 'malum:grim_talc' }, count: 16 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:ender_resonator' }, count: 32 },
                { ingredient: { item: 'malum:paracausal_flame' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: ['oritech:augment/nightvision'],
            rfCost: 200000000,
            time: 3200,
            toggleable: true,
            uiX: 105,
            uiY: 30,
            id: 'oritech:augment/orefinder'
        },
        {
            // Block Reach
            effect: {
                entityAttributeId: 'minecraft:player.block_interaction_range',
                attributeOperationType: 1,
                amount: 0.3
            },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'malum:rune_of_flowing_grasp' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:skeletal_contractor' }, count: 32 },
                { ingredient: { item: 'enderio:pulsating_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:simple_augment_station',
            requirements: [],
            rfCost: 100000000,
            time: 45,
            toggleable: false,
            uiX: 105,
            uiY: 90,
            id: 'oritech:augment/blockreach'
        },
        {
            // Weapon Reach
            effect: {
                entityAttributeId: 'minecraft:player.entity_interaction_range',
                attributeOperationType: 1,
                amount: 0.3
            },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'malum:rune_of_radial_empowerment' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/blockreach'],
            rfCost: 150000000,
            time: 80,
            toggleable: false,
            uiX: 130,
            uiY: 70,
            id: 'oritech:augment/weaponreach'
        },
        {
            // Far Reach
            effect: {
                entityAttributeId: 'minecraft:player.block_interaction_range',
                attributeOperationType: 2,
                amount: 1.0
            },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'enderio:guardian_diode' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:z_logic_controller' }, count: 32 },
                { ingredient: { item: 'enderio:vibrant_crystal' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/blockreach'],
            rfCost: 200000000,
            time: 40,
            toggleable: true,
            uiX: 130,
            uiY: 90,
            id: 'oritech:augment/farblockreach'
        },
        {
            // Aegis System
            effect: { entityAttributeId: 'minecraft:generic.armor', attributeOperationType: 0, amount: 8.0 },
            applyCost: [
                { ingredient: { item: 'arsdelight:chimera_meat' }, count: 32 },
                { ingredient: { item: 'malum:resonance_tuner' }, count: 16 },
                { ingredient: { item: 'oritech:heisenberg_compensator' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:sentient_ender' }, count: 32 },
                { ingredient: { item: 'minecraft:nether_star' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/betterarmor'],
            rfCost: 500000000,
            time: 120,
            toggleable: false,
            uiX: 105,
            uiY: 50,
            id: 'oritech:augment/ultimatearmor'
        },
        {
            // Hyper-Redundancy Matrix
            effect: { entityAttributeId: 'minecraft:generic.max_health', attributeOperationType: 0, amount: 10.0 },
            applyCost: [
                { ingredient: { item: 'arsdelight:chimera_meat' }, count: 32 },
                { ingredient: { item: 'malum:imitation_heart' }, count: 32 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:sentient_ender' }, count: 32 },
                { ingredient: { item: 'minecraft:nether_star' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/ultimatearmor'],
            rfCost: 200000000,
            time: 80,
            toggleable: false,
            uiX: 130,
            uiY: 50,
            id: 'oritech:augment/hpboostultra'
        },
        {
            // Psionic Strikes
            effect: { entityAttributeId: 'minecraft:generic.attack_damage', attributeOperationType: 0, amount: 6.0 },
            applyCost: [
                { ingredient: { item: 'arsdelight:chimera_meat' }, count: 32 },
                { ingredient: { item: 'malum:stellar_mechanism' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:sentient_ender' }, count: 32 },
                { ingredient: { item: 'minecraft:nether_star' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: ['oritech:augment/hpboostultra'],
            rfCost: 500000000,
            time: 140,
            toggleable: false,
            uiX: 155,
            uiY: 70,
            id: 'oritech:augment/superattackdamage'
        },
        {
            // Portal
            effect: { customAugmentId: 'oritech:augment/portal' },
            applyCost: [
                { ingredient: { item: 'malum:living_flesh' }, count: 32 },
                { ingredient: { item: 'malum:warping_engine' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:ender_resonator' }, count: 32 },
                { ingredient: { item: 'malum:paracausal_flame' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: [],
            rfCost: 250000000,
            time: 150,
            toggleable: true,
            uiX: 130,
            uiY: 10,
            id: 'oritech:augment/portal'
        },
        {
            // Reduced Gravity
            effect: { entityAttributeId: 'minecraft:generic.gravity', attributeOperationType: 1, amount: -0.5 },
            applyCost: [{ ingredient: { item: 'malum:wind_nucleus' }, count: 32 }],
            researchCost: [
                { ingredient: { item: 'enderio:ender_resonator' }, count: 32 },
                { ingredient: { item: 'malum:paracausal_flame' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: ['oritech:augment/betterarmor', 'oritech:augment/portal'],
            rfCost: 300000000,
            time: 110,
            toggleable: true,
            uiX: 130,
            uiY: 30,
            id: 'oritech:augment/gravity'
        },
        {
            // Flight
            effect: { customAugmentId: 'oritech:augment/flight' },
            applyCost: [
                { ingredient: { item: 'arsdelight:chimera_meat' }, count: 24 },
                { ingredient: { item: 'oritech:ion_thruster' }, count: 12 },
                { ingredient: { item: 'modern_industrialization:cooling_cell' }, count: 6 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:sentient_ender' }, count: 32 },
                { ingredient: { item: 'minecraft:nether_star' }, count: 32 }
            ],
            requiredStation: 'oritech:arcane_augment_station',
            requirements: ['oritech:augment/gravity'],
            rfCost: 500000000,
            time: 180,
            toggleable: true,
            uiX: 155,
            uiY: 30,
            id: 'oritech:augment/flight'
        },
        {
            // Living Fortress
            effect: { entityAttributeId: 'minecraft:generic.max_health', attributeOperationType: 0, amount: 10.0 },
            applyCost: [
                { ingredient: { item: 'naturesaura:depth_ingot' }, count: 32 },
                { ingredient: { item: 'arsdelight:chimera_meat' }, count: 32 },
                { ingredient: { item: 'malum:mending_diffuser' }, count: 8 }
            ],
            researchCost: [
                { ingredient: { item: 'enderio:sentient_ender' }, count: 32 },
                { ingredient: { item: 'minecraft:nether_star' }, count: 32 }
            ],
            requiredStation: 'oritech:advanced_augment_station',
            requirements: ['oritech:augment/hpboostultra', 'oritech:augment/flight'],
            rfCost: 500000000,
            time: 120,
            toggleable: false,
            uiX: 155,
            uiY: 50,
            id: 'oritech:augment/hpboostultimate'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:augment_data';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        
    });
});
