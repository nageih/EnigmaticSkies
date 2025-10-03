ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            inputs: [],
            itemIdRegex: `compressed_iron_.+`,
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}compressed_iron`
        },
        {
            inputs: [],
            itemIdRegex: `zanite_.+`,
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            inputs: [],
            itemIdRegex: `neptune_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            inputs: [],
            itemIdRegex: `neptunium_.+`,
            repairMaterial: { tag: `c:ingots/neptunium`, count: 1 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptunium`
        },
        {
            inputs: [],
            itemIdRegex: `gravitite_.+`,
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'aerial', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            inputs: [],
            itemIdRegex: `phoenix_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            inputs: [],
            itemIdRegex: `valkyrie_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'sacred', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            inputs: [],
            itemIdRegex: `obsidian_.+`,
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}obsidian`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_repair';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
