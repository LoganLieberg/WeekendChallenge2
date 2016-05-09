$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        var theChosen = 0;
        for (var i = 0; i < data.mu.length; i++) {
          $('#buttons').append('<button class="theCohort" data-id ="'+ i + '">' + i + '</button>');
          $('#0').addClass('displayed');
          var $el = $('#buttons').children().last();
          $el.data('name', data.mu[i].name);
          $el.data('username', data.mu[i].git_username);
          $el.data('shoutout', data.mu[i].shoutout);
          appendMu();
        }

        $('#next').on('click', function () {
          theChosen += 1
          if (theChosen > 21) {
            theChosen = 0;
          }
          $('#buttons').find('colored').remove();
          $('.name').text('Name:' + data.mu[theChosen].name);
          $('.username').text('Github Username:' + data.mu[theChosen].git_username);
          $('.shoutout').text('Shoutout:' + data.mu[theChosen].shoutout);
          $('.theCohort').addClass('colored');
        })
        $('#previous').on('click', function () {
          theChosen -= 1
          if (theChosen < 0) {
            theChosen = 21;
          }
          $('.name').text('Name:' + data.mu[theChosen].name);
          $('.username').text('Github Username:' + data.mu[theChosen].git_username);
          $('.shoutout').text('Shoutout:' + data.mu[theChosen].shoutout);

        })

      $('#buttons').on('click', '.theCohort', function () {
        $('.name').text('Name:' + $(this).data('name'));
        $('.username').text('Github Username:' + $(this).data('username'));
        $('.shoutout').text('Shoutout:' + $(this).data('shoutout'));
      });
        function appendMu () {
          $('#people').children().remove();
          $('#people').append('<p class="name"> Name: ' + data.mu[theChosen].name + '</p>');
          $('#people').append('<p class="username"> Github Username: ' + data.mu[theChosen].git_username + '</p>');
          $('#people').append('<p class="shoutout"> Shoutout: ' + data.mu[theChosen].shoutout + '</p>');
        }

        function toggleClass () {
          $('#buttons').toggleClass('colored')
        }
        console.log(data);
      }
    });
});
