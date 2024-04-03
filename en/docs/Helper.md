**This page mainly collects some common problems and help about plugins**

---

# Compass
- [**Vault or other economic system settings**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Helper#vault-or-other-economic-system-settings)
- [**Migrate database from other plugins**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Helper#Migrate-database-from-other-plugins)
- [**About sell, buy, bid's problems**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Helper#About-sell-buy-bids-problems)
- [**MySQL and multi-server data synchronization**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Helper#MySQL-and-multi-server-data-synchronization)

---

### Vault or other economic system settings
- This plugin has a built-in economic system, the command is /gmp money
- So if you are using Vault or other economy plugin, you need to set it up manually.

> Use vault or other economic plugins
1. Close your server.
2. Open Config.yml file and find option "Economy-Settings".
3. Set "Default-Currency-System: Default" to "Default-Currency-System: Vault" and save file.
4. Make sure your Vault.jar is present in the plugins folder with the hooked economy plugin (Vault is a library, you need an economy plugin like Essentials etc to be able to use it!)
5. Start the server.
6. Done.

> How to use multiple currencies system
1. Close your server.
2. Open Config.yml file and find option "Economy-Settings".
3. Set "Multiple-Currencies-System: false" to "Multiple-Currencies-System: true", and then enable the economic plugin you want in "Multiple-Currencies-System-List", finally save file.
4. Make sure the economic plugins you want is working properly.
5. Start the server.
6. Players use command "/gmp money currency" to set currency unit.
7. The next listings will use this currency unit!

### Migrate database from other plugins
- The plugins that can currently migrate data are as follows:
  - CrazyAuctionPlus - All merchandises + All mailboxes
- Migration steps:
  1. Start the server after the plugin is up and running
  2. Use the command `/gmp admin database migrate` to view the migration steps of the plugin for the migration target
  3. After completing the migration steps, use `/gmp admin database migrate [plugin name]` to complete the migration

### About sell, buy, bid's problems
- The global market is mainly based on three major functions: `sell`, `buy`, and `auction`
- The main command is `/gmp market [sell/buy/bid]` or `/market [sell/buy/bid]`
- If you need to disable one of these functions, you only need to disable its use permissions in the **CommandPermissions.yml** file in the **Permissions** folder.
- Among them, the command `/market bid` is redirected to `/auction start`, so if you want to cancel this permission, you need to cancel it at the Auction node

> The following are other commands related to these three functions. After disabling the functions, 
  it is recommended to cancel the permissions of the relevant commands at the same time.
  - Sell, buy function
    - `/market [sell/buy/sellinventory/buyinventory]` four subcommands
    - `/transaction` and all subcommands below
	- `/merchandise set` and all subcommands below
  - Auction function
    - `/auction` and all subcommands below

### MySQL and multi-server data synchronization
- This plugin supports two data storage modes: `SQLite`, `MySQL`
- Among them, **MySQL** can meet the requirements of multi-server data storage and synchronization
- If you just want to use MySQL to store data for a single server, you don't need to read this entry

> **Enable real-time sync** (including transaction alerts, auction alerts)
1. Open Config.yml and find `Auto-Refresh` under `MySQL-Storage` option
2. Enable this feature and adjust the refresh interval according to the situation
  - Recommended refresh interval: 1s - 5s
  - If the MySQL server is external, it is recommended not to adjust the refresh interval to a very small value
    - Note that this feature is affected by the `Async-Thread-Speed.Updater-Thread` option in Config.yml
    - The lower limit of the refresh interval is limited by the value of `Updater-Thread`
	- If a faster refresh rate is required, please ensure that the refresh interval cannot be lower than the value of `Updater-Thread`
3. Save the file and use the command `/gmp reload` to complete the modification