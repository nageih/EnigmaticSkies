ServerEvents.tags('geneticsresequenced:gene', (event) => {
    let additions = ['geneticsresequenced:keep_inventory'];

    event.get('geneticsresequenced:disabled').add(additions);
    event.get('geneticsresequenced:hidden').add(additions);
});
