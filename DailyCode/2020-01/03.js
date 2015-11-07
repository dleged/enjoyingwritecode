function elementIsVisibleInViewport(el, partiallyVisible = false){
 let { top,bottom,left,right } = el.getBoundingClientRect();
 let { innerHeight,innerWidth } = window;
 return partiallyVisible
          ?
        (top > 0 && bottom < innerHeight) && (left > 0 && right < innerWidth)
          :
        top > 0 && top < innerHeight && left > 0 && left < innerWidth;
}
