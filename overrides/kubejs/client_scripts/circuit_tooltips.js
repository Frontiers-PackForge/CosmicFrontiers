const $CircuitTooltipColor = Java.loadClass('java.awt.Color')

const circuitTooltipForms = ['', '_assembly', '_supercomputer', '_mainframe']
const circuitTooltipTiers = [
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv',
    'uev',
    'uiv',
    'uxv',
    'opv',
    'max'
]

const circuitTooltipSeries = [
    { id: 'hex', startTier: 0, style: 'amethyst' },
    { id: 'enthelic', startTier: 1, style: 'pink' },
    { id: 'lucidic', startTier: 2, style: 'yellow' },
    { id: 'harmonic', startTier: 5, style: 'darkAqua' },
    { id: 'optical', startTier: 6, style: 'gold' },
    { id: 'suelescent', startTier: 7, style: 'darkPurple' },
    { id: 'akashic', startTier: 8, style: 'lightPurple' },
    { id: 'eschaton', startTier: 9, style: 'rainbow' }
]

const circuitTooltipTranslations = {
    'cosmiccore.circuit.mv_tier.tooltip': 'MV-Tier Circuit',
    'cosmiccore.circuit.hv_tier.tooltip': 'HV-Tier Circuit',
    'cosmiccore.circuit.ev_tier.tooltip': 'EV-Tier Circuit',
    'cosmiccore.circuit.iv_tier.tooltip': 'IV-Tier Circuit',
    'cosmiccore.circuit.luv_tier.tooltip': 'LuV-Tier Circuit',
    'cosmiccore.circuit.zpm_tier.tooltip': 'ZPM-Tier Circuit',
    'cosmiccore.circuit.uv_tier.tooltip': 'UV-Tier Circuit',
    'cosmiccore.circuit.uhv_tier.tooltip': 'UHV-Tier Circuit',
    'cosmiccore.circuit.uev_tier.tooltip': 'UEV-Tier Circuit',
    'cosmiccore.circuit.uiv_tier.tooltip': 'UIV-Tier Circuit',
    'cosmiccore.circuit.uxv_tier.tooltip': 'UXV-Tier Circuit',
    'cosmiccore.circuit.opv_tier.tooltip': 'OpV-Tier Circuit',
    'cosmiccore.circuit.max_tier.tooltip': 'MAX-Tier Circuit',
    'cosmiccore.circuit.hex.tooltip': 'Circuits of Arcane Logic',
    'cosmiccore.circuit.enthelic.tooltip': 'Circuits of a False Dream',
    'cosmiccore.circuit.harmonic.tooltip': 'Circuits Resonating with the World',
    'cosmiccore.circuit.optical.tooltip': 'Lightspeed Computation',
    'cosmiccore.circuit.suelescent.tooltip': 'Planck Computation',
    'cosmiccore.circuit.akashic.tooltip': 'Perfected Recordkeeping Calculations',
    'cosmiccore.circuit.eschaton.tooltip': 'The Universe Within Your Universe.'
}

ClientEvents.lang('en_us', event => {
    for (const [key, value] of Object.entries(circuitTooltipTranslations)) {
        event.add(key, value)
    }
})

function styleCircuitTier(text, style) {
    if (style === 'amethyst') return text.color(0x9A5CC6)
    if (style === 'pink') return text.color(0xF38BAA)
    if (style === 'yellow') return text.yellow()
    if (style === 'darkAqua') return text.darkAqua()
    if (style === 'gold') return text.gold()
    if (style === 'darkPurple') return text.darkPurple()
    if (style === 'lightPurple') return text.lightPurple()

    const hue = Date.now() % 4500 / 4500
    return text.color($CircuitTooltipColor.HSBtoRGB(hue, 1, 1))
}

ItemEvents.modifyTooltips(event => {
    circuitTooltipSeries.forEach(series => {
        circuitTooltipForms.forEach((form, formIndex) => {
            const itemId = `cosmiccore:${series.id}_processor${form}`

            event.modify(itemId, tooltip => {
                const lore = series.id === 'lucidic'
                    ? Text.of('')
                    : Text.translate(`cosmiccore.circuit.${series.id}.tooltip`)
                tooltip.insert(1, series.id === 'eschaton' ? lore.red().bold() : lore.gray())

                if (series.id !== 'eschaton' || form !== '_mainframe') {
                    const tier = circuitTooltipTiers[series.startTier + formIndex]
                    tooltip.insert(2, styleCircuitTier(Text.translate(`cosmiccore.circuit.${tier}_tier.tooltip`), series.style))
                }
            })
        })
    })
})
