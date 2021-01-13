//var csv is the CSV file with headers

csv = document.querySelector("#csv")

var txtFile = new XMLHttpRequest();
txtFile.open("GET", csv.value, true);
txtFile.onreadystatechange = function()
{
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);
};



function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}