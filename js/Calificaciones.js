<script>
//Diego Uriel Serratos Ochoa
  let calif = [];
  
  for(let i =0; i<10;i++){
   x = prompt ("Ingrese la calificacion");
   x= parseFloat(x);
  calif.push(x);
  }
  let suma=0;
  let promedio;
  for(let i =0; i<10;i++){
    suma+=calif[i];
    promedio=suma/10;
  
  }
  document.write("El promedio final es: "+promedio+"<br>");
  document.write("Calificaciones mayores al promedio son: "+"<br>");
   for(let i =0; i<10;i++){
     if(calif[i]>=promedio)
       
       document.write(calif[i]+"<br>");
   }
</script>
