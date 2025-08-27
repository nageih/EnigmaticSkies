MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html

    const villagerExperience = [0, 5, 30, 40, 50, 60];

    Object.keys(villagerTrades).forEach((profession) => {
        event.removeTrades({ professions: profession });
        event.removeModdedTypedTrades({ professions: profession });

        villagerTrades[profession].forEach((recipe) => {
            let result = Item.of(recipe.result.id, recipe.result.count);
            let firstTrade = recipe.ingredients[0];
            let ingredients = [TradeItem.of(firstTrade.id, firstTrade.count.min, firstTrade.count.max)];

            if (recipe.ingredients[1]) {
                let secondTrade = recipe.ingredients[1];
                ingredients.push(TradeItem.of(secondTrade.id, secondTrade.count.min, secondTrade.count.max));
            }

            event.addTrade(profession, recipe.level, ingredients, result).transform((offer) => {
                if (recipe.maxUses) offer.maxUses = recipe.maxUses;
                offer.villagerExperience = villagerExperience[recipe.level];
            });
        });
    });
});

MoreJS.updateOffer((event) => {
    // Remove Supplementaries trades that are injected at trade-refresh time.
    if (event.offer.firstCost.id.includes('supplementaries') || event.offer.output.id.includes('supplementaries')) {
        return event.cancel();
    }

    if (event.isProfession('ars_nouveau:shady_wizard') || event.isProfession('actuallyadditions:engineer')) {
        if (event.offer.firstCost.id.includes('emerald') || event.offer.output.id.includes('emerald')) {
            return event.cancel();
        }
    }
});
