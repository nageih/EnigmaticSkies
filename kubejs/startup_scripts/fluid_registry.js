//priority: 900

StartupEvents.registry('fluid', (event) => {
    /* Types:
        thick
        thin    
    */
    const fluids = [
        {
            name: 'Vulcanized Rubber',
            type: 'thick',
            color: '#1e1e1f'
        },
        {
            name: 'Briny Seawater',
            type: 'thin',
            color: '#75c8ff'
        },
        {
            name: 'Wastewater',
            type: 'thick',
            color: '#99948c'
        },
        {
            name: 'Espresso',
            type: 'thin',
            color: '#1f1200'
        },
        {
            name: `Starbie's Nitro Cold Brew`,
            type: 'thin',
            color: '#352002'
        },
        {
            name: 'Wilden Sauce',
            type: 'thin',
            color: '#412f16'
        },
        {
            name: 'Light Oil',
            type: 'thin',
            color: '#f5dc00'
        },
        {
            name: 'Heavy Oil',
            type: 'thin',
            color: '#e98c00'
        },
        {
            name: 'Pitch',
            type: 'thick',
            color: '#29251f'
        },
        {
            name: 'Vapours of Nyx',
            type: 'thin',
            color: '#19021a'
        }
    ];

    fluids.forEach((fluid) => {
        event
            .create(`enigmatica:${getID(fluid.name)}`, fluid.type)
            .displayName(fluid.name)
            .tint(fluid.color)
            .tag(`c:${getID(fluid.name)}`)
            .bucketItem.containerItem('minecraft:bucket');
    });
});
