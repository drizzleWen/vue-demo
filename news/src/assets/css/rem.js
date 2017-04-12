/**
 * Created by wenjiang.dai on 2017/4/11.
 */
var fs = require("fs")

function format(filePath, keywords) {
    //  同步读取文件内容
    var content = fs.readFileSync(filePath, "utf-8")

    var arr = content.split("\n")

    var count = 0

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i]
        var temp
        temp = value.replace(/(\d+)px/g, function() {
            if (arguments[3].indexOf("@media") != -1 || arguments[3].indexOf("max") != -1 || arguments[3].indexOf("min") != -1) {

            } else if (Number(arguments[1]) > 1) {
                count++;
                // 这里可以自己维护换算规则
                return Number(arguments[1]) / 100 + "rem"
            }

            return arguments[0]
        })

        if (temp != arr[i]) {
            arr.splice(i + 1, 0, temp)
        }
    }

    var result = arr.join("\n")

    var formatFilePath = filePath.replace(".", keywords + ".");

    fs.writeFile(formatFilePath, result, "utf-8", function(err) {
        if (err) console.log(err)
        console.log("change lines number: " + count)
    })
}

format("home.css", "_format");