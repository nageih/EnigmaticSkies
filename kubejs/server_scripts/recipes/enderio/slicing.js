ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/slicing/';

    const recipes = [
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'ars_nouveau:wilden_hunter' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:goat' }
                },
                { item: 'minecraft:skeleton_skull' },
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:wolf' }
                },
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_hunter`
        },
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'minecraft:mooshroom' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:cow' }
                },
                { item: 'minecraft:red_mushroom_block' },
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:cow' }
                },
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}mooshroom`
        },
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'aether:cockatrice' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'aether:moa' }
                },
                { item: 'minecraft:skeleton_skull' },

                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'cold_sweat:chameleon' }
                },
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}cockatrice`
        },
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'ars_nouveau:wilden_guardian' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:polar_bear' }
                },
                { item: 'minecraft:skeleton_skull' },
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:guardian' }
                },
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_guardian`
        },
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'ars_nouveau:wilden_stalker' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:bat' }
                },
                { item: 'minecraft:skeleton_skull' },
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:wolf' }
                },
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_stalker`
        },
        {
            output: { id: 'enderio:z_logic_controller', count: 1 },
            inputs: [
                { item: 'malum:soul_stained_steel_plating' },
                { item: 'enderio:zombie_electrode' },
                { item: 'malum:soul_stained_steel_plating' },
                { item: 'malum:imitation_flesh' },
                { item: 'ae2:logic_processor' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}z_logic_controller`
        },
        {
            output: { id: 'enderio:guardian_diode', count: 1 },
            inputs: [
                { tag: 'c:plates/brass' },
                { item: 'minecraft:conduit' },
                { tag: 'c:plates/brass' },
                { item: 'malum:prismatic_focus_lens' },
                { item: 'enderio:double_layer_capacitor' },
                { item: 'malum:prismatic_focus_lens' }
            ],
            energy: 20000,
            id: `${id_prefix}guardian_diode`
        },
        {
            output: { id: 'enderio:ender_resonator', count: 1 },
            inputs: [
                { tag: 'c:ingots/end_steel' },
                { item: 'enderio:ender_crystal' },
                { tag: 'c:ingots/end_steel' },
                { tag: 'c:gems/prescient_crystal' },
                { item: 'enderio:octadic_capacitor' },
                { tag: 'c:gems/prescient_crystal' }
            ],
            energy: 20000,
            id: `${id_prefix}ender_resonator`
        },
        {
            output: { id: 'enderio:skeletal_contractor', count: 1 },
            inputs: [
                { tag: 'c:ingots/soularium' },
                { item: 'minecraft:skeleton_skull' },
                { tag: 'c:ingots/soularium' },
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'create:electron_tube' },
                { item: 'ars_technica:calibrated_precision_mechanism' }
            ],
            energy: 20000,
            id: `${id_prefix}skeletal_contractor`
        },
        {
            output: { id: 'enderio:zombie_electrode', count: 1 },
            inputs: [
                { tag: 'c:plates/silicon' },
                { item: 'minecraft:zombie_head' },
                { tag: 'c:plates/silicon' },
                { tag: 'c:gems/pulsating_crystal' },
                { item: 'enderio:basic_capacitor' },
                { tag: 'c:gems/pulsating_crystal' }
            ],
            energy: 20000,
            id: `${id_prefix}zombie_electrode`
        },
        {
            output: {
                id: 'geneticsresequenced:organic_matter',
                components: { 'geneticsresequenced:entity_type': 'ars_nouveau:whirlisprig' },
                count: 8
            },
            inputs: [
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:allay' }
                },
                { item: 'starbunclemania:whirli_prop' },
                {
                    type: 'neoforge:components',
                    items: 'geneticsresequenced:dna_helix',
                    components: { 'geneticsresequenced:entity_type': 'minecraft:allay' }
                },
                { item: 'malum:runic_sapball' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:runic_sapball' }
            ],
            energy: 20000,
            id: `${id_prefix}whirlisprig`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:slicing';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
