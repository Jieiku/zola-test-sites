var fetchURL = '{{ get_url(path="search_index." ~ lang ~ ".json", trailing_slash=false, cachebust=true) | safe }}';
