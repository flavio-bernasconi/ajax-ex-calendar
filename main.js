$( document ).ready(function() {

  // var nascita = prompt("DD-MM-YYYY");
  //
  // var ore = moment(nascita, "DD-MM-YYYY");
  // console.log(ore.isValid());
  // var giorno = ore.format("dddd");
  //
  // $(".data").html(giorno);


  var source = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0"


  var arrayEventi = [];
  var arrayGiorni = [];

  $.ajax(
      {
         url : source,
         method: "GET",
         success: function(data){
           if (data.success) {
             var oggetti = data.response;
             // console.log(oggetti);

             //fine ciclo for API
             for (var i = 0; i < oggetti.length; i++) {
              var evento = data.response[i].date;
              arrayEventi.push(evento);
            }
            //fine ciclo for

            //parte calendario
            var mese = 01;
            //trovo il numero di giorni nel mese
            var numeroGiorni = parseInt(moment("2018-" + mese + "", "YYYY-MM").daysInMonth());
            // console.log("numero di giorni mese",numeroGiorni);

            //ciclo in base al numero di giorni del mese
            for (var i = 1; i <= numeroGiorni; i++) {
              var giorno = i;

              var data = moment("" + mese + "/" + giorno + "/2018", "MM-DD-YYYY");
              //stampo giorno della settimana e mese in parola
              var giorno = data.format("dddd, MMMM	");
              var dataCompleta = i + " " + giorno;
              $(".data").append("<p>" + dataCompleta + "</p>");

              var daTrovare = data.format("YYYY-MM-DD");
              // $(".data").append("<p>" + daTrovare + "</p>");

              arrayGiorni.push(daTrovare);

            }

            console.log("date eventi ",arrayEventi);
            console.log("tutte le date",arrayGiorni);

            for (var i = 0; i < arrayGiorni.length; i++) {
              if (arrayEventi.includes(arrayGiorni[i])) {
                console.log("date in comune ai 2 array ",arrayGiorni[i]);
                $(".data").append("<p class='event'>" + arrayGiorni[i] + "</p>");
              }
              else {
                $(".data").append("<p>" + arrayGiorni[i] + "</p>");
              }
            }


            // intersection = arrayEventi.filter(x => arrayGiorni.includes(x));
            // console.log("elementi in comune",intersection);

           }

         },
         error: function(richiesta,stato,errore){
            console.log("c'è un problema con il server",richiesta,stato,errore);
         }
      }
    )




});
