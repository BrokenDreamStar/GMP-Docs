# Description
Here is the GUI configuration tutorial about the built-in GUI plugin of this plugin,
This applies to all feature-equipped special GUIs, as well as custom GUIs.
Custom GUI command: "/gmp gui help".

# Compass
- [*Create GUI*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#create-gui)
- [*Basic Settings*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#basic-settings)
- [*Button Settings*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#button-settings)

# Create GUI
*Here is a tutorial on how to create a custom GUI*
1. Create a new file in folder GlobalMarketPlus/GUISettings/CustomGUI/
2. Edit the file name "[GUI name].yml", for example: Example.yml
3. Open the file and write the following in the file (required)
```
English: #The language it belongs to, it needs to be consistent with the "Language" in Config.yml
    GUIName: 'Example' #GUI's name
    GUITitle: 'Example menu' #GUI's title
    GUISize: 54 #GUI size，it must be a multiple of 9
    Custom-Buttons: {} 
	
```
4. Use the command "/gmp reload gui" to complete the create
5. The GUI is created, you can use "/gmp gui open [GUI name] " to open the GUI

---
# Basic Settings
*Works with all GUIs, including all special GUIs*
- [*View Permission*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#view-permission)
- [*Auto Refresh*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#auto-refresh)
- [*Menu Back*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#menu-back)
- [*Buttons Movable*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#buttons-movable)
- [*Special Effects*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#special-effects)
- [*Buttons Label*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Buttons-Label)
- [*Open with Asynchronous*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Open-With-Asynchronous)
- [*Cooldown of Button Click*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Cooldown-of-button-click)

---

### View Permission
- Set the permissions required to open this GUI
- **Option:** `View-Permission: [Permission]`
- **Example:**
```
English:
    ...
    View-Permission: globalmarketplus.custom.gui.view-permission
    ...	
```

### Auto Refresh
- This option is affected by the "Async-Thread-Speed.Updater-Thread" option in Config.yml
- The rate of "Updater-Thread" will determine the lower bound of the GUI refresh rate
- For example: if "Updater-Thread: 1.0" but "Delay: 0.5",
- means that the GUI refresh rate will still be once every 1.0 seconds.
- **Option:**
```
Auto-Refresh:
    Enabled: [true/false] #use or not
    Delay: [Value] #Refresh delay (unit: seconds)
```
- **Example:**
```
English:
    ...
    Auto-Refresh:
        Enabled: true
    	Delay: 1.0
    ...	
```

### Menu Back
- Whether to allow the player to return to this menu with the command "/gmp gui back"
- This command can only be used in button commands
- **Option:** `Allow-To-Return: [true/false]`
- **Example:**
```
English:
    ...
    Allow-To-Return: true
    ...	
```

### Buttons Movable
- Whether to allow the player to freely move some buttons in this GUI,
- this option needs to be used in conjunction with the button's "Movable" option
- With this option enabled, the player will be able to freely move items from the inventory to *empty slots* in the GUI
- Setting the button "Movable: true" will allow the button to be moved freely
- Note: The button click event is triggered by the first time the button is moved
- **Option:**
```
Allow-Move-Buttons:
    #use or not
    Enabled: [true/false] 
    #Whether to return all extraneous items to the player's inventory when closing the GUI
    #For example, items that are put in after opening, and buttons that are allowed to be moved and moved
    Return-Moved-Buttons: [true/false] 
```
- **Example:**
```
English:
    ...
    Allow-Move-Buttons:
        Enabled: true
    	Return-Moved-Buttons: true
    ...	
```

### Special Effects
- Set special effects that are triggered when the GUI is opened and closed
- For the settings of special effects, please refer to: [*Here*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Special-Effects-Settings)
- **Option:**
```
GUI-Effects:
    #When opening the GUI
    On-Open:
	#How many seconds to open the GUI after using the command
	#The default is 0, that is to open immediately
        Open-Delay: [Value]
	#For more special effects, please refer to the above link
        ...
    #When closing the GUI (same as above)
    On-Close:
        ...
		
```
- **Example:**
```
English:
    ...
    GUI-Effects:
	On-Open:
	    Open-Delay: 0.5
	    Messages:
	    - 'You opened the GUI'
	    Broadcast:
	    - 'Player %player_name% opened GUI'
	    Commands:
	    - 'server:say Hello'
	    Titles:
		'ExampleTitle2':
		    Delay: 0
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		     Title: 'Here is title'
		    Sub-Title: 'Here is subtitle'
		'ExampleTitle2':
		    Delay: 0.4
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: 'Here is second title'
		    Sub-Title: 'Here is second subtitle'
	    ActionBars:
	    - '&a&lThis is actionbar 1': 0.4
	    - '&b&lThis is actionbar 2': 0.4
	    - '&c&lThis is actionbar 3': 0.4
	    - '&d&lThis is actionbar 4': 0.4
	    - '&e&lThis is actionbar 5': 0.4
	    ClientSounds:
		'ExampleSound1':
		    Delay: 0
		    Sound: BLOCK_CHEST_OPEN
		     Pitch: 1
		    Volume: 1
		'ExampleSound2':
		    Delay: 0.4
		    Sound: UI_TOAST_CHALLENGE_COMPLETE
		    Pitch: 1
		    Volume: 1
    ...	
```

### Buttons Label
- This feature will add identification codes to each button in the GUI on Lore,
- which can prevent players from removing buttons from the GUI into inventory under the influence of special environments or MODs.
- **Option:** `Button-Label: [true/false]`
- **Example:**
```
English:
    ...
    Button-Label: true
    ...	
```

### Open with Asynchronous
- Whether the task of opening the GUI is set to asynchronous task
- This function is used to support opening the GUI asynchronously to prevent the server from crashing due to the loading of special items.(Enabled by default in versions below 1.12.2)
- **Option:** `Open-With-Asynchronous: [true/false]`
- **Example:**
```
English:
    ...
    Open-With-Asynchronous: true
    ...	
```

### Cooldown of button click
- Whether have cooldown of button click (Global setting)
- This function is used to enable cooldown of **all** buttons to avoid the lags of highly clicked.
- **Option:** `Cooldown-Of-Button-Click: [second]`
- **Example:**
```
English:
    ...
    Cooldown-Of-Button-Click: 1.0
    ...	
```

---
# Button Settings
*This setting applies to GUI special effects, button click events*

## Compass
- [*View Permission*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#View-Permission-1)
- [*Auto Refresh*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Auto-Refresh-1)
- [*Button Location*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Button-Location)
- [*Button Item*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Button-Item)
- [*Button DisplayName*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Button-Displayname)
- [*Button Lore*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Button-Lore)
- [*Item Amount*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Item-Amount)
- [*Item Enchantments*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Item-Enchantments)
- [*Item Flags*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Item-flags)
- [*Custom Model Data*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#custom-model-data)
- [*Head Owner*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#head-owner)
- [*Head Textures*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#head-textures)
- [*Close GUI*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Close-GUI)
- [*Refresh GUI*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Refresh-GUI)
- [*Button Movable*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Button-Movable)
- [*Cooldown of Button Click*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Cooldown-of-button-click-1)
- [*Special Effects (Default Key)*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Special-Effects-Default-Key)
- [*Special Effects (Special Key)*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#Special-Effects-Special-Key)

## Button Basic Settings

### View Permission
- Set the permission required to display this button
- **Setting:** `View-Permission: [Permission]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    View-Permission: globalmarketplus.custom.gui.button
	    ...
    ...	
```

### Auto Refresh
- Set whether this button refreshes automatically
- This feature needs to enable "Auto-Refresh.Enabled" of GUI basic settings to work
- **Setting:** `Auto-Refresh: [true/false]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Auto-Refresh: true
	    ...
    ...	
```

### Cooldown of button click
- Whether have cooldown of button click
- This function is used to enable cooldown of this button to avoid the lags of highly clicked.
- **Option:** `Cooldown-Of-Button-Click: [second]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Cooldown-Of-Button-Click: 1
	    ...
    ...	
```

### Button Location
- Where the button is displayed in the menu.
- **Setting:** `Location: [location]`
- **Description:**
1. display at a specified location: `Slot: [location]`
- Example: `Slot: 54` Displayed in slot 54
2. display at different location: `Slots: [location]`
- Example: `Slots: [1,2,3]` Displayed in slots 1,2,3
3. display at a specified position: `Slot-Of-X: [row]` + `Slot-Of-Y: [column]`
- Example: 
```
Slot-Of-X: 5
Slot-Of-Y: 2
```
- Layout:
```
OOOOOOOOO
OOOOXOOOO
OOOOOOOOO
```
4. display at different specified location: `Slots-Of-X: [rows]` + `Slots-Of-Y: [columns]`
- Example:
```
Slots-Of-X: [3, 7]
Slots-Of-Y: [2, 5]
```
- Layout:
```
OOOOOOOOO
OOXOOOXOO
OOOOOOOOO
OOOOOOOOO
OOXOOOXOO
OOOOOOOOO
```
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Location:
            Slot-Of-X: 5
            Slot-Of-Y: 3
	    ...
    ...	
```

## Button Item Settings

### Button Item
- **Setting:** `Item: [item]`
- **Option:** `Data: [Value]` *Only required below 1.12.2*
- **Example:**
```
1.13+
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Item: ENCHANTED_GOLDEN_APPLE
	    ...
    ...	
1.12.2
English:
    ...
Custom-Buttons:
	'New Button':
	    ...
	    Item: GOLDEN_APPLE
	    Data: 1
	    ...
    ...	
```

### Button DisplayName
- **Setting:** `Name: [name]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Name: '&a&lExample name'
	    ...
    ...	
```

### Button Lore
- **Setting:** `Lores: [description]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Lores: 
	    - '&7This is button description'
	    ...
    ...	
```

### Item Amount
- **Setting:** `Amount: [amount]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Amount: 32
	    ...
    ...	
```

### Item Enchantments
- **Setting:** `Enchantments: [enchantments]`
- **Option:** `'Enchantment': [level]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Enchantments: 
            - UNBREAKING:10
	    ...
    ...	
```

### Item Flags
- This option is only valid for 1.9+
- About item flags: [*Here*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)
- **Setting:** `Options: [parameters]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Options: 
            - 'HIDE_ENCHANTS'
	    ...
    ...	
```

### Custom Model Data
- This option is only valid for 1.14+
- **Setting:** `Custom-Model-Data: [Value]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Custom-Model-Data: 100
	    ...
    ...	
```

### Head Owner
- This option is only available in 1.8+ and works when Item is set to player head
- **Setting:** `Head-Owner: [player name]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Head-Owner: '{player}'
	    ...
    ...	
```

### Head Textures
- This option is only available in 1.8+ and works when Item is set to player head
- **Setting:** `Head-Textures: [textures]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Head-Textures: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmM4ZWExZjUxZjI1M2ZmNTE0MmNhMTFhZTQ1MTkzYTRhZDhjM2FiNWU5YzZlZWM4YmE3YTRmY2I3YmFjNDAifX19
	    ...
    ...	
```

## Button Click Events

### Close GUI
- **Setting:** `Close-GUI: [true/false]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Close-GUI: true
	    ...
    ...	
```

### Refresh GUI
- **Setting:** `Refresh-GUI: [true/false]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Refresh-GUI: true
	    ...
    ...	
```

### Button Movable
- This option needs to enable "Allow-Move-Buttons.Enabled" in GUI basic settings to use
- Click event will triggered by first move
- **Setting:** `Movable: [true/false]`
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Movable: true
	    ...
    ...	
```

### Special Effects (Default key)
- *Special effects refer to clicking messages, executing commands, playing sounds, etc.*
- The effect that occurs when the player clicks this button
- For the settings of special effects, please refer to: [*Here*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C%E7%9A%84%E8%AE%BE%E7%BD%AE)
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Messages:
	    - 'You clicked this button'
	    Broadcast:
	    - 'Player %player_name% clicked a button'
	    Commands:
	    - 'server:say hello'
	    Titles:
	        'ExampleTitle2':
		    Delay: 0
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: 'This is title'
		    Sub-Title: 'This is subtitle'
		'ExampleTitle2':
		        Delay: 0.4
		        Fade-In: 1
		        Stay: 5
		        Fade-Out: 1
		        Title: 'This is second title'
		        Sub-Title: 'This is second subtitle'
		ActionBars:
		- '&a&lThis is actionbar 1': 0.4
		- '&b&lThis is actionbar 2': 0.4
		- '&c&lThis is actionbar 3': 0.4
		- '&d&lThis is actionbar 4': 0.4
		- '&e&lThis is actionbar 5': 0.4
		ClientSounds:
		    'ExampleSound1':
			Delay: 0
			Sound: BLOCK_CHEST_OPEN
			Pitch: 1
			Volume: 1
		    'ExampleSound2':
			Delay: 0.4
			Sound: UI_TOAST_CHALLENGE_COMPLETE
			Pitch: 1
			Volume: 1
	    ...
    ...	
```

### Special Effects (Special key)
- *Special effects refer to clicking messages, executing commands, playing sounds, etc.*
- The effect after the player clicks this button through a special key (such as left and right mouse buttons, Shift click, etc)
- For the settings of special effects, please refer to: [*Here*](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/GUI-Settings#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C%E7%9A%84%E8%AE%BE%E7%BD%AE)
- About click type: [*Here*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.html)
- **Setting:** `Special-Click-Events: [Keys]`
- **Tips:** If using `NUMBER_KEY` as the click type, please add the corresponding number for the click type later, for example: `NUMBER_KEY_5` means using the button with the number 5 to click on the button.
- **Example:**
```
English:
    ...
    Custom-Buttons:
	'New Button':
	    ...
	    Special-Click-Events:
	        SHIFT_RIGHT:
		    Messages:
		    - 'You are used right + Shift to clicked this button.'
		SHIFT_LEFT:
		    Messages:
		    - 'You are used left + Shift to clicked this button.'
		MIDDLE:
		    Messages:
		    - 'You are used middle to clicked this button.'
	    ...
    ...	
```

---
## Special Effects Settings
*This setting applies to GUI special effects, button click events*

### Messages
- **Setting:** `Messages: [Messages]`
- **Example:**
```
Messages:
- 'This is example message.'
```

### Broadcast
- **Setting:** `Broadcast: [Broadcast]`
- **Example:**
```
Broadcast:
- 'This is example broadcast'
```

### Commands
- **Setting:** `Commands: [Commands]`
- **Format:** `[Command type]:[command]`
- "Command type" can be "op" 、 "server"、 None
- Corresponding to "player execute command with OP permission", "execute console command", "player execute command normally".
- For example:
-  "server:say hello" - Execute console command: "say hello"
-  "op:gamemode creative" - Player execute command with OP permission: "gamemode creative"
-  "spawn" - Player execute "spawn" command normally.
- **Example:**:
```
Commands:
- 'server:say hello'
```

### Titles
- **Setting:** `Titles: [Titles]`
- **Format:**
```
'[Title name]':
    #Display delay
    #If there are multiple titles, this option can let it looks like animation
    Delay: [Value]
    #Fade in
    Fade-In: [Value]
    #Stay 
    Stay: [Value]
    #Fade out
    Fade-Out: [Value]
    #Title 
    Title: [Text]
    #Sub title
    Sub-Title: [Text]
```
- **Example:**:
```
Titles:
    'ExampleTitle2':
        Delay: 0
        Fade-In: 1
        Stay: 5
        Fade-Out: 1
        Title: 'Here is title'
        Sub-Title: 'Here is subtitle'
    'ExampleTitle2':
        Delay: 0.4
        Fade-In: 1
        Stay: 5
        Fade-Out: 1
        Title: 'Here is second title'
        Sub-Title: 'Here is second subtitle'
```

### ActionBars
- **Setting:** `ActionBars: [actionbars]`
- **Format:** `'[Text]': [Delay]`
- **Example:**
```
ActionBars:
- '&a&lThis is actionbar 1': 0.4
- '&b&lThis is actionbar 2': 0.4
- '&c&lThis is actionbar 3': 0.4
- '&d&lThis is actionbar 4': 0.4
- '&e&lThis is actionbar 5': 0.4
```

### Play Sounds
- **Setting:** `ClientSounds: [sounds]`
- About sound types: [*Here*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)
- **Format:**
```
'[Example sound]':
    #Delay in playing the sound.
    #If there are multiple sounds, set this option to achieve the effect of playing music
    Delay: [Value]
    #Sound's name
    Sound: [sound]
    #Sound pitch
    Pitch: [Value]
    #Sound volume
    Volume: [Value]
```
- **Example:**
```
ClientSounds:
    'ExampleSound1':
	    Delay: 0
	    Sound: BLOCK_CHEST_OPEN
	    Pitch: 1
	    Volume: 1
    'ExampleSound2':
	    Delay: 0.4
	    Sound: UI_TOAST_CHALLENGE_COMPLETE
	    Pitch: 1
	    Volume: 1
```