require 'rubygems'
require 'nokogiri'
require 'open-uri'

artist_list = ["music/2pac"]
counter = 0
artists = []
relations = []

File.open('artists.txt', 'w') do |f|
	for i in (1..2)
		page = Nokogiri::HTML(open("http://www.last.fm/#{artist_list[counter]}"))
		bloated_artists = page.css('a.similar-artist')
		relations << counter.to_s
		relations << "Artist:" + artist_list[counter] + "\n"
		for j in (0..(bloated_artists.length-1))
			artists << bloated_artists[j]['href']
			relations << bloated_artists[j]['href'] + "\n"
		end
		artists.each do |artist|
			if !artist_list.include?(artist)
			f.write("#{artist}\n")
			artist_list << artist
			end
		end 
		counter +=1
	end

	relations.each do |x|
		x.gsub!(/[\+]/," ")
		x.gsub!(/\/[a-zA-z]*\//,"")
	end
	
	f.write("\n\n\n\n Relations\n")
	f.write("#{relations}\n")
end



	