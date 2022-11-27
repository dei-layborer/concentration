const testData = {
  
    name: 'Biblical Hebrew Alphabet',
    description: 'The Hebrew alphabet.  Final and non-final forms are grouped together, and versions with *dagesh* are not included.  Vowel markers (*niqqud*) are paired with the sounds they represent, with a breve (˘) indicating a redcued vowel, a plain letter showing a short vowel, and a macron (¯) indicating a long.',
    fonts: ['default', 'Suez One'],
    dataPairs: [
        ['alef', 'א'],
        ['bet', 'ב'],
        ['gimel', 'ג'],
        ['dalet', 'ד'],
        ['he', 'ה'],
        ['waw', 'ו'],
        ['zayin', 'ז'],
        ['chet', 'ח'],
        ['tet', 'ט'],
        ['yod', 'י'],
        ['kaf', 'כּ'],
        ['khaf', 'כ / ך'],
        ['lamed', 'ל'],
        ['mem', 'מ / ם'],
        ['nun', 'נ / ן'],
        ['samech', 'ס'],
        ['ayin', 'ע'],
        ['pe', 'פ / ף'],
        ['tsadi', 'צ / ץ'],
        ['qof', 'ק'],
        ['resh', 'ר'],
        ['shin', 'ש'],
        ['tav', 'ת'],
        ['ā', `${String.fromCodePoint(0x05B8,0x25CC)} qamets`],
        ['ē', `${String.fromCodePoint(0x05B5,0x25CC)} tsere`],
        ['ō', `${String.fromCodePoint(0x05B9,0x25CC)} holem`],
        ['a', `${String.fromCodePoint(0x05B7,0x25cc)} pathach`],
        ['e', `${String.fromCodePoint(0x05B6,0x25cc)} seghol`],
        ['i', `${String.fromCodePoint(0x05B4,0x25cc)} hireq`],
        ['o', `${String.fromCodePoint(0x05C7,0x25cc)} qamets hatuf`],
        ['u', `${String.fromCodePoint(0x05BB,0x25cc)} qibbuts`],
        ['ă', `${String.fromCodePoint(0x05B2,0x25cc)} hateph pathach`],
        ['ĕ', `${String.fromCodePoint(0x05B1,0x25cc)} hateph seghol`],
        ['ŏ', `${String.fromCodePoint(0x05B3,0x25cc)} hateph qamets`],
        
    ]

};

function loadData() {
    return testData;
}