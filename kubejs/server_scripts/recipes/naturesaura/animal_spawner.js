ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/animal_spawner/';

    const recipes = [
        {
            entity: 'aether:flying_cow',
            ingredients: [{ item: 'enigmatica:flying_cow_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}flying_cow`
        },
        {
            entity: 'aether:phyg',
            ingredients: [{ item: 'enigmatica:phyg_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}phyg`
        },
        {
            entity: 'aether:sheepuff',
            ingredients: [{ item: 'enigmatica:sheepuff_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}sheepuff`
        },
        {
            entity: 'minecraft:goat',
            ingredients: [{ item: 'enigmatica:goat_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}goat`
        },
        {
            entity: 'aether:moa',
            ingredients: [{ item: 'enigmatica:moa_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}moa`
        },
        {
            entity: 'aether:aerbunny',
            ingredients: [{ item: 'enigmatica:aerbunny_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}aerbunny`
        },
        {
            entity: 'minecraft:chicken',
            ingredients: [{ item: 'enigmatica:chicken_iou' }],
            aura: 5000,
            time: 600,
            id: `${id_prefix}chicken`
        },

        {
            entity: 'minecraft:wolf',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'farmersdelight:dog_food' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}wolf`
        },
        {
            entity: 'minecraft:cat',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'aquaculture:fish_fillet_raw' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}cat`
        },
        {
            entity: 'minecraft:armadillo',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:spider_eye' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}armadillo`
        },
        {
            entity: 'minecraft:camel',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:cactus' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}camel`
        },
        {
            entity: 'minecraft:panda',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:bamboo' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}panda`
        },
        {
            entity: 'minecraft:llama',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:hay_block' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}llama`
        },
        {
            entity: 'minecraft:polar_bear',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:cod' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}polar_bear`
        },
        {
            entity: 'minecraft:bat',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'oritech:banana' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}bat`
        },
        {
            entity: 'minecraft:bee',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'the_bumblezone:pollen_puff' }],
            aura: 15000,
            time: 600,
            id: `${id_prefix}bee`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        event.custom(recipe).id(recipe.id);
    });
});
