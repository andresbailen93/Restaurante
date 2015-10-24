/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
      // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '587202424561-d6lj78c9dktqmbjhssddi876a4cm550f.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/calendar"];
      var events;
      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEvents() {
        var request = gapi.client.calendar.events.list({
          'calendarId': 'xiiiinftel@gmail.com',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        });

        request.execute(function(resp) {
          events = resp.items;
          appendPre('Eventos Subidos:');

          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')')
            }
          } else {
            appendPre('No hay eventos.');
          }

        });
      }


      
      // Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/google-apps/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.
function creareserva(){
            var email=document.getElementById('email').value;
            var cantidad=document.getElementById('quantity').value;
            var resum='Reserva de '+email+' para '+cantidad+' personas.';
            
            var fecha = document.getElementById("fecha").value;
            var hora = document.getElementById("hora").value;
            var fechainicio = fecha+"T"+hora+":00+02:00";
            var fechaini=new Date(fechainicio);
        
            var resource = {
              "summary": resum.toString(),
              "location": "restauranteINFtel",
              "description":resum.toString(),
              "start": {
                "dateTime": fechaini.toISOString()
              },
              "end": {
                "dateTime": fechaini.toISOString()
                }
              };
            var request = gapi.client.calendar.events.insert({
              'calendarId': 'xiiiinftel@gmail.com',
              'resource': resource
            });
            request.execute(function(resp) {
              console.log(resp);
            });
            location.reload();
             
            var pre = document.getElementById('output');
            pre.innerHTML =   "<h2>Su reserva a nombre de: " +email+ " para "+ cantidad+" de personas .\n\
                        Se ha realizado con exito.</h2><br>\n\
                        <i>Ante cualquier incidencia contacte con nosotros.<br>\n\
                       Telefono de contacto: 952 001 022</i>"   

}
function eligedia(){
            var fecha = document.getElementById("fecha").value;
            var fechainicio = fecha;
            var dia=new Date(fechainicio).getDate();

            for (i = 0; i < events.length; i++) { 
                var event = events[i];
                var diaeventos=event.start.dateTime;
                diaeventos=new Date(diaeventos);
                diaeventos=diaeventos.getDate();
                
                var horaeventos=event.start.dateTime;
                horaeventos=new Date(horaeventos);
                horaeventos=horaeventos.getHours();
                
                
              if (events.length > 0 && dia==diaeventos) {
                   if(horaeventos.toString()==document.getElementById("horic3").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horic3");
                      parent.removeChild(child);    
                    } else{
                   if(horaeventos.toString()==document.getElementById("horic2").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horic2");
                      parent.removeChild(child);    
                  }else{
                  if(horaeventos.toString()==document.getElementById("horic1").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horic1");
                      parent.removeChild(child);    
                  }else{
                  if(horaeventos.toString()==document.getElementById("horic").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horic");
                      parent.removeChild(child);    
                  }else{
                  if(horaeventos.toString()==document.getElementById("horit3").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horit3");
                      parent.removeChild(child);    
                  }else{
                   if(horaeventos.toString()==document.getElementById("horit2").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horit2");
                      parent.removeChild(child);    
                  } 
                  if(horaeventos.toString()==document.getElementById("horit1").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horit1");
                      parent.removeChild(child);    
                  }else{
                  if(horaeventos.toString()==document.getElementById("horit").value){
                      var parent=document.getElementById("hora");
                      var child=document.getElementById("horit");
                      parent.removeChild(child);    
                  }
              }}
                  }}}}


              }
                  
              }
}
