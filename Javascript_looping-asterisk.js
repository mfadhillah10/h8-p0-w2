// Looping asterisk

// 1. 
for (i = 1; i <= 5; i++){
    console.log('*')
}

// 2.
var bintang1 = '';
for (jj = 0; jj < 5; jj++){
  for (kk = 0; kk < 5; kk++){
        bintang1 += '*';
  }
    bintang1 += '\n'
}
    console.log(bintang1)

// 3.
var bintang = '';
for (j = 0; j < 5; j++){
  for (k = 0; k < j; k++){
        bintang += '*';
  }
    bintang += '\n'
}
    console.log(bintang)