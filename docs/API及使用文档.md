# API及使用文档 
本界面主要介绍jar中未混淆部分的API使用方法
主要包路径为`studio.trc.bukkit.globalmarketplus.api`

## GlobalMarket 市场相关

**studio.trc.bukkit.globalmarketplus.api.GlobalMarket:**
- 使用GlobalMarket.getGlobalMarket()获取实例
```方法注释
    /**
     * 重载市场
     */
    public void reloadMarket();
    
    /**
     * 保存市场数据
     */
    public void saveMarket();
    
    /**
     * 对所有商品进行自检（过滤掉所有的过期商品）
     */
    public void checkMerchandises();
    
    /**
     * 获取市场的商品数量
     * @return 
     */
    public int getAmountOfMerchandises();
    
    /**
     * 获取市场的商品数量
     * @param uuid 商家
     * @return 
     */
    public int getAmountOfMerchandises(UUID uuid);
    
    /**
     * 生成新的UID
     * @return 
     */
    public long makeUID();
    
    /**
     * 保存商品数据
     * @param uid 目标UID
     * @param newKey 新的签名
     * @return 
     */
    public boolean saveMerchandise(long uid, String newKey);
    
    /**
     * 下架商品
     * @param uid 商品UID
     * @return 是否成功
     */
    public boolean removeMerchandise(long uid);
    
    /**
     * 下架所有商品
     * @return 是否成功
     */
    public boolean removeAllMerchandises();
    
    /**
     * 将商品数据下载到本地目录
     * @param file 文件
     * @param uid 商品UID
     * @return 是否成功
     */
    public boolean download(File file, long uid);
    
    /**
     * 上传商品
     * @param json 数据
     * @param rewrite 当商品不存在时，是否重写一个进入数据库
     * @return 是否成功
     */
    public boolean upload(JSONObject json, boolean rewrite);
    
    /**
     * 直接往全球市场里塞商品
     * @param merchandise
     * @return 
     */
    public boolean addMerchandise(Merchandise merchandise);

    /**
     * 上架商品
     * @param ownerUUID 商品主人
     * @param ownerName 商品主人的名字
     * @param item 商品本体
     * @param merchandiseType 商品类型
     * @param uploadTime 上架时间
     * @param expireTime 过期时间
     * @param price 价格
     * @param currency 货币系统
     * @param taxed 收取的税额
     * @return 商品
     */
    public Merchandise addMerchandise(UUID ownerUUID, String ownerName, ItemStack item, MerchandiseType merchandiseType, long uploadTime, long expireTime, double price, GlobalMarketEconomy currency, double taxed);

    /**
     * 发起拍卖
     * @param ownerUUID 商品主人
     * @param ownerName 商品主人的名字
     * @param item 商品本体
     * @param merchandiseType 商品类型
     * @param uploadTime 上架时间
     * @param expireTime 过期时间
     * @param price 价格
     * @param currency 货币系统
     * @param taxed 收取的税额
     * @return 拍卖
     */
    public Auction addAuction(UUID ownerUUID, String ownerName, ItemStack item, MerchandiseType merchandiseType, long uploadTime, long expireTime, double price, GlobalMarketEconomy currency, double taxed);
    
    /**
     * 获取识别码
     * @param uid
     * @return 
     */
    public String getKey(long uid);
    
    /**
     * 通过商品UID获取商品实例
     * @param uid 标识码
     * @return 
     */
    public Merchandise getMerchandise(long uid);
    
    /**
     * 获取商店
     * @param merchant 商家
     * @return 
     */
    public MerchantStore getMerchantStore(Merchant merchant);
    
    /**
     * 获取所有的商店
     * @return 
     */
    public List<MerchantStore> getMerchantStores();
    
    /**
     * 获取所有的商品实例
     * @return 
     */
    public List<Merchandise> getMerchandises();
    
    /**
     * 获取某个商家的商品实例
     * @param uuid 商家
     * @return 
     */
    public List<Merchandise> getMerchandises(UUID uuid);
    
    
    /**
     * 获取所有的商品实例
     * @param filter 过滤器
     * @return 
     */
    public List<Merchandise> getMerchandises(Predicate<Merchandise> filter);
    
    /**
     * 获取带UID形式的商品列表
     * @return 
     */
    public Map<Long, Merchandise> getMerchandisesWithUID();
```

## Mailbox 邮箱相关
**studio.trc.bukkit.globalmarketplus.api.Mailbox**
- 使用Mailbox.getMailbox()获取实例
```方法注释
    /**
     * 重载邮箱数据
     */
    public void reloadMail();
    
    /**
     * 对所有邮件进行自检（过滤掉所有的过期邮件）
     */
    public void checkMails();
    
    /**
     * 删除邮件
     * @param mailUID 
     */
    public void removeMail(long... mailUID);
    
    /**
     * 生成新的UID
     * @return 
     */
    public long makeMailUID();
    
    /**
     * 保存邮箱数据
     * @param newKey 新的签名
     * @return 是否成功 
     */
    public boolean saveMail(String newKey);
    
    /**
     * 将邮箱数据下载到本地目录
     * @param file 文件
     * @return 是否成功
     */
    public boolean download(File file);
    
    /**
     * 获取所属玩家的UUID
     * @return 
     */
    public UUID getOwnerUUID();
    
    /**
     * 获取识别码
     * @return 
     */
    public String getKey();
    
    /**
     * 获取所属玩家的名字
     * @return 
     */
    public String getOwnerName();
    
    /**
     * 新增邮件
     * @param ownerUUID 邮件接收人
     * @param ownerName 邮件接收人的名字
     * @param mailType 邮件类型
     * @param sendingTime 寄件时间
     * @param expireTime 过期时间
     * @param item 物品
     * @return 邮件本体
     */
    public ItemMail addMail(UUID ownerUUID, String ownerName, ItemMailType mailType, long sendingTime, long expireTime, ItemStack item);
    
    /**
     * 新增邮件
     * @param ownerUUID 邮件接收人
     * @param ownerName 邮件接收人的名字
     * @param mailType 邮件类型
     * @param sendingTime 寄件时间
     * @param expireTime 过期时间
     * @param item 物品
     * @param senderUUID 发送人的UUID
     * @param senderName 发送人的名字
     * @return 邮件本体
     */
    public ItemMail addMail(UUID ownerUUID, String ownerName, ItemMailType mailType, long sendingTime, long expireTime, ItemStack item, UUID senderUUID, String senderName);
    
    /**
     * 新增邮件
     * @param ownerUUID 邮件接收人
     * @param ownerName 邮件接收人的名字
     * @param mailType 邮件类型
     * @param sendingTime 寄件时间
     * @param expireTime 过期时间
     * @param item 物品
     * @param senderUUID 发送人的UUID
     * @param senderName 发送人的名字
     * @param amount 实际数量
     * @return 邮件本体
     */
    public ItemMail addMail(UUID ownerUUID, String ownerName, ItemMailType mailType, long sendingTime, long expireTime, ItemStack item, UUID senderUUID, String senderName, int amount);
    
    /**
     * 获取邮件
     * @param uid 邮件序号
     * @return 
     */
    public ItemMail getItemMail(long uid);
    
    /**
     * 获取所有的邮件
     * @return 
     */
    public List<ItemMail> getItemMails();
    
    /**
     * 序列化
     * @return 
     */
    public JSONObject serialize();
```

## Merchant 商家相关
**studio.trc.bukkit.globalmarketplus.api.Merchant**
- 使用Merchant.getMerchant()获取实例
```方法注释
    /**
     * 重载数据
     */
    public void reloadData();
    
    /**
     * 刷新数据
     */
    public void refreshData();
    
    /**
     * 设置玩家的默认余额
     * @param money
     */
    public void setDefaultBalance(double money);
    
    /**
     * 执行任务（指的是档案中的Notices和Tasks参数所包含的内容）
     * @param sender
     * @param automatic 是否是自动处理
     */
    public void executeTasks(CommandSender sender, boolean automatic);
    
    /**
     * @param value 
     */
    public void setExecutingTasks(boolean value);
    
    /**
     * 获取玩家默认金钱数量
     * @return 
     */
    public double getDefaultBalance();
    
    /**
     * 获取玩家金钱数量
     * @param currency
     * @return 
     */
    public double getBalance(GlobalMarketEconomy currency);
    
    /**
     * 设置玩家余额
     * @param currency
     * @param money
     * @param recordType
     * @param trader
     * @param addtional
     * @return 
     */
    public boolean setBalance(GlobalMarketEconomy currency, double money, BalanceChangeType recordType, Merchant trader, String addtional);
    
    /**
     * 保存数据
     * @param newKey 新的签名
     * @return 是否成功
     */
    public boolean saveData(String newKey);
    
    /**
     * 将档案数据下载到本地目录
     * @param file 文件
     * @return 是否成功
     */
    public boolean download(File file);
    
    /**
     * 是否正在执行任务
     * @return 
     */
    public boolean isExecutingTasks();
    
    /**
     * 获取玩家的UUID
     * @return 
     */
    public UUID getPlayerUUID();
    
    /**
     * 获取签名
     * @return 
     */
    public String getKey();
    
    /**
     * 获取玩家的名字
     * @return 
     */
    public String getPlayerName();
    
    /**
     * 获取玩家实例
     * @return 
     */
    public Player getPlayer();
    
    /**
     * 获取邮箱
     * @return 
     */
    public Mailbox getMailbox();
    
    /**
     * 获取商家缓存设置
     * @return 
     */
    public MerchantCache getCache();
    
    /**
     * 获取商家个人档案
     * @return 
     */
    public MerchantProfile getProfile();
    
    /**
     * 获取商家的商店
     * @return 
     */
    public MerchantStore getStore();
    
    /**
     * 获取商家所在组
     * @return 
     */
    public MerchantGroup getGroup();
    
    /**
     * 返回序列化JSON数据
     * @return 
     */
    public JSONObject serialize();
    
    /**
     * 获取商家的商品
     * @return 
     */
    public List<Merchandise> getMerchandises();
    
    /**
     * 获取商家的商品
     * @param merchandiseType 商品类型
     * @return 
     */
    public List<Merchandise> getMerchandises(MerchandiseType merchandiseType);
```