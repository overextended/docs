# Event Hooks

Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly.

## registerHook

```lua
exports.ox_inventory:registerHook(eventName, function(payload) end, options)
```

- eventName: `string`
- payload: `table`
- options?: `table`
  - print?: `boolean`
    - Print to the console when triggering the event.
  - itemFilter?: `{ [string]: true }`
    - The event will only trigger for items defined as keys in a set.
  - inventoryFilter?: `string[]`
    - The event will only trigger for inventories that match one of the [patterns](<http://www.easyuo.com/openeuo/wiki/index.php/Lua_Patterns_and_Captures_(Regular_Expressions)>) in the array.
  - typeFilter?: `{ [string]: true }`
    - The event will only trigger for inventories with one of the provided types (e.g. 'player', 'stash')

Return:

- hookId: `number`

### swapItems

Triggered when moving any item from one slot to another, or when "giving" an item.  
By returning `false`, you can cancel the action and revert the inventory state.

**Payload:**

- source: `number`
- action: `'move'` or `'stack'` or `'swap'` or `'give'`
- fromInventory: `number` or `string`
- toInventory: `number` or `string`
- fromType: `string`
- toType: `string`
- fromSlot: `table`
- toSlot?: `table` or `number`
- count: `number`

**Example:**

```lua
local hookId = exports.ox_inventory:registerHook('swapItems', function(payload)
    print(json.encode(payload, { indent = true }))
    return false
end, {
    print = true,
    itemFilter = {
        water = true,
    },
    inventoryFilter = {
        '^glove[%w]+',
        '^trunk[%w]+',
    }
})
```

Blacklists "water" from being moved into or from gloveboxes and trunks.

### openInventory

**Payload:**

- source: `number`
- inventoryId: `number` or `string`
- inventoryType: `string`

Triggered when a player tries to open a secondary inventory.  
By returning `false`, you can cancel the action and keep the player's inventory closed.

**Example:**

```lua
local hookId = exports.ox_inventory:registerHook('openInventory', function(payload)
    print(json.encode(payload, { indent = true }))
    return false
end, {
    print = true,
    inventoryFilter = {
        '^glove[%w]+',
        '^trunk[%w]+',
    }
})
```

Disables gloveboxes and trunks.

### createItem

**Payload:**

- inventoryId?: `number` or `string`
- metadata: `table`
- item: `table`
- count: `number`

Triggered when an item is created, either by buying it, using AddItem, or when converting inventory data.  
By returning a table you can modify or replace the metadata given to an item.

**Example:**

```lua
local hookId = exports.ox_inventory:registerHook('createItem', function(payload)
    print(json.encode(payload, { indent = true }))
    local metadata = payload.metadata
    metadata.label = 'Mineral Water'
    return metadata
end, {
    print = true,
    itemFilter = {
        water = true
    }
})
```

Sets the label for "water" to "Mineral Water".

### buyItem

**Payload:**
- source: `number`
- shopType: `string`
- shopId: `number`
- toInventory: `number`
- toSlot: `number`
- itemName: `string`
- metadata: `table`
- count: `number`
- price: `number`
- totalPrice: `number`
- currency?: `string`

Triggered when an item is about to be purchased and can return `false` to prevent the transaction.

**Example:**

```lua
local hookId = exports.ox_inventory:registerHook('buyItem', function(payload)
    print(json.encode(payload, { indent = true, sort_keys = true }))
    return false
end, {
    print = true,
    itemFilter = {
        water = true
	  },
})

```

Prevents players from purchasing items at General stores.

### craftItem

**Payload:**

- source: `number`
- benchId: `number`
- benchIndex: `number`
- recipe: `table`
  - count: `number`
  - duration: `number`
  - ingredients: `table<string, number>`
  - name: `string`
  - slot: `number`
  - weight: `number`
- toInventory: `number`
- toSlot: `number`

**Example:**

```lua
local hookId = exports.ox_inventory:registerHook('craftItem', function(payload)
    print(json.encode(payload, { indent = true, sort_keys = true }))
    return false
end, {
    print = true,
	itemFilter = {
		lockpick = true
	},
})

```

Prevent lockpicks from being crafted by players.

## removeHooks

```lua
exports.ox_inventory:removeHooks(id)
```

- id?: `number`

Removes a hook created by the invoking resource with the the specified id.  
If no id is specified then all hooks registered by the resource are removed.
