

$(document).ready(function() {
 
    var current_page = 1;
    var max_page = 0;
    var page_main_tittles = [];
    var page_sub_tittles = [];
    var sub_tittles_colors = [];
    var banners = [];

    // updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles)

    $('.btn-next').click(function() { 
        current_page ++;
        updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles,sub_tittles_colors,banners)
    })
    $('.btn-prev').click(function() { 
        current_page --;
        updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles,sub_tittles_colors,banners)
    })


  var unique = + new Date();
  // console.log(unique);

  fetch("js/views.json?ver="+unique)
    .then(response => {
      return response.json();
    })
    .then(function(data) {  
      var count_page=  1;
      // console.log(data.today);

      data.jsonData.forEach(setTables);
      // data.yesterday.forEach(setViewsYesteday); 

      function setPages(item, index) { 

      }

      function setTables(item, index) { 

        // Pagination setup
        max_page++;
        page_main_tittles.push(item.tittle);
        page_sub_tittles.push((item.subTittleType == 'icon' ? "<a href='#' class='me-4 text-reset'>  <i class='fab fa-"+item.subTittle+"'></i> </a>" : item.subTittle ));
        sub_tittles_colors.push(item.subTittleColor);
        banners.push(item.banner)

        // Setup Table content for views per page
        // var total = 0;
        // var tittle = item.tittle;
        $('.append_pages').append(""+ 
        '<table name="'+item.tittle+'" class="table table-striped table-hover table-paging table-page-'+count_page+'">'+
        '    <thead>'+
        '      <tr > '+
        '        <th  class="lokals-item d-flex justify-content-between align-items-center"> '+
        '          <div class="p-2 bd-highlight link-dark post-title ">Districts</div> '+ 
        '        </th> '+
        '      </tr>'+
        '    </thead>'+
        '    <tbody class="append_table-'+count_page+'">  '+
        '  </tbody>'+
        '</table>'+
        "")
        
 
        var page = item.page;
        var redirectPage = item.redirectPage;
        item.viewData.forEach(setLokals);
        function setLokals(item, index) { 
          // total += item.views; 

          // Setup Lokal content and views for each page
          $('.append_table-'+count_page).append(""+
          '<tr> '+
          '    <td > '+
          '        <a href="'+(redirectPage == true? page+'?pageId='+count_page+'&lokal='+item.lokal : '#' )+'" class="lokals-item d-flex justify-content-between align-items-center" id="lokal_'+item.lokal+'">'+
          '          <div class="p-2 link-dark post-title">'+item.lokal+'</div> '+ 
          '        </a>'+
          '    </td>  '+
          '  </tr>  '+
          "")
        }

        // Just for empty space
        $('.append_table-'+count_page).append(""+
        '<tr> '+ 
        '  <td >        '+
        '    <div class="lokals-item lokals-footer d-flex justify-content-between align-items-center">'+
        '      <h3 class="p-2 link-dark post-title text-danger"></h3> '+
        '      <h3 class="p-2 link-dark view-counter text-danger "></h3>'+
        '    </div> '+
        '  </td>  '+
        '</tr>'+
          "")

          // Get total at the end of every page
        // $('.append_table-'+count_page).append(""+
        // '<tr> '+
        // '  <td >        '+
        // '    <div class="lokals-item lokals-footer d-flex justify-content-between align-items-center">'+
        // '      <h3 class="p-2 link-dark post-title text-danger">Total</h3> '+
        // '      <h3 class="p-2 link-dark view-counter text-danger total_view">'+total+'</h3>'+
        // '    </div> '+
        // '  </td>  '+
        // '</tr>'+
        //   "")

        count_page++;
      }
         
      updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles,sub_tittles_colors,banners)

    }).catch(function(error) {
            console.log(error);
    });
    
  fetch("js/settings.json")
    .then(response => {
      return response.json();
    })
    .then(function(data) {  

      $('.copyRights').text(data.copyrigth)
      $('.copyRightsSite').text(data.copyRightSite) 
      $(".copyRightsSite").attr("href", data.copyRightLink)
      
      data.social.forEach(setSocial); 
      function setSocial(item, index) { 

        $(".append-social").append("" +
      '<a href="'+item.link+'" class="me-4 text-reset">'+
      '  <i class="fab fa-'+item.icon+'"></i>'+
      '</a>'+
      '')

      }
      
    }).catch(function(error) {
            console.log(error);
    });
  
    function updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles,sub_tittles_colors,banners){
        // console.log(page_sub_tittles[0])
        $('.table-paging').hide()
        
        $('.table-page-'+current_page).show()
      

        $('.page-main-tittle').text(page_main_tittles[current_page-1])
        $('.page-tittle').html(''+page_sub_tittles[current_page-1])
        $('.page-tittle').css("color",sub_tittles_colors[current_page-1]);
        $(".banner-pic").attr("background-image","img/"+banners[current_page-1]);
        // $('.banner-pic').attr('src',"img/"+banners[current_page-1]).load(function(){
        //     this.width;   // Note: $(this).width() will not work for in memory images
        
        // });
        $('.banner-pic').css('background-image',"url(img/"+banners[current_page-1]+")");
        
        if(current_page <= 1){
            $('.btn-prev').hide()
        }else{ 
            $('.btn-prev').show()
        }

        if(current_page == max_page){
            $('.btn-next').hide()
        }else{ 
            $('.btn-next').show()
        }
    }
    
}) 