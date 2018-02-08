
  var inputHeight, inputWidth, table, submit, widthValue, heightValue, colorValue, colorPicker;

  inputHeight = $("#input_height");
  inputWidth = $("#input_width");
  submit = $("#submit_data");
  table = $("#pixel_canvas");
  colorPicker = $("#colorPicker");
  heightValue = inputHeight.val();
  widthValue = inputWidth.val();
  colorValue = colorPicker.val();


  function makeGrid(height, width) {
      $(table).children().remove();
      for( i = 0; i < height; i++){
          table.append("<tr></tr>");
          for( j = 0; j < width; j++){
              let thisRow = table.find('tr').last();
              thisRow.append("<td></td>");
          }
      }
  }
  // Select color input

  function colorSettings(){
      $(colorPicker).on("change", function(){
          colorValue = $(this).val();
      });
      $('td').click(function(evt){
          if (evt.ctrlKey){
              $(this).toggleClass('hasparrot');
          }
          $(this).css("background-color", colorValue);
          if (evt.shiftKey){
              const colorValue = "#ffffff";
              $(this).css("background-color", colorValue);
          }
      });
  }

  // Select size input

  inputHeight.on("change", function(){

      heightValue = $(this).val();

  });

  inputWidth.on("change", function(){

      widthValue = $(this).val();

  });

  // When size is submitted by the user, call makeGrid()

  submit.on("click", function(){
      makeGrid(heightValue, widthValue);
      colorSettings();

  });
