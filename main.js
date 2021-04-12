
function lottery() {
    var awards = getAwards();
    var list = getList();

    var resultTextArea = document.getElementById('resultArea');
    resultTextArea.value = "";
    for (var i = 0; i < awards.length; i++) {
        var randItem = rand(list);
        if (randItem == undefined) {
            randItem = "獎項數量大於名單數量，無法抽出";
        }
        var result = "-----------------------\n" + awards[i] + "\n" + randItem;
        appendResult(resultTextArea, result);
        list = list.filter(function(e) { return e !== randItem });
    }
}

function appendResult(resultTextArea, result) {
    resultTextArea.value += result + "\n";
    resultTextArea.scrollTop = resultTextArea.scrollHeight;
}

function rand(items) {
    return items[~~(items.length * Math.random())];
}

function getAwards() {
    var aText = document.getElementById('awardsTextArea').value;
    if (aText.length <= 0) {
        return alert('請輸入獎項');
    }
    var a = aText.split('\n');
    if (a.count <= 0) {
        return alert('請輸入獎項');
    }
    a = a.filter(function (el) {el = el.split(' ').join(''); return el.length > 0 });
    return a;
}

function getList() {
    var lText = document.getElementById('listTextArea').value;
    if (lText.length <= 0) {
        return alert('請輸入名單');
    }
    var l = lText.split('\n');
    if (l.count <= 0) {
        return alert('請輸入名單');
    }
    l = l.filter(function (el) {el = el.split(' ').join(''); return el.length > 0 });
    return l;
}

function downloadResult(){
    var result = document.getElementById('resultArea').value;
    if (result.length <=0 ) {return alert("無抽獎結果")};
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
    element.setAttribute('download', "result");
    element.click();
}
