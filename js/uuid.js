function generateUUID() {
    var uuid = '';
    for (var i = 0; i < 32; i++) {
      var randomNumber = Math.floor(Math.random() * 16);
      var uuidChar = (i == 8 || i == 12 || i == 16 || i == 20) ? '-' : '';
      uuid += (uuidChar || '') + (i == 12 ? 4 : (i == 16 ? (randomNumber & 3 | 8) : randomNumber)).toString(16);
    }
    return uuid;
  }