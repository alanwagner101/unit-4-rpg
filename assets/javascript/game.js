$(document).ready(function() {
    var ewokDam = $("#ewokHP");
    var jarDam = $("#jar-jarHP");
    var thingDam = $("#crumbHP");
    var yogurtDam = $("#yogurtHP");

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

    var attack = $("#attack");
    var restart = $("#restart");

    var isEnemyChosen = false;
    var isHeroChosen = false;
    var isgameover = false;

    var laser = $("audio#laser");



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
    $("#nomoreEnemies").css("display", "none");
    $("#result").css("display", "none");

    ewokDam.text(125);
    jarDam.text(150);
    thingDam.text(115);
    yogurtDam.text(175);

    rancorDam.text(300);
    deathstarDam.text(750);
    sarlaccDam.text(250);
    stormtrooperDam.text(1000);

    $(".herotext").css("display", "none");
    $(".enemytext").css("display", "none");

    var h = 150; 
    var hd = 25;
    var e = 150;
    var ed = 0;
    var i = 0;
    var d = 0;
    console.log(h);
    console.log(e);
    console.log(ed);

    $(".heroes").on("click", function() {

        if (isHeroChosen) {
            return false;
        }

        $(".heroes").css("display", "none");
        $(this).css("display", "block");

        isHeroChosen = true;

        if (this.id == "hero1") {
            h = 125;
        } else if (this.id == "hero2") {
            h = 150;
        } else if (this.id == "hero3") {
            h = 115;
        } else if (this.id == "hero4") {
            h = 175;
        };

        $("#title1").css("display", "block");
        $(".selectEnemy").css("display", "block");

        return h;
    });

    $(".selectEnemy").on("click", function() {
        
        
        if (isEnemyChosen) {
            return false;
        };
        
        d++;
        console.log(d);

        $(this).css("display", "none");

        console.log($(this).val())

        isEnemyChosen = true;

        if (this.id == "selectEnemy1") {
            rancor.css("display", "block");
            e = 300;
            $("#rancorHP").text(e);
            ed = 15;
        } else if (this.id == "selectEnemy2") {
            deathstar.css("display", "block");
            e = 750;
            $("#deathstarHP").text(e);
            ed = 25;
        } else if (this.id == "selectEnemy3") {
            sarlacc.css("display", "block");
            e = 250;
            $("#sarlaccHP").text(e);
            ed = 20;
        } else if (this.id == "selectEnemy4") {
            stormtrooper.css("display", "block");
            e = 1000;
            $("#stormtrooperHP").text(e);
            ed = 0;
        }; 
        

        $("#title2").css("display", "block");
        $("#attack").css("display", "inline");
        console.log("this is e" + e)
        return e, ed, d;
    });

    $("#attack").on("click", function() {

        if (d == 4) {
            $("#nomoreEnemies").css("display", "inline");
        };

        if (isgameover) {
            return false
        }
        laser[0].volume = 0.2;
        $("audio#laser")[0].play();
        
        i++;

        if (ed > 1) {
        h -= ed;
        $(".hhp").text(h);
        $(".herotext").text("hero takes " + ed + " damage!");
        e -= hd;
        $(".ehp").text(e)
        $(".enemytext").text("enemy takes " + hd + " damage!");
        $(".herotext").css("display", "block");
        $(".enemytext").css("display", "block");
        } else {
            h -= ed;
            $(".hhp").text(h);
            $(".herotext").text("storm trooper misses");
            e -= hd;
            $(".ehp").text(e)
            $(".enemytext").text("enemy takes " + hd + " damage!");
            $(".herotext").css("display", "block");
            $(".enemytext").css("display", "block");
        }

        if (i === 3) {
            hd += 25;
        } else if (i === 6) {
            hd += 25;
        } else if (i === 9) {
            hd += 50;
        } else if (i === 12) {
            hd += 100;
        } else if (i === 15) {
            hd += 100;
        } else {
            hd = hd;
        };

        if (h <= 0) {
            $("#restart").css("display", "inline");
            $("#result").text("Game Over: You Lost!!");
            $("#result").css("display", "block");
            $("#attack").css("display","none");
            isgameover = true;
        } else if (e <= 0) {
            $(".fightEnemy").css("display", "none");
            isEnemyChosen = false; }

    
        return i, hd, ed;
    })

    $("#restart").on("click", function() {
        $(".heroes").css("display", "block")

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
        $("#nomoreEnemies").css("display", "none");

        ewokDam.text(125);
        jarDam.text(150);
        thingDam.text(115);
        yogurtDam.text(175);
    
        rancorDam.text(300);
        deathstarDam.text(750);
        sarlaccDam.text(250);
        stormtrooperDam.text(1000);

        $("#result").css("display", "none")
        $(".herotext").css("display", "none");
        $(".enemytext").css("display", "none");
    
        h = 150; 
        hd = 25;
        e = 150;
        ed = 0;
        i = 0;
        d = 0;

        isEnemyChosen = false;
        isHeroChosen = false;
        isgameover = false;

        return d;
    })

    $("#nomoreEnemies").on("click", function() {
            $("#restart").css("display", "inline");
            $("#result").text("Game Over: You Won!!");
            $("#result").css("display", "block");
            $("#nomoreEnemies").css("display", "none");
            $("#attack").css("display","none");
            $("#title1").css("display", "none");
            $("#title2").css("display", "none");
            isgameover = true;
    })



});