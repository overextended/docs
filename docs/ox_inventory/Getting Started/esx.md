# ESX

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Compatibility

Ox Inventory is a complete replacement for existing item, inventory, and weapon systems; it is inherently incompatible with ESX and any resources that rely on default behaviour.

- Loadouts do not exist and weapons are treated as items.
- Standard shops and stashes (i.e. esx_shops, esx_weaponshop, and esx_policejob).
- Resources that alter the default esx inventory or provide a ui (i.e. esx_trunkinventory, esx_inventoryhud).

## Installation

- Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (1.6.0+).
- Modify your `server.cfg`, starting ox_inventory immediately after es_extended.

```yaml
start oxmysql
start ox_lib
start es_extended
start qtarget
start ox_inventory
```

<Tabs>
<TabItem value="fresh" label="Clean install" default>

- Execute the query inside [install.sql](https://github.com/overextended/ox_inventory/blob/main/setup/install.sql) to create the ox_inventory database table.

</TabItem>
<TabItem value="convert_esx" label="Convert ESX">

- Execute the query inside [install.sql](https://github.com/overextended/ox_inventory/blob/main/setup/install.sql) to create the ox_inventory database table.
- Open `fxmanifest.lua` and uncomment `server_script 'setup/convert.lua'`.
- Start the server and type `convertinventory esx` into the server console.
- Disable `setup/convert.lua` and restart the server.

</TabItem>
<TabItem value="convert_linden" label="Upgrade from Linden Inventory">

- Execute the query inside [upgrade.sql](https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql).
- Open `fxmanifest.lua` and uncomment `server_script 'setup/convert.lua'`.
- Start the server and type `convertinventory linden` into the server console.
- Disable `setup/convert.lua` and restart the server.

</TabItem>
</Tabs>

## Optional optimisation

All item related functions from xPlayer, such as `xPlayer.getInventoryItem`, have been modified for compatibility purposes; however they are considered deprecated.

The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones.

You should read through the functions section for further information, but the following should give you a decent idea.

<Tabs>
<TabItem value="esx" label="ESX">

```lua
if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then
    xPlayer.removeInventoryItem("acetone", 3)
    xPlayer.removeInventoryItem("antifreeze", 5)
    xPlayer.removeInventoryItem("sudo", 10)
end
```

</TabItem>
<TabItem value="inventory" label="Inventory">

Add the following code somewhere in your resource to cache the exports metatable.

```lua
local ox_inventory = exports.ox_inventory
```

You will be able to reference any functions exposed through the export.

```lua
local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})
if items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then
    ox_inventory:RemoveItem(source, 'acetone', 3)
    ox_inventory:RemoveItem(source, 'antifreeze', 5)
    ox_inventory:RemoveItem(source, 'sudo', 10)
end
```

</TabItem>
</Tabs>
