---
title: For Developers
---

You can now block certain items/fluids from being stored and crafted with using a tag.
Add the tag `ae2:blacklisted/storage` to any item/fluid to blacklist it.

# KubeJS Examples

```js
// Item Blacklisting
ServerEvents.tags('item', event => {
   event.add('ae2:blacklisted/storage', 'minecraft:stone'); 
});

// Fluid Blacklisting
ServerEvents.tags('fluid', event => {
    event.add('ae2:blacklisted/storage', 'minecraft:water');
});
```
*Note: Please refer to the [KubeJS docs](https://kubejs.com/wiki/tutorials/tags) on tags for more information
on syntax and adding tags.*