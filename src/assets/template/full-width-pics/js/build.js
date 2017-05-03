function init(page) {
  var module = page.template.module;
  var title, background, content, logo, section, navList;

  module.forEach(element => {
    switch (element.key) {
      case 'title': title = element.value; break;
      case 'background': background = element.value; break;
      case 'content': content = element.value; break;
      case 'logo': logo = element.value; break;
      case 'navList': navList = element.value; break;
      case 'section': section = element.value; break;
    }
  });


  return genFile(title, background, logo, section, navList)
}

function genFile(title, background, logo, section, navList) {
  return genHTML(title, genNav(title, navList) + genHeader(background, logo) + genSection(section) + genFooter());
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
        <link href="assets/css/full-width-pics.css" rel="stylesheet">

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

function genHeader(background, logo){
  var data = `
  <!-- Full Width Image Header with Logo -->
  <!-- Image backgrounds are set within the full-width-pics.css file. -->
  <header class="image-bg-fluid-height" style="background:url(` + background + `) no-repeat center center fixed; background-size: cover;">
      <img class="img-responsive img-center" src="` + logo + `" alt="" width="500px">
  </header>
  `

  return data;
}



function genSection(section) {
  function genSectionImage(item){
    var data = `
    <section>
      <aside class="image-bg-fixed-height" style="background:url(` + item.src + `) no-repeat center center fixed; background-size: cover;"></aside>
    </section>
    `;
    return data;
  }

  function genSectionText(item){
    var data = `
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="section-heading">` + item.heading + `</h1>
            <p class="lead section-lead">` + item.lead + `</p>
            <p class="section-paragraph">` + item.paragraph + `</p>
          </div>
        </div>
      </div>
    </section>
    `;
    return data;
  }

  var data;
  section.forEach(function (element) {
    if(element.type === "text") data += genSectionText(element);
    else if(element.type === "image") data += genSectionImage(element);
  });
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

function genFooter() {
  var data = `
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </footer>
    `
  return data;
}
