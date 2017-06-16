// pages/home/home.js
require('../../utils/util.js')

// 获取小程序实例
var app = getApp()

// 初始化
Page({

    data: {
        moduleList: [
            {
                "sectionId": 1,
                "sectionName": "首页轮播广告",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 25,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 1,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": null,
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 117,
                        "sectionId": 1,
                        "bizId": 6,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "烘焙面包",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/117/mainImg/ed107d16-1cc1-411a-8b1c-8dcf8d4ab988_450x300.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "测试胡九杰面包测试",
                        "sortFlag": 1,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/6/middle/c34bf2df-0616-4df4-b494-5d7f275e8223_180x180.png\",\"virtualName\":\"烘焙面包\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"饼干\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":40,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/41/middle/3f3cea26-c110-4115-a7ac-6e1a92b06661_750x454.jpg\",\"virtualName\":\"面包\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":41,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/51/middle/a69f0dee-16cf-4ed9-a496-5043c819502f_450x300.jpg\",\"virtualName\":\"甜甜圈\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":51,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":6,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 83,
                        "sectionId": 1,
                        "bizId": 187,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "良品铺子 手撕面包 早餐食品糕点蛋糕",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/83/mainImg/6ac5d24d-89ea-4b3c-8907-319860f8308c_1125x585.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"goodsId\":198,\"goodsTag\":\"良品铺子良品铺子17宠爱美食\",\"goodsSkuId\":187,\"storeName\":\"青岛精品超市\",\"skuName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"198\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg;http://117.78.38.130/images/goods/198/big/57e132ef-8367-4b75-93dd-b1d4aa14cd01_50x50.jpg;http://117.78.38.130/images/goods/198/big/2dac6ccf-9033-499d-819d-b49d6f5ea74b_50x50.jpg;http://117.78.38.130/images/goods/198/big/9a3b0598-df20-49e7-b589-347930f249fd_50x50.jpg\",\"storeId\":5,\"goodsName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕 零食小吃330g\",\"coverImage\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 86,
                        "sectionId": 1,
                        "bizId": 75,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "草莓",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/86/mainImg/b889083b-0b68-44f8-a4e2-b3d9a7d8f10b_1125x585.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/75/middle/63dc0110-e4f3-4beb-9dd2-b20711df9857_600x390.jpg\",\"virtualName\":\"草莓\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":75,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 91,
                        "sectionId": 1,
                        "bizId": 201,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "新会员专享特惠香橙500g/2颗",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/91/mainImg/b3171047-aa5c-49db-910b-eba656cf19a7_724x362.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 4,
                        "extendJson": "{\"goodsId\":212,\"goodsTag\":\"热烈欢迎新会员\",\"goodsSkuId\":201,\"storeName\":\"远雄店会员商城\",\"skuName\":\"新会员专享特惠香橙500g/2颗\",\"brandId\":20,\"brandName\":\"白兰地\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"9.9\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/212/big/9e7b516b-79b6-42ea-ab0a-fd96a0a6aff5_420x300.jpg;http://117.78.38.130/images/goods/212/big/c5a67d46-3dbe-4682-a769-cb152d89f987_327x245.jpg\",\"storeId\":50,\"goodsName\":\"新会员专享特惠香橙500g/2颗\",\"coverImage\":\"http://117.78.38.130/images/goods/212/big/9e7b516b-79b6-42ea-ab0a-fd96a0a6aff5_420x300.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 94,
                        "sectionId": 1,
                        "bizId": null,
                        "bizType": 17,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "寿司天下",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/94/mainImg/bf90bde9-6a2f-40bd-b481-823cbb970d23_640x366.jpg",
                        "videoUrl": null,
                        "linkUrl": "http://travel.sohu.com/20160520/n450522777.shtml",
                        "describle": "",
                        "sortFlag": 5,
                        "extendJson": "",
                        "shopId": 2
                    },
                    {
                        "recommendId": 101,
                        "sectionId": 1,
                        "bizId": 1,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "市集餐饮",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/101/mainImg/c77b091f-6d1a-4937-9054-f8712bfa98a1_451x253.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 7,
                        "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"市集餐饮\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"日韩\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":11,\"cateType\":63,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"欧美\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":12,\"cateType\":63,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"中国\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":52,\"cateType\":63,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":1,\"cateType\":63,\"isTag\":0}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 2,
                "sectionName": "首页快速分类",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 27,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": null,
                "sortFlag": 2,
                "sectionBgcolor": null,
                "sectionBgimg": null,
                "sectionTitleimg": null,
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 15,
                        "sectionId": 2,
                        "bizId": 1,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "市集餐饮",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/15/mainImg/624d9007-8ce6-4582-884b-a5bddadcb16c_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"市集餐饮\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"日韩\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":11,\"cateType\":63,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"欧美\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":12,\"cateType\":63,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"中国\",\"cateLevel\":2,\"virtualParentId\":1,\"virtualId\":52,\"cateType\":63,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":1,\"cateType\":63,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 16,
                        "sectionId": 2,
                        "bizId": 2,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "水果蔬菜",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/16/mainImg/b6aa78f1-7338-4410-b791-2611db19c004_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/2/middle/a5ace4f7-a948-47bd-a285-d01ecdfeaa88_179x149.png\",\"virtualName\":\"水果蔬菜\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"芒果\",\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":50,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":2,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 18,
                        "sectionId": 2,
                        "bizId": 22,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "即食海鲜",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/18/mainImg/86a378ae-b1ec-41c9-91ef-8a04d83ad651_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/22/middle/be507f4d-d7c3-4902-8ed1-e46e00379d9b_600x450.png\",\"virtualName\":\"即食海鲜\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 17,
                        "sectionId": 2,
                        "bizId": 3,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "海鲜水产",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/17/mainImg/9a51e4aa-79f3-4107-b948-a76a2276e26a_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"海鲜水产\",\"children\":[{\"virtualName\":\"澳洲龙虾\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":13,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":14,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":15,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":16,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":17,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":18,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":19,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":20,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":21,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"即食海鲜\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":3,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 22,
                        "sectionId": 2,
                        "bizId": 10,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "日用百货",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/22/mainImg/e5a6a411-4b3a-4920-a6e4-19065c3af845_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"virtualName\":\"日用百货\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"一次性用品\",\"cateLevel\":2,\"virtualParentId\":10,\"virtualId\":35,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"厨房用品\",\"cateLevel\":2,\"virtualParentId\":10,\"virtualId\":43,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"文具娱乐\",\"cateLevel\":2,\"virtualParentId\":10,\"virtualId\":44,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"衣物整理\",\"cateLevel\":2,\"virtualParentId\":10,\"virtualId\":45,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":10,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 19,
                        "sectionId": 2,
                        "bizId": 6,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "烘焙面包",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/19/mainImg/d0c8fe15-36e2-41c2-ac18-c7f78817a7fe_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 5,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/6/middle/c34bf2df-0616-4df4-b494-5d7f275e8223_180x180.png\",\"virtualName\":\"烘焙面包\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"饼干\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":40,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/41/middle/44ed869f-db07-4b5e-b861-47adaeacd908_153x62.jpg\",\"virtualName\":\"面包\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":41,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"甜甜圈\",\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":51,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":6,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 20,
                        "sectionId": 2,
                        "bizId": 7,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "酒水饮料",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/20/mainImg/4280ffb1-25aa-4dfd-84b5-3d35bb4c272f_251x300.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 6,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/7/middle/86acd9ab-54ca-4499-87e6-4a33cc63cc01_151x158.png\",\"virtualName\":\"酒水饮料\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"白酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":37,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"果汁\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":38,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"红酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":39,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"冲调饮品\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":46,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":7,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 89,
                        "sectionId": 2,
                        "bizId": 59,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "鸡蛋",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/89/mainImg/001b8046-e8d6-4a86-b166-9e69e5c13ed4_150x150.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 8,
                        "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"鸡蛋\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":5,\"virtualId\":59,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 118,
                        "sectionId": 2,
                        "bizId": 75,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "草莓",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/118/mainImg/de777975-6886-473a-a7ea-157f713ad453_60x60.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "测试草莓",
                        "sortFlag": 10,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/75/middle/63dc0110-e4f3-4beb-9dd2-b20711df9857_600x390.jpg\",\"virtualName\":\"草莓\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":75,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 96,
                        "sectionId": 2,
                        "bizId": 41,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "面包",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/96/mainImg/de4e72a5-c092-4ce8-8c2a-3429fc35777c_300x300.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "测试面包",
                        "sortFlag": 11,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/41/middle/3f3cea26-c110-4115-a7ac-6e1a92b06661_750x454.jpg\",\"virtualName\":\"面包\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":41,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 4,
                "sectionName": "首页独播信息",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 26,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": null,
                "sortFlag": 3,
                "sectionBgcolor": null,
                "sectionBgimg": null,
                "sectionTitleimg": null,
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 104,
                        "sectionId": 4,
                        "bizId": null,
                        "bizType": 17,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "免费榴梿",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/104/mainImg/ceafb166-e091-49e6-9497-ad2e6265d45e_947x668.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "免费啦",
                        "sortFlag": 1,
                        "extendJson": "",
                        "shopId": 2
                    },
                    {
                        "recommendId": 88,
                        "sectionId": 4,
                        "bizId": null,
                        "bizType": 17,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "独播入口零售的老师发的爽肤水测试测试测试1",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/88/mainImg/141156cc-5d4b-4e1b-a6d2-0d177e400f94_451x253.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "详细描述描述里的孙菲菲",
                        "sortFlag": 2,
                        "extendJson": "",
                        "shopId": 2
                    },
                    {
                        "recommendId": 23,
                        "sectionId": 4,
                        "bizId": null,
                        "bizType": 17,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "买澳洲龙虾 99.9一只，限量抢购！",
                        "content": null,
                        "imgUrl": null,
                        "videoUrl": null,
                        "linkUrl": "http://117.78.38.130/m/html/activity/aboutus/index.html",
                        "describle": "限量啦快来抢购啦",
                        "sortFlag": 10,
                        "extendJson": "",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 3,
                "sectionName": "首页新人礼券",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 146,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 4,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": null,
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 24,
                        "sectionId": 3,
                        "bizId": null,
                        "bizType": 17,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "新人领卷",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/24/mainImg/21a97c74-3f98-49cf-9312-5842088e68e2_750x220.png",
                        "videoUrl": null,
                        "linkUrl": "http://117.78.38.130/m/html/activity/hongbao/index.html",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 9,
                "sectionName": "首页美食外卖",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 147,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 5,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": null,
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 26,
                        "sectionId": 9,
                        "bizId": 3,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "美食",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/26/mainImg/d1db24bb-8233-4b4c-b4d1-af2787c31126_247x293.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/3/middle/6516a06a-8928-4a86-b356-bc4e0d98a654_181x156.png\",\"virtualName\":\"海鲜水产\",\"children\":[{\"virtualName\":\"澳洲龙虾\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":13,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":14,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":15,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":16,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":17,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":18,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":19,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":20,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":21,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"即食海鲜\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":3,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 28,
                        "sectionId": 9,
                        "bizId": 7,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "外卖",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/28/mainImg/697ff7e7-6138-4cbe-a240-11b9f9bf0578_250x293.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/7/middle/86acd9ab-54ca-4499-87e6-4a33cc63cc01_151x158.png\",\"virtualName\":\"酒水饮料\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"白酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":37,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"果汁\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":38,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"红酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":39,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"冲调饮品\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":46,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":7,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 120,
                        "sectionId": 9,
                        "bizId": 7,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "外带",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/120/mainImg/26d39a0a-e146-440c-8a1c-d0dfb9523eee_245x290.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/7/middle/86acd9ab-54ca-4499-87e6-4a33cc63cc01_151x158.png\",\"virtualName\":\"酒水饮料\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"白酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":37,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"果汁\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":38,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"红酒\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":39,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"\",\"virtualName\":\"冲调饮品\",\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":46,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":7,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 10,
                "sectionName": "首页优惠专区",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 148,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 6,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/10/mainImg/213c92b2-3258-40b7-90e9-5e886600b366_197x54.png",
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 32,
                        "sectionId": 10,
                        "bizId": 88,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "瓜皮",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/32/mainImg/f5577ec6-1ee0-4d9d-bb1d-7c45f77e3804_735x396.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/88/middle/ccbc1280-6ad7-43bb-8b07-a9162a8846dd_750x700.png\",\"virtualName\":\"瓜皮\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":88,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 33,
                        "sectionId": 10,
                        "bizId": 2,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "新鲜水果",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/33/mainImg/ad670f20-0b07-4650-881a-0beeefd46de5_366x396.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/2/middle/a5ace4f7-a948-47bd-a285-d01ecdfeaa88_179x149.png\",\"virtualName\":\"水果蔬菜\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"芒果\",\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":50,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":2,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 106,
                        "sectionId": 10,
                        "bizId": 22,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "即食海鲜",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/106/mainImg/8f008d04-51a2-41ac-b21d-263eca125222_366x398.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualName\":\"即食海鲜\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 35,
                        "sectionId": 10,
                        "bizId": 188,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "黄金活底蛋糕模具 金色碳钢不粘层轻松易脱模 戚风蛋糕烘焙工具",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/35/mainImg/49923028-9b84-4e27-b972-f14e5e28c505_342x398.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 4,
                        "extendJson": "{\"goodsId\":199,\"goodsTag\":\"做想陪陪的蛋糕最好的选择\",\"goodsSkuId\":188,\"storeName\":\"青岛精品超市\",\"skuName\":\"黄金活底蛋糕模具 金色碳钢不粘层轻松易脱模 戚风蛋糕烘焙工具 \",\"brandId\":26,\"brandName\":\"杰凯诺\",\"shopId\":2,\"salesUnit\":\"个\",\"salePrice\":\"49.9\",\"skuImages\":\"http://117.78.38.130/images/goods/199/big/2997107a-7a8b-4931-85c1-50e38f822ab9_800x800.jpg;http://117.78.38.130/images/goods/199/big/308f795f-7cb4-4b81-a03c-b5f3113228ba_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/199/big/2997107a-7a8b-4931-85c1-50e38f822ab9_800x800.jpg\",\"goodsName\":\"杰凯诺8寸黄金活底蛋糕模具 金色碳钢不粘层轻松易脱模 戚风蛋糕烘焙工具 \",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 36,
                        "sectionId": 10,
                        "bizId": 3,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "海鲜水产",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/36/mainImg/23c860e2-a8cf-4293-b222-57237fc4b972_366x398.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 5,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/3/middle/6516a06a-8928-4a86-b356-bc4e0d98a654_181x156.png\",\"virtualName\":\"海鲜水产\",\"children\":[{\"virtualName\":\"澳洲龙虾\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":13,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":14,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":15,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":16,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":17,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":18,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":19,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":20,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":21,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"即食海鲜\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":3,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 11,
                "sectionName": "首页应季养生",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 149,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 7,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/11/mainImg/b1ee558e-7c51-4ddf-af63-77aa19c50208_195x54.png",
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 38,
                        "sectionId": 11,
                        "bizId": 75,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "草莓",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/38/mainImg/ff7f50bc-0c6e-4a58-aa1a-ca758cf147f9_551x270.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/75/middle/63dc0110-e4f3-4beb-9dd2-b20711df9857_600x390.jpg\",\"virtualName\":\"草莓\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":75,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 39,
                        "sectionId": 11,
                        "bizId": 41,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "面包",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/39/mainImg/9729505e-8910-482e-8efb-88eb649f130a_551x270.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/41/middle/3f3cea26-c110-4115-a7ac-6e1a92b06661_750x454.jpg\",\"virtualName\":\"面包\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":41,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 40,
                        "sectionId": 11,
                        "bizId": 75,
                        "bizType": 18,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "草莓",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/40/mainImg/8370029f-4029-44af-bfaf-ea20f8cb1948_551x270.png",
                        "videoUrl": null,
                        "linkUrl": "http://117.78.38.130/m/html/activity/aboutus/index.html",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"草莓\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":75,\"cateType\":62,\"isTag\":0}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 41,
                        "sectionId": 11,
                        "bizId": 194,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "红酒A1",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/recommend/41/mainImg/cd3bfd2b-33e8-4f57-92c4-835ebf1be67f_551x270.png",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 4,
                        "extendJson": "{\"goodsId\":205,\"goodsTag\":\"好喝不贵\",\"goodsSkuId\":194,\"storeName\":\"青岛精品超市\",\"skuName\":\"红酒A1\",\"brandId\":10,\"brandName\":\"拉菲\",\"shopId\":2,\"salesUnit\":\"瓶\",\"salePrice\":\"200\",\"skuImages\":\"http://117.78.38.130/images/goods/205/big/9351c73e-c838-49ad-bb3f-ca954d5efc11_800x800.jpg;http://117.78.38.130/images/goods/205/big/bdad8d77-e31c-4bd3-aaed-f58ae2929f3d_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/205/big/9351c73e-c838-49ad-bb3f-ca954d5efc11_800x800.jpg\",\"goodsName\":\"红葡萄酒\",\"goodsType\":62}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 12,
                "sectionName": "首页日韩进口",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 150,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 1,
                "extendJson": "",
                "sortFlag": 8,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/12/mainImg/51fd2f13-354f-4db8-87b3-d82490c9580e_185x51.png",
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": [
                    {
                        "sectionId": 27,
                        "sectionName": "商品版块",
                        "sourceType": 20,
                        "channelType": 22,
                        "sectionType": 150,
                        "sectionPosindex": null,
                        "sectionStyle": 104,
                        "hasChildren": 0,
                        "extendJson": "",
                        "sortFlag": 1,
                        "sectionBgcolor": "",
                        "sectionBgimg": null,
                        "sectionTitleimg": null,
                        "sectionPagerows": null,
                        "totalPagecount": null,
                        "children": null,
                        "recommendList": [
                            {
                                "recommendId": 80,
                                "sectionId": 27,
                                "bizId": 189,
                                "bizType": 19,
                                "bizExtend": null,
                                "bizLevel": null,
                                "recommendTitle": "纯黑碳钢不粘6寸活底蛋糕模具烘焙工具",
                                "content": null,
                                "imgUrl": "http://117.78.38.130/images/goods/200/big/5906a718-270a-4fcd-95bf-dc0e5eab82ab_800x800.jpg",
                                "videoUrl": null,
                                "linkUrl": "",
                                "describle": "",
                                "sortFlag": 1,
                                "extendJson": "{\"goodsId\":200,\"goodsTag\":\"戚风蛋糕烘焙工具，选我就对了\",\"goodsSkuId\":189,\"storeName\":\"青岛精品超市\",\"skuName\":\"纯黑碳钢不粘6寸活底蛋糕模具烘焙工具\",\"brandId\":26,\"brandName\":\"杰凯诺\",\"shopId\":2,\"salesUnit\":\"个\",\"salePrice\":\"79\",\"skuImages\":\"http://117.78.38.130/images/goods/200/big/5906a718-270a-4fcd-95bf-dc0e5eab82ab_800x800.jpg;http://117.78.38.130/images/goods/200/big/eaf4b890-1119-45e9-8c46-1820c6275282_800x800.jpg;http://117.78.38.130/images/goods/200/big/06808a8d-a856-4c10-a437-d8a14809de7f_800x800.jpg;http://117.78.38.130/images/goods/200/big/53cbe6ae-5427-4ff7-a844-e5e2d03e1245_800x800.jpg;http://117.78.38.130/images/goods/200/big/cdb5311f-df24-4106-8003-2c4e4b94762d_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/200/big/5906a718-270a-4fcd-95bf-dc0e5eab82ab_800x800.jpg\",\"goodsName\":\"纯黑碳钢不粘6寸活底蛋糕模具\",\"goodsType\":62}",
                                "shopId": 2
                            },
                            {
                                "recommendId": 81,
                                "sectionId": 27,
                                "bizId": 186,
                                "bizType": 19,
                                "bizExtend": null,
                                "bizLevel": null,
                                "recommendTitle": "手撕面包原味",
                                "content": null,
                                "imgUrl": "http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg",
                                "videoUrl": null,
                                "linkUrl": "",
                                "describle": "",
                                "sortFlag": 2,
                                "extendJson": "{\"goodsId\":197,\"goodsTag\":\"回忆若是有气味的话，我希望他不再是樟脑的香，而是吃过一个又一个的美味，甜而不腻的饼干，像记忆分明的快乐。\",\"goodsSkuId\":186,\"storeName\":\"青岛精品超市\",\"skuName\":\"手撕面包原味\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"197\",\"salesUnit\":\"袋\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg;http://117.78.38.130/images/goods/197/big/f8eb8ca2-7c61-4dac-a4f6-fb3dbfb8d14a_450x300.jpg;http://117.78.38.130/images/goods/197/big/5b59179d-379a-4eef-945e-aa539d94c5b5_483x277.jpg;http://117.78.38.130/images/goods/197/big/16eb0684-6c0a-400b-bd42-24258ca3ca89_451x300.jpg\",\"storeId\":5,\"goodsName\":\"手撕面包原味2000g\",\"coverImage\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg\",\"goodsType\":62}",
                                "shopId": 2
                            },
                            {
                                "recommendId": 82,
                                "sectionId": 27,
                                "bizId": 198,
                                "bizType": 19,
                                "bizExtend": null,
                                "bizLevel": null,
                                "recommendTitle": "虾2",
                                "content": null,
                                "imgUrl": "http://117.78.38.130/images/goods/209/big/8c29068f-4dd1-4d90-9482-2a391afbf7ed_800x800.jpg",
                                "videoUrl": null,
                                "linkUrl": "",
                                "describle": "",
                                "sortFlag": 3,
                                "extendJson": "{\"goodsId\":209,\"goodsTag\":\"好吃呢\",\"goodsSkuId\":198,\"storeName\":\"黑松白鹿\",\"skuName\":\"虾2\",\"brandId\":0,\"brandName\":\"\",\"shopId\":2,\"salePrice\":\"109\",\"skuImages\":\"http://117.78.38.130/images/goods/209/big/8c29068f-4dd1-4d90-9482-2a391afbf7ed_800x800.jpg;http://117.78.38.130/images/goods/209/big/38882484-606e-4d2b-8a01-03f227ca50e9_800x800.jpg;http://117.78.38.130/images/goods/209/big/6e8a237e-17df-4e6c-b7a0-7490634f0b19_800x800.jpg\",\"goodsProperty\":374,\"storeId\":6,\"coverImage\":\"http://117.78.38.130/images/goods/209/big/8c29068f-4dd1-4d90-9482-2a391afbf7ed_800x800.jpg\",\"goodsName\":\"虾\",\"goodsType\":63}",
                                "shopId": 2
                            }
                        ]
                    },
                    {
                        "sectionId": 26,
                        "sectionName": "分类版块",
                        "sourceType": 20,
                        "channelType": 22,
                        "sectionType": 150,
                        "sectionPosindex": null,
                        "sectionStyle": 105,
                        "hasChildren": 0,
                        "extendJson": "",
                        "sortFlag": 2,
                        "sectionBgcolor": "",
                        "sectionBgimg": null,
                        "sectionTitleimg": null,
                        "sectionPagerows": null,
                        "totalPagecount": null,
                        "children": null,
                        "recommendList": [
                            {
                                "recommendId": 79,
                                "sectionId": 26,
                                "bizId": 39,
                                "bizType": 18,
                                "bizExtend": null,
                                "bizLevel": null,
                                "recommendTitle": "红酒",
                                "content": null,
                                "imgUrl": null,
                                "videoUrl": null,
                                "linkUrl": "",
                                "describle": "",
                                "sortFlag": 1,
                                "extendJson": "{\"virtualIcon\":\"\",\"virtualName\":\"红酒\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":7,\"virtualId\":39,\"cateType\":62,\"isTag\":0}",
                                "shopId": 2
                            }
                        ]
                    }
                ],
                "recommendList": null
            },
            {
                "sectionId": 13,
                "sectionName": "首页热销排行",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 28,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 9,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/13/mainImg/a76ea6ff-8a82-4617-a874-a30c1324e07d_245x54.png",
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 46,
                        "sectionId": 13,
                        "bizId": 185,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "大洋世家oceanfamily 半壳扇贝 1kg",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/196/big/5e83139e-be54-4963-ac51-a66f51accfe3_1000x1000.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"goodsId\":196,\"goodsTag\":\"咋说呢，就是鲜美！\",\"goodsSkuId\":185,\"storeName\":\"青岛精品超市\",\"skuName\":\"大洋世家oceanfamily 半壳扇贝 1kg\",\"brandId\":25,\"brandName\":\"三都港\",\"shopId\":2,\"salesUnit\":\"箱\",\"salePrice\":\"238\",\"skuImages\":\"http://117.78.38.130/images/goods/196/big/5e83139e-be54-4963-ac51-a66f51accfe3_1000x1000.jpg;http://117.78.38.130/images/goods/196/big/2526a410-d0b2-4eed-acfa-256980dbba0b_210x210.jpg;http://117.78.38.130/images/goods/196/big/25ce58fd-d86e-408e-a945-afba0f9b1914_210x210.jpg;http://117.78.38.130/images/goods/196/big/97a76bce-66ea-4cbd-b8e2-c75ed9808462_210x210.jpg;http://117.78.38.130/images/goods/196/big/d19bd14a-0b16-4fe5-bb32-473535c538a2_210x210.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/196/big/5e83139e-be54-4963-ac51-a66f51accfe3_1000x1000.jpg\",\"goodsName\":\"大洋世家oceanfamily 半壳扇贝 1kg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 47,
                        "sectionId": 13,
                        "bizId": 186,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "手撕面包原味",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"goodsId\":197,\"goodsTag\":\"回忆若是有气味的话，我希望他不再是樟脑的香，而是吃过一个又一个的美味，甜而不腻的饼干，像记忆分明的快乐。\",\"goodsSkuId\":186,\"storeName\":\"青岛精品超市\",\"skuName\":\"手撕面包原味\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"197\",\"salesUnit\":\"袋\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg;http://117.78.38.130/images/goods/197/big/f8eb8ca2-7c61-4dac-a4f6-fb3dbfb8d14a_450x300.jpg;http://117.78.38.130/images/goods/197/big/5b59179d-379a-4eef-945e-aa539d94c5b5_483x277.jpg;http://117.78.38.130/images/goods/197/big/16eb0684-6c0a-400b-bd42-24258ca3ca89_451x300.jpg\",\"storeId\":5,\"goodsName\":\"手撕面包原味2000g\",\"coverImage\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 48,
                        "sectionId": 13,
                        "bizId": 193,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "虾",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 3,
                        "extendJson": "{\"goodsId\":204,\"goodsTag\":\"好吃\",\"goodsSkuId\":193,\"storeName\":\"青岛精品超市\",\"skuName\":\"虾\",\"brandId\":25,\"brandName\":\"三都港\",\"shopId\":2,\"salesUnit\":\"箱\",\"salePrice\":\"99\",\"skuImages\":\"http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg;http://117.78.38.130/images/goods/204/big/7e48df1b-4fe9-42d9-a25a-620e0d60fa36_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg\",\"goodsName\":\"青岛野生海虾\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 49,
                        "sectionId": 13,
                        "bizId": 187,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "良品铺子 手撕面包 早餐食品糕点蛋糕",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 4,
                        "extendJson": "{\"goodsId\":198,\"goodsTag\":\"良品铺子良品铺子17宠爱美食\",\"goodsSkuId\":187,\"storeName\":\"青岛精品超市\",\"skuName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"198\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg;http://117.78.38.130/images/goods/198/big/57e132ef-8367-4b75-93dd-b1d4aa14cd01_50x50.jpg;http://117.78.38.130/images/goods/198/big/2dac6ccf-9033-499d-819d-b49d6f5ea74b_50x50.jpg;http://117.78.38.130/images/goods/198/big/9a3b0598-df20-49e7-b589-347930f249fd_50x50.jpg\",\"storeId\":5,\"goodsName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕 零食小吃330g\",\"coverImage\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 121,
                        "sectionId": 13,
                        "bizId": 251,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "奶香鸡蛋糕软面包小点心零食品礼盒1公斤饼干蛋糕",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/271/big/01ad52d1-899f-414c-8a12-99a69cf37307_800x800.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 5,
                        "extendJson": "{\"goodsId\":271,\"goodsTag\":\"港荣蛋糕\",\"goodsSkuId\":251,\"storeName\":\"青岛精品超市\",\"skuName\":\"奶香鸡蛋糕软面包小点心零食品礼盒1公斤饼干蛋糕\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"1000g\",\"shopId\":2,\"salesUnit\":\"盒\",\"salePrice\":\"100\",\"skuImages\":\"http://117.78.38.130/images/goods/271/big/01ad52d1-899f-414c-8a12-99a69cf37307_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/271/big/01ad52d1-899f-414c-8a12-99a69cf37307_800x800.jpg\",\"goodsName\":\"港荣蒸蛋糕整箱1kg奶香鸡蛋糕软面包小点心零食品礼盒1公斤饼干蛋糕\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 122,
                        "sectionId": 13,
                        "bizId": 415,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "SKU四川火锅",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/466/big/f035f2e4-e284-482b-857b-c6fc8925b2d8_493x301.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 6,
                        "extendJson": "{\"goodsId\":466,\"goodsTag\":\"四川麻辣\",\"goodsSkuId\":415,\"storeName\":\"一见如故\",\"skuName\":\"SKU四川火锅\",\"brandId\":0,\"brandName\":\"\",\"specName\":\"2000\",\"shopId\":2,\"salesUnit\":\"袋\",\"salePrice\":\"80\",\"skuImages\":\"http://117.78.38.130/images/goods/466/big/f035f2e4-e284-482b-857b-c6fc8925b2d8_493x301.jpg\",\"goodsProperty\":374,\"storeId\":59,\"coverImage\":\"http://117.78.38.130/images/goods/466/big/f035f2e4-e284-482b-857b-c6fc8925b2d8_493x301.jpg\",\"goodsName\":\"四川麻辣火锅支持外卖支持外带有包装费\",\"goodsType\":63}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 123,
                        "sectionId": 13,
                        "bizId": 416,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "sku测试好吃的火锅",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/467/big/a9470cfe-27db-4dde-be70-937c98d91084_341x242.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 7,
                        "extendJson": "{\"goodsId\":467,\"goodsTag\":\"测试好吃的火锅\",\"goodsSkuId\":416,\"storeName\":\"一见如故\",\"skuName\":\"sku测试好吃的火锅\",\"brandId\":0,\"brandName\":\"\",\"specName\":\"500g\",\"shopId\":2,\"salesUnit\":\"份\",\"salePrice\":\"300\",\"skuImages\":\"http://117.78.38.130/images/goods/467/big/a9470cfe-27db-4dde-be70-937c98d91084_341x242.jpg;http://117.78.38.130/images/goods/467/big/d3c80f11-5f10-4b73-9506-61f68f0797e2_402x254.jpg;http://117.78.38.130/images/goods/467/big/3568791b-0ef3-4881-8ad7-8b360b92b62b_300x206.jpg\",\"goodsProperty\":374,\"storeId\":59,\"coverImage\":\"http://117.78.38.130/images/goods/467/big/a9470cfe-27db-4dde-be70-937c98d91084_341x242.jpg\",\"goodsName\":\"测试好吃的火锅11111\",\"goodsType\":63}",
                        "shopId": 2
                    }
                ]
            },
            {
                "sectionId": 14,
                "sectionName": "首页金牌专题",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 151,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 1,
                "extendJson": "",
                "sortFlag": 10,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/14/mainImg/a687dff4-c241-4b38-8a5b-dbb7def2cd15_131x35.png",
                "sectionPagerows": null,
                "totalPagecount": null,
                "children": [
                    {
                        "sectionId": 16,
                        "sectionName": "海鲜水产",
                        "sourceType": 20,
                        "channelType": 22,
                        "sectionType": 151,
                        "sectionPosindex": 1,
                        "sectionStyle": null,
                        "hasChildren": 1,
                        "extendJson": "",
                        "sortFlag": 1,
                        "sectionBgcolor": "",
                        "sectionBgimg": "http://117.78.38.130/images/section/16/mainImg/fb8afd76-bdbc-4494-aaa5-5802d5ea36b0_1124x228.png",
                        "sectionTitleimg": null,
                        "sectionPagerows": null,
                        "totalPagecount": null,
                        "children": [
                            {
                                "sectionId": 19,
                                "sectionName": "分类版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 1,
                                "sectionStyle": 102,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 1,
                                "sectionBgcolor": "",
                                "sectionBgimg": "http://117.78.38.130/images/section/19/mainImg/f087cc5c-c0c4-4d23-801b-535bc9d4fd8b_1124x228.png",
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 50,
                                        "sectionId": 19,
                                        "bizId": 3,
                                        "bizType": 18,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "海鲜水产",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/recommend/50/mainImg/f2d1bcd6-7cae-43f3-8eb2-4a7724875748_399x281.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 1,
                                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/3/middle/776f3ae0-b7f0-42fc-922e-fdbbf9f5e340_190x190.png\",\"virtualName\":\"海鲜水产\",\"children\":[{\"virtualName\":\"澳洲龙虾\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":13,\"cateType\":62,\"isTag\":0},{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/14/middle/93ae4ed2-d412-45bf-b15b-03dadd37e261_399x281.jpg\",\"virtualName\":\"活鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":14,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":15,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":16,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"活贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":17,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻鱼类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":18,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻虾类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":19,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻蟹类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":20,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"冷冻贝类\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":21,\"cateType\":62,\"isTag\":0},{\"virtualName\":\"即食海鲜\",\"cateLevel\":2,\"virtualParentId\":3,\"virtualId\":22,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":3,\"cateType\":62,\"isTag\":0}",
                                        "shopId": 2
                                    }
                                ]
                            },
                            {
                                "sectionId": 20,
                                "sectionName": "商品版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 2,
                                "sectionStyle": 103,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 2,
                                "sectionBgcolor": "#d6f3ff",
                                "sectionBgimg": null,
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 51,
                                        "sectionId": 20,
                                        "bizId": 181,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "智利帝王蟹 约1200g",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/192/big/6b613964-1e8c-4106-96e8-6f5c7f5ce687_1000x1000.JPG",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 1,
                                        "extendJson": "{\"goodsId\":192,\"goodsTag\":\"好大好大的帝王蟹 \",\"goodsSkuId\":181,\"storeName\":\"青岛精品超市\",\"skuName\":\"智利帝王蟹 约1200g   \",\"brandId\":0,\"brandName\":\"\",\"shopId\":2,\"salesUnit\":\"盒\",\"salePrice\":\"258\",\"skuImages\":\"http://117.78.38.130/images/goods/192/big/6b613964-1e8c-4106-96e8-6f5c7f5ce687_1000x1000.JPG;http://117.78.38.130/images/goods/192/big/82fc7062-7731-48b2-ae76-088bb905ea6f_60x60.JPG;http://117.78.38.130/images/goods/192/big/9eedb96c-12a6-4a14-817d-fda384bfe07a_60x60.JPG;http://117.78.38.130/images/goods/192/big/0d4f0bc4-0387-49a1-accb-c980635f3b7d_60x60.JPG\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/192/big/6b613964-1e8c-4106-96e8-6f5c7f5ce687_1000x1000.JPG\",\"goodsName\":\"智利帝王蟹 约1200g   \",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 52,
                                        "sectionId": 20,
                                        "bizId": 168,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "三都港 无公害黄花鱼（两条装）500g   sku",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/178/big/ded32e5f-44d1-4c44-8d4e-bcb18f1cbdb0_1000x1000.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 2,
                                        "extendJson": "{\"goodsId\":178,\"goodsTag\":\"买黄花，认准三都港\",\"goodsSkuId\":168,\"storeName\":\"青岛精品超市\",\"skuName\":\"三都港 无公害黄花鱼（两条装）500g   sku\",\"brandId\":25,\"brandName\":\"三都港\",\"shopId\":2,\"salesUnit\":\"袋\",\"salePrice\":\"198.9\",\"skuImages\":\"http://117.78.38.130/images/goods/178/big/ded32e5f-44d1-4c44-8d4e-bcb18f1cbdb0_1000x1000.jpg;http://117.78.38.130/images/goods/178/big/f59c916a-bb14-4185-966e-6b72b0424644_60x60.jpg;http://117.78.38.130/images/goods/178/big/21036f58-df98-4966-b9b2-b0a783a102c2_60x60.jpg;http://117.78.38.130/images/goods/178/big/3d4b4d3f-c9f2-4553-bf21-4a6e08992adf_60x60.jpg;http://117.78.38.130/images/goods/178/big/de7d9ec6-bb70-4cdf-b720-c10b39ad1d7c_60x60.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/178/big/ded32e5f-44d1-4c44-8d4e-bcb18f1cbdb0_1000x1000.jpg\",\"goodsName\":\"三都港 无公害黄花鱼（两条装）500g   \",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 53,
                                        "sectionId": 20,
                                        "bizId": 178,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "厄瓜多尔白虾50/60 2000g",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 3,
                                        "extendJson": "{\"goodsId\":189,\"goodsTag\":\"很大，不敢吃\",\"goodsSkuId\":178,\"storeName\":\"青岛精品超市\",\"skuName\":\"厄瓜多尔白虾50/60 2000g\",\"brandId\":25,\"brandName\":\"三都港\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"188\",\"salesUnit\":\"盒\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg;http://117.78.38.130/images/goods/189/big/43eac648-d4e0-4e89-89e3-a4f72f66e7df_60x60.jpg;http://117.78.38.130/images/goods/189/big/807f590a-bf28-46ea-a0fe-1def14707644_60x60.jpg;http://117.78.38.130/images/goods/189/big/0414174f-7104-4443-b0be-4a8dbec88571_60x60.jpg\",\"storeId\":5,\"goodsName\":\"厄瓜多尔白虾50/60 2000g\",\"coverImage\":\"http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    }
                                ]
                            }
                        ],
                        "recommendList": null
                    },
                    {
                        "sectionId": 17,
                        "sectionName": "水果蔬菜",
                        "sourceType": 20,
                        "channelType": 22,
                        "sectionType": 151,
                        "sectionPosindex": 2,
                        "sectionStyle": null,
                        "hasChildren": 1,
                        "extendJson": "",
                        "sortFlag": 2,
                        "sectionBgcolor": "",
                        "sectionBgimg": "http://117.78.38.130/images/section/17/mainImg/216584b2-687e-4936-89d6-90fafd058a4e_1109x233.png",
                        "sectionTitleimg": null,
                        "sectionPagerows": null,
                        "totalPagecount": null,
                        "children": [
                            {
                                "sectionId": 21,
                                "sectionName": "分类版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 1,
                                "sectionStyle": 102,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 1,
                                "sectionBgcolor": "",
                                "sectionBgimg": "http://117.78.38.130/images/section/21/mainImg/9539b98b-d260-4ec0-bb63-695630b955d3_1109x233.png",
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 54,
                                        "sectionId": 21,
                                        "bizId": 2,
                                        "bizType": 18,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "水果蔬菜",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/virtualcate/2/middle/a5ace4f7-a948-47bd-a285-d01ecdfeaa88_179x149.png",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 1,
                                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/2/middle/a5ace4f7-a948-47bd-a285-d01ecdfeaa88_179x149.png\",\"virtualName\":\"水果蔬菜\",\"children\":[{\"virtualIcon\":\"\",\"virtualName\":\"芒果\",\"cateLevel\":2,\"virtualParentId\":2,\"virtualId\":50,\"cateType\":62,\"isTag\":0}],\"cateLevel\":1,\"virtualParentId\":0,\"virtualId\":2,\"cateType\":62,\"isTag\":0}",
                                        "shopId": 2
                                    }
                                ]
                            },
                            {
                                "sectionId": 22,
                                "sectionName": "商品版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 2,
                                "sectionStyle": 103,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 2,
                                "sectionBgcolor": "#e4f9d1",
                                "sectionBgimg": null,
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 76,
                                        "sectionId": 22,
                                        "bizId": 190,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "辽宁丹东奶油草莓",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 1,
                                        "extendJson": "{\"goodsId\":201,\"goodsTag\":\"蜜蜂授粉，无农药残留。\",\"goodsSkuId\":190,\"storeName\":\"青岛精品超市\",\"skuName\":\"辽宁丹东奶油草莓\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"450g\",\"shopId\":2,\"salePrice\":\"400\",\"salesUnit\":\"份\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg;http://117.78.38.130/images/goods/201/big/9414c23a-d056-4128-b846-a351e25dba13_700x467.jpg;http://117.78.38.130/images/goods/201/big/b76bb998-5d09-46bb-ae43-9b14ce207f5d_900x600.jpg\",\"storeId\":5,\"goodsName\":\"辽宁丹东奶油草莓 450g\",\"coverImage\":\"http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 116,
                                        "sectionId": 22,
                                        "bizId": 166,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "帝王伦晚橙 mini橙 9斤家庭装 单果130±10g伦晚脐橙 4500g",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/176/big/780109e3-1563-42e2-bbf8-b29ce00f6312_330x330.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 2,
                                        "extendJson": "{\"goodsId\":176,\"goodsTag\":\"七公主果园，产地好，味道佳\",\"goodsSkuId\":166,\"storeName\":\"远雄店会员商城\",\"skuName\":\"帝王伦晚橙 mini橙 9斤家庭装 单果130±10g伦晚脐橙 4500g\",\"brandId\":24,\"brandName\":\"花果山\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"76\",\"salesUnit\":\"盒\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/176/big/780109e3-1563-42e2-bbf8-b29ce00f6312_330x330.jpg;http://117.78.38.130/images/goods/176/big/93d11c33-8ea1-4cb5-b4a8-81f40ee403f9_800x800.jpg;http://117.78.38.130/images/goods/176/big/fdb2a2a8-1551-4ecd-9f99-3024cf543825_60x60.jpg;http://117.78.38.130/images/goods/176/big/cc0d47bc-7a41-4160-bda9-f5e5ede795b7_60x60.jpg\",\"storeId\":50,\"goodsName\":\"七公主果园 秭归脐橙 帝王伦晚橙 mini橙 9斤家庭装 单果130±10g伦晚脐橙 4500g\",\"coverImage\":\"http://117.78.38.130/images/goods/176/big/780109e3-1563-42e2-bbf8-b29ce00f6312_330x330.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 115,
                                        "sectionId": 22,
                                        "bizId": 135,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "新鲜水果海南三亚贵妃芒 新鲜芒果3斤装 1500g",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/141/big/234b8627-4148-4b4e-a36e-0853cb2dfd1c_750x517.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 3,
                                        "extendJson": "{\"goodsId\":141,\"goodsTag\":\"优果优民\",\"goodsSkuId\":135,\"storeName\":\"青岛精品超市\",\"skuName\":\" 新鲜水果海南三亚贵妃芒 新鲜芒果3斤装 1500g\",\"brandId\":21,\"brandName\":\"佳农\",\"shopId\":2,\"salesUnit\":\"斤\",\"salePrice\":\"99.99\",\"skuImages\":\"http://117.78.38.130/images/goods/141/big/234b8627-4148-4b4e-a36e-0853cb2dfd1c_750x517.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/141/big/234b8627-4148-4b4e-a36e-0853cb2dfd1c_750x517.jpg\",\"goodsName\":\" 新鲜水果海南三亚贵妃芒 新鲜芒果3斤装 1500g\",\"goodsType\":62}",
                                        "shopId": 2
                                    }
                                ]
                            }
                        ],
                        "recommendList": null
                    },
                    {
                        "sectionId": 18,
                        "sectionName": "烘焙面包",
                        "sourceType": 20,
                        "channelType": 22,
                        "sectionType": 151,
                        "sectionPosindex": 3,
                        "sectionStyle": null,
                        "hasChildren": 1,
                        "extendJson": "",
                        "sortFlag": 3,
                        "sectionBgcolor": "",
                        "sectionBgimg": "http://117.78.38.130/images/section/18/mainImg/98dbef15-ed67-4141-92cd-4b6411cab4dd_1067x213.png",
                        "sectionTitleimg": null,
                        "sectionPagerows": null,
                        "totalPagecount": null,
                        "children": [
                            {
                                "sectionId": 23,
                                "sectionName": "分类版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 1,
                                "sectionStyle": 102,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 1,
                                "sectionBgcolor": "",
                                "sectionBgimg": "http://117.78.38.130/images/section/23/mainImg/cb124b76-8162-42bf-bbd2-2fc47b60026c_1067x213.png",
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 57,
                                        "sectionId": 23,
                                        "bizId": 41,
                                        "bizType": 18,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "面包",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/virtualcate/41/middle/3f3cea26-c110-4115-a7ac-6e1a92b06661_750x454.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 1,
                                        "extendJson": "{\"virtualIcon\":\"http://117.78.38.130/images/virtualcate/41/middle/3f3cea26-c110-4115-a7ac-6e1a92b06661_750x454.jpg\",\"virtualName\":\"面包\",\"children\":[],\"cateLevel\":2,\"virtualParentId\":6,\"virtualId\":41,\"cateType\":62,\"isTag\":0}",
                                        "shopId": 2
                                    }
                                ]
                            },
                            {
                                "sectionId": 24,
                                "sectionName": "商品版块",
                                "sourceType": 20,
                                "channelType": 22,
                                "sectionType": 151,
                                "sectionPosindex": 2,
                                "sectionStyle": 103,
                                "hasChildren": 0,
                                "extendJson": "",
                                "sortFlag": 2,
                                "sectionBgcolor": "#ffe3cc",
                                "sectionBgimg": null,
                                "sectionTitleimg": null,
                                "sectionPagerows": null,
                                "totalPagecount": null,
                                "children": null,
                                "recommendList": [
                                    {
                                        "recommendId": 59,
                                        "sectionId": 24,
                                        "bizId": 179,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "稻香村早餐奶油面包",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/190/big/ed656745-fb43-4225-bc1d-f5535d022955_300x300.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 2,
                                        "extendJson": "{\"goodsId\":190,\"goodsTag\":\"稻香村工厂直发 独立小袋包装 用心锁住每一口新鲜\",\"goodsSkuId\":179,\"storeName\":\"青岛精品超市\",\"skuName\":\"稻香村早餐奶油面包\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"190\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/190/big/ed656745-fb43-4225-bc1d-f5535d022955_300x300.jpg;http://117.78.38.130/images/goods/190/big/da02d61c-0523-4793-b0d1-8c1db686b02d_303x300.jpg;http://117.78.38.130/images/goods/190/big/f7082a0b-7848-4fe8-9708-9299f46a4c07_450x300.jpg;http://117.78.38.130/images/goods/190/big/c16575ad-44c7-40b8-9df5-596a575b1a99_432x300.jpg\",\"storeId\":5,\"goodsName\":\"稻香村早餐奶油面包\",\"coverImage\":\"http://117.78.38.130/images/goods/190/big/ed656745-fb43-4225-bc1d-f5535d022955_300x300.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 77,
                                        "sectionId": 24,
                                        "bizId": 186,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "手撕面包原味",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 3,
                                        "extendJson": "{\"goodsId\":197,\"goodsTag\":\"回忆若是有气味的话，我希望他不再是樟脑的香，而是吃过一个又一个的美味，甜而不腻的饼干，像记忆分明的快乐。\",\"goodsSkuId\":186,\"storeName\":\"青岛精品超市\",\"skuName\":\"手撕面包原味\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"197\",\"salesUnit\":\"袋\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg;http://117.78.38.130/images/goods/197/big/f8eb8ca2-7c61-4dac-a4f6-fb3dbfb8d14a_450x300.jpg;http://117.78.38.130/images/goods/197/big/5b59179d-379a-4eef-945e-aa539d94c5b5_483x277.jpg;http://117.78.38.130/images/goods/197/big/16eb0684-6c0a-400b-bd42-24258ca3ca89_451x300.jpg\",\"storeId\":5,\"goodsName\":\"手撕面包原味2000g\",\"coverImage\":\"http://117.78.38.130/images/goods/197/big/d41a4818-bf45-4861-8b5e-d05c04ca6aee_750x454.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    },
                                    {
                                        "recommendId": 58,
                                        "sectionId": 24,
                                        "bizId": 187,
                                        "bizType": 19,
                                        "bizExtend": null,
                                        "bizLevel": null,
                                        "recommendTitle": "良品铺子 手撕面包 早餐食品糕点蛋糕",
                                        "content": null,
                                        "imgUrl": "http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg",
                                        "videoUrl": null,
                                        "linkUrl": "",
                                        "describle": "",
                                        "sortFlag": 4,
                                        "extendJson": "{\"goodsId\":198,\"goodsTag\":\"良品铺子良品铺子17宠爱美食\",\"goodsSkuId\":187,\"storeName\":\"青岛精品超市\",\"skuName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"198\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg;http://117.78.38.130/images/goods/198/big/57e132ef-8367-4b75-93dd-b1d4aa14cd01_50x50.jpg;http://117.78.38.130/images/goods/198/big/2dac6ccf-9033-499d-819d-b49d6f5ea74b_50x50.jpg;http://117.78.38.130/images/goods/198/big/9a3b0598-df20-49e7-b589-347930f249fd_50x50.jpg\",\"storeId\":5,\"goodsName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕 零食小吃330g\",\"coverImage\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg\",\"goodsType\":62}",
                                        "shopId": 2
                                    }
                                ]
                            }
                        ],
                        "recommendList": null
                    }
                ],
                "recommendList": null
            },
            {
                "sectionId": 15,
                "sectionName": "首页球球推荐",
                "sourceType": 20,
                "channelType": 22,
                "sectionType": 152,
                "sectionPosindex": 1,
                "sectionStyle": null,
                "hasChildren": 0,
                "extendJson": "",
                "sortFlag": 11,
                "sectionBgcolor": "",
                "sectionBgimg": null,
                "sectionTitleimg": "http://117.78.38.130/images/section/15/mainImg/d9fed80a-2463-435d-be7c-d7a77b580b69_197x54.png",
                "sectionPagerows": 10,
                "totalPagecount": 3,
                "children": null,
                "recommendList": [
                    {
                        "recommendId": 60,
                        "sectionId": 15,
                        "bizId": 187,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "良品铺子 手撕面包 早餐食品糕点蛋糕",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 1,
                        "extendJson": "{\"goodsId\":198,\"goodsTag\":\"良品铺子良品铺子17宠爱美食\",\"goodsSkuId\":187,\"storeName\":\"青岛精品超市\",\"skuName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"198\",\"salesUnit\":\"个\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg;http://117.78.38.130/images/goods/198/big/57e132ef-8367-4b75-93dd-b1d4aa14cd01_50x50.jpg;http://117.78.38.130/images/goods/198/big/2dac6ccf-9033-499d-819d-b49d6f5ea74b_50x50.jpg;http://117.78.38.130/images/goods/198/big/9a3b0598-df20-49e7-b589-347930f249fd_50x50.jpg\",\"storeId\":5,\"goodsName\":\"良品铺子 手撕面包 早餐食品糕点蛋糕 零食小吃330g\",\"coverImage\":\"http://117.78.38.130/images/goods/198/big/6cd81456-876d-4eb4-95ab-b06a6e0ee634_350x350.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 61,
                        "sectionId": 15,
                        "bizId": 190,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "辽宁丹东奶油草莓",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 2,
                        "extendJson": "{\"goodsId\":201,\"goodsTag\":\"蜜蜂授粉，无农药残留。\",\"goodsSkuId\":190,\"storeName\":\"青岛精品超市\",\"skuName\":\"辽宁丹东奶油草莓\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"450g\",\"shopId\":2,\"salePrice\":\"400\",\"salesUnit\":\"份\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg;http://117.78.38.130/images/goods/201/big/9414c23a-d056-4128-b846-a351e25dba13_700x467.jpg;http://117.78.38.130/images/goods/201/big/b76bb998-5d09-46bb-ae43-9b14ce207f5d_900x600.jpg\",\"storeId\":5,\"goodsName\":\"辽宁丹东奶油草莓 450g\",\"coverImage\":\"http://117.78.38.130/images/goods/201/big/b2767f3e-8354-44d1-a60e-8c7eb66d10e1_871x607.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 63,
                        "sectionId": 15,
                        "bizId": 199,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "活虾",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/210/big/204a5168-8c2d-4b5a-b356-ad97736e4aae_800x800.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 4,
                        "extendJson": "{\"goodsId\":210,\"goodsTag\":\"新鲜\",\"goodsSkuId\":199,\"storeName\":\"麻辣小龙虾\",\"skuName\":\"活虾\",\"brandId\":0,\"brandName\":\"\",\"shopId\":2,\"salePrice\":\"200\",\"skuImages\":\"http://117.78.38.130/images/goods/210/big/204a5168-8c2d-4b5a-b356-ad97736e4aae_800x800.jpg\",\"goodsProperty\":374,\"storeId\":53,\"coverImage\":\"http://117.78.38.130/images/goods/210/big/204a5168-8c2d-4b5a-b356-ad97736e4aae_800x800.jpg\",\"goodsName\":\"活虾\",\"goodsType\":63}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 64,
                        "sectionId": 15,
                        "bizId": 200,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "汉拿山精肉大荟萃/大份2500g",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/211/big/b4415258-8777-42af-9074-7e947525b295_500x375.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 5,
                        "extendJson": "{\"goodsId\":211,\"goodsTag\":\"吃着过瘾，吃到撑\",\"goodsSkuId\":200,\"storeName\":\"汉拿山烤肉\",\"skuName\":\"汉拿山精肉大荟萃/大份2500g\",\"brandId\":0,\"brandName\":\"\",\"shopId\":2,\"salePrice\":\"368.88\",\"skuImages\":\"http://117.78.38.130/images/goods/211/big/b4415258-8777-42af-9074-7e947525b295_500x375.jpg;http://117.78.38.130/images/goods/211/big/e921236b-fdee-4b33-8952-d3b19a40add9_700x460.jpg;http://117.78.38.130/images/goods/211/big/456237bc-22d6-4ee9-bd96-159576c4bcef_430x323.jpg\",\"goodsProperty\":374,\"storeId\":8,\"coverImage\":\"http://117.78.38.130/images/goods/211/big/b4415258-8777-42af-9074-7e947525b295_500x375.jpg\",\"goodsName\":\"汉拿山精肉大荟萃/大份2500g\",\"goodsType\":63}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 65,
                        "sectionId": 15,
                        "bizId": 51,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "云南米线",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/57/big/bcf42fa3-c640-4246-b3cf-636ce348ba88_400x347.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 6,
                        "extendJson": "{\"goodsId\":57,\"goodsTag\":\"云南米线\",\"goodsSkuId\":51,\"storeName\":\"汉拿山烤肉\",\"skuName\":\"云南米线\",\"brandId\":0,\"brandName\":\"\",\"shopId\":2,\"salesUnit\":\"毫升\",\"salePrice\":\"11\",\"skuImages\":\"http://117.78.38.130/images/goods/57/big/bcf42fa3-c640-4246-b3cf-636ce348ba88_400x347.jpg\",\"goodsProperty\":374,\"storeId\":8,\"coverImage\":\"http://117.78.38.130/images/goods/57/big/bcf42fa3-c640-4246-b3cf-636ce348ba88_400x347.jpg\",\"goodsName\":\"云南米线\",\"goodsType\":63}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 66,
                        "sectionId": 15,
                        "bizId": 136,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "科林高德 草莓味冰淇淋 480ml",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/142/big/08517d19-b394-408d-bdb4-25f32bf8b15f_750x750.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 7,
                        "extendJson": "{\"goodsId\":142,\"goodsTag\":\"海外直采\",\"goodsSkuId\":136,\"storeName\":\"青岛精品超市\",\"skuName\":\"科林高德 草莓味冰淇淋 480ml\",\"brandId\":21,\"brandName\":\"佳农\",\"shopId\":2,\"salesUnit\":\"个\",\"salePrice\":\"65\",\"skuImages\":\"http://117.78.38.130/images/goods/142/big/08517d19-b394-408d-bdb4-25f32bf8b15f_750x750.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/142/big/08517d19-b394-408d-bdb4-25f32bf8b15f_750x750.jpg\",\"goodsName\":\"科林高德 草莓味冰淇淋 480ml\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 67,
                        "sectionId": 15,
                        "bizId": 178,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "厄瓜多尔白虾50/60 2000g",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 8,
                        "extendJson": "{\"goodsId\":189,\"goodsTag\":\"很大，不敢吃\",\"goodsSkuId\":178,\"storeName\":\"青岛精品超市\",\"skuName\":\"厄瓜多尔白虾50/60 2000g\",\"brandId\":25,\"brandName\":\"三都港\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"188\",\"salesUnit\":\"盒\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg;http://117.78.38.130/images/goods/189/big/43eac648-d4e0-4e89-89e3-a4f72f66e7df_60x60.jpg;http://117.78.38.130/images/goods/189/big/807f590a-bf28-46ea-a0fe-1def14707644_60x60.jpg;http://117.78.38.130/images/goods/189/big/0414174f-7104-4443-b0be-4a8dbec88571_60x60.jpg\",\"storeId\":5,\"goodsName\":\"厄瓜多尔白虾50/60 2000g\",\"coverImage\":\"http://117.78.38.130/images/goods/189/big/10537f05-1c53-4184-96f3-8a2df65d0642_330x330.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 68,
                        "sectionId": 15,
                        "bizId": 195,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "沁州绿 沁县 有机蔬菜 圆茄子 约500g",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/206/big/25c43a04-adc2-4b1a-8c6b-1be59a78a0af_800x800.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 9,
                        "extendJson": "{\"goodsId\":206,\"goodsTag\":\"圆圆的，好看又好吃\",\"goodsSkuId\":195,\"storeName\":\"青岛精品超市\",\"skuName\":\"沁州绿 沁县 有机蔬菜 圆茄子 约500g\",\"brandId\":24,\"brandName\":\"花果山\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"25.6\",\"salesUnit\":\"斤\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/206/big/25c43a04-adc2-4b1a-8c6b-1be59a78a0af_800x800.jpg;http://117.78.38.130/images/goods/206/big/08f33f6d-37f6-4c28-bb80-c0a05eae36f4_572x408.jpg;http://117.78.38.130/images/goods/206/big/159ef77b-3e2a-4810-a652-00ee779da114_574x469.jpg\",\"storeId\":5,\"goodsName\":\"沁州绿 沁县 有机蔬菜 圆茄子 约500g\",\"coverImage\":\"http://117.78.38.130/images/goods/206/big/25c43a04-adc2-4b1a-8c6b-1be59a78a0af_800x800.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 69,
                        "sectionId": 15,
                        "bizId": 127,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "世果汇 越南小青芒5斤 单果250至400g",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/133/big/253d8925-5ac1-4b84-aa14-ba4bc8b44bdc_330x330.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 10,
                        "extendJson": "{\"goodsId\":133,\"goodsTag\":\"优选会员 超值特惠\",\"goodsSkuId\":127,\"storeName\":\"青岛精品超市\",\"skuName\":\"世果汇 越南小青芒5斤 单果250至400g\",\"brandId\":21,\"brandName\":\"佳农\",\"specName\":\"\",\"shopId\":2,\"salePrice\":\"29.8\",\"salesUnit\":\"斤\",\"goodsProperty\":367,\"skuImages\":\"http://117.78.38.130/images/goods/133/big/253d8925-5ac1-4b84-aa14-ba4bc8b44bdc_330x330.jpg;http://117.78.38.130/images/goods/133/big/7aa1d1f2-4392-4de3-9dad-e29dc6f8a0b4_1000x1000.jpg;http://117.78.38.130/images/goods/133/big/2cccac68-f279-4bc5-af23-3fd60fc67226_150x150.jpg\",\"storeId\":5,\"goodsName\":\"世果汇 越南小青芒5斤 单果250至400g 3人团 5斤*3箱\",\"coverImage\":\"http://117.78.38.130/images/goods/133/big/253d8925-5ac1-4b84-aa14-ba4bc8b44bdc_330x330.jpg\",\"goodsType\":62}",
                        "shopId": 2
                    },
                    {
                        "recommendId": 70,
                        "sectionId": 15,
                        "bizId": 193,
                        "bizType": 19,
                        "bizExtend": null,
                        "bizLevel": null,
                        "recommendTitle": "虾",
                        "content": null,
                        "imgUrl": "http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg",
                        "videoUrl": null,
                        "linkUrl": "",
                        "describle": "",
                        "sortFlag": 11,
                        "extendJson": "{\"goodsId\":204,\"goodsTag\":\"好吃\",\"goodsSkuId\":193,\"storeName\":\"青岛精品超市\",\"skuName\":\"虾\",\"brandId\":25,\"brandName\":\"三都港\",\"shopId\":2,\"salesUnit\":\"箱\",\"salePrice\":\"99\",\"skuImages\":\"http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg;http://117.78.38.130/images/goods/204/big/7e48df1b-4fe9-42d9-a25a-620e0d60fa36_800x800.jpg\",\"goodsProperty\":367,\"storeId\":5,\"coverImage\":\"http://117.78.38.130/images/goods/204/big/ed4ee3f5-43b3-442d-a108-4ebf327ed895_800x800.jpg\",\"goodsName\":\"青岛野生海虾\",\"goodsType\":62}",
                        "shopId": 2
                    }
                ]
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 400,
        motto: 'Lorem Ipsum',
        userInfo: {}
    },

    // 生命周期函数--监听页面加载, options为页面跳转所带来的参数
    onLoad: function (options) {
        console.time('页面加载到获取用户信息所需时间: ');
        console.log('onLoad, 带来的 options 为 => ', options);

        var _this = this;
        wx.showNavigationBarLoading();

        // 微信登录获取用户数据
        app.getUserInfo(function (userInfo) {
            console.timeEnd('页面加载到获取用户信息所需时间: ');
            //更新数据
            _this.setData({
                userInfo: userInfo
            })
        });

        wx.request({
            url: 'https://95233910.qcloud.la/list',
            data: {
                "channelType": 22,
                "shopId": 2,
                "sourceType": 20,
                "memberId": 28,
                "token": "4acd800f172745fa9c2e9658245e8413"
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {

                _this.setData({
                    moduleList: res.data._data
                })

                console.log('%c---------- 首页 list 接口 success ----------', 'font-size:14px;line-height:2;color:green;font-weight:bold;')
                console.log('res ', res);
                console.log('_this.data.moduleList ', _this.data.moduleList);

                // success
            },
            fail: function (res) {
                console.error(res)
                // fail
            },
            complete: function (res) {
                console.log('%c---------- 首页 list 接口 complete ----------', 'font-size:14px;line-height:2;color:green;font-weight:bold;')
                console.log(res);
                wx.hideNavigationBarLoading();
                // complete
            }
        })
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady: function (e) {
        // 页面渲染完成
        var _this = this;

        setTimeout(function () {
            _this.setData({
                currentDateTime: ' => the 2nd edit.'
            })
        }, 1000);

        startDrawing();
    },

    // 生命周期函数--监听页面显示
    onShow: function () {
        // 页面显示
    },

    // 生命周期函数--监听页面隐藏
    onHide: function () {
        // 页面隐藏
    },

    // 生命周期函数--监听页面卸载
    onUnload: function () {
        // 页面关闭
    },

    // 头部 swiper
    routeTo (e) {
        let data = e.target.dataset;
        switch (bizType) {
            case 17:
                // 广告
                
                break;
            case 18:
                // 分类
                var extendJson = JSON.parse(extendJson);
                if (extendJson.cateType == GOODS_TYPE_FOOD) {
                    // 餐食
                    window.location.href = '../search/shops_search.html?storeCateId=' + extendJson.virtualId + '&t=' + t;
                } else if (extendJson.cateType == GOODS_TYPE_MARKET) {
                    // 超市商品
                    var linkUrl = '../search/pro_search.html?searchType=' + extendJson.cateType + '&goodsName=' + encodeURIComponent(extendJson.virtualName);
                    if (extendJson.cateLevel == 1) {
                        // 一级分类
                        linkUrl += '&firstCateId=' + extendJson.virtualId;
                    } else if (extendJson.cateLevel == 2) {
                        // 二级分类
                        linkUrl += '&firstCateId=' + extendJson.virtualParentId + '&secondCateId=' + extendJson.virtualId;
                    }
                    linkUrl += '&t=' + t;
                    window.location.href = linkUrl;
                }
                break;
            case 19:
                // 商品
                var extendJson = JSON.parse(extendJson);
                var goodsId = extendJson.goodsId;
                var skuId = extendJson.goodsSkuId;
                var storeId = extendJson.storeId;
                window.location.href = '../goods/detail.html?goodsId=' + goodsId + '&skuId=' + skuId + '&storeId=' + storeId + '&t=' + t;
                break;
            case 100:
                // 视频
                break;
            case 114:
                // 关键字
                break;
        }
    },
    /**
     * 处理推荐的点击事件
     * @param bizType  业务类型----17：广告，100：视频，114：关键字，18：分类，19：商品
     * @param linkUrl  链接地址
     * @param videoUrl  视频路径
     * @param extendJson  扩展字段
     */
    handleClkEvt(bizType, linkUrl, videoUrl, extendJson) {
        switch (parseInt(bizType)) {
            case 17:
                // 广告
                if (linkUrl) {
                    window.location.href = linkUrl;
                } else {
                    return false;
                }
                break;
            case 18:
                // 分类
                var extendJson = JSON.parse(extendJson);
                if (extendJson.cateType == GOODS_TYPE_FOOD) {
                    // 餐食
                    window.location.href = '../search/shops_search.html?storeCateId=' + extendJson.virtualId + '&t=' + t;
                } else if (extendJson.cateType == GOODS_TYPE_MARKET) {
                    // 超市商品
                    var linkUrl = '../search/pro_search.html?searchType=' + extendJson.cateType + '&goodsName=' + encodeURIComponent(extendJson.virtualName);
                    if (extendJson.cateLevel == 1) {
                        // 一级分类
                        linkUrl += '&firstCateId=' + extendJson.virtualId;
                    } else if (extendJson.cateLevel == 2) {
                        // 二级分类
                        linkUrl += '&firstCateId=' + extendJson.virtualParentId + '&secondCateId=' + extendJson.virtualId;
                    }
                    linkUrl += '&t=' + t;
                    window.location.href = linkUrl;
                }
                break;
            case 19:
                // 商品
                var extendJson = JSON.parse(extendJson);
                var goodsId = extendJson.goodsId;
                var skuId = extendJson.goodsSkuId;
                var storeId = extendJson.storeId;
                window.location.href = '../goods/detail.html?goodsId=' + goodsId + '&skuId=' + skuId + '&storeId=' + storeId + '&t=' + t;
                break;
            case 100:
                // 视频
                break;
            case 114:
                // 关键字
                break;
        }
    },

    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/index'
        })
    },

    // 下拉刷新事件
    onPullDownRefresh: function (e) {
        console.info('触发首页下拉事件 => ', e);
    },

    // 用户分享事件
    onShareAppMessage: function (e) {
        console.info('用户分享事件 => ', e);
    },

    // test
    changeName: function (e) {
        console.warn(e)
        this.setData({
            userInfo: {
                nickName: 'kavalon'
            }
        })
    },

    redirectTo: (e) => {
        debugger
        wx.redirectTo(this.modules[e.target.dataset.index].linkURL);
    },

    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    }

})

function startDrawing() {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('c')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
}