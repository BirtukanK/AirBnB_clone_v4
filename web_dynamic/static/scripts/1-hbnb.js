$(document).ready(function () {
    $('input[type=checkbox]').click(function () {
      const myListName = [];
      const myId = [];
      $('input[type=checkbox]:checked').each(function () {
        const checkbox = $(this);
        myListName.push(checkbox.attr('data-name'));
        myId.push(checkbox.attr('data-id'));
      });
      if (myListName.length === 0) {
        $('.amenities h4').html('&nbsp;');
      } else {
        $('.amenities h4').text(myListName.join(', '));
      }
      console.log(myId);
    });
  });