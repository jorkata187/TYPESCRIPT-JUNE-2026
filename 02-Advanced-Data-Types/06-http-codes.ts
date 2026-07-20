interface TextCodes{
    code: 200 | 201 | 301;
    text: string
}

interface SliceTextCodes{
    code: 400 | 404 | 500;
    text: string;
    printChars?: number
}

function httpCodes(param: TextCodes | SliceTextCodes) {
    switch(param.code) {
        case 200:
        case 201:
        case 301:
            console.log(param.text);
            break;
        case 400:
        case 404:
        case 500:
            console.log(param.text.slice(0, param.printChars));
            break;
    }
}