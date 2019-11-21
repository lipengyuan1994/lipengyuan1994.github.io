<?php
	// Start session.
	session_start();
	
	// Set a key, checked in mailer, prevents against spammers trying to hijack the mailer.
	$security_token = $_SESSION['security_token'] = uniqid(rand());
	
	if ( ! isset($_SESSION['formMessage'])) {
		$_SESSION['formMessage'] = 'Fill in the form below to send me an email.';	
	}
	
	if ( ! isset($_SESSION['formFooter'])) {
		$_SESSION['formFooter'] = ' ';
	}
	
	if ( ! isset($_SESSION['form'])) {
		$_SESSION['form'] = array();
	}
	
	function check($field, $type = '', $value = '') {
		$string = "";
		if (isset($_SESSION['form'][$field])) {
			switch($type) {
				case 'checkbox':
					$string = 'checked="checked"';
					break;
				case 'radio':
					if($_SESSION['form'][$field] === $value) {
						$string = 'checked="checked"';
					}
					break;
				case 'select':
					if($_SESSION['form'][$field] === $value) {
						$string = 'selected="selected"';
					}
					break;
				default:
					$string = $_SESSION['form'][$field];
			}
		}
		return $string;
	}
?><!doctype html>  

<!--[if IE 7 ]><html lang="en" class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en" class="no-js"><!--<![endif]-->

<head>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132321370-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-132321370-1');
</script><link rel="mask-icon" href="../logo4.svg" color="#000000" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="robots" content="index, follow" />
		<meta name="generator" content="RapidWeaver" />
		<link rel="icon" href="http://lipengyuan1994.github.io/favicon.ico" type="image/x-icon" />
		<link rel="shortcut icon" href="http://lipengyuan1994.github.io/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" href="http://lipengyuan1994.github.io/apple-touch-icon.png" />
		
		<title>Contact Me | Patrick Li 🌰</title>
		<link rel="stylesheet" type="text/css" media="all" href="../rw_common/themes/allegro/consolidated.css?rwcache=595999777" />
		
		
		
		
		<link href='https://fonts.googleapis.com/css?family=Merriweather:400,400italic' rel='stylesheet' type='text/css'>
		<link href="https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
		<script type="text/javascript" src="../rw_common/themes/allegro/javascript.js?rwcache=595999777"></script>
		<script type="text/javascript" src="../rw_common/themes/allegro/scripts/function.js?rwcache=595999777"></script>
		<script type="text/javascript" src="../rw_common/themes/allegro/scripts/retina.js?rwcache=595999777"></script>
		
  		<script>RwSet={pathto:"../rw_common/themes/allegro/javascript.js?rwcache=595999777",baseurl:"https://lipengyuan1994.github.io/"};</script>
  		<script type="text/javascript" src="../rw_common/themes/allegro/scripts/modernizr.min.js?rwcache=595999777"></script>
  		
		<script type="text/javascript" src="../rw_common/themes/allegro/scripts/slideshow/jquery.easing.1.3.js?rwcache=595999777"></script>
  		
  		<script type="text/javascript" src="../rw_common/themes/allegro/scripts/sidebar/remove.js?rwcache=595999777"></script>
		
		
		
	    
	    
	    
	<!--[if lt IE 9]>
	<script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<style>.skiptonav, #menu {display:none;}</style>
	<![endif]-->

</head>
	
<body>
	<header>	
			<div id="headerWrapper">
				<div class="container">
		   			<a id="logo" href="https://lipengyuan1994.github.io/" title="Home"></a>
					<h1 id="title">Patrick Li 🌰</h1>
					<nav><ul><li><a href="../" rel="">HOME</a></li><li><a href="../blog-4/" rel="">BLOG</a></li><li><a href="../blog/" rel="">NEWS</a></li><li><a href="../page-4/" rel="">ABOUT ME</a></li><li><a href="../page-3/" rel="" class="parent">More About Me</a><ul><li><a href="../page-3/page/" rel="">CERTIFICATES</a></li><li><a href="../page-3/page-2/" rel="">COURSES</a></li><li><a href="../page-3/blog-5/" rel="">PROJECTS</a></li><li><a href="../page-3/blog-3/" rel="">COMPETITIONS</a></li></ul></li></ul></nav>
				</div><!-- end container -->
			</div><!--end headerWrapper-->	
			<nav id="navi-wrap">
				<ul id="navi">
					<ul><li><a href="../" rel="">HOME</a></li><li><a href="../blog-4/" rel="">BLOG</a></li><li><a href="../blog/" rel="">NEWS</a></li><li><a href="../page-4/" rel="">ABOUT ME</a></li><li><a href="../page-3/" rel="" class="parent">More About Me</a><ul><li><a href="../page-3/page/" rel="">CERTIFICATES</a></li><li><a href="../page-3/page-2/" rel="">COURSES</a></li><li><a href="../page-3/blog-5/" rel="">PROJECTS</a></li><li><a href="../page-3/blog-3/" rel="">COMPETITIONS</a></li></ul></li></ul>
				</ul>
			</nav><!-- /nav-wrap -->
		<div id="banner">
			<div id="extraContainer1"></div>
			<div id="freeStyle"></div>
		</div><!-- end banner-->
		<div id="bttmHeader">	
		<div class="container">
			<div class="sixteen columns over">
				<h2 id="slogan">There is nowhere to go, but up. </h2>
			</div><!-- header-inner -->
		</div><!-- end container -->	
		</div><!-- end bttmHeader -->
	</header>
	<section>
		<div class="wrapper_2">
			<div class="container">
				<div id="extraContainer2"></div>
			</div><!-- end container -->
		</div><!-- end wrapper -->
			<div class="container">
				<div class="single twelve columns"  id="main" role="main">
					
<div class="message-text"><?php echo $_SESSION['formMessage']; unset($_SESSION['formMessage']); ?></div><br />

<form class="rw-contact-form" action="./files/mailer.php" method="post" enctype="multipart/form-data">
	 <div>
		<label>Your Name</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element0'); ?>" name="form[element0]" size="40"/><br /><br />

		<label>Your Email</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element1'); ?>" name="form[element1]" size="40"/><br /><br />

		<label>Subject</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element2'); ?>" name="form[element2]" size="40"/><br /><br />

		<label>Message</label> *<br />
		<textarea class="form-input-field" name="form[element3]" rows="8" cols="38"><?php echo check('element3'); ?></textarea><br /><br />

		<div style="display: none;">
			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="<?php echo $security_token; ?>" />
		<input class="form-input-button" type="reset" name="resetButton" value="Reset???" />
		<input class="form-input-button" type="submit" name="submitButton" value="Submit!!!" />
	</div>
</form>

<br />
<div class="form-footer"><?php echo $_SESSION['formFooter']; unset($_SESSION['formFooter']); ?></div><br />

<?php unset($_SESSION['form']); ?>

				</div><!-- end single twelve column -->		
				<div class="sidebar four columns offset-by-one">
					<aside>
						<span id="asideTitle"></span>
						
						<div id="asidePlug"></div>
					</aside>
				</div><!-- sidebar four columns offset-by-one -->
			</div><!-- end container -->
		<div class="wrapper_3">
			<div class="container">
				<div id="extraContainer3"></div>
			</div><!-- end container -->
		</div><!-- end wrapper -->
		<div class="clear"></div>
	</section>
	<footer>
		<div class="wrapper">
			<div class="container">
				<div id="extraContainer4"></div>
			</div><!-- end container -->
		</div><!-- end wrapper -->
		<div class="container">
				<div id="extraContainer5"></div>
				<div id="breadcrumb"></div>
				<div id="left">&copy; 2019 Pengyuan Li <a href="#" id="rw_email_contact">Contact Me</a><script type="text/javascript">var _rwObsfuscatedHref0 = "mai";var _rwObsfuscatedHref1 = "lto";var _rwObsfuscatedHref2 = ":li";var _rwObsfuscatedHref3 = "pat";var _rwObsfuscatedHref4 = "ric";var _rwObsfuscatedHref5 = "k66";var _rwObsfuscatedHref6 = "6@g";var _rwObsfuscatedHref7 = "mai";var _rwObsfuscatedHref8 = "l.c";var _rwObsfuscatedHref9 = "om";var _rwObsfuscatedHref = _rwObsfuscatedHref0+_rwObsfuscatedHref1+_rwObsfuscatedHref2+_rwObsfuscatedHref3+_rwObsfuscatedHref4+_rwObsfuscatedHref5+_rwObsfuscatedHref6+_rwObsfuscatedHref7+_rwObsfuscatedHref8+_rwObsfuscatedHref9; document.getElementById("rw_email_contact").href = _rwObsfuscatedHref;</script></div>
		</div><!-- end container -->
	</footer>		
	</body>
</html>