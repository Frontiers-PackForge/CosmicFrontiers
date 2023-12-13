//Internal Erroring Recipe Removal
ServerEvents.recipes(event => { 
  console.log('Hello! Correcting Errored Recipes!')
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_log' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' })
  event.remove({ id: 'crabbersdelight:lanternfish_barrel' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood_log' })

  
})