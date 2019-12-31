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
	var websiteMeta = {"8d512b4cffda54b4336dbb6debb103c8-10.html":"￼","9d3d9a8a129505a34949d48f5d437d24-3.html":"https:\/\/www.coursera.org\/account\/accomplishments\/specialization\/7YQ7HQ3A8YAN","365ecdfc20eb283940d252eb239c7a22-2.html":"First personal website built, this website is used for showcase Patrick's data science projects, as well as his portfolio. He will also post his learn","c34777df459ccbbbe3d70457d00e388d-8.html":"Tensorflow in Practice : \nIntro tensorflow to DL and ML  started","archive-december-2019.html":"Archives for December 2019","archive-march-2019.html":"Archives for March 2019","archive-january-2019.html":"Archives for January 2019","6f5be5f03947e28b2b8313f11605dbac-9.html":"Just became an official author of Towards Data Science in Medium, will become a part-time writer for Medium. \nCheers. ","32573dd0be04b79893bdc678375652f0-7.html":"First article published at Medium. \nhttps:\/\/link.medium.com\/8q0DPrKwO1\n","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","5acb42df1a200d3f5e11060492338258-5.html":"New site deployed in Github, and put into use. \nWIll post blog on DS, BigData and any fields that I am interested. ","c21737a4c0446c0ac5972ab424784744-4.html":"https:\/\/www.datacamp.com\/statement-of-accomplishment\/course\/f9b6a4e69c5ed907de1e0d12624396944cf07455\n","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","archive-november-2019.html":"Archives for November 2019","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;"};
 
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