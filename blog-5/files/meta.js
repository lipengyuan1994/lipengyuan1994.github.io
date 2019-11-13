(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","category-kaggle.html":"A list of posts in category &ldquo;Kaggle&rdquo;","fd0d7f542c73a4c4964d713ff48e8088-3.html":"\t•\tA course project in Deep learning specialization instructed by Andrew Ng.\n\t•\tSolved two main problem: Face Verification \" Is this the claimed perso","14556132e92a38d03090bea8a5c54575-2.html":"Competition Link\n\nProject description:\n\t•\tParticipated Titanic survival prediction on Kaggle and ranked as top 12% (1215th\/10364)\n\t•\tPerformed feature","category-p-project.html":"A list of posts in category &ldquo;P Project&rdquo;","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;","archive-january-2019.html":"Archives for January 2019","category-c-project.html":"A list of posts in category &ldquo;C Project&rdquo;","bce9ad9e4f9260ce8fe550b200a21a0d-0.html":"Jun 2018 – Dec 2018\n\nProject description:\n\t•\tUsed NPL techniques: stemming, lemmatization, and TF-IDF, to extract features from unstructured review te"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();