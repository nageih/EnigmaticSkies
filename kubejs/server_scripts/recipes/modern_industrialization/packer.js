ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/packer/';

    const recipes = [
        {
            item_outputs: [{ item: 'justdirethings:coalblock_t1', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:coal_t1', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}coal_t1`
        },
        {
            item_outputs: [{ item: 'justdirethings:coalblock_t2', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:coal_t2', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}coal_t2`
        },
        {
            item_outputs: [{ item: 'justdirethings:coalblock_t3', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:coal_t3', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}coal_t3`
        },
        {
            item_outputs: [{ item: 'justdirethings:coalblock_t4', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:coal_t4', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}coal_t4`
        },
        {
            item_outputs: [{ item: 'advanced_ae:printed_quantum_processor', amount: 1 }],
            item_inputs: [
                { tag: 'c:ingots/quantum_alloy', amount: 1 },
                { item: 'advanced_ae:quantum_processor_press', amount: 1, probability: 0.0 }
            ],
            duration: 10,
            eu: 8,
            id: `${id_prefix}printed_quantum_processor`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:steel_assembler', amount: 1 }],
            item_inputs: [
                { item: 'modern_industrialization:bronze_assembler', amount: 1 },
                { item: 'modern_industrialization:steel_upgrade', amount: 1 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}steel_assembler`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:steel_centrifuge', amount: 1 }],
            item_inputs: [
                { item: 'modern_industrialization:bronze_centrifuge', amount: 1 },
                { item: 'modern_industrialization:steel_upgrade', amount: 1 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}steel_centrifuge`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:packer';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
