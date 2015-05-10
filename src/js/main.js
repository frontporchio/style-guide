      (function() { 
        var docElem = window.document.documentElement, didScroll, scrollPosition;

        // trick to prevent scrolling when opening/closing button
        function noScrollFn() {
          window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
        }

        function noScroll() {
          window.removeEventListener( 'scroll', scrollHandler );
          window.addEventListener( 'scroll', noScrollFn );
        }

        function scrollFn() {
          window.addEventListener( 'scroll', scrollHandler );
        }

        function canScroll() {
          window.removeEventListener( 'scroll', noScrollFn );
          scrollFn();
        }

        function scrollHandler() {
          if( !didScroll ) {
            didScroll = true;
            setTimeout( function() { scrollPage(); }, 60 );
          }
        };

        function scrollPage() {
          scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
          didScroll = false;
        };

        scrollFn();
                
        [].slice.call( document.querySelectorAll( '.modal-button' ) ).forEach( function( bttn ) {
          new UIMorphingButton( bttn, {
            closeEl : '.icon-close',
            onBeforeOpen : function() {
              noScroll();
            },
            onAfterOpen : function() {
              canScroll();
              classie.addClass( document.body, 'noscroll' );
              classie.addClass( bttn, 'scroll' );
            },
            onBeforeClose : function() {
              classie.removeClass( document.body, 'noscroll' );
              classie.removeClass( bttn, 'scroll' );
              noScroll();
            },
            onAfterClose : function() {
              canScroll();
            }
          } );
        } );

        // $('.workshop-description').readmore({
        //   speed: 400,
        //   collapsedHeight: 175,
        //   embedCSS: false,
        //   moreLink: '<small><a href="#" class="expand">more [+]</a></small>',
        //   lessLink: '<small><a href="#" class="expand">less [-]</a></small>'
        // });

      })();

 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");
  
         $('.event-text').readmore({
          speed: 400,
          collapsedHeight: 50,
          embedCSS: false,
          moreLink: '<small><a href="#" class="expand">more [+]</a></small>',
          lessLink: '<small><a href="#" class="expand">less [-]</a></small>'
        });