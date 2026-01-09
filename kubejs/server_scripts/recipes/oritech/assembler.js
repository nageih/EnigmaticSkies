ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/assembler/';
    const recipes = [
        {
            results: [{ id: 'oritech:basic_battery', count: 2 }],
            ingredients: [
                { item: 'modern_industrialization:steel_large_plate' },
                { tag: 'c:plates/andesite_alloy' },
                { tag: 'c:plates/carbon' },
                { item: 'industrialforegoing:pink_slime' }
            ],
            time: 10,
            id: `${id_prefix}basic_battery`
        },
        {
            results: [{ id: 'oritech:advanced_battery', count: 2 }],
            ingredients: [
                { item: 'pneumaticcraft:plastic' },
                { item: 'oritech:basic_battery' },
                { tag: 'c:gems/vibrant_crystal' },
                { item: 'modern_industrialization:stainless_steel_large_plate' }
            ],
            time: 10,
            id: `${id_prefix}advanced_battery`
        },
        {
            results: [{ id: 'modern_industrialization:pump', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:steel_large_plate' },
                { item: 'pneumaticcraft:turbine_rotor' },
                { item: 'pneumaticcraft:turbine_rotor' },
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
            results: [{ id: 'modern_industrialization:motor', count: 2 }],
            ingredients: [
                { item: 'modern_industrialization:copper_coil' },
                { item: 'create:shaft' },
                { item: 'modern_industrialization:steel_large_plate' }
            ],
            time: 10,
            id: `${id_prefix}motor`
        },
        {
            results: [{ id: 'modern_industrialization:advanced_motor', count: 2 }],
            ingredients: [
                { item: 'modern_industrialization:energetic_coil' },
                { item: 'create:shaft' },
                { item: 'modern_industrialization:stainless_steel_large_plate' }
            ],
            time: 10,
            id: `${id_prefix}advanced_motor`
        },
        {
            results: [{ id: 'modern_industrialization:large_motor', count: 1 }],
            ingredients: [
                { item: 'oritech:carbon_plating_block' },
                { item: 'modern_industrialization:motor' },
                { item: 'modern_industrialization:motor' },
                { item: 'enderio:skeletal_contractor' }
            ],
            time: 20,
            id: `${id_prefix}large_motor`
        },
        {
            results: [{ id: 'modern_industrialization:large_advanced_motor', count: 1 }],
            ingredients: [
                { item: 'oritech:carbon_plating_block' },
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
            results: [{ id: 'oritech:machine_burst_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:z_logic_controller' },
                { item: 'modern_industrialization:large_advanced_motor' },
                { item: 'industrialforegoing:speed_addon_tier_1' }
            ],
            time: 20,
            id: `${id_prefix}machine_burst_addon`
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
                { item: 'starbunclemania:fluid_jar' }
            ],
            time: 20,
            id: `${id_prefix}machine_fluid_addon`
        },
        {
            results: [{ id: 'oritech:machine_acceptor_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enigmatica:pulsating_mechanism' },
                { item: 'pneumaticcraft:plastic' },
                { item: 'oritech:basic_battery' }
            ],
            time: 20,
            id: `${id_prefix}machine_acceptor_addon`
        },
        {
            results: [{ id: 'oritech:machine_inventory_proxy_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:skeletal_contractor' },
                { item: 'oritech:reinforced_carbon_sheet' },
                { tag: 'c:chests/wooden' }
            ],
            time: 20,
            id: `${id_prefix}machine_inventory_proxy_addon`
        },
        {
            results: [{ id: 'oritech:crop_filter_addon', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:skeletal_contractor' },
                { item: 'modern_industrialization:motor' },
                { tag: 'c:seeds' }
            ],
            time: 20,
            id: `${id_prefix}crop_filter_addon`
        },
        {
            results: [{ id: 'oritech:enderic_lens', count: 1 }],
            ingredients: [
                { item: 'industrialforegoing:black_laser_lens' },
                { item: 'industrialforegoing:red_laser_lens' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'enderio:guardian_diode' }
            ],
            time: 20,
            id: `${id_prefix}enderic_lens`
        },
        {
            results: [{ id: 'industrialforegoingsouls:soul_surge', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:plastic' },
                { item: 'apothic_enchanting:warden_tendril' },
                { item: 'industrialforegoingsouls:soul_network_pipe' }
            ],
            time: 20,
            id: `${id_prefix}soul_surge`
        },
        {
            results: [{ id: 'oritech:simple_augment_station', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:skeletal_contractor' },
                { tag: 'c:gems/pulsating_crystal' }
            ],
            time: 20,
            id: `${id_prefix}simple_augment_station`
        },
        {
            results: [{ id: 'oritech:advanced_augment_station', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:z_logic_controller' },
                { tag: 'c:gems/vibrant_crystal' }
            ],
            time: 20,
            id: `${id_prefix}advanced_augment_station`
        },
        {
            results: [{ id: 'oritech:arcane_augment_station', count: 1 }],
            ingredients: [
                { item: 'oritech:machine_plating_block' },
                { item: 'enderio:ender_resonator' },
                { item: 'malum:paracausal_flame' }
            ],
            time: 20,
            id: `${id_prefix}arcane_augment_station`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:assembler';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
