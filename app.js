const cal_data =[] ;
let valGet = (val) => {
    cal_data.push(val);
    document.querySelector('.top-monitor').innerHTML = cal_data.join('');
    document.querySelector('.main-monitor').innerHTML = 0;
}

let finalRes = () => {
    let cal_string = cal_data.join('');
    document.querySelector('.main-monitor').innerHTML = eval(cal_string);
}