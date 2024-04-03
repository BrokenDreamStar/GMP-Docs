# Description
- Here is an introduction to **Message Component** and how to use it.
- This is an function that can be added directly to the message prompt settings and run its corresponding JSON text.
- You can use this function in the settings of any text prompt message in this plugin (such as Messages.yml, "Messages" option in GUISettings.yml, etc.)
- **Example:**

*This is the normal text message*
```
English:
    ...
	Command-Messages:
	    Unknown-Command: '{prefix}&cUnknown command, please use &6/gmp help &cfor help.'
```
*This is the setup using the Action Bar message component*
```
English:
    ...
	Command-Messages:
	    Unknown-Command: '{"type":"actionbar","text":"{prefix}&cUnknown command, please use &6/gmp help &cfor help."}'
```

---
# Settings
*Note, please use the JSON correction tool to perform self-test after setting*

## Type Settings
- You need to specify the type of the component for the plugin to recognize it!
- **Option:** `{"type":"[Type]"}`
- **Example:** `{"type":"title",......}`
- Please continue to view the tutorial below

## Component Settings

- [**Title**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Message-Component#Title)
- [**ActionBar**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Message-Component#ActionBar)
- [**PlaySound**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Message-Component#PlaySound)
- [**Command**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Message-Component#Command)
- [**Message**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Message-Component#Message)

### Title
- **Type:** `"type":"title"`
- **Necessary elements:** *Please note that some elements have colons or no colons*
```
"fadein":[Fade in time]
"stay":[Stay time]
"fadeout":[Fade out time]
"title":"[Title]"
"subtitle":"[Sub Title]"
```
- **Optional elements:**
```
Select the player to be sent, ALL is all players, you can use a colon ";" to separate to specify multiple players
"players":"[Players]"
```
- **JSON Example:**
```
{
    "type":"title",
    "fadein":0,
    "stay":5,
    "fadeout":0,
    "title":"&a&lThis is title",
    "subtitle":"&7This is subtitle",
    "players":"ALL"
}
```
- **JSON Example:** *(No line breaks, this form should be filled in the settings)*
```
English:
    ...
    [Option]: '{"type":"title","fadein":0,"stay":5,"fadeout":0,"title":"&a&lThis is title","subtitle":"&7This is subtitle","players":"ALL"}'
```

### ActionBar
- **Type:** `"type":"actionbar"`
- **Necessary elements:**
```
"text":"[text]"
```
- **Optional elements:**
```
Select the player to be sent, ALL is all players, you can use a colon ";" to separate to specify multiple players
"players":"[Players]"
```
- **JSON Example:**
```
{
    "type":"actionbar",
    "text":"&9&lThis is action bar",
    "players":"ALL"
}
```
- **JSON Example:** *(No line breaks, this form should be filled in the settings)*
```
English:
    ...
    [Option]: '{"type":"actionbar","text":"&9&lThis is action bar","players":"ALL"}'
```

### PlaySound
- **Type:** `"type":"playsound"`
- **Necessary elements:** *Please note that some elements have colons or no colons*
```
"pitch":[Pitch]
"volume":[Volume]
"sound":"[Sound]"
```
- **Optional elements:**
```
Select the player to be sent, ALL is all players, you can use a colon ";" to separate to specify multiple players
"players":"[Players]"
```
- **JSON Example:**
```
{
    "type":"pitch",
    "pitch":1,
    "volume":1,
    "sound":"UI_BUTTON_CLICK",
    "players":"ALL"
}
```
- **JSON Example:** *(No line breaks, this form should be filled in the settings)*
```
English:
    ...
    [Option]: '{"type":"pitch","pitch":1,"volume":1,"sound":"UI_BUTTON_CLICK","players":"ALL"}'
```

### Command
- **Type:** `"type":"command"`
- **Necessary elements:**
```
**Format:** `[Command type]:[command]`
"Command type" can be "op" 、 "server"、 None
Corresponding to "player execute command with OP permission", "execute console command", "player execute command normally".
For example:
 "server:say hello" - Execute console command: "say hello"
 "op:gamemode creative" - Player execute command with OP permission: "gamemode creative"
 "spawn" - Player execute "spawn" command normally.
**Example:**:
"command":"[Command]"
```
- **JSON Example:**
```
{
    "type":"command",
    "command":"server:say hello!"
}
```
- **JSON Example:** *(No line breaks, this form should be filled in the settings)*
```
English:
    ...
    [Option]: '{"type":"command","command":"server:say hello!"}'
```

### Message
- **Type:** `"type":"message"`
- **Necessary elements:**
```
"text":"[Message]"
```
- **JSON Example:**
```
{
    "type":"message",
    "text":"&a&lThis is an announcement message that everyone can see",
    "players":"ALL"
}
```
- **JSON Example:** *(No line breaks, this form should be filled in the settings)*
```
English:
    ...
    [Option]: '{"type":"message","text":"&a&lThis is an announcement message that everyone can see","players":"ALL"}'
```