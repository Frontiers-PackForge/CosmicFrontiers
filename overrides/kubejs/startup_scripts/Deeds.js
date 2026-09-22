
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

Deeds.register("frontiers:sky_runner")
    .name("The Ocean of Ammonia")
    .subtitle("What the Sky hid")
    .sealedHint("The only way is up?")
    .prelude("A wonderful orange glow casts across the entire Firmament")
    .prelude("Something so peaceful yet so hostile as it sears flesh.")
    .coil("the winds near the stars rage and howl like a tempest untold to the land below")
    .ring("With the right love, one could imagine this place thriving with life")
    .ring("What a paradox, a place so fit yet so hostile by the glow of the sun")
    .knot("The sky above looks so peaceful, the stars shine so bright")
    .knot("One must wonder what lies beyond")
    .knot("I look above as I cast my line into the stars. Curiousity is a powerful thing...")
    .post("A song echos louder, calling you higher.")
    .unlock("Your soul and being have grown.")
    .build()

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

Deeds.register("frontiers:depth_call_3")
    .name("The Bloom of Silence")
    .subtitle("What the water kept clean, what the water forgot")
    .sealedHint("The only way is down, deeper and deeper we go.")
    .prelude("A deadly pathogen, fully grown, lets no life escape this place")
    .prelude("Beyond the Arcane essences above, the water here feels rich in emotion, and hostilities.")
    .coil("The clicking sounds murkbloom makes as it cavitates the water, is now a eerily quiet tone")
    .coil("barely reaching my ears, the world seems to fall to total silence.")
    .ring("TODO")
    .ring("TODO")
    .knot("TODO")
    .knot("TODO")
    .knot("My line once again drifts to the stars")
    .post("A song echos, beyond your understanding.")
    .unlock("Your soul and being have grown.")
    .build()

Deeds.register("frontiers:depth_call_4")
    .name("The veil falls apart")
    .subtitle("What the water kept, what the god forgot")
    .sealedHint("The only way is down, the world rumbles below.")
    .prelude("A lonely girl, embolded by the grand designs of time")
    .prelude("Beyond the shell of this world, leaves a well of resentment at the bottom.")
    .coil("The void creeps in, fermenting the resentment of the world")
    .coil("the Murkbloom becomes the medium for hatred the world clings to.")
    .ring("Why does this being wish to hide these feelings?")
    .ring("Memories of a time where the world was freely enjoyed, faintly echo through my mind")
    .knot("To the maker of such an existence, why? What has made your twisted enjoyment, turn into resentment.")
    .knot("If I've reached the bottom and have peered into the heavens, where are the walls I must break down.")
    .knot("My line once again sinks into the nothingness of the world.")
    .post("A song wails from afar, making your thoughts loose focus.")
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