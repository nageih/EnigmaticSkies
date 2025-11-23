ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            validItems: [],
            regex: { itemIdRegex: `compressed_iron_.+` },
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [{ type: 'malum:earthen', count: 8 }],
            id: `${id_prefix}compressed_iron`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `zanite_.+` },
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `neptune_.+` },
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'malum:aqueous', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `neptunium_.+` },
            repairMaterial: { tag: `c:ingots/neptunium`, count: 1 },
            spirits: [
                { type: 'malum:aqueous', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}neptunium`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `gravitite_.+` },
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `phoenix_.+` },
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `valkyrie_.+` },
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'malum:sacred', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            validItems: [],
            regex: { itemIdRegex: `obsidian_.+` },
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
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
