ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchantment/';

    const recipes = [
        {
            enchantment: 'geneticsresequenced:delicate_touch',
            level: 1,
            pedestalItems: [
                { tag: 'c:feathers' },
                { tag: 'c:feathers' },
                { tag: 'c:ingots/copper' },
                { tag: 'c:ingots/copper' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}delicate_touch`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 1,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}spirit_plunder_1`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 2,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}spirit_plunder_2`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 3,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}spirit_plunder_3`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 4,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}spirit_plunder_4`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 5,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}spirit_plunder_5`
        },
        {
            enchantment: 'malum:spirit_plunder',
            level: 6,
            pedestalItems: [
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:gems/blazing_quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}spirit_plunder_6`
        },
        {
            enchantment: 'malum:haunted',
            level: 1,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}haunted_1`
        },
        {
            enchantment: 'malum:haunted',
            level: 2,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}haunted_2`
        },
        {
            enchantment: 'malum:haunted',
            level: 3,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}haunted_3`
        },
        {
            enchantment: 'malum:haunted',
            level: 4,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}haunted_4`
        },
        {
            enchantment: 'malum:haunted',
            level: 5,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}haunted_5`
        },
        {
            enchantment: 'malum:haunted',
            level: 6,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}haunted_6`
        },
        {
            enchantment: 'malum:haunted',
            level: 7,
            pedestalItems: [
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:gems/quartz' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}haunted_7`
        },
        {
            enchantment: 'malum:rebound',
            level: 1,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}rebound_1`
        },
        {
            enchantment: 'malum:rebound',
            level: 2,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}rebound_2`
        },
        {
            enchantment: 'malum:rebound',
            level: 3,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}rebound_3`
        },
        {
            enchantment: 'malum:rebound',
            level: 4,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}rebound_4`
        },
        {
            enchantment: 'malum:rebound',
            level: 5,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}rebound_5`
        },
        {
            enchantment: 'malum:rebound',
            level: 6,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}rebound_6`
        },
        {
            enchantment: 'malum:rebound',
            level: 7,
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/air' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}rebound_7`
        },
        {
            enchantment: 'malum:animated',
            level: 1,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}animated_1`
        },
        {
            enchantment: 'malum:animated',
            level: 2,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}animated_2`
        },
        {
            enchantment: 'malum:animated',
            level: 3,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}animated_3`
        },
        {
            enchantment: 'malum:animated',
            level: 4,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}animated_4`
        },
        {
            enchantment: 'malum:animated',
            level: 5,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}animated_5`
        },
        {
            enchantment: 'malum:animated',
            level: 6,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}animated_6`
        },
        {
            enchantment: 'malum:animated',
            level: 7,
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}animated_7`
        },
        {
            enchantment: 'malum:capacitor',
            level: 1,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}capacitor_1`
        },
        {
            enchantment: 'malum:capacitor',
            level: 2,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}capacitor_2`
        },
        {
            enchantment: 'malum:capacitor',
            level: 3,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capacitor_3`
        },
        {
            enchantment: 'malum:capacitor',
            level: 4,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capacitor_4`
        },
        {
            enchantment: 'malum:capacitor',
            level: 5,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capacitor_5`
        },
        {
            enchantment: 'malum:capacitor',
            level: 6,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capacitor_6`
        },
        {
            enchantment: 'malum:capacitor',
            level: 7,
            pedestalItems: [
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capacitor_7`
        },
        {
            enchantment: 'malum:replenishing',
            level: 1,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}replenishing_1`
        },
        {
            enchantment: 'malum:replenishing',
            level: 2,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}replenishing_2`
        },
        {
            enchantment: 'malum:replenishing',
            level: 3,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}replenishing_3`
        },
        {
            enchantment: 'malum:replenishing',
            level: 4,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}replenishing_4`
        },
        {
            enchantment: 'malum:replenishing',
            level: 5,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}replenishing_5`
        },
        {
            enchantment: 'malum:replenishing',
            level: 6,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}replenishing_6`
        },
        {
            enchantment: 'malum:replenishing',
            level: 7,
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:ingots/soul_stained_steel' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}replenishing_7`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        event.custom(recipe).id(recipe.id);

        
    });
});
