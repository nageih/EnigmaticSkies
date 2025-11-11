ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/assembler/';
    const recipes = [
        {
            results: [{ id: 'modern_industrialization:motor', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:conductive_coil' },
                { item: 'modern_industrialization:steel_large_plate' },
                { item: 'create:shaft' }
            ],
            time: 10,
            id: `${id_prefix}motor`
        },
        {
            results: [{ id: 'modern_industrialization:advanced_motor', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:energetic_coil' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { tag: 'c:rods/stainless_steel' }
            ],
            time: 10,
            id: `${id_prefix}advanced_motor`
        },
        {
            results: [{ id: 'oritech:flux_gate', count: 1 }],
            ingredients: [
                { item: 'actuallyadditions:advanced_coil' },
                { tag: 'c:gems/fluxite' },
                { tag: 'c:ingots/energetic_alloy' },
                { tag: 'c:plates/silicon' }
            ],
            time: 10,
            id: `${id_prefix}flux_gate`
        },
        {
            results: [{ id: 'oritech:clay_catalyst_beads', count: 8 }],
            ingredients: [
                { item: 'minecraft:clay' },
                { item: 'minecraft:clay' },
                { tag: 'c:storage_blocks/sulfur' },
                { item: 'oritech:raw_silicon' }
            ],
            time: 30,
            id: `${id_prefix}clay_catalyst_beads`
        },
        {
            results: [{ id: 'oritech:basic_battery', count: 2 }],
            ingredients: [
                { tag: 'c:gems/restonia' },
                { item: 'actuallyadditions:advanced_coil' },
                { tag: 'c:gems/enori' }
            ],
            time: 10,
            id: `${id_prefix}basic_battery`
        },
        {
            results: [{ id: 'oritech:advanced_battery', count: 2 }],
            ingredients: [
                { item: 'pneumaticcraft:plastic' },
                { item: 'oritech:basic_battery' },
                { tag: 'c:gems/fluxite' },
                { tag: 'c:ingots/steel' }
            ],
            time: 10,
            id: `${id_prefix}advanced_battery`
        },
        {
            results: [{ id: 'modern_industrialization:pump', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:steel_large_plate' },
                { item: 'modern_industrialization:bronze_rotor' },
                { item: 'modern_industrialization:bronze_rotor' },
                { item: 'modern_industrialization:large_motor' }
            ],
            time: 20,
            id: `${id_prefix}pump`
        },
        {
            results: [{ id: 'modern_industrialization:advanced_pump', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'modern_industrialization:stainless_steel_rotor' },
                { item: 'modern_industrialization:stainless_steel_rotor' },
                { item: 'modern_industrialization:large_advanced_motor' }
            ],
            time: 20,
            id: `${id_prefix}advanced_pump`
        },
        {
            results: [{ id: 'modern_industrialization:large_motor', count: 1 }],
            ingredients: [
                { item: 'oritech:reinforced_carbon_sheet' },
                { item: 'modern_industrialization:motor' },
                { item: 'modern_industrialization:motor' },
                { item: 'modern_industrialization:electronic_circuit' }
            ],
            time: 20,
            id: `${id_prefix}large_motor`
        },
        {
            results: [{ id: 'modern_industrialization:large_advanced_motor', count: 1 }],
            ingredients: [
                { item: 'oritech:reinforced_carbon_sheet' },
                { item: 'modern_industrialization:advanced_motor' },
                { item: 'modern_industrialization:advanced_motor' },
                { item: 'enderio:z_logic_controller' }
            ],
            time: 20,
            id: `${id_prefix}large_advanced_motor`
        },
        {
            results: [{ id: 'modern_industrialization:advanced_large_steam_boiler', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:large_steam_boiler' },
                { item: 'modern_industrialization:pump' },
                { item: 'modern_industrialization:pump' },
                { item: 'enderio:z_logic_controller' }
            ],
            time: 20,
            id: `${id_prefix}advanced_large_steam_boiler`
        },
        {
            results: [{ id: 'oritech:machine_speed_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:z_logic_controller' },
                { item: 'modern_industrialization:large_motor' },
                { item: 'industrialforegoing:speed_addon_tier_1' }
            ],
            time: 20,
            id: `${id_prefix}machine_speed_addon`
        },
        {
            results: [{ id: 'oritech:machine_efficiency_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:skeletal_contractor' },
                { item: 'modern_industrialization:large_motor' },
                { item: 'industrialforegoing:efficiency_addon_tier_1' }
            ],
            time: 20,
            id: `${id_prefix}machine_efficiency_addon`
        },
        {
            results: [{ id: 'oritech:machine_processing_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:sentient_ender' },
                { item: 'modern_industrialization:large_motor' },
                { item: 'industrialforegoing:processing_addon_tier_1' }
            ],
            time: 20,
            id: `${id_prefix}machine_processing_addon`
        },
        {
            results: [{ id: 'oritech:machine_fluid_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { tag: 'modern_industrialization:fluid_pipes' },
                { tag: 'modern_industrialization:fluid_pipes' },
                { item: 'modern_industrialization:steel_tank' }
            ],
            time: 20,
            id: `${id_prefix}machine_fluid_addon`
        },
        {
            results: [{ id: 'oritech:enderic_lens', count: 1 }],
            ingredients: [
                { item: 'oritech:enderic_compound' },
                { item: 'glassential:glass_redstone_tinted' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'enderio:guardian_diode' }
            ],
            time: 20,
            id: `${id_prefix}enderic_lens`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:assembler';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
