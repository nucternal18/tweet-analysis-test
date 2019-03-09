//const data = require('../mocks')
export const getTweetsBySearchString = (str, str2) => { 
    let myArr = [];
    let tot = [];
    let myArr2 = [];
    let myHashStr = [];
    

    for (let i = 0; i < data.length; i++) {
        if (data[i].text.includes(str)){
            myArr.push(data[i].text)
        }

    };

    for (let i = 0; i < data.length; i++) {
        if (data[i].text.includes(str2)){
            myArr2.push(data[i].text)
        }
    };
    const myArr3 = myArr2.toString().split(' ');
    for (let i = 0; i < myArr3.length; i++){
        if (myArr3[i].includes(str2)) {
            myHashStr.push(myArr3[i])
        }
    
    }

    for (let i = 0; i < data.length; i++) {
        tot.push(data[i].likes)
    
    }

    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

    return [myArr, myHashStr, arrSum(tot)]
    


};



