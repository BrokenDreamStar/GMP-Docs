*这里是关于GlobalMarketPlus的所有命令，主命令为 "/gmp".*

---
# 基础命令

### /market 
- help | 查看帮助
- gui [商品类型] [页数] | 打开全球市场主界面
- sell [价格] [数量] | 上架手中的物品
- buy [定金] [数量] | 发起物品收购
- search [参数] | 搜索商品
- sellInventory [价格] | 批量出售商品
- buyInventory [定金] | 批量收购商品

### /auction
- help | 命令帮助
- start [起拍价] [数量] | 发起新的商品拍卖
- bid [商品UID] [竞拍价] | 竞标/投标某个商品
- gui [商品UID] | 打开某场拍卖的GUI
- overtime [商品UID] [时间] | 为某场拍卖加时
- confirm [商品UID] | 成交/结束拍卖

### /money 
- help | 查看帮助
- info [玩家] | 查看某个玩家的余额
- pay [玩家] [金额] | 向某个玩家支付一定的金额
- set [玩家] [金额] | 设置某个玩家的余额
- give [玩家] [金额] | 取走某个玩家一定的余额
- take [玩家] [金额] | 给予某个玩家一定的余额
- currency [货币系统] [玩家] | 设置个人货币系统

### /merchandise 
- help | 命令帮助
- gui [商品UID] | 打开商品编辑GUI
- set [商品UID]  | 编辑一件商品的属性
- info [商品UID] | 显示一个商品的数据
- remove [商品UID] | 移除一件商品
- list [页数] [selling/purchasing] | 列出指定类型的有效的商品
- listall [页数] [selling/purchasing] | 列出指定类型的所有商品

### /transaction 
- help | 查看帮助
- gui [商品UID] [数量] | 打开交易页面
- confirm [商品UID] [数量] | 确认某件商品的交易

### /profile 
- help | 查看帮助
- gui | 打开商家档案界面
- select [玩家] | 选定一个玩家（配合编辑命令使用）
- set | 编辑商家档案
- info | 查看商家档案信息
- refresh [玩家] | 刷新商家档案信息

### /mailbox 
- help | 命令帮助
- gui [页数] [玩家] | 打开商家邮箱界面
- list [页数] [玩家] | 列出商家所有邮件
- pickup [UID]/all [玩家] | 将指定邮件取至背包中
- send [玩家] [数量] | 为某人发送一个物品邮件
- delete [UID]/all [玩家] | 删除某个邮件
- select [玩家] | 选定某个玩家

### /category 
- help | 查看帮助
- list | 列出所有分类
- set [分类] [玩家] | 设置玩家的分类
- reset [玩家] | 重置玩家的分类
- info [玩家] | 查看玩家使用的分类
- gui [玩家] | 打开自己或他人的分类设置GUI

---
# 特殊命令

### /gmp gui 
- help | 查看帮助
- list | 列出所有可用的GUI
- open [GUI名字] [玩家] [JSON参数] | 打开特定的GUI
- back | 返回上一个打开的GUI（只适用于GUI中）

### /gmp admin 
- help | 查看帮助
- item | 管理与查看序列化的物品
- cache | 查看与管理缓存数据
- group | 查看用户组信息
- database | 数据库综合命令
- recorder | 查看与操作记录器
- itemblacklist | 管理物品黑名单

### /gmp reload 
- reload | 重载整个插件
- reload help | 列出重载的类型
- reload config | 重载配置文件
- reload database | 重载数据库
- reload messages | 重载语言设置
- reload gui | 重载GUI界面
- reload playerdata | 重载玩家数据
- reload market | 重载全球市场商品数据
- reload recorder | 重载日志记录器数据
- reload group | 重载用户组数据
- reload category | 重载分类设置