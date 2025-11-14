

ServerEvents.recipes(event => {

    //keep a list of what we've added to prevent duplicate entries
    let addedRecipes = [];

    //blacklist (original / source) recipes that we don't want to auto-port, for whatever reason
    //note that this is *not* regex, but supports $ for string-ending as this normally performs a startsWith
    let recipeBlacklist = [
        //mixer stuff that isn't food-related or has duplicates (e.g. heated vs non-heated tea)
        "createlowheated:mixing/chocolate$",
        "create:mixing/tea",
        "create:mixing/lava_from_cobble",
        "create:mixing/mud_by_mixing",

        //slicer stuff
        "farmersdelight:cutting/warped_stem",
        "farmersdelight:cutting/gravel",
        "farmersdelight:cutting/stone",
        "farmersdelight:cutting/deepslate",
        "farmersdelight:cutting/clay",
        "farmersdelight:cutting/quartz",
        "farmersdelight:cutting/amethyst_block",
        "delightful:cutting/grass",
        "delightful:cutting/tall_grass",
        "delightful:cutting/sandy_shrub",
        "nethersdelight:cutting/propelplant_cane", //TODO: should this be removed from cutting board as well?
        "seeddelight:cutting/pinecone",
        "vegandelight:cutting/feather",
        "delightful:integration/ars_nouveau/cutting/magebloom", //TODO: obsolete this because of volt's PR to remove the base recipe
        // Emergency Error Patches for Broken recipes | TODO: REPAIR
        "silentsdelight:cooking/warden_ear_fried_rice",
        "oceanic_delight:fried_shrimp",
        "farmersdelight:cooking/fried_rice",

        //cul assem stuff
        "farmersdelight:cooking/cooked/clawster",
        "farmersdelight:cooking/cooked/crab",
        "farmersdelight:cooking/cooked/shrimp",
        "vegandelight:cooking/salt",
        "vegandelight:cooking/ink_sac",
        "delightful:food/cooking/nut_milk",
        "seeddelight:cooking/stir_fried_cabbage_with_acorn",

        //just.. the whole mod
        "supplementaries:",
        "malum:",
        // "vintagedelight:" //TODO: CONSIDER YEETING THE DAMN MOD ENTIRELY - UPDATE NOV 2025 - YEETED
    ];

    //default predicate for blacklisting recipes; automatically implements the recipeBlacklist above
    //returning true will cause the recipe to be blacklisted / ignored
    let defaultRecipeBlacklistPredicate = (type, origRecipeName, newRecipeName, itemIngredients, fluidIngredients, itemResults, fluidResults) => {
        var loopReturn = false; //we're gunna reuse this
        recipeBlacklist.forEach(x => {
            //$ is typically regex-syntax for 'end of string' but doing full regex processing is a waste
            if (x.endsWith("$") ? origRecipeName == x.substring(0, x.length - 1) : origRecipeName.startsWith(x)) {
                loopReturn = true;
                return;
            }
        });
        if (loopReturn == true) {
            return true;
        }

        var stripOutWithItemResults = [
            "dye",
            "stripped",
            "planks",
            "coral", //this is.... it technically makes foods? unsure on this one
            "leather",
            "brick",
            "minecraft:potion"
        ];

        //strip out by result wildcard includes()
        loopReturn = false;
        if (itemResults && itemResults.length > 0
            && itemResults.filter(x => {
                stripOutWithItemResults.forEach((so) => {
                    if (x.item.includes(so)) {
                        loopReturn = true;
                        return;
                    }
                });
                if (loopReturn) {
                    return true;
                }
            })
                .length > 0
        ) {
            return true;
        }

        return false;
    }

    //default function that will be passed multiple times since it will handle most things
    let defaultAutoportFunction = (type, origRecipeName, newRecipeName, itemIngredients, fluidIngredients, itemResults, fluidResults) => {

        let ret = {
            machine: "culinary_assembler",
            eu: GTValues.VA[GTValues.LV],
            duration: 40,
            additionalIngredients: [],
            additionalFluids: []
        }

        if (type == "barbequesdelight:grilling") {
            //i just find the thought of this kinda funny lol, could change it to fryer and be boring i guess
            ret.machine = "arc_furnace";
        }

        if (origRecipeName.includes("fried_")) {
            if ((itemIngredients == null || itemIngredients.length < 7) && (fluidIngredients == null || fluidIngredients.length < 2)) {
                ret.machine = "fryer";
            }
            if (fluidIngredients == null || fluidIngredients.length < 1) {
                ret.additionalFluids.push([{ fluid: "gtceu:seed_oil", amount: 20 }, { fluid: "gtceu:fish_oil", amount: 20 }]);
            }
        }

        //cul assem doesn't support fluid outputs
        if (fluidResults && fluidResults.length > 0) {
            ret.machine = "mixer";
        }

        if (itemIngredients != null && itemIngredients.length > 0) {
            //maybe later
        }

        return ret;
    }

    //debug recipe
    //    event.recipes.gtceu.mixer("frontiers:debug_gtceu_mixer_mixeeeee")
    //        //.itemInputs("[vegandelight:soymilk_bucket,vegandelight:soymilk_bottle],[#forge:salts,#forge:salt],minecraft:water_bucket,minecraft:bowl")
    //        .itemInputs([["minecraft:stone", "minecraft:dirt"], ["minecraft:oak_log", "minecraft:spruce_log"], ['#forge:salts','#forge:salt']])
    //        .itemOutputs("minecraft:dandelion")
    //        .duration(40)
    //        .EUt(GTValues.VA[GTValues.LV]);

    //obsolete, just read the @farmersdelight cooking_pot lmao
    //    console.log("Merging @create mixer (create:mixing) recipes into GT machines...");
    //    event.forEachRecipe({ type: 'create:mixing' }, recipe => {
    //        autoportRecipe(addedRecipes, event, recipe, defaultAutoportFunction, defaultRecipeBlacklistPredicate);
    //    });


    console.log("Merging @farmersdelight cutting_board (farmersdelight:cutting) recipes into GT slicer (gtceu:slicer)...");
    event.forEachRecipe({ type: 'farmersdelight:cutting' }, recipe => {
        autoportRecipe(addedRecipes, event, recipe, () => "slicer", defaultRecipeBlacklistPredicate); //all cutting recipes get thrown into the slicer
    });

    console.log("Merging @farmersdelight cooking_pot (farmersdelight:cooking) recipes into GT machines...");
    event.forEachRecipe({ type: 'farmersdelight:cooking' }, recipe => {
        autoportRecipe(addedRecipes, event, recipe, defaultAutoportFunction, defaultRecipeBlacklistPredicate);
    });


    //these are modular and thus don't qualify
    //    console.log("Merging @cuisinedelight cuisine (cuisinedelight:cuisine) recipes into GT machines...");
    //    event.forEachRecipe({ type: 'cuisinedelight:cuisine' }, recipe => {
    //        autoportRecipe(addedRecipes, event, recipe, defaultAutoportFunction, defaultRecipeBlacklistPredicate);
    //    });

    console.log("Merging @barbequesdelight skewering (barbequesdelight:skewering) recipes into GT machines...");
    event.forEachRecipe({ type: 'barbequesdelight:skewering' }, recipe => {
        autoportRecipe(addedRecipes, event, recipe, defaultAutoportFunction, defaultRecipeBlacklistPredicate);
    });

    console.log("Merging @barbequesdelight grilling (barbequesdelight:grilling) recipes into GT machines...");
    event.forEachRecipe({ type: 'barbequesdelight:grilling' }, recipe => {
        autoportRecipe(addedRecipes, event, recipe, defaultAutoportFunction, defaultRecipeBlacklistPredicate);
    });

    //bottling and unbottling create:honey from bottles/buckets
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_unbottle_honey")
        .itemInputs("minecraft:honey_bottle")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("create:honey 250")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_unbucket_honey")
        .itemInputs("create:honey_bucket")
        .itemOutputs("minecraft:bucket")
        .outputFluids("create:honey 1000")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_bottle_honey")
        .itemInputs("minecraft:glass_bottle")
        .itemOutputs("minecraft:honey_bottle")
        .inputFluids("create:honey 250")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_bucket_honey")
        .itemInputs("minecraft:bucket")
        .itemOutputs("create:honey_bucket")
        .inputFluids("create:honey 1000")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);

    //bottling and unbottling vegandelight:soymilk from bottles/buckets
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_unbottle_soymilk")
        .itemInputs("vegandelight:soymilk_bottle")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("vegandelight:soymilk 250")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_unbucket_soymilk")
        .itemInputs("vegandelight:soymilk_bucket")
        .itemOutputs("minecraft:bucket")
        .outputFluids("vegandelight:soymilk 1000")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_create_bottle_soymilk")
        .itemInputs("minecraft:glass_bottle")
        .itemOutputs("vegandelight:soymilk_bottle")
        .inputFluids("vegandelight:soymilk 250")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.canner("frontiers:canner/gtceu_vegendelight_bucket_soymilk")
        .itemInputs("minecraft:bucket")
        .itemOutputs("vegandelight:soymilk_bucket")
        .inputFluids("vegandelight:soymilk 1000")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV]);

});

/// addedRecipes: all of the recipes that have been added thus far
///         this is to ensure recipes don't take the same name and will also assign them a different circuit
/// event: reference to the recipe ServerEvent
/// recipe: the recipe from the ServerEvents
/// machineSelectorFunction: function to determine which machine gets the recipe.
///         the return format should be valid in the context of 'event.recipes.gtceu.[RETURN_VALUE]()'
///         the function will run in the context of outputs (type: array) of the local autoportIngredientResultFilter() method
///         the function will receive these parameters: 'type', 'origRecipeName', 'newRecipeName', 'itemIngredients', 'fluidIngredients', 'itemResults', 'fluidResults'
///         to port the recipe to a specific machine without further logic, the function can be set to e.g.: () => "mixer"
/// recipeBlacklistPredicate: predicate to determine whether or not a recipe should be skipped
///         the predicate receives the same parameters: 'type', 'origRecipeName', 'newRecipeName', 'itemIngredients', 'fluidIngredients', 'itemResults', 'fluidResults'
function autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate, requireCircuit) {
    //console.log(recipe.getClass());
    //console.log(recipe.json);  //recipe.json = class com.google.gson.JsonObject
    // recipe name format: create:mixing/mud_by_mixing[create:mixing]
    var origRecipeName = recipe.toString().split("\\[")[0].toString();
    var recipeName = origRecipeName.includes("\/") ? origRecipeName.split("\/") : origRecipeName.split("\:");
    var origModRegistry = recipeName[0].includes("\:") ? recipeName[0].split("\:")[0] : recipeName[0];
    recipeName = recipeName.slice(1); //drop the first part of the array before the /
    recipeName = "frontiers:gtceu_" + origModRegistry + "_" + recipeName.join("_");

    var type = recipe.json.get("type").toString().replaceAll("\"", "");

    //this doesn't usually come up but certain things have an ingredient that's an array of tags,
    //so I'm splitting them into multiple recipes which means this will happen and get a circuit
    var idx = 1;
    var useCircuit = requireCircuit == null ? false : requireCircuit;
    while (addedRecipes.includes(recipeName)) {
        idx++;
        var potentialNewName = `${recipeName}_${idx}`;
        if (!addedRecipes.includes(potentialNewName)) {
            recipeName = potentialNewName;
            useCircuit = true;
            break;
        }
    }

    //console.log(`processing base recipe '${origRecipeName}' into '${recipeName}' @ type '${type}'...`);

    //I hate indexing it this way; if someone knows how to do this better please do
    //these should all be com.google.gson.JsonArray
    var ingredients = recipe.json.has("ingredient") ? recipe.json.get("ingredient") : recipe.json.get("ingredients");
    var results = recipe.json.has("result") ? recipe.json.get("result")
        : recipe.json.has("results") ? recipe.json.get("results")
            : recipe.json.has("output") ? recipe.json.get("output")
                : null;
    var secondaryOutputs = recipe.json.has("secondaryOutput") ? recipe.json.get("secondaryOutput") : null;

    if (ingredients != null && (ingredients.getClass == undefined || ingredients.getClass() == "class com.google.gson.JsonObject")) {
        ingredients = JsonIO.parse(JsonIO.toString([ingredients]));
        //console.log("transformed ingredients into array");
    }

    if (results != null && (results.getClass == undefined || results.getClass() == "class com.google.gson.JsonObject")) {
        results = JsonIO.parse(JsonIO.toString([results]));
        //console.log("transformed results into array");
    }
    if (secondaryOutputs != null && (secondaryOutputs.getClass == undefined || secondaryOutputs.getClass() == "class com.google.gson.JsonObject")) {
        secondaryOutputs = JsonIO.parse(JsonIO.toString([secondaryOutputs]));
        //console.log("transformed secondaryOutputs into array");
    }

    if (type.startsWith("barbequesdelight:")) {
        var sideIngredient = recipe.json.has("side") ? recipe.json.get("side") : null; //barbequesdelight support
        var toolIngredient = recipe.json.has("tool") ? recipe.json.get("tool") : null; //barbequesdelight support
        var ingredientCount = recipe.json.has("ingredientCount") ? parseInt(recipe.json.get("ingredientCount")) : null; //WHYYY

        if (toolIngredient != null && (toolIngredient.getClass == undefined || toolIngredient.getClass() == "class com.google.gson.JsonObject")) {
            toolIngredient = JsonIO.parse(JsonIO.toString([toolIngredient]));
            //console.log("transformed ingredients into array");
        }
        if (sideIngredient != null && (sideIngredient.getClass == undefined || sideIngredient.getClass() == "class com.google.gson.JsonObject")) {
            sideIngredient = JsonIO.parse(JsonIO.toString([sideIngredient]));
            //console.log("transformed sideIngredient into array");
        }

        if (sideIngredient != null) {
            if (sideIngredient.length > 0) {
                ingredients.addAll(sideIngredient);
            }
        }

        //i hate you barbeques delight
        if (ingredientCount != null && ingredientCount > 1) {
            var newIngs = [];
            ingredients.forEach((x) => {
                //this just doesn't work for some reason? maybe just for tags but aaaaaaahhhhhh
                //            if (x.has("count")) {
                //                x.remove("count");
                //            }
                //            x.add("count", ingredientCount);
                for (let i = 0; i < ingredientCount - 1; i++) {
                    newIngs.push(x)
                }
            })
            if (newIngs.length > 0) {
                ingredients.addAll(newIngs);
            }
        }

        //console.log("raw json ingredients:")
        //console.log(ingredients)
        if (toolIngredient != null) {
            //console.log("raw tool ingredients:")
            //console.log(toolIngredient)

            if (toolIngredient.length > 0) {
                ingredients.addAll(toolIngredient);
                //console.log("appended tool ingredients to ingredients");
            }
        }
    }

    //console.log("raw json results:")
    //console.log(results)
    if (secondaryOutputs != null) {
        //console.log("raw secondary outputs:")
        //console.log(secondaryOutputs)

        if (secondaryOutputs.length > 0) {
            results.addAll(secondaryOutputs);
            //console.log("appended secondary outputs to results");
        }
    }

    var itemPredicate = x => (x.has("item") === true || x.has("tag") === true)
        && x.has("fluid") === false && x.has("fluidTag") === false;
    var fluidPredicate = x => (x.has("fluid") === true || x.has("fluidTag") === true)
        && x.has("item") === false && x.has("tag") === false;

    //this can apparently be not only an object and array, but also an array of array
    //e.g. [[{"item":"vegandelight:soymilk_bucket"},{"item":"vegandelight:soymilk_bottle"}], [{"tag":"forge:salts"},{"tag":"forge:salt"}], [{"item":"minecraft:water_bucket"}]]
    var itemIngredients = autoportIngredientResultFilter(ingredients, itemPredicate);
    var fluidIngredients = autoportIngredientResultFilter(ingredients, fluidPredicate);



    //console.log("parsed json ingredients:")
    //console.log(JsonIO.toString(itemIngredients));
    //console.log("fluid ingredients:")
    //console.log(JsonIO.toString(fluidIngredients));

    var itemResults = autoportIngredientResultFilter(results, itemPredicate);
    var fluidResults = autoportIngredientResultFilter(results, fluidPredicate);

    //console.log("parsed json results:")
    //console.log(JsonIO.toString(itemResults));
    //console.log("fluid results:")
    //console.log(JsonIO.toString(fluidResults));

    var blacklisted = recipeBlacklistPredicate(type, origRecipeName, recipeName, itemIngredients, fluidIngredients, itemResults, fluidResults);
    if (blacklisted == true) {
        //console.log(`${origRecipeName} is blacklisted and will be ignored`)
        return;
    }

    //define a list of item -> fluid conversions for recipes
    //normally I'd declare this outside of the per-recipe function but I don't want it bleeding into other kjs files
    var itemFluidDict = {
        "minecraft:potion": { fluid: "minecraft:water", amount: 250 }, //water bottle :c
        "forge:water": { fluid: "minecraft:water", amount: 1000 }, //water... bucket?
        "minecraft:water_bucket": { fluid: "minecraft:water", amount: 1000 },
        "minecraft:milk_bucket": { fluidTag: "forge:milk", amount: 1000 },
        "minecraft:honey_bottle": { fluid: "create:honey", amount: 250 },
        "create:honey_bucket": { fluid: "create:honey", amount: 1000 },
        "vegandelight:soymilk_bucket": { fluid: "vegandelight:soymilk", amount: 1000 },
        "vegandelight:soymilk_bottle": { fluid: "vegandelight:soymilk", amount: 250 },
        "forge:milk": { fluidTag: "forge:milk", amount: 250 }, //this includes bottles so we're just going to use 250
        "forge:milk/milk_bottle": { fluidTag: "forge:milk", amount: 250 },
        "toughasnails:thirst/3_thirst_drinks": { fluid: "vegandelight:soymilk", amount: 250 } //why does soymilk have a weird fluid tag..
    };

    //we're gunna (potentially) do some recursive stuff because having an ingredient as an array of tags just doesn't work
    //ingredients are an array
    if (itemIngredients && itemIngredients.forEach != null) {
        //{result={"item":"vegandelight:tofu"}, ingredients=[[{"item":"vegandelight:soymilk_bucket"},{"item":"vegandelight:soymilk_bottle"}],
        //[{"tag":"forge:salts"},{"tag":"forge:salt"}]], type="farmersdelight:cooking", experience=1.0, recipe_book_tab="meals", cookingtime=200}

        var recursiveCall = false;

        var iix = 0;
        itemIngredients.forEach((ingredient) => {
            if (recursiveCall) {
                return;
            }

            if (ingredient.forEach != null && ingredient.length == 1) //why
            {
                ingredient = ingredient[0];
            }

            //a specific ingredient is an array of ingredients
            //works fine with items and fluids but not tags
            if (ingredient.forEach != null) {
                var tagEntries = ingredient.filter(x => x.tag != null);
                var itemEntries = ingredient.filter(x => x.item != null);
                if (tagEntries.length > 0) {
                    tagEntries.forEach(tagEntry => {
                        var newIngredients = itemIngredients.slice();
                        newIngredients.splice(newIngredients.indexOf(ingredient), 1);
                        newIngredients.push(tagEntry);

                        if (fluidIngredients && fluidIngredients.length > 0) {
                            newIngredients = newIngredients.concat(fluidIngredients);
                        }

                        if (recipe.json.has("ingredient")) {
                            recipe.json.remove("ingredient");
                        }
                        if (recipe.json.has("ingredients")) {
                            recipe.json.remove("ingredients");
                        }
                        recipe.json.add("ingredients", newIngredients);

                        recursiveCall = true;

                        //console.log("calling recursive recipe creation for tag " + JsonIO.toString(tagEntry));
                        autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate, true);
                    });

                    //if we split out a tag recipe, we need to create a new recipe for all the non-tag items
                    if (itemEntries.length > 0) {
                        var newIngredients = itemIngredients.slice();
                        newIngredients.splice(newIngredients.indexOf(ingredient), 1);
                        newIngredients.push(itemEntries);

                        if (fluidIngredients && fluidIngredients.length > 0) {
                            newIngredients = newIngredients.concat(fluidIngredients);
                        }

                        if (recipe.json.has("ingredient")) {
                            recipe.json.remove("ingredient");
                        }
                        if (recipe.json.has("ingredients")) {
                            recipe.json.remove("ingredients");
                        }
                        recipe.json.add("ingredients", newIngredients);

                        recursiveCall = true;

                        //console.log("calling recursive recipe creation for items " + JsonIO.toString(itemEntries));
                        autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate, true);
                    }
                }

                //post-process to check if any element of the array'd ingredients is in the item fluid dict
                if (recursiveCall == false) {
                    //this is so infuriating
                    var fluidDictReplacement = null;
                    itemEntries.forEach(ie => {
                        if (fluidDictReplacement)
                            return;
                        fluidDictReplacement = itemFluidDict[ie.item] || itemFluidDict[ie.tag];
                    });
                    if (fluidDictReplacement != null) {
                        var newIngredients = itemIngredients.slice();
                        newIngredients.splice(newIngredients.indexOf(ingredient), 1);

                        var newFluidIngredients = fluidIngredients == null ? [] : fluidIngredients.slice();
                        newFluidIngredients.push(fluidDictReplacement);

                        newIngredients = newIngredients.concat(newFluidIngredients);

                        if (recipe.json.has("ingredient")) {
                            recipe.json.remove("ingredient");
                        }
                        if (recipe.json.has("ingredients")) {
                            recipe.json.remove("ingredients");
                        }
                        recipe.json.add("ingredients", newIngredients);

                        autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate, true);
                        recursiveCall = true; //don't create recipes for buckets, force fluids
                    }
                }
            }
            else {
                if (recursiveCall == false) {
                    //and then replace ingredients with fluid counterparts
                    var fluidDictReplacement = itemFluidDict[ingredient.item] || itemFluidDict[ingredient.tag];
                    if (fluidDictReplacement != null) {
                        //console.log(`found replacement ingredient for '${JsonIO.toString(ingredient)}': '${JsonIO.toString(fluidDictReplacement)}'`);
                        var newIngredients = itemIngredients.slice();
                        newIngredients.splice(iix, 1);

                        var newFluidIngredients = fluidIngredients == null ? [] : fluidIngredients.slice();
                        newFluidIngredients.push(fluidDictReplacement);

                        newIngredients = newIngredients.concat(newFluidIngredients);

                        if (recipe.json.has("ingredient")) {
                            recipe.json.remove("ingredient");
                        }
                        if (recipe.json.has("ingredients")) {
                            recipe.json.remove("ingredients");
                        }
                        recipe.json.add("ingredients", newIngredients);

                        //console.log("adding new recipe using ingredients: " + JsonIO.toString(newIngredients));
                        autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate, requireCircuit);
                        recursiveCall = true; //don't create recipes for buckets, force fluids
                    }
                }
            }
            iix++;
        });

        if (recursiveCall == true) {
            return;
        }
    }

    //and now convert any itemFluidDict outputs to their fluid conterparts
    if (itemResults && itemResults.forEach) {
        var recursiveCall = false;

        itemResults.forEach(result => {
            if (recursiveCall) {
                return;
            }

            var fluidDictReplacement = itemFluidDict[result.item] || itemFluidDict[result.tag];
            if (fluidDictReplacement != null) {
                var newResults = itemResults.slice();
                newResults.splice(newResults.indexOf(result), 1);

                var newFluidResults = fluidResults == null ? [] : fluidResults.slice();
                newFluidResults.push(fluidDictReplacement);

                newResults = newResults.concat(newFluidResults);

                if (recipe.json.has("result")) {
                    recipe.json.remove("result");
                }
                if (recipe.json.has("results")) {
                    recipe.json.remove("results");
                }
                recipe.json.add("results", newResults);

                autoportRecipe(addedRecipes, event, recipe, machineSelectorFunction, recipeBlacklistPredicate);
                recursiveCall = true; //don't create recipes for buckets, force fluids
            }
        });

        if (recursiveCall == true) {
            return;
        }
    }

    //check for container requirements, such as bowls, and add them to the ingredients list
    //unless there are NO item results
    if (itemResults && itemResults.length > 0) {
        if (recipe.json.has("container")) {
            var container = recipe.json.get("container");
            var containerName = container.has("item") ? container.get("item").toString().replaceAll("\"", "") : "";
            if (itemFluidDict[containerName] != null) {
                if (fluidIngredients) {
                    fluidIngredients.push(itemFluidDict[containerName])
                }
                else {
                    fluidIngredients = itemFluidDict[containerName];
                }
            }
            else {
                if (itemIngredients) {
                    if (containerName == "minecraft:bucket" && itemIngredients.find(x => x.item && x.item.includes("bucket"))) {
                        //do NOT add a bucket to recipes already using a bucket
                    }
                    else {
                        itemIngredients.push(container);
                    }
                }
                else {
                    itemIngredients = [container];
                }
            }
            //console.log(`appended container '${container}'`);
        }
        //wow I... hate this
        //tldr some recipes don't have a {container=} but need one, e.g. ratatouille
        else if (type == "farmersdelight:cooking") {
            if (itemResults.forEach && itemResults.length == 1) {
                var outputItemStack = Item.of(itemResults[0]);
                var outputItem = outputItemStack.getItem();
                if (outputItem.hasCraftingRemainingItem() == true) {
                    var remainingItem = outputItem.getItem().getCraftingRemainingItem();
                    if (remainingItem != null) {
                        itemIngredients.push(remainingItem);
                    }
                }
            }
        }
    }

    //process the provided function -- a function is required, and a default one is available in this file
    var machSelObj = machineSelectorFunction(type, origRecipeName, recipeName, itemIngredients, fluidIngredients, itemResults, fluidResults);

    if (typeof (machSelObj) !== "object") {
        if (typeof (machSelObj) !== "string") {
            throw new Exception("only strings can be sent for the autoport machine, got: " + machSelObj);
        }
        machSelObj = {
            machine: machSelObj,
            eu: GTValues.VA[GTValues.LV],
            duration: 40
        }
    }

    if (machSelObj.machine == "slicer" && itemIngredients.find) {
        var findTheKnife = itemIngredients.find(x => x.tag == "forge:tools/knives");
        if (findTheKnife != null) {
            itemIngredients.splice(itemIngredients.indexOf(findTheKnife))
        }
    }

    //console.log(`machine selected: ${JsonIO.toString(machSelObj)}`)

    if (machSelObj.additionalItems && machSelObj.additionalItems.length > 0) {
        //console.log("additional items were provided by the machine selector");
        if (itemIngredients && itemIngredients.forEach) {
            itemIngredients = itemIngredients.concat(machSelObj.additionalItems);
        }
        else {
            itemIngredients = machSelObj.additionalItems;
        }
    }
    if (machSelObj.additionalFluids && machSelObj.additionalFluids.length > 0) {
        //console.log("additional fluids were provided by the machine selector");
        if (fluidIngredients && fluidIngredients.forEach) {
            fluidIngredients = fluidIngredients.concat(machSelObj.additionalFluids);
        } else {
            fluidIngredients = machSelObj.additionalFluids;
        }
    }

    var newRecipe = event.recipes.gtceu[machSelObj.machine](recipeName)
        .duration(machSelObj.duration)
        .EUt(machSelObj.eu);

    if (useCircuit == true) {
        newRecipe.circuit(idx);
    }

    if (itemIngredients && itemIngredients.length > 0) {
        newRecipe.itemInputs(itemIngredients);
    }

    if (fluidIngredients && fluidIngredients.length > 0) {
        //object notation wasn't working for fluid ingredients so... this
        var rawFluidIngredients = [];
        fluidIngredients.forEach(ing => {
            if (ing.fluidTag != null) {
                rawFluidIngredients.push(`#${ing.fluidTag} ${ing.amount == null ? '' : ing.amount}`);
            } else {
                rawFluidIngredients.push(`${ing.fluid} ${ing.amount == null ? '' : ing.amount}`);
            }
        });
        newRecipe.inputFluids(rawFluidIngredients);
    }

    if (itemResults && itemResults.length > 0) {
        newRecipe.itemOutputs(itemResults);
    }

    if (fluidResults && fluidResults.length > 0) {
        newRecipe.outputFluids(fluidResults);
    }

    //    console.log(`created recipe '${recipeName}' @ '${newRecipe}'
    //            \tinput items: ${JsonIO.toString(itemIngredients)}
    //            \tinput fluids: ${JsonIO.toString(fluidIngredients)}
    //            \toutput items: ${JsonIO.toString(itemResults)}
    //            \toutput fluids: ${JsonIO.toString(fluidResults)}
    //            `);

    addedRecipes.push(recipeName);
}

//I had a lot of trouble adding objects to the machine recipe input, so I'm just using raw js objects instead
function autoportFactoryIngredientWrapper(ingredientOrResult) {
    if (ingredientOrResult.forEach == null) {
        //just one!
        //console.log(`processing Ingredient for '${ingredientOrResult.toString()}'`)

        var ret = {};
        if (ingredientOrResult.has("fluid")) {
            ret.fluid = ingredientOrResult.get("fluid").toString().replaceAll("\"", "");
            ret.amount = ingredientOrResult.has("amount") ? parseInt(ingredientOrResult.get("amount")) : 1;
        }
        else if (ingredientOrResult.has("fluidTag")) {
            ret.fluidTag = ingredientOrResult.get("fluidTag").toString().replaceAll("\"", "");
            ret.amount = ingredientOrResult.has("amount") ? parseInt(ingredientOrResult.get("amount")) : 1;
        }
        else if (ingredientOrResult.has("item")) {
            ret.item = ingredientOrResult.get("item").toString().replaceAll("\"", "");
            ret.count = ingredientOrResult.has("count") ? parseInt(ingredientOrResult.get("count")) : 1;
        }
        else if (ingredientOrResult.has("tag")) {
            ret.tag = ingredientOrResult.get("tag").toString().replaceAll("\"", "");
            ret.count = ingredientOrResult.has("count") ? parseInt(ingredientOrResult.get("count")) : 1;
        }

        return ret;
    }
    else if (ingredientOrResult.length && ingredientOrResult.length == 0) {
        return null;
    }
    else {
        var arr = [];
        ingredientOrResult.forEach((x) => {
            //while the method is recursive and could handle this, flattening the output isn't desired
            if (x.forEach != null && x.length && x.length > 0) {
                var subArr = [];
                x.forEach((y) => {
                    var query = autoportFactoryIngredientWrapper(y);
                    if (query != null)
                        subArr.push(query);
                });
                if (subArr.length > 0)
                    arr.push(subArr);
            }
            else {
                var query = autoportFactoryIngredientWrapper(x);
                if (query != null)
                    arr.push(query)
            }
        });
        return arr;
    }
}

/// Returns a new javascript array of ingredients filtered by the predicate
function autoportIngredientResultFilter(javaArrayList, predicate) {
    //console.log(`performing autoportIngredientResultFilter on ${javaArrayList}...`);
    var arr = [];

    if (javaArrayList.forEach == null) {
        //filtering just a single item/fluid I guess?
        if (predicate(javaArrayList) === true) {
            arr.push(autoportFactoryIngredientWrapper(javaArrayList));
        }
    }
    else {
        javaArrayList.forEach((x) => {
            //I don't know how to instanceof to check the type so I'm falling back to a getClass()
            var javaClass = x.getClass();
            if (javaClass == "class com.google.gson.JsonObject") {
                if (predicate(x) === true) {
                    arr.push(autoportFactoryIngredientWrapper(x))
                }
            }
            else if (javaClass == "class com.google.gson.JsonArray") {
                var subArr = [];
                x.forEach((y) => {
                    if (predicate(y) === true) {
                        subArr.push(autoportFactoryIngredientWrapper(y))
                    }
                })
                if (subArr.length > 0)
                    arr.push(subArr);
            }
            else {
                throw new Error(`invalid datatype was passed to autoportIngredientResultFilter: [${x.getClass()}] ${javaArrayList}`)
            }
        })
    }
    return arr.length > 0 ? arr : null;
}