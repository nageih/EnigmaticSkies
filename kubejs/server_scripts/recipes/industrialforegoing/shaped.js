ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/shaped/';

    const recipes = [
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'naturesaura:conversion_catalyst',
                C: 'modern_industrialization:bronze_tank',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}dissolution_chamber`
        },
        {
            output: 'industrialforegoing:washing_factory',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:gears/dark_steel',
                C: 'enderio:void_chassis',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}washing_factory`
        },
        {
            output: 'industrialforegoing:fermentation_station',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'theurgy:fermentation_vat',
                C: 'enderio:void_chassis',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}fermentation_station`
        },
        {
            output: 'industrialforegoing:fluid_sieving_machine',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'enderio:dark_steel_bars',
                C: 'enderio:void_chassis',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}fluid_sieving_machine`
        },
        {
            output: 'industrialforegoing:conveyor_extraction_upgrade',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#c:ingots/iron',
                B: 'industrialforegoing:conveyor',
                C: 'minecraft:hopper',
                D: 'pneumaticcraft:plastic'
            },
            id: `${id_prefix}conveyor_extraction_upgrade`
        }
    ];

    const simple_machines = [
        { id: 'spores_recreator', item: 'farmersdelight:organic_compost' },
        { id: 'sewer', item: 'handcrafted:terracotta_wide_pot' },
        { id: 'sewage_composter', item: 'minecraft:furnace' },
        { id: 'animal_feeder', item: 'minecraft:golden_carrot' },
        { id: 'animal_baby_separator', item: 'minecraft:iron_bars' },
        { id: 'sludge_refiner', item: 'minecraft:bucket' },
        { id: 'animal_rancher', item: 'minecraft:shears', adv: true },
        { id: 'plant_gatherer', item: 'create:mechanical_harvester', adv: true },
        { id: 'plant_sower', item: 'naturesaura:infused_iron_hoe', adv: true },
        { id: 'block_placer', item: 'actuallyadditions:placer', adv: true },
        { id: 'block_breaker', item: 'actuallyadditions:breaker', adv: true },
        { id: 'fluid_placer', item: 'actuallyadditions:fluid_placer', adv: true },
        { id: 'fluid_collector', item: 'actuallyadditions:fluid_collector', adv: true }
    ];

    simple_machines.forEach((machine) => {
        let casing = 'actuallyadditions:wood_casing';
        let coil = 'actuallyadditions:basic_coil';
        let aux_crystal = '#c:gems/restonia';

        if (machine.adv) {
            casing = 'actuallyadditions:iron_casing';
            coil = 'actuallyadditions:advanced_coil';
            aux_crystal = '#c:gems/emeradic';
        }

        recipes.push({
            output: `industrialforegoing:${machine.id}`,
            pattern: ['ACA', 'BEB', 'ADA'],
            key: {
                A: '#c:gems/enori',
                B: aux_crystal,
                C: machine.item,
                D: coil,
                E: casing
            },
            id: `${id_prefix}${machine.id}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
