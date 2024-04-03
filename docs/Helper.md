**本页面主要收集关于插件一些常见的问题及帮助**

### Vault或其它经济系统相关的设置
- 本插件内置了一个经济系统，命令是/gmp money
- 因此如果你是使用Vault或其它经济插件，你需要手动进行设置。

> 启用Vault或其他经济系统
1. 关闭服务器
2. 打开Config.yml，找到`Economy-Settings`
3. 将`Default-Currency-System: Default`改为`Default-Currency-System: Vault`并保存
4. 确保你的Vault与对应的经济插件（例如Essentials）能够正常运作
5. 启动服务器，完成修改

> 启用多经济模式
1. 关闭服务器
2. 打开Config.yml，找到`Economy-Settings`
3. 将`Multiple-Currencies-System: false`改为`Multiple-Currencies-System: true`并保存
4. 确保你想启用的经济插件能够正常运作
5. 在`Multiple-Currencies-System-List`中根据注释启用目标经济插件并保存
6. 启动服务器，完成修改
PS：上架商品前使用命令`/gmp money currency`以切换其他货币系统作为商品的货币单位

### 从其它插件迁移数据
- 目前可以迁移数据的插件如下：
  - CrazyAuctionsPlus - 所有商品数据+邮件数据
- 迁移步骤：
1. 在插件正常运行后启动服务器
2. 使用命令`/gmp admin database migrate`查看迁移目标的插件的迁移步骤
3. 完成迁移步骤后，使用`/gmp admin database migrate [插件名称]`完成迁移

### 出售、收购、拍卖功能说明与开关
- 全球市场主要以三大功能`出售`、`收购`、`拍卖`为主
- 主要命令为`/gmp market [sell/buy/bid]`或`/market [sell/buy/bid]`
- 若需要禁用其中某项功能，仅需在**Permissions**文件夹的**CommandPermissions.yml**文件中关闭其使用权限即可
- 在这其中，命令`/market bid`为重定向到`/auction start`的命令，因此想取消此权限需要在Auction节点处取消

> 以下是这三大功能相关的其它命令，在禁用功能后建议同时取消相关命令的权限
  - 出售、收购功能
    - `/market [sell/buy/sellinventory/buyinventory]` 四个子命令
    - `/transaction` 及以下所有子命令
	- `/merchandise set` 及以下所有子命令
  - 拍卖功能
    - `/auction` 及以下所有子命令

### MySQL与跨服数据同步
- 本插件支持两种数据储存模式：`SQLite`、`MySQL`
- 其中**MySQL**能够满足跨服数据储存与同步
- 若只是想使用MySQL储存单个服务器的数据，可以不需要阅读此条目

> **启用实时同步** （包括交易提示、拍卖提示）
1. 打开Config.yml，找到MySQL-Storage选项下的`Auto-Refresh`
2. 启用该功能，并根据情况调整刷新的间隔
  - 建议刷新间隔：1秒 - 5秒
  - 若MySQL服务器在外部，建议不要将刷新的间隔调的特别小
    - 请注意，本功能受Config.yml的`Async-Thread-Speed.Updater-Thread`选项影响
    - 刷新的间隔下限受制于Updater-Thread的值
	- 若需要更快的刷新速度，请确保刷新的间隔不可低于Updater-Thread的值
3. 保存文件并使用命令`/gmp reload`完成修改