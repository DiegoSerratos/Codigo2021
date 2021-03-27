<script>
  //Diego Uriel Serratos Ochoa
	class Dado{
  	lanzar(){
    	return Math.ceil(Math.random()*6);
  	}
	}
  
  a=0; b=0; c=0; d=0; e=0; f=0; g=0; h=0; x=0; y=0; z=0;
  for(let i=0;i<100;i++){
  let dado=new Dado();
  let suma = 0;
	for(let i=0;i<2;i++){
    
  suma+=dado.lanzar();
  }
  document.write(suma+" ");
    
 
   if(suma==2)
      a++;
   else
    if(suma==3)
      b++;
    else
     if(suma==4)
      c++;
     else
       if(suma==5)
       d++;
       else
        if(suma==6)
         e++;
        else
         if(suma==7)
          f++;
         else
          if(suma==8)
           g++;
          else
           if(suma==9)
            h++;
           else
            if(suma==10)
             x++;
            else 
              if(suma==11)
                y++;
              else 
                if(suma==12)
                  z++;      
  
  }
  document.write("<br><br>La suma de 2 callo: "+a);
  document.write("<br>La suma de 3 callo: "+b);
  document.write("<br>La suma de 4 callo: "+c);
  document.write("<br>La suma de 5 callo: "+d);
  document.write("<br>La suma de 6 callo: "+e);
  document.write("<br>La suma de 7 callo: "+f);
  document.write("<br>La suma de 8 callo: "+g);
  document.write("<br>La suma de 9 callo: "+h);
  document.write("<br>La suma de 10 callo: "+x);
  document.write("<br>La suma de 11 callo: "+y);
  document.write("<br>La suma de 12 callo: "+z);
   
</script>
