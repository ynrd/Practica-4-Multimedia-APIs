function fileSelect(evento) {
  var files = evento.target.files;
  for (var i = 0, f; (f = files[i]); i++) {
    if (!f.type.match("video.*")) {
      continue;
    }

    var reader = new FileReader();
    reader.onload = function (fichero) {
      return function (e){
        var span = document.createElement('span');
        span.innerHTML = ['<video id="video" class="player" src="',
        e.target.result,
        '"title"', String(fichero.name),
        '"/>'].join('');

        document.getElementById("fichero").insertBefore(span, null);
      };
    }(f);
    reader.readAsDataURL(f);
  }
}
document.getElementById('file').addEventListener('change',fileSelect, false);
