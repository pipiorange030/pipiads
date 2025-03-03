var varr = {
    contentfarm: {
        ads_host: [ // 搜索结果页包含的内容农场域名数组
            "csdn.net",
            "kknews.cc",
            "021shfx.com",
            "024ksm.com",
            "025pc.cn"
            "manwa.me"
            "manwasa.cc"
        ],
        serp_css: [ // 搜索结果页css选择器数组
            "li.b_algo",
            ".mnr-c.xpd.O9g5cc.uUPGi",
            "div[data-sokoban-grid]",
            "div.g", "div[class='g'][data-hveid]",
            "div[class='mnr-c g'][data-hveid]",
            "div[class][data-sokoban-container]"
            "div"[class='index-banner']
        ]
    }
}

function adsRemove_withhref(ads_host, serp_css) {
    for (i = 0; i < ads_host.length; i++) {
        var ads_host_cssSelector = "[href*='" + ads_host[i] + "']";
        var css_nodelist = document.querySelectorAll(serp_css);
        for (x = 0; x < css_nodelist.length; x++) {
            if (css_nodelist[x].querySelectorAll(ads_host_cssSelector).length) {
                css_nodelist[x].style.display = "none";
            }
        }
    }
}

adsRemove_withhref(varr.contentfarm.ads_host, varr.contentfarm.serp_css);
