window.addEventListener('keydown', function(e){
    const audio = this.document.querySelector(`audio[data-key ="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
    key.classList.add('playing'); 
    if(!audio) return; 
    audio.currentTime = 0; 
    audio.play()

});
function removeTransition(e){
    console.log(e)
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing')  
}
const keys = document.querySelectorAll('.key'); 
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))