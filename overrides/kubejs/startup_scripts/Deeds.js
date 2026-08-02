
/*
 * DEED BUILDER REFERENCE
 * Quest and cinematic lifecycle order:
 *
 *   SEALED
 *     .sealedHint(text) -> sealed hint
 *
 *   CALLING
 *     .name(text)       -> Deed ID
 *     .subtitle(text)   -> Lil bit of FLAVOR
 *
 *   WEAVE
 *     1. .prelude(text) -> first stage
 *     2. .coil(text)    -> thread pulled
 *     3. .ring(text)    ->it done
 *
 *   WOVEN
 *     .post(text)      -> after the animation the :3 :3 you jumpscare!
 *
 *   INSPECT, WHEN IMPLEMENTED
 *     .unlock(text)     -> deed.<namespace>.<path>.unlock
 *
 * Repeating a weave method appends the next N for that phase, starting at 0.
 * Scalar methods may be used once. name(...) and build() are required.
 * The builder emits these strings as genuine en_us translations.
 * Yeah if you need more help with this just ask ghost i'm too fucking lazy to explain more
 */

Deeds.register("frontiers:depth_call")
    .name("The Call of Murkbloom")
    .subtitle("What the water kept")
    .sealedHint("The only way is down.")
    .prelude("A deadly pathogen, empowered by sound and guilt of living")
    .prelude("Something so cruel, left to torture and consume anyone daring to adventure below.")
    .coil("the currents below are violent and supressing")
    .ring("One must wonder what powerful emotions brought this pathogen to life, such a simple creature but so specalized in destroying")
    .ring("Suits crumble apart under the acid of clustering blooms, a fate I wish on no one but myself, to drown in such a dark void.")
    .knot("To the maker of such a existence, why does the prospect of life fall to pointlessness in the fog")
    .knot("One wonders what awaits even deeper below")
    .knot("I once again, cast my line into the stars")
    .post("A song echos faintly, a sound familiar and distant all the same.")
    .unlock("Your soul and being have grown.")
    .build()



Deeds.register("frontiers:depth_call_2")
    .name("The Bloom of Magic and Omission")
    .subtitle("What the water kept, what the water stole")
    .sealedHint("The only way is down, deeper and deeper we go.")
    .prelude("A deadly pathogen, empowered by sound and guilt of living")
    .prelude("Beyond the biology, lies arcane pathology.")
    .coil("A mana interferrence, something abnormal")
    .coil("like something wanted to lock it away")
    .ring("Why do secrets of this world hide away as if in shame of their own existence?")
    .ring("One must wonder...")
    .knot("To the maker of such a existence, why make something so cruel, so specialized in destroying?")
    .knot("The only way to know is to explore, to find the center of this truth")
    .knot("My line once again drifts to the stars")
    .post("A song echos, beyond your understanding.")
    .unlock("Your soul and being have grown.")
    .build()


Deeds.register("frontiers:industrial_flame")
    .name("The Furnace of Industry")
    .subtitle("The fire that builds empires")
    .sealedHint("Assemble.")
    .prelude("Upon Construction, you find yourself proud over your first electric multiblock")
    .prelude("A towering furnace, eager to forge.")
    .coil("Cables and hatches litter the structure as you wrangle power into the machine")
    .coil("The furnace roars to life with a steady glow")
    .ring("The call of industry is sweet and fleeting")
    .ring("The flames of creation will forge the future of this story")
    .knot("Once again, the sound of the world beckons to me")
    .knot("A hum amongst the stars, a song that keeps guiding")
    .knot("My line, warm at last, I cast into the cold ocean of stars once again")
    .post("A song echos from afar")
    .unlock("Your soul and being have grown.")
    .build()


Deeds.register("frontiers:digital_age")
    .name("The Core of it All")
    .subtitle("Matter and Energy")
    .sealedHint("Compute")
    .prelude("A Lattice of data switches on a small white box")
    .prelude("Waiting for a surge of energy and computation.")
    .coil("Cables litter the structure, as every orbit of automation now becomes one")
    .coil("The digital age of logistics awakens")
    .ring("As if fate itself fears this creation")
    .ring("the world shudders around you")
    .knot("Once again, the world unfolds before me")
    .knot("As my machines become closer together")
    .knot("My line, with a surge of data, casts out into the sea of stars once again.")
    .post("A song echos from afar")
    .unlock("Your soul and being have grown.")
    .build()