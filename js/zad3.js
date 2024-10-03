//ZADATAK 3
var nizRandomBoja = [];

//cuvamo vrednosti unetih 4 boja, npr u nizu
var nizUnetihBoja = [];

//cuvamo vrednosti boja za pogodak kruzice
var nizPogodakKruzici = [];

//niz za proveru ako je neko pre svih 6 pokusaja pogodio sve
var nizDobitnaKomb = ["red", "red", "red", "red"];

var n = 1; //za id polja

function konacnaKomb(){
    const nizBoja = ["green",
                     "blue",
                     "purple",
                     "pink",
                     "black",
                     "white"];


    for(i=0; i<4; i++){
        nizRandomBoja[i] = nizBoja[Math.floor(Math.random() * 6)];
    }
}

window.addEventListener("load", function(){
    konacnaKomb();
    // console.log(nizRandomBoja); //PROVERA

    //kliknemo boje, one se prikazu u poljima!!!
    //osluskivac za klik svake boje
    this.document.getElementById("boja1").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "green"; n++;
    });

    this.document.getElementById("boja2").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "blue"; n++;
    });

    this.document.getElementById("boja3").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "purple"; n++;
    });

    this.document.getElementById("boja4").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "pink"; n++;
    });

    this.document.getElementById("boja5").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "black"; n++;
    });

    this.document.getElementById("boja6").addEventListener("click", function(){
        document.getElementById(n).style.backgroundColor = "white"; n++;
    });


});


function fjaObrisi(){
    if(n!=25){
        n--;
        document.getElementById(n).style.backgroundColor = "#f0f0f0";
    }
}

function fjaResetuj(){
    for(let i=1; i<n; i++){
        document.getElementById(i).style.backgroundColor = "#f0f0f0";
        document.getElementById(`pogodak${i}`).style.backgroundColor = "rgb(204, 204, 204)";
    }
    for(let i=1; i<5; i++){
        document.getElementById(`komb${i}`).style.backgroundColor = "#f0f0f0";
    }

    n=1;
    nizUnetihBoja = [];
    nizPogodakKruzici = [];
    konacnaKomb();


}






function fjaPrihvati(){
    //ZA PRVI RED, kad unesemo 4 boje n se poveca na 5 i ceka unos sledece
    if(n==5){
        //cuvamo boje u nizu
        for(let i=0; i<4; i++){
            nizUnetihBoja[i] = document.getElementById(i+1).style.backgroundColor;
        }

        //prvo trazimo POGODJENE NA MESTU (crveni pogodak kruzic)
        //uporedjujemo prvu unetu boju sa prvom bojom iz nizRandomBoja
        //drugu sa drugom, trecu sa trecom, cetvrtu sa cetvrtom
        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                // document.getElementById(`pogodak${i+1}`).style.backgroundColor = "red";
                nizPogodakKruzici[i] = "red";
            }
        }

        //provera pogodjenih ali da nisu na mestu
        //zuti kruzici uvek idu nakon crvenih, sortirati
        for(let i=0; i<4; i++){
            //one koji su vec pogodjeni i na mestu treba preskociti
            if(nizPogodakKruzici[i] != "red"){
                //poredimo npr prvi elem unetog niza sa svakim elem trazene komb
                for(let j=0; j<4; j++){
                    //treba proveriti da li na tom mestu u nizuPogodakKruzici vec imamo nesto ispisano, da ne bi doslo do overwrite-a
                    //ako nema, onda napisi
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            // document.getElementById(`pogodak${j+1}`).style.backgroundColor = "yellow";
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        //provera ako je nesto prazno da se izbaci iz niza
        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);

        fjaStaviPogodakKruzice();

        //provera ako je neko pogodio sve pre kraja da se odmah prikaze zeljena komb
        // if(nizPogodakKruzici === nizDobitnaKomb){
        if(JSON.stringify(nizPogodakKruzici)==JSON.stringify(nizDobitnaKomb)){
            this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
            this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
            this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
            this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
        }
        // else{
        //     console.log("AAAAAAAAAAAAAAAA")
        // }

    }





    //DRUGI RED
    nizUnetihBoja = [];
    nizPogodakKruzici = [];

    if(n==9){
        var i, j;
        for(i=0, j=5; i<4, j<9; i++, j++){
            nizUnetihBoja[i] = document.getElementById(j).style.backgroundColor;
        }

        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                nizPogodakKruzici[i] = "red";
            }
        }

        for(let i=0; i<4; i++){
            if(nizPogodakKruzici[i] != "red"){
                for(let j=0; j<4; j++){
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        //provera ako je nesto prazno da se izbaci iz niza
        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);

        fjaStaviPogodakKruzice();

        //provera ako je neko pogodio sve pre kraja da se odmah prikaze zeljena komb
        // if(nizPogodakKruzici === nizDobitnaKomb){
        if(JSON.stringify(nizPogodakKruzici)==JSON.stringify(nizDobitnaKomb)){
            this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
            this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
            this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
            this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
        }
        // else{
        //     console.log("AAAAAAAAAAAAAAAA")
        // }
    }

   


    //TRECI RED
    nizUnetihBoja = [];
    nizPogodakKruzici = [];

    if(n==13){
        var i, j;
        for(i=0, j=9; i<4, j<13; i++, j++){
            nizUnetihBoja[i] = document.getElementById(j).style.backgroundColor;
        }

        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                nizPogodakKruzici[i] = "red";
            }
        }

        for(let i=0; i<4; i++){
            if(nizPogodakKruzici[i] != "red"){
                for(let j=0; j<4; j++){
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        //provera ako je nesto prazno da se izbaci iz niza
        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);

        fjaStaviPogodakKruzice();

        //provera ako je neko pogodio sve pre kraja da se odmah prikaze zeljena komb
        // if(nizPogodakKruzici === nizDobitnaKomb){
        if(JSON.stringify(nizPogodakKruzici)==JSON.stringify(nizDobitnaKomb)){
            this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
            this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
            this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
            this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
        }
        // else{
        //     console.log("AAAAAAAAAAAAAAAA")
        // }
    }





    //CETVRTI RED
    nizUnetihBoja = [];
    nizPogodakKruzici = [];

    if(n==17){
        var i, j;
        for(i=0, j=13; i<4, j<17; i++, j++){
            nizUnetihBoja[i] = document.getElementById(j).style.backgroundColor;
        }

        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                nizPogodakKruzici[i] = "red";
            }
        }

        for(let i=0; i<4; i++){
            if(nizPogodakKruzici[i] != "red"){
                for(let j=0; j<4; j++){
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        //provera ako je nesto prazno da se izbaci iz niza
        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);

        fjaStaviPogodakKruzice();

        //provera ako je neko pogodio sve pre kraja da se odmah prikaze zeljena komb
        // if(nizPogodakKruzici === nizDobitnaKomb){
        if(JSON.stringify(nizPogodakKruzici)==JSON.stringify(nizDobitnaKomb)){
            this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
            this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
            this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
            this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
        }
        // else{
        //     console.log("AAAAAAAAAAAAAAAA")
        // }
    }




    //PETI RED
    nizUnetihBoja = [];
    nizPogodakKruzici = [];

    if(n==21){
        var i, j;
        for(i=0, j=17; i<4, j<21; i++, j++){
            nizUnetihBoja[i] = document.getElementById(j).style.backgroundColor;
        }

        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                nizPogodakKruzici[i] = "red";
            }
        }

        for(let i=0; i<4; i++){
            if(nizPogodakKruzici[i] != "red"){
                for(let j=0; j<4; j++){
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        //provera ako je nesto prazno da se izbaci iz niza
        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);

        fjaStaviPogodakKruzice();

        //provera ako je neko pogodio sve pre kraja da se odmah prikaze zeljena komb
        // if(nizPogodakKruzici === nizDobitnaKomb){
        if(JSON.stringify(nizPogodakKruzici)==JSON.stringify(nizDobitnaKomb)){
            this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
            this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
            this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
            this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
        }
        // else{
        //     console.log("AAAAAAAAAAAAAAAA")
        // }
    }





    //SESTI RED
    nizUnetihBoja = [];
    nizPogodakKruzici = [];

    if(n==25){
        var i, j;
        for(i=0, j=21; i<4, j<25; i++, j++){
            nizUnetihBoja[i] = document.getElementById(j).style.backgroundColor;
        }

        for(let i=0; i<4; i++){
            if(nizUnetihBoja[i] == nizRandomBoja[i]){
                nizPogodakKruzici[i] = "red";
            }
        }

        for(let i=0; i<4; i++){
            if(nizPogodakKruzici[i] != "red"){
                for(let j=0; j<4; j++){
                    if(nizPogodakKruzici[j] != "red" && nizPogodakKruzici[j] != "yellow"){
                        if(nizUnetihBoja[i] == nizRandomBoja[j]){
                            nizPogodakKruzici[j] = "yellow";
                            break;
                        }
                    }
                }
            }
        }

        nizPogodakKruzici = nizPogodakKruzici.filter((str) => str != "");

        fjaSortirajPogodakKruzice();
        // console.log(nizPogodakKruzici);
        // console.log(nizDobitnaKomb);
    
        fjaStaviPogodakKruzice();

        //ISPIS KOMBINACIJE
        this.document.getElementById("komb1").style.backgroundColor = nizRandomBoja[0];
        this.document.getElementById("komb2").style.backgroundColor = nizRandomBoja[1];
        this.document.getElementById("komb3").style.backgroundColor = nizRandomBoja[2];
        this.document.getElementById("komb4").style.backgroundColor = nizRandomBoja[3];
    }


}











function fjaSortirajPogodakKruzice(){
    for(let i=0; i<4-1; i++){
        for(let j=i+1; j<4; j++){
            //ako yellow dolazi pre red
            //ili ako "" dolazi pre red
            //ili ako "" dolazi pre yellow -> "" uvek ide na kraj

            //provera za prazno

            if((nizPogodakKruzici[j] == "red" && nizPogodakKruzici[i] == "yellow") || (nizPogodakKruzici[j] == "red" && nizPogodakKruzici[i] == "") || (nizPogodakKruzici[j] == "yellow" && nizPogodakKruzici[i] == "")){
                var temp = nizPogodakKruzici[j];
                nizPogodakKruzici[j] = nizPogodakKruzici[i];
                nizPogodakKruzici[i] = temp;
            }
        }
    }
}



function fjaStaviPogodakKruzice(){
    var i = 0;

    if(n==5){
        document.getElementById("pogodak1").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak2").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak3").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak4").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }

    if(n==9){
        document.getElementById("pogodak5").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak6").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak7").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak8").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }

    if(n==13){
        document.getElementById("pogodak9").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak10").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak11").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak12").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }


    if(n==17){
        document.getElementById("pogodak13").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak14").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak15").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak16").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }


    if(n==21){
        document.getElementById("pogodak17").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak18").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak19").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak20").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }


    if(n==25){
        document.getElementById("pogodak21").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak22").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak23").style.backgroundColor = nizPogodakKruzici[i]; i++;
        document.getElementById("pogodak24").style.backgroundColor = nizPogodakKruzici[i]; i++;
    }
}