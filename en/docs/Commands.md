*There is commands of GlobalMarketPlus. The main command is "/gmp"*

# Compass
- [**/gmp market** | Global Market commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-market)
- [**/gmp auction** | Auction commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-auction)
- [**/gmp money** | Money management commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-gmp-money)
- [**/gmp merchandise** | Merchandises management commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-merchandise)
- [**/gmp transaction** | Transaction commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-transaction)
- [**/gmp profile** | Merchant profile commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-profile)
- [**/gmp mailbox** | Mailbox commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-mailbox)
- [**/gmp category** | Category commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-category)
- [**/gmp gui** | GUI management commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-gmp-gui)
- [**/gmp reload** | Reload plugin or specific functions.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-gmp-reload)
- [**/gmp admin** | Administrator & Operator commands.](https://github.com/TRCStudioDean/GlobalMarketPlus/wiki/Commands#usage-gmp-admin)

---
# Basic commands

### Usage: /market 
- help | Commands help
- gui [Merchandise Type] [Page] | Open global market GUI
- sell [Price] [Amount] | Sell item in your hand
- buy [Deposit] [Amount] | Purchase item (Same as the one on hand)
- bid [Price] [Amount] | Start a new auction.
- search [Parameters] | Search merchandises
- sellInventory [Price] | Open sell inventory (Sell items in bulk)
- buyInventory [Deposit] | Open buy inventory (Purchase items in bulk)

### Usage: /auction
- help | Commands help.
- start [Price] [Amount] | Start a new auction.
- bid [UID] [Bidding Price] | Bid on an item.
- gui [UID] | Open auction GUI.
- overtime [UID] [Time] | Add time to an auction.
- confirm [UID] | Hammer/Confirm an auction.

### Usage: /money 
- help | Commands help
- info [Player] | View a player's balance
- pay [Player] [Amount] | Pay a certain amount to a player
- set [Player] [Amount] | Set a player's balance
- take [Player] [Amount] | Take a certain balance from a player
- give [Player] [Amount] | Give a certain balance to a player
- currency [Currency] [Player] | Set up a personal currency system

### Usage: /merchandise 
- help | Commands help
- gui [UID] | Open the GUI for merchandise editing
- set [UID]  | Edit a parameter's value of merchandise
- info [UID] | View a merchandise's information
- remove [UID] | Remove a merchandise
- list [Page] [selling/purchasing] | List all of available merchandises
- listall [Page] [selling/purchasing] | List all of merchandises

### Usage: /transaction 
- help | Commands help
- gui [UID] [Amount] | Open transaction GUI
- confirm [UID] [Amount] | Confirm a transaction

### Usage: /profile 
- help | Commands help
- gui | Open profile GUI
- select [Player] | Select a player
- set | Edit profile
- info | View profile information
- refresh [Player] | Refresh profile

### Usage: /mailbox 
- help | Commands help
- gui [Page] [Player] | Open mailbox GUI
- list [Page] [Player] | List all of mails
- pickup [UID]/all [Player] | Pick up mail
- send [Player] [Amount] | Send an item mail
- delete [UID]/all [Player] | Delete a mail
- select [Player] | Select a player

### Usage: /category 
- help | Commands help
- list | List all of categories
- set [Category] [Player] | Set the player's category
- reset [Player] | Reset the player's category
- info [Player] | View the player's category
- gui [Player] | Open categories GUI

---
# Special commands

### Usage: /gmp gui 
- help | Commands help
- list | List all of GUIs
- open [GUI] [Player] [JSON] | Open specified GUI
- back | Return to the last open GUI (only in GUI)

### Usage: /gmp admin 
- help | Commands help
- item | Manage and view serialized items
- cache | View and manage cached data
- group | View user group information
- database | Database management commands
- recorder | Recorder commands
- itemblacklist | Manage items blacklist

### Usage: /gmp reload 
- reload | Reload plugin
- reload help | List all of reload types
- reload config | Reload configuration files
- reload database | Reload database
- reload messages | Reload messages settings
- reload gui | Reload GUI settings
- reload playerdata | Reload players' data
- reload market | Reload global market's data
- reload recorder | Reload recorder's data
- reload group | Reload groups
- reload category | Reload categories