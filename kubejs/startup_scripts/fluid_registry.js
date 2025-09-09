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
            color: 0x1e1e1f
        },
        {
            name: 'Briny Seawater',
            type: 'thin',
            color: 0x75c8ff
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
