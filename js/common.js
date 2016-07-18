/**
 * Created by bdjb0205 on 2016/7/14.
 */
function getParaString (paras) {
    var paraString = "?";
    angular.forEach(paras, function(data,index,array){
        paraString = paraString + data.key + '="' + data.value + '"&';
    });
    return paraString;
}