    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?php echo GLOBAL_URL ?>favicon.ico" rel="shortcut icon">
    <script src="https://kit.fontawesome.com/d57f3ece32.js" crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EMNPQ3YE4P"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-EMNPQ3YE4P');
      </script>
    <title><?php echo !empty($header['title']) ? $header['title'] :''; ?></title>
    <script>
        var STATIC_URL = "<?php echo STATIC_URL ?>";
        var GLOBAL_URL = "<?php echo GLOBAL_URL ?>";
        var UPLOAD_URL = "<?php echo UPLOAD_URL ?>";
        var SITE_URL   = "<?php echo site_url() ?>";
    </script>


    <?php
	echo static_file('web/css/lp.css');
	echo static_file('web/js/jquery-1.12.0.min.js');
	?>