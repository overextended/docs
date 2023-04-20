### lib.getNearbyVehicles

Get the id and coords of all vehicles within range of a set of coordinates.

```lua
lib.getNearbyVehicles(coords, maxDistance, includePlayerVehicle)
```

* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.
* includePlayerVehicle: `boolean`
  * Whether or not to include the player's current vehicle.

Return:

* `number[]`
