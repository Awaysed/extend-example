

var Validator = function(){
    this.cache = [];  // 保存效验规则
};
Validator.prototype.add = function(dom,rule,errorMsg) {
var str = rule.split(":");
this.cache.push(function(){
    // str 返回的是 minLength:6 
    var strategy = str.shift();
    str.unshift(dom.value); // 把input的value添加进参数列表
    str.push(errorMsg);  // 把errorMsg添加进参数列表
    return strategys[strategy].apply(dom,str);
});
};
Validator.prototype.start = function(){
for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]; ) {
    var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
    if(msg) {
        return msg;
    }
}
};

