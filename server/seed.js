require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
   
    seed: (req, res) => 
    {
            sequelize.query(`
            drop table if exists items;
            drop table if exists posts;

            create table items(
                id serial primary key,
                image_url varchar(255),
                item_name varchar(255),
                category varchar(255),
                price integer
            );

            create table posts(
                id serial primary key,
                user_name varchar(255),
                photo_url varchar(255),
                comment varchar (255)
            );

            insert into posts(user_name, photo_url, comment)
            values
            ('Gengar','https://drive.google.com/uc?export=view&id=1bbASiOZ0XPYmqK_it17qYeHqA1z2Ez-g',
            'Join Team Meanies! 
            Kekheh!');

            insert into items(image_url, item_name, category, price)
            values
            ('https://drive.google.com/uc?export=view&id=1gelwhxrEnraaJX7ikJa0xJwncmLKUp5G',
            'All-Protect Orb', 
            'Orb', 
            200),

            ('https://drive.google.com/uc?export=view&id=1pfg79wDQ7uaGq_n_5L0Au-4Ln5BCFo3M', 
            'All-Power-Up Orb', 
            'Orb', 
            225),

            ('https://drive.google.com/uc?export=view&id=1mFB8wOzxwtrmCLhzYnEqjo4wnA80bXMM', 
            'Bank Orb', 
            'Orb', 
            100),

            ('https://drive.google.com/uc?export=view&id=1atFXfU7vClV10XDvWV1J6LZbqB55hP0n',
            'Cleanse Orb',
            'Orb', 
            50),

            ('https://drive.google.com/uc?export=view&id=1rEajyeZp_6VamLhS-dBmu4_qzbR5sQWx',
            'Decoy Orb', 
            'Orb', 
            100),

            ('https://drive.google.com/uc?export=view&id=1c8txrABWuIyQSG9arZPQvk35_geHy9S9', 
            'Drought Orb', 
            'Orb',
            75),

            ('https://drive.google.com/uc?export=view&id=1mkO8wH-_WDkkTfvviVGmV7JYVjUFx2Cl', 
            'Escape Orb',
            'Orb',
            150),
            ('https://drive.google.com/uc?export=view&id=1NgxdKucfd9WyHvbSkF6fXXLSWfHfqeds',
            'Evasion Orb', 
            'Orb', 
            125),

            ('https://drive.google.com/uc?export=view&id=1rM3O1u8xs7YaDxUi2V4WKJRZ21Z0CvQw',
            'Foe-Hold Orb', 
            'Orb', 
            175),

            ('https://drive.google.com/uc?export=view&id=1i011MeMpqt5eBWKAdkxvgbLS11e62kkt', 
            'Foe-Seal Orb', 
            'Orb',
            200),

            ('https://drive.google.com/uc?export=view&id=1R7eEmCq0IoGEme9FbtCLILVnD97S_w_I',
            'Hail Orb', 
            'Orb',
            50),

            ('https://drive.google.com/uc?export=view&id=19wL2NO6v3MSy5fWBhx4XD2I8smYinJyS', 
            'Health Orb', 
            'Orb', 
            165),

            ('https://drive.google.com/uc?export=view&id=11H_nmTEWBdzPwBXcKLr-KHswlotLt1OC', 
            'Helper Orb', 
            'Orb', 
            100),

            ('https://drive.google.com/uc?export=view&id=1pTzo-jgb3PezExDQqrj7xI5m64DqUGHD',
            'Inviting Orb',
            'Orb', 
            190),

            ('https://drive.google.com/uc?export=view&id=1LxPRWW4TEgS0ssFC-Q0N7hGnRyhov-8p', 
            'Lasso Orb', 
            'Orb', 
            195),

            ('https://drive.google.com/uc?export=view&id=1oEk1aKo7vZUZO6QnkjTD704n_7AoofjW', 
            'Luminous Orb',
            'Orb', 
            50),

            ('https://drive.google.com/uc?export=view&id=1hz8aRMgTC2XmT13eU4-Ls8Zhg1qkWH3K', 
            'Monster Orb', 
            'Orb', 
            10),

            ('https://drive.google.com/uc?export=view&id=1iQtR19fXbO1GkCvmGQ1X0ml3f7JbmCB9', 
            'Nullify Orb', 
            'Orb', 
            75),

            ('https://drive.google.com/uc?export=view&id=1BmWu0elyuQFS7-QS64y8lQKMWG9vrfFD', 
            'One-Room Orb',
            'Orb',
            200),

            ('https://drive.google.com/uc?export=view&id=12LdJxjXWr9NoTzYhUWRY_GdcHuFF03jD', 
            'One-Shot Orb',
            'Orb',
            250),

            ('https://drive.google.com/uc?export=view&id=1dNsj-wNoK-C_WFuPUBRNIjraNvYS_2UI', 
            'Petrify Orb', 
            'Orb',
            195),

            ('https://drive.google.com/uc?export=view&id=1n5N5hIZAUiPBQbM5k1ZF-xNL6_iBmPjH', 
            'Quick Orb', 
            'Orb',
            175),

            ('https://drive.google.com/uc?export=view&id=1riuqRm0tcvCLFHp5jgBzxVLH37QG0hKr',
            'Radar Orb', 
            'Orb', 
            175),

            ('https://drive.google.com/uc?export=view&id=1UvroiCNd6eAFO3Lt2W_0IL-xiwLdeRT6',
            'Rainy Orb',
            'Orb', 
            50),

            ('https://drive.google.com/uc?export=view&id=1u2xBChQEHri_bIa0dIwbzT5pkH0mz-bT',
            'Rare Quality Orb', 
            'Orb', 
            200),

            ('https://drive.google.com/uc?export=view&id=1Njcu5FiWVgp4enwYalliS5cbAP-97zFy', 
            'Reset Orb',
            'Orb',
            75),

            ('https://drive.google.com/uc?export=view&id=1VQ0WIs7UaT-MdwJXjYYDXWkzlrezu8hN', 
            'Revive All Orb', 
            'Orb', 
            250),

            ('https://drive.google.com/uc?export=view&id=1FcP53eGbDodtnpVTyy6NAN5A8J-9AcvZ', 
            'Rolcall Orb', 
            'Orb',
            150),

            ('https://drive.google.com/uc?export=view&id=1Ir3Hbwxs6jadzyMglmyu-7Wsc5u0YEVb', 
            'Sandy Orb',
            'Orb',
            50),

            ('https://drive.google.com/uc?export=view&id=1-FJ1UMNYabLi5LqIbW4R562ZkU26Mp1V', 
            'Scanner Orb',
            'Orb',
            145),

            ('https://drive.google.com/uc?export=view&id=1n4LEK37fdYMoEVaxvn8immaUzeNt90aA', 
            'See Trap Orb',
            'Orb',
            190),

            ('https://drive.google.com/uc?export=view&id=1TDV370z9gjykrQmtgmLaDgYXfy6k19Pr',
            'Slow Orb',
            'Orb',
            175),

            ('https://drive.google.com/uc?export=view&id=1H4E2zMHATutMDCZuMNZc_DQuBtUJo1vb',
            'Slumber Orb',
            'Orb',
            165),

            ('https://drive.google.com/uc?export=view&id=1YkU9zFZ0tSjkiJm1T0zRj6moo0oSVGz9',
            'Spurn Orb',
            'Orb',
            100),

            ('https://drive.google.com/uc?export=view&id=1oEEmbaxpk6RnD1ck9Y1CKnUbyp9eSAlQ',
            'Storage Orb',
            'Orb',
            220),

            ('https://drive.google.com/uc?export=view&id=11hNrL3dCw6qrOVDv76l08rFymrYdm-1a',
            'Sunny Orb',
            'Orb',
            50),

            ('https://drive.google.com/uc?export=view&id=1ulZzpMonwHLAl3pKICPSNN8P2PVKrcU7',
            'Totter Orb',
            'Orb',
            120),

            ('https://drive.google.com/uc?export=view&id=1s4-9zwWDkPcUBJ74dAEdTzW05axCpzaV', 
            'Trapburst Orb',
            'Orb',
            150),

            ('https://drive.google.com/uc?export=view&id=1x-RdZTSjMyrEEl95echYaej6OoZH38eO', 
            'Trawl Orb',
            'Orb',
            100),

            ('https://drive.google.com/uc?export=view&id=1mZlyXPZbr1SM4NQ7HbzOAhcdcfepSOtt',
            'Weather Lock Orb',
            'Orb',
            75),

            ('https://drive.google.com/uc?export=view&id=1gZepF17LjfOp2V6hH7XxzSYkiBcqWu-U', 
            'WIGGLYTUFF Orb',
            'Orb', 
            300),

            ('https://drive.google.com/uc?export=view&id=1rwGwneR9uqw5wQ_2U2xL8I4_5btAs1-l',
            'Chestnut',
            'Restoring',
            25),

            ('https://drive.google.com/uc?export=view&id=1AvIdGr_9fwL8etm2hUTFlwEdE40a_Yi4',
            'Tiny Apple',
            'Restoring',
            25),

            ('https://drive.google.com/uc?export=view&id=1VvismSTQpwvvPBr6brj4jmcmSnWzVhTb', 
            'Apple',
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=1NL3XANSGz-r_U7MPjt8Zx5QQegWI5-Cq', 
            'Big Apple',
            'Restoring',
            100),

            ('https://drive.google.com/uc?export=view&id=1ieooxKsntoiRHqDxjOGGyQigICYgu-t6', 
            'Perfect Apple',
            'Restoring',
            200),

            ('https://drive.google.com/uc?export=view&id=1G_C3BDqCdspie1KUZE2eLK47CVpsT-Va',
            'Four-Leaf Cookie',
            'Restoring',
            220),

            ('https://drive.google.com/uc?export=view&id=1_ieLdILlDGjQCAPf2njFKTTwekwC7mqI',
            'Mega Donut',
            'Restoring',
            240),

            ('https://drive.google.com/uc?export=view&id=1UBhz0uxaRMMb6_eURzl_Rd9BFu9IB1K_',
            'Sweet Chocolate',
            'Restoring', 
            250),

            ('https://drive.google.com/file/d/1dkYWdugUHB-_AMNLKJsAIBlETm1AAy5K/view',
            'Grimy Food', 
            'Restoring',
            1),

            ('https://drive.google.com/uc?export=view&id=1EaF-B6AZ-4J-YnZntGUt4_lOQcZk06vt',
            'Oran Berry',
            'Restoring', 
            50),

            ('https://drive.google.com/uc?export=view&id=1m8yLoQy9siYqIiS1Mb2ux4q54_w9SY3c',
            'Pecha Berry', 
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=1-CMtuuDbgsMadIO1y4YpGyRB-hIwk-rL',
            'Cheri Berry',
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=1__BCHd0bBvt2Cx-QkR51RDAtULzsggGr',
            'Chesto Berry',
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=108_OOViJ-_7YqvY_0MvHQpTcw9VSN46m', 
            'Rawst Berry', 
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=16l2khzE57gqG-Hc7Gyt2_ZY7qPORxrZY',
            'Sitrus Berry',
            'Restoring',
            50),

            ('https://drive.google.com/uc?export=view&id=1LpmCvt4-ZhNpgBG6PljV4ShbRwiVWxAu',
            'Elixir',
            'Restoring',
            100),

            ('https://drive.google.com/uc?export=view&id=1fQCbKOamRs36aF6Mdcokhe34vDcyK97I',
            'Max Ether',
            'Restoring', 
            175),

            ('https://drive.google.com/uc?export=view&id=1psCczcHlHz-NDWxosOHhytYJZJzom-1N',
            'Calcium', 
            'Restoring',
            220),

            ('https://drive.google.com/uc?export=view&id=1sd1UWzCdEZg-VBqJYfom6Xi725Yr34wP',
            'Carbos', 
            'Restoring', 
            220),
            ('https://drive.google.com/uc?export=view&id=1C8ZVpXv4XyeTX2UNCsU73Mb9vXmRamCe', 
            'Iron', 
            'Restoring', 
            220),

            ('https://drive.google.com/uc?export=view&id=1TZ294Vgbu8guHgAw5YTs6rCQWoDf488N', 
            'Protein', 
            'Restoring',
            220),

            ('https://drive.google.com/uc?export=view&id=1E28cqB2NKxWAro3YJ135Q8oshoAya3yq',
            'Zinc', 
            'Restoring',
            220),

            ('https://drive.google.com/uc?export=view&id=1N7yEaH1zLeY40KsLTPSKydriiNSMFI-k',
            'Accuracy Drink',
            'Restoring',
            300),

            ('https://drive.google.com/uc?export=view&id=1PTgeTbcF5dtVk_KiTO9Zm8YC-ORJ5S0I',
            'Power Drink',
            'Restoring',
            300),

            ('https://drive.google.com/uc?export=view&id=1f0XqzyBSF9tBdCDkwSdCvJrYPsRs1bsE',
            'Ban Seed',
            'Seed',
            100),

            ('https://drive.google.com/uc?export=view&id=1bAkLaoEs1DCOMkHMHORUfHRts70PCssy',
            'Blast Seed',
            'Seed',
            75),

            ('https://drive.google.com/uc?export=view&id=1fxPHFAaxHQcAkdPepb5AuhpxNObXyqVm',
            'Blinker Seed',
            'Seed',
            100),

            ('https://drive.google.com/uc?export=view&id=1aHJNgz0v4rM7JRm--Jm_y7h4TuQhbYU0',
            'Decoy Seed',
            'Seed',
            125),

            ('https://drive.google.com/uc?export=view&id=1BoywaxYs-FRpCRJ0NsikKAoOZaj1TTLW',
            'Doom Seed',
            'Seed',
            175),

            ('https://drive.google.com/uc?export=view&id=1l6TQqkImSzANDJLu44Wv-9iyWZNMvNs3',
            'Empowerment Seed',
            'Seed',
            350),

            ('https://drive.google.com/uc?export=view&id=1jXdFh-H_M7rILUISRKvUVLfdv1hieHQ5',
            'Energy Seed',
            'Seed',
            150),

            ('https://drive.google.com/uc?export=view&id=1jMxbjjQDYR7g53DeaeBObtVMqm7lUSnJ', 
            'Eyedrop Seed',
            'Seed',
            100),

            ('https://drive.google.com/uc?export=view&id=1r60utbSw8YB0lEIOl5pWPJZVJMGVhHOT',
            'Heal Seed',
            'Seed',
            125),

            ('https://drive.google.com/uc?export=view&id=1REC9dlKDOBdafaW-aM1c9Ij81TqLrPuA',
            'Joy Seed',
            'Seed',
            500),

            ('https://drive.google.com/uc?export=view&id=1Dkv-x3_fbZGc4dCQmgS0dGW4V2Zss9FC',
            'Life Seed',
            'Seed',
            200),

            ('https://drive.google.com/uc?export=view&id=1gJ9lQDA6k8d9va2zK0VyglDtMvWp6Qpd',
            'Pure Seed',
            'Seed',
            500),

            ('https://drive.google.com/uc?export=view&id=1rL4fCT7xpEewNrZpF31sl6j1IECJd3BF',
            'Quick Seed',
            'Seed',
            155),

            ('https://drive.google.com/uc?export=view&id=1vndfhla9IGXcdpn0gX6heShdOd44JwcZ',
            'Tiny Reviver Seed',
            'Seed', 
            150),

            ('https://drive.google.com/uc?export=view&id=1wxqJVYH5sXhbIJfC8ireYyBAl0wTAb6W',
            'Reviver Seed', 
            'Seed', 
            300),

            ('https://drive.google.com/uc?export=view&id=1Wr0gMJm06uha5NIGmjrbCT64aJpzBzRm',
            'Sleep Seed',
            'Seed',
            125),

            ('https://drive.google.com/uc?export=view&id=1Nayn1z8Go38PtW7FtCy5k36BcmFJirdp',
            'Stun Seed', 
            'Seed',
            125),

            ('https://drive.google.com/uc?export=view&id=1PQWn_EOS4WlZOlrAi_mWTsDkUcduIAMz', 
            'Totter Seed',
            'Seed',
            150),

            ('https://drive.google.com/uc?export=view&id=1NtvRqCCnTWV0hFOf_zfufEUG38_ZfOlR',
            'Training Seed', 
            'Seed', 
            175),

            ('https://drive.google.com/uc?export=view&id=1CrPF367SHI6dZTq25wb6xG2OEDiAXQDT',
            'Violent Seed',
            'Seed',
            200),

            ('https://drive.google.com/uc?export=view&id=1efOdngRCQtZ4HIo9y0nqwrbPwnbUDd1k',
            'Warp Seed', 
            'Seed', 
            100),

            ('https://drive.google.com/uc?export=view&id=1tT-T5q5Tp_yo-_VpTU7g5_cmIR6CQyQC',
            'Wooden Spike',
            'Throwing',
            75),

            ('https://drive.google.com/uc?export=view&id=1D9IpHEN-uKBHtpw-_gUnZYSGXrSoW17p',
            'Iron Spike',
            'Throwing', 
            150),

            ('https://drive.google.com/uc?export=view&id=1x0WdSurimzy-oUUe8a-Ksp-oyYjy3ydL', 
            'Silver Spike',
            'Throwing',
            200),

            ('https://drive.google.com/uc?export=view&id=1LQyccOXmkOpEEsH6LbTGlRtkwxCLRWJ7',
            'Cacnea Spike', 
            'Throwing', 
            225),

            ('https://drive.google.com/uc?export=view&id=1zCGY2PXbut-fyKID_ziWkdxyR2eU3hrp', 
            'Corsela Spike', 
            'Throwing', 
            250),

            ('https://drive.google.com/uc?export=view&id=1eZK57flX1ghv0M70wuA0HCLJDUiYXq6V',
            'Golden Spike',
            'Throwing', 
            300),

            ('https://drive.google.com/uc?export=view&id=1M_b_Fo9LU_RtI-3p5SYq6G_rT0lhWlwu',
            'Geo-Pebble',
            'Throwing',
            75),

            ('https://drive.google.com/uc?export=view&id=1dFAZsXC8WpQFG3M2EM2WDK8uBArvT6Lk', 
            'Gravelerock',
            'Throwing', 
            150),

            ('https://drive.google.com/uc?export=view&id=1pxpH21UzI6BV013XgAMxUOCBWvKYkbto',
            'Golden Fossil',
            'Throwing', 
            200),

            ('https://drive.google.com/uc?export=view&id=1pKMoua7ia99XRoN-sbyg7B1-wJmdnzik',
            'Confuse Wand', 
            'Wand',
                175),

            ('https://drive.google.com/uc?export=view&id=1RpPiXpjzczyNuCXjO2KY-znBn5Abd3de', 
            'Guiding Wand', 
            'Wand',
            150),

            ('https://drive.google.com/uc?export=view&id=1Sr3PUjD0-_64h8Y_-ddrXZ-59pGy99gQ',
            'HP-Swap Wand',
                'Wand', 
                185),

            ('https://drive.google.com/uc?export=view&id=17xotasQfvOfwAaIeO1qjUl61Ge9pHtHL',
            'Petrify Wand',
                'Wand', 
                195),

            ('https://drive.google.com/uc?export=view&id=1PPYkU7tUHUoyl_aZj3-VOPnvHS3m5M4U',
            'Pounce Wand',
                'Wand', 
                150),

            ('https://drive.google.com/uc?export=view&id=1yi2J9XwqvEmFo0LemHa2gxusLGTNZboo', 
            'Slow Wand',
            'Wand',
                175),

            ('https://drive.google.com/uc?export=view&id=184GO3p_cGEp8QXWEu2tMh8lh5tqchzxP',
            'Slumber Wand', 
            'Wand', 
            175),

            ('https://drive.google.com/uc?export=view&id=1EiDPvLohy-2gwweZWdlQCxm7lngCugd3', 
            'Stayaway Wand', 
            'Wand', 
            185),

            ('https://drive.google.com/uc?export=view&id=13noU_OJAcMU072o0cAktJZUjf3dwh4k_',
            'Warp Wand',
                'Wand',
                195),

            ('https://drive.google.com/uc?export=view&id=1e5NDJglp3UosZFTcp-F4M41ebR2dT7pf',
            'Surround',
                'Wand', 
                200),

            ('https://drive.google.com/file/d/1nynbFUqTJ2k7G4Ry5wEQ5YztZV5QyfD9/view',
            'Switcher Wand',
                'Wand', 
                150),

            ('https://drive.google.com/uc?export=view&id=1ThTRrkNzwJ7On8miIwJqe73xfZIsK2af', 
            'Tunnel Wand',
            'Wand',
                250),

            ('https://drive.google.com/uc?export=view&id=1CRJpwP_GeWQ49Sfy3A_mGwfbacQ99DFl',
            'Two-Edge Wand',
                'Wand',
                165),

            ('https://drive.google.com/uc?export=view&id=1-iu2nfMntIL5jbf4rgBUJ7uIBwUAzXcD',
            'Whirlwind Wand', 
            'Wand', 
            150),

            ('https://drive.google.com/uc?export=view&id=1IRvjMwSlALDP_d6msuAIViU0icx7uGFZ',
                'Goggle Specs',
                'Wearable',
                400),

            ('https://drive.google.com/uc?export=view&id=1xuZBTp27NEgwQKFHh7idLgxZRK0qOmGa',
                'Heavy Specs', 
                'Wearable',
                350),

            ('https://drive.google.com/uc?export=view&id=1CT_XTsb7ro99jsmESWC2x7dWnWHxGzrq',
                'Fickle Specs',
                'Wearable',
                300),

            ('https://drive.google.com/uc?export=view&id=1YWBkrvrD3YoTSoMdro47wrYBvSzfMpXB',
                'Lock-On Specs', 
                'Wearable', 
                420),

            ('https://drive.google.com/uc?export=view&id=1rRElg1Tbqan4nyOsIlfdK9XWsfw95hxR',
                'Scope Lens',
                'Wearable', 
                300),

            ('https://drive.google.com/uc?export=view&id=11WXpgKv_YJEf63r-v59HTLwO5muKdU9x',
                'Insomniscope',
                'Wearable', 
                750),

            ('https://drive.google.com/uc?export=view&id=1xSGkyKJ2O9arqL81qKAVzPuF9-OCUvtR', 
            'X-Ray Specs',
                'Wearable', 
                1000),

            ('https://drive.google.com/uc?export=view&id=16NWag1MiTOyyiX-IMViDhG0LFJrnrl0c',
                'No-Stick Cap',
                'Wearable',
                450),

            ('https://drive.google.com/uc?export=view&id=1A7fU0eXz89T5oYst0Vth9GUs9lysyTws',
                'Big Eater Belt', 
                'Wearable',
                350),

            ('https://drive.google.com/uc?export=view&id=1gcjr54GTy6EJN2OVhzKzXasQ3FglrjJ3', 
            'Cover Band', 
            'Wearable',
                400),

            ('https://drive.google.com/uc?export=view&id=1QJbwTwqFtqKfXh5WXHz5ziYLJ_3_ncAN',
                'Defense Band', 
                'Wearable',
                300),

            ('https://drive.google.com/uc?export=view&id=1SYEEQ73FjnG62-JOw2PBXqRavL3cJlHO',
                ' Deluxe Ribbon',
                'Wearable',
                500),

            ('https://drive.google.com/uc?export=view&id=122UdhoF0GaXKfjKcP0OHiM3gd1eo1pVg',
            'Detect Band',
                'Wearable', 
                500),

            ('https://drive.google.com/uc?export=view&id=11QkLqdvxh8pz9gF7HSbYl9IAcusfL3c9',
                'Efficient Bandana', 
                'Wearable', 
                450),

            ('https://drive.google.com/uc?export=view&id=1docbikjG_JRfIB8W89S8rKP2kSrsogf1', 
            'Explosive Band',
                'Wearable', 
                290),

            ('https://drive.google.com/uc?export=view&id=1vdX41pr2LNXjYgEhTl6fewGg6It4ax1E',
                'Fierce Bandana',
                'Wearable',
                350),

            ('https://drive.google.com/uc?export=view&id=1CyWo6rWxsW_rUB5WJKcRYGFG37QERCQi',
                'Friend Bow', 
                'Wearable',
                700),

            ('https://drive.google.com/uc?export=view&id=1aKXdyFMB8WpoXHeQdsP491eG1FeG54cM', 
            'Heal Ribbon',
                'Wearable', 
                550),

            ('https://drive.google.com/uc?export=view&id=1BwXzU8Z7wyIuPC4xZM6vdpLTZhqYwuWp',
                'Joy Ribbon', 
                'Wearable',
                850),

            ('https://drive.google.com/uc?export=view&id=1nopzJOOK9LtC7cM0HdOAnGPhzvFgyfFk', 
            'Lucky Ribbon',
                'Wearable', 
                800),

            ('https://drive.google.com/uc?export=view&id=1z1sJ2WDzkvEK07y-vqVOgMAYENE8HkXR',
                'Mach Ribbon',
                'Wearable', 
                550),

            ('https://drive.google.com/uc?export=view&id=1IeNobx_MXt47oefg_mTnJMAjHay0aOx1', 
            'Mobile Scarf',
                'Wearable', 
                900),

            ('https://drive.google.com/uc?export=view&id=14sge48ZcbJDeExfqfj5oLDQokHyNL5JA',
                'Munch Belt',
                'Wearable',
                320),

            ('https://drive.google.com/uc?export=view&id=1FjaLe0GW5ty7pvuV8nLyMHG6lyZILQo3',
                'Nullify Bandana',
                'Wearable',
                250),

            ('https://drive.google.com/uc?export=view&id=1YqIuroboeFG--2EP_zCitaD90xMFQq-t', 
            'Pass Scarf',
                'Wearable', 
                400),

            ('https://drive.google.com/uc?export=view&id=1s3RCfCbspTAv_YNnUn0p3-LZZ_vcwLJQ',
                'Pecha Scarf',
                'Wearable', 
                300),

            ('https://drive.google.com/uc?export=view&id=18DRpexl1C4z_8-pOMaJpZ5B0MlrXOj4u',
                'Persim Band',
                'Wearable',
                300), 

            ('https://drive.google.com/uc?export=view&id=1WRJp5tAEtHBDTLIANih1ojenZlP0M9Pn', 
            'Phase Ribbon', 
            'Wearable', 
                650), 

            ('https://drive.google.com/uc?export=view&id=1wX7fSthj5xPHLr96fYjLj6ePc1-06GyA', 
            'Pierce Bandana', 
            'Wearable', 
            500),

            ('https://drive.google.com/uc?export=view&id=1AmeKYenY8EBVrloaVUANg3brcRpQO8X9', 
            'Power Band',
                'Wearable',
                300), 

            ('https://drive.google.com/uc?export=view&id=1S1g8cE6Lye-JPXGb9yy_VlRgS83sU2NH',
                'Prosper Ribbon', 
                'Wearable',
                900),

            ('https://drive.google.com/uc?export=view&id=14Iuk4baDNtiHJWPOVT1_MwbMz0kpSRU3',
                'Recovery Scarf', 
                'Wearable',
                500), 

            ('https://drive.google.com/uc?export=view&id=1-Xe6g2K9u5Hz-TlVmGJnGP6VPbt_ovFU',
                'Reunion Cape', 
                'Wearable',
                510),

            ('https://drive.google.com/uc?export=view&id=1jTFOF29kPfHkFAIr1Vxacpltbx_9N-f0',
                'Sneak Scarf',
                'Wearable',
                390),

            ('https://drive.google.com/uc?export=view&id=11btuH--vEUjYJpFz88C9pMkZlvti5wti',
                'Special Band',
                'Wearable',
                425),

            ('https://drive.google.com/uc?export=view&id=1mteomBFBve2xxZvuEElzmKhW_-AN8hdk',
                'Stamina Band', 
                'Wearable', 
                400), 

            ('https://drive.google.com/uc?export=view&id=1zJSvrPQabvpyFmnP5lrOfwyONFoHkGQ2',
                'Trap Scarf',
                'Wearable',
                375),

            ('https://drive.google.com/uc?export=view&id=1TYmj5oy8T2cF6lWPoZ69moVoOMdU1Q53', 
            'Twist Band', 
            'Wearable',
                325),

            ('https://drive.google.com/uc?export=view&id=1HQSZtaUeTv7iVY3h7MR9FVeX68XftLBO',
                'Warp Scarf',
                'Wearable',
                500),

            ('https://drive.google.com/uc?export=view&id=1R9I3BPU2YdTrspNdBB4433X9Vo8eKLF9',
                'Weather Band',
                'Wearable',
                600), 

            ('https://drive.google.com/uc?export=view&id=10dBUFAPwDfQqn5cZtsjPIff48-Obrk8I',
                'Zinc Band', 
                'Wearable',
                400),

            ('https://drive.google.com/uc?export=view&id=1G0zFHD4OJAiJpeJq3k5YP_j4t439k_ex', 
            'Gold Ribbon', 
            'Wearable', 
            1000);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}