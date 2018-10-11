$(document).ready(function() {
    var ewok = $("#hero1");
    var jar = $("#hero2");
    var thing = $("#hero3");
    var yogurt = $("#hero4");
    var ewokDam = $("#ewokHP");
    var jarDam = $("#jar-jarHP");
    var thingDam = $("#crumbHP");
    var yogurtDam = $("#yogurtHP");
    var ewokHP = 125;
    var jarHP = 150;
    var thingHP = 100;
    var yogurtHP = 175;

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
    var isgameover = false;




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
            h = 100;
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
        }
        
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
        return e, ed;
    });

    $("#attack").on("click", function() {

        if (isgameover) {
            return false
        }
        
        i++;

        h -= ed;
        $(".hhp").text(h);
        e -= hd;
        $(".ehp").text(e)

        if (i == 3) {
            hd += 25;
        } else if (i == 6) {
            hd += 25;
        } else if (i == 9) {
            hd += 50;
        } else if (i == 12) {
            hd += 100;
        } else if (i == 15) {
            hd += 100;
        } else {
            hd = hd;
        };

        if (h <= 0) {
            $("#restart").css("display", "inline");
            $("#result").text("Game Over: You Lost!!");
            isgameover = true;
        } else if (e <= 0) {
            d++;
            $(".fightEnemy").css("display", "none");
            isEnemyChosen = false;
        } else if (d == 4) {
            $("#restart").css("display", "inline");
            $("#result").text("Game Over: You Won!!")
        } else {
            d = d;
        }

    
        return i, hd, ed, d;
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

        ewokHP = 125;
        jarHP = 150;
        thingHP = 100;
        yogurtHP = 175;
        rancorHP = 300;
        deathstarHP = 750;
        sarlaccHP = 250;
        stormtrooperHP = 1000;
    
        ewokDam.text(ewokHP);
        jarDam.text(jarHP);
        thingDam.text(thingHP);
        yogurtDam.text(yogurtHP);
    
        rancorDam.text(rancorHP);
        deathstarDam.text(deathstarHP);
        sarlaccDam.text(sarlaccHP);
        stormtrooperDam.text(stormtrooperHP);
    
        h = 150; 
        hd = 25;
        e = 150;
        ed = 0;
        i = 0;
        d = 0;

        isEnemyChosen = false;
        isHeroChosen = false;
        isgameover = false;

    })



});