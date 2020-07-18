/*************
    TRENDING
***************/

let trending = [
    {
        id: '',
        type: 'kpop Trending',
        name: '#블랙핑크',
        countTwitter: '426k',
    },
    {
        id: '',
        type: 'Trending in Vietnam',
        name: '#LoveLetterforGulf',
        countTwitter: '161k',
    },
    {
        id: '',
        type: 'kpop Trending',
        name: '#ROSÉ',
        countTwitter: '133k',
    },
    {
        id: '',
        type: 'Trending in Vietnam',
        name: '#LoveLetterforGulf',
        countTwitter: '161K',
    },
    {
        id: '',
        type: 'Trending in Vietnam',
        name: '#GeoDB',
        countTwitter: '1,413',
    },
    {
        id: '',
        type: 'kpop Trending',
        name: '#JENNIE',
        countTwitter: '147K',
    },
    {
        id: '',
        type: 'politics Trending',
        name: '#Trump',
        countTwitter: '3.38M',
    },


]

let sizeTrendingTwitter = 2
function renderTrending() {
    document.getElementById('trendingTwitter').innerHTML = ""
    trending.map((item, index) => {
        if (index < sizeTrendingTwitter) {
            document.getElementById('trendingTwitter').innerHTML +=
                `
                <li class="list-group-item d-flex justify-content-between py-2 ">
                    <div>
                        <p class="text-muted my-0">${item.type}</p>
                        <h6 class="my-0 "><strong>${item.name}</strong></h6>
                        <p class="text-muted mt-2">${item.countTwitter} Tweets</p>
                    </div>
    
                    <div class="d-inline dropdown show">
                        <!-- <i class="fas fa-sort-down"></i> -->
                        <a class="text-muted dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
                        </a>
    
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">This trend is spam</a>
                            <a class="dropdown-item" href="#">This trend is abusive or harmful</a>
                            <a class="dropdown-item" href="#">This trend is a duplicate</a>
                            <a class="dropdown-item" href="#">This trend is low quality</a>
                        </div>
                    </div>
                </li>
        `
        }
    })

}

/***********
    PEOPLE
 **********/

let people = [
    {
        id: '',
        name: 'Billgates',
        twitter: 'Billgates',
        img: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
        follow: false,
    },
    {
        id: '',
        name: 'Barack Obama',
        twitter: 'BarackObama',
        img: 'https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg',
        follow: false,
    },
    {
        id: '',
        name: 'Justin Bieber',
        twitter: 'justinbieber',
        img: 'https://pbs.twimg.com/profile_images/1222223941021794304/Bjz0lekG_400x400.jpg',
        follow: false,
    },
    {
        id: '',
        name: 'KATY PERRY',
        twitter: 'katyperry',
        img: 'https://pbs.twimg.com/profile_images/1281227355587895297/YO65QXoP_400x400.jpg',
        follow: false,
    },
    {
        id: '',
        name: 'Rihanna',
        twitter: 'rihanna',
        img: 'https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg',
        follow: false,
    },
    {
        id: '',
        name: 'Taylor Swift',
        twitter: 'taylorswift13',
        img: ' https://pbs.twimg.com/profile_images/1201195539888590848/eSnkZy2V_400x400.jpg',
        follow: false,
    }


]

let sizeFollwerTwitter = 3;
function renderFollower() {
    document.getElementById("peopleTwitter").innerHTML = ""
    people.map((item, index) => {
        if (index < sizeFollwerTwitter) {
            if (item.follow == false) {
                document.getElementById("peopleTwitter").innerHTML +=
                `
                    <div class="col-2 p-0 ">
                        <img class="rounded-circle w-100"
                            src="${item.img}"
                            alt="" style="width:50px; ">
                    </div>
                    <div class="col-6 m-0">
                        <!-- verify icon -->
                        <h5 class="small mb-0 mt-2"><strong>${item.name}</strong><img class="ml-1"
                                src="img/768px-Twitter_Verified_Badge.png" alt="" style="width: 20px"></h5>
    
                        <p>@${item.twitter}</p>
                    </div>
                    <div class="col-3 ml-3"><button onclick="toggleFollow(${index})" class="btn btn-outline-primary">Follow</button></div>
                    
                `
            } else {

                document.getElementById("peopleTwitter").innerHTML +=
                    `
                    <div class="col-2 p-0">
                        <img class="rounded-circle w-100"
                            src="${item.img}"
                            alt="" style="width:50px; ">
                    </div>
                    <div class="col-6 m-0">
                        <!-- verify icon -->
                        <h5 class="small mb-0 mt-2"><strong>${item.name}</strong><img class="ml-1"
                                src="img/768px-Twitter_Verified_Badge.png" alt="" style="width: 20px"></h5>
    
                        <p>@${item.twitter}</p>
                    </div>
                    <div class="col-3 ml-3"><button onclick="toggleFollow(${index})" class="btn btn-primary px-1 ml-0 mr-5">Following</button></div>
                `
            }
        }
    })

}

function showMoreFollwer() {
    sizeFollwerTwitter++;
    renderFollower()
}


function showMoreTrend() {
    sizeTrendingTwitter++;
    renderTrending()
}

function toggleFollow(index) {
    console.log(index)
    people[index].follow = !people[index].follow
    console.log(people[index].follow)
    renderFollower()
}

function renderHTML() {
    renderTrending()
    renderFollower()

}

renderHTML()