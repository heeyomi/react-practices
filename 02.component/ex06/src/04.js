import fs from 'fs';
import update from 'react-form-update';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    
    // 해당 패스 값 변경
    receive : { $set :'부산시 해운대구 우동'},
    paymenet : { method: {$set : 'Mobile'}},
    products : {
        $push : [{}, {}]
    }    
}
);