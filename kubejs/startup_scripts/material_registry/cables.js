// https://github.com/AztechMC/Modern-Industrialization/blob/1.21.x/docs/ADDING_MATERIALS.md

MIMaterialEvents.addMaterials((event) => {
    const cables = [
        { name: 'Vibrant', color: 0xe2fa75, tier: 'ev' },
        { name: 'Energetic', color: 0xffb845, tier: 'hv' },
        { name: 'Conductive', color: 0xf78e88, tier: 'mv' }
    ];

    cables.forEach((cable) => {
        event.createMaterial(cable.name, getID(cable.name), cable.color, (builder) => {
            builder.hardness('soft').materialSet('shiny').addParts('coil').cable(cable.tier);
        });
    });
});

MIMaterialEvents.modifyMaterial('copper', (event) => {
    event.builder
        // Call any builder function, see above
        .addParts('coil');
});
