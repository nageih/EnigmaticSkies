ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/slicing/';

    const recipes = [
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:wilden_hunter"]'
            ).toJson(),
            inputs: [
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:goat"]'
                ).toJson(),
                { item: 'minecraft:skeleton_skull' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:wolf"]'
                ).toJson(),
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_hunter`
        },
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="minecraft:mooshroom"]'
            ).toJson(),
            inputs: [
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:cow"]'
                ).toJson(),
                { item: 'minecraft:red_mushroom_block' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:cow"]'
                ).toJson(),
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}mooshroom`
        },
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="aether:cockatrice"]'
            ).toJson(),
            inputs: [
                Ingredient.of('geneticsresequenced:dna_helix[geneticsresequenced:entity_type="aether:moa"]').toJson(),
                { item: 'minecraft:skeleton_skull' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="cold_sweat:chameleon"]'
                ).toJson(),
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}cockatrice`
        },
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:wilden_guardian"]'
            ).toJson(),
            inputs: [
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:polar_bear"]'
                ).toJson(),
                { item: 'minecraft:skeleton_skull' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:guardian"]'
                ).toJson(),
                { item: 'malum:imitation_flesh' },
                { item: 'justdirethings:polymorphic_catalyst' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_guardian`
        },
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:wilden_stalker"]'
            ).toJson(),
            inputs: [
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:bat"]'
                ).toJson(),
                { item: 'minecraft:skeleton_skull' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:wolf"]'
                ).toJson(),
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
                { tag: 'c:ingots/soularium' },
                { item: 'minecraft:zombie_head' },
                { tag: 'c:ingots/soularium' },
                { item: 'malum:imitation_flesh' },
                { item: 'modern_industrialization:electronic_circuit' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}z_logic_controller`
        },
        {
            output: { id: 'enderio:guardian_diode', count: 1 },
            inputs: [
                { tag: 'c:ingots/brass' },
                { item: 'aquaculture:fish_bones' },
                { tag: 'c:ingots/brass' },
                { item: 'minecraft:sea_lantern' },
                { item: 'enderio:double_layer_capacitor' },
                { item: 'minecraft:sea_lantern' }
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
                { item: 'enderio:prescient_powder' },
                { item: 'modern_industrialization:electronic_circuit' },
                { item: 'enderio:prescient_powder' }
            ],
            energy: 20000,
            id: `${id_prefix}ender_resonator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:slicing';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
