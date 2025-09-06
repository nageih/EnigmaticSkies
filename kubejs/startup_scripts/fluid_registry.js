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
