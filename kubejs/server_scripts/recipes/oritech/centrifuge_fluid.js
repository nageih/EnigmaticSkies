ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [{ id: 'oritech:polymer_resin', count: 2 }],
            fluidOutputs: [],
            ingredients: [{ item: 'oritech:clay_catalyst_beads' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 100 },
            time: 100,
            id: `${id_prefix}polymer_resin_from_naphtha`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_silicon_wash', amount: 1000 }],
            ingredients: [{ tag: 'c:dusts/certus_quartz' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 1000 },
            time: 100,
            id: `${id_prefix}silicon_wash`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'pneumaticcraft:plastic', amount: 1000 }],
            ingredients: [{ item: 'oritech:polymer_resin' }],
            fluidInput: { fluid: 'oritech:still_mineral_slurry', amount: 250 },
            time: 120,
            id: `${id_prefix}plastic_from_polymer_resin`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'pneumaticcraft:plastic', amount: 1000 }],
            ingredients: [{ item: 'oritech:raw_biopolymer' }],
            fluidInput: { fluid: 'oritech:still_mineral_slurry', amount: 250 },
            time: 120,
            id: `${id_prefix}plastic_from_raw_biopolymer`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInput: { fluid: 'minecraft:water', amount: 100 },
            fluidOutputs: [],
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 40,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
