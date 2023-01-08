// variables

const topheadlineBtn = document.getElementById("topheadline");
const generalBtn = document.getElementById("general");
const generalUSBtn = document.getElementById("usgeneral");
const generalTWBtn = document.getElementById("twgeneral");
const generalUKBtn = document.getElementById("ukgeneral");
const generalFRBtn = document.getElementById("frgeneral");
const generalAUBtn = document.getElementById("augeneral");
const generalCABtn = document.getElementById("cageneral");
const businessUSBtn = document.getElementById("usbusiness");
const businessTWBtn = document.getElementById("twbusiness");
const businessUKBtn = document.getElementById("ukbusiness");
const businessFRBtn = document.getElementById("frbusiness");
const businessAUBtn = document.getElementById("aubusiness");
const businessCABtn = document.getElementById("cabusiness");
const technologyUSBtn = document.getElementById("ustechnology");
const technologyTWBtn = document.getElementById("twtechnology");
const technologyUKBtn = document.getElementById("uktechnology");
const technologyFRBtn = document.getElementById("frtechnology");
const technologyAUBtn = document.getElementById("autechnology");
const technologyCABtn = document.getElementById("catechnology");
const scienceUSBtn = document.getElementById("usscience");
const scienceTWBtn = document.getElementById("twscience");
const scienceUKBtn = document.getElementById("ukscience");
const scienceFRBtn = document.getElementById("frscience");
const scienceAUBtn = document.getElementById("auscience");
const scienceCABtn = document.getElementById("cascience");
const healthUSBtn = document.getElementById("ushealth");
const healthTWBtn = document.getElementById("twhealth");
const healthUKBtn = document.getElementById("ukhealth");
const healthFRBtn = document.getElementById("frhealth");
const healthAUBtn = document.getElementById("auhealth");
const healthCABtn = document.getElementById("cahealth");
const entertainmentUSBtn = document.getElementById("usentertainment");
const entertainmentTWBtn = document.getElementById("twentertainment");
const entertainmentUKBtn = document.getElementById("ukentertainment");
const entertainmentFRBtn = document.getElementById("frentertainment");
const entertainmentAUBtn = document.getElementById("auentertainment");
const entertainmentCABtn = document.getElementById("caentertainment");

const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const usBtn = document.getElementById("usnews");
const searchBtn = document.getElementById("searchBtn");
//const googletrendBtn = document.getElementById("googletrend");


const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "b3a895bd57ae45569a45d4c2f8a2aeb8";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&apiKey=";
const USGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const TWGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=general&apiKey=";
const UKGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=";
const FRGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=general&apiKey=";
const AUGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=general&apiKey=";
const CAGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=";
const USBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const TWBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=business&apiKey=";
const UKBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=";
const FRBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=";
const AUBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=";
const CABUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=";
const USTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=";
const TWTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=technology&apiKey=";
const UKTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=";
const FRTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=";
const AUTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=";
const CATECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=";
const USSCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=";
const TWSCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=science&apiKey=";
const UKSCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=";
const FRSCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=";
const AUSCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=";
const CASCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=";
const USHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=";
const TWHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=health&apiKey=";
const UKHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=";
const FRHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=";
const AUHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=";
const CAHEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=";
const USENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const TWENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=tw&category=entertainment&apiKey=";
const UKENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=";
const FRENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=";
const AUENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=";
const CAENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=";
const CNN = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=";
const BBC_NEWS = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=";
const POLITICO = "https://newsapi.org/v2/top-headlines?sources=politico&apiKey=";
const CNBC = "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
//const GOOGLE_TREND = "https://cors-anywhere.herokuapp.com/https://trends.google.com.tw/trends/trendingsearches/daily?geo=TW";





// const bbcBtn = document.getElementById("test");


window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


topheadlineBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Top Headlines</h4>";
    fetchHeadlines();
});

//General
generalUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US General</h4>";
    fetchUSGeneralNews();
});
generalTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW General</h4>";
    fetchTWGeneralNews();
});
generalUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK General</h4>";
    fetchUKGeneralNews();
});
generalFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR General</h4>";
    fetchFRGeneralNews();
});
generalAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU General</h4>";
    fetchAUGeneralNews();
});
generalCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA General</h4>";
    fetchCAGeneralNews();
});


//Business
// businessBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Business</h4>";
//     fetchBusinessNews();
// });
businessUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US Business</h4>";
    fetchUSBusinessNews();
});
businessTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW Business</h4>";
    fetchTWBusinessNews();
});
businessUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK Business</h4>";
    fetchUKBusinessNews();
});
businessFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR Business</h4>";
    fetchFRBusinessNews();
});
businessAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU Business</h4>";
    fetchAUBusinessNews();
});
businessCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA Business</h4>";
    fetchCABusinessNews();
});


//Technology
technologyUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US Technology</h4>";
    fetchUSTechnologyNews();
});
technologyTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW Technology</h4>";
    fetchTWTechnologyNews();
});
technologyUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK Technology</h4>";
    fetchUKTechnologyNews();
});
technologyFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR Technology</h4>";
    fetchFRTechnologyNews();
});
technologyAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU Technology</h4>";
    fetchAUTechnologyNews();
});
technologyCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA Technology</h4>";
    fetchCATechnologyNews();
});

//Science
scienceUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US Science</h4>";
    fetchUSScienceNews();
});
scienceTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW Science</h4>";
    fetchTWScienceNews();
});
scienceUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK Science</h4>";
    fetchUKScienceNews();
});
scienceFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR Science</h4>";
    fetchFRScienceNews();
});
scienceAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU Science</h4>";
    fetchAUScienceNews();
});
scienceCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA Science</h4>";
    fetchCAScienceNews();
});


//Health
healthUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US Health</h4>";
    fetchUSHealthNews();
});
healthTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW Health</h4>";
    fetchTWHealthNews();
});
healthUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK Health</h4>";
    fetchUKHealthNews();
});
healthFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR Health</h4>";
    fetchFRHealthNews();
});
healthAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU Health</h4>";
    fetchAUHealthNews();
});
healthCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA Health</h4>";
    fetchCAHealthNews();
});

//Entertainment
entertainmentUSBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US Entertainment</h4>";
    fetchUSEntertainmentNews();
});
entertainmentTWBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW Entertainment</h4>";
    fetchTWEntertainmentNews();
});
entertainmentUKBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>UK Entertainment</h4>";
    fetchUKEntertainmentNews();
});
entertainmentFRBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>FR Entertainment</h4>";
    fetchFREntertainmentNews();
});
entertainmentAUBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>AU Entertainment</h4>";
    fetchAUEntertainmentNews();
});
entertainmentCABtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>CA Entertainment</h4>";
    fetchCAEntertainmentNews();
});


searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});



const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

//General
const fetchUSGeneralNews = async () => {
    const response = await fetch(USGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWGeneralNews = async () => {
    const response = await fetch(TWGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKGeneralNews = async () => {
    const response = await fetch(UKGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFRGeneralNews = async () => {
    const response = await fetch(FRGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUGeneralNews = async () => {
    const response = await fetch(AUGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCAGeneralNews = async () => {
    const response = await fetch(CAGENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

//Business
const fetchUSBusinessNews = async () => {
    const response = await fetch(USBUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWBusinessNews = async () => {
    const response = await fetch(TWBUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKBusinessNews = async () => {
    const response = await fetch(UKBUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFRBusinessNews = async () => {
    const response = await fetch(FRBUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUBusinessNews = async () => {
    const response = await fetch(AUBUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCABusinessNews = async () => {
    const response = await fetch(CABUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

//Technology
const fetchUSTechnologyNews = async () => {
    const response = await fetch(USTECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWTechnologyNews = async () => {
    const response = await fetch(TWTECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKTechnologyNews = async () => {
    const response = await fetch(UKTECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFRTechnologyNews = async () => {
    const response = await fetch(FRTECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUTechnologyNews = async () => {
    const response = await fetch(AUTECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCATechnologyNews = async () => {
    const response = await fetch(CATECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

//Science
const fetchUSScienceNews = async () => {
    const response = await fetch(USSCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWScienceNews = async () => {
    const response = await fetch(TWSCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKScienceNews = async () => {
    const response = await fetch(UKSCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFRScienceNews = async () => {
    const response = await fetch(FRSCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUScienceNews = async () => {
    const response = await fetch(AUSCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCAScienceNews = async () => {
    const response = await fetch(CASCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

//Health
const fetchUSHealthNews = async () => {
    const response = await fetch(USHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWHealthNews = async () => {
    const response = await fetch(TWHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKHealthNews = async () => {
    const response = await fetch(UKHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFRHealthNews = async () => {
    const response = await fetch(FRHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUHealthNews = async () => {
    const response = await fetch(AUHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCAHealthNews = async () => {
    const response = await fetch(CAHEALTH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

//Entertainment
const fetchUSEntertainmentNews = async () => {
    const response = await fetch(USENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchTWEntertainmentNews = async () => {
    const response = await fetch(TWENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
};
const fetchUKEntertainmentNews = async () => {
    const response = await fetch(UKENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchFREntertainmentNews = async () => {
    const response = await fetch(FRENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchAUEntertainmentNews = async () => {
    const response = await fetch(AUENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};
const fetchCAEntertainmentNews = async () => {
    const response = await fetch(CAENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
};

// const fetchGoogle = async () => {
//     const response = await fetch(GOOGLE_TREND);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         // newsDataArr = myJson.articles;
//         console.log(myJson);
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         newsdetails.innerHTML = "<h5>No data found.</h5>"
//         return;
//     }

// }

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn readmore btn-sm";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}




usBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US News</h4>";
    fetchUS();

});


const fetchUS = async () => {
    
    //CNN
    const responsecnn = await fetch(CNN+API_KEY);
    newsDataArr = [];
    if(responsecnn.status >=200 && responsecnn.status < 300) {
        const myJson = await responsecnn.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(responsecnn.status, responsecnn.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    //BBC

    const responsebbc = await fetch(BBC_NEWS+API_KEY); 
    if(responsebbc.status >=200 && responsebbc.status < 300) {
        const myJson = await responsebbc.json();
        newsDataArrbbc = myJson.articles;
    } else {
        // handle errors
        console.log(responsebbc.status, responsebbc.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr1 = newsDataArr.concat(newsDataArrbbc)

    //Politico

    const responsepolitico = await fetch(POLITICO+API_KEY);
    if(responsepolitico.status >=200 && responsepolitico.status < 300) {
        const myJson = await responsepolitico.json();
        newsDataArrpolitico = myJson.articles;
    } else {
        // handle errors
        console.log(responsepolitico.status, responsepolitico.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr2 = newsDataArr1.concat(newsDataArrpolitico)

    
    const responsecnbc = await fetch(CNBC+API_KEY);
    
    if(responsecnbc.status >=200 && responsecnbc.status < 300) {
        const myJson = await responsecnbc.json();
        newsDataArrcnbc = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr3 = newsDataArr2.concat(newsDataArrcnbc)
    

    t_displayNews();
}


function t_displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr3.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";
        
        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;       

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;
        

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);
       
        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}

//copyright
const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();
