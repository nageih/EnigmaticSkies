ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:geneticsresequenced/shaped/';

    const recipes = [
        {
            output: 'geneticsresequenced:scraper[unbreakable={}]',
            pattern: [' BA', ' AB', 'A  '],
            key: {
                A: `naturesaura:ancient_stick`,
                B: 'malum:soul_stained_steel_plating'
            },
            id: `${id_prefix}scraper`
        },
        {
            output: `geneticsresequenced:syringe`,
            pattern: ['  A', ' B ', 'C  '],
            key: {
                A: `#c:rods/steel`,
                B: 'minecraft:glass_bottle',
                C: 'enderio:experience_rod'
            },
            id: `${id_prefix}syringe`
        },
        {
            output: `geneticsresequenced:metal_syringe`,
            pattern: [' A ', 'CBC', ' A '],
            key: {
                A: `#c:gems/empowered_void`,
                B: `geneticsresequenced:syringe`,
                C: '#c:plates/steel'
            },
            id: `${id_prefix}metal_syringe`
        },
        {
            output: `geneticsresequenced:advanced_incubator`,
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: `#c:gems/empowered_void`,
                B: `geneticsresequenced:incubator`,
                C: '#c:gears/dark_steel',
                D: 'enderio:z_logic_controller'
            },
            id: `${id_prefix}advanced_incubator`
        },
        {
            output: `geneticsresequenced:gene_checker`,
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: `#c:plates/plastic`,
                B: 'enderio:skeletal_contractor',
                C: 'geneticsresequenced:syringe'
            },
            id: `${id_prefix}gene_checker`
        },
        {
            output: `4x geneticsresequenced:overclocker`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'geneticsresequenced:organic_matter',
                B: 'pneumaticcraft:speed_upgrade',
                C: `#c:plates/plastic`
            },
            id: `${id_prefix}overclocker`
        }
    ];

    const machines = [
        { output: 'cell_analyzer', input: 'minecraft:observer' },
        { output: 'dna_extractor', input: 'create:whisk' },
        { output: 'dna_decryptor', input: 'create:content_observer' },
        { output: 'blood_purifier', input: 'create:attribute_filter' },
        { output: 'plasmid_infuser', input: 'create:brass_hand' },
        { output: 'incubator', input: 'minecraft:copper_bulb' },
        { output: 'plasmid_injector', input: 'create:spout' }
    ];

    machines.forEach((recipe) => {
        recipes.push({
            output: `geneticsresequenced:${recipe.output}`,
            pattern: ['ACA', 'ABA', 'DED'],
            key: {
                A: `#c:plates/plastic`,
                B: 'modern_industrialization:steel_machine_casing',
                C: recipe.input,
                D: '#c:gears/compressed_iron',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}${recipe.output}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
