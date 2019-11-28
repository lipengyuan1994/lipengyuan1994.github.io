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
	var websiteMeta = {"category-mac-os.html":"A list of posts in category &ldquo;Mac OS&rdquo;","e050cb0727ee442cc4ed744b5048f2cc-4.html":"\nHow I, a self-teaching international MS student, lunched a job in DS field. \n\nPublished on Medium : https:\/\/link.medium.com\/8q0DPrKwO1","category-think-about-life-ff08601d80034eba751fff09.html":"A list of posts in category &ldquo;Think About Life （思考人生）&rdquo;","078f1b58b17f3e2543ffd0ce40854c17-3.html":"The reason I built this website. ","c22b612b2a1abb6d27f66e8b4df4498a-0.html":"A basic summary on unsupervised learning.\n","category-random-thoughts.html":"A list of posts in category &ldquo;Random Thoughts&rdquo;","b18186739f4656f2936b541f1b7441a8-1.html":"Applied Text Mining Course completed, Coursera provided by University of Michigan.\n<iframe src=\"https:\/\/www.linkedin.com\/embed\/feed\/update\/urn:li:shar","category-data-science.html":"A list of posts in category &ldquo;Data Science&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","0461cce2d67cfa4c1a900cfd011ad403-5.html":"Includes the knowledge this course covered, the pros and cons of this course.\nPosted in Toward Data Science in Medium\n","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;"};
 
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