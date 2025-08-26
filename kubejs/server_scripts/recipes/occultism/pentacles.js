ServerEvents.generateData('after_mods', (event) => {
    // Match blocks by Blockstate: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher/
    // A: {
    //     type: 'modonomicon:blockstate',
    //     display: 'minecraft:chest[facing=east]',
    //     block: 'minecraft:chest[facing=west]'
    // }
    // Match blocks by Tag: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/tag-matcher/
    // A: {
    //     type: 'modonomicon:tag',
    //     tag: 'minecraft:planks'
    // }

    const default_mapping = {
        0: {
            type: 'modonomicon:tag',
            display: 'occultism:eldritch_chalice',
            tag: '#occultism:center_sacrificial_bowl'
        },
        W: {
            type: 'modonomicon:tag',
            tag: '#occultism:foundation_glyphs_any',
            display: 'occultism:chalk_glyph_white'
        },
        Y: {
            type: 'modonomicon:tag',
            display: 'occultism:chalk_glyph_gold',
            tag: '#occultism:glyphs_yellow'
        },
        P: {
            type: 'modonomicon:tag',
            display: 'occultism:chalk_glyph_purple',
            tag: '#occultism:glyphs_purple'
        },
        R: {
            type: 'modonomicon:tag',
            display: 'occultism:chalk_glyph_red',
            tag: '#occultism:glyphs_red'
        },
        B: {
            type: 'modonomicon:tag',
            display: 'occultism:chalk_glyph_blue',
            tag: '#occultism:glyphs_blue'
        },
        1: {
            type: 'modonomicon:tag',
            display: 'occultism:large_candle',
            tag: '#minecraft:candles'
        },
        C: {
            type: 'modonomicon:block',
            block: 'occultism:spirit_attuned_crystal'
        }
    };
    const tier_0_mapping = {
        S: {
            type: 'modonomicon:block',
            block: 'malum:large_strange_crystal'
        },
        s: {
            type: 'modonomicon:block',
            block: 'malum:strange_crystal'
        },
        b: {
            type: 'modonomicon:block',
            block: 'malum:blighted_soulwood'
        },
        N: {
            type: 'modonomicon:block',
            block: 'malum:block_of_null_slate'
        },
        w: {
            type: 'modonomicon:block',
            block: 'malum:soulwood'
        },
        y: {
            type: 'modonomicon:block',
            block: 'ars_nouveau:sky_block'
        }
    };

    let pentacles = [
        // Summoning Pentacle Overrides
        {
            name: 'contact_eldritch_spirit',
            override: true,
            mapping: Object.assign({}, default_mapping, tier_0_mapping),
            pattern: [
                [
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '______wNw______',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________'
                ],
                [
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '______yyy______',
                    '_____w___w_____',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________'
                ],
                [
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '______yyy______',
                    '_____N___N_____',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________'
                ],
                [
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '______yyy______',
                    '_____b_P_b_____',
                    '______P_P______',
                    '_____S_0_S_____',
                    '______P_P______',
                    '______sPs______',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________',
                    '_______________'
                ]
            ]
        }
    ];

    pentacles.forEach((pentacle) => {
        pentacle.type = 'modonomicon:dense';

        // Set background display. Same size as pentacle, blocks alternate between otherstone and andesite.
        // * and + are used as the keys following Occultism's convention.
        let ground = [];
        let pattern = pentacle.pattern[0];

        for (let i = 0; i < pattern.length; i++) {
            let row = '';
            for (let j = 0; j < pattern[i].length; j++) {
                row += (i + j) % 2 == 0 ? '*' : '+';
            }
            ground.push(row);
        }

        pentacle.pattern.push(ground);
        pentacle.mapping['*'] = { type: 'modonomicon:display', display: 'occultism:otherstone' };
        pentacle.mapping['+'] = { type: 'modonomicon:display', display: 'minecraft:stone' };

        event.json(`occultism:modonomicon/multiblocks/${pentacle.name}`, pentacle);

        // Remember to set lang entries for all new pentacles in en_us.json
        // x and y placement refer to the entry location within the modonomicon
        if (!pentacle.override) {
            {
                event.json(
                    `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}`,
                    generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
                );
            }
        }
    });
});
