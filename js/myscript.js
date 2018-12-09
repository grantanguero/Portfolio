
    /* --External myscript.js file-- */

var quotesArray = ['Few things in the world are more powerful than a positive push. A smile. - Juan Ortiz','I would say to always follow your dream. And dream big. - Bill Gates','It is never too late to strengthen the foundation of faith. - W. Churchill','I believe that if you want to do a good job at something, then you are always analyzing the job that you have done to see if you can do it better. - Jeff Bezos','Just because something does not do what you planned it to do does not mean it is useless. - Thomas Edison','The whole idea is not about the choice between using or not using technology. The challenge is to use it right. - Linus Torvalds','One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man. - Elbert Hubbard'];

var randomNumber = Math.floor(Math.random()*quotesArray.length);
document.getElementById('quotes').textContent = '"' + quotesArray[randomNumber].split(' - ')[0] + '" - ' + quotesArray[randomNumber].split(' - ')[1];
