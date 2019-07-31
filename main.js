$( document ).ready(function() {

  // var mesi = ["Gennaio","Febbraio"]

  var numero = 0;
  var source = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=" + numero + ""
  console.log(source);
  //parte calendario
  var mese = 01;
  //trovo il numero di giorni nel mese
  var numeroGiorni = parseInt(moment("2018-" + mese + "", "YYYY-MM").daysInMonth());
  // var numeroGiorni = parseInt(moment("2018-03", "YYYY-MM").daysInMonth());

  // console.log("numero di giorni mese",numeroGiorni);

  //ciclo in base al numero di giorni del mese
  for (var i = 1; i <= numeroGiorni; i++) {
    var giorno = i;

    var data = moment("" + mese + "/" + giorno + "/2018", "MM-DD-YYYY");

    //stampo giorno della settimana e mese in parola
    var cifra = data.format("YYYY-MM-DD");
    var parole = data.format("D dddd");
    // console.log(i,cifra);
    $(".data").append("<div class='box'><p data-date='" + cifra + "'>" + parole + "</p></div>")
    }


    

    $(".next").click(
      function(){
        numero++;
      }
    )





  $.ajax(
      {
         url : source,
         method: "GET",
         success: function(data){
           if (data.success) {
             var oggetti = data.response;
             // console.log(oggetti);

             for (var i = 0; i < oggetti.length; i++) {
               var oggeDate = oggetti[i].date;
               console.log("oggeDate",oggeDate);
               // var tronco = ogge.slice(9,ogge.length);
               var nomeEvento = oggetti[i].name;
               console.log(nomeEvento);

             }


             $(".data p").each(function(){
               var valoreAttributo = $(this).attr("data-date");
               console.log(valoreAttributo);
               if (valoreAttributo == oggeDate) {
                 $(this).text(oggeDate + " " + nomeEvento);
                 $(this).parent().addClass("event");

               }

             })
           }

         },
         error: function(richiesta,stato,errore){
            console.log("c'è un problema con il server",richiesta,stato,errore);
         }
      }
    )








});
