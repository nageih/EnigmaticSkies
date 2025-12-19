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
            name: 'Wilden Sauce',
            type: 'thin',
            color: '#412f16'
        }
    ];

    fluids.forEach((fluid) => {
        event
            .create(`enigmatica:${getID(fluid.name)}`, fluid.type)
            .displayName(fluid.name)
            .tint(fluid.color)
            .tag(`c:${getID(fluid.name)}`);
    });
});
