require 'rubygems'
require 'nokogiri'
require 'open-uri'

File.open('divs_for_html.html','w') do |html|
	array = []
	File.open('artists.txt','r') do |text|
		while (line=text.gets)
			array << line.chomp
		end
	end
	html.write("<!doctype html>
	<html> \n
	<head> \n
	<title>Canvas Experiment</title>
	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'></script>\n
	<script src='canvas.js'></script>\n
	<link rel ='stylesheet' href='canvas.css' /> \n
	</head>\n
	<body>\n")
	for i in (1..14)
		if i%2 !=0
		html.write("<div id='#{(i-1)/2}link' class='artists' style='color:white;' >")
		html.write("#{array[i-1]}")
		html.write("</div>\n")
		else
		html.write("<img id='#{(i-1)/2}image' class='image' src='#{array[i-1]}'/>\n")
		end
	end
	html.write("
	</body>\n
	</html>")
end