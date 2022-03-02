---
title: Object
---
# Object options
```lua
exports.qtarget:Object(parameters)
```
#### Registers the defined options to display on all non-player peds.

```lua
AddEventHandler('eventname', function(data)
	print(data.label, data.num, data.entity)
end)

exports.qtarget:Object({
	options = {
		{
			event = "eventname",
			icon = "fas fa-box-circle-check",
			label = "action 1",
			num = 1
		},
		{
			event = "eventname",
			icon = "fas fa-box-circle-check",
			label = "action 2",
			num = 2
		},
	},
	distance = 2
})
```

#### Options can be removed by calling the remove export, with all labels as entries in an array.
```lua
exports.qtarget:RemoveObject({
	'action 1', 'action 2'
})
```
