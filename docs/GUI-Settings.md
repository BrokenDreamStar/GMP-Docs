# 说明
这里是关于本插件的内置GUI插件的GUI配置教程，
适用于所有功能配备的特殊GUI，以及自定义GUI。
自定义GUI的使用命令:“/gmp gui help”

# 创建GUI
*这里是关于如何创建自定义GUI的教程*
1. 创建新的文件到 GlobalMarketPlus/GUISettings/CustomGUI/ 文件夹下
2. 编辑文件名字 “[GUI名字].yml”，例如:Example.yml
3. 打开文件，在文件中写入以下内容（必须）
```
Simplified-Chinese: #所属语言，需要与Config.yml内的Language一致
    GUI-Name: 'Example' #GUI的名字
    GUI-Title: 'Example menu' #GUI界面的标题
    GUI-Size: 54 #GUI的大小，必须为9的倍数
    Custom-Buttons: {} #将要编辑的GUI按钮
	
```
4. 使用命令“/gmp reload gui”完成加载
5. GUI创建完成，接下来使用/gmp gui open [GUI名字] 即可打开该GUI

---
# 基础设置
*适用于所有GUI，包括所有特殊GUI*
- [*权限设置*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#权限设置)
- [*自动刷新*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#自动刷新)
- [*返回菜单*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#返回菜单)
- [*自由移动*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#自由移动)
- [*特殊效果*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#特殊效果)
- [*异步打开*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#异步打开)
- [*按钮冷却*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#按钮冷却)

---

### 权限设置
- 设置打开这个GUI所需要的权限
- **选项:** `View-Permission: [权限]`
- **示例:**
```
Simplified-Chinese:
    ...
    View-Permission: globalmarketplus.custom.gui.view-permission
    ...	
```

### 自动刷新
- 此选项受Config.yml内"Async-Thread-Speed.Updater-Thread"选项影响
- "Updater-Thread"的速率将决定GUI刷新速率的下限
- 例如:若"Updater-Thread: 1.0" 但是 "Delay: 0.5"
- 则GUI刷新速度将依旧是1.0秒一次
- **选项:**
```
Auto-Refresh:
    Enabled: [true/false] #是否启用
    Delay: [数值] #刷新的延迟（单位:秒）
```
- **示例:**
```
Simplified-Chinese:
    ...
    Auto-Refresh:
        Enabled: true
    	Delay: 1.0
    ...	
```

### 返回菜单
- 是否允许玩家通过命令"/gmp gui back"返回到此菜单
- 此命令仅能够在按钮命令中使用
- **选项:** `Allow-To-Return: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Allow-To-Return: true
    ...	
```

### 自由移动
- 是否允许玩家自由移动此GUI中的部分按钮，此选项需要配合按钮的"Movable"选项使用
- 启用此选项，玩家将能够自由地移动背包中的物品到GUI的*空槽位*中
- 若设置按钮"Movable: true"，将使此按钮允许被自由移动
- 注意：第一次移动按钮时会触发按钮点击事件
- **选项:**
```
Allow-Move-Buttons:
    #是否启用
    Enabled: [true/false] 
    #是否在关闭GUI时将所有无关物品返回至玩家背包中
    #例如打开后才放入的物品，还有允许被移动且移动过的按钮
    Return-Moved-Buttons: [true/false] 
```
- **示例**
```
Simplified-Chinese:
    ...
    Allow-Move-Buttons:
        Enabled: true
    	Return-Moved-Buttons: true
    ...	
```

### 特殊效果
- 设置打开与关闭GUI时触发的特殊效果
- 特殊效果的设置请参考: [*这里*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C%E7%9A%84%E8%AE%BE%E7%BD%AE)
- **选项:**
```
GUI-Effects:
    #打开GUI时
    On-Open:
	#使用命令多少秒后再打开GUI
	#默认为0，即立即打开
        Open-Delay: [数值]
	#更多特殊效果请参考上述链接
        ...
    #关闭GUI时（同上）
    On-Close:
        ...
		
```
- **示例**
```
Simplified-Chinese:
    ...
    GUI-Effects:
	On-Open:
	    Open-Delay: 0.5
	    Messages:
	    - '你打开了GUI'
	    Broadcast:
	    - '玩家 %player_name% 打开了GUI'
	    Commands:
	    - 'server:say 你好'
	    Titles:
		'ExampleTitle2':
		    Delay: 0
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: '这是主标题'
		    Sub-Title: '这是子标题'
		'ExampleTitle2':
		    Delay: 0.4
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: '这是第二个标题信息'
		    Sub-Title: '这是子标题'
	    ActionBars:
	    - '&a&l这是动作栏消息1': 0.4
	    - '&b&l这是动作栏消息2': 0.4
	    - '&c&l这是动作栏消息3': 0.4
	    - '&d&l这是动作栏消息4': 0.4
	    - '&e&l这是动作栏消息5': 0.4
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

### 异步打开
- 是否将打开GUI的任务设置为异步任务
- 此选项默认在1.12.2以下服务器版本中启用（1.13+版本可以不需要）
- 如果GUI中包含了可能无法瞬时加载完成的物品（例如加载头颅的皮肤），则建议启用该选项，可避免主线程挂起
- **选项:** `Open-With-Asynchronous: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Open-With-Asynchronous: true
    ...	
```

### 按钮冷却
- 是否启用**全局**按钮点击冷却
- 此选项将为本GUI内所有按钮设置点击的冷却时间（单位秒，可以有小数）
- **选项:** `Cooldown-Of-Button-Click: [时长]`
- **示例:**
```
Simplified-Chinese:
    ...
    Cooldown-Of-Button-Click: 1.0
    ...	
```

---
# 按钮配置
*适用于所有GUI，包括所有特殊GUI*

## 指南针
- [*权限设置*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#权限设置-1)
- [*自动刷新*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#自动刷新-1)
- [*按钮位置*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#按钮位置)
- [*物品设置*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#按钮物品设置)
- [*名字*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#名字)
- [*描述*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#描述)
- [*物品数量*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#物品数量)
- [*附魔效果*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#附魔效果)
- [*特殊参数*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#特殊参数)
- [*自定义模型*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#自定义模型)
- [*头颅主人*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#头颅主人)
- [*头颅纹理*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#头颅纹理)
- [*关闭GUI*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#关闭GUI)
- [*刷新GUI*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#刷新GUI)
- [*按钮可移动*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#按钮可移动)
- [*特殊效果(默认键)*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C(%E9%BB%98%E8%AE%A4%E9%94%AE))
- [*特殊效果(特殊键)*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#特殊效果(特殊键))
- [*按钮冷却*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#按钮冷却-1)

## 基础设置

### 权限设置
- 设置显示这个按钮所需要的权限
- **设置:** `View-Permission: [权限]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    View-Permission: globalmarketplus.custom.gui.button
	    ...
    ...	
```

### 自动刷新
- 设置显示这个按钮是否自动刷新
- 此功能需要启用GUI基础设置的"Auto-Refresh.Enabled"才能起作用
- **设置:** `Auto-Refresh: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Auto-Refresh: true
	    ...
    ...	
```

### 按钮位置
- 按钮在菜单中显示的位置
- **设置:** `Location: [位置]`
- **说明:**
1. 显示在某一指定位置: `Slot: [位置]`
- 例: `Slot: 54` 显示在第54格
2. 显示在不同指定位置: `Slots: [位置列]`
- 例: `Slots: [1,2,3]` 显示在第1、2、3格
3. 显示在某一指定位置: `Slot-Of-X: [行数]` + `Slot-Of-Y: [列数]`
- 例: 
```
Slot-Of-X: 5
Slot-Of-Y: 2
```
- 视图:
```
OOOOOOOOO
OOOOXOOOO
OOOOOOOOO
```
4. 显示在不同指定位置: `Slots-Of-X: [行列]` + `Slots-Of-Y: [竖列]`
- 例:
```
Slots-Of-X: [3, 7]
Slots-Of-Y: [2, 5]
```
- 视图:
```
OOOOOOOOO
OOXOOOXOO
OOOOOOOOO
OOOOOOOOO
OOXOOOXOO
OOOOOOOOO
```
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Location:
            Slot-Of-X: 5
            Slot-Of-Y: 3
	    ...
    ...	
```

## 按钮物品设置

### 物品材质
- **设置:** `Item: [物品ID]`
- **选项:** `Data: [数值]` *仅1.12.2以下需要*
- **示例:**
```
1.13+
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Item: ENCHANTED_GOLDEN_APPLE
	    ...
    ...	
1.12.2
Simplified-Chinese:
    ...
Custom-Buttons:
	'新的按钮':
	    ...
	    Item: GOLDEN_APPLE
	    Data: 1
	    ...
    ...	
```

### 名字
- **设置:** `Name: [名字]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Name: '&a&l示例名字'
	    ...
    ...	
```

### 描述
- **设置:** `Lores: [描述]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Lores: 
	    - '&7这里是按钮描述'
	    - '&e点击触发更多事件'
	    ...
    ...	
```

### 物品数量
- **设置:** `Amount: [数量]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Amount: 32
	    ...
    ...	
```

### 附魔效果
- **设置:** `Enchantments: [附魔]`
- **选项:** `'附魔名称': [附魔等级]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    #耐久十
	    Enchantments: 
            - UNBREAKING:10
	    ...
    ...	
```

### 特殊参数
- 此选项仅1.9+有效
- 相关参数请查看: [*这里*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)
- **设置:** `Options: [参数]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    #隐藏附魔属性
	    Options: 
            - 'HIDE_ENCHANTS'
	    ...
    ...	
```

### 自定义模型 
- 此选项仅1.14+有效
- **设置:** `Custom-Model-Data: [数值]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Custom-Model-Data: 100
	    ...
    ...	
```

### 头颅主人
- 此选项仅1.8+且在Item设置为玩家头颅时有效
- **设置:** `Head-Owner: [玩家名]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    #打开这个GUI的人的头
	    Head-Owner: '{player}'
	    ...
    ...	
```

### 头颅纹理
- 此选项仅1.8+且在Item设置为玩家头颅时有效
- **设置:** `Head-Textures: [纹理]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Head-Textures: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmM4ZWExZjUxZjI1M2ZmNTE0MmNhMTFhZTQ1MTkzYTRhZDhjM2FiNWU5YzZlZWM4YmE3YTRmY2I3YmFjNDAifX19
	    ...
    ...	
```

## 按钮点击事件

### 关闭GUI
- **设置:** `Close-GUI: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Close-GUI: true
	    ...
    ...	
```

### 刷新GUI
- **设置:** `Refresh-GUI: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Refresh-GUI: true
	    ...
    ...	
```

### 按钮可移动
- 此选项需要启用GUI基础设置的"Allow-Move-Buttons.Enabled"才可使用
- 第一次移动时会触发其他点击事件
- **设置:** `Movable: [true/false]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Movable: true
	    ...
    ...	
```

### 按钮冷却
- 是否启用按钮点击冷却
- 此选项将为该按钮设置点击的冷却时间（单位秒，可以有小数）
- **选项:** `Cooldown-Of-Button-Click: [时长]`
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Cooldown-Of-Button-Click: 1
	    ...
    ...	
```

### 特殊效果(默认键)
- *特殊效果指例如点击提示的消息、执行命令、播放声音等*
- 玩家点击这个按钮后产生的效果
- 特殊效果的设置请参考: [*这里*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C%E7%9A%84%E8%AE%BE%E7%BD%AE)
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Messages:
	    - '你点击了这个按钮'
	    Broadcast:
	    - '玩家 %player_name% 点击了按钮'
	    Commands:
	    - 'server:say 你好'
	    Titles:
	        'ExampleTitle2':
		    Delay: 0
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: '这是主标题'
		    Sub-Title: '这是子标题'
		'ExampleTitle2':
		    Delay: 0.4
		    Fade-In: 1
		    Stay: 5
		    Fade-Out: 1
		    Title: '这是第二个标题信息'
		    Sub-Title: '这是子标题'
		ActionBars:
		- '&a&l这是动作栏消息1': 0.4
		- '&b&l这是动作栏消息2': 0.4
		- '&c&l这是动作栏消息3': 0.4
		- '&d&l这是动作栏消息4': 0.4
		- '&e&l这是动作栏消息5': 0.4
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

### 特殊效果(特殊键)
- *特殊效果指例如点击提示的消息、执行命令、播放声音等*
- 玩家通过特殊键位点击这个按钮后的效果（例如鼠标左右键、Shift点击等）
- 特殊效果的设置请参考: [*这里*](https://gitee.com/theredcreative/globalmarketplus/wikis/GUI%E8%AE%BE%E7%BD%AE#%E7%89%B9%E6%AE%8A%E6%95%88%E6%9E%9C%E7%9A%84%E8%AE%BE%E7%BD%AE)
- 键位的类型请查看: [*这里*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.html)
- **设置:** `Special-Click-Events: [键位]`
- **注意:** 如果使用 `NUMBER_KEY` 作为键位，请在后面补充键位对应的数字，例：`NUMBER_KEY_5` 即使用数字5的按键点击了按钮。
- **示例:**
```
Simplified-Chinese:
    ...
    Custom-Buttons:
	'新的按钮':
	    ...
	    Special-Click-Events:
	        SHIFT_RIGHT:
		    Messages:
		    - '你右键+Shift点击了这个按钮'
		SHIFT_LEFT:
		    Messages:
		    - '你左键+Shift点击了这个按钮'
		MIDDLE:
		    Messages:
		    - '你中键点击了这个按钮'
	    ...
    ...	
```

---
## 特殊效果的设置
*此设置适用于GUI特殊效果、按钮点击事件*

### 提示消息
- **设置:** `Messages: [提示消息]`
- **示例:**
```
Messages:
- '消息示例'
```

### 播放公告
- **设置:** `Broadcast: [公告消息]`
- **示例:**
```
Broadcast:
- '公告消息示例'
```

### 命令
- **设置:** `Commands: [命令内容]`
- **格式:** `[执行类型]:[命令]`
- "执行类型" 可以是 "op" 、 "server"、 无
- 分别对应 "玩家以OP权限执行命令"、 "执行控制台命令"、"玩家执行命令"
- 使用: 
-  "server:say hello" 在控制台中执行"say hello"命令
-  "op:gamemode creative" 玩家以OP权限执行"gamemode creative"命令
-  "spawn" 玩家正常执行"spawn"命令
- **示例**:
```
Commands:
- 'server:say 你好'
```

### 标题消息
- **设置:** `Titles: [标题设置]`
- **格式:**
```
'[编号名字]':
    #显示的延迟
    #若有多个标题消息，设置此选项可实现动画效果
    Delay: [数值]
    #淡入时长
    Fade-In: [数值]
    #停留时长
    Stay: [数值]
    #淡出时长
    Fade-Out: [数值]
    #主标题
    Title: [本文信息]
    #子标题
    Sub-Title: [本文信息]
```
- **示例:**:
```
Titles:
    'ExampleTitle2':
	    Delay: 0
	    Fade-In: 1
	    Stay: 5
	    Fade-Out: 1
	    Title: '这是主标题'
	    Sub-Title: '这是子标题'
    'ExampleTitle2':
	    Delay: 0.4
	    Fade-In: 1
	    Stay: 5
	    Fade-Out: 1
	    Title: '这是第二个标题信息'
            Sub-Title: '这是子标题'
```

### 动作栏消息
- **设置:** `ActionBars: [动作栏设置]`
- **格式:** `'[消息内容]': [冷却时间]`
- **示例:**:
```
ActionBars:
- '&a&l这是动作栏消息1': 0.4
- '&b&l这是动作栏消息2': 0.4
- '&c&l这是动作栏消息3': 0.4
- '&d&l这是动作栏消息4': 0.4
- '&e&l这是动作栏消息5': 0.4
```

### 播放的声音
- **设置:** `ClientSounds: [声音设置]`
- 声音的名字请查看: [*这里*](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)
- **格式:**
```
'[编号名字]':
    #播放声音的延迟
    #若有多个声音，设置此选项可实现播放音乐的效果
    Delay: [数值]
    #声音的名字
    Sound: [声音]
    #音调
    Pitch: [数值]
    #音量
    Volume: [数值]
```
- **示例:**
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