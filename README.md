# Angular-6

Ex 1: Creating the components using angular/cli 
      Command => ng generate component <component name>  or ng g c <component name>
      
      
      Selectors
      ==========
      1.in component selector is 'app-root'(Above Example-1) but we don't need to specify always.
      If you define selector is selector:'app-root',then we can write directly selector name as html tag (Ex.<app-root>)
      2.you can write selector as attribute selector by using the [].
      Exanple:
              selector:'[app-root]'
              
       In component.html file we can use this selector any html tag.
       <div app-root> ......</div>
             Not only <div> tag you can use any tag.
       
       3.Other alternative selector is class selector by using .(dot)
       Example:
               selector:'.app-root'
               
        In component.html file you can use this as,
        
        <div class="app-root">.......</div>
            Not only <div> tag you can use any tag.
       
      
