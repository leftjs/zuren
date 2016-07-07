<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Hello MUI</title>
		<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<link rel="stylesheet" href="../css/mui.min.css">
		{% block css %}

		{% endblock %}
	</head>

	<body>
		<div class="mui-content">
			{% block body %}

			{% endblock %}
		</div>
		<script src="../js/mui.min.js"></script>
		{% block js %}

		{% endblock %}
	</body>

</html>
