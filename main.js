
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
  SC.stream('/tracks/602050692',function(sound){

       $("#start").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
 SC.stream('/tracks/343049933',function(sound){

       $("#start1").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop1").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});

SC.stream('/tracks/342872847',function(sound){

       $("#start2").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop2").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
SC.stream('/tracks/62156784',function(sound){

       $("#start3").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop3").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
SC.stream('/tracks/458538366',function(sound){

       $("#start4").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop4").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});
