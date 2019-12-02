import { db } from '@iso/lib/firebase/firebase';

const demoData = {
  users: [
    {
      key: 'wt4TiasxgPrQ3dNwVZ55',
      data: {
        dob: '06-Apr-1993',
        gender: 'Male',
        language: 'Burmese',
        mobileNo: '5726784596',
        name: 'Zondra Kulic',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-zonra.png',
      },
    },
    {
      key: '0lAR4PcX71m7MPOTRIFF',
      data: {
        dob: '13-Sep-1994',
        gender: 'Male',
        language: 'Sotho',
        mobileNo: '9572447092',
        name: 'Carien Fruen',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-portrait.png',
      },
    },
    {
      key: '3M9ySG4N5RBGYmmiopy5',
      data: {
        dob: '18-Dec-1994',
        gender: 'Male',
        language: 'Malayalam',
        mobileNo: '5450953445',
        name: 'Lehman Robken',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-thinking.png',
      },
    },
    {
      key: 'FBKMBWcz3WEqQOk7JTjQ',
      data: {
        dob: '22-Apr-1992',
        gender: 'Male',
        language: 'Bosnian',
        mobileNo: '9429692135',
        name: 'Doren Gerrard',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-smile.png',
      },
    },
    {
      key: 'FFdV0wFq1hkW01TPd7lG',
      data: {
        dob: '13-Feb-2000',
        gender: 'Male',
        language: 'Swedish',
        mobileNo: '3501026382',
        name: 'Jao Smith',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-hat.png',
      },
    },
    {
      key: 'Ids5pjPKD5tEEkLsZ6mu',
      data: {
        dob: '17-Jun-1998',
        gender: 'Male',
        language: 'Mongolian',
        mobileNo: '8432025739',
        name: 'Alen Rush',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-window.png',
      },
    },
    {
      key: 'JsEFKqIquyMk645chSFd',
      data: {
        dob: '28-Mar-2000',
        gender: 'Male',
        language: 'Tsonga',
        mobileNo: '3084621977',
        name: 'Howard Webber',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-professional.png',
      },
    },
    {
      key: 'PoMf0N2iwPGczS14EsMA',
      data: {
        dob: '27-Jan-1991',
        gender: 'Male',
        language: 'Maltese',
        mobileNo: '4605287981',
        name: 'Ben Abrahomov',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-mobile.png',
      },
    },
    {
      key: 'QXYdLx0iVUXyEaU9tLhz',
      data: {
        dob: '31-Jan-1993',
        gender: 'Female',
        language: 'Spanish',
        mobileNo: '1212498836',
        name: 'Felicity Shorbrook',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-laptop.png',
      },
    },
    {
      key: 'UAXUbX1Ox4WQXRJJV6AA',
      data: {
        dob: '09-Mar-1997',
        gender: 'Female',
        language: 'Ndebele',
        mobileNo: '0337555648',
        name: 'Tara Bonnin',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-spain.png',
      },
    },
    {
      key: 'bkmdgtmwa4eb1pMomNDt',
      data: {
        dob: '29-Sep-1999',
        gender: 'Female',
        language: 'Dutch',
        mobileNo: '8002850483',
        name: 'Cecelia Tigner',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-chinese.png',
      },
    },
    {
      key: 'd3RlA7hw2hoUb3bBfzi2',
      data: {
        dob: '26-Feb-1995',
        gender: 'Female',
        language: 'Dari',
        mobileNo: '2886843121',
        name: 'Janifer Macky',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-sunglass.png',
      },
    },
    {
      key: 'nlE90pVpMPA4idOBD1cP',
      data: {
        dob: '09-Mar-2000',
        gender: 'Female',
        language: 'Swati',
        mobileNo: '7960813167',
        name: 'Mitchel Hadid',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-sideway.png',
      },
    },
    {
      key: 'oFqcOM6FjsS1XACsCVwv',
      data: {
        dob: '02-Aug-1991',
        gender: 'Female',
        language: 'Arabic',
        mobileNo: '2956829807',
        name: 'Trixie Northcliffe',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-senior.png',
      },
    },
    {
      key: 'pGgXVBOQtd2Zjlwzjo0w',
      data: {
        dob: '29-Jul-2000',
        gender: 'Female',
        language: 'Icelandic',
        mobileNo: '9588591899',
        name: 'Cal Leggitt',
        profileImageUrl:
          'https://s3.amazonaws.com/redqteam.com/mateadmin/support-female-coffee.png',
      },
    },
  ],
  chatRooms: [
    {
      key: '-L2ZNtIAFMPGa_Me56YN',
      data: {
        id: '-L2ZNtIAFMPGa_Me56YN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIG-NuZ4QEtGiEF',
      data: {
        id: '-L2ZNtIG-NuZ4QEtGiEF',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIHf0MI-ifIbqxV',
      data: {
        id: '-L2ZNtIHf0MI-ifIbqxV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIID9eguaIh_YBR',
      data: {
        id: '-L2ZNtIID9eguaIh_YBR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIID9eguaIh_YBS',
      data: {
        id: '-L2ZNtIID9eguaIh_YBS',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIID9eguaIh_YBT',
      data: {
        id: '-L2ZNtIID9eguaIh_YBT',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIJVtc9w2Ek6iDb',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIJVtc9w2Ek6iDc',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDc',
        lastMessage: 'hello',
        lastMessageTime: 1517318066860,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIJVtc9w2Ek6iDd',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDd',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIKBWrZFh6GpcyN',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIKBWrZFh6GpcyO',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIKBWrZFh6GpcyP',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtIKBWrZFh6GpcyQ',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtILakxHPFhocHIc',
      data: {
        id: '-L2ZNtILakxHPFhocHIc',
        lastMessage: 'You are Welcome.',
        lastMessageTime: 1520246531720,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: '0lAR4PcX71m7MPOTRIFF',
      },
    },
    {
      key: '-L2ZNtILakxHPFhocHId',
      data: {
        id: '-L2ZNtILakxHPFhocHId',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtILakxHPFhocHIe',
      data: {
        id: '-L2ZNtILakxHPFhocHIe',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtILakxHPFhocHIf',
      data: {
        id: '-L2ZNtILakxHPFhocHIf',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIMQzKe_P5i5wRB',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRB',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIMQzKe_P5i5wRC',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRC',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIMQzKe_P5i5wRD',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIMQzKe_P5i5wRE',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRE',
        lastMessage: 'hi people',
        lastMessageTime: 1519726880913,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIN3oP_1hCSsusZ',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusZ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIN3oP_1hCSsus_',
      data: {
        id: '-L2ZNtIN3oP_1hCSsus_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIN3oP_1hCSsusa',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusa',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIN3oP_1hCSsusb',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIOoRqAu2c_HLmW',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIOoRqAu2c_HLmX',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmX',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: '-L2ZNtIOoRqAu2c_HLmY',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmY',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIP3DfeHfNAAAR4',
      data: {
        id: '-L2ZNtIP3DfeHfNAAAR4',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIP3DfeHfNAAAR5',
      data: {
        id: '-L2ZNtIP3DfeHfNAAAR5',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIQ1SGS-nBT5V5N',
      data: {
        id: '-L2ZNtIQ1SGS-nBT5V5N',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIQ1SGS-nBT5V5O',
      data: {
        id: '-L2ZNtIQ1SGS-nBT5V5O',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIRD_z4UHaU_hAM',
      data: {
        id: '-L2ZNtIRD_z4UHaU_hAM',
        lastMessage: 'hello there',
        lastMessageTime: 1518422325235,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIRD_z4UHaU_hAN',
      data: {
        id: '-L2ZNtIRD_z4UHaU_hAN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtITmVX6rMXsYeec',
      data: {
        id: '-L2ZNtITmVX6rMXsYeec',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIVIx4S-2baPBIm',
      data: {
        id: '-L2ZNtIVIx4S-2baPBIm',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIXP20WptvISvZ7',
      data: {
        id: '-L2ZNtIXP20WptvISvZ7',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIXP20WptvISvZ8',
      data: {
        id: '-L2ZNtIXP20WptvISvZ8',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIYa9lPWCmLDOOb',
      data: {
        id: '-L2ZNtIYa9lPWCmLDOOb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: '-L2ZNtIZlSAMNs0ETVPq',
      data: {
        id: '-L2ZNtIZlSAMNs0ETVPq',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIZlSAMNs0ETVPr',
      data: {
        id: '-L2ZNtIZlSAMNs0ETVPr',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtI_uiqqapNHHxC_',
      data: {
        id: '-L2ZNtI_uiqqapNHHxC_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIaoEGALQYYrtAC',
      data: {
        id: '-L2ZNtIaoEGALQYYrtAC',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIaoEGALQYYrtAD',
      data: {
        id: '-L2ZNtIaoEGALQYYrtAD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIb08g1fSpi272w',
      data: {
        id: '-L2ZNtIb08g1fSpi272w',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIb08g1fSpi272x',
      data: {
        id: '-L2ZNtIb08g1fSpi272x',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIcXnshXBbGR-aA',
      data: {
        id: '-L2ZNtIcXnshXBbGR-aA',
        lastMessage: 'Hello',
        lastMessageTime: 1520078578497,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIdiut6c4tvudFJ',
      data: {
        id: '-L2ZNtIdiut6c4tvudFJ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIdiut6c4tvudFK',
      data: {
        id: '-L2ZNtIdiut6c4tvudFK',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIfXTI1nedEdf8J',
      data: {
        id: '-L2ZNtIfXTI1nedEdf8J',
        lastMessage: 'Happy Shopping :)',
        lastMessageTime: 1520245460917,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: '-L2ZNtIgnfCegMCaDteP',
      data: {
        id: '-L2ZNtIgnfCegMCaDteP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIgnfCegMCaDteQ',
      data: {
        id: '-L2ZNtIgnfCegMCaDteQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIgnfCegMCaDteR',
      data: {
        id: '-L2ZNtIgnfCegMCaDteR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIhVl-lhEhHH8Tl',
      data: {
        id: '-L2ZNtIhVl-lhEhHH8Tl',
        lastMessage: 'sdsdsdsdsddsdsdsdsdsdsdsddsdsdsdd',
        lastMessageTime: 1519675520969,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIlQ2TtuNVTFgAQ',
      data: {
        id: '-L2ZNtIlQ2TtuNVTFgAQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIn5Q1qjVziEjaL',
      data: {
        id: '-L2ZNtIn5Q1qjVziEjaL',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIqqTiWLaSvh7B9',
      data: {
        id: '-L2ZNtIqqTiWLaSvh7B9',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIrcO9BeKCOdQPQ',
      data: {
        id: '-L2ZNtIrcO9BeKCOdQPQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIrcO9BeKCOdQPR',
      data: {
        id: '-L2ZNtIrcO9BeKCOdQPR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIsaHDwlZclVxgT',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgT',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '-L2ZNtIsaHDwlZclVxgU',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgU',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIsaHDwlZclVxgV',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIty607vQ72V5JC',
      data: {
        id: '-L2ZNtIty607vQ72V5JC',
        lastMessage: 'awesomeness loaded',
        lastMessageTime: 1517752419094,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIty607vQ72V5JD',
      data: {
        id: '-L2ZNtIty607vQ72V5JD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIty607vQ72V5JE',
      data: {
        id: '-L2ZNtIty607vQ72V5JE',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIty607vQ72V5JF',
      data: {
        id: '-L2ZNtIty607vQ72V5JF',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIvym5S4-tZSvlP',
      data: {
        id: '-L2ZNtIvym5S4-tZSvlP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIvym5S4-tZSvlQ',
      data: {
        id: '-L2ZNtIvym5S4-tZSvlQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIwhTWinsIXiZaL',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaL',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '-L2ZNtIwhTWinsIXiZaM',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaM',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtIwhTWinsIXiZaN',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaN',
        lastMessage: 'sds',
        lastMessageTime: 1519673204490,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtIxTQ0C0yXeziyf',
      data: {
        id: '-L2ZNtIxTQ0C0yXeziyf',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtIxTQ0C0yXeziyg',
      data: {
        id: '-L2ZNtIxTQ0C0yXeziyg',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtIyUDpWQzXh9x4I',
      data: {
        id: '-L2ZNtIyUDpWQzXh9x4I',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtIz0ry7tVUgibn5',
      data: {
        id: '-L2ZNtIz0ry7tVUgibn5',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtJ-93dW0G4upOzr',
      data: {
        id: '-L2ZNtJ-93dW0G4upOzr',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtJ064f4YxSOTR0E',
      data: {
        id: '-L2ZNtJ064f4YxSOTR0E',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '-L2ZNtJ064f4YxSOTR0F',
      data: {
        id: '-L2ZNtJ064f4YxSOTR0F',
        lastMessage: 'sasdas sadasd',
        lastMessageTime: 1517752367929,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ1F02JyT8SXlQ1',
      data: {
        id: '-L2ZNtJ1F02JyT8SXlQ1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ2u9mVpTjFtKA4',
      data: {
        id: '-L2ZNtJ2u9mVpTjFtKA4',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ3YDUcGkDVSfAa',
      data: {
        id: '-L2ZNtJ3YDUcGkDVSfAa',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ4bXrPFLFP-dtI',
      data: {
        id: '-L2ZNtJ4bXrPFLFP-dtI',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ58ZDpNp_-fzH1',
      data: {
        id: '-L2ZNtJ58ZDpNp_-fzH1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ58ZDpNp_-fzH2',
      data: {
        id: '-L2ZNtJ58ZDpNp_-fzH2',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: '-L2ZNtJ64DaEeXY0_6FN',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJ64DaEeXY0_6FO',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJ64DaEeXY0_6FP',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJ7WIODHHv0JJsM',
      data: {
        id: '-L2ZNtJ7WIODHHv0JJsM',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJ9RgHI-AXNRRnV',
      data: {
        id: '-L2ZNtJ9RgHI-AXNRRnV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJ9RgHI-AXNRRnW',
      data: {
        id: '-L2ZNtJ9RgHI-AXNRRnW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: '-L2ZNtJALP-9OYS5pRp1',
      data: {
        id: '-L2ZNtJALP-9OYS5pRp1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '-L2ZNtJBnp7KDxCuKsc0',
      data: {
        id: '-L2ZNtJBnp7KDxCuKsc0',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '-L2ZNtJBnp7KDxCuKsc1',
      data: {
        id: '-L2ZNtJBnp7KDxCuKsc1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '-L2ZNtJE_QF1uUMo1RKO',
      data: {
        id: '-L2ZNtJE_QF1uUMo1RKO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '-L2ZNtJFpPOikrNUhj8f',
      data: {
        id: '-L2ZNtJFpPOikrNUhj8f',
        lastMessage: 'Thank you.',
        lastMessageTime: 1520245807251,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '-L2ZNtJGcdTCzIS4n1pA',
      data: {
        id: '-L2ZNtJGcdTCzIS4n1pA',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '-L2ZNtJGcdTCzIS4n1pB',
      data: {
        id: '-L2ZNtJGcdTCzIS4n1pB',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '-L2ZNtJHNpuFiHWY3Hop',
      data: {
        id: '-L2ZNtJHNpuFiHWY3Hop',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '-L2ZNtJJz-enqmeTCDf_',
      data: {
        id: '-L2ZNtJJz-enqmeTCDf_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '-L2ZNtJLheV2cFUuu_sV',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: '-L2ZNtJLheV2cFUuu_sW',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: '-L2ZNtJLheV2cFUuu_sX',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sX',
        lastMessage: "You're most welcome !",
        lastMessageTime: 1520246267108,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: '-L2ZNtJMfBVxk7SCFesI',
      data: {
        id: '-L2ZNtJMfBVxk7SCFesI',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: '-L2ZNtJNkDxPoGMHJQ8E',
      data: {
        id: '-L2ZNtJNkDxPoGMHJQ8E',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: '-L2ZNtJPTSUefHsag86z',
      data: {
        id: '-L2ZNtJPTSUefHsag86z',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'wt4TiasxgPrQ3dNwVZ55',
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: '0csKuCxDK7pnBJtNZ2L-',
      data: {
        id: '-L2ZNtJBnp7KDxCuKsc0',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: '1Hzf-_pNpDZ85JtNZ2L-',
      data: {
        id: '-L2ZNtJ58ZDpNp_-fzH1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: '1QlXS8TyJ20F1JtNZ2L-',
      data: {
        id: '-L2ZNtJ1F02JyT8SXlQ1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '1csKuCxDK7pnBJtNZ2L-',
      data: {
        id: '-L2ZNtJBnp7KDxCuKsc1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: '1pRp5SYO9-PLAJtNZ2L-',
      data: {
        id: '-L2ZNtJALP-9OYS5pRp1',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '2Hzf-_pNpDZ85JtNZ2L-',
      data: {
        id: '-L2ZNtJ58ZDpNp_-fzH2',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: '4AKtFjTpVm9u2JtNZ2L-',
      data: {
        id: '-L2ZNtJ2u9mVpTjFtKA4',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: '4RAAANfHefD3PItNZ2L-',
      data: {
        id: '-L2ZNtIP3DfeHfNAAAR4',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: '5RAAANfHefD3PItNZ2L-',
      data: {
        id: '-L2ZNtIP3DfeHfNAAAR5',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: '5nbigUVt7yr0zItNZ2L-',
      data: {
        id: '-L2ZNtIz0ry7tVUgibn5',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: '7ZvSIvtpW02PXItNZ2L-',
      data: {
        id: '-L2ZNtIXP20WptvISvZ7',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: '8ZvSIvtpW02PXItNZ2L-',
      data: {
        id: '-L2ZNtIXP20WptvISvZ8',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: '9B7hvSaLWiTqqItNZ2L-',
      data: {
        id: '-L2ZNtIqqTiWLaSvh7B9',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'Aa-RGbBXhsnXcItNZ2L-',
      data: {
        id: '-L2ZNtIcXnshXBbGR-aA',
        lastMessage: 'Hello',
        lastMessageTime: 1520078578497,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'Ap1n4SIzCTdcGJtNZ2L-',
      data: {
        id: '-L2ZNtJGcdTCzIS4n1pA',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'BRw5i5P_eKzQMItNZ2L-',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRB',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: 'Bp1n4SIzCTdcGJtNZ2L-',
      data: {
        id: '-L2ZNtJGcdTCzIS4n1pB',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'CAtrYYQLAGEoaItNZ2L-',
      data: {
        id: '-L2ZNtIaoEGALQYYrtAC',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'CJ5V27Qv706ytItNZ2L-',
      data: {
        id: '-L2ZNtIty607vQ72V5JC',
        lastMessage: 'awesomeness loaded',
        lastMessageTime: 1517752419094,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'CRw5i5P_eKzQMItNZ2L-',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRC',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: 'DAtrYYQLAGEoaItNZ2L-',
      data: {
        id: '-L2ZNtIaoEGALQYYrtAD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'DJ5V27Qv706ytItNZ2L-',
      data: {
        id: '-L2ZNtIty607vQ72V5JD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'DRw5i5P_eKzQMItNZ2L-',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRD',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'E0RTOSxY4f460JtNZ2L-',
      data: {
        id: '-L2ZNtJ064f4YxSOTR0E',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'E8QJHMGoPxDkNJtNZ2L-',
      data: {
        id: '-L2ZNtJNkDxPoGMHJQ8E',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'EJ5V27Qv706ytItNZ2L-',
      data: {
        id: '-L2ZNtIty607vQ72V5JE',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'ERw5i5P_eKzQMItNZ2L-',
      data: {
        id: '-L2ZNtIMQzKe_P5i5wRE',
        lastMessage: 'hi people',
        lastMessageTime: 1519726880913,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'F0RTOSxY4f460JtNZ2L-',
      data: {
        id: '-L2ZNtJ064f4YxSOTR0F',
        lastMessage: 'sasdas sadasd',
        lastMessageTime: 1517752367929,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'FEiGtEQ4ZuN-GItNZ2L-',
      data: {
        id: '-L2ZNtIG-NuZ4QEtGiEF',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: 'FJ5V27Qv706ytItNZ2L-',
      data: {
        id: '-L2ZNtIty607vQ72V5JF',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'I4x9hXzQWpDUyItNZ2L-',
      data: {
        id: '-L2ZNtIyUDpWQzXh9x4I',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'IseFCS7kxVBfMJtNZ2L-',
      data: {
        id: '-L2ZNtJMfBVxk7SCFesI',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'oFqcOM6FjsS1XACsCVwv',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'Itd-PFLFPrXb4JtNZ2L-',
      data: {
        id: '-L2ZNtJ4bXrPFLFP-dtI',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'J8fdEden1ITXfItNZ2L-',
      data: {
        id: '-L2ZNtIfXTI1nedEdf8J',
        lastMessage: 'Happy Shopping :)',
        lastMessageTime: 1520245460917,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'JFduvt4c6tuidItNZ2L-',
      data: {
        id: '-L2ZNtIdiut6c4tvudFJ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'KFduvt4c6tuidItNZ2L-',
      data: {
        id: '-L2ZNtIdiut6c4tvudFK',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'LaZiXIsniWThwItNZ2L-',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaL',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'LajEizVjq1Q5nItNZ2L-',
      data: {
        id: '-L2ZNtIn5Q1qjVziEjaL',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'MAh_UaHU4z_DRItNZ2L-',
      data: {
        id: '-L2ZNtIRD_z4UHaU_hAM',
        lastMessage: 'hello there',
        lastMessageTime: 1518422325235,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'MaZiXIsniWThwItNZ2L-',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaM',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'MsJJ0vHHDOIW7JtNZ2L-',
      data: {
        id: '-L2ZNtJ7WIODHHv0JJsM',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'N5V5TBn-SGS1QItNZ2L-',
      data: {
        id: '-L2ZNtIQ1SGS-nBT5V5N',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: 'NAh_UaHU4z_DRItNZ2L-',
      data: {
        id: '-L2ZNtIRD_z4UHaU_hAN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'NF6_0YXeEaD46JtNZ2L-',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'NY65eM_aGPMFAItNZ2L-',
      data: {
        id: '-L2ZNtIAFMPGa_Me56YN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: '3M9ySG4N5RBGYmmiopy5',
      },
    },
    {
      key: 'NaZiXIsniWThwItNZ2L-',
      data: {
        id: '-L2ZNtIwhTWinsIXiZaN',
        lastMessage: 'sds',
        lastMessageTime: 1519673204490,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'NycpG6hFZrWBKItNZ2L-',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyN',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'O5V5TBn-SGS1QItNZ2L-',
      data: {
        id: '-L2ZNtIQ1SGS-nBT5V5O',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'OF6_0YXeEaD46JtNZ2L-',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'OKR1oMUu1FQ_EJtNZ2L-',
      data: {
        id: '-L2ZNtJE_QF1uUMo1RKO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'OycpG6hFZrWBKItNZ2L-',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyO',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'PF6_0YXeEaD46JtNZ2L-',
      data: {
        id: '-L2ZNtJ64DaEeXY0_6FP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'PetDaCMgeCfngItNZ2L-',
      data: {
        id: '-L2ZNtIgnfCegMCaDteP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: 'PlvSZt-4S5myvItNZ2L-',
      data: {
        id: '-L2ZNtIvym5S4-tZSvlP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'PycpG6hFZrWBKItNZ2L-',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyP',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'QAgFTVNutT2QlItNZ2L-',
      data: {
        id: '-L2ZNtIlQ2TtuNVTFgAQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'QPQdOCKeB9OcrItNZ2L-',
      data: {
        id: '-L2ZNtIrcO9BeKCOdQPQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'QetDaCMgeCfngItNZ2L-',
      data: {
        id: '-L2ZNtIgnfCegMCaDteQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: 'QlvSZt-4S5myvItNZ2L-',
      data: {
        id: '-L2ZNtIvym5S4-tZSvlQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'QycpG6hFZrWBKItNZ2L-',
      data: {
        id: '-L2ZNtIKBWrZFh6GpcyQ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'RBY_hIauge9DIItNZ2L-',
      data: {
        id: '-L2ZNtIID9eguaIh_YBR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: 'RPQdOCKeB9OcrItNZ2L-',
      data: {
        id: '-L2ZNtIrcO9BeKCOdQPR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'RetDaCMgeCfngItNZ2L-',
      data: {
        id: '-L2ZNtIgnfCegMCaDteR',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'SBY_hIauge9DIItNZ2L-',
      data: {
        id: '-L2ZNtIID9eguaIh_YBS',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: 'TBY_hIauge9DIItNZ2L-',
      data: {
        id: '-L2ZNtIID9eguaIh_YBT',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: 'TgxVlcZlwDHasItNZ2L-',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgT',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'UgxVlcZlwDHasItNZ2L-',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgU',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: 'VgxVlcZlwDHasItNZ2L-',
      data: {
        id: '-L2ZNtIsaHDwlZclVxgV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'JsEFKqIquyMk645chSFd',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'VnRRNXA-IHgR9JtNZ2L-',
      data: {
        id: '-L2ZNtJ9RgHI-AXNRRnV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'Vs_uuUFc2VehLJtNZ2L-',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'VxqbIfi-IM0fHItNZ2L-',
      data: {
        id: '-L2ZNtIHf0MI-ifIbqxV',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: 'WmLH_c2uAqRoOItNZ2L-',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'WnRRNXA-IHgR9JtNZ2L-',
      data: {
        id: '-L2ZNtJ9RgHI-AXNRRnW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'UAXUbX1Ox4WQXRJJV6AA',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'Ws_uuUFc2VehLJtNZ2L-',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sW',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'XmLH_c2uAqRoOItNZ2L-',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmX',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'Xs_uuUFc2VehLJtNZ2L-',
      data: {
        id: '-L2ZNtJLheV2cFUuu_sX',
        lastMessage: "You're most welcome !",
        lastMessageTime: 1520246267108,
        otherUserId: 'nlE90pVpMPA4idOBD1cP',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'YmLH_c2uAqRoOItNZ2L-',
      data: {
        id: '-L2ZNtIOoRqAu2c_HLmY',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: 'ZsusSCh1_Po3NItNZ2L-',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusZ',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: '_CxHHNpaqqiu_ItNZ2L-',
      data: {
        id: '-L2ZNtI_uiqqapNHHxC_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'PoMf0N2iwPGczS14EsMA',
      },
    },
    {
      key: '_fDCTemqne-zJJtNZ2L-',
      data: {
        id: '-L2ZNtJJz-enqmeTCDf_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: '_susSCh1_Po3NItNZ2L-',
      data: {
        id: '-L2ZNtIN3oP_1hCSsus_',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'aAfSVDkGcUDY3JtNZ2L-',
      data: {
        id: '-L2ZNtJ3YDUcGkDVSfAa',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'QXYdLx0iVUXyEaU9tLhz',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'asusSCh1_Po3NItNZ2L-',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusa',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'bDi6kE2w9ctVJItNZ2L-',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'QXYdLx0iVUXyEaU9tLhz',
      },
    },
    {
      key: 'bOODLmCWPl9aYItNZ2L-',
      data: {
        id: '-L2ZNtIYa9lPWCmLDOOb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'bsusSCh1_Po3NItNZ2L-',
      data: {
        id: '-L2ZNtIN3oP_1hCSsusb',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'oFqcOM6FjsS1XACsCVwv',
      },
    },
    {
      key: 'cDi6kE2w9ctVJItNZ2L-',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDc',
        lastMessage: 'hello',
        lastMessageTime: 1517318066860,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'cIHcohFPHxkaLItNZ2L-',
      data: {
        id: '-L2ZNtILakxHPFhocHIc',
        lastMessage: 'You are Welcome.',
        lastMessageTime: 1520246531720,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'ceeYsXMr6XVmTItNZ2L-',
      data: {
        id: '-L2ZNtITmVX6rMXsYeec',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'dDi6kE2w9ctVJItNZ2L-',
      data: {
        id: '-L2ZNtIJVtc9w2Ek6iDd',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '0lAR4PcX71m7MPOTRIFF',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'dIHcohFPHxkaLItNZ2L-',
      data: {
        id: '-L2ZNtILakxHPFhocHId',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'FBKMBWcz3WEqQOk7JTjQ',
      },
    },
    {
      key: 'eIHcohFPHxkaLItNZ2L-',
      data: {
        id: '-L2ZNtILakxHPFhocHIe',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'FFdV0wFq1hkW01TPd7lG',
      },
    },
    {
      key: 'f8jhUNrkiOPpFJtNZ2L-',
      data: {
        id: '-L2ZNtJFpPOikrNUhj8f',
        lastMessage: 'Thank you.',
        lastMessageTime: 1520245807251,
        otherUserId: 'bkmdgtmwa4eb1pMomNDt',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
    {
      key: 'fIHcohFPHxkaLItNZ2L-',
      data: {
        id: '-L2ZNtILakxHPFhocHIf',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: '3M9ySG4N5RBGYmmiopy5',
        reverse: true,
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: 'fyizeXy0C0QTxItNZ2L-',
      data: {
        id: '-L2ZNtIxTQ0C0yXeziyf',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'gyizeXy0C0QTxItNZ2L-',
      data: {
        id: '-L2ZNtIxTQ0C0yXeziyg',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'lT8HHhEhl-lVhItNZ2L-',
      data: {
        id: '-L2ZNtIhVl-lhEhHH8Tl',
        lastMessage: 'sdsdsdsdsddsdsdsdsdsdsdsddsdsdsdd',
        lastMessageTime: 1519675520969,
        otherUserId: 'Ids5pjPKD5tEEkLsZ6mu',
        reverse: true,
        userId: 'UAXUbX1Ox4WQXRJJV6AA',
      },
    },
    {
      key: 'mIBPab2-S4xIVItNZ2L-',
      data: {
        id: '-L2ZNtIVIx4S-2baPBIm',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FBKMBWcz3WEqQOk7JTjQ',
        reverse: true,
        userId: 'nlE90pVpMPA4idOBD1cP',
      },
    },
    {
      key: 'poH3YWHiFupNHJtNZ2L-',
      data: {
        id: '-L2ZNtJHNpuFiHWY3Hop',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'd3RlA7hw2hoUb3bBfzi2',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'qPVTE0sNMASlZItNZ2L-',
      data: {
        id: '-L2ZNtIZlSAMNs0ETVPq',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'Ids5pjPKD5tEEkLsZ6mu',
      },
    },
    {
      key: 'rPVTE0sNMASlZItNZ2L-',
      data: {
        id: '-L2ZNtIZlSAMNs0ETVPr',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'JsEFKqIquyMk645chSFd',
      },
    },
    {
      key: 'rzOpu4G0Wd39-JtNZ2L-',
      data: {
        id: '-L2ZNtJ-93dW0G4upOzr',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'PoMf0N2iwPGczS14EsMA',
        reverse: true,
        userId: 'pGgXVBOQtd2Zjlwzjo0w',
      },
    },
    {
      key: 'w272ipSf1g80bItNZ2L-',
      data: {
        id: '-L2ZNtIb08g1fSpi272w',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'bkmdgtmwa4eb1pMomNDt',
      },
    },
    {
      key: 'x272ipSf1g80bItNZ2L-',
      data: {
        id: '-L2ZNtIb08g1fSpi272x',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'FFdV0wFq1hkW01TPd7lG',
        reverse: true,
        userId: 'd3RlA7hw2hoUb3bBfzi2',
      },
    },
    {
      key: 'z68gasHfeUSTPJtNZ2L-',
      data: {
        id: '-L2ZNtJPTSUefHsag86z',
        lastMessage: '',
        lastMessageTime: 0,
        otherUserId: 'pGgXVBOQtd2Zjlwzjo0w',
        reverse: true,
        userId: 'wt4TiasxgPrQ3dNwVZ55',
      },
    },
  ],
  messages: [
    {
      key: '-L2ZOXGKzP_GJypCLMor',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1515660387407,
        sender: '3M9ySG4N5RBGYmmiopy5',
        text: 'hello there',
      },
    },
    {
      key: '-L2ZObljUUtWahSi32yg',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1515660410654,
        sender: '3M9ySG4N5RBGYmmiopy5',
        text: 'how are you',
      },
    },
    {
      key: '-L455iHTp6CL1t22CAMN',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517299623054,
        sender: '3M9ySG4N5RBGYmmiopy5',
        text: 'laksldaslkda',
      },
    },
    {
      key: '-L455m0dfz5OLJQJEPtp',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517299638486,
        sender: '3M9ySG4N5RBGYmmiopy5',
        text: 'asdasd',
      },
    },
    {
      key: '-L45qZpMKkGoUftPUav5',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517312167245,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'something',
      },
    },
    {
      key: '-L45vfStWXkUp5pAd15Q',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517313505136,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'more text',
      },
    },
    {
      key: '-L461Uk8Ol8P1fNNgiuw',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517315292159,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
    },
    {
      key: '-L462WyAZv82zarfCsNe',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517315563391,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'pioneer',
      },
    },
    {
      key: '-L464Aj39joyhk-DaH64',
      data: {
        chatRoomId: '-L2ZNtIJVtc9w2Ek6iDc',
        messageTime: 1517315996959,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'somthing',
      },
    },
    {
      key: '-L46C49mTlICf8DiDDCD',
      data: {
        chatRoomId: '-L2ZNtIJVtc9w2Ek6iDc',
        messageTime: 1517318066860,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'hello',
      },
    },
    {
      key: '-L46H7rjAqjZdXh3ooqV',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1517319392742,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'awesome....',
      },
    },
    {
      key: '-L4AzqkxQsdSV4ii7t-T',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517398486068,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    },
    {
      key: '-L4W4jKgGJyttXOq2p40',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1517752350048,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'Something goes here....',
      },
    },
    {
      key: '-L4W4nTn1bV5Ty9lpAg2',
      data: {
        chatRoomId: '-L2ZNtJ064f4YxSOTR0F',
        messageTime: 1517752367929,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sasdas sadasd',
      },
    },
    {
      key: '-L4W4vZJqUH1iIb-oEtw',
      data: {
        chatRoomId: '-L2ZNtIty607vQ72V5JC',
        messageTime: 1517752401050,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'something goes here...',
      },
    },
    {
      key: '-L4W4zyFN5c_owJE-ma_',
      data: {
        chatRoomId: '-L2ZNtIty607vQ72V5JC',
        messageTime: 1517752419094,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'awesomeness loaded',
      },
    },
    {
      key: '-L4W53KENyLvMVT1Mxsr',
      data: {
        chatRoomId: '-L2ZNtIRD_z4UHaU_hAM',
        messageTime: 1517752436950,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'move forward with the chat',
      },
    },
    {
      key: '-L4W598HpKnc09C5kFfu',
      data: {
        chatRoomId: '-L2ZNtIwhTWinsIXiZaN',
        messageTime: 1517752460760,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'look into the sky',
      },
    },
    {
      key: '-L53LvJns1mnDWYt_Zz4',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518344058149,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'testing...',
      },
    },
    {
      key: '-L53fBtPN0uqsniO7twd',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518349373006,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'lkkklkl',
      },
    },
    {
      key: '-L53vcKbkXXQ9uajPl_Z',
      data: {
        chatRoomId: '-L2ZNtIwhTWinsIXiZaN',
        messageTime: 1518353679706,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'hi there',
      },
    },
    {
      key: '-L580UUzkGj4zHtrxdOF',
      data: {
        chatRoomId: '-L2ZNtIRD_z4UHaU_hAM',
        messageTime: 1518422325235,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'hello there',
      },
    },
    {
      key: '-L58klZuobboQJbYqPRf',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1518434720046,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'asaasdsd',
      },
    },
    {
      key: '-L5D5FE4qLY2l1CWtQIo',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518507459514,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'something.',
      },
    },
    {
      key: '-L5D5Hd8A_NRaxYgjVzH',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518507469492,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'check again',
      },
    },
    {
      key: '-L5D5n29HY1jb_mj4JKY',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518507602229,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'hi there.....',
      },
    },
    {
      key: '-L5DWKeuHE4S6LrlqRUc',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518514559654,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'nknl',
      },
    },
    {
      key: '-L5DWPKVUgeN_x0YUieP',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1518514578992,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: ';o',
      },
    },
    {
      key: '-L6GzlTi6jqX3BMB6uto',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519646611333,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'hello Alis',
      },
    },
    {
      key: '-L6H-V05WQ_R0Mc6S1WA',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519646801980,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: "hi'",
      },
    },
    {
      key: '-L6HC62_DnYcH6iv6GFj',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519650107611,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sdsDS',
      },
    },
    {
      key: '-L6HC6H0ba_HH27uduTT',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519650108544,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sd',
      },
    },
    {
      key: '-L6HC6vDRwCMMeNic-Q1',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519650111308,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'dsd',
      },
    },
    {
      key: '-L6HDSU7NnhZgfeKWlQ8',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519650461630,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text:
          'sdkasdskadsadks;akd;kas;k s;d ;ask;dkas;kdas; d;sk;dka;kdaskd;ask;dkas;kd;skdksa;dkas;kd;sk;das;dk;askd;s;dksa;dkas;kd;ak;dka;dks;akd;s kd;ask;das;kd;askd;as;dkas;kd;ksa;dkas;dkas;dk;asd;k as;dk;ask d;kdask;kd;asds;akd;sak;dksa;dk;sakd;asd;aksd;ks;d;askdska;dkas;dk;askd;askd;k;d;d;askd;ask;dkas;kdas;kd;askd;ask;d kas;kd ;ksd;k;sd;skd;askd;kas;dk as;dk;skd; aks;d kk dk;s;kd;ask;dkas;kdskdks;',
      },
    },
    {
      key: '-L6HUUF6HZ8IwzrTIoW0',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1519654925310,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text:
          'll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l lll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l ll l l l l l l l l l l l l l l l l l l l l l . l ll l l ll l l l l',
      },
    },
    {
      key: '-L6I_CwIBclFtLgdkfSn',
      data: {
        chatRoomId: '-L2ZNtIwhTWinsIXiZaN',
        messageTime: 1519673204490,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sds',
      },
    },
    {
      key: '-L6Ii0weYcF95VMLA1Nl',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519675514656,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sdsa ds dsad sd asdsdsadasd asa dsasadasdsadsdsdsd',
      },
    },
    {
      key: '-L6Ii2SVhAZ_Na03poJe',
      data: {
        chatRoomId: '-L2ZNtIhVl-lhEhHH8Tl',
        messageTime: 1519675520969,
        sender: 'UAXUbX1Ox4WQXRJJV6AA',
        text: 'sdsdsdsdsddsdsdsdsdsdsdsddsdsdsdd',
      },
    },
    {
      key: '-L6LlyXRXb5gUIhl0S7l',
      data: {
        chatRoomId: '-L2ZNtIMQzKe_P5i5wRE',
        messageTime: 1519726880913,
        sender: '3M9ySG4N5RBGYmmiopy5',
        text: 'hi people',
      },
    },
    {
      key: '-L6fjaC8tvmFIhP2soKb',
      data: {
        chatRoomId: '-L2ZNtIcXnshXBbGR-aA',
        messageTime: 1520078578497,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Hello',
      },
    },
    {
      key: '-L6flOcj1KZ9_3DZHTeI',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520079051303,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Hello there!',
      },
    },
    {
      key: '-L6foPCN_DG1XDFf7kff',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520079840071,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Hi,',
      },
    },
    {
      key: '-L6fofWm4gvE_grzGKWe',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520079911116,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'How may i assist you ?',
      },
    },
    {
      key: '-L6fuvStgiPHTGRxxQ-2',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520081549165,
        sender: '0lAR4PcX71m7MPOTRIFF',
        text: 'Hello!',
      },
    },
    {
      key: '-L6fvtoO0XhlqSYaJijc',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520081804552,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text: 'Hi there.',
      },
    },
    {
      key: '-L6fwNyLyiyR72T7VNVI',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520081932171,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Hello',
      },
    },
    {
      key: '-L6fwt4ZGwCy3IyPzDYC',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520082063844,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text: 'Hello',
      },
    },
    {
      key: '-L6fyonADv_kDM9IlHx_',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520082570436,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'hello there, how are you ?',
      },
    },
    {
      key: '-L6pD3-LMhWtb67x1GJM',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520237559815,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Hello There ! ',
      },
    },
    {
      key: '-L6pFsKiGzJSa9tB2nB0',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520238298464,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text: "I'm fine, thanks :) ",
      },
    },
    {
      key: '-L6pFvd_iZyWiP7fRvAF',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520238312171,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text: 'how about you?',
      },
    },
    {
      key: '-L6pHvZ86eksfYEyyQJK',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520238835966,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'I am doing good.',
      },
    },
    {
      key: '-L6pHyDpJ2tqfJrFlRhl',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520238847003,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'How may i assist you?',
      },
    },
    {
      key: '-L6pICzjgRi9zwytAnA_',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520238911459,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Yes, well, I’m having trouble with product purchase',
      },
    },
    {
      key: '-L6pJImsjBpYcI1NEYA7',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239197471,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Ok. Can you please tell me the name of the product ?',
      },
    },
    {
      key: '-L6pJPZ4v2w6yEeuBf8e',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239225196,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'Any link or screenshot will be helpful for proper understanding.',
      },
    },
    {
      key: '-L6pJVt0flC9z4Hsxx0i',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520239251112,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'How can i help you?',
      },
    },
    {
      key: '-L6pJ_pOieB_ReYyx82f',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239271381,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text:
          'Yes, I have bought this product "360fly - Panoramic 360° HD Video Camera". But it says there are some special offer on purchase.',
      },
    },
    {
      key: '-L6pJm8FTxDt1pHk_3lf',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520239321666,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text:
          'I was looking for the information of packages available in your restaurant.',
      },
    },
    {
      key: '-L6pJoDPEEie-iOUUCs4',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239330326,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text:
          "But As I bought it with the coupon code, but the discount wasn't applied. Would you please check that ?",
      },
    },
    {
      key: '-L6pJqDRPOZLlGAedhme',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520239338533,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text: 'Do you think you could help me with ?',
      },
    },
    {
      key: '-L6pKAfs_QNj_2kEbNq7',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239426396,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Sure. Please wait a moment. ',
      },
    },
    {
      key: '-L6pKO_EZzW3iuZTf4R0',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520239483339,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Ok, thank you. ',
      },
    },
    {
      key: '-L6pKqsYNxBsEPMHwfCO',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520239603223,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text:
          'I like the design of this template very much, i want to confirm some information before i purchase your template',
      },
    },
    {
      key: '-L6pLF9skj6_DT_gMPYI',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520239706911,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Yes, sure. You can ask any kind of related questions.',
      },
    },
    {
      key: '-L6pVhnLfcfEJ6btCu2k',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520242449926,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Sure sir',
      },
    },
    {
      key: '-L6pVk_8w9pAbcQXwcQq',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520242461312,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'when would you like to come our restaurant?',
      },
    },
    {
      key: '-L6pW4I6vx4gTY9iYfLT',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520242546169,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'We are extremely sorry for this Occurrence.',
      },
    },
    {
      key: '-L6pWMdleIBDdRf5eGac',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520242621353,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: "For some technical issues, your discount wasn't applied.",
      },
    },
    {
      key: '-L6pWe04LiZat2jABGS3',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520242696573,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'We informed our vendors. They will assure your discounts.',
      },
    },
    {
      key: '-L6pWhETDywAyZ11zDuK',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520242709781,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Thank you for your patience.',
      },
    },
    {
      key: '-L6pbkCF-yZJG-F0t1yq',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244294055,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text: 'Yes. we want to arrange our official diner in your restaurant. ',
      },
    },
    {
      key: '-L6pbtl6PBxhyRd-ljA0',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520244333763,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Thanks for the feedback. I am waiting.',
      },
    },
    {
      key: '-L6pc_qTS2QdZXSRN5bx',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244514518,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Excellent Sir ',
      },
    },
    {
      key: '-L6pdLv2sGhiX9M1fxWB',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244715513,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          ' You can take advantage of the hotel’s convenient and delicious on-site dining .',
      },
    },
    {
      key: '-L6pdUlmEeUW5Kpy0rPI',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244751786,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'We recommend DINNER BUFFET package for you',
      },
    },
    {
      key: '-L6pdZPI6NbqZq37lyHk',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244770762,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'Starters\nSoup of the day\nNicoise salad with egg and tuna\nCherrytomatoes, mozzarella and basil\nCaesar salad with chicken and croutons\nPotatoesalad with capers, red onion and herbs\nRed beet and apple\nSmoked salmon and horseradish sauce\nGravad lax and sauce\nMarinated seafood chevice',
      },
    },
    {
      key: '-L6pduR81hQgU2nIJX2j',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244860993,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'Hot main courses are included with \nMeat of the day, \nLeg of lamb, \nFish of the day, \nPotatoes, \nGratinated potatoes,\nVegetables ,\nSauces .',
      },
    },
    {
      key: '-L6pe8j5sCNzB5atSSqW',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244923646,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'At the end, There are some delicious deserts.\nCake of the day,\nChocolate cake,\nApple cake,\nCreme Brulée,\nFruit salad,\nIcecream bar.',
      },
    },
    {
      key: '-L6peDKVJVMPgO855xoZ',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520244942160,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text:
          'I was looking for an admin dashboard built on top of React, Redux & Material Ui',
      },
    },
    {
      key: '-L6peHHhchXix4wXe1-T',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520244958693,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Price per person ---> EUR 54\n',
      },
    },
    {
      key: '-L6peg0eio1LLhTpeYYU',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245064095,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'You can Check our Mate Admin Template.',
      },
    },
    {
      key: '-L6pelREWdGOcvDv-BlG',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245086278,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'It is a react-redux powered single page admin dashboard with material Ui Next. Used progressive web application pattern, highly optimized for your next react application. ',
      },
    },
    {
      key: '-L6pewyhC-HEc_V51IUD',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245132805,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text: 'That is very reasonable. Can you arrange for 30 persons? ',
      },
    },
    {
      key: '-L6pexq6gyAXb5gtj4X3',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245136911,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text: 'great, exactly what i was looking for',
      },
    },
    {
      key: '-L6pf93oyv9H_80PO3vu',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245187179,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Sure Sir. Can you please tell me your reservation date?',
      },
    },
    {
      key: '-L6pfI6kdvg5HhObawPy',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245224232,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'If you want, we can arrange your meal in a private meeting room.',
      },
    },
    {
      key: '-L6pfXUNHF-oRRQ7c2pB',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520245286862,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text:
          'Your vendor confirm my discount issue. Now, my problem is solved. Thanks for your great support.',
      },
    },
    {
      key: '-L6pfYcdmvhoZI2p0Ii-',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520245291685,
        sender: 'FFdV0wFq1hkW01TPd7lG',
        text: 'Cheers!',
      },
    },
    {
      key: '-L6pfZsRCCa0ybTi3w47',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245296244,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text:
          'Yes. We are planning to reserve for the last Thursday of this month',
      },
    },
    {
      key: '-L6pfcOzpxCouh-GQOJl',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245311239,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text:
          'Does this template have any app example so that i can see the data flow clearly?',
      },
    },
    {
      key: '-L6pfjhiySJ6h3IjUR6C',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520245341349,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Thank you for your co-operation.',
      },
    },
    {
      key: '-L6pg8YdhQOUfLms9u85',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245447026,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text:
          'also, i want to know if this template using the latest version of React Js, Redux etc',
      },
    },
    {
      key: '-L6pgBtyVkMD0BIOJsml',
      data: {
        chatRoomId: '-L2ZNtIfXTI1nedEdf8J',
        messageTime: 1520245460917,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Happy Shopping :)',
      },
    },
    {
      key: '-L6pgZfeTaFwMr8TblgK',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245558302,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'Yes, You can check our demo by going on this url  https://mate.redq.io/',
      },
    },
    {
      key: '-L6ph4yzZc-RID9qS-vu',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245694710,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          ' We use the latest version of React Js and Redux. We always try to provide regular updates to our templates.',
      },
    },
    {
      key: '-L6phENV1XIrb0sRuSXD',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245733207,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Thank you sir. Your reservation is completed.',
      },
    },
    {
      key: '-L6phPDgeL2kMDisgzpD',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245777635,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'We are waiting to welcome you.',
      },
    },
    {
      key: '-L6phWcwN7zf2E2N5znq',
      data: {
        chatRoomId: '-L2ZNtJFpPOikrNUhj8f',
        messageTime: 1520245807251,
        sender: 'bkmdgtmwa4eb1pMomNDt',
        text: 'Thank you.',
      },
    },
    {
      key: '-L6phjhhr1Yo4SxracPr',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245865309,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text: 'Thanks for your information that was really helpful',
      },
    },
    {
      key: '-L6pi1Pj0Sa8vQ5ogQyg',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520245942245,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Thanks a lot.',
      },
    },
    {
      key: '-L6piIOzsn-KPrCQlidF',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246011506,
        sender: '0lAR4PcX71m7MPOTRIFF',
        text:
          "Hi, Why can't we add another project in our account. Not sure what's going on.",
      },
    },
    {
      key: '-L6piMZi7BwVg5V6Kq5C',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520246028726,
        sender: 'nlE90pVpMPA4idOBD1cP',
        text:
          "I'm going to purchase this template now, thanks again for your time",
      },
    },
    {
      key: '-L6piXdWmJJiLAZoOPvU',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246074264,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Sorry about that ! Can i have your account number?',
      },
    },
    {
      key: '-L6picIG9T-IB97_i4SQ',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246097225,
        sender: '0lAR4PcX71m7MPOTRIFF',
        text: 'where can i find that?',
      },
    },
    {
      key: '-L6pj-VeDV-ikaZxzm18',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246196577,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'Please go to Account -> Settings -> Plan .',
      },
    },
    {
      key: '-L6pjGih1LTCjmypBnd5',
      data: {
        chatRoomId: '-L2ZNtJLheV2cFUuu_sX',
        messageTime: 1520246267108,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: "You're most welcome !",
      },
    },
    {
      key: '-L6pjWPirGpBGDwVDxYL',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246331174,
        sender: '0lAR4PcX71m7MPOTRIFF',
        text: 'Oh thanks! It is BE007.',
      },
    },
    {
      key: '-L6pjypB-6Kw2sYCXXSY',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246451843,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text:
          'Hi, you are almost there. You have to complete one more step to add another project. Just go to Third step and click on "Complete & Save" .',
      },
    },
    {
      key: '-L6pk20KeO898jK5_rHv',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246468813,
        sender: '0lAR4PcX71m7MPOTRIFF',
        text: 'You just saved my day. Thank you very much',
      },
    },
    {
      key: '-L6pkHKG3fkPN0FEEvKc',
      data: {
        chatRoomId: '-L2ZNtILakxHPFhocHIc',
        messageTime: 1520246531720,
        sender: 'wt4TiasxgPrQ3dNwVZ55',
        text: 'You are Welcome.',
      },
    },
  ],
};

export async function deleteDocuments(collectionName) {
  const collectionRef = db.collection(collectionName);
  var batch = db.batch();
  await collectionRef.get().then(querySnapshot =>
    querySnapshot.docs.map((doc, idx) => {
      console.log(doc);
      if (idx < 499) batch.delete(collectionRef.doc(doc.id));
    })
  );

  return await batch.commit().then(() => {
    console.log('Batch Deletion successfully committed!');
  });
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  if (collectionKey === 'chatRooms') {
    objectsToAdd.forEach(room => {
      const doc = collectionRef.doc(room.key);
      if (room.data.otherUserId) {
        batch.set(doc, {
          ...room.data,
          otherUserInfo: demoData.users.find(
            user => user.key === room.data.otherUserId
          ).data,
        });
      }
    });
  } else {
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.key);
      batch.set(newDocRef, obj.data);
    });
  }
  return await batch.commit().then(() => {
    console.log('Batch Addition successfully committed!');
  });
};

export async function resetDemoData() {
  console.log('start');
  await deleteDocuments('users');
  await addCollectionAndDocuments('users', demoData.users);
  await deleteDocuments('messages');
  await addCollectionAndDocuments('messages', demoData.messages);
  await deleteDocuments('chatRooms');
  await addCollectionAndDocuments('chatRooms', demoData.chatRooms);
  console.log('END');
}
/*
const importDemoData = () => {
  const users = [],
    chatRooms = [],
    messages = [];
  fsProps.usersCollections.get().then(querySnapshot => {
    try {
      querySnapshot.forEach(doc => {
        if (doc.id !== fsProps.userId) {
          users.push({ key: doc.id, data: doc.data() });
        }
      });
    } catch (e) {}
    fsProps.chatroomCollections.get().then(querySnapshot => {
      try {
        querySnapshot.forEach(doc => {
          if (doc.id !== fsProps.userId) {
            chatRooms.push({ key: doc.id, data: doc.data() });
          }
        });
      } catch (e) {}
      fsProps.messagesCollections.get().then(querySnapshot => {
        try {
          querySnapshot.forEach(doc => {
            if (doc.id !== fsProps.userId) {
              messages.push({ key: doc.id, data: doc.data() });
            }
          });
          console.log(JSON.stringify({ users, chatRooms, messages }, null, 2));
        } catch (e) {}
      });
    });
  });
};
*/

/*
const createDemoUsers = () => {
  demoUsers.forEach(user => fsProps.usersCollections.add(user));
};
const createDemoChatrooms = users => {
  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      const key = firebase
        .database()
        .ref()
        .push().key;
      const revKey = reverseString(key);
      const docI = fsProps.chatroomCollections.doc(key);
      const docJ = fsProps.chatroomCollections.doc(revKey);
      docI.set({
        id: key,
        userId: users[i].id,
        otherUserId: users[j].id,
        otherUserInfo: users[j],
        lastMessage: '',
        lastMessageTime: 0
      });
      docJ.set({
        id: key,
        reverse: true,
        userId: users[j].id,
        otherUserId: users[i].id,
        otherUserInfo: users[i],
        lastMessage: '',
        lastMessageTime: 0
      });
    }
  }
}
*/
