// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md

/*
    Notes: When adding new machines, allow MI to generate the necessary resources
    by enabling `datagenOnStartup = true` in `modern_industrialization-startup.toml`.
    This will generate them in the `modern_industrialization` at the instance root.

    Once generated, the following resources should be copied to `kubejs\assets\modern_industrialization` and `kubejs\data\modern_industrialization`
    Assets
    - blockstates
    - lang (only the specific entries for the new machines)
    - models
    Data
    - loot_table

    Similarly, be sure to update the `minecraft/needs_tool` and `minecraft/mineable` block tags.
*/

let STEAM_KILN;

MIMachineEvents.registerRecipeTypes((event) => {
    STEAM_KILN = event
        .register('steam_kiln')
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
});

MIMachineEvents.registerMachines((event) => {
    const mbHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output');
    const brickBaseMember = event.memberOfBlock('minecraft:polished_andesite');
    const brickWallMember = event.memberOfBlock('modern_industrialization:fire_clay_bricks');
    const mbShape = event
        .layeredShape('andesite_casing', [
            ['BBB', 'WWW', 'BBB'],
            ['BBB', 'W W', 'BBB'],
            ['BBB', 'W#W', 'BBB']
        ])
        .key('B', brickBaseMember, mbHatch)
        .key('W', brickWallMember, event.noHatch())
        .build();

    event.simpleSteamCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        'Steam Kiln',
        'steam_kiln',
        STEAM_KILN,
        mbShape,
        /* RECIPE VIEWER DISPLAY CONFIGURATION */
        // Recipe Viewer progress bar
        event.progressBar(77, 33, 'arrow'),
        // Recipe Viewer item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(56, 35, 1, 2),
        (itemOutputs) => itemOutputs.addSlot(102, 35),
        (fluidInputs) => fluidInputs.addSlot(36, 35),
        (fluidOutputs) => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        'firebricks',
        'steam_blast_furnace',
        true,
        false,
        false
    );
});
