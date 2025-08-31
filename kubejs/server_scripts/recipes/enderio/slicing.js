ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/slicing/';

    const recipes = [
        {
            output: Item.of(
                '8x geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:wilden_hunter"]'
            ).toJson(),
            inputs: [
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:wolf"]'
                ).toJson(),
                { item: 'minecraft:skeleton_skull' },
                Ingredient.of(
                    'geneticsresequenced:dna_helix[geneticsresequenced:entity_type="minecraft:goat"]'
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
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:ingots/brass' },
                { tag: 'c:gems/prismarine' },
                { item: 'enderio:double_layer_capacitor' },
                { tag: 'c:gems/prismarine' }
            ],
            energy: 20000,
            id: `${id_prefix}guardian_diode`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:slicing';
        event.custom(recipe).id(recipe.id);
    });
});
