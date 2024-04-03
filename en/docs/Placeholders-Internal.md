**Here is about the placeholder/variable usage and related rules that come with this plugin**

# Specification
- **Common Placeholders**: `{[content]}`
This type of placeholder comes with the plugin, it can only be used in the special language settings of this plugin.
- **PlaceholderAPI Plugin**: `%[content]%`
This is placeholders provided by PlaceholderAPI, which needs to be installed and enabled before it can be used
- **Function Placeholders**: `![content]!`
This type of placeholder is not mainly used to replace the filled text information, but is a placeholder for the plug-in to identify and perform special functions.

---

# List

### Merchant Placeholders
**Scope of use**
- *All* titles, button settings, click events within the GUI
- Command "/gmp profile" prompt messages
- Command "/gmp money" prompt messages
- Command "/gmp store" prompt messages

**Placeholders**
- Merchant name: `{player}`
- Group name: `{group}`
- Currency: `{currency}`
- Category: `{category}`
- Balance: `{balance}`
- Balance (Display): `{displayBalance}`
- Mails: `{mails}`
- Merchandises: `{merchandises}`
- Store name: `{storeName}`
- Store description (which line): `{storeDescription_[line]}`
- Merchandise sort: `{merchandiseSort}`
- Merchandise sort's description: `{merchandiseSortDescription}`
- Mail sort: `{itemMailSort}`
- Mail sort's description: `{itemMailSortDescription}`
- Total number of transactions: `{statistics_totalTransactionsNumber}`
- Total number of sold: `{statistics_totalSoldNumber}`
- Total number of purchased items: `{statistics_totalPurchasedItems}`
- Total number of auction: `{statistics_totalAuctionNumber}`
- Total money of earned: `{statistics_totalEarnedMoney}`
- Total money of paid: `{statistics_totalPaidMoney}`

### Target Merchant Placeholders
**Scope of use**
- CategoryGUI.yml
- MerchantStoreGUI.yml
- MerchantProfileGUI.yml
- MailboxGUI.yml

**Placeholders**
- Merchant name: `{target_player}`
- Group name: `{target_group}`
- Currency: `{target_currency}`
- Category: `{target_category}`
- Balance: `{target_balance}`
- Balance (Display): `{target_displayBalance}`
- Mails: `{target_mails}`
- Merchandises: `{target_merchandises}`
- Store name: `{target_storeName}`
- Store description (which line): `{target_storeDescription_[line]}`
- Merchandise sort: `{target_merchandiseSort}`
- Merchandise sort's description: `{target_merchandiseSortDescription}`
- Mail sort: `{target_itemMailSort}`
- Mail sort's description: `{target_itemMailSortDescription}`
- Total number of transactions: `{target_statistics_totalTransactionsNumber}`
- Total number of sold: `{target_statistics_totalSoldNumber}`
- Total number of purchased items: `{target_statistics_totalPurchasedItems}`
- Total number of auction: `{target_statistics_totalAuctionNumber}`
- Total money of earned: `{target_statistics_totalEarnedMoney}`
- Total money of paid: `{target_statistics_totalPaidMoney}`

### Merchandise Placeholders
**Scope of use**
- Command "/gmp merchandise" prompt messages
- GlobalMarketGUI.yml
- MerchandiseGUI.yml
- MerchantStoreGUI.yml
- SearchGUI.yml
- TransactionGUI.yml

**Placeholders**
- Merchandise type: `{type}`
- Merchandise owner: `{player}`
- Merchandise UID: `{uid}`
- Merchandise amount: `{amount}`
- Merchandise price: `{price}`
- Merchandise price (Display): `{displayPrice}`
- Retail price: `{retailPrice}`
- Retail price (Display): `{displayRetailPrice}`
- Merchandise deposit: `{deposit}`
- Currency unit: `{currency}`
- Upload time: `{uploadTime}`
- Expire time: `{expireTime}`
- Time left: `{expireTimeLeft}`

### Auction Placeholders
**Scope of use**
- Command "/gmp auction" prompt messages
- Command "/gmp merchandise info" prompt messages
- GlobalMarketGUI.yml
- AuctionGUI.yml

**Placeholders**
- Merchandise type: `{type}`
- Merchandise owner: `{player}`
- Merchandise UID: `{uid}`
- Merchandise amount: `{amount}`
- Top bidder: `{topBidder}`
- Bidding price: `{biddingPrice}`
- Starting price: `{price}`
- Bidding price (Display): `{displayBiddingPrice}`
- Starting price (Display): `{displayPrice}`
- Currency unit: `{currency}`
- Upload time: `{uploadTime}`
- Confirm/Expire time: `{expireTime}`
- Time left: `{expireTimeLeft}`

### Mail Placeholders
**Scope of use**
- MailboxGUI.yml

**Placeholders**
- Mail UID: `{uid}`
- Sender: `{sender}`
- Source: `{source}`
- Sending time: `{sendingTime}`
- Expire time: `{expireTime}`
- Time left: `{expireTimeLeft}`

### Group Placeholders
**Scope of use**
- Command "/gmp admin group" prompt messages

**Placeholders**
- Group name: `{groupName}`
- Default group: `{groupDefault}`
- Permission of group: `{groupPermission}`
- Tax rate (Selling): `{taxRate_selling}`
- Tax rate (Purchasing): `{taxRate_purchasing}`
- Tax rate (Bidding): `{taxRate_bidding}`
- Highest price (Selling): `{highestPrice_selling}`
- Highest deposit (Purchasing): `{highestDeposit_purchasing}`
- Highest price (Bidding): `{highestPrice_bidding}`
- Lowest price (Selling): `{lowestPrice_selling}`
- Lowest deposit(Purchasing): `{lowestDeposit_purchasing}`
- Lowest price (Bidding): `{lowestPrice_bidding}`
- Limit of merchandises (Selling): `{maximum_selling}`
- Limit of merchandises (Purchasing): `{maximum_purchasing}`
- Limit of merchandises (Bidding): `{maximum_bidding}`
- Expiration date (Mail): `{expirationDate_mail}`
- Expiration date (Selling): `{expirationDate_selling}`
- Expiration date (Purchasing): `{expirationDate_purchasing}`
- Expiration date (Bidding): `{expirationDate_bidding}`