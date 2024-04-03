**这里是关于本插件挂钩到PlaceholderAPI的占位符的使用方法与列表**

# 使用说明
*以下简称PlaceholderAPI为“PAPI”*
- **在本插件中使用PAPI占位符**
  你可以在以下配置文件中使用PAPI占位符
  - *所有*GUI内的标题、按钮设置、点击事件
  - *所有*JSON消息元件设置
  - Messages.yml 
- **提供的PAPI占位符（可在其他插件中使用）**
  占位符前缀：`%gmpapi_[内容]%`
## 全局占位符
*这些是不需要玩家在线即可使用的占位符*

### 系统级占位符
- 返回全球市场商品数量: `%gmpapi_total%`
- 返回某个玩家的商品数量: `%gmpapi_total_[玩家名]%`
- 返回某个玩家的档案元数据（JSON）: `%gmpapi_merchant_jsondata_[玩家名]%`
- 返回某个玩家的邮箱元数据（JSON）: `%gmpapi_mailbox_jsondata_[玩家名]%`
- 返回某个配置文件中指定路径的值：`%gmpapi_configuration_[路径与文件名]_[选项的路径]%` 
  - 使用例: （此功能仅支持返回固定配置文件的参数，不支持自定义的文件例如JSON元件、自定义GUI配置文件等）
  - %gmpapi_configuration_Config.yml_Prefix% 返回 "&c&lGlobal&4&lMarket&6&lPlus &f&l>>> "
  - %gmpapi_configuration_MessageConfigs/Items.yml_Simplified-Chinese.AIR% 返回 "空气"

### 商品数据
占位符格式: `%gmpapi_globalmarket_[内容]%`

**普通商品**
- 返回商品元数据（JSON）: `%gmpapi_globalmarket_merchandise_[UID]%`
- 返回商品UID: `%gmpapi_globalmarket_merchandise_[UID]_uid%`
- 返回商品主人名字: `%gmpapi_globalmarket_merchandise_[UID]_owner%`
- 返回商品主人UUID: `%gmpapi_globalmarket_merchandise_[UID]_owner_uuid%`
- 返回商品价格: `%gmpapi_globalmarket_merchandise_[UID]_price%`
- 返回商品零售价格: `%gmpapi_globalmarket_merchandise_[UID]_retail_price%`
- 返回商品价格（用于显示）: `%gmpapi_globalmarket_merchandise_[UID]_display_price%`
- 返回商品零售价格（用于显示）: `%gmpapi_globalmarket_merchandise_[UID]_display_retail_price%`
- 返回商品货币单位: `%gmpapi_globalmarket_merchandise_[UID]_currency%`
- 返回商品数量: `%gmpapi_globalmarket_merchandise_[UID]_amount%`
- 返回商品类型: `%gmpapi_globalmarket_merchandise_[UID]_type%`
- 返回商品物品的ID: `%gmpapi_globalmarket_merchandise_[UID]_item%`
- 返回商品物品的显示名称: `%gmpapi_globalmarket_merchandise_[UID]_item_name%`
- 返回商品上架时间: `%gmpapi_globalmarket_merchandise_[UID]_upload_time%`
- 返回商品过期时间: `%gmpapi_globalmarket_merchandise_[UID]_expire_time%`
- 返回商品剩余时间: `%gmpapi_globalmarket_merchandise_[UID]_expire_time_left%`

**拍卖**
- 返回拍卖元数据（JSON）: `%gmpapi_globalmarket_auction_[UID]%`
- 返回拍卖UID: `%gmpapi_globalmarket_auction_[UID]_uid%`
- 返回拍卖主人名字: `%gmpapi_globalmarket_auction_[UID]_owner%`
- 返回拍卖主人UUID: `%gmpapi_globalmarket_auction_[UID]_owner_uuid%`
- 返回拍卖起拍价格: `%gmpapi_globalmarket_auction_[UID]_price%`
- 返回拍卖当前拍价: `%gmpapi_globalmarket_auction_[UID]_bidding_price%`
- 返回拍卖起拍价格（用于显示）: `%gmpapi_globalmarket_auction_[UID]_display_price%`
- 返回拍卖当前拍价（用于显示）: `%gmpapi_globalmarket_auction_[UID]_display_bidding_price%`
- 返回拍卖最高出价人: `%gmpapi_globalmarket_auction_[UID]_top_bidder%`
- 返回拍卖货币单位: `%gmpapi_globalmarket_auction_[UID]_currency%`
- 返回拍卖数量: `%gmpapi_globalmarket_auction_[UID]_amount%`
- 返回拍卖类型: `%gmpapi_globalmarket_auction_[UID]_type%`
- 返回拍卖物品的ID: `%gmpapi_globalmarket_auction_[UID]_item%`
- 返回拍卖物品的显示名称: `%gmpapi_globalmarket_auction_[UID]_item_name%`
- 返回拍卖上架时间: `%gmpapi_globalmarket_auction_[UID]_upload_time%`
- 返回拍卖过期时间: `%gmpapi_globalmarket_auction_[UID]_expire_time%`
- 返回拍卖剩余时间: `%gmpapi_globalmarket_auction_[UID]_expire_time_left%`

---
## 玩家占位符
*这些是返回玩家特定数据的占位符*

### 商品数据
由于商品UID为随机UID，因此考虑到实用性把原本的根据UID查找商品改为根据玩家的商品列表的序号查找商品。
- 返回玩家的第N个商品相关数据: `%gmpapi_merchandise_[序号]_[内容]%`
  - 返回商品元数据（JSON）: `%gmpapi_merchandise_[序号]%`
  - 返回商品UID: `%gmpapi_merchandise_[序号]_uid%`
  - 返回商品主人名字: `%gmpapi_merchandise_[序号]_owner%`
  - 返回商品主人UUID: `%gmpapi_merchandise_[序号]_owner_uuid%`
  - 返回商品价格: `%gmpapi_merchandise_[序号]_price%`
  - 返回商品零售价格: `%gmpapi_merchandise_[序号]_retail_price%`
  - 返回商品货币单位: `%gmpapi_merchandise_[序号]_currency%`
  - 返回商品数量: `%gmpapi_merchandise_[序号]_amount%`
  - 返回商品类型: `%gmpapi_merchandise_[序号]_type%`
  - 返回商品物品的ID: `%gmpapi_merchandise_[序号]_item%`
  - 返回商品物品的显示名称: `%gmpapi_merchandise_[序号]_item_name%`
  - 返回商品上架时间: `%gmpapi_merchandise_[序号]_upload_time%`
  - 返回商品过期时间: `%gmpapi_merchandise_[序号]_expire_time%`
  - 返回商品剩余时间: `%gmpapi_merchandise_[序号]_expire_time_left%`

### 拍卖数据
由于商品UID为随机UID，因此考虑到实用性把原本的根据UID查找商品改为根据玩家的商品列表的序号查找商品。
- 返回玩家的第N个拍卖相关数据: `%gmpapi_auction_[序号]_[内容]%`
  - 返回拍卖元数据（JSON）: `%gmpapi_auction_[序号]%`
  - 返回拍卖UID: `%gmpapi_auction_[序号]_uid%`
  - 返回拍卖主人名字: `%gmpapi_auction_[序号]_owner%`
  - 返回拍卖主人UUID: `%gmpapi_auction_[序号]_owner_uuid%`
  - 返回拍卖起拍价格: `%gmpapi_auction_[序号]_price%`
  - 返回拍卖当前拍价: `%gmpapi_auction_[序号]_bidding_price%`
  - 返回拍卖起拍价格（用于显示）: `%gmpapi_auction_[序号]_display_price%`
  - 返回拍卖当前拍价（用于显示）: `%gmpapi_auction_[序号]_display_bidding_price%`
  - 返回拍卖最高出价人: `%gmpapi_auction_[序号]_top_bidder%`
  - 返回拍卖货币单位: `%gmpapi_auction_[序号]_currency%`
  - 返回拍卖数量: `%gmpapi_auction_[序号]_amount%`
  - 返回拍卖类型: `%gmpapi_auction_[序号]_type%`
  - 返回拍卖物品的ID: `%gmpapi_auction_[序号]_item%`
  - 返回拍卖物品的显示名称: `%gmpapi_auction_[序号]_item_name%`
  - 返回拍卖上架时间: `%gmpapi_auction_[序号]_upload_time%`
  - 返回拍卖过期时间: `%gmpapi_auction_[序号]_expire_time%`
  - 返回拍卖剩余时间: `%gmpapi_auction_[序号]_expire_time_left%`

### 邮箱数据
- 返回玩家邮箱中的第N个邮件相关数据: `%gmpapi_mailbox_[序号]_[内容]%`
  - 返回邮件元数据（JSON）: `%gmpapi_mailbox_[序号]%`
  - 返回邮件UID: `%gmpapi_mailbox_[序号]_uid%`
  - 返回邮件数量: `%gmpapi_mailbox_[序号]_amount%`
  - 返回邮件发送者: `%gmpapi_mailbox_[序号]_sender%`
  - 返回邮件物品的ID: `%gmpapi_mailbox_[序号]_item%`
  - 返回邮件物品的显示名称: `%gmpapi_mailbox_[序号]_item_name%`
  - 返回邮件发送时间: `%gmpapi_mailbox_[序号]_sending_time%`
  - 返回邮件过期时间: `%gmpapi_mailbox_[序号]_expire_time%`
  - 返回邮件剩余时间: `%gmpapi_mailbox_[序号]_expire_time_left%`

### 档案数据
- 返回玩家档案的相关数据: `%gmpapi_merchant_[内容]%`
  - 返回玩家UUID: `%gmpapi_merchant_uuid%`
  - 返回玩家名字: `%gmpapi_merchant_player%`
  - 返回玩家余额: `%gmpapi_merchant_balance%`
  - 返回玩家余额（小数点修正）: `%gmpapi_merchant_balance_fixed%`
  - 返回玩家所在组: `%gmpapi_merchant_group%`
  - 返回玩家的邮件数量: `%gmpapi_merchant_mails%`
  - 返回玩家的商品数量: `%gmpapi_merchant_merchandises%`
  - 返回玩家的货币系统: `%gmpapi_merchant_settings_currency%`
  - 返回玩家的分类系统: `%gmpapi_merchant_settings_category%`
  - 返回玩家的商店名字: `%gmpapi_merchant_settings_store_name%`
  - 返回玩家的商店的第N行简介: `%gmpapi_merchant_settings_store_description_[行数]%`
  - 返回玩家的商品排序: `%gmpapi_merchant_settings_merchandise_sort%`
  - 返回玩家的商品排序描述: `%gmpapi_merchant_settings_merchandise_sort_description%`
  - 返回玩家的邮件排序: `%gmpapi_merchant_settings_item_mail_sort%`
  - 返回玩家的邮件排序描述: `%gmpapi_merchant_settings_item_mail_sort_description%`
  - 返回玩家是否隐藏商品: `%gmpapi_merchant_settings_hidding_merchandises%`
  - 返回玩家是否隐藏名字: `%gmpapi_merchant_settings_hidding_merchant_name%`
  - 返回玩家是否打烊商店: `%gmpapi_merchant_settings_hidding_store_closed%`
  - 返回玩家是否上锁邮箱: `%gmpapi_merchant_settings_hidding_mailbox_locked%`
  - 返回玩家总交易次数: `%gmpapi_merchant_statistics_transactions_number%`
  - 返回玩家总出售次数: `%gmpapi_merchant_statistics_sold_number%`
  - 返回玩家总收购次数: `%gmpapi_merchant_statistics_purchased_items%`
  - 返回玩家总拍卖次数: `%gmpapi_merchant_statistics_auction_number%`
  - 返回玩家收入总额: `%gmpapi_merchant_statistics_earned_money%`
  - 返回玩家支付总额: `%gmpapi_merchant_statistics_paid_money%`
  - 返回玩家元数据（JSON）: `%gmpapi_merchant_jsondata%`
  - 返回玩家档案元数据（JSON）: `%gmpapi_merchant_profile_jsondata%`
  - 返回玩家商店元数据（JSON）: `%gmpapi_merchant_store_jsondata%`