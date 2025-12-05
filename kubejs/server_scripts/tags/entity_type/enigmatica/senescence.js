ServerEvents.tags('entity_type', (event) => {
    let additions = senescence;
    event.get('enigmatica:senescence').add(additions);
});
