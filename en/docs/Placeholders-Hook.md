**Here is the usage and list of placeholders hooked to PlaceholderAPI by this plugin**

# Instructions for use
*PlaceholderAPI is hereinafter referred to as "PAPI"*
- **Use placeholders of PAPI in this plugin**
  You can use PAPI placeholders in the following configuration files
  - *All* titles, button settings, click events within the GUI
  - *All* JSON component settings
  - Messages.yml 
- **Provided PAPI placeholders (can be used in other plugins)**
  Format: `%gmpapi_[Content]%`
  
---

# Placeholders
- [**Global Placeholders**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Placeholders-(Hook)#global-placeholders)
- [**Player Placeholders**](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Placeholders-(Hook)#player-placeholders)

---
## Global Placeholders
*These are placeholders that don't require the player to be online*

### System placeholders
- Return number of merchandises on global market: `%gmpapi_total%`
- Return number of merchandises of player: `%gmpapi_total_[Player]%`
- Return meta data of player profile (JSON): `%gmpapi_merchant_jsondata_[Player]%`
- Return meta data of player mailbox (JSON): `%gmpapi_mailbox_jsondata_[Player]%`
- Returns the value of the specified path in a configuration file: %gmpapi_configuration_[File path]_[Option Path]%
  - Usage example: (This function only supports returning parameters from fixed configuration files, does not support customized files such as JSON components, custom GUI configuration files, etc.)
  - %gmpapi_configuration_Config.yml_Prefix% -> "&c&lGlobal&4&lMarket&6&lPlus &f&l>>> "
  - %gmpapi_configuration_MessageConfigs/Items.yml_English.DIAMOND_SWORD% -> "Diamond Sword"

### Merchandise placeholders
Format: `%gmpapi_globalmarket_[Content]%`

**Merchandises**
- Return meta data of merchandise (JSON): `%gmpapi_globalmarket_merchandise_[UID]%`
- Return merchandise UID: `%gmpapi_globalmarket_merchandise_[UID]_uid%`
- Return merchandise owner: `%gmpapi_globalmarket_merchandise_[UID]_owner%`
- Return merchandise owner UUID: `%gmpapi_globalmarket_merchandise_[UID]_owner_uuid%`
- Return merchandise price: `%gmpapi_globalmarket_merchandise_[UID]_price%`
- Return merchandise retail price: `%gmpapi_globalmarket_merchandise_[UID]_retail_price%`
- Return merchandise price (Display): `%gmpapi_globalmarket_merchandise_[UID]_display_price%`
- Return merchandise retail price (Display): `%gmpapi_globalmarket_merchandise_[UID]_display_retail_price%`
- Return merchandise currency unit: `%gmpapi_globalmarket_merchandise_[UID]_currency%`
- Return merchandise item amount: `%gmpapi_globalmarket_merchandise_[UID]_amount%`
- Return merchandise type: `%gmpapi_globalmarket_merchandise_[UID]_type%`
- Return merchandise item ID: `%gmpapi_globalmarket_merchandise_[UID]_item%`
- Return merchandise item display name: `%gmpapi_globalmarket_merchandise_[UID]_item_name%`
- Return merchandise upload time: `%gmpapi_globalmarket_merchandise_[UID]_upload_time%`
- Return merchandise expire time: `%gmpapi_globalmarket_merchandise_[UID]_expire_time%`
- Return merchandise time left: `%gmpapi_globalmarket_merchandise_[UID]_expire_time_left%`

**Auction**
- Return meta data of auction (JSON): `%gmpapi_globalmarket_auction_[UID]%`
- Return auction UID: `%gmpapi_globalmarket_auction_[UID]_uid%`
- Return auction owner: `%gmpapi_globalmarket_auction_[UID]_owner%`
- Return auction owner UUID: `%gmpapi_globalmarket_auction_[UID]_owner_uuid%`
- Return auction starting price: `%gmpapi_globalmarket_auction_[UID]_price%`
- Return auction bidding price: `%gmpapi_globalmarket_auction_[UID]_bidding_price%`
- Return auction starting price (Display): `%gmpapi_globalmarket_auction_[UID]_display_price%`
- Return auction bidding price (Display): `%gmpapi_globalmarket_auction_[UID]_display_bidding_price%`
- Return auction top bidder: `%gmpapi_globalmarket_auction_[UID]_top_bidder%`
- Return auction currency unit: `%gmpapi_globalmarket_auction_[UID]_currency%`
- Return auction item amount: `%gmpapi_globalmarket_auction_[UID]_amount%`
- Return auction type: `%gmpapi_globalmarket_auction_[UID]_type%`
- Return auction item ID: `%gmpapi_globalmarket_auction_[UID]_item%`
- Return auction item display name: `%gmpapi_globalmarket_auction_[UID]_item_name%`
- Return auction upload time: `%gmpapi_globalmarket_auction_[UID]_upload_time%`
- Return auction confirm/hammer time: `%gmpapi_globalmarket_auction_[UID]_expire_time%`
- Return auction time left: `%gmpapi_globalmarket_auction_[UID]_expire_time_left%`

---
## Player placeholders
*These are placeholders that return player specific data*

### Merchandise placeholders
Since the UID is a random UID, considering the practicality, the original search for merchandises based on UID is changed to search for merchandises based on the sequence number of the player's product list.
- Returns data about the player's Xth merchandise: `%gmpapi_merchandise_[Sequence]_[Content]%`
  - Return meta data of merchandise (JSON): `%gmpapi_merchandise_[Sequence]%`
  - Return merchandise UID: `%gmpapi_merchandise_[Sequence]_uid%`
  - Return merchandise owner: `%gmpapi_merchandise_[Sequence]_owner%`
  - Return merchandise owner UUID: `%gmpapi_merchandise_[Sequence]_owner_uuid%`
  - Return merchandise price: `%gmpapi_merchandise_[Sequence]_price%`
  - Return merchandise retail price: `%gmpapi_merchandise_[Sequence]_retail_price%`
  - Return merchandise price (Display): `%gmpapi_merchandise_[Sequence]_display_price%`
  - Return merchandise retail price (Display): `%gmpapi_merchandise_[Sequence]_display_retail_price%`
  - Return merchandise currency unit: `%gmpapi_merchandise_[Sequence]_currency%`
  - Return merchandise item amount: `%gmpapi_merchandise_[Sequence]_amount%`
  - Return merchandise type: `%gmpapi_merchandise_[Sequence]_type%`
  - Return merchandise upload time: `%gmpapi_merchandise_[Sequence]_upload_time%`
  - Return merchandise expire time: `%gmpapi_merchandise_[Sequence]_expire_time%`
  - Return merchandise time left: `%gmpapi_merchandise_[Sequence]_expire_time_left%`

### Auction placeholders
Since the UID is a random UID, considering the practicality, the original search for merchandises based on UID is changed to search for merchandises based on the sequence number of the player's product list.
- Returns data about the player's Xth auction: `%gmpapi_auction_[Sequence]_[Content]%`
  - Return meta data of auction (JSON): `%gmpapi_auction_[Sequence]%`
  - Return auction UID: `%gmpapi_auction_[Sequence]_uid%`
  - Return auction owner: `%gmpapi_auction_[Sequence]_owner%`
  - Return auction owner UUID: `%gmpapi_auction_[Sequence]_owner_uuid%`
  - Return auction starting price: `%gmpapi_auction_[Sequence]_price%`
  - Return auction bidding price: `%gmpapi_auction_[Sequence]_bidding_price%`
  - Return auction starting price (Display): `%gmpapi_auction_[Sequence]_display_price%`
  - Return auction bidding price (Display): `%gmpapi_auction_[Sequence]_display_bidding_price%`
  - Return auction top bidder: `%gmpapi_auction_[Sequence]_top_bidder%`
  - Return auction currency unit: `%gmpapi_auction_[Sequence]_currency%`
  - Return auction amount: `%gmpapi_auction_[Sequence]_amount%`
  - Return auction type: `%gmpapi_auction_[Sequence]_type%`
  - Return auction item ID: `%gmpapi_auction_[Sequence]_item%`
  - Return auction item display name: `%gmpapi_auction_[Sequence]_item_name%`
  - Return auction upload time: `%gmpapi_auction_[Sequence]_upload_time%`
  - Return auction confirm/hammer time: `%gmpapi_auction_[Sequence]_expire_time%`
  - Return auction time left: `%gmpapi_auction_[Sequence]_expire_time_left%`

### Mailbox placeholders
- Returns data about the player's Xth item mail: `%gmpapi_mailbox_[Sequence]_[Content]%`
  - Return meta data of mail (JSON): `%gmpapi_mailbox_[Sequence]%`
  - Return mail UID: `%gmpapi_mailbox_[Sequence]_uid%`
  - Return mail amount: `%gmpapi_mailbox_[Sequence]_amount%`
  - Return mail sender: `%gmpapi_mailbox_[Sequence]_sender%`
  - Return mail item ID: `%gmpapi_mailbox_[Sequence]_item%`
  - Return mail item display name: `%gmpapi_mailbox_[Sequence]_item_name%`
  - Return mail sending time: `%gmpapi_mailbox_[Sequence]_sending_time%`
  - Return mail expire time: `%gmpapi_mailbox_[Sequence]_expire_time%`
  - Return mail time left: `%gmpapi_mailbox_[Sequence]_expire_time_left%`

### Profile placeholders
- Returns data about the player's profile: `%gmpapi_merchant_[Content]%`
  - Return player's UUID: `%gmpapi_merchant_uuid%`
  - Return player's name: `%gmpapi_merchant_player%`
  - Return player's balance: `%gmpapi_merchant_balance%`
  - Return player's balance (Display): `%gmpapi_merchant_balance_fixed%`
  - Return player's group: `%gmpapi_merchant_group%`
  - Return player's mails: `%gmpapi_merchant_mails%`
  - Return player's merchandises: `%gmpapi_merchant_merchandises%`
  - Return player's currency: `%gmpapi_merchant_settings_currency%`
  - Return player's category: `%gmpapi_merchant_settings_category%`
  - Return player's store name: `%gmpapi_merchant_settings_store_name%`
  - Return player's Nth line description of the store: `%gmpapi_merchant_settings_store_description_[line]%`
  - Return player's merchandise sort: `%gmpapi_merchant_settings_merchandise_sort%`
  - Return player's merchandise sort's description: `%gmpapi_merchant_settings_merchandise_sort_description%`
  - Return player's item mail sort: `%gmpapi_merchant_settings_item_mail_sort%`
  - Return player's item mail sort's description: `%gmpapi_merchant_settings_item_mail_sort_description%`
  - Return whether to hidding merchandises: `%gmpapi_merchant_settings_hidding_merchandises%`
  - Return whether to hidding merchant name: `%gmpapi_merchant_settings_hidding_merchant_name%`
  - Return whether to closed store: `%gmpapi_merchant_settings_hidding_store_closed%`
  - Return whether to locked mailbox: `%gmpapi_merchant_settings_hidding_mailbox_locked%`
  - Return player's statistics of transactions number: `%gmpapi_merchant_statistics_transactions_number%`
  - Return player's statistics of sold number: `%gmpapi_merchant_statistics_sold_number%`
  - Return player's statistics of purchased number: `%gmpapi_merchant_statistics_purchased_items%`
  - Return player's statistics of auction number: `%gmpapi_merchant_statistics_auction_number%`
  - Return player's statistics of earned money: `%gmpapi_merchant_statistics_earned_money%`
  - Return player's statistics of paid money: `%gmpapi_merchant_statistics_paid_money%`
  - Return meta data of player (JSON): `%gmpapi_merchant_jsondata%`
  - Return meta data of player's profile (JSON): `%gmpapi_merchant_profile_jsondata%`
  - Return meta data of player's store (JSON): `%gmpapi_merchant_store_jsondata%`