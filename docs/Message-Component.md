# 说明
- 这里是关于**消息元件**的介绍，以及使用方法。
- 这是一种可以直接添加在消息提示的选项中，并运行其对应的JSON本文。
- 你可以在本插件任何一处本文提示消息的设置中使用此功能（例如Messages.yml、GUISettings.yml中的“Messages”选项等）
- **示例:**

*这是正常的聊天框本文消息*
```
Simplified-Chinese:
    ...
	Command-Messages:
	    Unknown-Command: '{prefix}&c未知命令, 使用&6/gmp help &c查看帮助'
```
![默认](https://images.gitee.com/uploads/images/2022/0720/232823_b4fbca78_11022810.png "Example-Default.png")
*这是使用了“动作栏”消息元件的设置*
```
Simplified-Chinese:
    ...
	Command-Messages:
	    Unknown-Command: '{"type":"actionbar","text":"{prefix}&c未知命令, 使用&6/gmp help &c查看帮助"}'
```
![消息元件](https://images.gitee.com/uploads/images/2022/0720/232846_9514908b_11022810.png "Example-Component.png")

---
# 设置
*注意，设置完后请使用JSON矫正工具进行自检*

## 类型设置
- 你需要指定元件的类型，才可以使插件识别！
- **选项:** `{"type":"[类型]"}`
- **示例:** `{"type":"title",......}`
- 请接着查看下方的教程

## 元件设置

- [**标题消息**](https://gitee.com/theredcreative/globalmarketplus/wikis/消息元件#标题消息)
- [**动作栏消息**](https://gitee.com/theredcreative/globalmarketplus/wikis/消息元件#动作栏消息)
- [**播放声音**](https://gitee.com/theredcreative/globalmarketplus/wikis/消息元件#播放声音)
- [**执行命令**](https://gitee.com/theredcreative/globalmarketplus/wikis/消息元件#执行命令)
- [**本文消息**](https://gitee.com/theredcreative/globalmarketplus/wikis/消息元件#本文消息)

### 标题消息
- 发送一个标题消息，可以指定**淡入时间**，**停留时间**，**淡出时间**，**主标题**，**子标题**
- **类型:** `"type":"title"`
- **必要元素:** *请注意一些元素有冒号或无冒号*
```
"fadein":[淡入时间]
"stay":[停留时间]
"fadeout":[淡出时间]
"title":"[主标题]"
"subtitle":"[子标题]"
```
- **可选元素:**
```
选定要发送的玩家，ALL为全部人，可以用冒号“;”隔开以指定多个玩家
"players":"[玩家列表]"
```
- **JSON本文例:**
```
{
    "type":"title",
    "fadein":0,
    "stay":5,
    "fadeout":0,
    "title":"&a&l主标题",
    "subtitle":"&7副标题",
    "players":"ALL"
}
```
- **JSON本文例:** *（无换行，填入设置中的应该是这种形式）*
```
Simplified-Chinese:
    ...
    [语言选项]: '{"type":"title","fadein":0,"stay":5,"fadeout":0,"title":"&a&l主标题","subtitle":"&7副标题","players":"ALL"}'
```

### 动作栏消息
- 发送一个动作栏消息
- **类型:** `"type":"actionbar"`
- **必要元素:**
```
"text":"[消息本文]"
```
- **可选元素:**
```
选定要发送的玩家，ALL为全部人，可以用冒号“;”隔开以指定多个玩家
"players":"[玩家列表]"
```
- **JSON本文例:**
```
{
    "type":"actionbar",
    "text":"&9&l这是动作栏消息",
    "players":"ALL"
}
```
- **JSON本文例:** *（无换行，填入设置中的应该是这种形式）*
```
Simplified-Chinese:
    ...
    [语言选项]: '{"type":"actionbar","text":"&9&l这是动作栏消息","players":"ALL"}'
```

### 播放声音
- **类型:** `"type":"playsound"`
- **必要元素:** *请注意一些元素有冒号或无冒号*
```
"pitch":[音调]
"volume":[音量]
"sound":"[声音名字]"
```
- **可选元素:**
```
选定要发送的玩家，ALL为全部人，可以用冒号“;”隔开以指定多个玩家
"players":"[玩家列表]"
```
- **JSON本文例:**
```
{
    "type":"pitch",
    "pitch":1,
    "volume":1,
    "sound":"UI_BUTTON_CLICK",
    "players":"ALL"
}
```
- **JSON本文例:** *（无换行，填入设置中的应该是这种形式）*
```
Simplified-Chinese:
    ...
    [语言选项]: '{"type":"pitch","pitch":1,"volume":1,"sound":"UI_BUTTON_CLICK","players":"ALL"}'
```

### 执行命令
- **类型:** `"type":"command"`
- **必要元素:**
```
命令参数的格式: `[执行类型]:[命令]`
"执行类型" 可以是 "op" 、 "server"、 无
分别对应 "玩家以OP权限执行命令"、 "执行控制台命令"、"玩家执行命令"
使用例: 
 "server:say hello" 在控制台中执行"say hello"命令
 "op:gamemode creative" 玩家以OP权限执行"gamemode creative"命令
 "spawn" 玩家正常执行"spawn"命令
"command":"[命令参数]"
```
- **JSON本文例:**
```
{
    "type":"command",
    "command":"server:say hello!"
}
```
- **JSON本文例:** *（无换行，填入设置中的应该是这种形式）*
```
Simplified-Chinese:
    ...
    [语言选项]: '{"type":"command","command":"server:say hello!"}'
```

### 本文消息
- **类型:** `"type":"message"`
- **必要元素:**
```
"text":"[消息内容]"
```
- **JSON本文例:**
```
{
    "type":"message",
    "text":"&a&l这是一条所有人都能看见的公告消息",
    "players":"ALL"
}
```
- **JSON本文例:** *（无换行，填入设置中的应该是这种形式）*
```
Simplified-Chinese:
    ...
    [语言选项]: '{"type":"message","text":"&a&l这是一条所有人都能看见的公告消息","players":"ALL"}'
```