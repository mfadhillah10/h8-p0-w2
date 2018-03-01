//Membuat format date

var tanggal = 10;
var bulan = 4;
var tahun = 1995;

switch
    (bulan) {
    case 1:
    {
    bulan = (tanggal + ' Januari ' + tahun);
    break;
    }

    case 2:
    {
    bulan = (tanggal + ' Februari ' + tahun);
    break;
    }

    case 3:
    {
    bulan = (tanggal + ' Maret ' + tahun);
    break;
    }

    case 4:
    {
    bulan = (tanggal + ' April ' + tahun);
    break;
    }

    case 5:
    {
    bulan = (tanggal + ' Mei ' + tahun);
    break;
    }

    case 6:
    {
    bulan = (tanggal + ' Juni ' + tahun);
    break;
    }

    case 7:
    {
    bulan = (tanggal + ' Juli ' + tahun);
    break;
    }

    case 8:
    {
    bulan = (tanggal + ' Agustus ' + tahun);
    break;
    }

    case 9:
    {
    bulan = (tanggal + ' September ' + tahun);
    break;
    }

    case 10:
    {
    bulan = (tanggal + ' Oktober ' + tahun);
    break;
    }

    case 11:
    {
    bulan = (tanggal + ' November ' + tahun);
    break;
    }

    case 12:
    {
    bulan = (tanggal + ' Desember ' + tahun);
    break;
    }

    default:
    {
    console.log('Tidak ada bulan ke-13!');
    break;
    }
}