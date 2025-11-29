ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [{ id: 'oritech:polymer_resin', count: 2 }],
            fluidOutputs: [],
            ingredients: [{ item: 'oritech:clay_catalyst_beads' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 100 },
            time: 5,
            id: `${id_prefix}polymer_resin`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_silicon_wash', amount: 1000 }],
            ingredients: [{ tag: 'c:dusts/certus_quartz' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 1000 },
            time: 5,
            id: `${id_prefix}silicon_wash`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'pneumaticcraft:plastic', amount: 1000 }],
            ingredients: [{ item: 'oritech:polymer_resin' }],
            fluidInput: { fluid: 'oritech:still_mineral_slurry', amount: 250 },
            time: 10,
            id: `${id_prefix}plastic`
        },
        {
            results: [{ id: 'theurgy:crystallized_water', count: 2 }],
            ingredients: [{ item: 'enigmatica:melon_ball' }],
            fluidInput: { fluid: 'theurgy:sal_ammoniac', amount: 20 },
            time: 5,
            id: `${id_prefix}crystallized_water_from_sal_ammoniac`
        },
        {
            results: [{ id: 'theurgy:crystallized_water', count: 8 }],
            ingredients: [{ item: 'enigmatica:melon_ball' }],
            fluidInput: { fluid: 'oritech:still_strange_matter', amount: 100 },
            time: 5,
            id: `${id_prefix}crystallized_water_from_strange_matter`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 160 }],
            ingredients: [{ item: 'actuallyadditions:canola' }],
            time: 1,
            id: `${id_prefix}canola_oil`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'minecraft:lava', amount: 4000 }],
            ingredients: [{ item: 'theurgy:crystallized_lava' }],
            time: 1,
            id: `${id_prefix}lava`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'minecraft:water', amount: 8000 }],
            ingredients: [{ item: 'theurgy:crystallized_water' }],
            time: 1,
            id: `${id_prefix}water`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'industrialforegoing:pink_slime', amount: 100 }],
            ingredients: [{ tag: 'c:foods/cooked_meats' }],
            fluidInput: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            time: 10,
            id: `${id_prefix}pink_slime`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'industrialforegoing:meat', amount: 100 }],
            ingredients: [{ tag: 'c:foods/raw_meats' }],
            fluidInput: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            time: 10,
            id: `${id_prefix}meat`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInput: { fluid: 'minecraft:water', amount: 100 },
            fluidOutputs: [],
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
