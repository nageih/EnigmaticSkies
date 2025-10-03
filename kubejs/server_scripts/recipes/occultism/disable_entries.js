ServerEvents.generateData('after_mods', (event) => {
    let entries = [
        { name: 'didactics', section: 'pentacles' },
        { name: 'contact_wild_spirit', section: 'pentacles' },
        { name: 'craft_afrit', section: 'pentacles' },
        { name: 'craft_djinni', section: 'pentacles' },
        { name: 'craft_foliot', section: 'pentacles' },
        { name: 'craft_marid', section: 'pentacles' },
        { name: 'possess_afrit', section: 'pentacles' },
        { name: 'possess_djinni', section: 'pentacles' },
        { name: 'possess_foliot', section: 'pentacles' },
        { name: 'possess_marid', section: 'pentacles' },
        { name: 'possess_unbound_afrit', section: 'pentacles' },
        { name: 'resurrect_spirit', section: 'pentacles' },
        { name: 'summon_afrit', section: 'pentacles' },
        { name: 'summon_djinni', section: 'pentacles' },
        { name: 'summon_foliot', section: 'pentacles' },
        { name: 'summon_marid', section: 'pentacles' },
        { name: 'summon_unbound_afrit', section: 'pentacles' },
        { name: 'summon_unbound_marid', section: 'pentacles' }
    ];

    colors.forEach((color) => {
        entries.push({
            name: `${color}_chalk`,
            section: 'pentacles'
        });
    });

    entries.forEach((entry) => {
        event.json(`occultism:modonomicon/books/dictionary_of_spirits/entries/${entry.section}/${entry.name}`, never_load);
    });
});
