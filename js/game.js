const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100;
const $imgHeight = 80;
$(document).ready(function() {
    fillboard();
    /*a cada vez que aperta o "play" insere uma toupeira em um buraco aleatório*/
    $("#btnPlay").click(function() {
        //ver gif editor online
        setInterval(startGame, 1180);
        // updateMoleHoleIterator()
    });
});
//cria o tabuleiro(moldura)conforme o nivel
function fillboard() {
    // alert($("#level").val())
    $level = $levels[$("#level").val()]
    $boardWidth = $imgWidth * $level
    $boardHeight = $imgHeight * $level
    $("#board").css({ "width": $boardWidth, "height": $boardHeight })
    placeHolesBoard($level)
}
//insere os buracos
function placeHolesBoard($level) {
    $("#board").empty()
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>"); //.attr("id", `mole_${$i+1}`);
        $img = $("<img>").attr({ "src": "img/buraco.gif", "id": `mole_${$i+1}` });
        $($div).append($img);
        $("#board").append($div);
    }
}
/* monta o tabuleiro (fillboard) e insere uma toupeira em um lugar aleatório. É chamada ao apertar 
 o botão "play" e entra em loop infinito na função setInterval*/
function startGame() {

    fillboard()
    $level = getLevel()
        // $level = $levels[$("#level").val()]
    $randNumber = getRandNumber(1, Math.pow($level, 2))
    $(`#mole_${$randNumber}`).attr("src", "img/toupeira.gif")
}

//   fillboard();
// insere uma buraco onde está a toupeira atual (no buraco n da iteração passada)
// $(`#mole_${currentMole}`).attr("src", "img/buraco.gif");
// cria um numero aleatório 
// $level = getLevel();
// currentHole = $randNumber = getRandNumber(1, Math.pow($level, 2));
//insere uma toupeira no buraco atual (posicão aleatória)
// $(`#mole_${currentHole}`).attr("src", "img/toupeira.gif");
// registra onde está a topeira no momento (como usar este valor no proximo setInterval?)
// currentMole = currentHole;
// function updateMoleHoleIterator() {
//     
// }

//calcula um número aleatório para inserir a toupeira
function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}
//seleciona o valor do nível: 3, 5 ou 7
function getLevel() {
    return $levels[$("#level").val()]
}