
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
    .prelude("A")
    .prelude("A")
    .coil("B")
    .ring("C")
    .ring("C")
    .knot("C")
    .post("?")
    .unlock("Wuh.")
    .build()
