<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h3>{{ name }}</h3>
		<ul class="movies-view">
			{% for item in topList %}
			<li class="item">
				 <a href="{{ item.url }}">🎬 {{ item.name }}</a>
			 </li>
			{% endfor %}
		</ul>
	</body>
</html>
