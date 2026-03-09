function data() {
    function getThemeFromLocalStorage() {
      // if user already changed the theme, use it
      if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
      }
  
      // else return their preferences
      return (
        !!window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    }
  
    function setThemeToLocalStorage(value) {
      window.localStorage.setItem('dark', value)
    }
  
    return {
      dark: getThemeFromLocalStorage(),
      toggleTheme() {
        this.dark = !this.dark
        setThemeToLocalStorage(this.dark)
      },
      isSideMenuOpen: false,
      toggleSideMenu() {
        this.isSideMenuOpen = !this.isSideMenuOpen
      },
      closeSideMenu() {
        this.isSideMenuOpen = false
      },
      isNotificationsMenuOpen: false,
      toggleNotificationsMenu() {
        this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
      },
      closeNotificationsMenu() {
        this.isNotificationsMenuOpen = false
      },
      isProfileMenuOpen: false,
      toggleProfileMenu() {
        this.isProfileMenuOpen = !this.isProfileMenuOpen
      },
      closeProfileMenu() {
        this.isProfileMenuOpen = false
      },
      isPagesMenuOpen: false,
      togglePagesMenu() {
        this.isPagesMenuOpen = !this.isPagesMenuOpen
      },
      // Modal
      isModalOpen: false,
      trapCleanup: null,
      openModal() {
        this.isModalOpen = true
        this.trapCleanup = focusTrap(document.querySelector('#modal'))
      },
      closeModal() {
        this.isModalOpen = false
        this.trapCleanup()
      },
    }
  }  
$(document).ready(function(){
  $(document).on('click','.cusdelfn',function(e){
    e.preventDefault();
    var ordertxt = '';
    if ($(this).attr('data-orders')>0) {
      var ordertxt = $(this).attr('data-orders')+' order(s) from this user.';
    }
    if (prompt(ordertxt+(($(this).attr('data-msg'))?$(this).attr('data-msg'):'')+" Type 'yes' to delete") == 'yes') {
      window.location=$(this).attr('href');
    }
    else { alert('Invalid entry!');return false; }
  });
  $('#datatabletb').dataTable({
      pageLength: 100,
      stateSave: true,
      "order": [[ 2, "asc" ]],
      stateSaveCallback: function(settings,data) {
          localStorage.setItem( 'DataTables_' + settings.sInstance, JSON.stringify(data))
      },
      stateLoadCallback: function(settings) {
          return JSON.parse( localStorage.getItem( 'DataTables_' + settings.sInstance ))
      },
      columnDefs: [
        { orderable: false, targets: [0,1] }
      ]
  });
  $('.select2').select2();
  $('.select2tags').select2({tags: true, tokenSeparators: [',']});
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.prodlist').select2('destroy');
    $('.select2').select2('destroy');
  }
  var nowDate = new Date();
  if ($('.datetimepick').length) {
    $('.datetimepick').daterangepicker({
      "autoApply": true,
      "singleDatePicker": true,
      "opens": 'left',
      "startDate": ($('.datetimepick').attr('data-val')=='')?nowDate:$('.datetimepick').attr('data-val'),
      // "minDate": moment(),
      // "maxDate": moment().add(30, 'day'),
      "drops": "down",
      "alwaysShowCalendars": true,
      "autoUpdateInput": true,
      "showDropdowns": true,
      "timePicker": true,
      "timePickerIncrement": 15,
      locale: {
          format: 'DD-MM-Y hh:mm A'
      }
    });
  }
  if ($('.datetimepick1').length) {
    $('.datetimepick1').daterangepicker({
      "autoApply": true,
      "singleDatePicker": true,
      "opens": 'left',
      "startDate": ($('.datetimepick1').attr('data-val')=='')?nowDate:$('.datetimepick1').attr('data-val'),
      // "minDate": moment(),
      // "maxDate": moment().add(30, 'day'),
      "drops": "down",
      "alwaysShowCalendars": true,
      "autoUpdateInput": true,
      "showDropdowns": true,
      "timePicker": true,
      "timePickerIncrement": 15,
      locale: {
          format: 'DD-MM-Y hh:mm A'
      }
    });
  }
  $(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        autoApply: true,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        locale: {
          format: 'DD-MM-Y'
        }
    });
  });
  setTimeout(function() {
    $('.alert').not('.nofadealert').fadeOut('fast');
  }, 6000);
  $('.alert span.closebtn').click(function(e){
    e.preventDefault();
    $(this).parent('.alert').hide();
  });
  $("[data-limit]").keypress(function(e) {
    if($(this).val().length>$(this).attr('data-limit')){
      e.preventDefault();
      $(this).val($(this).val().replace(/\s+/g, ''));
    }
  });
  $("[data-limit]").on('input',function(e) {
    var limit = $(this).attr('data-limit');
    if($(this).val().length > limit){
      var val = $(this).val().replace(/\s+/g, '');
      $(this).val(val.slice(0,limit));
    }
  });
  $('.disonsubmit').find('button[type="submit"]').removeClass('disop');
  $('.disonsubmit').find('button[type="submit"]').text('Submit');
  $('.disonsubmit').on('submit',function(e){
    $(this).find('button[type="submit"]').addClass('disop');
    $(this).find('button[type="submit"]').text('Please Wait');
    if($(this).hasClass('confirm')){
      if (prompt("Type 'yes' to confirm") == 'yes') {
        return true;
      }
      else{
        alert('Invalid entry!');
        e.preventDefault();
        e.stopPropagation(); 
        $('.disonsubmit').find('button[type="submit"]').text('Submit');
        $('.disonsubmit').find('button[type="submit"]').removeClass('disop');
        return false;
      }
    }
  });
  $(document).on('click','.logoutbtn',function(e){
    e.preventDefault();
    localStorage.setItem('datefilt','');
    window.location=baseurl+"/backend/home/logout";
  });
  $('form').each(function(){
    var list  = $(this).find('*[tabindex]').sort(function(a,b){ return a.tabIndex < b.tabIndex ? -1 : 1; }),
        first = list.first();
    list.last().on('keydown', function(e){
        if( e.keyCode === 9 ) {
            first.focus();
            return false;
        }
    });
  });
  var config = {
                  removePlugins: [ 'RealTimeCollaborativeComments', 'RealTimeCollaborativeTrackChanges', 'RealTimeCollaborativeRevisionHistory', 'PresenceList', 'Comments', 'TrackChanges', 'TrackChangesData', 'RevisionHistory', 'AIAssistant', 'AICommands', 'AIUtils', 'CaseChange', 'FormatPainter', 'SlashCommand', 'MultiLevelList', 'TableOfContents', 'WProofreader', 'MathType', 'Pagination', 'PasteFromOfficeEnhanced', 'DocumentOutline', 'Template', 'Markdown' ],
                  toolbar: [ 'heading', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'alignment', 'bulletedList', 'numberedList', 'link', 'blockQuote', 'insertTable', '|', 'removeFormat', 'undo', 'redo' ], //'imageUpload',
                  ckfinder: {
                    uploadUrl: baseurl+'backend/editor/upload-image?csrf_test_name=58bb197f21d0de8349d9cd11dece8ada'
                  },
                  heading: {
                    options: [
                      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }, // Added H4
                      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' }, // Added H5
                      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }  // Added H6
                    ]
                  },
                  image: {
                    toolbar: [ 'resizeImage', 'imageTextAlternative' ],
                    resizeOptions: [
                      { name: 'resizeImage:original', label: 'Original', value: null },
                      { name: 'resizeImage:50', label: '50%', value: '50' },
                      { name: 'resizeImage:75', label: '75%', value: '75' },
                      { name: 'resizeImage:100', label: '100%', value: '100' }
                    ],
                    resizeUnit: '%',
                    resizeHandles: true
                  }
              };
   if (document.querySelector('#editor')) CKEDITOR.ClassicEditor.create(document.querySelector('#editor'), config).catch(error => console.error(error));
   if (document.querySelector('#editor1')) CKEDITOR.ClassicEditor.create(document.querySelector('#editor1'), config).catch(error => console.error(error));
   if (document.querySelector('#editor2')) CKEDITOR.ClassicEditor.create(document.querySelector('#editor2'), config).catch(error => console.error(error));
});