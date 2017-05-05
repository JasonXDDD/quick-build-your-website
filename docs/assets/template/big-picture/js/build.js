function init(page) {
  var module = page.template.module;
  var title, content, background, navList;

  module.forEach(element => {
    switch(element.key){
      case 'title': title = element.value; break;
      case 'content': content = element.value; break;
      case 'background': background = element.value; break;
      case 'navList': navList = element.value; break;
    }
  });

  return genFile(title, content, background, navList)
}

function genFile(title, content, background, navList) {
  return genHTML(title, genBackground(background, genNav(title, navList) + genContent(title, content)));
}

function genHTML(title, after) {
  var data = `
  <!DOCTYPE html>
  <html lang="en">
  <!-- Make sure the <html> tag is set to the .full CSS class. Change the background image in the full.css file. -->

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
      <link href="assets/css/the-big-picture.css" rel="stylesheet">

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
  </body>

  </html>
  `

  return data;
}

function genBackground(background, after) {
  var data = `
    <div class="full" style="background:url(` + background + `) no-repeat center center fixed; background-size: cover;">
      <div class="show">
  `
  data += after;
  data += `
      </div>
    </div>
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
    <nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
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
               <ul class="nav navbar-nav">` +
    genNavItem(navList) +
    `</ul>
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
            <div class="col-md-6 col-sm-12">
                <h1>` + title + `e</h1>
                <p>` + content + `</p>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
    `

  return data;
}
