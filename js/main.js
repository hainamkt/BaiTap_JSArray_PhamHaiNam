// Khởi tạo biên Array
var numArray = [];
document.getElementById('btnThemSo').onclick = function () {
    var num = Number(document.getElementById('inpNumber').value);
    numArray.push(num);
    document.getElementById('txtThemSo').innerHTML = numArray;
}

// Bài 1
document.getElementById('btnTotal1').onclick = function () {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            total += numArray[i];
        }
    }
    document.getElementById('txtTotal1').innerHTML = total;
}

// Bài 2
document.getElementById('btnTotal2').onclick = function () {
    var demSo = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            demSo++;
        }
    }
    document.getElementById('txtTotal2').innerHTML = demSo;
}

// Bài 3
document.getElementById("btnTotal3").onclick = function () {
    var min = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
        }
    }
    document.getElementById('txtTotal3').innerHTML = min;
}

// Bài 4
document.getElementById('btnTotal4').onclick = function () {
    var soDuong = [];
    // Tìm các số dương và đưa vào mảng
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong.push(numArray[i])
        };
    }
    // Tìm số dương nhỏ nhất
    var soMin = soDuong[0];
    for (var i = 0; i < soDuong.length; i++) {
        if (soMin > soDuong[i]) {
            soMin = soDuong[i];
        };
    }
    document.getElementById('txtTotal4').innerHTML = soMin;
}

// Bài 5
document.getElementById('btnTotal5').onclick = function () {
    var soChanCuoi = -1;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0){
            soChanCuoi = numArray[i];
        }
    }
    document.getElementById('txtTotal5').innerHTML = soChanCuoi;
}

// Bài 6
document.getElementById('btnTotal6').onclick = function () {
    // Tạo mảng mới 
    var newNumArray = [];
    for (var i = 0; i < numArray.length; i++) {
        newNumArray.push(numArray[i]);
    }
    var viTri1 = document.getElementById("inpViTri1").value;
    var viTri2 = document.getElementById("inpViTri2").value;

    //Thuật toán đổi chỗ
    var temp = newNumArray[viTri1];
    newNumArray[viTri1] = newNumArray[viTri2];
    newNumArray[viTri2] = temp;
    document.getElementById('txtTotal6').innerHTML = newNumArray;
}

// Bài 7
document.getElementById('btnTotal7').onclick = function () {
    var mangSapXep = [];
    for (var i = 0; i < numArray.length; i++){
        mangSapXep.push(numArray[i]);
    }
    for (var i = 0; i < mangSapXep.length; i++) {
        for (var j = 0; j < mangSapXep.length - 1; j++) {
            if (mangSapXep[j] > mangSapXep[j + 1]){
                var temp = mangSapXep[j];
                mangSapXep[j] = mangSapXep[j + 1];
                mangSapXep[j + 1] = temp;
            }
        }
    }
    document.getElementById('txtTotal7').innerHTML = mangSapXep;
}

// Bài 8
document.getElementById('btnTotal8').onclick = function () {
    var count = 0;
    var numFirst = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) >= 2) {
            for (var j = 2; j <= Math.sqrt(Number(numArray[i])); j++) {
                if (Number(numArray[i]) % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                numFirst = numArray[i];
                break;
            }
            count = 0;
        }
    }
    document.getElementById('txtTotal8').innerHTML = numFirst;
}

// Bài 9
var numArray2 = [];
document.getElementById('btnThemSo2').onclick = function () {
    var num = Number(document.getElementById('inpNumber2').value);
    numArray2.push(num);
    document.getElementById('txtThemSo2').innerHTML = numArray2;
}

document.getElementById('btnTotal9').onclick = function () {
    var count = 0;
    for (var i = 0; i < numArray2.length; i++) {
        if (Number.isInteger(numArray2[i]) == true) {
            count++;
        }
    }
    document.getElementById('txtTotal9').innerHTML = "Số nguyên: " + count;
}

// Bài 10
document.getElementById('btnTotal10').onclick = function () {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        }
        if (numArray[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById('txtTotal10').innerHTML = "Số dương"  + " > Số âm" ;
    } else if (soDuong < soAm) {
        document.getElementById('txtTotal10').innerHTML = "Số dương"  + " < Số âm" ;
    } else {
        document.getElementById('txtTotal10').innerHTML = "Số dương"  + " = Số âm" ;
    }
}