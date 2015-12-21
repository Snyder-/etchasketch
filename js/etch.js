 var mode = "normal";
 var size = 40;

 $(document).ready(function() {
   createGrid(size, size);

   $('#grid').on({
     mouseenter: function() {
       if (mode === "normal") {
         $(this).css({
           backgroundColor: "black"
         });
       } else if (mode === "rainbow") {
         $(this).addClass("rainbow-div-hover");
       } else if (mode === "trail") {
         $(this).css({ 
           backgroundColor: "black",
           transition: '0.1s'
         });
       } else if (mode === "shade") {
         $(this).css({
           opacity: "+=0.1"
         })
       }
     },
     mouseleave: function() {
       if (mode === "rainbow") {
         var colors = ["red", "green", "yellow", "blue", "orange", "purple"];
         randomColor = colors[Math.floor(Math.random() * colors.length)];
         $(this).css("backgroundColor", randomColor)
       } else if (mode === "trail") {
         $(this).css({ 
           backgroundColor: "#aaa",
           transition: '2s'
         });
       }
     }
   }, ".square"); //pass the element as an argument to .on

   $('#reset').click(function() {
     mode = "normal";
     resetGrid();
   })

   $('#rainbow').click(function() {
     mode = "rainbow";
     resetGrid();
   })
   $('#trail').click(function() {
     mode = "trail";
     resetGrid();
   })
   $('#shade').click(function() {
     mode = "shade";
     resetGrid();
     $('.square').css({
       opacity: 0,
       backgroundColor: 'black'
     });
   })

   $('button').click(function() {
     $(this).blur();
   });
 });

 function resetGrid() {
   destroyGrid();
   createGrid(size, size);
 }

 function destroyGrid() {
   $('#grid').empty();
 }

 function createGrid(columns, rows) {
   var width = (400 / columns) + 'px';
   var height = (400 / rows) + 'px';

   console.log("size %s, height %s, width %s ", rows, height, width);

   for (var i = 0; i < rows; i++) {
     $('#grid').append('<div class="row" id="row' + i + '"></div>');
     for (var j = 0; j < columns; j++) {
       $('#row' + i).append("<div style='width: " + width + "; height: " + height + "' class='square'></div>")
     }
   }
 }