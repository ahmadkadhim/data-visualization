require 'rubygems'
require 'nokogiri'
require 'open-uri'

relations = []
relations_pics = []
puts "ENTER A NAME"
search_name = gets.chomp

#searches last fm for whatever the user inputs
search_result_page = Nokogiri::HTML(open("http://www.last.fm/search?q=#{search_name}&type=all"))
#find the tags for the closest matching name and image of the searched name
search_result_name = search_result_page.css('div.result a')
search_result_image = search_result_page.css('div.result span.image img')
#get the data from inside the tags
y=(search_result_name[0]['href']).to_s
z=(search_result_image[0]['src']).to_s
#add these as the first entries in the arrays
relations << y + "\n"
relations << z + "\n"

File.open('artists.txt', 'w') do |f|
		page = Nokogiri::HTML(open("http://www.last.fm/#{y}"))
		bloated_artists = page.css('a.similar-artist')
		artist_pictures = page.css('a.similar-artist img.cover-image-image')
		for j in (0..(bloated_artists.length-1))
			relations << bloated_artists[j]['href'] + "\n"
			relations << artist_pictures[j]['src'] + "\n"
		end

		for j in (1..relations.length-1)
			if j%2 !=0
				relations[j-1].gsub!(/[\+]/," ")
				relations[j-1].gsub!(/\/*[a-zA-z]*\//,"")
			end
		end
	f.write("#{relations}\n")
end



	