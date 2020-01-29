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
	var websiteMeta = {"tag-nlp.html":"Posts tagged &ldquo;NLP&rdquo;","tag-tensorflow.html":"Posts tagged &ldquo;Tensorflow&rdquo;","category-invest-smart.html":"A list of posts in category &ldquo;Invest Smart&rdquo;","tag-machine-learning.html":"Posts tagged &ldquo;Machine Learning&rdquo;","tag-deeplearning.html":"Posts tagged &ldquo;DeepLearning&rdquo;","category-computer-science.html":"A list of posts in category &ldquo;Computer Science&rdquo;","category-mooc.html":"A list of posts in category &ldquo;MOOC&rdquo;","category-data-science.html":"A list of posts in category &ldquo;Data Science&rdquo;","52193231e3aba6f47039ec35c45a692f-3.html":"Applied Text Mining Course completed, Coursera provided by University of Michigan.\n","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","ecfd231eaacd0fd26db7102d4762a619-2.html":"Includes the knowledge this course covered, the pros and cons of this course.\nPosted in Toward Data Science in Medium\n","ad158cba43d512e8257effbe03c04b2d-1.html":"Course Review: Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","86c351e2ab38e74083f91e031a785eca-0.html":"A thorough review of this course, including all points it covered and some free materials provided by Laurence Moroney","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;"};
 
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