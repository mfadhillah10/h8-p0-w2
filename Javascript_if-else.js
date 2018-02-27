// Membuat Game Proxytia

var nama = 'John';
var peran = '';

// Output untuk input nama = '', peran = ''
if (nama === '') {
    console.log('Nama harus diisi');
    }
// Output untuk input nama = 'John', peran = ''
else if 
    (peran === '') {
    console.log('Halo, '+nama+'. Pilih peranmu untuk memulai permainan.');
    }

//Output untuk input nama = 'John', peran = 'Ksatria'
else if
    (peran === 'Ksatria') {
    console.log('Selamat datang di dunia Proxytia, ' +nama);
    console.log('Halo ' +peran+ ' ' +nama+ ', kamu dapat menyerang dengan senjatamu.');
    }

//Output untuk input nama = 'John', peran = 'Tabib'
else if
    (peran == 'Tabib') {
    console.log('Selamat datang di dunia Proxytia, '+nama);
    console.log('Halo ' +peran+ ' ' +nama+', kamu akan membantu temanmu yang terluka.');
    }

//Output untuk input nama = 'John', peran = 'Penyihir'    
else if
    (peran == 'Penyihir') {
    console.log('Selamat datang di dunia Proxytia, '+nama);
    console.log('Halo ' +peran+ ' ' +nama+', kamu akan membantu temanmu yang terluka.');
    }
else {
    console.log('Mohon isi perannya dengan benar');
}