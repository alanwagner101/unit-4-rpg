$(document).ready(function() {
    var ewok = $("#hero1");
    var jar = $("#hero2");
    var thing = $("#hero3");
    var yogurt = $("#hero4");
    var ewokDam = $("#ewokHP");
    var jarDam = $("#jar-jarHP");
    var thingDam = $("#crumbHP");
    var yogurtDam = $("#yogurtHP");
    var ewokHP = 150;
    var jarHP = 150;
    var thingHP = 150;
    var yogurtHP = 150;

    var rancorSelect = $("#selectEnemy1");
    var deathstarSelect = $("#selectEnemy2");
    var sarlaccSelect = $("#selectEnemy3");
    var stormtrooperSelect = $("#selectEnemy4");

    var rancor = $("#fightEnemy1");
    var deathstar = $("#fightEnemy2");
    var sarlacc = $("#fightEnemy3");
    var stormtrooper = $("#fightEnemy4");
    var rancorDam = $("#rancorHP");
    var deathstarDam = $("#deathstarHP");
    var sarlaccDam = $("#sarlaccHP");
    var stormtrooperDam = $("#stormtrooperHP");
    var rancorHP = 300;
    var deathstarHP = 750;
    var sarlaccHP = 250;
    var stormtrooperHP = 1000;

    var attack = $("#attack");
    var restart = $("#restart");

    var isEnemyChosen = false;
    var isHeroChosen = false;

    $("#title1").css("display", "none");
    rancorSelect.css("display", "none");
    deathstarSelect.css("display", "none");
    sarlaccSelect.css("display", "none");
    stormtrooperSelect.css("display", "none");

    $("#title2").css("display", "none");
    rancor.css("display", "none");
    deathstar.css("display", "none");
    sarlacc.css("display", "none");
    stormtrooper.css("display", "none");

    attack.css("display", "none");
    restart.css("display", "none");

    ewokDam.text(ewokHP);
    jarDam.text(jarHP);
    thingDam.text(thingHP);
    yogurtDam.text(yogurtHP);

    rancorDam.text(rancorHP);
    deathstarDam.text(deathstarHP);
    sarlaccDam.text(sarlaccHP);
    stormtrooperDam.text(stormtrooperHP);

    $(".heroes").on("click", function() {

        if (isHeroChosen) {
            return false;
        }

        $(".heroes").css("display", "none");
        $(this).css("display", "block");

        isHeroChosen = true;

        $("#title1").css("display", "block");
        $(".selectEnemy").css("display", "block");
    });

    $(".selectEnemy").on("click", function() {
        
        if (isEnemyChosen) {
            return false;
        }
        
        $(this).css("display", "none");

        console.log($(this).val())

        isEnemyChosen = true;

        if ($(this).val() == rancorSelect.val()) {
            rancor.css("display", "block");
        } else if ($(this).val() == deathstarSelect.val()) {
            deathstar.css("display", "block");
        } else if ($(this).val() == sarlaccSelect.val()) {
            sarlacc.css("display", "block");
        } else if ($(this).val() == stormtrooperSelect.val()) {
            stormtrooper.css("display", "block");
        }


        $("#title2").css("display", "block");
        $("#attack").css("display", "inline");
    });



});