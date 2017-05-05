function init(page) {
  var module = page.template.module;
  var title, content, slide, navList;

  module.forEach(element => {
    switch(element.key){
      case 'title': title = element.value; break;
      case 'content': content = element.value; break;
      case 'slide': slide = element.value; break;
      case 'navList': navList = element.value; break;
    }
  });


  return genFile(title, content, slide, navList)
}

function genFile(title, content, slide, navList) {
  return genHTML(title, genSlide(slide) + genNav(title, navList) + genContent(title, content));
}

function genHTML(title, after) {
  var data = `
  <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>` + title + `</title>

        <!-- Bootstrap Core CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="assets/css/full-slider.css" rel="stylesheet">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>
      `
  data += after;
  data += `
      <!-- jQuery -->
      <script src="assets/js/jquery.js"></script>
      <!-- Bootstrap Core JavaScript -->
      <script src="assets/js/bootstrap.min.js"></script>

      <!-- Script to Activate the Carousel -->
      <script>
      $('.carousel').carousel({
          interval: 5000 //changes the speed
      })
      </script>

  </body>
  </html>
  `

  return data;
}

function genSlide(slide) {
  function genSlideIndicators(slide){
    var data;
    slide.forEach(function(element, index, array){
      if(index === 0) data += `<li data-target="#myCarousel" data-slide-to="0" class="active"></li>`;
      else data += `<li data-target="#myCarousel" data-slide-to="` + index + `"></li>`;
    })
    return data;
  }

  function genSlideInner(slide){
    var data;
    slide.forEach(function(element, index, array){
      if(index === 0)
        data += `
        <div class="item active">
            <!-- Set the first background image using inline CSS below. -->
            <div class="fill" style="background-image:url('` + element.src + `');"></div>
            <div class="carousel-caption">
                <h2>` + element.content + `</h2>
            </div>
        </div>`;
      else
        data += `
        <div class="item">
            <!-- Set the first background image using inline CSS below. -->
            <div class="fill" style="background-image:url('` + element.src + `');"></div>
            <div class="carousel-caption">
                <h2>` + element.content + `</h2>
            </div>
        </div>`;
    })
    return data;
  }

  var data = `
  <!-- Full Page Image Background Carousel Header -->
  <header id="myCarousel" class="carousel slide">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        ` + genSlideIndicators(slide) + `
      </ol>

        <!-- Wrapper for Slides -->
        <div class="carousel-inner">
        ` + genSlideInner(slide) + `
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </header>
  `
  return data;
}

function genNav(title, navList) {
  function genNavItem(list) {
    var data = '';
    list.forEach(function (element) {
      data += `<li><a href="` + element.link + `">` + element.name + `</a></li>`
    });
    return data;
  }
  var data = `
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">` + title + `</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">` + genNavItem(navList) + `
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    `
  return data;
}

function genContent(title, content) {
  var data = `
    <!-- Page Content -->
    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <h1>` + title + `e</h1>
                <p>` + content + `</p>
            </div>
        </div>

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->
    `

  return data;
}
