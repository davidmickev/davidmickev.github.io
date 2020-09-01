import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import randColor from './headerStyle';
import $ from 'jquery';
import './navBar.scss';
import gsap from 'gsap';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Array.from(document.getElementsByClassName('letter')).forEach(letter => {
  letter.addEventListener("mouseover", (e) => {
    letter.classList.add("hovered")
    letter.style.color = randColor();
    letter.style.opacity = ".9";
  })
  letter.addEventListener("animationend", (e) => {
    letter.classList.remove("hovered")
  })
})

gsap.timeline({ repeat:2, repeatDelay:0, yoyo:true})
    .to('.m', {duration:(i)=>[0.8,1.3][i], y:-10266, ease:'steps(29)', stagger:-0.3}, 0)
    .to('.frog', {duration:3, scale:1.1, transformOrigin:'50% 50%', ease:'power2', onComplete:swapMask}, 0)

let currentMask = 1;
function swapMask(){
  if (currentMask==3) currentMask = 1;
  else currentMask++;
  gsap.set('.m', {attr:{'xlink:href':'https://assets.codepen.io/721952/liquidMask'+currentMask+'.svg'}})
}

class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;

		// $('.et-hero-tab').click(function() { 
		// 	self.onTabClick(event, $(this)); 
		// });
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	
	onTabClick(event, element) {
		
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    	this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	

}

new StickyNavigation();


//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
