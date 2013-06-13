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
	
	for i in (1..14)
		if i%2 !=0
		html.write("<div id='#{(i-1)/2}image' class='artists'>")
		html.write("#{array[i-1]}")
		html.write("</div>\n")
		else
		html.write("<img id='#{(i-1)/2}link' class='link' src='#{array[i-1]}'/>\n")
		end
	end
end
