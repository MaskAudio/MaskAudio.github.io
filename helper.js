function createAudioHTML(path) {
    return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  
  
  function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
    for (var i = 0; i < filename_ext.length; i++) {
      let p = base_path + filename_ext[i];
      let cell = table_row.cells[col_offset + i];
      if (p.endsWith('txt')) {
        var req = new XMLHttpRequest();
        req.open("GET", p, false);
        req.send(null);
        cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
      } else {
        cell.innerHTML = cell.innerHTML + createAudioHTML(p);
      }
    }
  }
  
  
  function generateT2A(tableId) {
    let table = document.getElementById(tableId);
    let ext = ['.txt', '_50.wav', '_25.wav', '_20.wav','_15.wav', '_10.wav'];
    const totalRows = table.rows.length;
    for (var i = 1; i < totalRows; i++) {
      generateExampleRow(table.rows[i], 'data/Diff_Steps/' + i, ext, 0);
    }
  }
  
  
  
  function generateVariable(tableId) {
    let table = document.getElementById(tableId);
    let ext = ['.txt', '_dpo0.1.wav', '_dpo1.wav','_dpo10.wav'];
    const totalRows = table.rows.length;
    for (var i = 1; i < totalRows; i++) {
      generateExampleRow(table.rows[i], 'data/DPO/' + i, ext, 0);
    }
  }

    function generateModel(tableId) {
    let table = document.getElementById(tableId);
    let ext = ['.txt', '_gt.wav', '_audioldm2.wav', '_maa2.wav', '_tango.wav', '_soundctm.wav','_our.wav'];
    const totalRows = table.rows.length;
    for (var i = 1; i < totalRows; i++) {
      generateExampleRow(table.rows[i], 'data/Models/' + i, ext, 0);
    }
  }
  generateT2A('supervision-efficiency-table');
  generateVariable('speech-diversity');
  generateModel('models-compare');

