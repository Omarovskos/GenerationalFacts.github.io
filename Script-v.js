let plants= [ "Some plants can eat smaller insects by luring them in.", 
    "There are over 200,000 identified plant species and the list is growing all the time. ",
    "Plants recognize their siblings (and give them preferential treatment)",
    "Plants sense gravity.",
    "Plants release distress signals when under stressPlants release distress signals when under stress",
    "An average size tree can provide enough wood to make 170,100 pencils.",
    "Plants know their season, but they dont use a calendar"];

let animals= ["Fleas can jump 350 times its body length.",
    "Hummingbirds are the only birds that can fly backwards.",
    "Crocodiles cannot stick their tongue out.",
    "Starfish do not have a brain.",
    "Slugs have 4 noses.",
    "Only female mosquitoes bite.",
    "Polar bear skin is black!",
    "The only mammal capable of flight is the bat."];
    
let flowers= ["Plants smell nice.",
    "Flowers are a subset of plants.",
    "Flowers can hear buzzing bees.",
    "There are over 300,000 different species of flowering plants in the world!" ];

let humans= ["Your eyes blink around 20 times a minute.",
    "Your ears never stop growing!",
    "Earwax is actually a type of sweat!",
    "The tongue is covered in about 8,000 taste-buds, each containing up to 100 cells helping you taste your food!"];

let psychology=["The brain can store an estimated 2,500,000 gigabytes.",
    "The human attention span is shorter than a goldfish.",
    "The average weight of the adult human brain is three pounds.",
    "You are about 1cm taller in the morning when you first get up than when you go to bed.",
    "Memories are stored for both short-term and long-term use at the same time.",
    "Vitamin B1 can help improve short- and long-term memory."];

let bosnia= ["Sarajevo hosted the Olympic Games in 1984.",
    "The first trams in Europe were used in Sarajevo from 1885.",
    "Bosnia and Herzegovina ranks 10th in the world in terms of coffee consumption."];

const button=document.getElementById("giveFact");

    
function getFact(category){
    return String(category[Math.floor(Math.random()*category.length)]);

}
button.addEventListener("click", function(){

    var selectedCategory=document.getElementById("selectedCategory").value;
    var factParagraph=document.getElementById("factParagraph");

    selectedCategory=="flowers" ? factParagraph.innerHTML=getFact(flowers) : 0;
    selectedCategory=="animals" ? factParagraph.innerHTML=getFact(animals) : 0;
    selectedCategory=="humans" ? factParagraph.innerHTML=getFact(humans) : 0;
    selectedCategory=="bosnia" ? factParagraph.innerHTML=getFact(bosnia) : 0;
    selectedCategory=="psychology" ? factParagraph.innerHTML=getFact(psychology) : 0;
    selectedCategory=="plants" ? factParagraph.innerHTML=getFact(plants) : 0;
    selectedCategory=="plants" ? factParagraph.innerHTML=getFact(flowers) : 0;
    

});
    



