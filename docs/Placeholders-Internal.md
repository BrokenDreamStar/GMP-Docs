**这里是关于本插件自带的占位符/变量使用方法以及相关规则**

---

# 规范
- **普通文字占位符**: `{[内容]}`
这类占位符是插件自带的占位符，只能在本插件的特殊语言设置中使用
- **PlaceholderAPI插件**: `%[内容]%`
这是PlaceholderAPI提供的占位符，需要安装此插件并启用后才可以使用
- **功能性占位符**: `![内容]!`
这类占位符主要不以代替填充文字信息为主，而是使插件辨别并执行特殊功能的占位符。

---

# 列表

---

### 商家变量
**使用范围**
- *所有*GUI内的标题、按钮设置、点击事件
- 命令 /gmp profile 相关提示消息本文设置
- 命令 /gmp money 相关提示消息本文设置
- 命令 /gmp store 相关提示消息本文设置

**变量列表**
- 商家名字: `{player}`
- 所在组名: `{group}`
- 货币系统: `{currency}`
- 使用分类: `{category}`
- 商家余额: `{balance}`
- 商家余额 (用于显示): `{displayBalance}`
- 邮件数量: `{mails}`
- 商品数量: `{merchandises}`
- 商店名字: `{storeName}`
- 商店第N行简介: `{storeDescription_[行数]}`
- 商品排序: `{merchandiseSort}`
- 商品排序描述: `{merchandiseSortDescription}`
- 邮件排序: `{itemMailSort}`
- 邮件排序描述: `{itemMailSortDescription}`
- 总交易次数: `{statistics_totalTransactionsNumber}`
- 总出售次数: `{statistics_totalSoldNumber}`
- 总收购次数: `{statistics_totalPurchasedItems}`
- 总拍卖次数: `{statistics_totalAuctionNumber}`
- 收入总额: `{statistics_totalEarnedMoney}`
- 支付总额: `{statistics_totalPaidMoney}`

### 目标商家变量
**使用范围**
- CategoryGUI.yml
- MerchantStoreGUI.yml
- MerchantProfileGUI.yml
- MailboxGUI.yml

**变量列表**
- 商家名字: `{target_player}`
- 所在组名: `{target_group}`
- 货币系统: `{target_currency}`
- 使用分类: `{target_category}`
- 商家余额: `{target_balance}`
- 商家余额 (用于显示): `{target_displayBalance}`
- 邮件数量: `{target_mails}`
- 商品数量: `{target_merchandises}`
- 商店名字: `{target_storeName}`
- 商店第N行简介: `{target_storeDescription_[行数]}`
- 商品排序: `{target_merchandiseSort}`
- 商品排序描述: `{target_merchandiseSortDescription}`
- 邮件排序: `{target_itemMailSort}`
- 邮件排序描述: `{target_itemMailSortDescription}`
- 总交易次数: `{target_statistics_totalTransactionsNumber}`
- 总出售次数: `{target_statistics_totalSoldNumber}`
- 总收购次数: `{target_statistics_totalPurchasedItems}`
- 总拍卖次数: `{target_statistics_totalAuctionNumber}`
- 收入总额: `{target_statistics_totalEarnedMoney}`
- 支付总额: `{target_statistics_totalPaidMoney}`

### 默认商品变量
**使用范围**
- 命令 /gmp merchandise 相关提示消息本文设置
- GlobalMarketGUI.yml
- MerchandiseGUI.yml
- MerchantStoreGUI.yml
- SearchGUI.yml
- TransactionGUI.yml

**变量列表**
- 商品类型: `{type}`
- 商品主人: `{player}`
- 商品 UID: `{uid}`
- 商品数量: `{amount}`
- 商品价格: `{price}`
- 零售价格: `{retailPrice}`
- 商品价格（用于显示）: `{displayPrice}`
- 零售价格（用于显示）: `{displayRetailPrice}`
- 商品定金: `{deposit}`
- 货币单位: `{currency}`
- 上架时间: `{uploadTime}`
- 过期时间: `{expireTime}`
- 剩余时间: `{expireTimeLeft}`

### 拍卖类商品变量
**使用范围**
- 命令 /gmp auction 相关提示消息本文设置
- 命令 /gmp merchandise info 相关提示消息本文设置
- GlobalMarketGUI.yml
- AuctionGUI.yml

**变量列表**
- 商品类型: `{type}`
- 商品主人: `{player}`
- 商品 UID: `{uid}`
- 商品数量: `{amount}`
- 最高出价人: `{topBidder}`
- 当前拍价: `{biddingPrice}`
- 商品价格: `{price}`
- 当前拍价（用于显示）: `{displayBiddingPrice}`
- 商品价格（用于显示）: `{displayPrice}`
- 货币单位: `{currency}`
- 上架时间: `{uploadTime}`
- 成交时间: `{expireTime}`
- 剩余时间: `{expireTimeLeft}`

### 邮件变量
**使用范围**
- MailboxGUI.yml

**变量列表**
- 邮件UID: `{uid}`
- 发送者: `{sender}`
- 邮件来源: `{source}`
- 发送时间: `{sendingTime}`
- 过期时间: `{expireTime}`
- 剩余时间: `{expireTimeLeft}`

### 用户组变量
**使用范围**
- 命令 /gmp admin group 相关提示消息本文设置

**变量列表**
- 用户组名字: `{groupName}`
- 是否默认组: `{groupDefault}`
- 用户组权限: `{groupPermission}`
- 商品税率（出售类）: `{taxRate_selling}`
- 商品税率（收购类）: `{taxRate_purchasing}`
- 商品税率（拍卖类）: `{taxRate_bidding}`
- 最高价格（出售类）: `{highestPrice_selling}`
- 最高定金（收购类）: `{highestDeposit_purchasing}`
- 最高价格（拍卖类）: `{highestPrice_bidding}`
- 最低价格（出售类）: `{lowestPrice_selling}`
- 最低定金（收购类）: `{lowestDeposit_purchasing}`
- 最低价格（拍卖类）: `{lowestPrice_bidding}`
- 商品数量（出售类）: `{maximum_selling}`
- 商品数量（收购类）: `{maximum_purchasing}`
- 商品数量（拍卖类）: `{maximum_bidding}`
- 到期时间（邮件类）: `{expirationDate_mail}`
- 到期时间（出售类）: `{expirationDate_selling}`
- 到期时间（收购类）: `{expirationDate_purchasing}`
- 到期时间（拍卖类）: `{expirationDate_bidding}`