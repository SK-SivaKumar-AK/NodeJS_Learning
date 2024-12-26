const fs = require('fs');
const path = require('path');


const getUser = (email) => {
    const bufferData = fs.readFileSync(path.join(__dirname , '..' , 'data' , 'user.json'));
    const jsonData = JSON.parse(bufferData);

    const filterData = jsonData.filter((user) =>{
        return user.email == email;
    });
    if(filterData.length > 0){
        return filterData[0];
    }
    return null;
};



module.exports = {
    getUser
}