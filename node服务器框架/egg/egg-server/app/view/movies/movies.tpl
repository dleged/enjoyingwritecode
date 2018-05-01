<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<ul class="movies-view">
			{% for item in list %}
			<li class="item">
				 <a href="{{ item.url }}">🎬 {{ item.name }}</a>
			 </li>
			{% endfor %}
		</ul>
	</body>
</html>
