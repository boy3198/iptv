######首页1
{"data":[{
    "title":"阿里大站",
    "img":"",
    "rule":{
        "分类":'var a="影视$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=1&filter[essence]=$$动漫$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=7&filter[essence]=$$音乐$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=2&filter[essence]=";var b="全部$0&filter[attention]=0&filter[sort]=1&scope=0$$推荐$0&filter[attention]=0&filter[sort]=1&scope=1$$精华$1&filter[attention]=0&filter[sort]=1&scope=0$$评论时间$0&filter[attention]=0&filter[sort]=2&scope=0$$热门内容$0&filter[attention]=0&filter[sort]=3&scope=0";a=a.split("$$");b=b.split("$$");var items=[];for(var i in a){var az=a[i].split("$")[0];var ay=a[i].split("$")[1];for(var j in b){var bz=b[j].split("$")[0];var by=b[j].split("$")[1];items.push({title:az+"-"+bz,url:ay+by});}}JSON.stringify(items);',
        "列表规则":'var 列表=e2Arr(getCode(),".json(Data).json(pageData)");var 地址规则=".json(threadId)";var 标题规则=".json(title)";var 图片规则=".json(user).json(avatar)";var 简介规则=".json(content).json(text)";',
        "详情规则":'var 列表=e2Arr(getVar("CODE"),".json(detail).z(.+)");var 地址规则=".t().z(https://www.aliyundrive.com/s/[1-9a-zA-Z]+)";var 标题规则=".t()";'
    }
}
]
}
######普通列表
var NEXTPAGE=Number(getVar("PN"))+1;
function 通用列表(){
    var res={};var items=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        var 地址=e2Rex(CODE,地址规则);
        var 标题=e2Rex(CODE,标题规则);
        var 图片=e2Rex(CODE,图片规则);
        var 简介=e2Rex(CODE,简介规则);
       items.push({title:标题,url:地址,img:图片,detail:简介});
    }
    res.data=items;
    res.nextpage=getVar("前")+NEXTPAGE+getVar("后");
    return JSON.stringify(res);
}
eval(getVar("列表规则"));通用列表();
######详情列表
function 通用列表(){
    var res={};var items=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        var 地址=e2Rex(CODE,地址规则);
        var 标题=e2Rex(CODE,标题规则);
       items.push({title:标题,url:地址});
    }
    res.data=items;
    return JSON.stringify(res);
}
eval(getVar("详情规则"));通用列表();
